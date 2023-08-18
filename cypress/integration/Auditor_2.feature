Feature: EL AUDITOR LOG-OUT

    Background: PRECONDICIONES.
    Given DADO QUE EL USUARIO SE ENCUENTRA EN LA SECCION LOGIN - PopUp
    And Ya posee una cuenta registrada previamente.
    Scenario Outline: TC N°1 LOG-OUT EXITOSO CON CUENTA EXISTENTE.
        When El usuario introduce un '<username>' y '<password>' validos.
        And  Hace click en el Boton ENTRAR.
        Then El usuario se logea exitosamente y es redirigido a la Home Page.
        And  Hace click en el boton CERRAR SESION.
        Then Luego de 5 segundos es redirigido a la Home Page. 
        Examples:
            | username |               | password| 
            | test1234@hola.com |      |Losloros12|