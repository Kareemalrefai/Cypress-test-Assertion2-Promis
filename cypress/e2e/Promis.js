///<reference types="Cypress" />

describe('Assertion Test', () => {
    it('Assertion Test2', () => {
        cy.visit("https://automationteststore.com/")

        
        // cy.get('.prdocutname').contains('BeneFit Girl Meets Pearl').click().then(function (element) {
        //     console.log(element.text()+ " hass been added")

            
        // })

        cy.get('a[href]').contains('Shipping').click().then(function(SHIPPING) {
           
            cy.get('.contentpanel > .btn').click()
    
            console.log(SHIPPING.text()+ " *Shipping Has been Click*")
        })


        cy.get('a[href]').contains('Contact Us').click().then(function(ContactUs) {
            cy.get('input[name="first_name"]').type('Kareem ALrefai')
            cy.get('input[id="ContactUsFrm_email"]').type('Test@Promis.com')
            cy.get('textarea[id="ContactUsFrm_enquiry"]').type('Promis Test -- Print Text')
            cy.get('button[title="Submit"]').click()
            cy.get('a[title="Continue"]').click()

            console.log(ContactUs.text()+" *ContactUs Has been Add*")
            
        })



        cy.get('a[href]').contains('Site Map').click().then(function (SiteMap) {
            console.log(SiteMap.text()+" *Sitmap has been click*")

            
        })

        




    });

});
