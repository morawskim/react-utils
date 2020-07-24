import React from 'react';
import {render} from '@testing-library/react';
import {Ring} from '../Loaders';

describe('Ring', () => {
    it('render', () => {
        const { container } = render(<Ring/>);
        const element = container.querySelector<HTMLElement>('div.lds-ring');

        expect(element).not.toBeNull();
        expect(element!.classList.length).toEqual(1);
    });

    it('render with custom color', () => {
        const color = 'red';
        const { container } = render(<Ring type={"style"} color={color}/>);
        const element = container.querySelector<HTMLElement>('div.lds-ring');

        expect(element).not.toBeNull();
        expect(element!.style.color).toEqual(color)
    });

    it('render with custom CSS class', () => {
        let className = 'foo';
        const { container } = render(<Ring type={"class"} className={className}/>);
        const element = container.querySelector<HTMLElement>('div.lds-ring');

        expect(element).not.toBeNull();
        expect(element!.classList.length).toEqual(2);
        expect(element!.classList.contains(className)).toBeTruthy();
    });
});
