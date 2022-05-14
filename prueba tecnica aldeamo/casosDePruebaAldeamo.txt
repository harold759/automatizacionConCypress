Feature: Inicio de Sesion

  Scenario Outline: login usuario valido
    Given ingreso a la pagina de login de la aplicacion web swaglabs
    When se ingresa el nombre de usuario "<user_name>"
    And se ingresa el password "<password>"
    And clic en boton login
    Then ingresa a la pagina de productos

    Examples:
      |user_name|password|
      |standard_user|secret_sauce|
      |locked_out_user|secret_sauce|
      |problem_user|secret_sauce|
      |performance_glitch_user|secret_sauce|

  Scenario: login usuario invalido
   Given ingreso a la pagina de login de la aplicacion web swaglabs
    When se ingresa nombre de usuario no valido "Harold_Espana"
    And se ingresa password no valido "123456"
    And clic en boton login
    Then muestra mensaje de error de usuario con el texto:
   """
   Epic sadface: Username and password do not match any user in this service
   """

  Scenario: login con campo usuario vacio
    Given ingreso a la pagina de login de la aplicacion web swaglabs
    When se ingresa password "secret_sauce"
    And clic en boton login
    Then muestra mensaje de error usuario requerido con el texto:
   """
   Epic sadface: Username is required
   """

  Scenario: login con campo password vacio
    Given ingreso a la pagina de login de la aplicacion web swaglabs
    When se ingresa nombre de usuario "standard_user"
    And clic en boton login
    Then muestra mensaje de error password requerido con el texto:
   """
   Epic sadface: Password is required
   """

  Scenario: cerrar mensaje de error
    Given ingreso a la pagina de login de la aplicacion web swaglabs
    And clic en boton login
    And se ha mostrado un mensaje de error
    When hago clic en el boton con la x del mensaje
    Then se oculta el mensaje de error
