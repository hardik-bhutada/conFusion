import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input()
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  id: number;

  constructor(private dishService: DishService, 
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void { 
    // this.dish = this.dishService.getDish(id); Before using Promise

    // const id = this.route.snapshot.params['id'];
    // this.dishService.getDish(id)                 // Without snapshot
    //   .subscribe(dish => this.dish = dish)

    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

}
