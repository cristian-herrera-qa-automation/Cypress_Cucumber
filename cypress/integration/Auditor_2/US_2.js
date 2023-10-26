/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import {LOGIN} from "../../Pages/Login";

const elements_login = new LOGIN();

Given("DADO QUE EL USUARIO SE ENCUENTRA EN LA SECCION LOGIN - PopUp",function(){
    cy.visit("https://www.elauditor.com.ar")
    cy.url().should("include","elauditor.com.ar")
    cy.CERRAR_POP_UP();
    elements_login.INGRESAR_label();
});

And("Ya posee una cuenta registrada previamente.",function(){});

describe("TC N°1 LOG-OUT EXITOSO CON CUENTA EXISTENTE.",()=>{
    
    When("El usuario introduce un {string} y {string} validos.",function(username,password){
        elements_login.email(username);
        elements_login.password(password);
    });
    And("Hace click en el Boton ENTRAR.",function(){
        elements_login.BTN_ENTRAR();
    });
    
    Then("El usuario se logea exitosamente y es redirigido a la Home Page.",function(){
       // cy.wait(5000);
        elements_login.URL_HOMEPAGE();
    });
    And("Hace click en el boton CERRAR SESION.",function(){
       // cy.wait(7000);
        elements_login.BTN_CerrarSession().click({force:true});
    });
    Then("Luego de 5 segundos es redirigido a la Home Page.",function(){
        cy.wait(5000);
        elements_login.URL_HOMEPAGE();
    })

});