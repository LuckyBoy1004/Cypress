context('Profile_menu_check', () => {

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

    it('Profile_Check', () => {
        cy.get('.main-side-nav li').eq(0).click()
        cy.get('.profile-buttons-wrapper a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/settings/profile'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.profile-tabs-wrapper li').eq(0).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor'
            )
        })

        cy.get('.profile-tabs-wrapper li').eq(1).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/friends'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.profile-tabs-wrapper li').eq(2).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/photos'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.profile-tabs-wrapper li').eq(3).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/videos'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.profile-tabs-wrapper li').eq(4).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/likes'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')
        
        cy.get('.profile-tabs-wrapper li').eq(5).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/groups'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.profile-tabs-wrapper li').eq(6).children('a').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/kalininviktor/events'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.js_profile-image-trigger').click()

        cy.get('.js_profile-cover-trigger').click()

        cy.get('.card-body').eq(1).children('div').eq(6).children('a').click({force:true})
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/settings/profile/location'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.card-body').eq(1).children('div').eq(7).children('a').click({force:true})
        cy.location().should((loc) => {
            expect(loc.href).to.eq(
                'https://shnatter.com/settings/profile/education'
            )
        })
        cy.visit('https://shnatter.com/kalininviktor')

        cy.get('.colored-text-wrapper').children('textarea').click()

        cy.get('.dropdown-toggle').eq(2).click({force:true})
        cy.get('[data-title="Text"]').click({force:true})

        // cy.get('.chat-sidebar-content').children('div').children('div').eq(0).click({force:true})
        
        // const message = 'Hello'
        // cy.get('.js_post-message').eq(2).type(`${message}{enter}`, {force:true})
        
        cy.get('.no-gutters').children('div').eq(0).children('div').children('a').click()
        cy.visit('https://shnatter.com/kalininviktor')
    })
})