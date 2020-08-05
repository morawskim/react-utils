import React from "react";
import { render } from "@testing-library/react";
import { TwoPoint } from "../TwoPointLoader";

describe("Two Point", () => {
  it("render", () => {
    const { container } = render(<TwoPoint />);
    const element = container.querySelector<HTMLElement>("span.two-point");

    expect(element).not.toBeNull();
    expect(element!.classList.length).toEqual(1);
  });

  it("render with custom CSS class", () => {
    let className = "black";
    const { container } = render(
      <TwoPoint type={"class"} className={className} />
    );
    const element = container.querySelector<HTMLElement>("span.two-point");

    expect(element).not.toBeNull();
    expect(element!.classList.length).toEqual(2);
    expect(element!.classList.contains(className)).toBeTruthy();
  });
});
