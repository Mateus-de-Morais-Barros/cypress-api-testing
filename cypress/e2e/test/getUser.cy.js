import { BaseClient } from '../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";

describe('List One User', () => {
  const baseClient = new BaseClient();
  
  it('Validates status code on request success', () => {
    baseClient.listOneUser(2).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body.data.id).to.eq(2)
      console.log(res.body);
    })
  })

  it('Validates status code on request failure', () => {
    cy.request('https://reqres.in/api/users/').then((res)=>{
      expect(res.status).to.eq(400)
    })
  })

  it('Validates status code when user is not found', () => {
    baseClient.listOneUser(23).then((res)=>{
      expect(res.status).to.eq(404)
    })
  })

  it('Validates status code when trying to find user -1', () => {
    baseClient.listOneUser(-1).then((res)=>{
      expect(res.status).to.eq(404)
    })
  })













  // it('Validates response structure on request success', () => {
  //   cy.fixture("userInfo.json").then((schema) => {
  //     baseClient.listarUmUsuario(2).then((res)=>{
  //       expect(res.status).to.eq(200)
  //       console.log(res.body);
  //       const ajv = new Ajv();
  //       addFormats(ajv)
  //       const validate = ajv.compile(schema);
  //       const isValid = validate(res.body);

  //       if (!isValid) console.error(validate.errors);
        
  //       expect(isValid, "Contrato da API inválido!").to.be.true;
  //     })
  //   })
  // })
  
})