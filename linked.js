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


    return{
        append, 
        prepend, 
        size, 
        getHeadNode, 
        getTailNode,
        atIndex
    }
}

const myList = linkedList();

myList.append(4)
myList.append(5)
myList.append(6)
myList.append(7)
myList.prepend(3)
myList.append(8);
myList.prepend(2)
myList.prepend(1)

console.log(myList.getHeadNode());
