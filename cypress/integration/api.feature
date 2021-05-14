Feature: API testing

   Las peticiones al back son testeadas

   Scenario: Crear un registro valido
   Given un usuario desea crear un registro
   When el usuario envia la peticion POST valida
   Then el usuario vera el registro creado con exito

   Scenario: Modificar un registro
   Given un usuario desea modificar un registro
   When el usuario envia la peticion POST para editar
   Then el usuario vera el registro modificado con exito

   Scenario Outline: listar las horas laboradas
   Given un usuario quiere ver las horas laboradas
   When el usuario envia la peticion al back end segun la "<fecha>"
   Then el usuario vera un <codigo> de respuesta
   
   Examples:
   | fecha          | codigo  |  
   | Hoy            |  200    |
   | Esta semana    |  200    |
   | Este mes       |  200    | 

   Scenario:Eliminar un registro
   Given un usuario desea eliminar un registro
   When el usuario envia la peticion DELETE para eliminar
   Then el usuario vera el registro eliminado con exito
   
