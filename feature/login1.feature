Feature: Login1

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

# @TC002
# Scenario: agent2 can log in
#     Given I load URL
#     And I load the test data for "TC002"
# When I login with "Agent1"
# And I add a product to cart
# And I sort the products by "Price (low to high)"
