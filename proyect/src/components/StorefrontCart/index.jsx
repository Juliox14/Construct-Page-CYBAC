const CartPage = () => {
    <>
        <div id="root">
      <div id="nav" className="nav-container d-flex">
        <div className="nav-content d-flex">
          <div class="logo position-relative">
            <a href="Dashboard.html">
              <div class="img"></div>
            </a>
          </div>

          <div class="user-container d-flex">
            <a href="#" class="d-flex user position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img class="profile" alt="profile" src="img/profile/profile-1.webp" />
              <div class="name">Zayn Hartley</div>
            </a>
            <div class="dropdown-menu dropdown-menu-end user-menu wide">
              <div class="row mb-3 ms-0 me-0">
                <div class="col-12 ps-1 mb-2">
                  <div class="text-extra-small text-primary">ACCOUNT</div>
                </div>
                <div class="col-6 ps-1 pe-1">
                  <ul class="list-unstyled">
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
                <div class="col-6 pe-1 ps-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Billing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mb-1 ms-0 me-0">
                <div class="col-12 p-1 mb-2 pt-2">
                  <div class="text-extra-small text-primary">APPLICATION</div>
                </div>
                <div class="col-6 ps-1 pe-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Themes</a>
                    </li>
                    <li>
                      <a href="#">Language</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 pe-1 ps-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Devices</a>
                    </li>
                    <li>
                      <a href="#">Storage</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mb-1 ms-0 me-0">
                <div class="col-12 p-1 mb-3 pt-3">
                  <div class="separator-light"></div>
                </div>
                <div class="col-6 ps-1 pe-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">
                        <i data-acorn-icon="help" class="me-2" data-acorn-size="17"></i>
                        <span class="align-middle">Help</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i data-acorn-icon="file-text" class="me-2" data-acorn-size="17"></i>
                        <span class="align-middle">Docs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 pe-1 ps-1">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">
                        <i data-acorn-icon="gear" class="me-2" data-acorn-size="17"></i>
                        <span class="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i data-acorn-icon="logout" class="me-2" data-acorn-size="17"></i>
                        <span class="align-middle">Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-unstyled list-inline text-center menu-icons">
            <li class="list-inline-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#searchPagesModal">
                <i data-acorn-icon="search" data-acorn-size="18"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" id="pinButton" class="pin-button">
                <i data-acorn-icon="lock-on" class="unpin" data-acorn-size="18"></i>
                <i data-acorn-icon="lock-off" class="pin" data-acorn-size="18"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" id="colorButton">
                <i data-acorn-icon="light-on" class="light" data-acorn-size="18"></i>
                <i data-acorn-icon="light-off" class="dark" data-acorn-size="18"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" data-bs-toggle="dropdown" data-bs-target="#notifications" aria-haspopup="true" aria-expanded="false" class="notification-button">
                <div class="position-relative d-inline-flex">
                  <i data-acorn-icon="bell" data-acorn-size="18"></i>
                  <span class="position-absolute notification-dot rounded-xl"></span>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out" id="notifications">
                <div class="scroll">
                  <ul class="list-unstyled border-last-none">
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-1.webp" class="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div class="align-self-center">
                        <a href="#">Joisse Kaycee just sent a new comment!</a>
                      </div>
                    </li>
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-2.webp" class="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div class="align-self-center">
                        <a href="#">New order received! It is total $147,20.</a>
                      </div>
                    </li>
                    <li class="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-3.webp" class="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div class="align-self-center">
                        <a href="#">3 items just added to wish list by a user!</a>
                      </div>
                    </li>
                    <li class="pb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-6.webp" class="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div class="align-self-center">
                        <a href="#">Kirby Peters just sent a new message!</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div class="menu-container flex-grow-1">
            <ul id="menu" class="menu">
              <li>
                <a href="Dashboard.html">
                  <i data-acorn-icon="shop" class="icon" data-acorn-size="18"></i>
                  <span class="label">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#products" data-href="Products.html">
                  <i data-acorn-icon="cupcake" class="icon" data-acorn-size="18"></i>
                  <span class="label">Products</span>
                </a>
                <ul id="products">
                  <li>
                    <a href="Products.List.html">
                      <span class="label">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Products.Detail.html">
                      <span class="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#orders" data-href="Orders.html">
                  <i data-acorn-icon="cart" class="icon" data-acorn-size="18"></i>
                  <span class="label">Orders</span>
                </a>
                <ul id="orders">
                  <li>
                    <a href="Orders.List.html">
                      <span class="label">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Orders.Detail.html">
                      <span class="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#customers" data-href="Customers.html">
                  <i data-acorn-icon="user" class="icon" data-acorn-size="18"></i>
                  <span class="label">Customers</span>
                </a>
                <ul id="customers">
                  <li>
                    <a href="Customers.List.html">
                      <span class="label">List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Customers.Detail.html">
                      <span class="label">Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#storefront" data-href="Storefront.html">
                  <i data-acorn-icon="screen" class="icon" data-acorn-size="18"></i>
                  <span class="label">Storefront</span>
                </a>
                <ul id="storefront">
                  <li>
                    <a href="Storefront.Home.html">
                      <span class="label">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Filters.html">
                      <span class="label">Filters</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Categories.html">
                      <span class="label">Categories</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Detail.html">
                      <span class="label">Detail</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Cart.html">
                      <span class="label">Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Checkout.html">
                      <span class="label">Checkout</span>
                    </a>
                  </li>
                  <li>
                    <a href="Storefront.Invoice.html">
                      <span class="label">Invoice</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Shipping.html">
                  <i data-acorn-icon="shipping" class="icon" data-acorn-size="18"></i>
                  <span class="label">Shipping</span>
                </a>
              </li>
              <li>
                <a href="Discount.html">
                  <i data-acorn-icon="tag" class="icon" data-acorn-size="18"></i>
                  <span class="label">Discount</span>
                </a>
              </li>
              <li>
                <a href="Settings.html">
                  <i data-acorn-icon="gear" class="icon" data-acorn-size="18"></i>
                  <span class="label">Settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="mobile-buttons-container">
            <a href="#" id="mobileMenuButton" class="menu-button">
              <i data-acorn-icon="menu"></i>
            </a>
          </div>
        </div>
        <div class="nav-shadow"></div>
      </div>

      <main>
        <div class="container">
          <div class="page-title-container">
            <div class="row">
              <div class="col-auto mb-3 mb-md-0 me-auto">
                <div class="w-auto sw-md-30">
                  <a href="#" class="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span class="text-small align-middle">Storefront</span>
                  </a>
                  <h1 class="mb-0 pb-0 display-4" id="title">Cart</h1>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg order-1 order-lg-0">
              <h2 class="small-title">Items</h2>
              <div class="mb-5">
                <div class="card mb-2">
                  <div class="row g-0 sh-18 sh-md-14">
                    <div class="col-auto">
                      <img src="img/product/small/product-1.webp" class="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15" alt="thumb" />
                    </div>
                    <div class="col position-relative h-100">
                      <div class="card-body">
                        <div class="row h-100">
                          <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                            <div class="pt-0 pb-0 pe-2">
                              <div class="h6 mb-0 clamp-line" data-line="1">Wooden Animal Toys</div>
                              <div class="text-muted text-small">Wood & Toy</div>
                              <div class="mb-0 sw-19">$ 22.60</div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 pe-0 d-flex align-items-center">
                            <div class="input-group spinner sw-11" data-trigger="spinner">
                              <div class="input-group-text">
                                <button type="button" class="spin-down single px-2 d-flex justify-content-center" data-spin="down">-</button>
                              </div>
                              <input type="text" class="form-control text-center px-0" value="4" data-rule="quantity" />
                              <div class="input-group-text">
                                <button type="button" class="spin-up single px-2 d-flex justify-content-center" data-spin="up">+</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                            <div class="h6 mb-0">$ 124.20</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2" type="button">
                        <i data-acorn-icon="error-hexagon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="row g-0 sh-18 sh-md-14">
                    <div class="col-auto">
                      <img src="img/product/small/product-2.webp" class="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15" alt="thumb" />
                    </div>
                    <div class="col position-relative h-100">
                      <div class="card-body">
                        <div class="row h-100">
                          <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                            <div class="pt-0 pb-0 pe-2">
                              <div class="h6 mb-0 clamp-line" data-line="1">Aromatic Green Candle</div>
                              <div class="text-muted text-small">Oakland</div>
                              <div class="mb-0 sw-19">$ 15.75</div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 pe-0 d-flex align-items-center">
                            <div class="input-group spinner sw-11" data-trigger="spinner">
                              <div class="input-group-text">
                                <button type="button" class="spin-down single px-2 d-flex justify-content-center" data-spin="down">-</button>
                              </div>
                              <input type="text" class="form-control text-center px-0" value="1" data-rule="quantity" />
                              <div class="input-group-text">
                                <button type="button" class="spin-up single px-2 d-flex justify-content-center" data-spin="up">+</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                            <div class="h6 mb-0">$ 15.75</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2" type="button">
                        <i data-acorn-icon="error-hexagon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="row g-0 sh-18 sh-md-14">
                    <div class="col-auto">
                      <img src="img/product/small/product-3.webp" class="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15" alt="thumb" />
                    </div>
                    <div class="col position-relative h-100">
                      <div class="card-body">
                        <div class="row h-100">
                          <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                            <div class="pt-0 pb-0 pe-2">
                              <div class="h6 mb-0 clamp-line" data-line="1">Good Glass Teapot</div>
                              <div class="text-muted text-small">Ikea</div>
                              <div class="mb-0 sw-19">$ 8.50</div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 pe-0 d-flex align-items-center">
                            <div class="input-group spinner sw-11" data-trigger="spinner">
                              <div class="input-group-text">
                                <button type="button" class="spin-down single px-2 d-flex justify-content-center" data-spin="down">-</button>
                              </div>
                              <input type="text" class="form-control text-center px-0" value="2" data-rule="quantity" />
                              <div class="input-group-text">
                                <button type="button" class="spin-up single px-2 d-flex justify-content-center" data-spin="up">+</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                            <div class="h6 mb-0">$ 17.00</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2" type="button">
                        <i data-acorn-icon="error-hexagon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="row g-0 sh-18 sh-md-14">
                    <div class="col-auto">
                      <img src="img/product/small/product-4.webp" class="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15" alt="thumb" />
                    </div>
                    <div class="col position-relative h-100">
                      <div class="card-body">
                        <div class="row h-100">
                          <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                            <div class="pt-0 pb-0 pe-2">
                              <div class="h6 mb-0 clamp-line" data-line="1">Modern Dark Pot</div>
                              <div class="text-muted text-small">Ikea</div>
                              <div class="mb-0 sw-19">$ 18.75</div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 pe-0 d-flex align-items-center">
                            <div class="input-group spinner sw-11" data-trigger="spinner">
                              <div class="input-group-text">
                                <button type="button" class="spin-down single px-2 d-flex justify-content-center" data-spin="down">-</button>
                              </div>
                              <input type="text" class="form-control text-center px-0" value="2" data-rule="quantity" />
                              <div class="input-group-text">
                                <button type="button" class="spin-up single px-2 d-flex justify-content-center" data-spin="up">+</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                            <div class="h6 mb-0">$ 37.50</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2" type="button">
                        <i data-acorn-icon="error-hexagon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="row g-0 sh-18 sh-md-14">
                    <div class="col-auto">
                      <img src="img/product/small/product-5.webp" class="card-img card-img-horizontal h-100 sw-9 sw-sm-13 sw-md-15" alt="thumb" />
                    </div>
                    <div class="col position-relative h-100">
                      <div class="card-body">
                        <div class="row h-100">
                          <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex align-items-center">
                            <div class="pt-0 pb-0 pe-2">
                              <div class="h6 mb-0 clamp-line" data-line="1">Wood Handle Hunter Knife</div>
                              <div class="text-muted text-small">Buck Knives</div>
                              <div class="mb-0 sw-19">$ 12.00</div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 pe-0 d-flex align-items-center">
                            <div class="input-group spinner sw-11" data-trigger="spinner">
                              <div class="input-group-text">
                                <button type="button" class="spin-down single px-2 d-flex justify-content-center" data-spin="down">-</button>
                              </div>
                              <input type="text" class="form-control text-center px-0" value="3" data-rule="quantity" />
                              <div class="input-group-text">
                                <button type="button" class="spin-up single px-2 d-flex justify-content-center" data-spin="up">+</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-6 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
                            <div class="h6 mb-0">$ 36.00</div>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-icon btn-icon-only btn btn-foreground-alternate position-absolute t-2 e-2" type="button">
                        <i data-acorn-icon="error-hexagon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row g-2">
                <div class="col-12">
                  <h2 class="small-title">Worth Checking</h2>
                </div>
                <div class="col-12 col-sm-6 col-xxl-3">
                  <div class="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                    <img src="img/banner/cta-square-1.webp" class="card-img h-100 scale" alt="card image" />
                    <div class="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                      <div class="d-flex flex-column h-100 justify-content-between align-items-start">
                        <div class="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">Seasoned Breads</div>
                        <a href="Storefront.Filters.html" class="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link">
                          <i data-acorn-icon="chevron-right"></i>
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-xxl-3">
                  <div class="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                    <img src="img/banner/cta-square-2.webp" class="card-img h-100 scale" alt="card image" />
                    <div class="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                      <div class="d-flex flex-column h-100 justify-content-between align-items-start">
                        <div class="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">Herbal and Vegan</div>
                        <a href="Storefront.Filters.html" class="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link">
                          <i data-acorn-icon="chevron-right"></i>
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-xxl-3">
                  <div class="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                    <img src="img/banner/cta-square-3.webp" class="card-img h-100 scale" alt="card image" />
                    <div class="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                      <div class="d-flex flex-column h-100 justify-content-between align-items-start">
                        <div class="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">Fruit Mixed Dough</div>
                        <a href="Storefront.Filters.html" class="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link">
                          <i data-acorn-icon="chevron-right"></i>
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-xxl-3">
                  <div class="card w-100 sh-19 sh-sm-25 hover-img-scale-up">
                    <img src="img/banner/cta-square-4.webp" class="card-img h-100 scale" alt="card image" />
                    <div class="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                      <div class="d-flex flex-column h-100 justify-content-between align-items-start">
                        <div class="cta-3 text-black w-75 w-sm-50 w-lg-75 w-xxl-50">Berries and Nuts</div>
                        <a href="Storefront.Filters.html" class="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link">
                          <i data-acorn-icon="chevron-right"></i>
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-auto order-0 order-lg-1">
              <h2 class="small-title">Summary</h2>
              <div class="card mb-5 w-100 sw-lg-35">
                <div class="card-body">
                  <div class="mb-4">
                    <div class="mb-2">
                      <p class="text-small text-muted mb-1">ITEMS</p>
                      <p>
                        <span class="text-alternate">5</span>
                      </p>
                    </div>
                    <div class="mb-2">
                      <p class="text-small text-muted mb-1">TOTAL</p>
                      <p>
                        <span class="text-alternate">
                          <span class="text-small text-muted">$</span>
                          285.25
                        </span>
                      </p>
                    </div>
                    <div class="mb-2">
                      <p class="text-small text-muted mb-1">SHIPPING</p>
                      <p>
                        <span class="text-alternate">
                          <span class="text-small text-muted">$</span>
                          12.50
                        </span>
                      </p>
                    </div>
                    <div class="mb-2">
                      <p class="text-small text-muted mb-1">SALE</p>
                      <p>
                        <span class="text-alternate">
                          <span class="text-small text-muted">$</span>
                          -24.50
                        </span>
                      </p>
                    </div>
                    <div class="mb-2">
                      <p class="text-small text-muted mb-1">GRAND TOTAL</p>
                      <div class="cta-2">
                        <span>
                          <span class="text-small text-muted cta-2">$</span>
                          321.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-icon btn-icon-end btn-primary w-100" type="button">
                    <span>Checkout</span>
                    <i data-acorn-icon="chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="footer-content">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p class="mb-0 text-muted text-medium">Colored Strategies 2021</p>
              </div>
              <div class="col-sm-6 d-none d-sm-block">
                <ul class="breadcrumb pt-0 pe-0 mb-0 float-end">
                  <li class="breadcrumb-item mb-0 text-medium">
                    <a href="https://1.envato.market/BX5oGy" target="_blank" class="btn-link">Review</a>
                  </li>
                  <li class="breadcrumb-item mb-0 text-medium">
                    <a href="https://1.envato.market/BX5oGy" target="_blank" class="btn-link">Purchase</a>
                  </li>
                  <li class="breadcrumb-item mb-0 text-medium">
                    <a href="https://acorn-html-docs.coloredstrategies.com/" target="_blank" class="btn-link">Docs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <div
      class="modal fade modal-right scroll-out-negative"
      id="settings"
      data-bs-backdrop="true"
      tabindex="-1"
      role="dialog"
      aria-labelledby="settings"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable full" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Theme Settings</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="scroll-track-visible">
              <div class="mb-5" id="color">
                <label class="mb-3 d-inline-block form-label">Color</label>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-blue" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="blue-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT BLUE</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-blue" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="blue-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK BLUE</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-teal" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="teal-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT TEAL</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-teal" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="teal-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK TEAL</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-sky" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="sky-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT SKY</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-sky" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="sky-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK SKY</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-red" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="red-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT RED</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-red" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="red-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK RED</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-green" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="green-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT GREEN</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-green" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="green-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK GREEN</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-lime" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="lime-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT LIME</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-lime" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="lime-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK LIME</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-pink" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="pink-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT PINK</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-pink" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="pink-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK PINK</span>
                    </div>
                  </a>
                </div>
                <div class="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="light-purple" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="purple-light"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT PURPLE</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="dark-purple" data-parent="color">
                    <div class="card rounded-md p-3 mb-1 no-shadow color">
                      <div class="purple-dark"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK PURPLE</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="mb-5" id="navcolor">
                <label class="mb-3 d-inline-block form-label">Override Nav Palette</label>
                <div class="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="default" data-parent="navcolor">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DEFAULT</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="light" data-parent="navcolor">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-secondary figure-light top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">LIGHT</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="dark" data-parent="navcolor">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-muted figure-dark top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">DARK</span>
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-5" id="behaviour">
                <label class="mb-3 d-inline-block form-label">Menu Behaviour</label>
                <div class="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="pinned" data-parent="behaviour">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-primary left large"></div>
                      <div class="figure figure-secondary right small"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">PINNED</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="unpinned" data-parent="behaviour">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-primary left"></div>
                      <div class="figure figure-secondary right"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">UNPINNED</span>
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-5" id="layout">
                <label class="mb-3 d-inline-block form-label">Layout</label>
                <div class="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="fluid" data-parent="layout">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">FLUID</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-50 option col" data-value="boxed" data-parent="layout">
                    <div class="card rounded-md p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom small"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">BOXED</span>
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-5" id="radius">
                <label class="mb-3 d-inline-block form-label">Radius</label>
                <div class="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="rounded" data-parent="radius">
                    <div class="card rounded-md radius-rounded p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">ROUNDED</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="standard" data-parent="radius">
                    <div class="card rounded-md radius-regular p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">STANDARD</span>
                    </div>
                  </a>
                  <a href="#" class="flex-grow-1 w-33 option col" data-value="flat" data-parent="radius">
                    <div class="card rounded-md radius-flat p-3 mb-1 no-shadow">
                      <div class="figure figure-primary top"></div>
                      <div class="figure figure-secondary bottom"></div>
                    </div>
                    <div class="text-muted text-part">
                      <span class="text-extra-small align-middle">FLAT</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade modal-right scroll-out-negative"
      id="niches"
      data-bs-backdrop="true"
      tabindex="-1"
      role="dialog"
      aria-labelledby="niches"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable full" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Niches</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="scroll-track-visible">
              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Classic Dashboard</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/classic-dashboard.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-classic-dashboard.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-classic-dashboard.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-classic-dashboard.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        .Net5
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Medical Assistant</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/medical-assistant.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-medical-assistant.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-medical-assistant.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-medical-assistant.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        .Net5
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Service Provider</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/service-provider.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-service-provider.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-service-provider.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-service-provider.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        .Net5
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Elearning Portal</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/elearning-portal.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-elearning-portal.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-elearning-portal.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-elearning-portal.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        .Net5
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Ecommerce Platform</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/ecommerce-platform.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-ecommerce-platform.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-ecommerce-platform.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-ecommerce-platform.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        .Net5
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-5">
                <label class="mb-2 d-inline-block form-label">Starter Project</label>
                <div class="hover-reveal-buttons position-relative hover-reveal cursor-default">
                  <div class="position-relative mb-3 mb-lg-5 rounded-sm">
                    <img
                      src="https://acorn.coloredstrategies.com/img/page/starter-project.webp"
                      class="img-fluid rounded-sm lower-opacity border border-separator-light"
                      alt="card image"
                    />
                    <div class="position-absolute reveal-content rounded-sm absolute-center-vertical text-center w-100">
                      <a
                        target="_blank"
                        href="https://acorn-html-starter-project.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Html
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-laravel-starter-project.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
                      >
                        Laravel
                      </a>
                      <a
                        target="_blank"
                        href="https://acorn-dotnet-starter-project.coloredstrategies.com/"
                        class="btn btn-primary btn-sm sw-10 sw-lg-12 d-block mx-auto my-1"
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

    <div class="settings-buttons-container">
      <button type="button" class="btn settings-button btn-primary p-0" data-bs-toggle="modal" data-bs-target="#settings" id="settingsButton">
        <span class="d-inline-block no-delay" data-bs-delay="0" data-bs-offset="0,3" data-bs-toggle="tooltip" data-bs-placement="left" title="Settings">
          <i data-acorn-icon="paint-roller" class="position-relative"></i>
        </span>
      </button>
      <button type="button" class="btn settings-button btn-primary p-0" data-bs-toggle="modal" data-bs-target="#niches" id="nichesButton">
        <span class="d-inline-block no-delay" data-bs-delay="0" data-bs-offset="0,3" data-bs-toggle="tooltip" data-bs-placement="left" title="Niches">
          <i data-acorn-icon="toy" class="position-relative"></i>
        </span>
      </button>
    </div>

    <div class="modal fade modal-under-nav modal-search modal-close-out" id="searchPagesModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0 p-0">
            <button type="button" class="btn-close btn btn-icon btn-icon-only btn-foreground" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ps-5 pe-5 pb-0 border-0">
            <input id="searchPagesInput" class="form-control form-control-xl borderless ps-0 pe-0 mb-1 auto-complete" type="text" autocomplete="off" />
          </div>
          <div class="modal-footer border-top justify-content-start ps-5 pe-5 pb-3 pt-3 border-0">
            <span class="text-alternate d-inline-block m-0 me-3">
              <i data-acorn-icon="arrow-bottom" data-acorn-size="15" class="text-alternate align-middle me-1"></i>
              <span class="align-middle text-medium">Navigate</span>
            </span>
            <span class="text-alternate d-inline-block m-0 me-3">
              <i data-acorn-icon="arrow-bottom-left" data-acorn-size="15" class="text-alternate align-middle me-1"></i>
              <span class="align-middle text-medium">Select</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default CartPage;