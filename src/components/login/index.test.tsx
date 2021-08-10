import * as React from "react";
import { shallow } from "enzyme";
import Login from ".";

describe("Login Page", () => {
  let designerWrapper;

  beforeEach(() => {
    designerWrapper = shallow(<Login></Login>);
  });

  it("should be sum of 2 + 2 equal to 4 ", () => {
    expect(2 + 2).toBe(4);
  });

  it("should be designer content white board element", () => {
    expect(designerWrapper.length).toEqual(1);
  });
});
