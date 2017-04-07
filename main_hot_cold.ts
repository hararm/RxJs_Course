import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*const interval$ = Rx.Observable.interval(1000)
    .take(10)
    .publish();
setTimeout(() => {
    interval$.connect();
},5000);

setTimeout( ()=>{
    interval$.subscribe(createSubscriber("one"));
}, 1200);


setTimeout( ()=>{
    interval$.subscribe(createSubscriber("two"));
}, 3200);*/

const simple$ = new Rx.Observable( observer => {
    observer.next("one");
    observer.next("two");
    observer.next("three");

    return () => console.log("Disposed")
});

//const published$ = simple$.publishReplay(2).refCount();
const published$ = simple$.share();

const sub1 = published$.subscribe(createSubscriber("one"));
const sub2 = published$.subscribe(createSubscriber("two"));

sub1.unsubscribe();
sub2.unsubscribe();



