describe("Test selector Atributo", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Información - Dashboard", () => {

    })

})