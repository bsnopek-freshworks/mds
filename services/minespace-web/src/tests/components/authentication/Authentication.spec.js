import React from "react";
import { shallow } from "enzyme";
import { HeaderDropdown } from "@/components/layout/HeaderDropdown";

const dispatchProps = {};
const props = {};

const setupDispatchProps = () => {
  dispatchProps.logoutUser = jest.fn();
};

const setupProps = () => {
  props.keycloak = { logout: jest.fn() };
  props.isAuthenticated = true;
};

beforeEach(() => {
  setupDispatchProps();
  setupProps();
});

describe("Authentication", () => {
  it("renders properly", () => {
    const wrapper = shallow(<HeaderDropdown {...props} {...dispatchProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
