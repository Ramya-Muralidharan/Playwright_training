Feature: Login1

  @TC001 @q
  Scenario: agent1 can log in
    Given I load URL
    When I execute "<TestCaseID>"
    When I login with "Agent1"
    And I add "<Product>" to cart
    And I sort the products by "Price (low to high)"
    And I read price
    And I store data in json file
    Examples:
      |TestCaseID| Product             |
      | TC001    | Sauce Labs Backpack |


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

          @TC001
    Scenario: agent1 can log in
        Given I load URL
        And I load the test data for "<TestCaseID>"
        When I login with "Agent1"
        And I add a product to cart
        And I sort the products

        Examples:
            | TestCaseID |
            | TC001      |
            | TC002      |