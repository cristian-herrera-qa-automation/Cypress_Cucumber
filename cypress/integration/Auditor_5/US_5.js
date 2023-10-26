/// <reference types="cypress" />

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import { URL } from "../../Pages/Pages_URL";
import { RESMAS } from "../../Pages/Resmas";

const elements_pages = new URL();
const elements_resmas = new RESMAS();

describe("TC N°1 : Verificar que la lista de productos este visible.",()=>{

    Given("Que el usuario se encuentra en el Home Page.",()=>{
        cy.visit("https://www.elauditor.com.ar/home")
        cy.url().should("include","elauditor.com.ar",{timeout:5000})
        cy.CERRAR_POP_UP();
    });
    
    When("El usuario hace click en la categoria {string}",function(categoria){
       elements_pages.Acceder_Resmas(categoria);

    });    
    
    Then("Accede exitosamente a dicha categoria seleccionada Y se visualiza su {string} correspondiente.",function(path){
        elements_pages.URL_path_Resmas(path);
    });

    And("Se visualiza exitosamente la lista de productos de dicha categoria.",()=>{
         elements_resmas.list_products_resmas().should("be.visible");

    });

});

describe("TC N°2 : Verificar que los datos del 1° producto de la lista esten visibles en su PDP.",()=>{

    Given("El usuario se encuentra en la seccion 'RESMAS'. {string} - {string}",(categoria_resmas,path_resmas)=>{
        cy.visit("https://www.elauditor.com.ar/home")
        cy.url().should("include","elauditor.com.ar",{timeout:6000})
        cy.CERRAR_POP_UP();
        elements_pages.Acceder_Resmas(categoria_resmas);
        elements_pages.URL_path_Resmas(path_resmas);

    });
    
    When("Hace click en el 1° producto de la lista.",function(){
       elements_resmas.Product_1().first().click({force:true});
       cy.wait(4000);
    });    
    
    Then("Se visualiza exitosamente su IMAGEN , DISPONIBILIDAD Y PRECIO.",function(){
        elements_resmas.IMG_product().should("be.visible");
        elements_resmas.Precio_producto().should("be.visible");
        elements_resmas.Disponibilidad().should("be.visible");

    });

});

