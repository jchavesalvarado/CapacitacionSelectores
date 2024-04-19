describe("Test selector Combinador", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear()
        cy.get("#Email").type("admin@yourstore.com")
        cy.get("#Password").clear()
        cy.get("#Password").type("admin")

    })

    it("Productos", () => {
    })
})