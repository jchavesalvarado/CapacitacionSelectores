describe("Test selector Atributo", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('.oxd-button').click()
    })

    it("Información - Dashboard", () => {
        cy.contains('Directory').click()

    })

})