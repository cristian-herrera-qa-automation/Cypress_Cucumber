Feature: EL AUDITOR - NAVEGATION PAGES.

    Background: PRECONDICIONES.
        Given Que el usuario se encuentra en el Home Page.

    Scenario Outline: TC N°1 : NAVEGACION EXITOSA POR DIFERENTES SECCIONES.
        When El usuario hace click en la categoria '<categoria>'
        Then Accede exitosamente a dicha categoria seleccionada y se visualiza correctamente su URL '<path>' correspondiente.
        Examples:
            | categoria         | path                           |
            | Resmas            | /resmas.html                   |
            | Informática       | /tecnologia-e-informatica.html |
            | Electrodomésticos | /electrodomesticos.html        |
            | Amoblamientos     | /amoblamientos.html            |








