import { BaseClient } from '../utils/BaseClient'

describe('Deletes a User', () => {
  const baseClient = new BaseClient();

  it('Validates response status code on request success', () => {
    const id = 2
    baseClient.deleteUser(id).then((res)=>{
      expect(res.status).to.eq(204)
    })
  })

  it('Validates response status code on trying to delete user without id', () => {
    cy.request("https://reqres.in/api/users").then((res)=>{
      expect(res.status).to.eq(204)
    })
  })
 
})