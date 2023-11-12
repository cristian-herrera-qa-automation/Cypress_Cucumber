export class PDP{
    Class_quantity= '.bproduct__action--quantity.simple'
    Input_Quantity_Max= '.plus'
    Btn_Agregar_Carrito = '#product-addtobuy-button'
    Class_Info_Product= '.product-info-main'
    Carrito_Enlace='.message-success > div > a'
    HiperVinculo = 'carrito'

    Quantity(){return cy.get(this.Class_Info_Product,{timeout:8000})}
    Quantity_Sumar(){return cy.get(this.Input_Quantity_Max,{timeout:3000});}
    Quantity_Input_Value(){return cy.get(this.Class_quantity)}
    Agregar_checkout(){return cy.get(this.Btn_Agregar_Carrito)}
    Enlace_Carrito_PDP(){return cy.get(this.Carrito_Enlace,{timeout:8000}).contains("a",this.HiperVinculo)}

};
