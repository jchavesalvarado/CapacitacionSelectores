describe("Test selector Clase", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get('.email').clear().type('admin@yourstore.com')
        cy.get('.password').clear().type('admin')
        cy.get('button[type="submit"]').click()
    })

})