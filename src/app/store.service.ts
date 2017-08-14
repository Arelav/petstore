import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import { HttpClient } from '@angular/common/http';
import { mock } from './store-mock';

@Injectable()
export class StoreService {

  private store: Array<Product> = mock;

  constructor(private http: HttpClient) {
  }

  get storeItems(): Observable<Array<Product>> {
    // return Observable.timer(1000).mapTo(this.store);
    return this.http.get('//localhost:10010/pets');
  }

}
