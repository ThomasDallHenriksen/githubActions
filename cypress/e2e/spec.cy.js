describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('[type=text]').type('new task');
    cy.get("button").contains("Add").click();
    cy.get("li").contains('new task').should("exist");
  })


})