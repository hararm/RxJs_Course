import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber('simple$'));

simple$.next("Hello");
simple$.next("World");
simple$.complete();

const intervals$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();
intervals$.subscribe(intervalSubject$);

intervalSubject$.subscribe(createSubscriber("sub1"));
intervalSubject$.subscribe(createSubscriber("sub2"));
intervalSubject$.subscribe(createSubscriber("sub3"));

setTimeout(()=> {
    intervalSubject$.subscribe(createSubscriber("LOOK AT ME!"));
})*/

const currentUser$ = new Rx.BehaviorSubject({ isLoggedIn: false });
const isLoggedIn$ = currentUser$.map((u: any) =>u.isLoggedIn);
isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));
setTimeout(() => {
    currentUser$.next({ isLoggedIn: true});
}, 3000);
setTimeout(() => {
    isLoggedIn$.subscribe(createSubscriber("delayed"));
},1500);

/*const replay$ = new Rx.ReplaySubject(3);
 replay$.next(1);
 replay$.next(2);

 replay$.subscribe(createSubscriber("one"));

 replay$.next(3);
 replay$.next(4);
 replay$.next(5);

 replay$.subscribe(createSubscriber("two"));

 replay$.next(6);*/

/*const apiCalls$ = new Rx.AsyncSubject();
apiCalls$.next(1);

apiCalls$.subscribe(createSubscriber("one"));
apiCalls$.next(2);
apiCalls$.next(3);
apiCalls$.complete();

setTimeout(()=> {
    apiCalls$.subscribe(createSubscriber("two"));
},200);*/


