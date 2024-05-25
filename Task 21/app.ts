interface item {
    name:string,
    price:number
}
const Gift:item={
    name:"LaserLight",
    price:120
}
const Bike:item={
    name:"125CC",
    price:250000
}
const pen:item={
    name:"Piano",
    price:120
}

console.log(`Gift name :${Gift.name}, price ${Gift.price}`);
console.log(`Bike name :${Bike.name}, price ${Bike.price}`);
console.log(`Pen name :${pen.name}, price ${pen.price}`);



// 21. They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
