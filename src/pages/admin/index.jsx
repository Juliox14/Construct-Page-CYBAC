import Link from 'next/link';
import TemplateLayout from '../../components/templateLayout';
import { useState, useEffect } from 'react';

export default function Inicio() {

    const [isClient, setIsclient] = useState(false);

    useEffect(() => {
      setIsclient(true);
    }, []);

    return(
        <TemplateLayout>
            {isClient && (
        <>
  <div id="root">
    <div id="nav" className="nav-container d-flex">
      <div className="nav-content d-flex">
        <div className="logo position-relative">
          <a href="Dashboard.html">
            <div className="img" />
          </a>
        </div>
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
              src="/img/profile/profile-1.webp"
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
        <div className="menu-container flex-grow-1">
          <ul id="menu" className="menu">
            <li>
              <a href="/">
                <i
                  data-acorn-icon="shop"
                  className="icon"
                  data-acorn-size={18}
                />
                <span className="label">Inicio</span>
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
                  <a href="/ejemplo">
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
        <div className="mobile-buttons-container">
          <a href="#" id="mobileMenuButton" className="menu-button">
            <i data-acorn-icon="menu" />
          </a>
        </div>
      </div>
      <div className="nav-shadow" />
    </div>
    <main>
      <div className="container">
        <div className="page-title-container">
          <div className="row g-0">
            <div className="col-auto mb-3 mb-md-0 me-auto">
              <div className="w-auto sw-md-30">
                <Link
                  href="/"
                  className="muted-link pb-1 d-inline-block breadcrumb-back"
                >
                  <i data-acorn-icon="chevron-left" data-acorn-size={13} />
                  <span className="text-small align-middle">Home</span>
                </Link>
                <h1 className="mb-0 pb-0 display-4" id="title">
                  Product List
                </h1>
              </div>
            </div>
            <div className="w-100 d-md-none" />
            <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
              <button
                type="button"
                className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto"
              >
                <i data-acorn-icon="plus" />
                <span>Add Product</span>
              </button>
              <div className="dropdown d-inline-block d-lg-none">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-only ms-1"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-acorn-icon="sort" />
                </button>
                <div className="dropdown-menu dropdown-menu-end custom-sort">
                  <a className="dropdown-item sort" data-sort="name" href="#">
                    Title
                  </a>
                  <a className="dropdown-item sort" data-sort="email" href="#">
                    Stock
                  </a>
                  <a className="dropdown-item sort" data-sort="phone" href="#">
                    Price
                  </a>
                  <a className="dropdown-item sort" data-sort="group" href="#">
                    Status
                  </a>
                </div>
              </div>
              <div className="btn-group ms-1 check-all-container-checkbox-click">
                <div
                  className="btn btn-outline-primary btn-custom-control p-0 ps-3 pe-2"
                  data-target="#checkboxTable"
                >
                  <span className="form-check float-end">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkAll"
                    />
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-offset="0,3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div className="dropdown-menu dropdown-menu-end">
                  <button
                    className="dropdown-item"
                    id="deleteChecked"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
            <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
              <input className="form-control" placeholder="Search" />
              <span className="search-magnifier-icon">
                <i data-acorn-icon="search" />
              </span>
              <span className="search-delete-icon d-none">
                <i data-acorn-icon="close" />
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
            <div className="d-inline-block">
              <button
                className="btn btn-icon btn-icon-only btn-foreground-alternate shadow"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay={0}
                title="Print"
                type="button"
              >
                <i data-acorn-icon="print" />
              </button>
              <div className="d-inline-block">
                <button
                  className="btn p-0"
                  data-bs-toggle="dropdown"
                  type="button"
                  data-bs-offset="0,3"
                >
                  <span
                    className="btn btn-icon btn-icon-only btn-foreground-alternate shadow dropdown"
                    data-bs-delay={0}
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    title="Export"
                  >
                    <i data-acorn-icon="download" />
                  </span>
                </button>
                <div className="dropdown-menu shadow dropdown-menu-end">
                  <button className="dropdown-item export-copy" type="button">
                    Copy
                  </button>
                  <button className="dropdown-item export-excel" type="button">
                    Excel
                  </button>
                  <button className="dropdown-item export-cvs" type="button">
                    Cvs
                  </button>
                </div>
              </div>
              <div
                className="dropdown-as-select d-inline-block"
                data-childselector="span"
              >
                <button
                  className="btn p-0 shadow"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,3"
                >
                  <span
                    className="btn btn-foreground-alternate dropdown-toggle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-delay={0}
                    title="Item Count"
                  >
                    10 Items
                  </span>
                </button>
                <div className="dropdown-menu shadow dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    5 Items
                  </a>
                  <a className="dropdown-item active" href="#">
                    10 Items
                  </a>
                  <a className="dropdown-item" href="#">
                    20 Items
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12 mb-5">
            <div id="checkboxTable">
              <div className="mb-4 mb-lg-3 bg-transparent no-shadow d-none d-lg-block">
                <div className="row g-0">
                  <div className="col-auto sw-11 d-none d-lg-flex" />
                  <div className="col">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center custom-sort">
                        <div className="col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex">
                          <div
                            className="text-muted text-small cursor-pointer sort"
                            data-sort="name"
                          >
                            TITLE
                          </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                          <div
                            className="text-muted text-small cursor-pointer sort"
                            data-sort="email"
                          >
                            STOCK
                          </div>
                        </div>
                        <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                          <div
                            className="text-muted text-small cursor-pointer sort"
                            data-sort="phone"
                          >
                            PRICE
                          </div>
                        </div>
                        <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                          <div
                            className="text-muted text-small cursor-pointer sort"
                            data-sort="group"
                          >
                            STATUS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-1.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Wooden Animal Toys
                          <div className="text-small text-muted text-truncate position">
                            #2342
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">2.511</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 62.20</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                          <span className="badge bg-outline-primary group">
                            SALE
                          </span>
                        </div>
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-2.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Aromatic Green Candle
                          <div className="text-small text-muted text-truncate position">
                            #2567
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">352</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 41.15</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                          <span className="badge bg-outline-primary group">
                            SALE
                          </span>
                        </div>
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-3.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Good Glass Teapot
                          <div className="text-small text-muted text-truncate position">
                            #1831
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">1.531</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 7.50</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-4.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Modern Dark Pot
                          <div className="text-small text-muted text-truncate position">
                            #1558
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">729</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 18.00</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-5.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Wood Handle Hunter Knife
                          <div className="text-small text-muted text-truncate position">
                            917
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">16</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 21.75</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                          <span className="badge bg-outline-quaternary group">
                            LOW STOCK
                          </span>
                        </div>
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-6.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Wireless On-Ear Headphones
                          <div className="text-small text-muted text-truncate position">
                            #5622
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">592</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 52.50</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-7.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          White Coffee Mug
                          <div className="text-small text-muted text-truncate position">
                            #3457
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">2.849</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 14.10</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-8.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Geometric Chandelier
                          <div className="text-small text-muted text-truncate position">
                            #4832
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">902</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 32.60</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                          <span className="badge bg-outline-secondary group">
                            NEW
                          </span>
                        </div>
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-9.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          XBox Controller
                          <div className="text-small text-muted text-truncate position">
                            #2611
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">614</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 19.15</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                          <span className="badge bg-outline-secondary group">
                            NEW
                          </span>
                        </div>
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="row g-0 h-100 sh-lg-9 position-relative">
                  <a
                    href="Products.Detail.html"
                    className="col-auto position-relative"
                  >
                    <img
                      src="img/product/small/product-10.webp"
                      alt="product"
                      className="card-img card-img-horizontal sw-11 h-100"
                    />
                  </a>
                  <div className="col py-4 py-lg-0">
                    <div className="ps-5 pe-4 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <a
                          href="Products.Detail.html"
                          className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                        >
                          Health and Fitness Smartwatch
                          <div className="text-small text-muted text-truncate position">
                            #3470
                          </div>
                        </a>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                          <div className="lh-1 text-alternate">1.852</div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                          <div className="lh-1 text-alternate">$ 68.00</div>
                        </div>
                        <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
                        <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                          <label className="form-check mt-2">
                            <input
                              type="checkbox"
                              className="form-check-input pe-none"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link shadow"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <i data-acorn-icon="chevron-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link shadow" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link shadow" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link shadow" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link shadow" href="#">
                    <i data-acorn-icon="chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
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
  </div>
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
</>
    )};
</TemplateLayout>
    )
}