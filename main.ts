import * as $ from 'jquery';
import * as Rx from "rxjs";

const $title = $('#title');
const $results = $('#results');


Rx.Observable.fromEvent($title,"keyup")
    .map((e: any) => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe((items: any) => {
        $results.empty();
        $results.append(items.map(i => $('<li />').text(i)));
    });

function getItems(title: any) {
    console.log(`Querying ${title}`);
    return new Promise(( resolve, reject)=>{
        window.setTimeout(()=>{
            resolve([title, "Item 2", `Another ${Math.random() }`]);
        }, 500 + (Math.random()* 1000));
    });
}