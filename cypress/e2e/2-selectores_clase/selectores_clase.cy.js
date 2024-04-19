describe("Test selector Clase", () => {

    it("Iniciar Sesión", () => {
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.visit("https://admin-demo.nopcommerce.com/login")

        cy.get("#Email").clear();
        cy.get('#Email').type('admin@yourstore.com') 
        cy.get('button.login-button').click();

    })
    it("Productos", () => {
        cy.contains('Catalog').click()
        cy.contains('Products').click({force: true})
        cy.wait(5000);
        cy.get('#products-grid tbody tr:nth-child(1)').find('a').click()
        cy.wait(5000);
        cy.get('[name="save"]').click({force: true})
        cy.get('#products-grid tbody tr:nth-child(2)').find('a').click()
        cy.wait(5000);
        cy.get('[name="save"]').click({force: true})
        cy.get('#products-grid tbody tr:nth-child(3)').find('a').click()
        cy.wait(5000);
        cy.get('[name="save"]').click({force: true})
    })
})