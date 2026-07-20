Feature: Login1

  @TC001
  Scenario: agent1 can log in
    Given I load URL
    When I login with "Agent1"
    And I add "<Product>" to cart
    And I sort the products by "Price (low to high)"
    Examples:
      | Product             |
      | Sauce Labs Backpack |

  @q
  Scenario Outline: agent2 can log in
    Given I load URL
    When I login with "Agent1"
    And I add "<Product>" to cart
    @TC002
    Examples:
      | Product             |
      | Sauce Labs Backpack |
    @TC003
    Examples:
      | Product               |
      | Sauce Labs Bike Light |