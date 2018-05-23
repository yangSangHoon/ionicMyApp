import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HabitService } from "../../services/habit.service";
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public money: Number = 0;
  item: Observable<any>;
  constructor(public navCtrl: NavController, private habitService:HabitService, afDatabase: AngularFireDatabase) {
    this.item = afDatabase.object('data').valueChanges();
    console.log(this.item);
  }

  ngOnInit() {
    //this.money = this.habitService.getData().money;
  }

  save() {
    this.habitService.saveMoney(this.money);
  }
}
