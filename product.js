const product=(a,b)=> a*b;

console.log(product(2,3));


const student={
    name:'Tauheed',
    age:23,
    company(){
        console.log('soon')
    },
    wish:function (params) {
        console.log('Hey this is '+this.name)
    },
    arrow:()=>{
        console.log('This is arrow function ')
    }
}
student.company()
console.log(student);
student.wish();
student.arrow();
// console.log(student.company());