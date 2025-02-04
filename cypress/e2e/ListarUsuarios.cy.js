describe('List Users', () => {

  it('Validates status code on request success', () => {
    cy.request(' https://reqres.in/api/users?page=2').then((res)=>{
      console.log(res)
      expect(res.status).to.eq(200)
      expect(res.body.page).to.eq(2)
    })
  })
  
})