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
            return head;
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
        return pointer;
    }

    const pop = () => {
        let pointer = head;
        let previous = head;
        while(pointer.nextNode) {
            previous = pointer;
            pointer = pointer.nextNode;
        }
        previous.nextNode = null;
        tail = previous;
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
        return false;
    }

    const find = (value) => {
        let pointer = head;
        let index = 0;
        while(pointer.nextNode) {
            if(value === pointer.value) {
                return index;
            }
            pointer = pointer.nextNode;
            index++;
        }
        if(value === pointer.value) {
            return index;
        }
        return null;
    }

    const toString = () => {
        let pointer = head;
        let nodeStr = ""
        while(pointer.nextNode) {
            nodeStr += `( ${pointer.value} ) --> `;
            pointer = pointer.nextNode;
        }
        return nodeStr += `( ${pointer.value} ) --> null`;
    }

    return{
        append, 
        prepend, 
        size, 
        getHeadNode, 
        getTailNode,
        atIndex,
        pop,
        contains,
        find,
        toString
    }
}

const myList = linkedList();

myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append('ball');

console.log(myList.toString());


