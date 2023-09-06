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