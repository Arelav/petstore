import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getStoreItems } from '../store.reducer';
import { Product } from '../product';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {

  public storeItems: Observable<Array<Product>>;

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(getStoreItems());
    this.storeItems = this.store.select('store');
  }

}
