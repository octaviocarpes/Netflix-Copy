import ls from "local-storage"
const storageMock = {
  USERS: [],
  METRICS: {
    REGISTER_METRICS: {
      registers: 0
    },
    LOGIN_METRICS: {
      logins: 0
    },
    USER_METRICS: {
      users: [],
      topUser: null,
      totalUsers: 0
    },
    MOVIES_METRICS: {
      movies: [],
      totalViews: 0,
      topMovie: null
    }
  }
}

describe("Go to project Login page", () => {
  it("Should visit the login page", () => {
    cy.visit("http://localhost:8080/")
    cy.url().should('include', '/')
  })
})

describe("Perform a register", () => {
  it("Should register a user into the local db.", () => {
    const key = btoa("kappakeppo");
    ls.set("SESSION", storageMock)
    ls.set(key, { username: "kappa", password: "keppo", id: key })
    cy.get("#login-form-input").type("kappa")
    cy.get("#login-form-password-input").type("keppo")
    cy.get("#login-form-password-input").type("kappa")
    cy.get("#login-form-button").click()
    cy.url().should('include', '/movies')
  })
})