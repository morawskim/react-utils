import {act, renderHook} from '@testing-library/react-hooks'
import useOnlineStatus from "../useOnlineStatus";

describe('Hook useOnlineStatus', () => {
    it('should use default value', () => {
        const mock = jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
        const { result } = renderHook(() => useOnlineStatus());
        expect(result.current).toBe(false);
        expect(mock).toBeCalled();
    });

    it('should bind to events', () => {
        const mock = jest.spyOn(window, 'addEventListener').mockReturnValue(undefined);
        renderHook(() => useOnlineStatus())
        expect(mock).toBeCalledWith('online', expect.any(Function));
        expect(mock).toBeCalledWith('offline', expect.any(Function));
    });

    it('should change online status on events', () => {
        const map: Record<string, any> = {};
        const mock = jest.spyOn(window, 'addEventListener').mockImplementation((type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) => {
            map[type] = listener;
            return;
        });
        const { result } = renderHook(() => useOnlineStatus());

        expect(mock).toBeCalled();
        expect(result.current).toBeTruthy();
        act(() => {
            jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
            map['offline']();
        });
        expect(result.current).toBeFalsy();

        act(() => {
            jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
            map['online']();
        });
        expect(result.current).toBeTruthy();
    });
});
