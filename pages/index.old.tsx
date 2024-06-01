import StoreLayout from 'components/store/storeLayout/layouts';
import React, { useEffect, useRef, useState } from 'react';

const IndexPage = (): JSX.Element => {
  const [animitionVisib, setAnimitionVisib] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimitionVisib(!animitionVisib);
    }, 800);
  });

  return (
    <>
      <main className="main-content" id="main-content" role="main">
        <div
          id="shopify-section-template--21921109999917__16596804777c411bd4"
          className="shopify-section not-css"
        >
          {/* <link rel="stylesheet" href="//cis.wakavaping.com/cdn/shop/t/2/assets/swiper.min.css?v=175802948729215579431705510225"> */}
        </div>
        <div
          id="shopify-section-template--21921109999917__165819765041cffa18"
          className="shopify-section slideshow-banner pt-5 pt-md-5 pb-3 pb-sm-7 bg-white"
        >
          {/* <link rel="stylesheet" href="//cis.wakavaping.com/cdn/shop/t/2/assets/slideshow-banner-index.min.css?v=12426735759954157921705510205"> */}

          <input type="hidden" className="as-auto-rotate-slides" value="true" />
          <input
            type="hidden"
            className="as-mobile-auto-rotate-slides"
            value="false"
          />
          <input type="hidden" className="as-change-slides-every" value="5" />
          <input type="hidden" className="as-change-effect-gap" value="1.5" />

          <div className=" container slideshow-banner-sections-wrap">
            <div className="slideshow-banner-wrap">
              <div className="swiper slideshow-banner-swiper as-slideshow-banner-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide h-auto position-relative swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="1"
                  >
                    <div className="flex-column-reverse card-warp row gx-0  overflow-hidden  flex-md-row h-100 position-relative">
                      <div className="align-items-center col-12 col-md-5 d-flex flex-fill justify-content-center">
                        <div className="px-3 px-md-0 pe-md-1 pe-xl-3 pt-5 pt-md-3 pb-3 py-md-7">
                          <div className="align-items-center d-flex mb-3 mb-sm-3">
                            <h2 className="carousel-title mb-0">
                              WAKA soPro DM8000i
                              <text className="type-colors">
                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(93deg, rgba(250, 140, 11, 0.92), rgba(250, 11, 11, 0.92) 100%)',
                                    transform: animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: animitionVisib ? 1 : 0,
                                  }}
                                >
                                  DUALMESH
                                </span>

                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(308deg, rgb(59, 48, 238) 0px, rgb(48, 238, 189) 100%)',
                                    transform: !animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: !animitionVisib ? 1 : 0,
                                  }}
                                >
                                  8000 затяжек
                                </span>
                              </text>
                            </h2>
                          </div>

                          <span className="fw-bold pb-2 pb-md-2 d-inline-block pb-sm-2">
                            Благодаря металлической отделке он выглядит как
                            произведение искусства, но при этом обладает
                            исключительной долговечностью.
                          </span>

                          <div className="d-flex mt-2 mt-sm-3">
                            <a
                              className="btn btn-lg btn-outline-primary  fw-bold me-3 pointer-events-auto"
                              href="/products/waka-sopro-dm8000i"
                            >
                              Подробнее
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-7">
                        <div className="media-warp rounded-common overflow-hidden position-relative">
                          <picture>
                            <source
                              media="(max-width: 767.9px)"
                              sizes="(max-width: 767.9px) 90vw, 767.9px"
                            />

                            <img
                              sizes="(min-width: 768px) 70vw, 1440px"
                              src="//cis.wakavaping.com/cdn/shop/files/clean_96x.jpg?v=1705511570"
                              loading="lazy"
                              height="1122"
                              width="1660"
                              className="h-100 object-fit-cover w-100"
                              alt=""
                              srcSet="//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=320 320w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=480 480w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=520 520w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=720 720w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=960 960w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570 1660w
      "
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="swiper-slide h-auto position-relative swiper-slide-prev swiper-slide-duplicate-next"
                    data-swiper-slide-index="0"
                  >
                    <div className="flex-column-reverse card-warp row gx-0  overflow-hidden  flex-md-row h-100 position-relative">
                      <div className="align-items-center col-12 col-md-5 d-flex flex-fill justify-content-center">
                        <div className="px-3 px-md-0 pe-md-1 pe-xl-3 pt-5 pt-md-3 pb-3 py-md-7">
                          <span className="fw-bold pb-2 pb-md-2 d-inline-block pb-sm-2">
                            WAKA soPro PA10000
                          </span>

                          <div className="align-items-center d-flex mb-3 mb-sm-3">
                            <h2 className="carousel-title mb-0">
                              Испаритель Dual Mesh
                              <text className="type-colors">
                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(93deg, rgba(250, 140, 11, 0.92), rgba(250, 11, 11, 0.92) 100%)',
                                    transform: animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: animitionVisib ? 1 : 0,
                                  }}
                                >
                                  Double Clouds
                                </span>

                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(308deg, rgb(59, 48, 238) 0px, rgb(48, 238, 189) 100%)',
                                    transform: !animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: !animitionVisib ? 1 : 0,
                                  }}
                                >
                                  10000 затяжек
                                </span>
                              </text>
                            </h2>
                          </div>

                          <div className="d-flex mt-2 mt-sm-3">
                            <a
                              className="btn btn-lg btn-outline-primary  fw-bold me-3 pointer-events-auto"
                              href="/products/sopro-pa10000"
                            >
                              Подробнее
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-7">
                        <div className="media-warp rounded-common overflow-hidden position-relative">
                          <picture>
                            <source
                              media="(max-width: 767.9px)"
                              sizes="(max-width: 767.9px) 90vw, 767.9px"
                            />

                            <img
                              sizes="(min-width: 768px) 70vw, 1440px"
                              src="//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01_96x.png?v=1713243512"
                              loading="lazy"
                              height="3383"
                              width="5000"
                              className="h-100 object-fit-cover w-100"
                              alt=""
                              srcSet="//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=320 320w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=480 480w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=520 520w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=720 720w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=960 960w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1920 1920w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=2048 2048w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=3000 3000w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=3840 3840w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512 5000w
      "
                            />
                          </picture>
                        </div>
                      </div>

                      <a
                        className="stretched-link"
                        href="/products/sopro-pa10000"
                      ></a>
                    </div>
                  </div>

                  <div
                    className="swiper-slide h-auto position-relative swiper-slide-active"
                    data-swiper-slide-index="1"
                  >
                    <div className="flex-column-reverse card-warp row gx-0  overflow-hidden  flex-md-row h-100 position-relative">
                      <div className="align-items-center col-12 col-md-5 d-flex flex-fill justify-content-center">
                        <div className="px-3 px-md-0 pe-md-1 pe-xl-3 pt-5 pt-md-3 pb-3 py-md-7">
                          <div className="align-items-center d-flex mb-3 mb-sm-3">
                            <h2 className="carousel-title mb-0">
                              WAKA soPro DM8000i
                              <text className="type-colors">
                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(93deg, rgba(250, 140, 11, 0.92), rgba(250, 11, 11, 0.92) 100%)',
                                    transform: animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: animitionVisib ? 1 : 0,
                                  }}
                                >
                                  DUALMESH
                                </span>

                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(308deg, rgb(59, 48, 238) 0px, rgb(48, 238, 189) 100%)',
                                    transform: !animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: !animitionVisib ? 1 : 0,
                                  }}
                                >
                                  8000 затяжек
                                </span>
                              </text>
                            </h2>
                          </div>

                          <span className="fw-bold pb-2 pb-md-2 d-inline-block pb-sm-2">
                            Благодаря металлической отделке он выглядит как
                            произведение искусства, но при этом обладает
                            исключительной долговечностью.
                          </span>

                          <div className="d-flex mt-2 mt-sm-3">
                            <a
                              className="btn btn-lg btn-outline-primary  fw-bold me-3 pointer-events-auto"
                              href="/products/waka-sopro-dm8000i"
                            >
                              Подробнее
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-7">
                        <div className="media-warp rounded-common overflow-hidden position-relative">
                          <picture>
                            <source
                              media="(max-width: 767.9px)"
                              sizes="(max-width: 767.9px) 90vw, 767.9px"
                            />

                            <img
                              sizes="(min-width: 768px) 70vw, 1440px"
                              src="//cis.wakavaping.com/cdn/shop/files/clean_96x.jpg?v=1705511570"
                              loading="lazy"
                              height="1122"
                              width="1660"
                              className="h-100 object-fit-cover w-100"
                              alt=""
                              srcSet="//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=320 320w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=480 480w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=520 520w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=720 720w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=960 960w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570&width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/clean.jpg?v=1705511570 1660w
      "
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="swiper-slide h-auto position-relative swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0"
                  >
                    <div className="flex-column-reverse card-warp row gx-0  overflow-hidden  flex-md-row h-100 position-relative">
                      <div className="align-items-center col-12 col-md-5 d-flex flex-fill justify-content-center">
                        <div className="px-3 px-md-0 pe-md-1 pe-xl-3 pt-5 pt-md-3 pb-3 py-md-7">
                          <span className="fw-bold pb-2 pb-md-2 d-inline-block pb-sm-2">
                            WAKA soPro PA10000
                          </span>

                          <div className="align-items-center d-flex mb-3 mb-sm-3">
                            <h2 className="carousel-title mb-0">
                              Испаритель Dual Mesh
                              <text className="type-colors">
                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(93deg, rgba(250, 140, 11, 0.92), rgba(250, 11, 11, 0.92) 100%)',
                                    transform: animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: animitionVisib ? 1 : 0,
                                  }}
                                >
                                  Double Clouds
                                </span>

                                <span
                                  className="type-color  js-will-change"
                                  style={{
                                    backgroundImage:
                                      'linear-gradient(308deg, rgb(59, 48, 238) 0px, rgb(48, 238, 189) 100%)',
                                    transform: !animitionVisib
                                      ? 'matrix(1, 0, 0, 1, 0, 1)'
                                      : 'matrix(1, 0, 0, 1, 0, 91)',
                                    opacity: !animitionVisib ? 1 : 0,
                                  }}
                                >
                                  10000 затяжек
                                </span>
                              </text>
                            </h2>
                          </div>

                          <div className="d-flex mt-2 mt-sm-3">
                            <a
                              className="btn btn-lg btn-outline-primary  fw-bold me-3 pointer-events-auto"
                              href="/products/sopro-pa10000"
                            >
                              Подробнее
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-7">
                        <div className="media-warp rounded-common overflow-hidden position-relative">
                          <picture>
                            <source
                              media="(max-width: 767.9px)"
                              sizes="(max-width: 767.9px) 90vw, 767.9px"
                            />

                            <img
                              sizes="(min-width: 768px) 70vw, 1440px"
                              src="//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01_96x.png?v=1713243512"
                              loading="lazy"
                              height="3383"
                              width="5000"
                              className="h-100 object-fit-cover w-100"
                              alt=""
                              srcSet="//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=320 320w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=480 480w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=520 520w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=720 720w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=960 960w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=1920 1920w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=2048 2048w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=3000 3000w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512&width=3840 3840w,//cis.wakavaping.com/cdn/shop/files/soPro_PA10000_KV-Simplify-Horizontal-01.png?v=1713243512 5000w
      "
                            />
                          </picture>
                        </div>
                      </div>

                      <a
                        className="stretched-link"
                        href="/products/sopro-pa10000"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-3 mt-md-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                </div>
                <div
                  className="swiper-button-prev w-auto h-auto rounded d-none"
                  role="button"
                >
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 20L8 12L16 4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="white"
                    ></path>
                  </svg>
                  <span className="sr-only visually-hidden">Previous</span>
                </div>
                <div
                  className="swiper-button-next w-auto h-auto rounded d-none"
                  role="button"
                >
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 20L16 12L8 4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="white"
                    ></path>
                  </svg>
                  <span className="sr-only visually-hidden">Next</span>
                </div>
              </div>
            </div>
          </div>

          {/* <script src="//cis.wakavaping.com/cdn/shop/t/2/assets/slideshow-banner-index.min.js?v=103890486843005060441705510206" defer="defer"></script> */}
        </div>
        <div
          id="shopify-section-template--21921109999917__rich_text_wakBmt"
          className="shopify-section my-3 my-md-4"
        >
          <section
            className="seo-content container 
