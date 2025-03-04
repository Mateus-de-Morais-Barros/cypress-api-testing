import { BaseClient } from '../../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";
import { faker } from '@faker-js/faker';


describe('Registers a User', () => {
  const baseClient = new BaseClient();


  it('Validates response structure on request success', () => {
    cy.fixture("userLoggedIn.json").then((schema) => {
      const body = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
    
      baseClient.loginUser(body).then((res)=>{
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



  it('Validates message when trying to login with no password field', () => {
    const body = {
        "email": "eve.holt@reqres.in"
    }
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq("Missing password")
    })
  })


  it('Validates message when trying to login with no email field', () => {
    const body = {
      "password": "cityslicka"
    }
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq("Missing email or username")
    })
  })


  it('Validates message when trying to login with blank password', () => {
    const body = {
      "email": "eve.holt@reqres.in",
      "password": ""
    }
  
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })


  it('Validates message when trying to login with blank email', () => {
    const body = {
      "email": "",
      "password": "cityslicka"
    }
  
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })


  it('Validates message when trying to register with invalid email', () => {
    const body = {
      "email": "a@a.com",
      "password": "cityslicka"
    }
  
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })


  it('Validates message when trying to register with invalid password', () => {
    const body = {
      "email": "eve.holt@reqres.in",
      "password": "abc@123"
    }
  
    baseClient.loginUser(body).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })
})