// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'viewport',
});
Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })

Cypress.Commands.add("login", (/*user*/) => {

    const body={"grant_type":"refresh_token",
        "refreshToken": 
    "AE0u-NeaNz7fFvCAGeE11QgodsRCAYYj5OmAkKiz0fZTla9WnWZFY1j1Ho6DQ7ygATwmISLCwYaPK1xpK4aEHjjavjrGkNXpbJ3w81QEbcwjTWkqWWcczYGAT4v9LUVHjD0tVNZ3hgj-JJTgMwOo5rh-rtkvf24vKVytyzgMcG7PtsEzcFRid_839FYAY5wzJP6Ij-JYactmiedQAZ_4SfY1g5SZE7nBIGgjoUpP1dXRJM16xhMVDlM_ID9VTJeL8_pmVVAonqSQapcjkUqV-QnshqXrjqBNxfSyWd44x4b54KhGc7MZ_KvHzYGwnp-8NhSlALshQpfD5vUfW7ysI-hKgeRCcXCZMaJq8vhyzIbz3gOqkKX7rXJFkisuh9TRDYw3yPid_SvBGhgLdL8T8OHEhGp75fe7fCD7BUGZbz2blVu-j3N89gz9jJEJMMXZbUK4L-qHx4ApG4hNNRIAciZAyhskw53FPRBEAGz0K0D1W5PxrnOXWe-ucvSmqDAohoeG7JsjiDcb"
}

cy.request({
    method:'POST',
    url:'https://securetoken.googleapis.com/v1/token?key=AIzaSyAQQozmvIEjRz5BIrI25WoJ2XxPtNp3z3k',
    body:body
}).then(tokenSearch=>{
console.log(tokenSearch)
cy.wrap(tokenSearch.body.id_token).as('token')
})

cy.get('@token').then(token=>{
cy.request({
        method:'GET',
        url:'http://staging-apioursofka.sofka.com.co/identity/singIn?firebaseToken='+token,
    }).as('autenticacion').then(response=>{
        cy.setCookie('csrfToken',token)
        cy.setCookie('csrfId',response.body.uid)
        Cypress.Cookies.preserveOnce('csrfToken', 'csrfId')
        cy.visit(Cypress.env('webUrl')+'timeManagement')
    })

    cy.get('@token').then(token=>{
            cy.get('@autenticacion').then(response=>{
            cy.setCookie('csrfToken',token)
            cy.setCookie('csrfId',response.body.uid)
            Cypress.Cookies.preserveOnce('csrfToken', 'csrfId')
            cy.visit(Cypress.env('webUrl')+'timeManagement')
        })
    })
})
})
