Feature: EL AUDITOR - CHECKOUT

    Background: PRECONDICIONES.
    Given Que usuario se encuentra en el Home Page.

    Scenario Outline: TC N°1 : Verificar que la cantidad del producto agregado sea igual en el Checkout.
        When Se posiciona en cualquier categoria '<categoria>' y acceda al PDP del primer producto.
        And Haya agregado al carrito de compras la cantidad de '3'.
        And Haya hecho click en el enlace 'CARRITO'.
        Then La Pagina se redirige al Checkout y se visualiza la IMAGEN , CANTIDAD '3' Y PRECIO TOTAL.
        Examples:
            | categoria | 
            | Resmas | 