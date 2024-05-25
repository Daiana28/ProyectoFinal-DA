import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authFeatureName, authReducer } from './auth/auth.reducer';

export const reducers: ActionReducerMap<any> = {
  [authFeatureName]: authReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [logger];

