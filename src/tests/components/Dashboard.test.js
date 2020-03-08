import React from 'react'
import { shallow } from "enzyme"

import Dashboard from "../../components/DashBoard"

test("Should render the dashboard component", () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper).toMatchSnapshot()
})