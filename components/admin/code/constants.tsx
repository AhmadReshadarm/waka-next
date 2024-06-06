import { ColumnsType } from 'antd/lib/table';
import { Barcode } from 'swagger/services';

const columns: ColumnsType<Barcode> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: 'Код',
    dataIndex: 'code',
    width: '15%',
  },
  {
    title: 'Наименование товара',
    dataIndex: 'productName',
    width: '20%',
  },
  {
    title: 'Проверено',
    dataIndex: 'checked',
    width: '5%',
  },
  {
    title: 'Прилавок',
    dataIndex: 'counter',
    width: '5%',
  },
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    width: '15%',
  },
  {
    title: 'Дата изменения',
    dataIndex: 'updatedAt',
    width: '15%',
  },
];

const productsNames = [
  {
    productLineName: 'WAKA-soPro PA10000',
    products: [
      {
        name: 'WAKA-soPro-PA10000-Raspberry-Watermelon',
      },
      {
        name: 'WAKA-soPro-PA10000-Mint',
      },
      {
        name: 'WAKA-soPro-PA10000-Watermelon',
      },
      {
        name: 'WAKA-soPro-PA10000-Strawberry-Kiwi',
      },
      {
        name: 'WAKA-soPro-PA10000-Cherry',
      },
      {
        name: 'WAKA-soPro-PA10000-Blueberry-Raspberry',
      },
      {
        name: 'WAKA-soPro-PA10000-Kiwi-Passion Fruit-Guava',
      },
      {
        name: 'WAKA-soPro-PA10000-Grape-Apple',
      },
      {
        name: 'WAKA-soPro-PA10000-Apple-Wave',
      },
    ],
  },
  {
    productLineName: 'WAKA soPro DM8000i',
    products: [
      {
        name: 'WAKA-soPro-DM8000i-Cherry',
      },
      {
        name: 'WAKA-soPro-DM8000i-Blueberry',
      },
      {
        name: 'WAKA-soPro-DM8000i-Watermelon',
      },
      {
        name: 'WAKA-soPro-DM8000i-Watermelon-Cherry',
      },
      {
        name: 'WAKA-soPro-DM8000i-Berry-Hookah',
      },
      {
        name: 'WAKA-soPro-DM8000i-Peach-Strawberry',
      },
      {
        name: 'WAKA-soPro-DM8000i-Strawberry',
      },
      {
        name: 'WAKA-soPro-DM8000i-Blueberry-Raspberry-Pomegranate',
      },
      {
        name: 'WAKA-soPro-DM8000i-Duchess',
      },
    ],
  },
  {
    productLineName: 'soPro DM8000',
    products: [
      {
        name: 'soPro-DM8000-Watermelon',
      },
      {
        name: 'soPro-DM8000-Cherry',
      },
      {
        name: 'soPro-DM8000-Watermelon-Cherry',
      },
      {
        name: 'soPro-DM8000-Watermelon-Kiwi',
      },
      {
        name: 'soPro-DM8000-Kiwi-Passion Fruit-Guava',
      },
      {
        name: 'soPro-DM8000-Blueberry-Raspberry',
      },
      {
        name: 'soPro-DM8000-Berry-Hookah',
      },
      {
        name: 'soPro-DM8000-Berry-Mix',
      },
      {
        name: 'soPro-DM8000-Blueberry',
      },
    ],
  },
  {
    productLineName: 'WAKA soPro PA7000',
    products: [
      {
        name: 'WAKA-soPro-PA7000-Fruity-Sourness',
      },
      {
        name: 'WAKA-soPro-PA7000-Watermelon',
      },
      {
        name: 'WAKA-soPro-PA7000-Blueberry-Raspberry',
      },
      {
        name: 'WAKA-soPro-PA7000-Raspberry-Watermelon',
      },
      {
        name: 'WAKA-soPro-PA7000-Strawberry-Grapes',
      },
      {
        name: 'WAKA-soPro-PA7000-Strawberry',
      },
      {
        name: 'WAKA-soPro-PA7000-Aloe-Grape',
      },
      {
        name: 'WAKA-soPro-PA7000-Lemon-Mint',
      },
      {
        name: 'WAKA-soPro-PA7000-Blackberry-Wave',
      },
    ],
  },
  {
    productLineName: 'WAKA Smash',
    products: [
      {
        name: 'WAKA-Smash-Cherry',
      },
      {
        name: 'WAKA-Smash-Watermelon',
      },
      {
        name: 'WAKA-Smash-Strawberry-Grapes',
      },
      {
        name: 'WAKA-Smash-Strawberry-Raspberry',
      },
      {
        name: 'WAKA-Smash-Mint-Black-Currant',
      },
      {
        name: 'WAKA-Smash-Green-Grape',
      },
      {
        name: 'WAKA-Smash-Juicy-Black-Currant',
      },
      {
        name: 'WAKA-Smash-Aloe-Grapes',
      },
      {
        name: 'WAKA-Smash-Blackberry-Wave',
      },
    ],
  },
  {
    productLineName: 'soFit FA4000',
    products: [
      {
        name: 'soFit-FA4000-Mint',
      },
      {
        name: 'soFit-FA4000-Strawberry-Grapes',
      },
      {
        name: 'soFit-FA4000-Lemonade-Cherry-Peach',
      },
      {
        name: 'soFit-FA4000-Floral-Orange',
      },
      {
        name: 'soFit-FA4000-Blueberry-Raspberry',
      },
      {
        name: 'soFit-FA4000-Grape-Wave',
      },
      {
        name: 'soFit-FA4000-Garnet',
      },
      {
        name: 'soFit-FA4000-Watermelon',
      },
    ],
  },
  {
    productLineName: 'Solo2',
    products: [
      {
        name: 'Solo2-Cherry',
      },
      {
        name: 'Solo2-Watermelon',
      },
      {
        name: 'Solo2-Blueberry',
      },
      {
        name: 'Solo2-Strawberry',
      },
      {
        name: 'Solo2-Blueberry-Raspberry',
      },
      {
        name: 'Solo2-Berry-Hookah',
      },
      {
        name: 'Solo2-Kiwi-Passion Fruit-Guava',
      },
      {
        name: 'Solo2-Berry-Mix',
      },
      {
        name: 'Solo2-Mint',
      },
    ],
  },
  {
    productLineName: 'WAKA soFit FA1000',
    products: [
      {
        name: 'WAKA-soFit-FA1000-Blueberry-Raspberry',
      },
      {
        name: 'WAKA-soFit-FA1000-Mango-Melon-Aloe',
      },
      {
        name: 'WAKA-soFit-FA1000-Watermelon',
      },
      {
        name: 'WAKA-soFit-FA1000-Strawberry',
      },
      {
        name: 'WAKA-soFit-FA1000-Blueberry',
      },
      {
        name: 'WAKA-soFit-FA1000-Strawberry-Kiwi',
      },
      {
        name: 'WAKA-soFit-FA1000-Aloe-Grape',
      },
      {
        name: 'WAKA-soFit-FA1000-Double-Apple',
      },
    ],
  },
];

export { columns, productsNames };
