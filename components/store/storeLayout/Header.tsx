import Head from 'next/head';
import { useEffect } from 'react';

const Header = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://cis.wakavaping.com/cdn/shop/files/2F59FC0D-D115-45C3-9FC4-2381B1326FE0_32x32.png?v=1705511097"
        />
      </Head>
      <section
        id="shopify-section-announcement-bar"
        className="shopify-section announcement-bar"
      >
        <div className="warning-bar">
          <div className="container position-relative">
            <a
              className="stretched-linlk absolute-center cursor-pointer z-index-100"
              href=""
            ></a>
            <figure className="announcementbar-img flex-center">
              <picture>
                <source
                  media="(max-width: 767.9px)"
                  sizes="(max-width: 767.9px) 100vw, 767.9px"
                  srcSet="//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=48 48w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=96 96w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=160 160w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=240 240w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=320 320w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=420 420w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=640 640w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=750 750w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=828 828w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=960 960w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=1170 1170w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=1242 1242w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=1380 1380w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619&amp;width=1536 1536w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner.mob-02.png?v=1713850619 6001w
      "
                />

                <img
                  sizes="(min-width: 768px) 50vw, 1440px"
                  srcSet="//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=320 320w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=480 480w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=520 520w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=720 720w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=960 960w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=1920 1920w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750&amp;width=2048 2048w,//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4.png?v=1709840750 2084w
      "
                  src="//cis.wakavaping.com/cdn/shop/files/Warning_Banner__1_1f2ee220-0dc1-49d7-9275-466bb79c05c4_96x.png?v=1709840750"
                  height="209"
                  width="2084"
                  className="h-100 object-fit-cover w-100"
                  alt=""
                />
              </picture>
            </figure>
          </div>
        </div>
      </section>
      <section
        id="shopify-section-header"
        className="shopify-section shopify-section-header as-shopify-header"
      >
        <div className="site-header as-site-header header-middle-left header-logo-center bg-white">
          <div className="container header-wrap">
            <div className="header as-header-wrap">
              <div className="d-block d-lg-none header-drawer position-relative text-end">
                <button
                  aria-controls="offcanvasDropdown"
                  aria-label="drawerTrigger"
                  className="btn p-0 rounded-0 border-0"
                  data-bs-target="#offcanvasDropdown"
                  data-bs-toggle="offcanvas"
                >
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="a"
                      height="32"
                      maskUnits="userSpaceOnUse"
                      width="32"
                      x="0"
                      y="0"
                    >
                      <path d="m0 0h32v32h-32z" fill="#fff"></path>
                    </mask>
                    <g mask="url(#a)">
                      <path
                        clip-rule="evenodd"
                        d="m26.6668 9h-21.3333c-.55267 0-1-.448-1-1s.44733-1 1-1h21.3333c.5527 0 1 .448 1 1s-.4473 1-1 1zm0 8h-21.3333c-.55267 0-1-.448-1-1s.44733-1 1-1h21.3333c.5527 0 1 .448 1 1s-.4473 1-1 1zm-21.3333 8h21.3333c.5527 0 1-.448 1-1s-.4473-1-1-1h-21.3333c-.55267 0-1 .448-1 1s.44733 1 1 1z"
                        fill="#000"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </button>
                <div
                  aria-labelledby="offcanvasDropdown"
                  className="offcanvas offcanvas-end as-offcanvas text-white outer-canvas"
                  id="offcanvasDropdown"
                >
                  <div className="offcanvas-header hamburger-topbar container">
                    <button
                      aria-label="Close"
                      className="text-reset btn p-0 offcanvas-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="m19 5-14 14"></path>
                          <path d="m5 5 14 14"></path>
                        </g>
                      </svg>
                    </button>
                    <div className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="40"
                        viewBox="0 0 120 40"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.2394 26.1815C19.8947 23.4738 16.8369 19.9425 12.5203 15.9991C2.6823 7.01137 3.26942 35.5094 16.0464 34.342C18.5146 34.1165 21.0039 31.5573 23.4086 28.4762C23.6129 28.2146 24.0062 28.2022 24.2292 28.4484C25.9854 30.3864 27.3025 31.5573 28.5747 31.6607C32.3969 31.9713 38.9185 19.9096 35.1765 17.454C32.646 15.7938 29.5228 20.1135 26.1338 24.801C25.4965 25.6825 24.8497 26.5771 24.1957 27.4473C23.9914 27.719 23.5892 27.7321 23.3652 27.4766C23.0084 27.0695 22.634 26.6372 22.2394 26.1815ZM38.5107 12.1698C45.0094 29.1425 29.143 45.0094 12.1702 38.5107C7.26354 36.6323 3.36735 32.736 1.48894 27.8294C-5.00849 10.8575 10.8561 -5.00819 27.8286 1.48862C32.7354 3.36704 36.632 7.26308 38.5107 12.1698ZM79.6359 25.2202C76.7578 25.2202 74.416 22.8783 74.416 20.0002C74.416 17.1219 76.7578 14.7804 79.6359 14.7804C82.5142 14.7804 84.8558 17.1219 84.8558 20.0002C84.8558 22.8783 82.5142 25.2202 79.6359 25.2202ZM79.6359 11.6338C75.0227 11.6338 71.2695 15.3868 71.2695 20.0002C71.2695 24.6135 75.0227 28.3668 79.6359 28.3668C81.6091 28.3668 83.4236 27.6785 84.8558 26.5317V28.12H88.0024V20.0002C88.0024 15.3868 84.2493 11.6338 79.6359 11.6338ZM66.9501 21.9491C66.9501 23.6941 65.5305 25.1137 63.7855 25.1137C62.0405 25.1137 60.6206 23.6941 60.6206 21.9491V11.9473H57.474V21.9491C57.474 23.6941 56.0544 25.1137 54.3093 25.1137C52.5643 25.1137 51.1447 23.6941 51.1447 21.9491V11.9473H47.998V21.9491C47.998 25.4293 50.8293 28.2604 54.3093 28.2604C56.1954 28.2604 57.8898 27.4275 59.0474 26.1118C60.2048 27.4275 61.8993 28.2604 63.7855 28.2604C67.2655 28.2604 70.0968 25.4293 70.0968 21.9491V11.9473H66.9501V21.9491ZM102.652 11.9053C102.652 15.1587 101.035 18.0395 98.5646 19.7926C101.35 21.4913 103.214 24.5584 103.214 28.0527H100.067C100.067 24.5352 97.2677 21.6612 93.7801 21.5374C93.5373 21.5573 93.2925 21.5698 93.0451 21.5713V28.0527H89.8984V11.9467H93.0451V18.4247C93.2138 18.4232 93.3808 18.4146 93.5462 18.4004V18.385C93.5719 18.385 93.5975 18.3858 93.623 18.3867C93.6429 18.3874 93.6628 18.3881 93.6828 18.3883C96.9514 18.0388 99.5057 15.2651 99.5057 11.9053H102.652ZM111.62 25.2202C108.742 25.2202 106.4 22.8783 106.4 20.0002C106.4 17.1219 108.742 14.7804 111.62 14.7804C114.499 14.7804 116.84 17.1219 116.84 20.0002C116.84 22.8783 114.499 25.2202 111.62 25.2202ZM111.62 11.6338C107.007 11.6338 103.254 15.3868 103.254 20.0002C103.254 24.6135 107.007 28.3668 111.62 28.3668C113.593 28.3668 115.408 27.6785 116.84 26.5317V28.12H119.987V20.0002C119.987 15.3868 116.233 11.6338 111.62 11.6338Z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="hamburger-search-wrap as-hamburger-search-wrap">
                    <div className="cursor-pointer search-form-content px-3 mt-1 mb-3 container">
                      <form
                        action="/search"
                        className="search-form"
                        method="GET"
                      >
                        <div className="d-flex justify-content-center flex-wrap w-100">
                          <div className="align-items-center d-flex position-relative w-100">
                            <button
                              className="navbar-icon-wrapper btn gray-700 search-icon active"
                              data-id="Search_Icon"
                              data-type="Search_Icon_Click"
                              type="submit"
                            >
                              <span className="icon-wrapper navbar-icon">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M16.6108 16.6109L20.8535 20.8535"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <span className="sr-only visually-hidden">
                                Отправить
                              </span>
                            </button>

                            <input
                              type="text"
                              name="q"
                              className="no-border form-control cursor-pointer rounded-1 text-white as-mob-search-input fw-bold input-shadow-thick input-placeholder py-3 form-control-bg"
                              placeholder="Поиск…"
                              aria-label="Search for products, articles or pages"
                              value=""
                              autoCapitalize="off"
                              autoComplete="off"
                              required={true}
                            />
                            <span className="d-none ms-3 text-overline as-mob-cancel">
                              Cancel
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="h-100 mob-quick-menu-wrap">
                      <div className="container">
                        <div className="as-search-panel py-3 search-panel text-left">
                          <p className="ant-search-item text-white mb-3 search-panel-header text-caption sub-title">
                            Популярные запросы
                          </p>
                          <div className="gx-2 gy-2 list-unstyled row whitespace-normal">
                            <div className="col-12">
                              <a
                                href="/products/sopro-pa10000"
                                className="w-100 mob-ant-search-item btn rounded text-truncate bg-xs-transparent text-start fw-normal color-xs-white bb-xs-line radius-0 px-0"
                              >
                                soPro PA10000
                              </a>
                            </div>
                            <div className="col-12">
                              <a
                                href="/products/waka-sopro-pa7000"
                                className="w-100 mob-ant-search-item btn rounded text-truncate bg-xs-transparent text-start fw-normal color-xs-white bb-xs-line radius-0 px-0"
                              >
                                soPro PA7000
                              </a>
                            </div>
                            <div className="col-12">
                              <a
                                href="/products/waka-smash"
                                className="w-100 mob-ant-search-item btn rounded text-truncate bg-xs-transparent text-start fw-normal color-xs-white bb-xs-line radius-0 px-0"
                              >
                                WAKA SMASH
                              </a>
                            </div>
                            <div className="col-12">
                              <a
                                href="/products/waka-sopro-dm8000i"
                                className="w-100 mob-ant-search-item btn rounded text-truncate bg-xs-transparent text-start fw-normal color-xs-white bb-xs-line radius-0 px-0"
                              >
                                WAKA soPro DM8000i
                              </a>
                            </div>
                            <div className="col-12">
                              <a
                                href="/products/sopro-dm8000"
                                className="as-ant-search-item w-100 mob-ant-search-item btn rounded text-truncate bg-xs-transparent text-start fw-normal color-xs-white bb-xs-line radius-0 px-0"
                              >
                                WAKA soPro DM8000
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-0 hr-line" />
                  <div className="offcanvas-body hamburger-inner-content container">
                    <ul className="list-unstyled drawer-nav as-drawer-content mb-0">
                      <li>
                        <a
                          aria-controls="submenuDropdown-1"
                          className="nav-link drawer-nav-link active"
                          data-bs-target="#submenu-dropdown-1"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                        >
                          <span>ПРОДУКТЫ</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m8 12-5.19615-6h10.39235z"
                              fill="#ececec"
                              opacity=".85"
                            ></path>
                          </svg>
                        </a>

                        <div className="show" id="submenu-dropdown-1">
                          <div className="mb-4">
                            <a
                              data-bs-toggle="collapse"
                              data-bs-target="#sublink-dropdown-1"
                              className="d-flex justify-content-between nav-link drawer-subnav-link"
                              href="/"
                              aria-expanded="true"
                            >
                              <span className="color-xs-white">
                                WAKA продукция
                              </span>
                              <svg
                                fill="none"
                                height="16"
                                viewBox="0 0 16 16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m8 12-5.19615-6h10.39235z"
                                  fill="#ececec"
                                  opacity=".85"
                                ></path>
                              </svg>
                            </a>
                            <div className="show" id="sublink-dropdown-1">
                              <div className="drawer-subnav-link mb-3 py-0 text-start">
                                <a
                                  href="/"
                                  className="fw-bold text-overline text-light link-primary text-decoration-none arrow-link"
                                >
                                  Посмотреть все товары
                                  <svg
                                    fill="none"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    >
                                      <path d="m4.16669 10h11.66671"></path>
                                      <path d="m10.8333 15 5-5"></path>
                                      <path d="m10.8333 5 5 5"></path>
                                    </g>
                                  </svg>
                                </a>
                              </div>

                              <ul className="list-unstyled mb-3">
                                <li className="position-relative">
                                  <a
                                    className="stretched-link"
                                    href="/products/waka-sopro-20000"
                                  ></a>
                                  <div className="nav-link drawer-subnav-link d-flex align-items-center py-1">
                                    <figure className="mega-menu-img drawer-mega-menu-img fixed-ratio ratio ratio-1x1 mb-0 overflow-hidden figure-rounded ">
                                      <picture>
                                        <img
                                          width="60"
                                          height="60"
                                          srcSet="//cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7_60x60.png?v=1716887989 1x, //cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7_120x120@2x.png?v=1716887989 2x"
                                          src="//cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7.png?v=1716887989"
                                          loading="lazy"
                                          alt=""
                                        />
                                      </picture>
                                    </figure>
                                    <div>WAKAsoPro 20000 (20000 тяг)</div>
                                  </div>
                                </li>

                                <li className="position-relative">
                                  <a
                                    className="stretched-link"
                                    href="/products/sopro-pa10000"
                                  ></a>
                                  <div className="nav-link drawer-subnav-link d-flex align-items-center py-1">
                                    <figure className="mega-menu-img drawer-mega-menu-img fixed-ratio ratio ratio-1x1 mb-0 overflow-hidden figure-rounded ">
                                      <picture>
                                        <img
                                          width="60"
                                          height="60"
                                          srcSet="//cis.wakavaping.com/cdn/shop/products/Side_60x60.png?v=1708675017 1x, //cis.wakavaping.com/cdn/shop/products/Side_120x120@2x.png?v=1708675017 2x"
                                          src="//cis.wakavaping.com/cdn/shop/products/Side.png?v=1708675017"
                                          loading="lazy"
                                          alt=""
                                        />
                                      </picture>
                                    </figure>
                                    <div>soPro PA10000 (10000 тяг)</div>
                                  </div>
                                </li>

                                <li className="position-relative">
                                  <a
                                    className="stretched-link"
                                    href="/products/waka-sopro-dm8000i"
                                  ></a>
                                  <div className="nav-link drawer-subnav-link d-flex align-items-center py-1">
                                    <figure className="mega-menu-img drawer-mega-menu-img fixed-ratio ratio ratio-1x1 mb-0 overflow-hidden figure-rounded ">
                                      <picture>
                                        <img
                                          width="60"
                                          height="60"
                                          srcSet="//cis.wakavaping.com/cdn/shop/files/8000idevicepcblue_60x60.png?v=1713170075 1x, //cis.wakavaping.com/cdn/shop/files/8000idevicepcblue_120x120@2x.png?v=1713170075 2x"
                                          src="//cis.wakavaping.com/cdn/shop/files/8000idevicepcblue.png?v=1713170075"
                                          loading="lazy"
                                          alt=""
                                        />
                                      </picture>
                                    </figure>
                                    <div>soPro DM8000i (8000 тяг)</div>
                                  </div>
                                </li>

                                <li className="position-relative">
                                  <a
                                    className="stretched-link"
                                    href="/products/sopro-dm8000"
                                  ></a>
                                  <div className="nav-link drawer-subnav-link d-flex align-items-center py-1">
                                    <figure className="mega-menu-img drawer-mega-menu-img fixed-ratio ratio ratio-1x1 mb-0 overflow-hidden figure-rounded ">
                                      <picture>
                                        <img
                                          width="60"
                                          height="60"
                                          srcSet="//cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde_60x60.png?v=1705510924 1x, //cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde_120x120@2x.png?v=1705510924 2x"
                                          src="//cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde.png?v=1705510924"
                                          loading="lazy"
                                          alt=""
                                        />
                                      </picture>
                                    </figure>
                                    <div>soPro DM8000 (8000 тяг)</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <hr className="my-0 hr-line" />

                      <li>
                        <a
                          className="nav-link drawer-nav-link"
                          href="/pages/dualmesh"
                        >
                          <span>DUALMESH</span>
                        </a>
                      </li>
                      <hr className="my-0 hr-line" />

                      <li>
                        <a
                          aria-controls="submenuDropdown-3"
                          className="nav-link drawer-nav-link "
                          data-bs-target="#submenu-dropdown-3"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span>КОМПАНИЯ</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m8 12-5.19615-6h10.39235z"
                              fill="#ececec"
                              opacity=".85"
                            ></path>
                          </svg>
                        </a>

                        <div className="collapse" id="submenu-dropdown-3">
                          <ul className="list-unstyled mb-3">
                            <li className="">
                              <a
                                className="nav-link drawer-subnav-link show "
                                href="/pages/about-waka"
                              >
                                О WAKA
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <hr className="my-0 hr-line" />

                      <li>
                        <a
                          aria-controls="submenuDropdown-4"
                          className="nav-link drawer-nav-link "
                          data-bs-target="#submenu-dropdown-4"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span>ПАРТНЕРСТВО С НАМИ</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m8 12-5.19615-6h10.39235z"
                              fill="#ececec"
                              opacity=".85"
                            ></path>
                          </svg>
                        </a>

                        <div className="collapse" id="submenu-dropdown-4">
                          <ul className="list-unstyled mb-3">
                            <li className="">
                              <a
                                className="nav-link drawer-subnav-link show "
                                href="/pages/partnership-opportunity"
                              >
                                Стать партнером
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <hr className="my-0 hr-line" />

                      <li>
                        <a
                          aria-controls="submenuDropdown-5"
                          className="nav-link drawer-nav-link "
                          data-bs-target="#submenu-dropdown-5"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span>ПОДДЕРЖКА</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m8 12-5.19615-6h10.39235z"
                              fill="#ececec"
                              opacity=".85"
                            ></path>
                          </svg>
                        </a>

                        <div className="collapse" id="submenu-dropdown-5">
                          <ul className="list-unstyled mb-3">
                            <li className="">
                              <a
                                className="nav-link drawer-subnav-link show "
                                href="/pages/contact"
                              >
                                {' '}
                                Свяжитесь с нами
                              </a>
                            </li>

                            <li className="">
                              <a
                                className="nav-link drawer-subnav-link  "
                                href="/blogs/instruction"
                              >
                                Инструкции
                              </a>
                            </li>

                            <li className="">
                              <a
                                className="nav-link drawer-subnav-link  "
                                href="/pages/verify"
                              >
                                Проверка подлинности устройства
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-heading m-0">
                <h1 className="d-none">WAKA-CIS</h1>
                <a
                  className="header-heading-link d-inline-block text-decoration-none "
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="40"
                    viewBox="0 0 120 40"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.2394 26.1815C19.8947 23.4738 16.8369 19.9425 12.5203 15.9991C2.6823 7.01137 3.26942 35.5094 16.0464 34.342C18.5146 34.1165 21.0039 31.5573 23.4086 28.4762C23.6129 28.2146 24.0062 28.2022 24.2292 28.4484C25.9854 30.3864 27.3025 31.5573 28.5747 31.6607C32.3969 31.9713 38.9185 19.9096 35.1765 17.454C32.646 15.7938 29.5228 20.1135 26.1338 24.801C25.4965 25.6825 24.8497 26.5771 24.1957 27.4473C23.9914 27.719 23.5892 27.7321 23.3652 27.4766C23.0084 27.0695 22.634 26.6372 22.2394 26.1815ZM38.5107 12.1698C45.0094 29.1425 29.143 45.0094 12.1702 38.5107C7.26354 36.6323 3.36735 32.736 1.48894 27.8294C-5.00849 10.8575 10.8561 -5.00819 27.8286 1.48862C32.7354 3.36704 36.632 7.26308 38.5107 12.1698ZM79.6359 25.2202C76.7578 25.2202 74.416 22.8783 74.416 20.0002C74.416 17.1219 76.7578 14.7804 79.6359 14.7804C82.5142 14.7804 84.8558 17.1219 84.8558 20.0002C84.8558 22.8783 82.5142 25.2202 79.6359 25.2202ZM79.6359 11.6338C75.0227 11.6338 71.2695 15.3868 71.2695 20.0002C71.2695 24.6135 75.0227 28.3668 79.6359 28.3668C81.6091 28.3668 83.4236 27.6785 84.8558 26.5317V28.12H88.0024V20.0002C88.0024 15.3868 84.2493 11.6338 79.6359 11.6338ZM66.9501 21.9491C66.9501 23.6941 65.5305 25.1137 63.7855 25.1137C62.0405 25.1137 60.6206 23.6941 60.6206 21.9491V11.9473H57.474V21.9491C57.474 23.6941 56.0544 25.1137 54.3093 25.1137C52.5643 25.1137 51.1447 23.6941 51.1447 21.9491V11.9473H47.998V21.9491C47.998 25.4293 50.8293 28.2604 54.3093 28.2604C56.1954 28.2604 57.8898 27.4275 59.0474 26.1118C60.2048 27.4275 61.8993 28.2604 63.7855 28.2604C67.2655 28.2604 70.0968 25.4293 70.0968 21.9491V11.9473H66.9501V21.9491ZM102.652 11.9053C102.652 15.1587 101.035 18.0395 98.5646 19.7926C101.35 21.4913 103.214 24.5584 103.214 28.0527H100.067C100.067 24.5352 97.2677 21.6612 93.7801 21.5374C93.5373 21.5573 93.2925 21.5698 93.0451 21.5713V28.0527H89.8984V11.9467H93.0451V18.4247C93.2138 18.4232 93.3808 18.4146 93.5462 18.4004V18.385C93.5719 18.385 93.5975 18.3858 93.623 18.3867C93.6429 18.3874 93.6628 18.3881 93.6828 18.3883C96.9514 18.0388 99.5057 15.2651 99.5057 11.9053H102.652ZM111.62 25.2202C108.742 25.2202 106.4 22.8783 106.4 20.0002C106.4 17.1219 108.742 14.7804 111.62 14.7804C114.499 14.7804 116.84 17.1219 116.84 20.0002C116.84 22.8783 114.499 25.2202 111.62 25.2202ZM111.62 11.6338C107.007 11.6338 103.254 15.3868 103.254 20.0002C103.254 24.6135 107.007 28.3668 111.62 28.3668C113.593 28.3668 115.408 27.6785 116.84 26.5317V28.12H119.987V20.0002C119.987 15.3868 116.233 11.6338 111.62 11.6338Z"
                    ></path>
                  </svg>
                </a>
              </div>
              <nav className="header-inline-menu d-none d-lg-block ">
                <ul className="nav">
                  <li className="nav-item as-dropdown">
                    <div>
                      <div className="with-mega-menu-dropdown as-details-toggle">
                        <span className="nav-link">
                          <span>ПРОДУКТЫ</span>
                        </span>
                        <div className="dropdown-menu mega-menu-dropdown bg-white as-details-content shadow">
                          <div className="container dropdown-container">
                            <div className="row row-cols-2 gx-5">
                              <div className="col mega-item pb-sm-5">
                                <div className="submenu-content">
                                  <div className="mb-5 mb-sm-3">
                                    <div className="submenu-title mb-sm-1">
                                      WAKA продукция
                                    </div>
                                    <a
                                      className="submenu-link link-primary"
                                      href="/"
                                    >
                                      Посмотреть все товары
                                      <svg
                                        fill="none"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        width="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                        >
                                          <path d="m4.16669 10h11.66671"></path>
                                          <path d="m10.8333 15 5-5"></path>
                                          <path d="m10.8333 5 5 5"></path>
                                        </g>
                                      </svg>
                                    </a>
                                  </div>
                                  <div className="row row-cols-4 gx-4 gy-3 flex-center">
                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/waka-sopro-20000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7_212x212.png?v=1716887989 1x, //cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7_212x212@2x.png?v=1716887989 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/817d4eea7602e2c28355747140074294_18ef1c82-ec39-4c22-9f54-ee16b50847e7.png?v=1716887989"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        WAKAsoPro 20000 (20000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/sopro-pa10000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/products/Side_212x212.png?v=1708675017 1x, //cis.wakavaping.com/cdn/shop/products/Side_212x212@2x.png?v=1708675017 2x"
                                            src="//cis.wakavaping.com/cdn/shop/products/Side.png?v=1708675017"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soPro PA10000 (10000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/waka-sopro-dm8000i"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/8000idevicepcblue_212x212.png?v=1713170075 1x, //cis.wakavaping.com/cdn/shop/files/8000idevicepcblue_212x212@2x.png?v=1713170075 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/8000idevicepcblue.png?v=1713170075"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soPro DM8000i (8000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/sopro-dm8000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde_212x212.png?v=1705510924 1x, //cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde_212x212@2x.png?v=1705510924 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/1_7785af17-e2fa-4ed8-94e5-9d9890107dde.png?v=1705510924"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soPro DM8000 (8000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/waka-sopro-pa7000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/Purple_front_212x212.png?v=1713169391 1x, //cis.wakavaping.com/cdn/shop/files/Purple_front_212x212@2x.png?v=1713169391 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/Purple_front.png?v=1713169391"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soPro PA7000 (7000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/waka-smash"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/smash-removebg-preview_b649d0e2-ca61-461f-9077-008fc06d1eb6_212x212.png?v=1713927371 1x, //cis.wakavaping.com/cdn/shop/files/smash-removebg-preview_b649d0e2-ca61-461f-9077-008fc06d1eb6_212x212@2x.png?v=1713927371 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/smash-removebg-preview_b649d0e2-ca61-461f-9077-008fc06d1eb6.png?v=1713927371"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        Smash (6000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/sofit-fa4000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/4_abd7ddf9-8b84-4368-98c4-580ea38d687a_212x212.png?v=1705511190 1x, //cis.wakavaping.com/cdn/shop/files/4_abd7ddf9-8b84-4368-98c4-580ea38d687a_212x212@2x.png?v=1705511190 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/4_abd7ddf9-8b84-4368-98c4-580ea38d687a.png?v=1705511190"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soFit FA4000 (4000 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/solo2"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/Solo2_212x212.png?v=1713171679 1x, //cis.wakavaping.com/cdn/shop/files/Solo2_212x212@2x.png?v=1713171679 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/Solo2.png?v=1713171679"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        Solo2 (2500 тяг)
                                      </div>
                                    </div>

                                    <div className="col position-relative">
                                      <a
                                        className="stretched-link lr-sm-10"
                                        href="/products/waka-sofit-fa1000"
                                      ></a>
                                      <figure className="mega-menu-img drawer-mega-menu-img-pc ratio-sm-1 fixed-ratio ratio ratio-1x1 mb-0  figure-rounded overflow-hidden">
                                        <picture>
                                          <img
                                            width="212"
                                            height="212"
                                            srcSet="//cis.wakavaping.com/cdn/shop/files/1111_212x212.png?v=1705510841 1x, //cis.wakavaping.com/cdn/shop/files/1111_212x212@2x.png?v=1705510841 2x"
                                            src="//cis.wakavaping.com/cdn/shop/files/1111.png?v=1705510841"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </picture>
                                      </figure>
                                      <div
                                        className="fs-16 sublink-title text-center mt-sm-2 ellipsis-2"
                                        title="sublink.title"
                                      >
                                        soFit FA1000 (1000 тяг)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link" href="/pages/dualmesh">
                      <span>DUALMESH</span>
                    </a>
                  </li>

                  <li className="nav-item as-dropdown">
                    <div>
                      <div className="with-default-dropdown as-details-toggle">
                        <span className="nav-link">
                          <span>КОМПАНИЯ</span>
                        </span>
                        <ul className="dropdown-menu default-dropdown as-details-content shadow item-dropdown">
                          <li>
                            <a
                              className="dropdown-item menu-item as-last fw-normal menuitem-sm-active"
                              href="/pages/about-waka"
                            >
                              О WAKA
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item as-dropdown">
                    <div>
                      <div className="with-default-dropdown as-details-toggle">
                        <span className="nav-link">
                          <span>ПАРТНЕРСТВО С НАМИ</span>
                        </span>
                        <ul className="dropdown-menu default-dropdown as-details-content shadow item-dropdown">
                          <li>
                            <a
                              className="dropdown-item menu-item as-last fw-normal menuitem-sm-active"
                              href="/pages/partnership-opportunity"
                            >
                              Стать партнером
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item as-dropdown">
                    <div>
                      <div className="with-default-dropdown as-details-toggle">
                        <span className="nav-link">
                          <span>ПОДДЕРЖКА</span>
                        </span>
                        <ul className="dropdown-menu default-dropdown as-details-content shadow item-dropdown">
                          <li>
                            <a
                              className="dropdown-item menu-item  fw-normal menuitem-sm-active"
                              href="/pages/contact"
                            >
                              {' '}
                              Свяжитесь с нами
                            </a>
                          </li>
                          <hr className="my-0 hr-line" />

                          <li>
                            <a
                              className="dropdown-item menu-item  fw-normal menuitem-sm-active"
                              href="/blogs/instruction"
                            >
                              Инструкции
                            </a>
                          </li>
                          <hr className="my-0 hr-line" />

                          <li>
                            <a
                              className="dropdown-item menu-item as-last fw-normal menuitem-sm-active"
                              href="/pages/verify"
                            >
                              Проверка подлинности устройства
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="header-icons d-flex">
                <div className="nav-item d-none d-lg-block as-navbar-search-trigger">
                  <div className="h-100 d-flex align-items-center">
                    <button className="header-icon cursor-pointer btn border-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16.6108 16.6109L20.8535 20.8535"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="navbar-search-wrapper as-navbar-search-wrapper h-100">
                <div className="container h-100">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <form
                        action="/search"
                        className="navbar-search-form"
                        method="GET"
                      >
                        <div className="form-group">
                          <div className="input-group align-items-center position-relative">
                            <div className="input-group-prepend">
                              <button
                                className="navbar-icon-wrapper nav-link btn ps-0"
                                data-id="Search_Icon"
                                data-type="Search_Icon_Click"
                                type="submit"
                              >
                                <span className="icon-wrapper navbar-icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M16.6108 16.6109L20.8535 20.8535"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                                <span className="sr-only visually-hidden">
                                  Отправить
                                </span>
                              </button>
                            </div>

                            <input
                              type="text"
                              name="q"
                              className="border-0 form-control shadow-none fw-bold bg-white"
                              placeholder="Поиск…"
                              value=""
                              autoCapitalize="off"
                              autoComplete="off"
                              required={true}
                            />

                            <div className="input-group-append">
                              <button
                                className="as-close btn btn-sm btn-link text-muted text-decoration-none pe-0"
                                type="button"
                              >
                                <span className="d-none d-md-block icon-wrapper navbar-icon">
                                  <svg
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 5L5 19"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      stroke="black"
                                    ></path>
                                    <path
                                      d="M5 5L19 19"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      stroke="black"
                                    ></path>
                                  </svg>
                                </span>
                                <span className="d-block d-md-none text-secondary text-overline">
                                  Отменить
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="border-top bg-white menu-wrap">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div className="as-search-panel bg-white py-5 search-panel text-left">
                          <p className="ant-search-item fw-bold mb-3 search-panel-header text-caption">
                            Популярные запросы
                          </p>
                          <div className="gy-md-3 gx-md-4 list-unstyled row row-cols-3 whitespace-normal">
                            <div className="col">
                              <a
                                href="/products/sopro-pa10000"
                                className="w-100 ant-search-item search-item btn bg-gray-200 rounded text-truncate radius-sm-8"
                              >
                                soPro PA10000
                              </a>
                            </div>
                            <div className="col">
                              <a
                                href="/products/waka-sopro-pa7000"
                                className="w-100 ant-search-item search-item btn bg-gray-200 rounded text-truncate radius-sm-8"
                              >
                                soPro PA7000
                              </a>
                            </div>
                            <div className="col">
                              <a
                                href="/products/waka-smash"
                                className="w-100 ant-search-item search-item btn bg-gray-200 rounded text-truncate radius-sm-8"
                              >
                                WAKA SMASH
                              </a>
                            </div>
                            <div className="col">
                              <a
                                href="/products/waka-sopro-dm8000i"
                                className="w-100 ant-search-item search-item btn bg-gray-200 rounded text-truncate radius-sm-8"
                              >
                                WAKA soPro DM8000i
                              </a>
                            </div>
                            <div className="col">
                              <a
                                href="/products/sopro-dm8000"
                                className="as-ant-search-item w-100 ant-search-item search-item btn bg-gray-200 rounded text-truncate radius-sm-8"
                              >
                                WAKA soPro DM8000
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
