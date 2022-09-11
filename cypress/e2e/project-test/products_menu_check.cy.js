context('Products_menu_check', () => {

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

    it('Products_Check', () => {
        cy.get('.main-side-nav li').eq(6).click()
        cy.get('[data-url="posts/product.php?do=create"]').eq(1).click({force:true})
        
        // const name = 'Coin'
        // const price = '20'
        // const location = 'Ukraine'
        // const message = 'This is worldwide product.'
        // cy.get('[name=name]').type(`${name}`)
        // cy.get('[name=price]').type(`${price}`)
        // cy.get('[name=category]').select(3)
        // cy.get('#rent2').check()
        // cy.get('[name=status]').select(1)
        // cy.get('[name=location]').type(`${location}`)
        // cy.get('[name=message]').type(`${message}`,{force:true})
        const pic = 'art.jpeg'
        cy.get('.add').eq(0).children('form').children('input').attachFile(pic)
        cy.get('.add').eq(0).children('form').submit()
        cy.get('.add').eq(0).children('form').children('input').contains(pic)
        // const filter = 'filter.txt'
        // cy.get('.add').eq(1).children('form').children('input').attachFile(filter)
        // cy.get('.add').eq(1).children('form').submit()
        // cy.get('.add').eq(1).children('form').children('input').contains(filter)
        // cy.get('.js_publisher-btn').click()
        // cy.get('[name=tags]').type(`${tags}`)
        // cy.get('[type=checkbox]').eq(2).check({force:true})
        // cy.get('.card-footer').children('button').click({force:true})
        // cy.visit('https://shnatter.com/products')

        // cy.get('[href="https://shnatter.com/search/hashtag/SGE"]').click()
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq(
        //         'https://shnatter.com/search/hashtag/SGE'
        //     )
        // })
        // cy.visit('https://shnatter.com/products')

        // cy.get('.js_like-page').first().click({force:true})

        // cy.get('.js_join-group').first().click({force:true})

        // cy.get('.js_interest-event').first().click({force:true})

        // cy.get('[href="https://shnatter.com/settings/invitations"]').click({force:true})
        // cy.location().should((loc) => {
        //     expect(loc.href).to.eq(
        //         'https://shnatter.com/settings/invitations'
        //     )
        // })
        // cy.visit('https://shnatter.com/products')
    })
})