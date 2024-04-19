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
        cy.get('div[class="returning-wrapper fieldset"] form div[class="buttons"] > button').click()
    })

    it("Productos", () => {
        cy.contains('Catalog').click()
        cy.contains('Products').click({force:true})
        cy.get('div[class="col-md-8"] > input[name="SearchProductName"]').type('Computer')
        cy.get('div[class="row"] button[]').click()
    })
})