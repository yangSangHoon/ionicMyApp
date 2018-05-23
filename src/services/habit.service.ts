import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Note} from '../model/note';
import { Injectable } from '@angular/core';

@Injectable()
export class HabitService {
    data;

    constructor(afDatabase: AngularFireDatabase) {
        this.data = afDatabase.object('/data');
        /*afDatabase.list('/panltyMoney/').valueChanges().subscribe(_data => {
            console.log(_data);
        });*/
    }
    
    saveMoney(money) {
        this.data.set({money: money});
    }

    getData() {
        const dataValue = this.data.valueChanges();
        return this.data.valueChanges();
    }
}