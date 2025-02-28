import { BaseClient } from '../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";

describe('List Users', () => {
  const baseClient = new BaseClient();
  
  it('Validates status code on request success', () => {
    baseClient.listUsers(2).then((res)=>{
      expect(res.status).to.eq(200)
    })
  })

  it('Validates page number on request success', () => {
    baseClient.listUsers(2).then((res)=>{
      expect(res.body.page).to.eq(2)
    })
  })

  it('Validates response structure on request success', () => {
    cy.fixture("userList.json").then((schema) => {
      baseClient.listUsers(2).then((res)=>{
        expect(res.status).to.eq(200)

        const ajv = new Ajv();
        addFormats(ajv)
        const validate = ajv.compile(schema);
        const isValid = validate(res.body);

        if (!isValid) console.error(validate.errors);
        
        expect(isValid, "Contrato da API inválido!").to.be.true;
      })
    })
  })
  
})