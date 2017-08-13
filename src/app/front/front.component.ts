import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit, OnDestroy {

  public store;
  private subscription;

  constructor(public storeService: StoreService) { }

  ngOnInit() {
    this.subscription = this.storeService
      .storeItems
      .subscribe(store => this.store = store);
  }

  ngOnDestroy() {
    this.subscription
      .unsubscribe();
  }
}
