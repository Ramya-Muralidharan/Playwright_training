Feature: Login

  Scenario: Valid user can log in
    Given I open the login page
    When I submit valid credentials
    Then I should see the secure area message
