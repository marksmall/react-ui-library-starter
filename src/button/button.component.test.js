import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Button from "./button.component";
// import { shallow } from 'enzyme';

describe("Button", () => {
  afterEach(cleanup);

  it("renders a button tag under normal circumstances", () => {
    const { container, getByText } = render(
      <Button onClick={() => {}} disabled={false}>
        Some Text
      </Button>
    );

    expect(getByText("Some Text")).toBeInTheDocument();
    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("renders an `a` tag if passed a `href` attribute", () => {
    const { container, getByText } = render(
      <Button disabled={false} href="foo">
        Some Text
      </Button>
    );

    expect(getByText("Some Text")).toBeInTheDocument();
    expect(container.querySelector("button")).not.toBeInTheDocument();
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  it("renders an `a` tag even if `onClick` is present and propagates it", () => {
    const clickMock = jest.fn();
    const { container, getByText } = render(
      <Button onClick={clickMock} disabled={false} href="foo">
        Some Text
      </Button>
    );

    const button = getByText("Some Text");
    expect(button).toBeInTheDocument();
    expect(container.querySelector("button")).not.toBeInTheDocument();
    expect(container.querySelector("a")).toBeInTheDocument();

    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalled();
  });

  xit("has the correct class for styling", () => {
    const component = shallow(<Button>Some Text</Button>);
    expect(component.find("button").hasClass("button")).toBe(true);
    expect(component.find("button").hasClass("disabled")).toBe(false);
    const linkComponent = shallow(<Button href="foo">Some Text</Button>);
    expect(linkComponent.find("a").hasClass("button")).toBe(true);
  });

  xit("propagates the click event properly", () => {
    const handler = jest.fn();
    const component = shallow(<Button onClick={handler}>Some Text</Button>);
    component.find("button").simulate("click");
    expect(handler).toHaveBeenCalled();
  });

  xdescribe("disabled", () => {
    it("adds the disabled class for styling", () => {
      const component = shallow(<Button disabled={true}>Some Text</Button>);
      expect(component.find("button").hasClass("disabled")).toBe(true);
      expect(component.props("disabled")).toBeTruthy();
    });

    it("doesn't propagates the click event", () => {
      const handler = jest.fn();
      const component = shallow(
        <Button disabled={true} onClick={handler}>
          Some Text
        </Button>
      );
      component.find("button").simulate("click");
      expect(handler).not.toHaveBeenCalled();
    });

    it("is set on the button, not just the style", () => {
      const handler = jest.fn();
      let component = shallow(
        <Button disabled={true} onClick={handler}>
          Some Text
        </Button>
      );
      expect(component.props("disabled")).toBeTruthy();

      // Re-render to check disabled attribute switches
      component = shallow(<Button onClick={handler}>Some Text</Button>);
      expect(component.prop("disabled")).toBeFalsy();
    });
  });

  xdescribe("active", () => {
    it("adds the active class for styling", () => {
      const component = shallow(<Button active={true}>Some Text</Button>);
      expect(component.find("button").hasClass("active")).toBe(true);
    });
  });

  xdescribe("type", () => {
    it("adds the round class for styling, when type attribute provided", () => {
      const component = shallow(
        <Button active={true} type="round">
          Some Text
        </Button>
      );
      expect(component.find("button").hasClass("round")).toBe(true);
    });
  });
});
