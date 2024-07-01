/**
 *
 * Scripts
 *
 * Initialization of the template base and page scripts.
 *
 *
 */

 class Scripts {
  constructor() {
    this._initSettings();
    this._initVariables();
    this._addListeners();
    this._init();
  }

  // Showing the template after waiting for a bit so that the css variables are all set
  // Initialization of the common scripts and page specific ones
  _init() {
    setTimeout(() => {
      document.documentElement.setAttribute('data-show', 'true');
      document.body.classList.remove('spinner');
      this._initBase();
      this._initCommon();
      this._initPages();
    }, 100);
  }

  // Base scripts initialization
  _initBase() {
    // Navigation
    if (typeof Nav !== 'undefined') {
      const nav = new Nav(document.getElementById('nav'));
    }

    // Search implementation
    if (typeof Search !== 'undefined') {
      const search = new Search();
    }

    // AcornIcons initialization
    if (typeof AcornIcons !== 'undefined') {
      new AcornIcons().replace();
    }
  }

  // Common plugins and overrides initialization
  _initCommon() {
    // common.js initialization
    if (typeof Common !== 'undefined') {
      let common = new Common();
    }
  }

  // Pages initialization
  _initPages() {
    // customers.detail.js initialization
    if (typeof CustomersDetail !== 'undefined') {
      const customersDetail = new CustomersDetail();
    }
    // customers.list.js initialization
    if (typeof CustomersList !== 'undefined') {
      const customersList = new CustomersList();
    }
    // dashboard.js initialization
    if (typeof Dashboard !== 'undefined') {
      const dashboard = new Dashboard();
    }
    // discount.js initialization
    if (typeof Discount !== 'undefined') {
      const discount = new Discount();
    }
    // orders.list.js initialization
    if (typeof OrdersList !== 'undefined') {
      const ordersList = new OrdersList();
    }
    // products.detail.js initialization
    if (typeof ProductsDetail !== 'undefined') {
      const productsDetail = new ProductsDetail();
    }
    // products.list.js initialization
    if (typeof ProductsList !== 'undefined') {
      const productsList = new ProductsList();
    }
    // settings.general.js initialization
    if (typeof SettingsGeneral !== 'undefined') {
      const settingsGeneral = new SettingsGeneral();
    }
    // storefront.categories.js initialization
    if (typeof StorefrontCategories !== 'undefined') {
      const storefrontCategories = new StorefrontCategories();
    }
    // storefront.checkout.js initialization
    if (typeof StorefrontCheckout !== 'undefined') {
      const storefrontCheckout = new StorefrontCheckout();
    }
    // storefront.detail.js initialization
    if (typeof StorefrontDetail !== 'undefined') {
      const storefrontDetail = new StorefrontDetail();
    }
    // storefront.filters.js initialization
    if (typeof StorefrontFilters !== 'undefined') {
      const storefrontFilters = new StorefrontFilters();
    }
    // storefront.home.js initialization
    if (typeof StorefrontHome !== 'undefined') {
      const storefrontHome = new StorefrontHome();
    }
  }

  // Settings initialization
  _initSettings() {
    if (typeof Settings !== 'undefined') {
      const settings = new Settings({attributes: {placement: 'vertical', layout: 'boxed', color: 'light-green' }, showSettings: true, storagePrefix: 'acorn-ecommerce-platform-'});
    }
  }

  // Variables initialization of Globals.js file which contains valus from css
  _initVariables() {
    if (typeof Variables !== 'undefined') {
      const variables = new Variables();
    }
  }

  // Listeners of menu and layout changes which fires a resize event
  _addListeners() {
    document.documentElement.addEventListener(Globals.menuPlacementChange, (event) => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 25);
    });

    document.documentElement.addEventListener(Globals.layoutChange, (event) => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 25);
    });

    document.documentElement.addEventListener(Globals.menuBehaviourChange, (event) => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 25);
    });
  }
}

// Shows the template after initialization of the settings, nav, variables and common plugins.
(function () {
  window.addEventListener('DOMContentLoaded', () => {
    // Initializing of the Scripts
    if (typeof Scripts !== 'undefined') {
      const scripts = new Scripts();
    }
  });
})();

// Disabling dropzone auto discover before DOMContentLoaded
(function () {
  if (typeof Dropzone !== 'undefined') {
    Dropzone.autoDiscover = false;
  }
})();
