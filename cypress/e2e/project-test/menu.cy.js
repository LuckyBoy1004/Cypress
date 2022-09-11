context('menu', () => {
  
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

  it('is have menu', () => {
    cy.get('.main-side-nav li').should('have.length', 19)
  })
  it('Profile', () => {
    cy.get('.main-side-nav li').eq(0)
      .children('a').children('span').should('have.text','Kalinin Viktor')
    cy.request('https://shnatter.com/kalininviktor')
      .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('Messages', () => {
    cy.get('.main-side-nav li').eq(1)
      .children('a').contains('Messages')
    cy.request('https://shnatter.com/messages')
      .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('Settings', () => {
    cy.get('.main-side-nav li').eq(2)
      .children('a').contains('Settings')
    cy.request('https://shnatter.com/settings')
      .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('Shnatter token', () => {
    cy.get('.main-side-nav li').eq(3)
      .children('a').contains('Shnatter token')
    cy.request('https://shnatter.com/settings/shnatter_token')
      .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('My Articles', () => {
    cy.get('.main-side-nav li').eq(5)
      .children('a').contains('My Articles')
    cy.request('https://shnatter.com/articles')
      .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('My Products', () => {
    cy.get('.main-side-nav li').eq(6)
      .children('a').contains('My Products')
    cy.request('https://shnatter.com/products')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Saved Posts', () => {
    cy.get('.main-side-nav li').eq(7)
      .children('a').contains('Saved Posts')
    cy.request('https://shnatter.com/saved')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Memories', () => {
    cy.get('.main-side-nav li').eq(8)
      .children('a').contains('Memories')
    cy.request('https://shnatter.com/memories')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('People', () => {
    cy.get('.main-side-nav li').eq(10)
      .children('a').contains('People')
    cy.request('https://shnatter.com/people')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Pages', () => {
    cy.get('.main-side-nav li').eq(11)
      .children('a').contains('Pages')
    cy.request('https://shnatter.com/pages')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Groups', () => {
    cy.get('.main-side-nav li').eq(12)
      .children('a').contains('Groups')
    cy.request('https://shnatter.com/groups')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Events', () => {
    cy.get('.main-side-nav li').eq(13)
      .children('a').contains('Events')
    cy.request('https://shnatter.com/events')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('News', () => {
    cy.get('.main-side-nav li').eq(14)
      .children('a').contains('News')
    cy.request('https://shnatter.com/blogs')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Marketplace', () => {
    cy.get('.main-side-nav li').eq(15)
      .children('a').contains('Marketplace')
    cy.request('https://shnatter.com/market')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Real estate', () => {
    cy.get('.main-side-nav li').eq(16)
      .children('a').contains('Real estate')
    cy.request('https://shnatter.com/real-estate')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Offers', () => {
    cy.get('.main-side-nav li').eq(17)
      .children('a').contains('Offers')
    cy.request('https://shnatter.com/offers')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
  it('Jobs', () => {
    cy.get('.main-side-nav li').eq(18)
      .children('a').contains('Jobs')
    cy.request('https://shnatter.com/jobs')
        .should((response) => {
        expect(response.status).to.eq(200)
    })
  })
})