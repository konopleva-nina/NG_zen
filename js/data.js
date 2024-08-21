export const data = {
  primaryInfo: {
    langs: [
      {
        key: 'en',
        name: 'EN',
      },
      {
        key: 'ru',
        name: 'RU',
      },
    ],
    navigation: [
      {
        key: 'download',
        name: 'Download',
      },
      {
        key: 'warranty',
        name: 'Warranty',
      },
      {
        key: 'care',
        name: 'Care',
      },
      {
        key: 'cashback',
        name: 'Cashback',
      },
      {
        key: 'clients',
        name: 'Clients',
      },
    ],
  },
  download: {
    title: {
      content: 'Peaceful shopping mindful money',
      priority: 1,
    },
    texts: [
      'See how we can help with making your shopping experience and money management more ZEN.',
    ],
    links: [
      {
        name: 'apple',
        url: 'https://apple.com',
      },
      {
        name: 'google',
        url: 'https://google.com',
      },
    ],
    image: {
      source: './assets/imag/bag_and_device.jpg',
      description: 'Bag and device',
    },
  },
  warranty: {
    title: {
      content: '1-year warranty boost',
      priority: 2,
    },
    texts: ['ZEN cards have a very neat...', 'When you buy any electronics...'],
    image: {
      source: './assets/imag/basket.jpg',
      description: 'Basket with goods',
    },
  },
  care: {
    title: {
      content: 'care',
      priority: 2,
    },
    texts: [
      'Shopping online is usually',
      'Until something you buy',
      'But, here comes ZEN Care:',
    ],
    image: {
      source: './assets/imag/card.jpg',
      description: 'Card',
    },
  },
  cashback: {
    title: {
      content: 'and cashback!',
      priority: 2,
    },
    texts: [
      'It saves a little bit of money',
      'We gave it a thought and made',
      'Up to 14% of what you spend',
    ],
    buttonText: 'Order a consultation',
  },
  clients: {
    brands: [
      {
        name: 'Rosegal',
        logo: {
          lightSource: './assets/brands/light/brand1.svg',
          darkSource: './assets/brands/dark/brand1.svg',
        },
      },
      {
        name: 'Gearbest',
        logo: {
          lightSource: './assets/brands/light/brand2.svg',
          darkSource: './assets/brands/dark/brand2.svg',
        },
      },
      {
        name: 'Allegro',
        logo: {
          lightSource: './assets/brands/light/brand3.svg',
          darkSource: './assets/brands/dark/brand3.svg',
        },
      },
      {
        name: 'Aliexpress',
        logo: {
          lightSource: './assets/brands/light/brand4.svg',
          darkSource: './assets/brands/dark/brand4.svg',
        },
      },
      {
        name: 'Booking',
        logo: {
          lightSource: './assets/brands/light/brand5.svg',
          darkSource: './assets/brands/dark/brand5.svg',
        },
      },
      {
        name: 'Mediamarkt',
        logo: {
          lightSource: './assets/brands/light/brand6.svg',
          darkSource: './assets/brands/dark/brand6.svg',
        },
      },
      {
        name: 'Rtveuroagd',
        logo: {
          lightSource: './assets/brands/light/brand7.svg',
          darkSource: './assets/brands/dark/brand7.svg',
        },
      },
      {
        name: 'Groupon',
        logo: {
          lightSource: './assets/brands/light/brand8.svg',
          darkSource: './assets/brands/dark/brand8.svg',
        },
      },
    ],
  },
  secondaryInfo: {
    columns: [
      {
        name: 'Lern',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Help center',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Join ZEN team',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Privacy Policy',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Cookies',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Terms of use',
            },
          },
        ],
      },
      {
        name: 'Discover',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'For developers',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Apple Pay',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Google Pay',
            },
          },
        ],
      },
      {
        name: 'Offer',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Business',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Personal',
            },
          },
        ],
      },
      {
        name: 'Language',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'English',
            },
          },
          {
            url: 'https://example.com',
            content: {
              type: 'text',
              data: 'Polish',
            },
          },
        ],
      },
      {
        name: 'Follow us',
        links: [
          {
            url: 'https://example.com',
            content: {
              type: 'image',
              data: './assets/icons/link.svg',
            },
          },
        ],
      },
      {
        name: 'Contact',
        links: [
          {
            url: 'mailto:hello@zen.com',
            content: {
              type: 'text',
              data: 'hello@zen.com',
            },
          },
        ],
      },
    ],
    texts: [
      'ZEN is a licensed financial...',
      'Registration number of the company...',
      'License of electronic money...',
      'Share capital...',
      'Company address: Mėsinių...',
      'Sales Office: ul. Emilii...',
    ],
    developer: {
      url: 'https://example.com',
      content: {
        type: 'image',
        data: './assets/icons/developer.svg',
      },
    },
  },
  modal: {
    title: 'Order a consultation',
    input: [
      {
        type: 'text',
        placeholder: 'Name',
      },
      {
        type: 'tel',
        placeholder: 'Tel.',
      },
      {
        type: 'email',
        placeholder: 'E-mail',
      },
    ],

    select: [
      {
        value: '',
      },
      {
        value: 'telegram',
        optionText: 'Telegram',
      },
      {
        value: 'whatsapp',
        optionText: 'WhatsApp',
      },
    ],
    selectText: 'Connection',
    checkbox: {
      href: 'https://example.com/policy',
      text: 'Privacy policy',
    },
    btnSubmitText: 'Submit',
  },
};