import React from "react"
import {shallow } from "enzyme"
import { Header } from "../../components/Header"


test("should render header component", () => {
  // const renderer = new ShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()

  const wrapper = shallow(<Header />)
  // expect(wrapper.find("h1").text()).toBe("Budget Reacts!")
  expect(wrapper).toMatchSnapshot()
})