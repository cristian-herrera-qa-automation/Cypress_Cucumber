export class Newsletter_Suscription{
          input_email= '#newsletter'
          titulo = 'Suscríbete a nuestro newsletter'
          btn_suscribirse= '[title="Suscribirse"]'
          Message_success= 'Gracias por suscribirse.'
          Message_error = 'Introduzca una dirección válida de correo electrónico (Ex: johndoe@domain.com).'
          ID_Message_error = '#newsletter-error'

          email(){return cy.get(this.input_email);}
          txt_titulo(){return cy.contains(this.titulo);}
          BTN_suscripcion(){return cy.get(this.btn_suscribirse);}
          Success_Message(mensaje){return cy.contains(mensaje,{timeout:8000});}
          Error_Mensaje(){return cy.get(this.ID_Message_error);}
};