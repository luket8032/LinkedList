const node = (value = null, nextNode = null) => {
    return {value, nextNode}
}

const linkedList = () => {
    let head = null;
    let tail = null;
    let length = 0;

    const append = (newValue) => {
        const newNode = node(newValue);
        if(head === null) {
            head = newNode;
        }
    }

    const size = () => {
        return length;
    }


    return{append, size}
}

const myList = linkedList();

