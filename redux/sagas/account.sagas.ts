import {all, put, takeEvery} from 'redux-saga/effects';
import {accountActions} from '../slices';

function* fetchAccountSaga(
  action: ReturnType<typeof accountActions.fetchAccount>,
): Generator {
  accountActions;
  try {
    const response = null;
    yield put(accountActions.setDataAccountSuccess(response));
  } catch (err) {
    yield put(accountActions.setDataAccountFail());
  }
}

export function* fetchAccountSagas() {
  yield all([takeEvery(accountActions.fetchAccount.type, fetchAccountSaga)]);
}
