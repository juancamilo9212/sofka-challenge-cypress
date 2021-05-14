Feature: Pagina de manejo de tiempos

   Esta pagina tiene multiples tipos de interacciones como crear
   editar, eliminar y consultar registros

   Background: autenticacion
   Given el sofkiano visita la pagina de OurSofka

   Scenario: Crear un registro
   When el usuario diligencia la informacion
   And el usuario da click en el boton de adicionar
   Then el usuario ve que se crea un registro

   Scenario: Editar un registro
   When el usuario da click en el boton de editar
   And el usuario realiza un cambio
   And el usuario da click en guardar
   Then el usuario ve que el registro fue modificado

   Scenario: eliminar registro
   When el usario da click en e boton eliminar
   And el usuario da click en el boton de confirmacion
   Then el usuario ve que el registro fue borrado

   Scenario Outline: El usuario ve las horas registradas
   When el usuario da click en el "<boton>"
   Then el usuario va a ver las horas registradas dependiendo del "<boton>"
   Examples:
   |      boton    | 
   |      Hoy      | 
   | Esta semana   | 
   | Este mes      | 

   Scenario: El usuario consulta con una fecha especifica
   When el usuario da click en el selector de fechas
   And el usuario escoge un rango de fechas
   Then el usuario va a ver las horas registradas 

   
