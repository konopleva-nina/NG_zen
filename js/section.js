const header = {
  btnLogoSvg: 'some svg',
  selectLang: [
    {
      value: 'en',
      textLang: 'EN',
    },
    {
      value: 'ru',
      textLang: 'RU',
    },
  ],
  btnTheme: [{ btnLight: 'some svg' }, { btnDark: 'some svg' }],
  menu: [
    {
      href: '#download',
      menuItemText: 'Download',
    },
    {
      href: '#warranty',
      menuItemText: 'Warranty',
    },
    {
      href: '#care',
      menuItemText: 'Care',
    },
    {
      href: '#cashback',
      menuItemText: 'Cashback',
    },
    {
      href: '#clients',
      menuItemText: 'Clients',
    },
  ],
}

const download = {
  title: 'Peaceful shopping mindful money',
  copy: ['See how we can help with making...'],
  links: [
    {
      href: 'https://apple.com',
      image: {
        src: './assets/icons/link-apple.svg',
        description: 'apple icon',
      },
    },
    {
      href: 'https://google.com',
      image: {
        src: './assets/icons/link-google.svg',
        description: 'google icon',
      },
    },
  ],
}

const warranty = {
  title: '1-year warranty boost',
  copy: ['ZEN cards have a very neat...', 'When you buy any electronics...'],
  image: {
    src: './assets/imag/basket.jpg',
    description: 'Basket with goods',
  },
}

const care = {
  title: 'care',
  copy: [
    'Shopping online is usually',
    'Until something you buy',
    'But, here comes ZEN Care:',
  ],
  image: {
    src: './assets/imag/card.jpg',
    description: 'Card',
  },
}

const cashback = {
  title: 'and cashback!',
  copy: [
    'It saves a little bit of money',
    'We gave it a thought and made',
    'Up to 14% of what you spend',
  ],
  btnText: 'Order a consultation',
}

const clients = {
  light: [
    { src: './assets/brands/light/brand1.svg', description: 'Brand 1' },
    { src: './assets/brands/light/brand2.svg', description: 'Brand 2' },
    { src: './assets/brands/light/brand3.svg', description: 'Brand 3' },
    { src: './assets/brands/light/brand4.svg', description: 'Brand 4' },
    { src: './assets/brands/light/brand5.svg', description: 'Brand 5' },
    { src: './assets/brands/light/brand6.svg', description: 'Brand 6' },
    { src: './assets/brands/light/brand7.svg', description: 'Brand 7' },
    { src: './assets/brands/light/brand8.svg', description: 'Brand 8' },
  ],
  dark: [
    { src: './assets/brands/dark/brand1.svg', description: 'Brand 1' },
    { src: './assets/brands/dark/brand2.svg', description: 'Brand 2' },
    { src: './assets/brands/dark/brand3.svg', description: 'Brand 3' },
    { src: './assets/brands/dark/brand4.svg', description: 'Brand 4' },
    { src: './assets/brands/dark/brand5.svg', description: 'Brand 5' },
    { src: './assets/brands/dark/brand6.svg', description: 'Brand 6' },
    { src: './assets/brands/dark/brand7.svg', description: 'Brand 7' },
    { src: './assets/brands/dark/brand8.svg', description: 'Brand 8' },
  ],
}

const footer = {
  footerColumns: [
    {
      columnTitle: 'Lern',
      columnList: [
        {
          href: 'https://example.com',
          itemText: 'Help center',
        },
        {
          href: 'https://example.com',
          itemText: 'Join ZEN team',
        },
        {
          href: 'https://example.com',
          itemText: 'Privacy Policy',
        },
        {
          href: 'https://example.com',
          itemText: 'Cookies',
        },
        {
          href: 'https://example.com',
          itemText: 'Terms of use',
        },
      ],
    },
    {
      columnTitle: 'Discover',
      columnList: [
        {
          href: 'https://example.com',
          itemText: 'For developers',
        },
        {
          href: 'https://example.com',
          itemText: 'Apple Pay',
        },
        {
          href: 'https://example.com',
          itemText: 'Google Pay',
        },
      ],
    },
    {
      columnTitle: 'Offer',
      columnList: [
        {
          href: 'https://example.com',
          itemText: 'Business',
        },
        {
          href: 'https://example.com',
          itemText: 'Personal',
        },
      ],
    },
    {
      columnTitle: 'Language',
      columnList: [
        {
          href: 'https://example.com',
          itemText: 'English',
        },
        {
          href: 'https://example.com',
          itemText: 'Polish',
        },
      ],
    },
    {
      columnTitle: 'Follow us',
      columnList: [
        {
          href: 'https://example.com',
          image: {
            src: './assets/icons/link.svg',
            description: 'Linkedin',
          },
        },
      ],
    },
    {
      columnTitle: 'Contact',
      columnList: [
        {
          href: 'https://example.com',
          itemText: 'hello@zen.com',
        },
      ],
    },
  ],
  footerLogo: {
    href: 'https://example.com',
    image: {
      src: './assets/icons/logo2.svg',
      description: 'logo',
    },
  },
  copy: [
    'ZEN is a licensed financial...',
    'Registration number of the company...',
    'License of electronic money...',
    'Share capital...',
    'Company address: Mėsinių...',
    'Sales Office: ul. Emilii...',
  ],
  footerDev: {
    href: 'https://example.com',
    image: {
      src: './assets/icons/developer.svg',
      description: 'developer',
    },
  },
}

const modal = {
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
}

const generateTitile = (text) => {
  return `<h1>${text}</h1>`
}

const generateListItem = (item) => {
  return `<li>${item}</li>`
}

const generateSection = (section) => {
  return `
    <section>
      ${generateTitile(section.title)}
      <ul>
        ${generateListItem(section.copy[0])}
        ${generateListItem(section.copy[1])}
      </ul>
    </section>`
}

const $app = document.querySelector('#app')
$app.innerHTML = generateSection(warranty)
