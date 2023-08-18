export class Checkout_Product{                  
      //ELEMENTOS CHECKOUT //   
      
          Class_List= '.cart.item'
          Img_Product = '.product-image-photo'
          Class_Details = '.product-item-details'
          Class_Quantity= '.control.qty'
          Class_Price = '.price'
         
          List_Checkout(){return cy.get(this.Class_List);}
          Img_Product_Checkout(){return cy.get(this.Img_Product);}
          Quantity_input_Checkout(){return cy.get(this.Class_Quantity).find("input");}
          Price_Product(){return cy.get(this.Class_Price)};
};