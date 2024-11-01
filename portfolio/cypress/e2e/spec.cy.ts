describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.localhost.com:3000");
  });
});
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
