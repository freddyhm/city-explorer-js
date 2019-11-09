
describe('choosing an activity', function() {
    it('shows one or more activities displayed in the home page', function(){
        cy.visit('http://localhost:3000');
        cy.get("[data-test='activities']")
            .children()
            .each(($el) => {
                expect($el.text()).to.not.equal("");
            });
    });
});

describe('choosing an activity type', function() {

    it('returns the places associated with that activity type', function() {

        // cy.visit("http://localhost:3000");
        //
        // cy.get('[data-test="activity-name"')
        //     .type('eating');
        //
        // cy.get('[data-test="activity-submit"]')
        //      .click();
        //
        // cy.get('[data-test="place-result"]')
        //     .contains('Poutineville');
    });
});
