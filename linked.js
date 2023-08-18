const node = (value = null, nextNode = null) => {
    return {value, nextNode}
}

const linkedList = () => {
    let head = null;
    let tail = null;
    let length = 0;

    const append = (newValue) => {
        const newNode = node(newValue);
        if(!head) {
            head = newNode;
            length++;
            return head
        }
        let pointer = head;
        while(pointer.nextNode) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
        tail = newNode;
        length++;
        return head;
    }

    const prepend = (newValue) => {
        const newNode = node(newValue);
        const oldHead = head;
        head = newNode;
        head.nextNode = oldHead;
        length++;
        return head;
    }   

    const size = () => {
        return length;
    }


    return{append, prepend, size, get head() { return head }}
}

const myList = linkedList();


console.log(myList.head);
