/* eslint-disable */

describe('Counter', () => {
  it('should have a headline', () => {
    cy.visit('http://localhost:8080')
    cy.get('h1')
  })

  it('should have initial count of 0', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-test="count-output"]')
      .contains(0)
  })

  it('should increment on click', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-test="count-output"]').invoke('text').then(initialCount => {
      const expectedCount = parseInt(initialCount) + 1
      cy.get('[data-test="button-increment"]').click()
      cy.get('[data-test="count-output"]').contains(expectedCount)
    }) 
  })

  it('should increment correnctly for multiple clicks', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-test="count-output"]').invoke('text').then(initialCount => {
      const clickCount = 3
      const expectedCount = parseInt(initialCount) + clickCount
      Array.apply(null, {length: clickCount}).map(Number.call, Number).forEach(() => cy.get('[data-test="button-increment"]').click())
      cy.get('[data-test="count-output"]').contains(expectedCount)
    })     
  })

  it('should display a message', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-test="button-display"]').click()
    cy.get('[data-test="display"]')
  })
})
