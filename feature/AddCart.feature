Feature: Add cart

@TC004 @q
  Scenario: Verify price
    Given I load URL
    When I execute "<TestCaseID>"
    When I login with "Agent1"
    And I read "Price" data from json file for "TC001"
    Then I validate the "Price"
    Examples:
      |TestCaseID| Product             |
      | TC004    | Sauce Labs Backpack |