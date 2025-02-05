export class BaseClient {
    
    listarUsuarios(page) {
        return cy.request({
            method:"GET",
            url:`https://reqres.in/api/users?page=${page}`,
            failOnStatusCode: false,
            })
    }

    listarUmUsuario(id) {
        return cy.request({
            method:"GET",
            url:`https://reqres.in/api/users/${id}`,
            failOnStatusCode: false,
            })
    }
    
}