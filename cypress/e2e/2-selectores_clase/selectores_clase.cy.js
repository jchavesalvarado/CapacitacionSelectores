describe("Test selector Clase", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear()
        cy.get("#Email").type("admin@yourstore.com")
        cy.get("#Password").clear()
        cy.get("#Password").type("admin")
        //cy.get('buttom:enabled').click()
        cy.get('.button-1').click()
    })

    it("Productos", () => {
        cy.contains('Catalog').click()
        cy.contains('Products').click({force: true})
        cy.get('#products-grid tbody tr:first-child').find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody tr:nth-child(3)').find('a').click()
        cy.get('[name="save"]').click({force: true})
        cy.get('#products-grid tbody tr:nth-child(4)').find('a').click()
        cy.get('[name="save"]').click({force: true})
        cy.get('#products-grid tbody tr:last-child').find('a').click()
        cy.go('back')

    })
})