export class LOGIN{
       ingresar_label= 'Ingresar'
       input_email= '#social_login_email'
       input_password= '#social_login_pass'
       btn_entrar= '#bnt-social-login-authentication'
       Class_Login_Welcome= '.logged-in'
       Msj_InicioSesion_Incorrecto= 'Inicio de sesión o contraseña inválida.'
       Url_homepage= 'elauditor.com.ar'
       Txt_Btn_CerrarSession= 'Cerrar sesión'
       Msj_Validator_Email= '#social_login_email-error'
       Msj_Validator_Password= '#social_login_pass-error'
       MSJ_CERRAR_SESSION= 'Has cerrado la sesión'


       INGRESAR_label(){cy.contains(this.ingresar_label).click();}
       URL_HOMEPAGE(){cy.url().should("include",this.Url_homepage);}
       email(correo){cy.get(this.input_email).type(correo);}
       password(contraseña){cy.get(this.input_password).type(contraseña);}
       BTN_ENTRAR(){cy.get(this.btn_entrar).click();}
       BIENVENIDO(){return cy.get(this.Class_Login_Welcome);}
       Mensaje_InicioSession_Incorrecto(){return cy.contains(this.Msj_InicioSesion_Incorrecto)};
       BTN_CerrarSession(){ return cy.contains(this.Txt_Btn_CerrarSession);}
       Alert_ValidacionEmail(){return cy.get(this.Msj_Validator_Email);}
       Alert_ValidacionPassword(){return cy.get(this.Msj_Validator_Password);}
       Msj_CerrarSession(){return cy.contains(this.MSJ_CERRAR_SESSION)};

};


