context('Articles_menu_check', () => {

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

    it('Articles_Check', () => {
        cy.get('.main-side-nav li').eq(5).click()
        cy.get('[href="https://shnatter.com/blogs/new"]').eq(0).click({force:true})
        const title = 'My Art'
        const text = 'This is worldwide art'
        const tags = 'Pictures'
        cy.get('[name=title]').type(`${title}`)
        cy.get('[name=text]').type(`${text}`, {force:true})
        const pic = 'art.jpeg'
        cy.get('[name=file]').attachFile(pic)
        cy.get('.x-image').children('form').submit()
        // cy.get('[name=file]').contains(pic)
        cy.get('[name=category]').select('Home')
        cy.get('[name=tags]').type(`${tags}`)
        cy.get('[type=checkbox]').eq(2).check({force:true})
        cy.get('.card-footer').children('button').click({force:true})
        cy.visit('https://shnatter.com/articles')

        cy.get('div.post-media-meta').children('a').should('have.value', title)

        // cy.get('[href="https://shnatter.com/search/hashtag/SGE"]').click()
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq(
        //         'https://shnatter.com/search/hashtag/SGE'
        //     )
        // })
        // cy.visit('https://shnatter.com/articles')

        // cy.get('.js_like-page').first().click({force:true})

        // cy.get('.js_join-group').first().click({force:true})

        // cy.get('.js_interest-event').first().click({force:true})

        // cy.get('[href="https://shnatter.com/settings/invitations"]').click({force:true})
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq(
        //         'https://shnatter.com/settings/invitations'
        //     )
        // })
        // cy.visit('https://shnatter.com/articles')
    })
})