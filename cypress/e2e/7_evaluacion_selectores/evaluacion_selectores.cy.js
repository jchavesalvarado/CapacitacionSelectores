describe("Test selectores: find, parent, eq", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear()
        cy.get("#Email").type("admin@yourstore.com")
        cy.get("#Password").clear()
        cy.get("#Password").type("admin")
        cy.get('div[class="returning-wrapper fieldset"] form div[class="title"] ~ div[class="buttons"] > button').click()

    })

    it("Productos", () => {
        cy.contains("Catalog").click()
        cy.contains("Products").click({force: true})
        cy.get('#products-grid tbody').children().should('have.length', 15)
        cy.contains("Products").click({force: true})
        cy.get('#products-grid tbody').children().eq(3).find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody').children().eq(10).find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody').children().eq(9).find('a').click()
        cy.go('back')
        cy.get('#products-grid tbody').children().eq(7).find('a').click()
    })
})