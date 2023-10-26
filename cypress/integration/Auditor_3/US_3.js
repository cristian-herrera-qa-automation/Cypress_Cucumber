/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { REGISTER } from "../../Pages/Register";
import { LOGIN } from "../../Pages/Login";

const elements_register = new REGISTER();
const elements_login = new LOGIN();

// DATOS RANDOM //
import {faker} from "@faker-js/faker";
const nombre_random = faker.name.firstName();
const apellido_random = faker.name.lastName();
const randomEmail = Math.random().toString(20).substring(2,20)+"@gmail.com";

Given("Que el usuario NO tiene una cuenta existente.",function(){
    cy.visit("https://www.elauditor.com.ar")
    cy.url().should("include","elauditor.com.ar")
    cy.CERRAR_POP_UP();
});

And("Se encuentra en la seccion REGISTRO - PopUp.",function(){
    elements_register.acceder_registrarse();
});

describe("TC N°1 REGISTRO EXITOSO - CAMPOS OBLIGATORIOS.",()=>{
    
    When("El usuario completa los campos 'NOMBRE' , 'APELLIDO' , 'CORREOELECTRONICO' , {string} y {string} con datos validos.",function(contraseña,confirmarContraseña){

        elements_register.input_nombre().type(nombre_random);
        elements_register.input_apellido().type(apellido_random);
        elements_register.input_correo().type(randomEmail);
        elements_register.input_password().type(contraseña);
        elements_register.input_confirm_password().type(confirmarContraseña);
        cy.wrap(nombre_random).as("NOMBRE_RANDOM");
        cy.wrap(apellido_random).as("APELLIDO_RANDOM");
        cy.wrap(randomEmail).as("EMAIL_RANDOM")
        // console.log(this.NOMBRE_RANDOM);
        // console.log(this.APELLIDO_RANDOM);
        // console.log(this.EMAIL_RANDOM);
    });    
    And("Hace click en el Boton REGISTRARSE.",function(){
        elements_register.BTN_REGISTRARSE();
        cy.wait(3000);
    });
    
    Then("Se registra exitosamente y es redirigido a la Home Page.",function(){
          elements_login.URL_HOMEPAGE();       
    });
});


describe("TC N°2 REGISTRO INCORRECTO - FORMATO DE EMAIL INVALIDO.",()=>{
    
    When("El usuario completa los campos 'NOMBRE' , 'APELLIDO' , {string} Y {string} con datos validos.",function(contraseña,confirmarContraseña){
        elements_register.input_nombre().type('@NOMBRE_RANDOM');
        elements_register.input_apellido().type('@APELLIDO_RANDOM');
        elements_register.input_password().type(contraseña);
        elements_register.input_confirm_password().type(confirmarContraseña);
    });
    
    And("Completa el campo obligatorio CORREO ELECTRONICO con un formato invalido.",function(){
        const invalid_email = faker.name.fullName();
        elements_register.input_correo().type(invalid_email);
    });

    And("Hace click en el Boton REGISTRARSE.",function(){
        elements_register.BTN_REGISTRARSE();
    });
    
    Then("Aparece el VALIDATOR correspondiente en dicho campo.",function(){
        elements_register.VALIDATOR_EMAIL().should("be.visible");
    });
});

describe("TC N°3 REGISTRO INCORRECTO - CAMPOS VACIOS.",()=>{
    
    When("El usuario deja VACIOS los campos obligatorios 'NOMBRE' , 'APELLIDO' , 'CONTRASEÑA' , 'ConfirmarContraseña' y 'CorreoElectronico' .",function(){
        elements_register.input_nombre();
        elements_register.input_apellido();
        elements_register.input_correo();
        elements_register.input_password();
        elements_register.input_confirm_password();  
    });
    
    And("Hace click en el Boton 'REGISTRARSE'.",function(){
        elements_register.BTN_REGISTRARSE();      
    });
    
    Then("Aparecen los VALIDATORS {string} en dichos campos.",function(txt_msj_validator){
          elements_register.Validator_CampoObligatorio_Nombre().contains(txt_msj_validator).should("be.visible");
          elements_register.Validator_CampoObligatorio_Apellido().contains(txt_msj_validator).should("be.visible");
          elements_register.Validator_CampoObligatorio_CorreoElectronico().contains(txt_msj_validator).should("be.visible");
          elements_register.Validator_CampoObligatorio_Contraseña().contains(txt_msj_validator).should("be.visible");
          elements_register.Validator_CampoObligatorio_ConfirmarContraseña().contains(txt_msj_validator).should("be.visible");

    });
});
