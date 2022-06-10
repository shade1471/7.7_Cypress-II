const body = require("../fixtures/userBody.json");

beforeEach(() => {});

it("Api test, add new user", () => {
  cy.request("POST", "/user", body).should((response) => {
    expect(response.status).to.eq(200);
  });
});

it("Should Get info about user name", () => {
  cy.getUser(body.username).should((response) => {
    expect(response.status).eq(200);
    expect(response.body).to.have.property("lastName", body.lastName);
    expect(response.body).to.have.property("email", body.email);
    expect(response.body.id).to.equal(body.id);
  });
});

it("Should delete user", () => {
  cy.removeUser(body.username).should((response) => {
    expect(response.status).eq(200);
  });
});

it("Should get user if it not exist", () => {
  cy.getUser(body.username).should((response) => {
    expect(response.status).eq(404);
    expect(response.body.message).to.eq("User not found");
  });
});
