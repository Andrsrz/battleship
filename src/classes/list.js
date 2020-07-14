import Node from './node';

export default class List{
	constructor(){
		this.head = null;
		this.size = 0;
	}

	insertFirst(data){
		this.head = new Node(data, this.head);
		this.size++;

		return this.size;
	}

	insertLast(data){
		let node = new Node(data);
		let current;

		/* If empty make head */
		if(!this.head){
			this.head = node;
		}else{
			current = this.head;

			while(current.next){
				current = current.next;
			}

			current.next = node;
		}

		this.size++;
	}
}
