import CartPage from "../../components/StorefrontCart";

export default function TestPage() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  <title>Acorn Admin Template | Cart Page</title>
  <meta name="description" content="Ecommerce Cart Page" />
  {/* Favicon Tags Start */}
  <link
    rel="apple-touch-icon-precomposed"
    sizes="57x57"
    href="/img/favicon/apple-touch-icon-57x57.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="/img/favicon/apple-touch-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="/img/favicon/apple-touch-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="/img/favicon/apple-touch-icon-144x144.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="60x60"
    href="/img/favicon/apple-touch-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="120x120"
    href="/img/favicon/apple-touch-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="76x76"
    href="/img/favicon/apple-touch-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon-precomposed"
    sizes="152x152"
    href="/img/favicon/apple-touch-icon-152x152.png"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon/favicon-196x196.png"
    sizes="196x196"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon/favicon-96x96.png"
    sizes="96x96"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon/favicon-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon/favicon-16x16.png"
    sizes="16x16"
  />
  <link
    rel="icon"
    type="image/png"
    href="/img/favicon/favicon-128.png"
    sizes="128x128"
  />
  <meta name="application-name" content=" " />
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta
    name="msapplication-TileImage"
    content="/img/favicon/mstile-144x144.png"
  />
  <meta
    name="msapplication-square70x70logo"
    content="/img/favicon/mstile-70x70.png"
  />
  <meta
    name="msapplication-square150x150logo"
    content="/img/favicon/mstile-150x150.png"
  />
  <meta
    name="msapplication-wide310x150logo"
    content="/img/favicon/mstile-310x150.png"
  />
  <meta
    name="msapplication-square310x310logo"
    content="/img/favicon/mstile-310x310.png"
  />
  {/* Favicon Tags End */}
  {/* Font Tags Start */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="/font/CS-Interface/style.css" />
  {/* Font Tags End */}
  {/* Vendor Styles Start */}
  <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/vendor/OverlayScrollbars.min.css" />
  {/* Vendor Styles End */}
  {/* Template Base Styles Start */}
  <link rel="stylesheet" href="/css/styles.css" />
  {/* Template Base Styles End */}
  <link rel="stylesheet" href="/css/main.css" />
  <div id="root">
    <div id="nav" className="nav-container d-flex">
      <div className="nav-content d-flex">
        {/* Logo Start */}
        <div className="logo position-relative">
          <a href="Dashboard.html">
            {/* Logo can be added directly */}
            {/* <img src="img/logo/logo-white.svg" alt="logo" /> */}
            {/* Or added via css to provide different ones for different color themes */}
            <div className="img" />
          </a>
        </div>
        {/* Logo End */}
        {/* User Menu Start */}
        <div className="user-container d-flex">
          <a
            href="#"
            className="d-flex user position-relative"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="profile"
              alt="profile"
              src="img/profile/profile-1.webp"
            />
            <div className="name">Zayn Hartley</div>
          </a>
          <div className="dropdown-menu dropdown-menu-end user-menu wide">
            <div className="row mb-3 ms-0 me-0">
              <div className="col-12 ps-1 mb-2">
                <div className="text-extra-small text-primary">ACCOUNT</div>
              </div>
              <div className="col-6 ps-1 pe-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">User Info</a>
                  </li>
                  <li>
                    <a href="#">Preferences</a>
                  </li>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 pe-1 ps-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Billing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-1 ms-0 me-0">
              <div className="col-12 p-1 mb-2 pt-2">
                <div className="text-extra-small text-primary">APPLICATION</div>
              </div>
              <div className="col-6 ps-1 pe-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Themes</a>
                  </li>
                  <li>
                    <a href="#">Language</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 pe-1 ps-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Devices</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-1 ms-0 me-0">
              <div className="col-12 p-1 mb-3 pt-3">
                <div className="separator-light" />
              </div>
              <div className="col-6 ps-1 pe-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i
                        data-acorn-icon="help"
                        className="me-2"
                        data-acorn-size={17}
                      />
                      <span className="align-middle">Help</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        data-acorn-icon="file-text"
                        className="me-2"
                        data-acorn-size={17}
                      />
                      <span className="align-middle">Docs</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 pe-1 ps-1">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i
                        data-acorn-icon="gear"
                        className="me-2"
                        data-acorn-size={17}
                      />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        data-acorn-icon="logout"
                        className="me-2"
                        data-acorn-size={17}
                      />
                      <span className="align-middle">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* User Menu End */}
        {/* Icons Menu Start */}
        <ul className="list-unstyled list-inline text-center menu-icons">
          <li className="list-inline-item">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#searchPagesModal"
            >
              <i data-acorn-icon="search" data-acorn-size={18} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" id="pinButton" className="pin-button">
              <i
                data-acorn-icon="lock-on"
                className="unpin"
                data-acorn-size={18}
              />
              <i
                data-acorn-icon="lock-off"
                className="pin"
                data-acorn-size={18}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" id="colorButton">
              <i
                data-acorn-icon="light-on"
                className="light"
                data-acorn-size={18}
              />
              <i
                data-acorn-icon="light-off"
                className="dark"
                data-acorn-size={18}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              data-bs-toggle="dropdown"
              data-bs-target="#notifications"
              aria-haspopup="true"
              aria-expanded="false"
              className="notification-button"
            >
              <div className="position-relative d-inline-flex">
                <i data-acorn-icon="bell" data-acorn-size={18} />
                <span className="position-absolute notification-dot rounded-xl" />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out"
              id="notifications"
            >
              <div className="scroll">
                <ul className="list-unstyled border-last-none">
                  <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                    <img
                      src="img/profile/profile-1.webp"
                      className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                      alt="..."
                    />
                    <div className="align-self-center">
                      <a href="#">Joisse Kaycee just sent a new comment!</a>
                    </div>
                  </li>
                  <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                    <img
                      src="img/profile/profile-2.webp"
                      className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                      alt="..."
                    />
                    <div className="align-self-center">
                      <a href="#">New order received! It is total $147,20.</a>
                    </div>
                  </li>
                  <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                    <img
                      src="img/profile/profile-3.webp"
                      className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                      alt="..."
                    />
                    <div className="align-self-center">
                      <a href="#">3 items just added to wish list by a user!</a>
                    </div>
                  </li>
                  <li className="pb-3 pb-3 border-bottom border-separator-light d-flex">
                    <img
                      src="img/profile/profile-6.webp"
                      className="me-3 sw-4 sh-4 rounded-xl align-self-center"
                      alt="..."
                    />
                    <div className="align-self-center">
                      <a href="#">Kirby Peters just sent a new message!</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        {/* Icons Menu End */}
        {/* Menu Start */}
        <div className="menu-container flex-grow-1">
          <ul id="menu" className="menu">
            <li>
              <a href="Dashboard.html">
                <i
                  data-acorn-icon="shop"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#products" data-href="Products.html">
                <i
                  data-acorn-icon="cupcake"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Products</span>
              </a>
              <ul id="products">
                <li>
                  <a href="Products.List.html">
                    <span className="label">List</span>
                  </a>
                </li>
                <li>
                  <a href="Products.Detail.html">
                    <span className="label">Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#orders" data-href="Orders.html">
                <i
                  data-acorn-icon="cart"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Orders</span>
              </a>
              <ul id="orders">
                <li>
                  <a href="Orders.List.html">
                    <span className="label">List</span>
                  </a>
                </li>
                <li>
                  <a href="Orders.Detail.html">
                    <span className="label">Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#customers" data-href="Customers.html">
                <i
                  data-acorn-icon="user"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Customers</span>
              </a>
              <ul id="customers">
                <li>
                  <a href="Customers.List.html">
                    <span className="label">List</span>
                  </a>
                </li>
                <li>
                  <a href="Customers.Detail.html">
                    <span className="label">Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#storefront" data-href="Storefront.html">
                <i
                  data-acorn-icon="screen"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Storefront</span>
              </a>
              <ul id="storefront">
                <li>
                  <a href="Storefront.Home.html">
                    <span className="label">Home</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Filters.html">
                    <span className="label">Filters</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Categories.html">
                    <span className="label">Categories</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Detail.html">
                    <span className="label">Detail</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Cart.html">
                    <span className="label">Cart</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Checkout.html">
                    <span className="label">Checkout</span>
                  </a>
                </li>
                <li>
                  <a href="Storefront.Invoice.html">
                    <span className="label">Invoice</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="Shipping.html">
                <i
                  data-acorn-icon="shipping"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Shipping</span>
              </a>
            </li>
            <li>
              <a href="Discount.html">
                <i
                  data-acorn-icon="tag"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Discount</span>
              </a>
            </li>
            <li>
              <a href="Settings.html">
                <i
                  data-acorn-icon="gear"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Settings</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Menu End */}
        {/* Mobile Buttons Start */}
        <div className="mobile-buttons-container">
          {/* Menu Button Start */}
          <a href="#" id="mobileMenuButton" className="menu-button">
            <i data-acorn-icon="menu" />
          </a>
          {/* Menu Button End */}
        </div>
        {/* Mobile Buttons End */}
      </div>
      <div className="nav-shadow" />
    </div>
    <main>
      <div className="container">
        {/* Title and Top Buttons Start */}
        <div className="page-title-container">
          <div className="row">
            {/* Title Start */}
            <div className="col-auto mb-3 mb-md-0 me-auto">
              <div className="w-auto sw-md-30">
                <a
                  href="#"
                  className="muted-link pb-1 d-inline-block breadcrumb-back"
                >
                  <i data-acorn-icon="chevron-left" data-acorn-size={13} />
                  <span className="text-small align-middle">Storefront</span>
                </a>
                <h1 className="mb-0 pb-0 display-4" id="title">
                  Cart
                </h1>
              </div>
            </div>
            {/* Title End */}
          </div>
        </div>
        {/* Title and Top Buttons End */}
        <div className="row">
          <div className="col-12 col-lg order-1 order-lg-0">
            {/* Items Start */}
            <h2 className="small-title">Items</h2>
            <div className="mb-5">
              <div className="card mb-2">
                <div className="row g-0 sh-18 sh-md-14">
                  <div className="col-auto">
                    <img
                      src="img/product/small/product-1.webp"
                      className="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15"
                      alt="thumb"
                    />
                  </div>
                  <div className="col position-relative h-100">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                          <div className="pt-0 pb-0 pe-2">
                            <div className="h6 mb-0 clamp-line" data-line={1}>
                              Wooden Animal Toys
                            </div>
                            <div className="text-muted text-small">
                              Wood &amp; Toy
                            </div>
                            <div className="mb-0 sw-19">$ 22.60</div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 pe-0 d-flex align-items-center">
                          <div
                            className="input-group spinner sw-11"
                            data-trigger="spinner"
                          >
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-down single px-2 d-flex justify-content-center"
                                data-spin="down"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center px-0"
                              defaultValue={4}
                              data-rule="quantity"
                            />
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-up single px-2 d-flex justify-content-center"
                                data-spin="up"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                          <div className="h6 mb-0">$ 124.20</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2"
                      type="button"
                    >
                      <i data-acorn-icon="error-hexagon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 sh-18 sh-md-14">
                  <div className="col-auto">
                    <img
                      src="img/product/small/product-2.webp"
                      className="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15"
                      alt="thumb"
                    />
                  </div>
                  <div className="col position-relative h-100">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                          <div className="pt-0 pb-0 pe-2">
                            <div className="h6 mb-0 clamp-line" data-line={1}>
                              Aromatic Green Candle
                            </div>
                            <div className="text-muted text-small">Oakland</div>
                            <div className="mb-0 sw-19">$ 15.75</div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 pe-0 d-flex align-items-center">
                          <div
                            className="input-group spinner sw-11"
                            data-trigger="spinner"
                          >
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-down single px-2 d-flex justify-content-center"
                                data-spin="down"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center px-0"
                              defaultValue={1}
                              data-rule="quantity"
                            />
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-up single px-2 d-flex justify-content-center"
                                data-spin="up"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                          <div className="h6 mb-0">$ 15.75</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2"
                      type="button"
                    >
                      <i data-acorn-icon="error-hexagon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 sh-18 sh-md-14">
                  <div className="col-auto">
                    <img
                      src="img/product/small/product-3.webp"
                      className="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15"
                      alt="thumb"
                    />
                  </div>
                  <div className="col position-relative h-100">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                          <div className="pt-0 pb-0 pe-2">
                            <div className="h6 mb-0 clamp-line" data-line={1}>
                              Good Glass Teapot
                            </div>
                            <div className="text-muted text-small">Ikea</div>
                            <div className="mb-0 sw-19">$ 8.50</div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 pe-0 d-flex align-items-center">
                          <div
                            className="input-group spinner sw-11"
                            data-trigger="spinner"
                          >
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-down single px-2 d-flex justify-content-center"
                                data-spin="down"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center px-0"
                              defaultValue={2}
                              data-rule="quantity"
                            />
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-up single px-2 d-flex justify-content-center"
                                data-spin="up"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                          <div className="h6 mb-0">$ 17.00</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2"
                      type="button"
                    >
                      <i data-acorn-icon="error-hexagon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 sh-18 sh-md-14">
                  <div className="col-auto">
                    <img
                      src="img/product/small/product-4.webp"
                      className="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15"
                      alt="thumb"
                    />
                  </div>
                  <div className="col position-relative h-100">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                          <div className="pt-0 pb-0 pe-2">
                            <div className="h6 mb-0 clamp-line" data-line={1}>
                              Modern Dark Pot
                            </div>
                            <div className="text-muted text-small">Ikea</div>
                            <div className="mb-0 sw-19">$ 18.75</div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 pe-0 d-flex align-items-center">
                          <div
                            className="input-group spinner sw-11"
                            data-trigger="spinner"
                          >
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-down single px-2 d-flex justify-content-center"
                                data-spin="down"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center px-0"
                              defaultValue={2}
                              data-rule="quantity"
                            />
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-up single px-2 d-flex justify-content-center"
                                data-spin="up"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                          <div className="h6 mb-0">$ 37.50</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2"
                      type="button"
                    >
                      <i data-acorn-icon="error-hexagon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 sh-18 sh-md-14">
                  <div className="col-auto">
                    <img
                      src="img/product/small/product-5.webp"
                      className="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15"
                      alt="thumb"
                    />
                  </div>
                  <div className="col position-relative h-100">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                          <div className="pt-0 pb-0 pe-2">
                            <div className="h6 mb-0 clamp-line" data-line={1}>
                              Wood Handle Hunter Knife
                            </div>
                            <div className="text-muted text-small">
                              Buck Knives
                            </div>
                            <div className="mb-0 sw-19">$ 12.00</div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 pe-0 d-flex align-items-center">
                          <div
                            className="input-group spinner sw-11"
                            data-trigger="spinner"
                          >
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-down single px-2 d-flex justify-content-center"
                                data-spin="down"
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center px-0"
                              defaultValue={3}
                              data-rule="quantity"
                            />
                            <div className="input-group-text">
                              <button
                                type="button"
                                className="spin-up single px-2 d-flex justify-content-center"
                                data-spin="up"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                          <div className="h6 mb-0">$ 36.00</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2"
                      type="button"
                    >
                      <i data-acorn-icon="error-hexagon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Items End */}
            {/* Banners Start */}
            <div className="row g-2">
              <div className="col-12">
                <h2 className="small-title">Worth Checking</h2>
              </div>
              <div className="col-12 col-sm-6 col-xxl-3">
                <div className="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                  <img
                    src="img/banner/cta-square-1.webp"
                    className="card-img h-100 scale"
                    alt="card image"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                    <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                      <div className="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">
                        Seasoned Breads
                      </div>
                      <a
                        href="Storefront.Filters.html"
                        className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link"
                      >
                        <i data-acorn-icon="chevron-right" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xxl-3">
                <div className="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                  <img
                    src="img/banner/cta-square-2.webp"
                    className="card-img h-100 scale"
                    alt="card image"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                    <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                      <div className="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">
                        Herbal and Vegan
                      </div>
                      <a
                        href="Storefront.Filters.html"
                        className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link"
                      >
                        <i data-acorn-icon="chevron-right" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xxl-3">
                <div className="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                  <img
                    src="img/banner/cta-square-3.webp"
                    className="card-img h-100 scale"
                    alt="card image"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                    <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                      <div className="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">
                        Fruit Mixed Dough
                      </div>
                      <a
                        href="Storefront.Filters.html"
                        className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link"
                      >
                        <i data-acorn-icon="chevron-right" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xxl-3">
                <div className="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                  <img
                    src="img/banner/cta-square-4.webp"
                    className="card-img h-100 scale"
                    alt="card image"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                    <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                      <div className="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">
                        Berries and Nuts
                      </div>
                      <a
                        href="Storefront.Filters.html"
                        className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link"
                      >
                        <i data-acorn-icon="chevron-right" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Banners End */}
          </div>
          <div className="col-12 col-lg-auto order-0 order-lg-1">
            {/* Summary Start */}
            <h2 className="small-title">Summary</h2>
            <div className="card mb-5 w-100 sw-lg-35">
              <div className="card-body">
                <div className="mb-4">
                  <div className="mb-2">
                    <p className="text-small text-muted mb-1">ITEMS</p>
                    <p>
                      <span className="text-alternate">5</span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-small text-muted mb-1">TOTAL</p>
                    <p>
                      <span className="text-alternate">
                        <span className="text-small text-muted">$</span>
                        285.25
                      </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-small text-muted mb-1">SHIPPING</p>
                    <p>
                      <span className="text-alternate">
                        <span className="text-small text-muted">$</span>
                        12.50
                      </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-small text-muted mb-1">SALE</p>
                    <p>
                      <span className="text-alternate">
                        <span className="text-small text-muted">$</span>
                        -24.50
                      </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-small text-muted mb-1">GRAND TOTAL</p>
                    <div className="cta-2">
                      <span>
                        <span className="text-small text-muted cta-2">$</span>
                        321.50
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-icon btn-icon-end btn-primary w-100"
                  type="button"
                >
                  <span>Checkout</span>
                  <i data-acorn-icon="chevron-right" />
                </button>
              </div>
            </div>
            {/* Summary End */}
          </div>
        </div>
      </div>
    </main>
    {/* Layout Footer Start */}
    <footer>
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <p className="mb-0 text-muted text-medium">
                Colored Strategies 2021
              </p>
            </div>
            <div className="col-sm-6 d-none d-sm-block">
              <ul className="breadcrumb pt-0 pe-0 mb-0 float-end">
                <li className="breadcrumb-item mb-0 text-medium">
                  <a
                    href="https://1.envato.market/BX5oGy"
                    target="_blank"
                    className="btn-link"
                  >
                    Review
                  </a>
                </li>
                <li className="breadcrumb-item mb-0 text-medium">
                  <a
                    href="https://1.envato.market/BX5oGy"
                    target="_blank"
                    className="btn-link"
                  >
                    Purchase
                  </a>
                </li>
                <li className="breadcrumb-item mb-0 text-medium">
                  <a
                    href="https://acorn-html-docs.coloredstrategies.com/"
                    target="_blank"
                    className="btn-link"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Layout Footer End */}
  </div>
  {/* Theme Settings Modal Start */}
  <div
    className="modal fade modal-right scroll-out-negative"
    id="settings"
    data-bs-backdrop="true"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="settings"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-scrollable full" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Theme Settings</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="scroll-track-visible">
            <div className="mb-5" id="color">
              <label className="mb-3 d-inline-block form-label">Color</label>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-blue"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="blue-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT BLUE
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-blue"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="blue-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK BLUE
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-teal"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="teal-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT TEAL
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-teal"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="teal-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK TEAL
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-sky"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="sky-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT SKY
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-sky"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="sky-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK SKY
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-red"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="red-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT RED
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-red"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="red-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK RED
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-green"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="green-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT GREEN
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-green"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="green-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK GREEN
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-lime"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="lime-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT LIME
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-lime"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="lime-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK LIME
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-pink"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="pink-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT PINK
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-pink"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="pink-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK PINK
                    </span>
                  </div>
                </a>
              </div>
              <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="light-purple"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="purple-light" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      LIGHT PURPLE
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="dark-purple"
                  data-parent="color"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow color">
                    <div className="purple-dark" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DARK PURPLE
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-5" id="navcolor">
              <label className="mb-3 d-inline-block form-label">
                Override Nav Palette
              </label>
              <div className="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="default"
                  data-parent="navcolor"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      DEFAULT
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="light"
                  data-parent="navcolor"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-secondary figure-light top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">LIGHT</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="dark"
                  data-parent="navcolor"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-muted figure-dark top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">DARK</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-5" id="behaviour">
              <label className="mb-3 d-inline-block form-label">
                Menu Behaviour
              </label>
              <div className="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="pinned"
                  data-parent="behaviour"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-primary left large" />
                    <div className="figure figure-secondary right small" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      PINNED
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="unpinned"
                  data-parent="behaviour"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-primary left" />
                    <div className="figure figure-secondary right" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      UNPINNED
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-5" id="layout">
              <label className="mb-3 d-inline-block form-label">Layout</label>
              <div className="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="fluid"
                  data-parent="layout"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">FLUID</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-50 option col"
                  data-value="boxed"
                  data-parent="layout"
                >
                  <div className="card rounded-md p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom small" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">BOXED</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-5" id="radius">
              <label className="mb-3 d-inline-block form-label">Radius</label>
              <div className="row d-flex g-3 justify-content-between flex-wrap">
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="rounded"
                  data-parent="radius"
                >
                  <div className="card rounded-md radius-rounded p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      ROUNDED
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="standard"
                  data-parent="radius"
                >
                  <div className="card rounded-md radius-regular p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">
                      STANDARD
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-grow-1 w-33 option col"
                  data-value="flat"
                  data-parent="radius"
                >
                  <div className="card rounded-md radius-flat p-3 mb-1 no-shadow">
                    <div className="figure figure-primary top" />
                    <div className="figure figure-secondary bottom" />
                  </div>
                  <div className="text-muted text-part">
                    <span className="text-extra-small align-middle">FLAT</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Theme Settings Modal End */}
  {/* Niches Modal Start */}
  <div
    className="modal fade modal-right scroll-out-negative"
    id="niches"
    data-bs-backdrop="true"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="niches"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-scrollable full" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Niches</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="scroll-track-visible">
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Classic Dashboard
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/classic-dashboard.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-classic-dashboard.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-classic-dashboard.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-classic-dashboard.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Medical Assistant
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/medical-assistant.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-medical-assistant.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-medical-assistant.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-medical-assistant.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Service Provider
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/service-provider.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-service-provider.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-service-provider.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-service-provider.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Elearning Portal
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/elearning-portal.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-elearning-portal.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-elearning-portal.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-elearning-portal.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Ecommerce Platform
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/ecommerce-platform.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-ecommerce-platform.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-ecommerce-platform.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-ecommerce-platform.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-2 d-inline-block form-label">
                Starter Project
              </label>
              <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
                <div className="position-relative mb-3 mb-lg-5 rounded-sm">
                  <img
                    src="https://acorn.coloredstrategies.com/img/page/starter-project.webp"
                    className="img-fluid rounded-sm lower-opacity border border-separator-light"
                    alt="card image"
                  />
                  <div className="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                    <a
                      target="_blank"
                      href="https://acorn-html-starter-project.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Html
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-laravel-starter-project.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      Laravel
                    </a>
                    <a
                      target="_blank"
                      href="https://acorn-dotnet-starter-project.coloredstrategies.com/"
                      className="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                    >
                      .Net5
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Niches Modal End */}
  {/* Theme Settings & Niches Buttons Start */}
  <div className="settings-buttons-container">
    <button
      type="button"
      className="btn settings-button btn-primary p-0"
      data-bs-toggle="modal"
      data-bs-target="#settings"
      id="settingsButton"
    >
      <span
        className="d-inline-block no-delay"
        data-bs-delay={0}
        data-bs-offset="0,3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Settings"
      >
        <i data-acorn-icon="paint-roller" className="position-relative" />
      </span>
    </button>
    <button
      type="button"
      className="btn settings-button btn-primary p-0"
      data-bs-toggle="modal"
      data-bs-target="#niches"
      id="nichesButton"
    >
      <span
        className="d-inline-block no-delay"
        data-bs-delay={0}
        data-bs-offset="0,3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Niches"
      >
        <i data-acorn-icon="toy" className="position-relative" />
      </span>
    </button>
  </div>
  {/* Theme Settings & Niches Buttons End */}
  {/* Search Modal Start */}
  <div
    className="modal fade modal-under-nav modal-search modal-close-out"
    id="searchPagesModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header border-0 p-0">
          <button
            type="button"
            className="btn-close btn btn-icon btn-icon-only btn-foreground"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body ps-5 pe-5 pb-0 border-0">
          <input
            id="searchPagesInput"
            className="form-control form-control-xl borderless ps-0 pe-0 mb-1 auto-complete"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="modal-footer border-top justify-content-start ps-5 pe-5 pb-3 pt-3 border-0">
          <span className="text-alternate d-inline-block m-0 me-3">
            <i
              data-acorn-icon="arrow-bottom"
              data-acorn-size={15}
              className="text-alternate align-middle me-1"
            />
            <span className="align-middle text-medium">Navigate</span>
          </span>
          <span className="text-alternate d-inline-block m-0 me-3">
            <i
              data-acorn-icon="arrow-bottom-left"
              data-acorn-size={15}
              className="text-alternate align-middle me-1"
            />
            <span className="align-middle text-medium">Select</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Search Modal End */}
  {/* Vendor Scripts Start */}
  {/* Vendor Scripts End */}
  {/* Template Base Scripts Start */}
  {/* Template Base Scripts End */}
  {/* Page Specific Scripts Start */}
  {/* Page Specific Scripts End */}
        </>
    );
}