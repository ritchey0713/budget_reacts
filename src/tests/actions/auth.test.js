import { login, logout } from "../../actions/auth"

test("Should generate login action object", () => {
  const uid = "abc123"
  const action = login(uid)

  expect(action).toEqual({
    type: "LOGIN",
    uid
  })
})

test("should create log out action object", () => {
  const action = logout()
  expect(action).toEqual({
    type: "LOGOUT"
  })
})