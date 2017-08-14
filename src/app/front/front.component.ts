import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getStoreItems } from '../store.reducer';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit, OnDestroy {

  // public store;
  // private subscription;

  public storeItems: Observable<any>;

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(getStoreItems());
    this.storeItems = this.store.select('store');
    this.storeItems.subscribe(items => console.log(items));

    //   this.subscription = this.storeService
    //     .storeItems
    //     .subscribe(store => this.store = store);
  }

  ngOnDestroy() {
    //   this.subscription
    //     .unsubscribe();
  }
}
