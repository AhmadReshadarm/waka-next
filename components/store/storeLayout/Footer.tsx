const Footer = (): JSX.Element => {
  return (
    <>
      <section
        id="shopify-section-footer"
        className="shopify-section site-footer-section"
      >
        <div className="site-footer bg-blue">
          <div className="container">
            <div className="pt-3 pt-lg-9 d-lg-flex justify-content-between flex-lg-row-reverse">
              <div className="mt-lg-0 ms-lg-8 mb-4 mb-sm-3 mb-lg-0 subscribe-bottom">
                <div className="subscribe-width"></div>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 align-content-start gy-lg-4 gx-lg-3 gy-xl-5 gx-xl-4">
                  <div className="col">
                    <div
                      className="h5 fw-bolder font-xs-20 mb-0 d-lg-none d-block d-flex flex-row justify-content-between align-items-center footer-collapse-trigger"
                      data-bs-toggle="collapse"
                      data-bs-target="#card-contained-collapse1"
                      aria-expanded="false"
                      aria-controls="card-contained-collapse1"
                    >
                      <span>НОВИНКИ</span>
                    </div>
                    <div className="h6 fw-bolder d-lg-block d-none mb-0">
                      НОВИНКИ
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <hr className="hr-mob " />
                  </div>

                  <div className="col">
                    <div
                      className="h5 fw-bolder font-xs-20 mb-0 d-lg-none d-block d-flex flex-row justify-content-between align-items-center footer-collapse-trigger"
                      data-bs-toggle="collapse"
                      data-bs-target="#card-contained-collapse2"
                      aria-expanded="false"
                      aria-controls="card-contained-collapse2"
                    >
                      <span>КОМПАНИЯ</span>

                      <span className="icon-right">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m8 12-5.19615-6h10.39235z"
                            fill="currentColor"
                            opacity=".85"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="h6 fw-bolder d-lg-block d-none mb-0">
                      КОМПАНИЯ
                    </div>

                    <div
                      className="d-lg-block collapse small"
                      id="card-contained-collapse2"
                    >
                      <ul className="list-unstyled pt-footer-item mb-0">
                        <div className="h6 ps-2 ps-sm-3 ps-lg-0 my-footer-item">
                          <a
                            className="text-decoration-none link-footer font-sm-14"
                            href="/pages/about-waka"
                          >
                            О WAKA
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <hr className="hr-mob " />
                  </div>

                  <div className="col">
                    <div
                      className="h5 fw-bolder font-xs-20 mb-0 d-lg-none d-block d-flex flex-row justify-content-between align-items-center footer-collapse-trigger"
                      data-bs-toggle="collapse"
                      data-bs-target="#card-contained-collapse3"
                      aria-expanded="false"
                      aria-controls="card-contained-collapse3"
                    >
                      <span>СТАТЬ ПАРТНЕРОМ</span>

                      <span className="icon-right">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m8 12-5.19615-6h10.39235z"
                            fill="currentColor"
                            opacity=".85"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="h6 fw-bolder d-lg-block d-none mb-0">
                      СТАТЬ ПАРТНЕРОМ
                    </div>

                    <div
                      className="d-lg-block collapse small"
                      id="card-contained-collapse3"
                    >
                      <ul className="list-unstyled pt-footer-item mb-0">
                        <div className="h6 ps-2 ps-sm-3 ps-lg-0 my-footer-item">
                          <a
                            className="text-decoration-none link-footer font-sm-14"
                            href="/pages/partnership-opportunity"
                          >
                            Отправить заявку
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <hr className="hr-mob " />
                  </div>

                  <div className="col">
                    <div
                      className="h5 fw-bolder font-xs-20 mb-0 d-lg-none d-block d-flex flex-row justify-content-between align-items-center footer-collapse-trigger"
                      data-bs-toggle="collapse"
                      data-bs-target="#card-contained-collapse4"
                      aria-expanded="false"
                      aria-controls="card-contained-collapse4"
                    >
                      <span>ПОДДЕРЖКА</span>

                      <span className="icon-right">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m8 12-5.19615-6h10.39235z"
                            fill="currentColor"
                            opacity=".85"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="h6 fw-bolder d-lg-block d-none mb-0">
                      ПОДДЕРЖКА
                    </div>

                    <div
                      className="d-lg-block collapse small"
                      id="card-contained-collapse4"
                    >
                      <ul className="list-unstyled pt-footer-item mb-0">
                        <div className="h6 ps-2 ps-sm-3 ps-lg-0 my-footer-item">
                          <a
                            className="text-decoration-none link-footer font-sm-14"
                            href="/blogs/instruction"
                          >
                            Инструкции
                          </a>
                        </div>

                        <div className="h6 ps-2 ps-sm-3 ps-lg-0 my-footer-item">
                          <a
                            className="text-decoration-none link-footer font-sm-14"
                            href="/pages/verify"
                          >
                            Проверка подлинности устройства
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <hr className="hr-mob mb-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-4 pt-3 pt-lg-9">
              <div className="media-content">
                <div className="logo position-relative">
                  <img
                    width="284"
                    height="95"
                    srcSet="//cis.wakavaping.com/cdn/shop/files/351D0135-E331-4962-9D6D-F8A7F9ECB312_140x.png?v=1705511117 1x, //cis.wakavaping.com/cdn/shop/files/351D0135-E331-4962-9D6D-F8A7F9ECB312_140x@2x.png?v=1705511117 2x"
                    src="//cis.wakavaping.com/cdn/shop/files/351D0135-E331-4962-9D6D-F8A7F9ECB312_140x.png?v=1705511117"
                    loading="lazy"
                    alt="WAKA-CIS"
                    style={{ width: '140px', height: 'auto' }}
                  />
                </div>
                <div className="copyright">
                  ©2021 Innofly HK Limited. Все права защищены.
                </div>

                <div className="contact">support@wakavaping.com</div>
              </div>
            </div>

            <hr className="my-0" />

            <div className="pt-3 pb-3 pb-lg-6 info">
              <div className="privacy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
