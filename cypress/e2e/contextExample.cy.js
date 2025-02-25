describe('ContextExample Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Ensure the correct route
  });

  it('should increment and decrement the counter', () => {
    cy.contains('Count: 0'); // Initial state

    cy.contains('Increment').click();
    cy.contains('Count: 1'); // Counter should increase

    cy.contains('Decrement').click();
    cy.contains('Count: 0'); // Counter should decrease
  });

  it('should reset the counter', () => {
    cy.contains('Increment').click().click(); // Increase twice
    cy.contains('Count: 2');

    cy.contains('Reset').click();
    cy.contains('Count: 0'); // Reset should bring it back to 0
  });

  it('should increment by a given value', () => {
    cy.get("input[type='number']").clear().type('5');
    cy.wait(600); // Debounce time + buffer
    cy.contains('Count: 5'); // Ensure the value updates correctly
  });
});
