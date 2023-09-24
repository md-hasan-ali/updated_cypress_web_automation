Feature: Automate the wordpress website 

    #TC_01
    Background: Log in to your WordPress site
        Then User login into wordpress website
        And Enter the userName, password and click on login button

    # TC_02
    @skip
    Scenario: Check whether the “WP Dark Mode” Plugin is Active or not
        And Click on the plugings button and enter the "WP Dark Mode" plugin
        Then The “WP Dark Mode” Plugin is not Active

    # TC_03
    @skip
    Scenario: Install the "WP Dark Mode" Plugin and Activate it
        When Click on the Plugins button
        And Click on the 'Add New' button
        And Search the 'WP Dark Mode' pugin
        And Click on the install buttn and click on the activate button

    # TC_04
    @focus
    Scenario: Enable Backend Darkmode from Settings -> General Settings
        When Click on the 'WP Dark Mode'
        And Click on the 'Enable Backend Darkmode' button
        And Click on the 'Save Settings' button

    # TC_05
    @focus
    Scenario: Enable Backend Darkmode from Settings -> General Settings
        Then whether the Darkmode is working on the admin dashboard

    # TC_07
    @focus
    Scenario: Change the “Floating Switch Style” from the default selections
        When Click on the 'WP Dark Mode'
        And Click on the switch settings
        And Select the "floating Switch style"
        And Click on the 'Save Settings' button