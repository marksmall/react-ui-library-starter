import React from "react";

import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import LoadMask from "./load-mask.component";

describe("LoadMask Component", () => {
  afterEach(cleanup);

  it("should render the LoadMask", () => {
    const { container } = render(<LoadMask />);

    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container.querySelector("svg circle")).toBeInTheDocument();
    expect(container.querySelector("svg g circle")).toBeInTheDocument();
  });
});
