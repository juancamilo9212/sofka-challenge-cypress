Feature: Proceso de autenticacion

   Como sofkiano deseo autenticarme en la aplicacion OurSofka para 
   registrar mis horas laboradas

   Scenario: Visitar la pagina
   Given el sofkiano visita la pagina de OurSofka
   When el usuario se utentica como colaborador
   Then el usuario ve el home page de OurSofka
   
   
   



   