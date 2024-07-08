//reverse, sort   (a,b)=>a-b
const products = [
  {id:1, title: 'milk', price:30.45, amount:50, category: 'milk & cheeses'},
  {id:3, title: 'chees', price:330.75, amount:5, category: 'milk & cheeses'},
  {id:2, title: 'beef', price:250.15, amount:7, category: 'meat'},
  {id:8, title: 'chicken', price:130.20, amount:100, category: 'meat'},
  {id:7, title: 'cookie', price:33.00, amount:65, category: 'cookie & bread'},
  {id:27, title: 'bread', price:20.50, amount:14, category: 'cookie & bread'},
  {id:6, title: 'yogurt', price:30.45, amount:23, category: 'milk & cheeses'},
  {id:24, title: 'fish', price:185.60, amount:62, category: 'meat'}
]
console.table(products);
// отримати найдешевший товар
const sortedProductByPrice = products.toSorted((a,b)=>a.price-b.price)
const productWithMinPrice = sortedProductByPrice.at(0)
console.table(sortedProductByPrice);
console.table(productWithMinPrice);

const sortedProductByTitle = products.toSorted((a,b)=>{
  if(a.title === b.title){
    return 0;
  }
  if(a.title > b.title){
    return 1;
  }
  if(a.title < b.title){
    return -1;
  }
})
console.table(sortedProductByTitle);