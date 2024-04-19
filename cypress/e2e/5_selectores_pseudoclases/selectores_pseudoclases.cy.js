describe("Test selectores: nth-child, first-child, last-child, enabled", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear()
        cy.get("#Email").type("admin@yourstore.com")
        cy.get("#Password").clear()
        cy.get("#Password").type("admin")
        cy.get('button:enabled').click()

    })

    it("Productos", () => {
        cy.contains('Catalog').click()
        cy.contains('Products').click({force:true})
        cy.get('#products-grid tbody tr:nth-child(4)').should('have.length', 1)
        cy.get('#products-grid tbody tr:nth-child(4)').find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody tr:first-child').find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody tr:last-child').find('a').click()
    })
})