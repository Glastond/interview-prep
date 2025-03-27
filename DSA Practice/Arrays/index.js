class myArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return index ? this.data[index] : Object.values(this.data); 
    }

    push(el){
        this.data[this.length] = el;
        this.length++;
    }

    pop(){
        const lastEl = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--
        return lastEl;
    }

    delete(index){
        const item = this.data[index];

        this.shiftElements(index);

        return item
    }

    shiftElements(index){
        for(let i = index; i < this.length - 1; i++)
            this.data[i] = this.data[i+1];

         delete this.data[this.length - 1];
         this.length--
    }
}

const newArr = new myArray();

newArr.push("a")
newArr.push("b")
newArr.push("c")
// console.log(newArr.pop())
console.log(newArr.delete(1));



console.log(newArr);
