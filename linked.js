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
        head = newNode;
        length++;
    }   

    const size = () => {
        return length;
    }


    return{append, prepend, size, get head() { return head }}
}

const myList = linkedList();

myList.append(7);
myList.append(8);

console.log(myList.head);
