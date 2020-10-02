import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // Before using Promises

  // getDishes(): Dish[]{
  //   return DISHES;
  // }

  // getDish(id: string): Dish {
  //   return DISHES.filter((dish) => (dish.id == id))[0];
  // }

  // getFeaturedDish(): Dish {
  //   return DISHES.filter((dish) => dish.featured)[0];
  // }   
  
  getDishes(): Observable<Dish[]> {
    // return Promise.resolve(DISHES); Before setting timeout 

    // return new Promise(resolve=> {
    //    Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES), 2000);
    // });

    // Now using observable
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); Before setting timeout

    // return new Promise(resolve=> {
    //    Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });

    //Now using Observable
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]); Before setting timeout
    
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
