Feature: SECCION LOGIN - PopUp -EL AUDITOR

    Background: PRECONDICIONES.
    Given DADO QUE EL USUARIO SE ENCUENTRA EN LA SECCION LOGIN - PopUp
    And Ya posee una cuenta registrada previamente.
    Scenario Outline: TC N°1 LOGIN EXITOSO CON CUENTA EXISTENTE.
        When El usuario introduce un '<username>' y '<password>' validos.
        And Hace click en el Boton ENTRAR.
        Then El usuario se logea exitosamente y es redirigido a la Home Page.
        Examples:
            | username |               | password| 
            | test1234@hola.com |      |Losloros12|

    Scenario Outline: TC N°2 LOGIN : Inicio de sesion Invalido con datos Incorrectos.
        When El usuario introduce datos incorrectos en los campos '<username1>' y '<password1>'
        And Hace click en el Boton ENTRAR.!!!
        Then Aparece un msj con un mensaje de alerta.
        Examples:
            | username1 |               | password1| 
            | test12345@hola.com |       |Losloros1234|



    Scenario Outline: TC N°3 LOGIN INVALIDO CON CAMPOS VACIOS.
        When El usuario hace click en boton ENTRAR, dejando los campos '<email2>' y '<password2>' vacios.
        Then Aparecen los Validators en dichos campos.
        Examples:
            | email2 | password2 | 
            |   |   | 
        
            