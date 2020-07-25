import React from 'react';
import {act, render} from '@testing-library/react';
import Delayed from "../Delayed";

describe('Delayed', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('render', () => {
        const { queryByTestId } = render(<Delayed waitBeforeShow={2000}><h1 data-testid={'header'}>Foo</h1></Delayed>);
        let element = queryByTestId('header');
        expect(element).toBeNull();

        act(() => {
            jest.advanceTimersByTime(2000);
        });
        element = queryByTestId('header');
        expect(element).not.toBeNull();
    });

    it('render many children', () => {
        const { queryByTestId } = render(<Delayed waitBeforeShow={2000}><h1 data-testid={'header'}>Foo</h1><h2 data-testid={'header2'}>Bar</h2></Delayed>);
        let element = queryByTestId('header');
        let element2 = queryByTestId('header2');
        expect(element).toBeNull();
        expect(element2).toBeNull();

        act(() => {
            jest.advanceTimersByTime(2000);
        });
        element = queryByTestId('header');
        element2 = queryByTestId('header2');
        expect(element).not.toBeNull();
        expect(element2).not.toBeNull();
    });
});
