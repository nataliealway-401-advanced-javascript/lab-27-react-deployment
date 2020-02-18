import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../components/counter/counter.js";

Enzyme.configure({ adapter: new Adapter() });

describe("< Counter />", () => {
  it("Is rendered when app starts", () => {
    const app = shallow(<Counter />);
    expect(app.find(".down").exists()).toEqual(true);
    expect(app.find(".up").exists()).toEqual(true);
    expect(app.find(".count").text()).toEqual("0");
  });

  it("count should decrement number when clicked", () => {
    const app = mount(<Counter />);
    const decrement = app.find(".down");

    decrement.simulate("click");
    expect(app.state().polarity).toEqual("negative");
    expect(app.find(".count").text()).toEqual("-1");
  });

  it("count should increment number when clicked", () => {
    const app = mount(<Counter />);
    const increment = app.find(".up");

    increment.simulate("click");
    expect(app.state().polarity).toEqual("positive");
    expect(app.find(".count").text()).toEqual("1");
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(< Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
