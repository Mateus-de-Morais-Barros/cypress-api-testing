import { BaseClient } from '../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";
import { faker } from '@faker-js/faker';

describe('Creates a User', () => {
  const baseClient = new BaseClient();

  it('Validates response structure on request success', () => {
    cy.fixture("userCreated.json").then((schema) => {
      const body = {
        "name": faker.person.firstName(),
        "job": faker.person.jobTitle()
      }
      baseClient.createUser(body).then((res)=>{
        expect(res.status).to.eq(201)

        const ajv = new Ajv();
        addFormats(ajv)
        const validate = ajv.compile(schema);
        const isValid = validate(res.body);

        if (!isValid) console.error(validate.errors);
        
        expect(isValid, "Contrato da API inválido!").to.be.true;
      })
    })
  })

  it('Validates status code when trying to create user with blank credentials', () => {
    const body = {
      "name": "",
      "job": ""
    }
    baseClient.createUser(body).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })

  it('Validates status code when trying to create user with no body', () => {
    baseClient.createUser({}).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })

  it('Validates status code when trying to create user with no job', () => {
    const body = {
      "name": faker.person.firstName()
    }
    baseClient.createUser(body).then((res)=>{
      console.log(res.body);
      expect(res.status).to.eq(400)
    })
  })

  it('Validates status code when trying to create user with no name', () => {
    const body = {
      "job": faker.person.jobTitle()
    }
    baseClient.createUser(body).then((res)=>{
      console.log(res.body);
      expect(res.status).to.eq(400)
    })
  })

  


})