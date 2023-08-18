Feature: EL AUDITOR - SUSCRIPCION NEWSLETTER.

    Scenario Outline: TC N°1 : Verificar suscripcion con formato de email valido.
        Given Que el usuario se encuentra en el footer del Home Page.
        When El usuario escribe en el Input un formato de email valido y presiona ENTER o hace click en el boton 'SUSCRIBIRSE'.
        Then La pagina se recarga y se visualiza el siguiente mensaje.'<MENSAJE>'
        Examples:
            | MENSAJE | 
            | Gracias por suscribirse. | 

    Scenario Outline: TC N°2 : Intentar suscribirse con formato de email invalido.
        Given Que el usuario se encuentra en el footer del Home Page.
        When El usuario escribe en el Input un formato de email invalido y presiona ENTER o hace click en el boton 'SUSCRIBIRSE'.
        Then Aparece el VALIDATOR que incluye el siguiente mensaje '<MENSAJE_VALIDATOR>'.
        Examples:
            | MENSAJE_VALIDATOR | 
            | Introduzca una dirección válida de correo electrónico |      