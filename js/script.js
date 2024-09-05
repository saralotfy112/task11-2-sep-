// // "use strict"
// var interface = 100 ; 

// console.log(interface);

// // "use strict"
// function  showData(){
//     var  x = 200 ; // local variable
//     }

//     showData();
//     console.log(x); // not defined : errro

// // "use strict"
// function Sum(y ,y)
// {
//     var sum = y+y ; 
//     console.log(sum); 
    
// }
// Sum(7,100) 



// function containData()
// {
//     var m = 10;
//     let a = 20 ; 
//     const s =30 ; 
//     }
// containData();
//     console.log(m);
//     console.log(a);
//     console.log(s);

// // "use strict"
// if(true)
//     {
//         const h= 100 ; 
//         console.log(h);
//     }
//     console.log(h); // not defined 


//  
// function makeReport(id , name , age , salary)
// {
// if(id==undefined)
//     id=5 ; 
// if(name==undefined)
//     name ="user" 
// if(age==undefined)
//     age =20 ; 
// if(salary==undefined)
//     salary=5000;
// console.log(`Id is ${id} name is ${name}  salary is = ${salary+1000} age is ${age}`);

// }
// makeReport(3) ;

// "without IF"
// Using Default Values in Parameters.
function makeReport(id = 5, name = "user", age = 20, salary = 5000) {
    console.log(`Id is ${id} name is ${name} salary is = ${salary + 1000} age is ${age}`);
}

makeReport(99,"sara" ,24 , 8000 ); 


