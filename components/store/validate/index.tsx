import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  clearBarcode,
  clearError,
  fetchBarcode,
} from 'redux/slicers/store/barcodeSlicer';
import { useEffect, useState } from 'react';
import { TBarcodeState } from 'redux/types';
import { useRouter } from 'next/router';

const ValidateComponent = () => {
  const { error, loading, barcode } = useAppSelector<TBarcodeState>(
    (state) => state.barcode,
  );

  const dispatch = useAppDispatch();
  const handleBarcodeCheck = (code: string) => {
    if (code.length >= 14) {
      dispatch(fetchBarcode({ code: code.toUpperCase() }));
    }
  };
  const [code, setCode] = useState('');
  const router = useRouter();
  return (
    <>
      <div className="_site-progress-bar as-site-progress-bar">
        <div className={`progress fade ${loading ? 'show' : ''}`}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
      {/* ------------------------------- end of loading bar ---------------------------------- */}
      <div
        className="d-none 
    d-md-block
    container py-3 breadcrumb-wrapper"
      >
        <section className="bg-white relative z-surface">
          <div className="breadcrumb-section relative">
            <nav role="navigation" aria-label="breadcrumbs">
              <span>
                <a
                  data-id="Bread_Crumbs"
                  data-type="Bread_Crumbs_Click"
                  className="link-reset breadcrumb-link text-decoration-none color-black"
                  href="/"
                  title="WAKA-CIS"
                >
                  Главная
                </a>
              </span>

              <span aria-hidden="true" className="mx-1">
                /
              </span>
              <span className="color-green2">
                Проверка подлинности устройства WAKA
              </span>
            </nav>
          </div>
        </section>
      </div>
      {/* ------------------------ end header --------------------------------- */}
      <main className="main-content" id="main-content" role="main">
        <div
          id="shopify-section-template--21921112719661__21c0eb51-795c-43b7-901c-5488254fb9e0"
          className="shopify-section not-css"
        >
          <link
            rel="stylesheet"
            href="https://cis.wakavaping.com/cdn/shop/t/2/assets/swiper.min.css?v=175802948729215579431705510225"
          />
        </div>
        <div
          id="shopify-section-template--21921112719661__verify"
          className="shopify-section verify mb-2 mb-md-3"
        >
          <link
            rel="stylesheet"
            href="https://cis.wakavaping.com/cdn/shop/t/2/assets/verify-index.min.css?v=180130588190858845581705510238"
          />
          <div>
            <div className="position-relative banner mb-3 mb-md-4">
              <div className="flex flex-column flex_h-center banner-content">
                <h1 className="text-center banner-title">Важно знать</h1>
                <h2 className="text-center banner-subtitle">
                  Подтвердите подлинность своего устройства с помощью способа
                  ниже
                </h2>
              </div>

              <picture className="verify-bg">
                <source
                  media="(max-width: 767.9px)"
                  sizes="(max-width: 767.9px) 100vw, 767.9px"
                  srcSet="https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=48 48w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=96 96w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=160 160w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=240 240w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=420 420w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=640 640w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150&amp;width=750 750w,https://cis.wakavaping.com/cdn/shop/files/verify_mob.jpg?v=1705513150 780w
      "
                />

                <img
                  sizes="(min-width: 768px) 100vw, 2048px"
                  srcSet="https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=480 480w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=520 520w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=720 720w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=960 960w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=1080 1080w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=1280 1280w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=1440 1440w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=1660 1660w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=1920 1920w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151&amp;width=2048 2048w,https://cis.wakavaping.com/cdn/shop/files/verify_web.jpg?v=1705513151 2292w
      "
                  src="https://cis.wakavaping.com/cdn/shop/files/verify_web_96x.jpg?v=1705513151"
                  height="300"
                  width="2292"
                  className="h-100 object-fit-cover w-100"
                  alt=""
                />
              </picture>
            </div>

            <div className="container">
              <div className="row flex-column flex-md-row d-flex flex_h-center flex_v-start gy-3 gy-md-0  gx-0 gx-md-4">
                <div className="col-12 col-md-5 custom-card me-0 me-md-4">
                  <div className="title mb-2 mb-md-3">
                    Пожалуйста, введите 14-значный код
                  </div>
                  <form
                    id="code-form"
                    method="POST"
                    className="needs-validation"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      className="code-input form-control"
                      required={true}
                      name="code"
                      id="code"
                      type="text"
                      minLength={14}
                      pattern="^\S{14}$"
                      maxLength={14}
                      placeholder="Введите 14-значный код"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="invalid-feedback lh-sm">
                      Проверьте правильность введенной информации и введите
                      правильный 14-значный код безопасности.
                    </div>
                    <button
                      style={{ width: '100%' }}
                      className="btn btn-primary mt-3"
                      type="submit"
                      onClick={() => handleBarcodeCheck(code)}
                    >
                      Проверка
                    </button>
                  </form>
                </div>
                <div className="col-12 col-md-5 custom-card">
                  <div className="title mb-2 mb-md-3">
                    Где найти 14-значный код
                  </div>
                  <div className="word-grey lh-sm">
                    Наклейку с кодом для проверки подлинности устройства можно
                    найти на упаковке продукта. Сотрите покрытие и получите
                    14-значный код для проверки подлинности устройства.
                  </div>
                  <div className="flex flex-center mt-3">
                    <picture className="scan-card">
                      <source
                        media="(max-width: 767.9px)"
                        sizes="(max-width: 767.9px) 90vw, 767.9px"
                        srcSet="https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=48 48w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=96 96w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=160 160w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=240 240w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=420 420w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397 526w
      "
                      />

                      <img
                        sizes="(min-width: 768px) 40vw, 2048px"
                        srcSet="https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=480 480w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397&amp;width=520 520w,https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c.png?v=1714035397 526w
      "
                        src="https://cis.wakavaping.com/cdn/shop/files/BC0CCBC9-66B2-410E-9693-D9D20FA59472_fc335571-d9fe-4e31-a9eb-2da0f6a1813c_96x.png?v=1714035397"
                        height="197"
                        width="526"
                        className="object-fit-cover w-100"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            {/*------------------------------------------------- success-dialog start  ---------------------------------------- */}
            <div
              className={`modal fade success-dialog ${
                error == 429 || error == 200 ? 'show' : ''
              }`}
              id="successDialog"
              tabIndex={-1}
              aria-labelledby="successDialog"
              style={{
                display: error == 429 || error == 200 ? 'block' : 'none',
                backgroundColor:
                  error == 429 || error == 200 ? '#00000047' : '',
              }}
            >
              <div className="modal-dialog  modal-dialog-centered ">
                <div className="modal-content">
                  <div className="modal-header flex flex_h-end">
                    <div
                      itemType="button"
                      className="word-grey"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        dispatch(clearError());
                        dispatch(clearBarcode());
                        setCode('');
                      }}
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m19 5-14 14"></path>
                          <path d="m5 5 14 14"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="flex flex-center mb-2 mb-md-3 verify-icon">
                      {/* --------------------------------  SUCCESS ICON ----------------------------------------- */}

                      <span
                        className={`as-verify-icon-success ${
                          error == 200 ? '' : 'd-none'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="108"
                          height="108"
                          viewBox="0 0 108 108"
                          fill="none"
                        >
                          <circle
                            cx="54"
                            cy="54"
                            r="54"
                            fill="#3B30EE"
                            fillOpacity="0.5"
                          ></circle>
                          <circle
                            cx="54"
                            cy="54"
                            r="47"
                            fill="#3B30EE"
                          ></circle>
                          <path
                            d="M54.0001 76.2096C66.2659 76.2096 76.2093 66.2662 76.2093 54.0004C76.2093 41.7345 66.2659 31.7911 54.0001 31.7911C41.7342 31.7911 31.7908 41.7345 31.7908 54.0004C31.7908 66.2662 41.7342 76.2096 54.0001 76.2096Z"
                            fill="white"
                          ></path>
                          <path
                            d="M63 49L52.8462 59L47 52.75"
                            stroke="#3B30EE"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      {/* ------------------------------------ RISK ICON ------------------------------ */}
                      <span
                        className={`as-verify-icon-high-risk ${
                          error == 429 ? '' : 'd-none'
                        }`}
                      >
                        <svg
                          width="148"
                          height="148"
                          viewBox="0 0 148 148"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="74"
                            cy="74"
                            r="74"
                            fill="#E23E2B"
                          ></circle>
                          <circle
                            cx="74"
                            cy="74"
                            r="67"
                            fill="#B73022"
                          ></circle>
                          <path
                            d="M74.0001 104.435C90.8089 104.435 104.435 90.8091 104.435 74.0004C104.435 57.1916 90.8089 43.5654 74.0001 43.5654C57.1914 43.5654 43.5652 57.1916 43.5652 74.0004C43.5652 90.8091 57.1914 104.435 74.0001 104.435Z"
                            fill="white"
                          ></path>
                          <path
                            d="M74.0002 85.667H74.0289"
                            stroke="#B73022"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M74.0002 58.7822L74.0002 75.5215"
                            stroke="#B73022"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div
                      className="font-20 text-center mb-3 mb-md-4 fw-bold as-authentic-text"
                      data-authentic="Устройство подлинное"
                      data-high-risk="Этот QR-код был отсканирован много раз. Существует риск, что этот продукт подделка."
                    >
                      {error !== 429
                        ? 'Устройство подлинное'
                        : 'Этот QR-код был отсканирован много раз. Существует риск, что этот продукт подделка.'}
                    </div>

                    <div className="mb-1">
                      <div className="row flex flex_h-between mb-2 mb-md-3">
                        <div className="col-6 flex-column">
                          <span className="word-grey mb-2">
                            Название продукта
                          </span>
                          <span className="text-primary fw-bold product-name">
                            {barcode?.productName}
                            {/* WAKA-soPro-PA10000-PA10000-1 Device-Blue Razz
                            Grape-CIS */}
                          </span>
                        </div>
                        <div className="col-6 flex-column">
                          <span className="word-grey mb-2">
                            Линейка продукта
                          </span>
                          <span className="text-primary fw-bold product-type">
                            {barcode?.productLine}
                            {/* Overseas WAKA-soPro PA10000 */}
                          </span>
                        </div>
                      </div>

                      <div className="row flex flex_h-between mb-2 mb-md-3">
                        <div className="col-6 flex-column">
                          <span className="word-grey mb-2">
                            Серийный номер продукта
                          </span>
                          <span className="text-primary fw-bold serial-number">
                            {barcode?.serialNumber}
                            {/* 6942108429656 */}
                          </span>
                        </div>
                        <div className="col-6 flex-column">
                          <span className="word-grey mb-2">Код продукта</span>
                          <span className="text-primary fw-bold product-code">
                            {barcode?.productCode}
                            {/* 102450000398 */}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      style={{ width: '100%' }}
                      className="btn btn-primary mb-2 mb-md-3 verify-again"
                      onClick={() => {
                        dispatch(clearError());
                        dispatch(clearBarcode());
                        setCode('');
                      }}
                    >
                      Проверить еще раз
                    </button>

                    <div className="my-2 position-relative">
                      <picture>
                        <img
                          sizes="(min-width: 768px) 40vw, 3840px"
                          srcSet="https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=480 480w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=520 520w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=720 720w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924 751w
      "
                          src="https://cis.wakavaping.com/cdn/shop/files/Global_96x.jpg?v=1705511924"
                          loading="lazy"
                          height="401"
                          width="751"
                          className="h-100 object-fit-cover w-100"
                          alt=""
                        />
                      </picture>

                      <a
                        className="stretched-link"
                        rel="noopener"
                        href="https://bit.ly/40eraqM"
                      ></a>
                    </div>

                    <div className="text-center text-muted mb-2 mb-md-3">
                      Оцените этот вкус
                    </div>

                    <div className="mb-2 mb-md-3 rate-zone flavour-score">
                      <div className="text-center mb-2 fw-bold">
                        Какова вероятность что ты порекомендуешь этот вкус своим
                        знакомым?
                      </div>
                      <div className="flex flex_v-center flex_h-center position">
                        <div
                          style={{ width: '80px' }}
                          className="d-none d-md-block"
                        ></div>
                        <div className="flex flex_v-center star-wrapper  me-2 me-md-3">
                          <div className="star position-relative">
                            <span className="left star-frist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="right star-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="star position-relative">
                            <span className="left star-frist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="right star-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="star position-relative">
                            <span className="left star-frist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="right star-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="star position-relative">
                            <span className="left star-frist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="right star-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="star position-relative">
                            <span className="left star-frist">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="right star-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                              >
                                <g clipPath="url(#clip0_5688_1308)">
                                  <path
                                    d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z"
                                    fill="#FE7F00"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5688_1308">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span className="text-warning fw-bold font-14">
                          <span className="score">0</span>
                          баллов
                        </span>
                      </div>
                    </div>
                    <div className="mb-2 mb-md-3 rate-zone radio-group radio-group-1">
                      <div className="text-center mb-2 fw-bold">
                        Оцените уровень сладости этого вкуса
                      </div>
                      <div className="flex flex_v-center flex_h-around position">
                        <div className="flex flex-column flex-center me-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox1"
                            name="sweeterScore"
                            value="слишком слабый"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            слишком слабый
                          </label>
                        </div>
                        <div className="flex flex-column flex-center me-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox2"
                            name="sweeterScore"
                            value="немного слабоват"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            немного слабоват
                          </label>
                        </div>
                        <div className="flex flex-column flex-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox3"
                            name="sweeterScore"
                            value="то что нужно"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox3"
                          >
                            то что нужно
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-none mb-2 mb-md-3 rate-zone radio-group radio-group-2">
                      <div className="text-center mb-2 fw-bold">
                        Оцените уровень холода в этом вкусе
                      </div>
                      <div className="flex flex_v-center flex_h-around position">
                        <div className="flex flex-column flex-center me-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox4"
                            name="flavourScore"
                            value="слишком слабый"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox4"
                          >
                            слишком слабый
                          </label>
                        </div>
                        <div className="flex flex-column flex-center me-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox5"
                            name="flavourScore"
                            value="немного слабоват"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox5"
                          >
                            немного слабоват
                          </label>
                        </div>
                        <div className="flex flex-column flex-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox6"
                            name="flavourScore"
                            value="то что нужно"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox6"
                          >
                            то что нужно
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="feedback text-warning text-center font-14 d-none">
                      Your feedback has been received. Thank you very much!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*------------------------------------------------- success-dialog end  ---------------------------------------- */}
            <div
              className={`modal fade error-dialog ${
                error !== null && error !== 200 && error !== 429 ? 'show' : ''
              }`}
              id="errorDialog"
              tabIndex={-1}
              aria-labelledby="errorDialog"
              aria-hidden="true"
              style={{
                display:
                  error !== null && error !== 200 && error !== 429
                    ? 'block'
                    : 'none',
                backgroundColor:
                  error !== null && error !== 200 && error !== 429
                    ? '#00000047'
                    : '',
              }}
            >
              <div className="modal-dialog  modal-dialog-centered ">
                <div className="modal-content">
                  <div className="modal-header flex flex_h-end">
                    <div
                      className="word-grey"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        dispatch(clearError());
                        setCode('');
                      }}
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="m19 5-14 14"></path>
                          <path d="m5 5 14 14"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="flex flex-center mb-2 mb-md-3 verify-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="108"
                        height="108"
                        viewBox="0 0 108 108"
                        fill="none"
                      >
                        <circle
                          cx="54"
                          cy="54"
                          r="54"
                          fill="#EA0029"
                          fillOpacity="0.5"
                        ></circle>
                        <circle cx="54" cy="54" r="47" fill="#EA0029"></circle>
                        <path
                          d="M54.0001 76.2096C66.2659 76.2096 76.2093 66.2662 76.2093 54.0003C76.2093 41.7345 66.2659 31.791 54.0001 31.791C41.7342 31.791 31.7908 41.7345 31.7908 54.0003C31.7908 66.2662 41.7342 76.2096 54.0001 76.2096Z"
                          fill="white"
                        ></path>
                        <path
                          d="M60 48L48 60"
                          stroke="#EA0029"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M48 48L60 60"
                          stroke="#EA0029"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>

                    <div className=" font-20 text-center mb-3 mb-md-4 fw-bold">
                      ПРЕДУПРЕЖДЕНИЕ!!! ЭТО ПОДДЕЛКА!
                    </div>

                    <div className="error-content text-center word-grey mb-2 mb-md-3 lh-sm">
                      Этот продукт может быть поддельным. Пожалуйста, сообщите
                      об этом в нашу службу поддержки клиентов, нажав «Сообщить
                      об этом продукте» ниже.
                    </div>

                    <button
                      style={{ width: '100%' }}
                      className="text-light btn btn-warning btn-chat mb-2 mb-md-3"
                      onClick={() => {
                        router.push('/');
                      }}
                    >
                      Сообщить об этом продукте
                    </button>

                    <button
                      style={{ width: '100%' }}
                      className="btn btn-primary verify-again"
                      onClick={() => {
                        dispatch(clearError());
                        setCode('');
                      }}
                    >
                      Проверить еще раз
                    </button>

                    <div className="my-2 position-relative">
                      <picture>
                        <img
                          sizes="(min-width: 768px) 40vw, 3840px"
                          srcSet="https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=320 320w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=480 480w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=520 520w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=720 720w,https://cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924 751w
      "
                          src="https://cis.wakavaping.com/cdn/shop/files/Global_96x.jpg?v=1705511924"
                          loading="lazy"
                          height="401"
                          width="751"
                          className="h-100 object-fit-cover w-100"
                          alt=""
                        />
                      </picture>

                      <a
                        className="stretched-link"
                        rel="noopener"
                        href="https://bit.ly/40eraqM"
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

export default ValidateComponent;
