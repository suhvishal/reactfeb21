const namesArr = ['Vishal','Abhishek','Vaibhav','Pooja']

// namesArr.forEach(function(item, index){
//     console.log(index, item)
// })

// namesArr.forEach((item, index) => console.log(index, item))

const newArr = namesArr.map( name => name.toUpperCase())

newArr.forEach( item => console.log(item))