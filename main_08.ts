import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*
function arrayReduce(array, accumulator, startValue) {
    let value = startValue;
    for(let item of array) {
        value = accumulator(value, item);
    }

    return value;
}

const values = [342, 432, 23, 1, 4];
const sum = arrayReduce(values, (acc, i) => acc + i, 0);
console.log(sum);

const max = arrayReduce (
    values,
    function (acc, value) {
      if(value > acc)
          return value;
      return acc;
    },
    -1
);
console.log(max);

const max1 = arrayReduce(values,Math.max, -1);
console.log(max1);*/

Rx.Observable.range(1,10)
    .reduce((acc, value) => acc + value)
    .subscribe(createSubscriber("reduce"));

Rx.Observable.range(1,10)
    .merge(Rx.Observable.never())
    .scan((acc: number, value: number) => acc + value)
    .subscribe(createSubscriber("reduce"));

Rx.Observable.range(1,10)
    .map(i => i*i)
    .scan(([last],current) => [current, last],[])
    .subscribe(createSubscriber("reduce"));


