
export class REGISTER{
    btn_registrarse_homepage= 'Registrarse'
    nombre= '#firstname'
    apellido= '#lastname'
    correo_electronico= '#email_address_create'
    contraseña= '#password-social'
    confirmation_contraseña= '#password-confirmation-social'
    btn_registrarse= '#button-create-social'
    Txt_emailExistente= 'There is already an account with this email address. If you are sure that it is your email address, '
    TXT_VALIDATOR_FORMAT_EMAIL= 'Introduzca una dirección válida de correo electrónico (Ex: johndoe@domain.com).'
    ID_validator_campo_obligatorio_Nombre='#firstname-error'
    ID_validator_campo_obligatorio_Apellido='#lastname-error'
    ID_validator_campo_obligatorio_CorreoElectronico='#email_address_create-error'
    ID_validator_campo_obligatorio_Contraseña='#password-social-error'
    ID_validator_campo_obligatorio_ConfirmarContraseña='#password-confirmation-social-error'

    acceder_registrarse(){ return cy.contains(this.btn_registrarse_homepage).click();}
    input_nombre(){ return cy.get(this.nombre)};
    input_apellido(){ return cy.get(this.apellido);}
    input_correo(){return cy.get(this.correo_electronico)}
    input_password(){ return cy.get(this.contraseña)}
    input_confirm_password(){return cy.get(this.confirmation_contraseña)}
    BTN_REGISTRARSE(){return cy.get(this.btn_registrarse).click();}
    MESSAGE_email_Existente(){return cy.contains(this.Txt_emailExistente);}
    VALIDATOR_EMAIL(){return cy.contains(this.TXT_VALIDATOR_FORMAT_EMAIL)};
    Validator_CampoObligatorio_Nombre(){return cy.get(this.ID_validator_campo_obligatorio_Nombre)};
    Validator_CampoObligatorio_Apellido(){return cy.get(this.ID_validator_campo_obligatorio_Apellido)};
    Validator_CampoObligatorio_CorreoElectronico(){return cy.get(this.ID_validator_campo_obligatorio_CorreoElectronico)};
    Validator_CampoObligatorio_Contraseña(){return cy.get(this.ID_validator_campo_obligatorio_Contraseña)};
    Validator_CampoObligatorio_ConfirmarContraseña(){return cy.get(this.ID_validator_campo_obligatorio_ConfirmarContraseña)};

};