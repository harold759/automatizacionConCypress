/// <reference types = "Cypress" />

beforeEach(() => {
    
    cy.fixture('datos_prueba').then(function (datos) {
        this.datos_prueba = datos
        cy.visit(this.datos_prueba.url)
    })

    

})



describe('Pruebas pagina de inicio', function(){

    it ('Validacion encabezado superior', function(){

        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')
    })

    it ('Validacion de columnas', function(){

        cy.get('#online_banking_features > :nth-child(1) > h4').should('be.visible')
        cy.get('#online_banking_features > :nth-child(1) > p').should('be.visible')
        cy.get('#money_map_link').should('be.visible')
       
    })

    it ('Validacion parte inferior de la pagina (footer)', function(){
   
    })

 
})


describe('Prueba E2E Transferencia de fondos', function(){

    it ('Prueba 1 transferencia de fondos de ahorros a t.credito', function(){

        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(3)
        cy.get('#tf_toAccountId').select(5)
        cy.get('#tf_amount').type('500')
        cy.get('#tf_description').type('Prueba de transferencia de fondos')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction.')
        cy.get('.board-content').should('be.visible')

    })

 
})