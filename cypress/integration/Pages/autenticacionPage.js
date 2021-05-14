

export class autenticacionPage{

    abreOurSofka(){
    cy.login()
    }

    esColaborador(){
    cy.get('@autenticacion').then(autenticacion=>{
        expect(autenticacion.body.rol.name).to.equals('collaborator')
    })
    }

    abreElHomepage(){
        cy.url().should('contains','/timeManagement')
        cy.wait(5000)
    }

    visualTesting(){
        cy.matchImageSnapshot()
    }
}
export const autenticacion=new autenticacionPage