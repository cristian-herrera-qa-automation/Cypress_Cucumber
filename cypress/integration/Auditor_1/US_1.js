/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import {LOGIN} from "../../Pages/Login";
const elements_login = new LOGIN();

Given("DADO QUE EL USUARIO SE ENCUENTRA EN LA SECCION LOGIN - PopUp",function(){
    cy.visit("https://www.elauditor.com.ar")
    cy.url().should("include","elauditor.com.ar")
    cy.wait(5000);
    elements_login.INGRESAR_label();
});
And("Ya posee una cuenta registrada previamente.",function(){});

describe("TC N°1 LOGIN EXITOSO CON CUENTA EXISTENTE.",()=>{
    
    When("El usuario introduce un {string} y {string} validos.",function(username,password){
        elements_login.email(username);
        elements_login.password(password);
    });
    And("Hace click en el Boton ENTRAR.",function(){
        elements_login.BTN_ENTRAR();
    });
    
    Then("El usuario se logea exitosamente y es redirigido a la Home Page.",function(){
        cy.wait(5000);
        elements_login.URL_HOMEPAGE();
    });

});

describe("TC N°2 LOGIN INCORRECTO CON CUENTA EXISTENTE.",()=>{

     When("El usuario introduce datos incorrectos en los campos {string} y {string}",function(username1,password1){
         elements_login.email(username1);
         elements_login.password(password1);
     });
     And("Hace click en el Boton ENTRAR.!!!",function(){
         elements_login.BTN_ENTRAR();
     });
    
     Then("Aparece un msj con un mensaje de alerta.",function(){
           elements_login.Mensaje_InicioSession_Incorrecto().should("be.visible");
       });
 });


describe("TC N°3 LOGIN INVALIDO CON CAMPOS VACIOS.",()=>{

    When("El usuario hace click en boton ENTRAR, dejando los campos {string} y {string} vacios.",function(email2,password2){
        elements_login.BTN_ENTRAR();      
    });

    Then("Aparecen los Validators en dichos campos.",function(){
          elements_login.Alert_ValidacionEmail().should("be.visible");
          elements_login.Alert_ValidacionPassword().should("be.visible");
      });
});


