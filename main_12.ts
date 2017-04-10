import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*Rx.Observable.concat(
    Rx.Observable.of(42),
    Rx.Observable.throw(new Error("Error")),
    Rx.Observable.of(10))
        .subscribe(createSubscriber("catch"));*/

getApi()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .do(() => console.log("THING"))
    .subscribe(createSubscriber("api"));


function getApi(){
    return new Rx.Observable(observer => {
        console.log("Getting API");
        setTimeout(() => {
           observer.error(new Error());
        }, 1000);
    })
}