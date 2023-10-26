export class PLP{
    Img_Class_product1= '.product-image-photo'

    product(){return cy.get(this.Img_Class_product1,{timeout:3000})}

};