Feature: EL AUDITOR - LISTA DE PRODUCTOS Y DETALLES DE PRODUCTOS.

    Scenario Outline: TC N°1 : Verificar que la lista de productos este visible.
        Given Que el usuario se encuentra en el Home Page.
        When El usuario hace click en la categoria '<categoria>'
        Then Accede exitosamente a dicha categoria seleccionada Y se visualiza su '<path>' correspondiente.
        And Se visualiza exitosamente la lista de productos de dicha categoria.
        Examples:
            | categoria | path | 
            | Resmas  | /resmas.html  |

    Scenario Outline: TC N°2 : Verificar que los datos del 1° producto de la lista esten visibles en su PDP.
        Given El usuario se encuentra en la seccion 'RESMAS'. '<categoria_resmas>' - '<path_resmas>'
        When Hace click en el 1° producto de la lista.
        Then Se visualiza exitosamente su IMAGEN , DISPONIBILIDAD Y PRECIO.
        Examples:
            | categoria_resmas | path_resmas | 
            | Resmas  | /resmas.html  |       

