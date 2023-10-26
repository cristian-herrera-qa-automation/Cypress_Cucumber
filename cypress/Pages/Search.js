export class SEARCH_INPUT{
         input_search = '#search'
         btn_buscar = '[title="Buscar"]'
         Class_titulo = '.base'
         Class_list_products= '.products.list.items.product-items > li'

          search(){return cy.get(this.input_search);}
          Buscar(){return cy.get(this.btn_buscar);}
          Titulo(){return cy.get(this.Class_titulo,{timeout:3000})}
          List_products(){return cy.get(this.Class_list_products)}
}