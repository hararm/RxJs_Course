import * as $ from 'jquery';

const $title = $('#title');
const $result = $('#results');

let lastQuery = null;
let lastTimeout = null;

$title.on('keyup', (e: JQueryEventObject ) => {
    const title = (<HTMLInputElement>e.target).value;
    if(title == lastQuery){
        return;
    }
    lastQuery = title;
    if(lastTimeout)
        window.clearTimeout(lastTimeout);

    lastTimeout = window.setTimeout(()=>{
        getItems(title)
            .then((items: any) => {
                $result.empty();

                const $items = items.map(item => $(`<li />`).text(item));
                $result.append($items);
            });
    }, 500);

});

function getItems(title: any) {
    console.log(`Querying ${title}`);
    return new Promise(( resolve, reject)=>{
        window.setTimeout(()=>{
            resolve([title, "Item 2", `Another ${Math.random() }`]);
        }, 500 + (Math.random()* 1000));
    });
}

