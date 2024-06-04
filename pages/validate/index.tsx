import StoreLayout from 'components/store/storeLayout/layouts';
import ValidateComponent from 'components/store/validate';

const Validate = () => {
  return <ValidateComponent />;
};

Validate.PageLayout = StoreLayout;

export default Validate;
//  -------------------- ERROR WRONG CODE -----------------------------------
{
  /* <div class="modal fade success-dialog show" id="successDialog" tabindex="-1" aria-labelledby="successDialog" style="display: block; padding-right: 15px;" aria-modal="true" role="dialog">
    <div class="modal-dialog  modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header flex flex_h-end">
          <div type="button" class="word-grey" data-bs-dismiss="modal" aria-label="Close">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 5-14 14"></path><path d="m5 5 14 14"></path></g></svg>
          </div>
        </div>
        <div class="modal-body">
          <div class="flex flex-center mb-2 mb-md-3 verify-icon">
            <span class="as-verify-icon-success d-none"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
  <circle cx="54" cy="54" r="54" fill="#3B30EE" fill-opacity="0.5"></circle>
  <circle cx="54" cy="54" r="47" fill="#3B30EE"></circle>
  <path d="M54.0001 76.2096C66.2659 76.2096 76.2093 66.2662 76.2093 54.0004C76.2093 41.7345 66.2659 31.7911 54.0001 31.7911C41.7342 31.7911 31.7908 41.7345 31.7908 54.0004C31.7908 66.2662 41.7342 76.2096 54.0001 76.2096Z" fill="white"></path>
  <path d="M63 49L52.8462 59L47 52.75" stroke="#3B30EE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span>
            <span class="as-verify-icon-high-risk"><svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="74" cy="74" r="74" fill="#E23E2B"></circle>
<circle cx="74" cy="74" r="67" fill="#B73022"></circle>
<path d="M74.0001 104.435C90.8089 104.435 104.435 90.8091 104.435 74.0004C104.435 57.1916 90.8089 43.5654 74.0001 43.5654C57.1914 43.5654 43.5652 57.1916 43.5652 74.0004C43.5652 90.8091 57.1914 104.435 74.0001 104.435Z" fill="white"></path>
<path d="M74.0002 85.667H74.0289" stroke="#B73022" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M74.0002 58.7822L74.0002 75.5215" stroke="#B73022" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span>
          </div>

          <div class="font-20 text-center mb-3 mb-md-4 fw-bold as-authentic-text" data-authentic="Устройство подлинное" data-high-risk="Этот QR-код был отсканирован много раз. Существует риск, что этот продукт подделка.">Этот QR-код был отсканирован много раз. Существует риск, что этот продукт подделка.</div>

          <div class="mb-1">
            <div class="row flex flex_h-between mb-2 mb-md-3">
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Название продукта</span>
                <span class="text-primary fw-bold product-name">WAKA-soPro PA10000 (PA10000)-1 Device-Blueberry Cranberry Cherry-CIS</span>
              </div>
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Линейка продукта</span>
                <span class="text-primary fw-bold product-type"> Overseas WAKA PA10000</span>
              </div>
            </div>

            <div class="row flex flex_h-between mb-2 mb-md-3">
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Серийный номер продукта</span>
                <span class="text-primary fw-bold serial-number">6942108421339</span>
              </div>
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Код продукта</span>
                <span class="text-primary fw-bold product-code">102450000281</span>
              </div>
            </div>
          </div>

          <button style="width:100%" class="btn btn-primary mb-2 mb-md-3 verify-again">
            Проверить еще раз
          </button>

          
            <div class="my-2 position-relative">
              
<picture>
  
  <img sizes="(min-width: 768px) 40vw, 3840px" srcset="//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=320 320w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=480 480w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=520 520w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=720 720w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924 751w
      " src="//cis.wakavaping.com/cdn/shop/files/Global_96x.jpg?v=1705511924" loading="lazy" height="401" width="751" class="h-100 object-fit-cover w-100" alt="">
</picture>
              
                <a class="stretched-link" rel="noopener" href="https://bit.ly/40eraqM"></a>
              
            </div>
          

          <div class="text-center text-muted mb-2 mb-md-3">
             Оцените этот вкус
          </div>

          <div class="mb-2 mb-md-3 rate-zone flavour-score">
            <div class="text-center mb-2 fw-bold">
              Какова вероятность что ты порекомендуешь этот вкус своим знакомым?
            </div>
            <div class="flex flex_v-center flex_h-center position">
              <div style="width: 80px" class="d-none d-md-block"></div>
              <div class="flex flex_v-center star-wrapper  me-2 me-md-3">
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
              </div>
              <span class="text-warning fw-bold font-14">
                <span class="score">0</span>
                баллов</span>
            </div>
          </div><div class="d-none mb-2 mb-md-3 rate-zone radio-group radio-group-1">
            <div class="text-center mb-2 fw-bold">
              Оцените уровень сладости этого вкуса
            </div>
            <div class="flex flex_v-center flex_h-around position">
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox1" name="sweeterScore" value="слишком слабый">
                <label class="form-check-label" for="inlineCheckbox1">слишком слабый</label>
              </div>
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox2" name="sweeterScore" value="немного слабоват">
                <label class="form-check-label" for="inlineCheckbox2">немного слабоват</label>
              </div>
              <div class="flex flex-column flex-center">
                <input class="form-check-input" type="radio" id="inlineCheckbox3" name="sweeterScore" value="то что нужно">
                <label class="form-check-label" for="inlineCheckbox3">то что нужно</label>
              </div>
            </div>
          </div>

          <div class="d-none mb-2 mb-md-3 rate-zone radio-group radio-group-2">
            <div class="text-center mb-2 fw-bold">
              Оцените уровень холода в этом вкусе
            </div>
            <div class="flex flex_v-center flex_h-around position">
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox4" name="flavourScore" value="слишком слабый">
                <label class="form-check-label" for="inlineCheckbox4">слишком слабый</label>
              </div>
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox5" name="flavourScore" value="немного слабоват">
                <label class="form-check-label" for="inlineCheckbox5">немного слабоват</label>
              </div>
              <div class="flex flex-column flex-center">
                <input class="form-check-input" type="radio" id="inlineCheckbox6" name="flavourScore" value="то что нужно">
                <label class="form-check-label" for="inlineCheckbox6">то что нужно</label>
              </div>
            </div>
          </div>

          <div class="d-none feedback text-warning text-center font-14">
            Your feedback has been received. Thank you very much!
          </div>
        </div>
      </div>
    </div>
  </div>



----------------------------------------------  errorDialog  ----------------------------------------------------------


<div class="modal fade error-dialog" id="errorDialog" tabindex="-1" aria-labelledby="errorDialog" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header flex flex_h-end">
          <div type="button" class="word-grey" data-bs-dismiss="modal" aria-label="Close">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 5-14 14"></path><path d="m5 5 14 14"></path></g></svg>
          </div>
        </div>
        <div class="modal-body">
          <div class="flex flex-center mb-2 mb-md-3 verify-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
  <circle cx="54" cy="54" r="54" fill="#EA0029" fill-opacity="0.5"></circle>
  <circle cx="54" cy="54" r="47" fill="#EA0029"></circle>
  <path d="M54.0001 76.2096C66.2659 76.2096 76.2093 66.2662 76.2093 54.0003C76.2093 41.7345 66.2659 31.791 54.0001 31.791C41.7342 31.791 31.7908 41.7345 31.7908 54.0003C31.7908 66.2662 41.7342 76.2096 54.0001 76.2096Z" fill="white"></path>
  <path d="M60 48L48 60" stroke="#EA0029" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M48 48L60 60" stroke="#EA0029" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>

          </div>

          <div class=" font-20 text-center mb-3 mb-md-4 fw-bold">
            ПРЕДУПРЕЖДЕНИЕ!!! ЭТО ПОДДЕЛКА!
          </div>

          <div class="error-content text-center word-grey mb-2 mb-md-3 lh-sm">
            Этот продукт может быть поддельным. Пожалуйста, сообщите об этом в нашу службу поддержки клиентов, нажав «Сообщить об этом продукте» ниже.
          </div>

          <button style="width:100%" class="text-light btn btn-warning btn-chat mb-2 mb-md-3">
            Сообщить об этом продукте
          </button>

          <button style="width:100%" class="btn btn-primary verify-again">
            Проверить еще раз
          </button>

          
            <div class="my-2 position-relative">
              
<picture>
  
  <img sizes="(min-width: 768px) 40vw, 3840px" srcset="//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=320 320w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=480 480w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=520 520w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=720 720w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924 751w
      " src="//cis.wakavaping.com/cdn/shop/files/Global_96x.jpg?v=1705511924" loading="lazy" height="401" width="751" class="h-100 object-fit-cover w-100" alt="">
</picture>
              
                <a class="stretched-link" rel="noopener" href="https://bit.ly/40eraqM"></a>
              
            </div>
          

        </div>
      </div>
    </div>
  </div>




*/
}

