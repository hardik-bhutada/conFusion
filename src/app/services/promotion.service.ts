import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

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

  getPromotions(): Promise<Promotion[]>{
    return Promise.resolve(PROMOTION);
  }

  gePromotion(id: string): Promise<Promotion> {
    return Promise.resolve(PROMOTION.filter((promo) => (promo.id == id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTION.filter((promo) => promo.featured)[0]);
  }
}
