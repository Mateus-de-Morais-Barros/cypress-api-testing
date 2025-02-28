export class BaseClient {
    
    listUsers(page) {
        return cy.request({
            method:"GET",
            url:`https://reqres.in/api/users?page=${page}`,
            failOnStatusCode: false,
            })
    }

    listOneUser(id) {
        return cy.request({
            method:"GET",
            url:`https://reqres.in/api/users/${id}`,
            failOnStatusCode: false,
            })
    }

    createUser(reqBody) {
        return cy.request({
            method:"POST",
            url:`https://reqres.in/api/users`,
            failOnStatusCode: false,
            body:reqBody
            })
    }

    updateUser(reqBody, id) {
        return cy.request({
            method:"PUT",
            url:`https://reqres.in/api/users/${id}`,
            failOnStatusCode: false,
            body:reqBody
            })
    }

    deleteUser(id) {
        return cy.request({
            method:"DELETE",
            url:`https://reqres.in/api/users/${id}`,
            failOnStatusCode: false,
            })
    }

    registerUser(reqBody) {
        return cy.request({
            method:"POST",
            url:`https://reqres.in/api/register`,
            failOnStatusCode: false,
            body:reqBody
            })
    }   



}