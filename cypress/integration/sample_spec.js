describe('entering an activity', function() {
    it('returns the place associated with that activity', function() {

        cy.visit('http://localhost:3000/');

        cy.get('[data-test="activity-name"')
            .type('eating');

        cy.get('[data-test="activity-submit"]')
             .click();

        cy.get('[data-test="place-result"]')
            .should('have.value', 'Poutineville');
    });
});