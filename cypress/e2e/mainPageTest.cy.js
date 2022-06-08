describe("Main Pages suites", () => {
  it("Should check main page's client", () => {
    cy.visit("/client/index.php");
    cy.get(".page-header__title").should("be.visible");
    cy.get(".page-nav").should("be.visible");
  });

  it("Should check main page's admin", () => {
    cy.visit("/admin");
    cy.get(".page-header__subtitle").contains("Администраторррская");
  });
});
