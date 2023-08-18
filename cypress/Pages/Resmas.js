export class RESMAS{
    list_products= ".products.list.items.product-items";

    list_products_resmas(){return cy.get(this.list_products);}

// elementos (datos) del 1° producto de la lista para elaborar el test.
    Class_img_product_PDP= '.fotorama__img';
    Class_Product_1= '.product-image-wrapper'
    Class_Price= '.price';
    TXT_EnStock= 'En stock';

    IMG_product(){return cy.get(this.Class_img_product_PDP);}
    Product_1(){return cy.get(this.Class_Product_1);}
    Precio_producto(){return cy.get(this.Class_Price);}
    Disponibilidad(){return cy.contains(this.TXT_EnStock);}

};
