/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { SEARCH_INPUT } from "../../Pages/Search";
const elements_search = new SEARCH_INPUT();

describe("TC N°1 : Buscar un producto con el Search Input y verificar el titulo de la busqueda.",()=>{

    Given("Que el usuario se encuentra en el Home Page.",()=>{
        cy.visit("https://www.elauditor.com.ar/home")
        cy.url().should("include","elauditor.com.ar")
        cy.CERRAR_POP_UP();
    });
    
    When("El usuario escribe en el Search Input un producto valido {string} y presiona ENTER o hace click en el icono de busqueda.",function(producto){
         elements_search.search().type(producto+'{enter}');
      //   elements_search.Buscar().click({force:true});

    });      
    
    Then("Se realiza la busqueda exitosa del producto y se visualiza su titulo {string}.",function(titulo){
        elements_search.Titulo().contains(titulo).should("be.visible");
    });

    And("Se visualiza la lista de productos relacionados a esa busqueda.",()=>{
        elements_search.List_products().should("be.visible");
   });

});