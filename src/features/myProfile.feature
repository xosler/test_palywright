Feature: My profile

    Scenario: Change infos in my profile
        Given the user is logged into the app
            And the user navigates to the "My Profile" page
            And the user updates the name to "Alexandre"
            And the user updates the middle name to "Von"
            And the user updates the last name to "Schossler"
        When the user clicks the "Save" button
        Then the system should display a success message