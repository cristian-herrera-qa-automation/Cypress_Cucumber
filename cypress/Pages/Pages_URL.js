export class URL{
      url_path_resmas= '/resmas.html'
      url_path_categorias= '/categories.html'
      url_path_informatica= '/tecnologia-e-informatica.html'
      url_path_electrodomesticos= '/electrodomesticos.html'
      url_path_amoblamientos= '/amoblamientos.html'
      TXT_Resmas= 'Resmas'
      TXT_Informatica= 'Informática'
      TXT_Electrodomesticos= 'Electrodomésticos'
      TXT_Amoblamientos= 'Amoblamientos'
      TXT_Categorias= 'Categorías'

      URL_path_Categorias(){ return cy.url();}
      URL_path_Informatica(){ return cy.url();}
      URL_path_Electrodomesticos(){ return cy.url();}
      URL_path_Amoblamientos(){return cy.url();}
      URL_path_Resmas(text){ return cy.url().should("include",text)};

      Acceder_Resmas(text){ return cy.contains(text).click({force:true});}
      Acceder_Informatica(text){return cy.contains(text).click({force:true});}
      Acceder_Electrodomesticos(text){ return cy.contains(text).click({force:true});}
      Acceder_Amoblamientos(text){ return cy.contains(text).click({force:true});}
      Acceder_Categorias(text){return cy.contains(text).click({force:true});}
};