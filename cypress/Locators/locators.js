class locatorsPage {

  // login locators
  userName = "//input[@id='user_login']"
  password = "//input[@id='user_pass']"
  wp_login = "//input[@id='wp-submit']"

  plugings = "//a[@class='wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins']//div[@class='wp-menu-name']"
  instaledPluginSearch = "//input[@id='plugin-search-input']"
  no_items = "//tr[@class='no-items']"

  add_new_button = "//a[@class='page-title-action']"
  search_plugin_input = "//input[@id='search-plugins']"
  install_button = '(//a[contains(text(), "Install Now")])[1]'
  activate_button = "//a[normalize-space()='Activate']"

  wp_dark_mode = "//div[normalize-space()='WP Dark Mode']"
  enabled_backend_darkmode = "//label[@for='wppool-wp_dark_mode_general[enable_backend]']//div[@class='wp-dark-mode-ignore']"
  save_settings = "//div[@id='wp_dark_mode_general']//form[@method='post']//div//input[@id='save_settings']"

  //div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']

  dark_mode_active = "//p[@class='dark wp-dark-mode-ignore']"
  swicth_settings = "//a[@id='wp_dark_mode_switch-tab']//span[contains(text(),'Switch Settings')]"
  select_one = "//label[@for='wppool-wp_dark_mode_switch[switch_style][1]']//img[@class='image-choose-img']"

  
}
export default locatorsPage;