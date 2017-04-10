import * as Rx from "rxjs";
import {createSubscriber} from "./util/util";

/*
function arrayMap(array, projection) {
    const returnArray = [];
    for (let item of array) {
        const projected = projection(item);
        returnArray.push(projected);
    }
    return returnArray;
}

arrayMap([1, 2, 3], a => a * a);

function arrayMergeMap(array, projection) {
    const returnArray = [];
    for (let item of array) {
        const projectedArray = projection(item);
        for(let projected of projectedArray) {
            returnArray.push(projected);
        }
    }
    return returnArray;
}

const albums = [
    {title: "album 1", tracks: [{id: 1,title: "Track 1"}]},{title: "album 2", tracks: [{id: 2,title: "Track 1"}]},
    {title: "album 3", tracks: [{id: 3,title: "Track 5"}]},{title: "album 4", tracks: [{id: 4,title: "Track 123"}]}
];

const tracksWrong = arrayMap(albums, album => album.tracks);
const tracksRight = arrayMergeMap(albums, album => album.tracks);
console.log(JSON.stringify(tracksWrong));
console.log(JSON.stringify(tracksRight));*/


/*Rx.Observable.range(2, 3)
    .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i * 2} Seconds`))
    .subscribe(createSubscriber("mergeMap"));*/

/*
Rx.Observable.fromPromise(getTracks())
    .mergeMap((tracks: any) => Rx.Observable.from(tracks))
    .subscribe(createSubscriber('tracks'));

function getTracks() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(['track1','track2','track3']);
        },1000);
    });
}
*/
Rx.Observable.of('my query')
    .do(()=> console.log('Querying'))
    .mergeMap(a=>query(a))
    .do(()=>console.log('After querying'))
    .subscribe(createSubscriber('tracks'));

function query(value) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(`THIS IS A VALUE ${value}`);
        },1000);
    });
}

