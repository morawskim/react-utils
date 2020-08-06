import {act, renderHook} from '@testing-library/react-hooks'
import usePageVisibility from "../usePageVisibility";

describe('Hook usePageVisibility', () => {
    it('should use default value', () => {
        const mock = jest.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce("hidden");
        const { result } = renderHook(() => usePageVisibility());
        expect(result.current.hidden).toBeTruthy();
        expect(result.current.visibilityState).toEqual("hidden");
        expect(mock).toBeCalled();
    });

    it('should bind to events', () => {
        const mock = jest.spyOn(document, 'addEventListener').mockReturnValue(undefined);
        renderHook(() => usePageVisibility())
        expect(mock).toBeCalledWith('visibilitychange', expect.any(Function));
    });

    it('should change visibility status on events', () => {
        const map: Record<string, any> = {};
        const mock = jest.spyOn(document, 'addEventListener').mockImplementation((type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) => {
            map[type] = listener;
            return;
        });
        const { result } = renderHook(() => usePageVisibility());

        expect(mock).toBeCalled();
        expect(result.current.hidden).toBeFalsy();
        act(() => {
            jest.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce("hidden");
            map['visibilitychange']();
        });
        expect(result.current.hidden).toBeTruthy();
        expect(result.current.visibilityState).toEqual("hidden");

        act(() => {
            jest.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce("visible");
            map['visibilitychange']();
        });
        expect(result.current.hidden).toBeFalsy();
        expect(result.current.visibilityState).toEqual("visible");
    });
});
