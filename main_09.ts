import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*Rx.Observable.range(1,100)
    .bufferCount(25)
    .subscribe(createSubscriber("items"));
Rx.Observable.interval(500)
    .bufferTime(4000)
    .subscribe(createSubscriber("bufferTime"));*/

/*const stopSubject$ = new Rx.Subject();

 Rx.Observable.interval(500)
    .buffer(stopSubject$)
    .subscribe(createSubscriber("buffer"));
setTimeout(() => {
    stopSubject$.next();
}, 3000);*/

Rx.Observable.range(1, 10)
    .merge(Rx.Observable.never())
    .toArray()
    .subscribe(createSubscriber("range"));

Rx.Observable.range(1, 10)
    .merge(Rx.Observable.never())
    .bufferCount(3)
    .subscribe(createSubscriber("range"));
