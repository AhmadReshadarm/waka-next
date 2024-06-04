import { navigateTo } from 'common/helpers';
import { NextRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { Page } from 'routes/constants';
import { generateCode } from 'redux/slicers/store/barcodeSlicer';
import { productsNames } from './constants';
const handleFormSubmit =
  (router: NextRouter, dispatch: AppDispatch) => async (form) => {
    let productLine: { name: string }[] = [];
    productsNames.map((productLineNames) => {
      if (form.productLine == productLineNames.productLineName) {
        productLine = productLineNames.products;
      }
    });

    const payload = {
      startsWith: form.startsWith,
      barcodeLenght: form.barcodeLenght,
      productLine,
      productlineName: form.productLine,
    };

    const isSaved: any = await dispatch(
      generateCode({
        ...payload,
      }),
    );

    if (!isSaved.error) {
      navigateTo(router, Page.ADMIN_CODE)();
    }
  };

export { handleFormSubmit };