// ---------------------------------- SUCCESS MSG ------------------------------

{
  /* <div class="modal fade success-dialog show" id="successDialog" tabindex="-1" aria-labelledby="successDialog" style="padding-right: 15px; display: block;" aria-modal="true" role="dialog">
    <div class="modal-dialog  modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header flex flex_h-end">
          <div type="button" class="word-grey" data-bs-dismiss="modal" aria-label="Close">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 5-14 14"></path><path d="m5 5 14 14"></path></g></svg>
          </div>
        </div>
        <div class="modal-body">
          <div class="flex flex-center mb-2 mb-md-3 verify-icon">
            <span class="as-verify-icon-success"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
  <circle cx="54" cy="54" r="54" fill="#3B30EE" fill-opacity="0.5"></circle>
  <circle cx="54" cy="54" r="47" fill="#3B30EE"></circle>
  <path d="M54.0001 76.2096C66.2659 76.2096 76.2093 66.2662 76.2093 54.0004C76.2093 41.7345 66.2659 31.7911 54.0001 31.7911C41.7342 31.7911 31.7908 41.7345 31.7908 54.0004C31.7908 66.2662 41.7342 76.2096 54.0001 76.2096Z" fill="white"></path>
  <path d="M63 49L52.8462 59L47 52.75" stroke="#3B30EE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span>
            <span class="d-none as-verify-icon-high-risk"><svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="74" cy="74" r="74" fill="#E23E2B"></circle>
<circle cx="74" cy="74" r="67" fill="#B73022"></circle>
<path d="M74.0001 104.435C90.8089 104.435 104.435 90.8091 104.435 74.0004C104.435 57.1916 90.8089 43.5654 74.0001 43.5654C57.1914 43.5654 43.5652 57.1916 43.5652 74.0004C43.5652 90.8091 57.1914 104.435 74.0001 104.435Z" fill="white"></path>
<path d="M74.0002 85.667H74.0289" stroke="#B73022" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M74.0002 58.7822L74.0002 75.5215" stroke="#B73022" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</span>
          </div>

          <div class="font-20 text-center mb-3 mb-md-4 fw-bold as-authentic-text" data-authentic="Устройство подлинное" data-high-risk="Этот QR-код был отсканирован много раз. Существует риск, что этот продукт подделка.">Устройство подлинное</div>

          <div class="mb-1">
            <div class="row flex flex_h-between mb-2 mb-md-3">
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Название продукта</span>
                <span class="text-primary fw-bold product-name">WAKA-soPro-PA10000-PA10000-1 Device-Blue Razz Grape-CIS</span>
              </div>
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Линейка продукта</span>
                <span class="text-primary fw-bold product-type">Overseas WAKA-soPro PA10000</span>
              </div>
            </div>

            <div class="row flex flex_h-between mb-2 mb-md-3">
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Серийный номер продукта</span>
                <span class="text-primary fw-bold serial-number">6942108429656</span>
              </div>
              <div class="col-6 flex-column">
                <span class="word-grey mb-2">Код продукта</span>
                <span class="text-primary fw-bold product-code">102450000398</span>
              </div>
            </div>
          </div>

          <button style="width:100%" class="btn btn-primary mb-2 mb-md-3 verify-again">
            Проверить еще раз
          </button>

          
            <div class="my-2 position-relative">
              
<picture>
  
  <img sizes="(min-width: 768px) 40vw, 3840px" srcset="//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=320 320w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=480 480w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=520 520w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924&amp;width=720 720w,//cis.wakavaping.com/cdn/shop/files/Global.jpg?v=1705511924 751w
      " src="//cis.wakavaping.com/cdn/shop/files/Global_96x.jpg?v=1705511924" loading="lazy" height="401" width="751" class="h-100 object-fit-cover w-100" alt="">
</picture>
              
                <a class="stretched-link" rel="noopener" href="https://bit.ly/40eraqM"></a>
              
            </div>
          

          <div class="text-center text-muted mb-2 mb-md-3">
             Оцените этот вкус
          </div>

          <div class="mb-2 mb-md-3 rate-zone flavour-score">
            <div class="text-center mb-2 fw-bold">
              Какова вероятность что ты порекомендуешь этот вкус своим знакомым?
            </div>
            <div class="flex flex_v-center flex_h-center position">
              <div style="width: 80px" class="d-none d-md-block"></div>
              <div class="flex flex_v-center star-wrapper  me-2 me-md-3">
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
                <div class="star position-relative">
                  <span class="left star-frist"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                  <span class="right star-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <g clip-path="url(#clip0_5688_1308)">
  <path d="M16.0037 24.3467L6.59971 29.6107L8.69971 19.0401L0.786377 11.7227L11.489 10.4534L16.0037 0.666748L20.5184 10.4534L31.221 11.7227L23.3077 19.0401L25.4077 29.6107L16.0037 24.3467Z" fill="#FE7F00"></path>
  </g>
  <defs>
  <clipPath id="clip0_5688_1308">
  <rect width="32" height="32" fill="white"></rect>
  </clipPath>
  </defs>
</svg>
</span>
                </div>
              </div>
              <span class="text-warning fw-bold font-14">
                <span class="score">0</span>
                баллов</span>
            </div>
          </div><div class="d-none mb-2 mb-md-3 rate-zone radio-group radio-group-1">
            <div class="text-center mb-2 fw-bold">
              Оцените уровень сладости этого вкуса
            </div>
            <div class="flex flex_v-center flex_h-around position">
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox1" name="sweeterScore" value="слишком слабый">
                <label class="form-check-label" for="inlineCheckbox1">слишком слабый</label>
              </div>
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox2" name="sweeterScore" value="немного слабоват">
                <label class="form-check-label" for="inlineCheckbox2">немного слабоват</label>
              </div>
              <div class="flex flex-column flex-center">
                <input class="form-check-input" type="radio" id="inlineCheckbox3" name="sweeterScore" value="то что нужно">
                <label class="form-check-label" for="inlineCheckbox3">то что нужно</label>
              </div>
            </div>
          </div>

          <div class="d-none mb-2 mb-md-3 rate-zone radio-group radio-group-2">
            <div class="text-center mb-2 fw-bold">
              Оцените уровень холода в этом вкусе
            </div>
            <div class="flex flex_v-center flex_h-around position">
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox4" name="flavourScore" value="слишком слабый">
                <label class="form-check-label" for="inlineCheckbox4">слишком слабый</label>
              </div>
              <div class="flex flex-column flex-center me-1">
                <input class="form-check-input" type="radio" id="inlineCheckbox5" name="flavourScore" value="немного слабоват">
                <label class="form-check-label" for="inlineCheckbox5">немного слабоват</label>
              </div>
              <div class="flex flex-column flex-center">
                <input class="form-check-input" type="radio" id="inlineCheckbox6" name="flavourScore" value="то что нужно">
                <label class="form-check-label" for="inlineCheckbox6">то что нужно</label>
              </div>
            </div>
          </div>

          <div class="d-none feedback text-warning text-center font-14">
            Your feedback has been received. Thank you very much!
          </div>
        </div>
      </div>
    </div>
  </div> */
}
