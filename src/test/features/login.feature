Feature: Login test of BlazeDemo

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "raghu_a"
    And User enter the password as "admin"
    When User click on the login button
    Then Login should be success