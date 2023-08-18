export class POP_UP{
        ID_pop_up_Auditor= '#mp-popup-template3'
        input_email = '#mp-newsletter'
        btn_suscribirme= 'Suscribirme'
        ID_cerrar_pop_up= '#bio_ep_close'
        Class_success_message= '.success-title'
        Txt_success_message = 'Gracias por suscribirte a nuestro Newsletter!'


        INPUT_EMAIL(correo){return cy.get(this.input_email).type(correo)}
        BTN_SUSCRIPCION(){return cy.contains(this.btn_suscribirme).click();}
        Message_Success(){return cy.get(this.Class_success_message)}
        Cerrar_Pop_up(){return cy.get(this.ID_cerrar_pop_up).click();}
        
        };