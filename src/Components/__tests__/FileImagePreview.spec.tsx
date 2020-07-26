import React from 'react';
import {act, render} from '@testing-library/react';
import FileImagePreview from "../FileImagePreview";
import MockInstance = jest.MockInstance;

const dataBase64 = 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAG1BMVEXMzMyWlpaxsbGqqqq3t7fFxcWjo6OcnJy+vr5AT8FzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVQImWNgoBFQVkmBka7i4QxQklmRkUGlAUQyqLCHM4SBSYYkoCqVhiSwDioCAPhiB33L/sGeAAAAAElFTkSuQmCC';
class MockFileReader {
    abort = jest.fn();
    onloadend = jest.fn();
    onerror = jest.fn();
    result = `data:image/png;base64,${dataBase64}`;
    readAsDataURL = () => {
        setTimeout(() => this.onloadend(), 1000);
    }
}

describe('FileImagePreview', () => {
    const arrayBuffer = Uint8Array.from(window.atob(dataBase64), c => c.charCodeAt(0));
    let mockFileReader: MockInstance<FileReader, any>;
    let file: File;
    let fileReaderMockInstance;

    beforeEach(() => {
        jest.useFakeTimers();
        mockFileReader = jest.spyOn(window, 'FileReader').mockImplementation(() => {
            fileReaderMockInstance = new MockFileReader();
            return fileReaderMockInstance as unknown as FileReader
        });
        file = new File([arrayBuffer], "20x20.png", {type: 'image/png'});
    });

    afterEach(() => {
        jest.useRealTimers();
        mockFileReader.mockRestore();
    });

    it('render loading component when the file has not been read yet', () => {
        const { queryByTestId, container } = render(<FileImagePreview alt={'image alt'} className={'foo'} file={file} loadingElement={<span data-testid={'loader'}>Loading</span>} />);
        let element = queryByTestId('loader');
        expect(element).not.toBeNull();

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        element = queryByTestId('loader');
        const img = container.querySelector('img');
        expect(element).toBeNull();
        expect(img).not.toBeNull();

        expect(img!.getAttribute('alt')).toEqual('image alt');
        expect(img!.classList).toHaveLength(1);
        expect(img!.classList.contains('foo')).toBeTruthy();
    });

    it('call onFileError, when read file failed', () => {
        const mock = jest.fn();
        mockFileReader = jest.spyOn(window, 'FileReader').mockImplementation(() => {
            fileReaderMockInstance = new MockFileReader();
            fileReaderMockInstance.readAsDataURL = function() {
                setTimeout(() => this.onerror(), 1000);
            };
            return fileReaderMockInstance as unknown as FileReader
        });

        render(<FileImagePreview onFileError={mock} file={file} loadingElement={<span>loading</span>} />);
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(mock).toBeCalled();
    })
});
