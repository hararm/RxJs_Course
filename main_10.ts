import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

const simple$ = new Rx.Observable(obserever => {
    console.log("Generating sequence")
    obserever.next(1);
    obserever.next(2);
    obserever.next(3);
    obserever.next(4);
    obserever.complete();
});

/*simple$.first()
    .subscribe(createSubscriber("first"));

simple$.first()
    .subscribe(createSubscriber("last"));

simple$.single()
    .subscribe(createSubscriber("single"));

simple$.skip(2)
    .subscribe(createSubscriber("skip"));

simple$.take(2)
    .subscribe(createSubscriber("take"));*/

/*Rx.Observable.interval(500)
    .skipWhile(i => i < 4)
    .takeWhile(i => i < 10)
    .subscribe(createSubscriber("skipWhile"));*/

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .takeUntil(Rx.Observable.timer(4000))
    .subscribe(createSubscriber("skiUntil"));