context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('https://shnatter.com')
  })

  // Manage HTTP requests in your app
  it('make an XHR request', () => {

    cy.request('https://shnatter.com')
      .should((response) => {
        expect(response.status).to.eq(200)
        
        //expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
})