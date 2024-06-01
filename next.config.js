module.exports = {
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  images: {
    domains: ['avatars.dicebear.com'],
  },
  async rewrites() {
    return [
      { source: '/', destination: '/html/cis.wakavaping.com/index.html' },
      {
        source: '/index.html',
        destination: '/html/cis.wakavaping.com/index.html',
      },
      {
        source: '/collections/10-day-use.html',
        destination: '/html/cis.wakavaping.com/collections/10-day-use.html',
      },
      {
        source: '/collections/7-day-use.html',
        destination: '/html/cis.wakavaping.com/collections/7-day-use.html',
      },
      {
        source:
          '/collections/10-%D0%B4%D0%BD%D0%B5%D0%B9-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F',
        destination: '/html/cis.wakavaping.com/collections/10-day-use.html',
      },
      {
        source:
          '/collections/7-%D0%B4%D0%BD%D0%B5%D0%B9-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F',
        destination: '/html/cis.wakavaping.com/collections/7-day-use.html',
      },
      {
        source:
          '/collections/5-7-%d0%b4%d0%bd%d0%b5%d0%b9-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f.html',
        destination:
          '/html/cis.wakavaping.com/collections/5-7-%d0%b4%d0%bd%d0%b5%d0%b9-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f.html',
      },
      {
        source:
          '/collections/5-7-%d0%b4%d0%bd%d0%b5%d0%b9-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f',
        destination:
          '/html/cis.wakavaping.com/collections/5-7-%d0%b4%d0%bd%d0%b5%d0%b9-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f.html',
      },
      {
        source: '/products/sopro-pa10000.html',
        destination: '/html/cis.wakavaping.com/products/sopro-pa10000.html',
      },
      {
        source: '/products/sopro-pa10000',
        destination: '/html/cis.wakavaping.com/products/sopro-pa10000.html',
      },
      {
        source: '/products/waka-sopro-dm8000i.html',
        destination:
          '/html/cis.wakavaping.com/products/waka-sopro-dm8000i.html',
      },
      {
        source: '/products/waka-sopro-dm8000i',
        destination:
          '/html/cis.wakavaping.com/products/waka-sopro-dm8000i.html',
      },
      {
        source: '/pages/partnership-opportunity.html',
        destination:
          '/html/cis.wakavaping.com/pages/partnership-opportunity.html',
      },
      {
        source: '/pages/partnership-opportunity',
        destination:
          '/html/cis.wakavaping.com/pages/partnership-opportunity.html',
      },
      {
        source: '/products/sopro-dm8000.html',
        destination: '/html/cis.wakavaping.com/products/sopro-dm8000.html',
      },
      {
        source: '/products/sopro-dm8000',
        destination: '/html/cis.wakavaping.com/products/sopro-dm8000.html',
      },
      {
        source: '/products/waka-sopro-pa7000.html',
        destination: '/html/cis.wakavaping.com/products/waka-sopro-pa7000.html',
      },
      {
        source: '/products/waka-sopro-pa7000',
        destination: '/html/cis.wakavaping.com/products/waka-sopro-pa7000.html',
      },
      {
        source: '/products/waka-smash.html',
        destination: '/html/cis.wakavaping.com/products/waka-smash.html',
      },
      {
        source: '/products/waka-smash',
        destination: '/html/cis.wakavaping.com/products/waka-smash.html',
      },
      {
        source: '/products/sofit-fa4000.html',
        destination: '/html/cis.wakavaping.com/products/sofit-fa4000.html',
      },
      {
        source: '/products/sofit-fa4000',
        destination: '/html/cis.wakavaping.com/products/sofit-fa4000.html',
      },
      {
        source: '/products/solo2.html',
        destination: '/html/cis.wakavaping.com/products/solo2.html',
      },
      {
        source: '/products/solo2',
        destination: '/html/cis.wakavaping.com/products/solo2.html',
      },
      {
        source: '/products/waka-sofit-fa1000.html',
        destination: '/html/cis.wakavaping.com/products/waka-sofit-fa1000.html',
      },
      {
        source: '/products/waka-sofit-fa1000',
        destination: '/html/cis.wakavaping.com/products/waka-sofit-fa1000.html',
      },
      {
        source: '/pages/dualmesh.html',
        destination: '/html/cis.wakavaping.com/pages/dualmesh.html',
      },
      {
        source: '/pages/dualmesh',
        destination: '/html/cis.wakavaping.com/pages/dualmesh.html',
      },
      {
        source: '/pages/about-waka.html',
        destination: '/html/cis.wakavaping.com/pages/about-waka.html',
      },
      {
        source: '/pages/contact.html',
        destination: '/html/cis.wakavaping.com/pages/contact.html',
      },
      {
        source: '/pages/contact',
        destination: '/html/cis.wakavaping.com/pages/contact.html',
      },
      {
        source: '/blogs/instruction.html',
        destination: '/html/cis.wakavaping.com/blogs/instruction.html',
      },
      {
        source: '/blogs/instruction',
        destination: '/html/cis.wakavaping.com/blogs/instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sofit-fa4000-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sofit-fa4000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sofit-fa4000-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sofit-fa4000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-pa7000-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-pa7000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-pa7000-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-pa7000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-pa10000-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-pa10000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-pa10000-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-pa10000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sofit-fa1000-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sofit-fa1000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sofit-fa1000-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sofit-fa1000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-dm8000-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-dm8000-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-solo-2-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-solo-2-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-solo-2-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-solo-2-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-dm8000i-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-dm8000i-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-sopro-dm8000i-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-sopro-dm8000i-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-smash-instruction.html',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-smash-instruction.html',
      },
      {
        source: '/blogs/instruction/waka-smash-instruction',
        destination:
          '/html/cis.wakavaping.com/blogs/instruction/waka-smash-instruction.html',
      },
      {
        source: '/pages/verify.html',
        destination: '/html/cis.wakavaping.com/pages/verify.html',
      },
      {
        source: '/pages/verify.html',
        destination: '/html/cis.wakavaping.com/pages/verify.html',
      },
    ];
  },
};
