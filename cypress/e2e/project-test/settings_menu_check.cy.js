context('Settings_menu_check', () => {

    beforeEach(  () => {
        cy.visit('https://shnatter.com')
        // auth login
        const email = 'kalininviktor848@gmail.com'
        const password = '1topnotch@'
        cy.get('[name=username_email]').type(`${email}`)
        cy.get('[name=password]').eq(0).type(`${password}`, {force:true})
        cy.get('[name=remember]').check({force:true})
        cy.get('form').eq(0).submit({delay:20000})
        cy.wait(2000)
    })

    it('Settings_Check', () => {
        cy.get('.main-side-nav li').eq(2).click()
        cy.get('[data-url="core/activation_email_resend.php"]').click()
        // cy.window().click()
        cy.get('.text-right').click({force:true})
    })
})