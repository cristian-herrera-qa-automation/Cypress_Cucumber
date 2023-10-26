/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { Newsletter_Suscription } from "../../Pages/Suscripcion_Newsletter";
import {faker} from "@faker-js/faker";

const elements_newsletter = new Newsletter_Suscription();
const randomEmail = Math.random().toString(20).substring(2,20)+"@gmail.com";
const nombre_random = faker.name.lastName();


describe("TC N°1 : Verificar suscripcion con formato de email valido.",()=>{

    Given("Que el usuario se encuentra en el footer del Home Page.",()=>{
        cy.visit("https://www.elauditor.com.ar/home")
        cy.url().should("include","elauditor.com.ar",{timeout:5000})
        cy.CERRAR_POP_UP();
        cy.scrollTo("bottom");

    });
    
    When("El usuario escribe en el Input un formato de email valido y presiona ENTER o hace click en el boton 'SUSCRIBIRSE'.",function(){
         elements_newsletter.email().type(randomEmail);
         elements_newsletter.BTN_suscripcion().click({force:true});
         
    });      
    
    Then("La pagina se recarga y se visualiza el siguiente mensaje.{string}",function(mensaje){
        elements_newsletter.Success_Message(mensaje).should("be.visible");
    });

});

describe("TC N°2 : Intentar suscribirse con formato de email invalido.",()=>{

    Given("Que el usuario se encuentra en el footer del Home Page.",()=>{
        cy.visit("https://www.elauditor.com.ar/home")
        cy.url().should("include","elauditor.com.ar")
        cy.CERRAR_POP_UP();
        cy.scrollTo("bottom");

    });
    
    When("El usuario escribe en el Input un formato de email invalido y presiona ENTER o hace click en el boton 'SUSCRIBIRSE'.",function(){
         elements_newsletter.email().type(nombre_random);
         elements_newsletter.BTN_suscripcion().click({force:true});
         
    });      
    
    Then("Aparece el VALIDATOR que incluye el siguiente mensaje {string}.",function(mensaje_validator){
        elements_newsletter.Error_Mensaje().contains(mensaje_validator).should("be.visible");
    });

});
