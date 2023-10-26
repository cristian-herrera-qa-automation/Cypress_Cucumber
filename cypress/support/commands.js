// /// <reference types="cypress" />

// import { LOGIN } from "../Pages/Login";
// const elements_login= new LOGIN();

 Cypress.Commands.add("CERRAR_POP_UP",()=>{ 
     if (cy.get('#mp-popup-template3',{timeout:7000})) {
         cy.get('#bio_ep_close').click();
     };
    });
// Cypress.Commands.add("Logearse_exitosamente",()=>{
//     cy.wait(6000);
//     elements_login.INGRESAR_label();
//     cy.wait(3000);
//     elements_login.email("test1234@hola.com");
//     elements_login.password("Losloros12");
//     elements_login.BTN_ENTRAR();
//     cy.wait(6000);
//     elements_login.URL_HOMEPAGE();
// });

// Cypress.Commands.add("Logeo_Incorrecto",()=>{
//     cy.wait(6000);
//     elements_login.INGRESAR_label();
//     cy.wait(3000);
//     elements_login.email("test1234@hola.com");
//     elements_login.password("123456789");
//     elements_login.BTN_ENTRAR();
//     elements_login.Mensaje_InicioSession_Incorrecto().should("be.visible");
// });