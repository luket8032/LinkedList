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

    const getHeadNode = () => {
        return head;
    }

    const getTailNode = () => {
        return tail;
    }

    const atIndex = (index) => {
        let pointer = head;
        while(index > 0) {
            pointer = pointer.nextNode;
            index--;
        }
        return pointer
    }

    const pop = () => {
        let pointer = head;
        let previous = head;
        while(pointer.nextNode) {
            previous = pointer
            pointer = pointer.nextNode;
        }
        previous.nextNode = null;
        tail = previous
        length--;
    }

    const contains = (value) => {
        let pointer = head;
        while(pointer.nextNode) {
            if(value === pointer.value){
                return true;
            }
            pointer = pointer.nextNode
        }
        return false
    }


    return{
        append, 
        prepend, 
        size, 
        getHeadNode, 
        getTailNode,
        atIndex,
        pop,
        contains
    }
}

const myList = linkedList();

myList.append(4);
myList.append(5);
myList.append(6);
myList.append('balls');
myList.append(7);
myList.prepend(3);
myList.append(8);
myList.prepend(2);
myList.prepend(1);

console.log(myList.getHeadNode());


