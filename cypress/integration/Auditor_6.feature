Feature: EL AUDITOR - BUSCAR PRODUCTO.

    Scenario Outline: TC N°1 : Buscar un producto con el Search Input y verificar el titulo de la busqueda.
        Given Que el usuario se encuentra en el Home Page.
        When El usuario escribe en el Search Input un producto valido '<producto>' y presiona ENTER o hace click en el icono de busqueda.
        Then Se realiza la busqueda exitosa del producto y se visualiza su titulo '<titulo>'.
        And Se visualiza la lista de productos relacionados a esa busqueda.
        Examples:
            | producto | titulo |
            | monitor  | Monitores |






            