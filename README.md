# cypress-api-testing
Testing the "reqres.in" API with Cypress



Cypress is a powerful end-to-end testing framework for web applications, and it can be used for **API testing** as well. Here’s how to set up and use Cypress for testing APIs step by step.  

---

## **1️⃣ Install Cypress**  
If you haven't installed Cypress yet, use:  
```sh
npm install cypress --save-dev
```
Then, open Cypress:  
```sh
npx cypress open
```

---

## **2️⃣ Create API Test Cases**  
1. Inside Cypress, go to **`cypress/e2e`** and create a new test file, e.g., `api_tests.cy.js`.  
2. Use the `cy.request()` method to send API requests.

### **Example: Testing a REST API**
```js
describe('API Testing with Cypress', () => {
  
  it('GET Request - Validate Response', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });

  it('POST Request - Create a Resource', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Cypress Test',
      body: 'Testing API with Cypress',
      userId: 1
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'Cypress Test');
    });
  });

  it('PUT Request - Update a Resource', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Updated Title'
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Updated Title');
    });
  });

  it('DELETE Request - Remove a Resource', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });

});
```

---

## **3️⃣ Run the API Tests**
You can run Cypress tests in **headless mode** using:  
```sh
npx cypress run --spec "cypress/e2e/api_tests.cy.js"
```
Or open the Cypress UI:  
```sh
npx cypress open
```

---

## **4️⃣ Handling Authentication (Token-based APIs)**
For APIs requiring authentication, use `cy.request()` to store the token before running tests:  
```js
beforeEach(() => {
  cy.request('POST', 'https://api.example.com/login', {
    username: 'user',
    password: 'pass'
  }).then((response) => {
    Cypress.env('token', response.body.token);
  });
});

it('GET request with Auth', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.example.com/data',
    headers: {
      Authorization: `Bearer ${Cypress.env('token')}`
    }
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});
```

---

## **5️⃣ Assertions & Chaining Requests**
Cypress allows **chaining multiple requests** to validate API responses:  
```js
cy.request('POST', 'https://api.example.com/create', { name: 'Test' })
  .then((response) => {
    const id = response.body.id;
    return cy.request(`https://api.example.com/data/${id}`);
  })
  .should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq('Test');
  });
```

---

## **6️⃣ Mock API Responses with Intercept**
To test without calling real APIs, mock responses using `cy.intercept()`:  
```js
cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.visit('/');
cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
```

---

### ✅ **Cypress is great for API testing because:**
- It has built-in **retry logic**.
- Works well with **both UI & API tests**.
- Supports **request chaining** and **response validation**.

Do you need help integrating Cypress API tests into CI/CD or any other aspect? 🚀