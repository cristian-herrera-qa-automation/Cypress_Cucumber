Feature: EL AUDITOR REGISTRO - NEW USER.

    Background: PRECONDICIONES.
    Given Que el usuario NO tiene una cuenta existente.
    And Se encuentra en la seccion REGISTRO - PopUp.
    
    Scenario Outline: TC N°1 REGISTRO EXITOSO - CAMPOS OBLIGATORIOS.
        When El usuario completa los campos 'NOMBRE' , 'APELLIDO' , 'CORREOELECTRONICO' , '<contraseña>' y '<confirmarContraseña>' con datos validos.
        And  Hace click en el Boton REGISTRARSE.
        Then Se registra exitosamente y es redirigido a la Home Page.
        Examples:
              | contraseña | confirmarContraseña |
             |  Magdalenaoficial12 | Magdalenaoficial12  |

    Scenario Outline: TC N°2 REGISTRO INCORRECTO - FORMATO DE EMAIL INVALIDO.
        When El usuario completa los campos 'NOMBRE' , 'APELLIDO' , '<contraseña2>' Y '<confirmarContraseña2>' con datos validos.
        And Completa el campo obligatorio CORREO ELECTRONICO con un formato invalido.
        And  Hace click en el Boton REGISTRARSE.
        Then Aparece el VALIDATOR correspondiente en dicho campo.
        Examples:
              | contraseña2 | confirmarContraseña2 |
             |  Magdalenaoficial12 | Magdalenaoficial12  |
   
     Scenario Outline: TC N°3 REGISTRO INCORRECTO - CAMPOS VACIOS.
        When El usuario deja VACIOS los campos obligatorios 'NOMBRE' , 'APELLIDO' , 'CONTRASEÑA' , 'ConfirmarContraseña' y 'CorreoElectronico' .
        And  Hace click en el Boton 'REGISTRARSE'.
        Then Aparecen los VALIDATORS '<Validator>' en dichos campos.
        Examples:
            | Validator | 
            | Este es un campo obligatorio.| 
















