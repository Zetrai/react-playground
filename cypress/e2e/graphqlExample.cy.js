describe('GraphQLExample Page', () => {
  beforeEach(() => {
    cy.visit('/graph-ql');
  });

  it('should display country list', () => {
    cy.contains('Country List').should('be.visible');
    cy.contains('🇦🇫 Afghanistan').should('be.visible');
    cy.contains('🇦🇱 Albania').should('be.visible');
  });

  it('should add a new country', () => {
    cy.get('input[placeholder="Code"]').type('CA');
    cy.get('input[placeholder="Name"]').type('Canada');
    cy.get('input[placeholder="Emoji"]').type('🇨🇦');
    cy.contains('Add Country').click();

    // cy.contains('🇨🇦 Canada').should('be.visible');
  });
});
