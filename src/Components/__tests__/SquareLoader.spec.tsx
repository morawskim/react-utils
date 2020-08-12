import React from "react";
import { render } from "@testing-library/react";
import { Square } from "../SquareLoader";

describe("Two Point", () => {
  it("render", () => {
    const { container } = render(<Square />);
    const element = container.querySelector<HTMLElement>("span.square");

    expect(element).not.toBeNull();
    expect(element!.classList.length).toEqual(1);
  });

  it("render with custom CSS class", () => {
    let className = "black";
    const { container } = render(
      <Square type={"class"} className={className} />
    );
    const element = container.querySelector<HTMLElement>("span.square");

    expect(element).not.toBeNull();
    expect(element!.classList.length).toEqual(2);
    expect(element!.classList.contains(className)).toBeTruthy();
  });
});
