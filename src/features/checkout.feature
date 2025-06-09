Feature: Checkout

    Scenario: Add multiple items to the cart and verify the total amount
        Given the user is logged into the marketplace app
            And the following items have been added to the cart:
                | Product                  |
                | Sauce Labs Backpack      |
                | Sauce Labs Fleece Jacket |
                | Sauce Labs Onesie        |
        When the user accesses the shopping cart
        Then the system should display the following products in the cart:
            | Product                  |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Onesie        |


    Scenario: Validade the total amount in the checkout
        Given the user is logged into the marketplace app
            And the following items have been added to the cart:
                | Product                  |
                | Sauce Labs Backpack      |
                | Sauce Labs Fleece Jacket |
                | Sauce Labs Onesie        |
            And the user accesses the shopping cart
            And the user click on checkout
            And the user fill their personal information with "Alexandre", "Schossler", "85890-000"
        When the user click on contiunue
        Then the system should display the following products in the cart:
            | Product                  |
            | Sauce Labs Backpack      |
            | Sauce Labs Fleece Jacket |
            | Sauce Labs Onesie        |
            And the total price of the shop should be "95.01"


    Scenario: Finish the checkout with success
        Given the user is logged into the marketplace app
            And the following items have been added to the cart:
                | Product                  |
                | Sauce Labs Backpack      |
                | Sauce Labs Fleece Jacket |
                | Sauce Labs Onesie        |
            And the user accesses the shopping cart
            And the user click on checkout
            And the user fill their personal information with "Alexandre", "Schossler", "85890-000"
            And the user click on contiunue
        When the user click on finish in the checkout page
        Then the system should finish the checkout
            And present the sucess message
            And present the button to back to home
