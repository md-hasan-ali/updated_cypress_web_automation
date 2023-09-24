import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import Data from '../../Data/data'
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new Data();


// Wordpress website Login 
Given('User login into wordpress website', () => {
    cy.visit(data.url)
    cy.wait(data.oneSecond)
})
Then('Enter the userName, password and click on login button', ()=> {
    cy.xpath(locator.userName).type(data.userName)
    cy.wait(data.oneSecond)
    cy.xpath(locator.password).type(data.password)
    cy.wait(data.oneSecond)
    cy.xpath(locator.wp_login).click()
    cy.wait(data.oneSecond)
})

// WP Dark Mode Pluging active or Not
Then('Click on the plugings button and enter the "WP Dark Mode" plugin', ()=> {
    cy.xpath(locator.plugings).click()
    cy.wait(data.oneSecond)
    cy.xpath(locator.instaledPluginSearch).type("WP Dark Mode {Enter}")
})
Then("The “WP Dark Mode” Plugin is not Active", ()=> {
    cy.xpath(locator.no_items).should('be.visible')
    cy.wait(data.oneSecond)
})

// Install the Plugin and Activate it

Then("Click on the Plugins button", ()=> {
    cy.xpath(locator.plugings).click()
    cy.wait(data.oneSecond)
})
Then("Click on the 'Add New' button", ()=> {
    cy.xpath(locator.add_new_button).click()
    cy.wait(data.oneSecond)
})
Then("Search the 'WP Dark Mode' pugin", ()=> {
    cy.xpath(locator.search_plugin_input).type("WP Dark Mode {Enter}")
    cy.wait(data.oneSecond)
})
Then("Click on the install buttn and click on the activate button", ()=> {
    cy.xpath(locator.install_button).click()
    cy.wait(data.oneSecond)
    cy.xpath(locator.activate_button).click()
    cy.wait(data.twoSecond)
})

// Enable Backend Darkmode from Settings 

Then("Click on the 'WP Dark Mode'", ()=> {
    cy.xpath(locator.wp_dark_mode).click()
    cy.wait(data.oneSecond)
})
Then("Click on the 'Enable Backend Darkmode' button", ()=> {
    cy.xpath(locator.enabled_backend_darkmode).click()
    cy.wait(data.oneSecond)
})
Then("Click on the 'Save Settings' button", ()=> {
    cy.xpath(locator.save_settings).click()
    cy.wait(data.oneSecond)
})

Then('whether the Darkmode is working on the admin dashboard', ()=> {
    cy.xpath(locator.dark_mode_active).should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.wait(data.oneSecond)
})


// Change the “Floating Switch Style” from the default selections
Then('Click on the switch settings', ()=> {
    cy.xpath(locator.swicth_settings).click()
    cy.wait(data.oneSecond)
})
Then('Select the "floating Switch style"', ()=> {
    cy.xpath(locator.select_one).click()
    cy.wait(data.oneSecond)
})

