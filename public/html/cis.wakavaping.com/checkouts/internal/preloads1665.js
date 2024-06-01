
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.4ddeb9733b4572c90aa1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.baseline.en.0255b911f71753dc79f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3240.baseline.en.862539b5e1e6c5c4b5cc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9180.baseline.en.68ba5b899d4d0551c686.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.3e93e0f043d2370a1371.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/254.baseline.en.f422436a8b445f1e33d9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.baseline.en.326123c4a1de8100acf8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.baseline.en.6d7f407b553c8b3e4b32.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.c75a9d85fa4c461740f5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9119.baseline.en.dddf6bb9e83ac7deec17.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  