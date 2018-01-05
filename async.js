// // async

// const mockGetData = (name) => {
//     return new Promise((resolve, reject) => {
//         const text = 'this is test text';

//         const obj = {
//             name: 'ada',
//             age: 18
//         };
//         setTimeout(() => {
//             console.log(111);
//             resolve(obj);
//         }, 2000);
//     })
// }

// // const f1 = mockGetData('f1').then((data) => {
// //     console.log(data, '[[[[[[[');
// // });

// const getManyAsync = async function () {
//     const f1 = await mockGetData('f1');
//     const f2 = await mockGetData('f2');

//     console.log(f1)
//     console.log(f2)
// }

// // getManyAsync();

// class MyClass {
//     constructor(name, age = 25) {
//         this.name = name;
//         this.age = age;
//     }

//     get changeage(){
//         return 44;
//     }
//     set changeage(value) {
//         // console.log(value, '[[[');
//         this.age = value
//     }
// }

// // MyClass.test = function(){
// //     return 'aaa';
// // }

// const lili = new MyClass('lili');

// lili.changeage = 11;

// console.dir(lili.changeage);

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function a(x) {
    return x + 1
}

function b(x) {
    return x + 2
}

function c(x) {
    return x + 3
}

let test = compose(a,b,c)
console.dir(compose(a,b,c));


