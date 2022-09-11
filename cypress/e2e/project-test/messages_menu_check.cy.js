context('Messages_menu_check', () => {

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

    it('Messages_Check', () => {
        cy.get('.main-side-nav li').eq(1).click()
        // cy.get('.js_chat-new').eq(1).click()
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq(
        //         'https://shnatter.com/messages/new'
        //     )
        // })
        // cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.js_live-messages-alt').children('div').children('ul').children('li').last().children('a').click({force:true})
        const message = 'Hello'
        cy.get('.js_autosize').eq(0).type(`${message}{enter}`)

        cy.get('.js_delete-conversation').click()
        cy.get('#modal-confirm-ok').click()
    })
})