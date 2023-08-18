/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { URL } from "../../Pages/Pages_URL";
import { PLP } from "../../Pages/PLP";
import { PDP } from "../../Pages/PDP";
import { Checkout_Product } from "../../Pages/Checkout_";

const elements_pages = new URL();
const elements_PDP = new PDP();
const elements_PLP = new PLP();
const elements_checkout = new Checkout_Product();

Given("Que usuario se encuentra en el Home Page.",function(){
    cy.visit("https://www.elauditor.com.ar")
    cy.url().should("include","elauditor.com.ar")
    cy.wait(5000);
    
});

describe("TC N°1 : Verificar que la cantidad del producto agregado sea igual en el Checkout.",()=>{

    When("Se posiciona en cualquier categoria {string} y acceda al PDP del primer producto.",function(categoria){
        elements_pages.Acceder_Resmas(categoria);
        cy.wait(3000);
        elements_PLP.product().first().click({force:true});
        cy.wait(8000);
    });

    And("Haya agregado al carrito de compras la cantidad de '3'.",function(){
        elements_PDP.Quantity().within(()=>{
            elements_PDP.Quantity_Sumar().click({force:true});
            cy.wait(3000);
            elements_PDP.Quantity_Sumar().click({force:true});
            cy.wait(3000);
            elements_PDP.Quantity_Input_Value().find("input").invoke("val").should("eq","3");
            elements_PDP.Agregar_checkout().click({force:true});
            cy.wait(8000);                 
          });
    });

    And("Haya hecho click en el enlace 'CARRITO'.",function(){
        elements_PDP.Enlace_Carrito_PDP().click({force:true});
    });
   
    Then("La Pagina se redirige al Checkout y se visualiza la IMAGEN , CANTIDAD '3' Y PRECIO TOTAL.",function(){
         elements_checkout.List_Checkout().within(()=>{
            elements_checkout.Img_Product_Checkout().should("be.visible");
            elements_checkout.Quantity_input_Checkout().invoke("val","eq","3").should("be.visible");
            elements_checkout.Price_Product().should("be.visible");
         });
    });

});