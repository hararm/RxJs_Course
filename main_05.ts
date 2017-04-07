import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*
Rx.Observable.interval(1000)
    .merge(Rx.Observable.interval(5000))
    .take(10)
    .subscribe(createSubscriber('merge1'));

Rx.Observable.merge(
    Rx.Observable.interval(1000).map(i=>`${i} seconds`),
    Rx.Observable.interval(500).map(i=>`${i} half seconds`))
        .take(10)
        .subscribe(createSubscriber('merge2'));
*/

/*Rx.Observable.range(1,5)
    .concat(Rx.Observable.range(10,3))
    .subscribe(createSubscriber('concat1'));*/

Rx.Observable.concat(
    Rx.Observable.interval(1000).map(i=>`${i} seconds`).take(3),
    Rx.Observable.interval(500).map(i=>`${i} half seconds`))
    .take(10)
    .subscribe(createSubscriber('concat2'));


