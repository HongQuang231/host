import {all, call} from 'redux-saga/effects';
import {fetchAccountSagas} from './account.sagas';

export default function* mySaga(): Generator {
  yield all([call(fetchAccountSagas)]);
}
