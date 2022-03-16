const products = [
    "Dell hardcore i29 200GB laptop brand new",
    "iphone 1TB camera flashlight phone",
    "yellow laptop with black camera",
    "Dell 1X59 Lenovo commercial yoga laptop",
    "LG supernova laptop Dell brand new",
    "HTC how price phone",
    "Dell purple color phone with Laptop"
];

// const searching = "laptop";
// const searching = "Dell"
const searching = "brand new"
const output = [];

//use of index of
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }
// console.log(output);

// use of includes
// for(const product of products){
//     if(product.toLowerCase().includes(searching.toLowerCase())){
//         output.push(product);
//     }
// }
// console.log(output);


//use of start with
// for(const product of products){
//     if(product.toLowerCase().startsWith(searching.toLowerCase())){
//         output.push(product);
//     }
// }
// console.log(output);


//use of ends with
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);



