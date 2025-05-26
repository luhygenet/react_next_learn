"use strict";
let items = [];
let to_do = {
    add: (add_item) => {
        let new_time = 0;
        if (items.length === 0) {
            new_time = 1;
        }
        else {
            new_time = (items[items.length - 1].time) + 1;
        }
        let added_item = { task: add_item, time: new_time };
        items.push(added_item);
        return added_item;
    },
    remove: (item_name) => {
        let index = items.findIndex(item => (item.task === item_name));
        let removed_item = items[index];
        if (index != -1)
            items.splice(index, 1);
        return removed_item;
    },
    display: (item_name) => {
        return items.find(item => item.task === item_name);
    },
    display_all: () => {
        return items;
    }
};

to_do.add('go shopping');
to_do.add('go for a walk');

console.log('display shopping item', to_do.display('go shopping'))
console.log('display all items', to_do.display_all())
console.log('removing', to_do.remove('go for a walk'))
console.log('display all items', to_do.display_all())
