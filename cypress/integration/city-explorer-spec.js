describe('choosing an activity', function() {

    it('shows categories displayed in the home page', function(){
       cy.visit('http://localhost:3000');

       cy.get("[data-test='place-categories']").then(() => {
           cy.get("[data-test='place-category']");
       });
    });

    it('returns the place associated with that activity if found', function() {

        cy.visit("http://localhost:3000");

        cy.get('[data-test="activity-name"')
            .type('eating');

        cy.get('[data-test="activity-submit"]')
             .click();

        cy.get('[data-test="place-result"]')
            .contains('Poutineville');
    });

    it('returns an error message if no place is associated with the user activity is found', function() {

        cy.visit("http://localhost:3000/");

        cy.get('[data-test="activity-name"')
            .type('running');

        cy.get('[data-test="activity-submit"]')
            .click();

        cy.get('[data-test="place-result"]')
            .contains('Could not find place!');
    });
});
