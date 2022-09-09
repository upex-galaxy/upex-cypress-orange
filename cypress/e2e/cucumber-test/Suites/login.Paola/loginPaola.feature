Feature: login page


    Feature page where the users can login to their account
    Scenario: Succes login
    Given A user enters to the login page
    When A user enters username "standard_user"
    And A user enters password ""secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in 