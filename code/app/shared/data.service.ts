import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {
    public stream: Observable<string>;
    constructor() {
        this.stream = (new BehaviorSubject('a')).asObservable().delay(9000);
    }
}