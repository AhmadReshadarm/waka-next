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
        name: 'WAKA-soPro-PA10000-Малина-Арбуз',
      },
      {
        name: 'WAKA-soPro-PA10000-Мята',
      },
      {
        name: 'WAKA-soPro-PA10000-Арбуз',
      },
      {
        name: 'WAKA-soPro-PA10000-Клубника-Киви',
      },
      {
        name: 'WAKA-soPro-PA10000-Вишня',
      },
      {
        name: 'WAKA-soPro-PA10000-Черника-Малина',
      },
      {
        name: 'WAKA-soPro-PA10000-Киви-Маракуйя-Гуава',
      },
      {
        name: 'WAKA-soPro-PA10000-Виноград-Яблоко',
      },
      {
        name: 'WAKA-soPro-PA10000-Яблочная-Волна',
      },
    ],
  },
  {
    productLineName: 'WAKA soPro DM8000i',
    products: [
      {
        name: 'WAKA-soPro-DM8000i-Вишня',
      },
      {
        name: 'WAKA-soPro-DM8000i-Черника',
      },
      {
        name: 'WAKA-soPro-DM8000i-Арбуз',
      },
      {
        name: 'WAKA-soPro-DM8000i-Арбуз-Вишня',
      },
      {
        name: 'WAKA-soPro-DM8000i-Ягодный-Кальян',
      },
      {
        name: 'WAKA-soPro-DM8000i-Персик-Клубника',
      },
      {
        name: 'WAKA-soPro-DM8000i-Клубника',
      },
      {
        name: 'WAKA-soPro-DM8000i-Черника-Малина-Гранат',
      },
      {
        name: 'WAKA-soPro-DM8000i-Дюшес',
      },
    ],
  },
  {
    productLineName: 'soPro DM8000',
    products: [
      {
        name: 'soPro-DM8000-Арбуз',
      },
      {
        name: 'soPro-DM8000-Вишня',
      },
      {
        name: 'soPro-DM8000-Арбуз-Вишня',
      },
      {
        name: 'soPro-DM8000-Арбуз-Киви',
      },
      {
        name: 'soPro-DM8000-Киви-Маракуйя-Гуава',
      },
      {
        name: 'soPro-DM8000-Черника-Малина',
      },
      {
        name: 'soPro-DM8000-Ягодный-Кальян',
      },
      {
        name: 'soPro-DM8000-Ягодный-Микс',
      },
      {
        name: 'soPro-DM8000-Черника',
      },
    ],
  },
  {
    productLineName: 'WAKA soPro PA7000',
    products: [
      {
        name: 'WAKA-soPro-PA7000-Фруктовая-Кислинка',
      },
      {
        name: 'WAKA-soPro-PA7000-Арбуз',
      },
      {
        name: 'WAKA-soPro-PA7000-Черника-Малина',
      },
      {
        name: 'WAKA-soPro-PA7000-Малина-Арбуз',
      },
      {
        name: 'WAKA-soPro-PA7000-Клубника-Виноград',
      },
      {
        name: 'WAKA-soPro-PA7000-Клубника',
      },
      {
        name: 'WAKA-soPro-PA7000-Алоэ-Виноград',
      },
      {
        name: 'WAKA-soPro-PA7000-Лимон-Мята',
      },
      {
        name: 'WAKA-soPro-PA7000-Ежевичная-Волна',
      },
    ],
  },
  {
    productLineName: 'WAKA Smash',
    products: [
      {
        name: 'WAKA-Smash-Вишня',
      },
      {
        name: 'WAKA-Smash-Арбуз',
      },
      {
        name: 'WAKA-Smash-Клубника-Виноград',
      },
      {
        name: 'WAKA-Smash-Клубника-Малина',
      },
      {
        name: 'WAKA-Smash-Мятная-Черная-Смородина',
      },
      {
        name: 'WAKA-Smash-Зеленый-Виноград',
      },
      {
        name: 'WAKA-Smash-Сочная-Черная-Смородина',
      },
      {
        name: 'WAKA-Smash-Алоэ-Виноград',
      },
      {
        name: 'WAKA-Smash-Ежевичная-Волна',
      },
    ],
  },
  {
    productLineName: 'soFit FA4000',
    products: [
      {
        name: 'soFit-FA4000-Мята',
      },
      {
        name: 'soFit-FA4000-Клубника-Виноград',
      },
      {
        name: 'soFit-FA4000-Лимонад-Вишня-Персик',
      },
      {
        name: 'soFit-FA4000-Цветочный-Апельсин',
      },
      {
        name: 'soFit-FA4000-Черника-Малина',
      },
      {
        name: 'soFit-FA4000-Виноградная-Волна',
      },
      {
        name: 'soFit-FA4000-Гранат',
      },
      {
        name: 'soFit-FA4000-Арбуз',
      },
    ],
  },
  {
    productLineName: 'Solo2',
    products: [
      {
        name: 'Solo2-Вишня',
      },
      {
        name: 'Solo2-Арбуз',
      },
      {
        name: 'Solo2-Черника',
      },
      {
        name: 'Solo2-Клубника',
      },
      {
        name: 'Solo2-Черника-Малина',
      },
      {
        name: 'Solo2-Ягодный-Кальян',
      },
      {
        name: 'Solo2-Киви-Маракуйя-Гуава',
      },
      {
        name: 'Solo2-Ягодный-Микс',
      },
      {
        name: 'Solo2-Мята',
      },
    ],
  },
  {
    productLineName: 'WAKA soFit FA1000',
    products: [
      {
        name: 'WAKA-soFit-FA1000-Черника-Малина',
      },
      {
        name: 'WAKA-soFit-FA1000-Манго-Дыня-Алоэ',
      },
      {
        name: 'WAKA-soFit-FA1000-Арбуз',
      },
      {
        name: 'WAKA-soFit-FA1000-Клубника',
      },
      {
        name: 'WAKA-soFit-FA1000-Черника',
      },
      {
        name: 'WAKA-soFit-FA1000-Клубника-Киви',
      },
      {
        name: 'WAKA-soFit-FA1000-Алоэ-Виноград',
      },
      {
        name: 'WAKA-soFit-FA1000-Двойное-Яблоко',
      },
    ],
  },
];

export { columns, productsNames };
