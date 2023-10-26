/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { URL } from "../../Pages/Pages_URL";
const elements_pages = new URL();

Given("Que el usuario se encuentra en el Home Page.",function(){
    cy.visit("https://www.elauditor.com.ar/home")
    cy.url().should("include","elauditor.com.ar",{timeout:5000})
    cy.CERRAR_POP_UP();
});

describe("TC N°1 : NAVEGACION EXITOSA POR DIFERENTES SECCIONES.",()=>{
    
    When("El usuario hace click en la categoria {string}",function(categoria){
       elements_pages.Acceder_Resmas(categoria);

    });    
    
    Then("Accede exitosamente a dicha categoria seleccionada y se visualiza correctamente su URL {string} correspondiente.",function(path){
        elements_pages.URL_path_Resmas(path);
    });

});