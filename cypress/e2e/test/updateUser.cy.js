import { BaseClient } from '../utils/BaseClient'
import Ajv from 'ajv';
import addFormats from "ajv-formats";
import { faker } from '@faker-js/faker';

describe('Updates a User', () => {
  const baseClient = new BaseClient();

  it('Validates response structure on request success', () => {
    cy.fixture("userUpdated.json").then((schema) => {
      const body = {
        "name": faker.person.firstName(),
        "job": faker.person.jobTitle()
      }
      const id = 2
      baseClient.updateUser(body, id).then((res)=>{
        expect(res.status).to.eq(200)

        const ajv = new Ajv();
        addFormats(ajv)
        const validate = ajv.compile(schema);
        const isValid = validate(res.body);

        if (!isValid) console.error(validate.errors);
        console.log(res.body);
        expect(isValid, "Contrato da API inválido!").to.be.true;
      })
    })
  })

  it('Validates status code when trying to create user with no job', () => {
    const body = {
      "name": faker.person.firstName(),
      "job": ""
    }
    const id = 2
    baseClient.updateUser(body, id).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })

  it('Validates status code when trying to create user with no body', () => {
    const body = {
      "name": "",
      "job": faker.person.jobTitle()
    }
    const id = 2
    baseClient.updateUser(body, id).then((res)=>{
      expect(res.status).to.eq(400)
    })
  })


})