import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StoreService } from './store.service';
import { GET_STORE_ITEMS, GET_STORE_ITEMS_SUCCESS, GET_STORE_ITEMS_ERROR } from './store.reducer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class StoreEffects {
  // @Effect() getStoreItems$: Observable<Action> = this.actions$
  @Effect() getStoreItems$ = this.actions$
    .ofType(GET_STORE_ITEMS)
    .map(toPayload)
    .switchMap(action =>
      this.storeService.storeItems
        .map(store => ({type: GET_STORE_ITEMS_SUCCESS, payload: store}))
        .catch(() => Observable.of({type: GET_STORE_ITEMS_ERROR})));

  constructor(private actions$: Actions,
              private storeService: StoreService) {
  }
}
