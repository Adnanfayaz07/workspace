const product = (a,b)=>a*b
console.log(product(7,3));
const student = {
    name:'adnan',
    age:24,
    message(){
        console.log('Hi, I am '+this.name)
    }
}
student.message()


const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)
console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)

console.log('e');

