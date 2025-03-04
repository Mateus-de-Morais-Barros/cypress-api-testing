import { BaseClient } from '../../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";
import { faker } from '@faker-js/faker';


describe('Registers a User', () => {
  const baseClient = new BaseClient();

  it('Validates response structure on request success', () => {
    cy.fixture("userRegistered.json").then((schema) => {
      const body = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    
      baseClient.registerUser(body).then((res)=>{
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



  it('Validates message when trying to register non existent user', () => {
    const body = {
        "email": "mateus@qa.com",
        "password": "QA123"
    }
    baseClient.registerUser(body).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq("Note: Only defined users succeed registration")
    })
  })


  it('Validates message when trying to register with no password', () => {
    const body = {
        "email": "eve.holt@reqres.in"
      }
    baseClient.registerUser(body).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq("Missing password")
    })
  })


  it('Validates message when trying to register with no email', () => {
    const body = {
        "password": "pistol"
      }
    baseClient.registerUser(body).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq("Missing email or username")
    })
  })

})