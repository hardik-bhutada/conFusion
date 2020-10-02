import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  // Before using Promises

  // getPromotions(): Promotion[]{
  //   return PROMOTION;
  // }

  // gePromotion(id: string): Promotion {
  //   return PROMOTION.filter((promo) => (promo.id == id))[0];
  // }

  // getFeaturedPromotion(): Promotion {
  //   return PROMOTION.filter((promo) => promo.featured)[0];
  // }

  getPromotions(): Observable<Promotion[]>{
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTION), 2000);
    // });
    // return Promise.resolve(PROMOTION);
    return of(PROMOTION).pipe(delay(2000));
  }

  gePromotion(id: string): Observable<Promotion> {
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTION.filter((promo) => (promo.id == id))[0]), 2000);
    // });

    return of(PROMOTION.filter((promo) => (promo.id == id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTION.filter((promo) => promo.featured)[0]), 2000);
    // });

    return of(PROMOTION.filter((promo) => promo.featured)[0]).pipe(delay(2000));
  }
}
