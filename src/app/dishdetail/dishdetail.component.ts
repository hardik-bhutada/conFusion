import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input()
  dish: Dish;

  id: number;

  constructor(private dishService: DishService, 
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.params['id'];
    // this.dish = this.dishService.getDish(id); Before using Promise
    this.dishService.getDish(id)
      .then(dish => this.dish = dish)
  }

  goBack(): void {
    this.location.back();
  }

}
