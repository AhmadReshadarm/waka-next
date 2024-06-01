import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getErrorMassage,
  handleChangePending,
  handlePending,
  handleError,
  handleChangeError,
} from '../../common/helpers';
import { openSuccessNotification } from 'common/helpers/openSuccessNotidication.helper';
import { MailOptionsDTO, TSubscribers } from 'redux/types';
import { SubscribersResponse, SubscribesService } from 'swagger/services';
import ExcelJs from 'exceljs';
// import fs from 'fs';

export const fetchSubscribers = createAsyncThunk<
  SubscribersResponse[],
  undefined,
  { rejectValue: string }
>(
  'tags/fetchSubscribers',
  async function (_, { rejectWithValue }): Promise<any> {
    try {
      return await SubscribesService.getSubscribers();
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const fetchSubscribersInExcelFile = createAsyncThunk<
  any,
  undefined,
  { rejectValue: string }
>(
  'tags/fetchSubscribersInExcelFile',
  async function (_, { rejectWithValue }): Promise<any> {
    try {
      const response = await SubscribesService.getSubscribers();
      let workBook = new ExcelJs.Workbook();
      const sheet = workBook.addWorksheet('subscribers');
      sheet.columns = [
        { header: 'ID', key: 'id', width: 10 },
        { header: 'Имя', key: 'name', width: 30 },
        { header: 'Электронная почта', key: 'email', width: 50 },
      ];

      await response.map((subscriber) => {
        sheet.addRow({
          id: subscriber.id,
          name: subscriber.name,
          email: subscriber.email,
        });
      });

      workBook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${new Date().toISOString().split('T')[0]}.xlsx`;
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const fetchSubscribersInJsonFile = createAsyncThunk<
  any,
  undefined,
  { rejectValue: string }
>(
  'tags/fetchSubscribersInJsonFile',
  async function (_, { rejectWithValue }): Promise<any> {
    try {
      const response = await SubscribesService.getSubscribers();
      const json = JSON.stringify(response);
      const blob = new Blob([json], {
        type: 'application/json',
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${new Date().toISOString().split('T')[0]}.json`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const fetchSubscriberByEmail = createAsyncThunk<
  SubscribersResponse,
  string,
  { rejectValue: string }
>(
  'tags/fetchSubscriberByEmail',
  async function (email, { rejectWithValue }): Promise<any> {
    try {
      return await SubscribesService.getSubscriberById({
        mailId: email,
      });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const createSubscriber = createAsyncThunk<
  SubscribersResponse,
  { name: string; email: string },
  { rejectValue: string }
>(
  'tags/createSubscriber',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      return await SubscribesService.createSubscribers({
        body: { ...payload },
      });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const deleteSubscriber = createAsyncThunk<
  SubscribersResponse,
  string,
  { rejectValue: string }
>(
  'tags/deleteSubscriber',
  async function (email, { rejectWithValue }): Promise<any> {
    try {
      return await SubscribesService.deleteSubscriber({ mailId: email });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const sendAdminCallEmail = createAsyncThunk<
  string,
  MailOptionsDTO,
  { rejectValue: string }
>(
  'tags/sendAdminCallEmail',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      return await SubscribesService.sendAdminCallNotification({
        body: { ...payload },
      });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

const initialState: TSubscribers = {
  Subscribers: [],
  Subscriber: null,
  loading: false,
  saveLoading: false,
  SubscriberLenght: 0,
};

const subscriberSlicer = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchSubscribers
      .addCase(fetchSubscribers.pending, handlePending)
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.Subscribers = action.payload;
        state.SubscriberLenght = action.payload.length;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchSubscribers.rejected, handleError)
      //fetchSubscribersInExcelFile
      .addCase(fetchSubscribersInExcelFile.pending, handlePending)
      .addCase(fetchSubscribersInExcelFile.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchSubscribersInExcelFile.rejected, handleError)
      //fetchSubscribersInJsonFile
      .addCase(fetchSubscribersInJsonFile.pending, handlePending)
      .addCase(fetchSubscribersInJsonFile.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchSubscribersInJsonFile.rejected, handleError)
      //fetchSubscriberByEmail
      .addCase(fetchSubscriberByEmail.pending, handlePending)
      .addCase(fetchSubscriberByEmail.fulfilled, (state, action) => {
        state.Subscriber = action.payload;
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchSubscriberByEmail.rejected, (state, action) => {
        state.Subscriber = null;
        state.loading = false;
        console.log('rejected');
      })
      //createSubscriber
      .addCase(createSubscriber.pending, handlePending)
      .addCase(createSubscriber.fulfilled, (state, action) => {
        state.Subscriber = action.payload;
        openSuccessNotification('Вы успешно подписаны');
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(createSubscriber.rejected, handleError)
      //sendAdminCallEmail
      .addCase(sendAdminCallEmail.pending, handlePending)
      .addCase(sendAdminCallEmail.fulfilled, (state, action) => {
        openSuccessNotification(
          'Мы получили вашу контактную информацию и свяжемся с вами как можно скоро',
        );
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(sendAdminCallEmail.rejected, handleError)
      //deleteSubscriber
      .addCase(deleteSubscriber.pending, handleChangePending)
      .addCase(deleteSubscriber.fulfilled, (state, action) => {
        state.Subscriber = null;
        state.saveLoading = false;
        openSuccessNotification('Вы отписались от нашей рассылки');
        console.log('fulfilled');
      })
      .addCase(deleteSubscriber.rejected, handleChangeError);
  },
});

export default subscriberSlicer.reducer;
