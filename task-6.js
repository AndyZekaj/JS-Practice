// Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :
// the new property - discount and the corresponding value (7% or 10%) and the new price.
// let product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// };

const product = {

    name1: "headphones",
    price: 1000,
    discount: 0
};

if (product.price > 100) {
    product.discount = 10;
    product.price = product.price / 100 * 90;
} else {
    product.discount = 7;
    product.price = product.price / 100 * 93;
}

console.log(product);


const product1 = {
    name2: "headphones",
    price: 1000,
    discount: 0
};

const discountPercentage = product1.price > 100 ? 10 : 7;  

const discountAmount = (product1.price * discountPercentage) / 100;
product1.price = Math.round(product1.price - discountAmount); 

product1.discount = discountPercentage;

console.log(product1);
