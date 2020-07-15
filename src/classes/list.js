import Node from './node';

export default class List{
	constructor(){
		this.head = null;
		this.length = 0;
	}

	/* Add item at the end of the list */
	append(item){
		let node = new Node(item), current;

		/* Check wether or not the list has no items */
		if(this.head === null){
			this.head = node;
		}else{
			current = this.head;

			/* Loop through the list to find the last item */
			while(current.next){
				current = current.next;
			}

			/* Get the last item and assign next to node to make
			 * the link */
			current.next = node;
		}
		this.length++;

		return this.length;
	}

	removeAt(position){
		if(position > -1 && position < this.length){
			let current = this.head, previous, index = 0;

			/* Removing head */
			if(position === 0){
				this.head = current.next;
			}else{
				while(index < position){
					previous = current;
					current = current.next;
					index++;
				}

				/* Link previous with current's next: skip it to remove */
				previous.next = current.next;
			}
			this.length--;

			return current.item;
		}else{
			return null;
		}
	}
}