text-right
"
          ></section>
        </div>
        <div
          id="shopify-section-template--21921109999917__rich_text_3x4qx3"
          className="shopify-section my-3 my-md-4"
        >
          <section
            className="seo-content container 
text-right
"
          ></section>
        </div>
        <div
          id="shopify-section-template--21921109999917__e8699365-a8af-4e4f-927d-bd964a6514fd"
          className="shopify-section my-3 my-md-4"
        >
          <section
            className="seo-content container 
text-center
"
          >
            <div className="">
              <h3 className=""></h3>
              <div className="">
                <h2>Подробнее</h2>
              </div>
            </div>
          </section>
        </div>
        <div
          id="shopify-section-template--21921109999917__single_image_TgBUKE"
          className="shopify-section relx-layout mb-4 mb-sm-6"
        >
          <span data-a=""></span>

          <section className="space-responsive overflow-hidden position-relative">
            <div className="stickers-container position-relative bg-transparent">
              <div className="container">
                <figure className="figure stickers-container w-100 mb-0 radius-16 radius-sm-32 overflow-hidden">
                  <picture className="img-wrap d-block overflow-hidden">
                    <img
                      sizes="(min-width: 768px) 100vw, 1920px"
                      src="//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541_96x.png?v=1714988336"
                      loading="lazy"
                      height="900"
                      width="1600"
                      className="h-100 object-fit-cover w-100"
                      alt=""
                      srcSet="//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=320 320w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=480 480w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=520 520w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=720 720w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=960 960w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-11_5358df8d-5b6f-40bb-a996-5fa6a1190541.png?v=1714988336 1600w
      "
                    />
                  </picture>
                </figure>
              </div>
            </div>
          </section>

          <section className="carousel-section text-base relx-layout">
            <div
              className="as-carousel carousel slide"
              data-auto="true"
              data-draggable="true"
              data-autotime="5000"
              data-duration="700"
            >
              <div className="carousel-inner as-carousel-slides"></div>
              <div className="mb-4 carousel-indicators as-carousel-indicators">
                <ol className="col-sm-7 flex-wrap d-flex list-unstyled justify-content-center"></ol>
              </div>
              <div className="carousel-control-wrapper position-absolute absolute-center container d-none">
                <a
                  className="carousel-control-prev as-carousel-prev"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next as-carousel-next"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div
          id="shopify-section-template--21921109999917__single_image_FJUErk"
          className="shopify-section relx-layout mb-4 mb-sm-6"
        >
          <span data-a=""></span>

          <section className="space-responsive overflow-hidden position-relative">
            <div className="stickers-container position-relative bg-transparent">
              <div className="container">
                <figure className="figure stickers-container w-100 mb-0 radius-16 radius-sm-32 overflow-hidden">
                  <picture className="img-wrap d-block overflow-hidden">
                    <img
                      sizes="(min-width: 768px) 100vw, 1920px"
                      src="//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0_96x.png?v=1715065802"
                      loading="lazy"
                      height="900"
                      width="1600"
                      className="h-100 object-fit-cover w-100"
                      alt=""
                      srcSet="//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=320 320w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=480 480w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=520 520w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=720 720w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=960 960w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/WAKAVIS_1129-12_5ba48a87-d6bf-4cc2-9608-3ac765c2cdf0.png?v=1715065802 1600w
      "
                    />
                  </picture>
                </figure>
              </div>
            </div>
          </section>

          <section className="carousel-section text-base relx-layout">
            <div
              className="as-carousel carousel slide"
              data-auto="true"
              data-draggable="true"
              data-autotime="5000"
              data-duration="700"
            >
              <div className="carousel-inner as-carousel-slides"></div>
              <div className="mb-4 carousel-indicators as-carousel-indicators">
                <ol className="col-sm-7 flex-wrap d-flex list-unstyled justify-content-center"></ol>
              </div>
              <div className="carousel-control-wrapper position-absolute absolute-center container d-none">
                <a
                  className="carousel-control-prev as-carousel-prev"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next as-carousel-next"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div
          id="shopify-section-template--21921109999917__1658217523e32574ec"
          className="shopify-section slideshow-banner pt-5 pt-md-5 pb-3 pb-sm-7 bg-white"
        >
          {/* <link rel="stylesheet" href="//cis.wakavaping.com/cdn/shop/t/2/assets/slideshow-banner-index.min.css?v=12426735759954157921705510205"> */}

          <input
            type="hidden"
            className="as-auto-rotate-slides"
            value="false"
          />
          <input
            type="hidden"
            className="as-mobile-auto-rotate-slides"
            value="false"
          />
          <input type="hidden" className="as-change-slides-every" value="8" />
          <input type="hidden" className="as-change-effect-gap" value="2.7" />

          <div className="mt-3 mt-md-5 container slideshow-banner-sections-wrap">
            <div className="slideshow-banner-wrap">
              <div className="swiper slideshow-banner-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide h-auto position-relative">
                    <div className=" card-warp row gx-0  overflow-hidden  flex-md-row h-100 position-relative">
                      <div className="align-items-center col-12 col-md-5 d-flex flex-fill justify-content-center">
                        <div className="px-3 px-md-0 pe-md-1 pe-xl-3 pt-5 pt-md-3 pb-3 py-md-7">
                          <span className="fw-bold pb-2 pb-md-2 d-inline-block pb-sm-2">
                            Оптовая торговля/дистрибуция
                          </span>

                          <div className="align-items-center d-flex mb-3 mb-sm-3">
                            <h2 className="carousel-title mb-0">
                              Станьте партнером WAKA
                            </h2>
                          </div>

                          <div className="d-flex mt-2 mt-sm-3">
                            <a
                              className="btn btn-lg btn-outline-primary  fw-bold me-3 pointer-events-auto"
                              href="/pages/partnership-opportunity"
                            >
                              Подробнее
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-7">
                        <div className="media-warp rounded-common overflow-hidden position-relative">
                          <picture>
                            <source
                              media="(max-width: 767.9px)"
                              sizes="(max-width: 767.9px) 90vw, 767.9px"
                            />

                            <img
                              sizes="(min-width: 768px) 70vw, 1440px"
                              src="//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy_96x.png?v=1705511902"
                              loading="lazy"
                              height="1122"
                              width="1660"
                              className="h-100 object-fit-cover w-100"
                              alt=""
                              srcSet="//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=320 320w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=480 480w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=520 520w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=720 720w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=960 960w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=1080 1080w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=1280 1280w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=1440 1440w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902&width=1660 1660w,//cis.wakavaping.com/cdn/shop/files/FRESH_MINT_Copy.png?v=1705511902 1660w
      "
                            />
                          </picture>
                        </div>
                      </div>

                      <a
                        className="stretched-link"
                        href="/pages/partnership-opportunity"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

IndexPage.PageLayout = StoreLayout;
export default IndexPage;
