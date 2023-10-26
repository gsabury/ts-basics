import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {

    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {

        // Create li element
        const li = document.createElement('li');

        // Create h4 element
        const h4 = document.createElement('h4');

        // Move heading into h4
        h4.innerText = heading;

        // Append h4 at beginning of li
        li.append(h4);

        // Create p element 
        const p = document.createElement('p');

        // move the data that format() returns into p  
        p.innerText = item.format();

        // Move p to the end inside of li
        li.append(p);

        if (pos === 'start') {
            // move the new li element at the beginning inside of ul
            this.container.prepend(li);
        } else {
             // move the new li element at the end inside of ul
            this.container.append(li);
        }
    }
}