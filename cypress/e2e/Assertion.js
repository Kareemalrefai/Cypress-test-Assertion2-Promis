///<reference types="Cypress" />

describe('Assertion Test', () => {
    it('Assertion Test2', () => {
        cy.visit("https://automationteststore.com/")

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.get('input[name="first_name"]').type("kareemalrefai")
        cy.get('input[id="ContactUsFrm_email"]').type("Test@Assertion.com")
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type("Test Assertion")
        cy.get('button[title="Submit"]').click()

        
        // ------------------------ Text Assertion ----------------------------------------------
        cy.get(".mb40 > :nth-child(3)").should('have.text',"Your enquiry has been successfully sent to the store owner!")



        //------------------title Assertion -------------------
        cy.document().should("have.property","title").and("eq","Contact Us") //Another way 
        cy.title().should("include",'Us') //Another way
        cy.title().should('eq','Contact Us') //Another way



        //-------------------------- URL Assertion-----------------------------
        cy.url().should('eq','https://automationteststore.com/index.php?rt=content/contact/success') //Another way
        cy.location('href').should('include','contact') //Anoter way
        cy.location().its('href').should('include','contact') //Another way
        cy.url().should('include','contact') //Nother way



        //----------- Promis Part -----------------------------------------
        


    });
});