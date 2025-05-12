const cartItems = [
  { name: "Shoes", category: "Footwear", price: 4999, discount: 20 },
  { name: "T-shirt", category: "Apparel", price: 1999, discount: 35 },
  { name: "Bag", category: "Accessories", price: 2499, discount: 40 },
  { name: "Socks", category: "Apparel", price: 499, discount: 10 },
];
let discounted=cartItems.map((ele)=>{
    let discountedPrice = ele.price - ele.price * (ele.discount / 100);
     return {...ele,discountedPrice}
})
let filtered=discounted.filter((ele)=>ele.discount>30).map((ele)=>{
    let obj={
            name:ele.name,
    discountedPrice:ele.discountedPrice
        }
        return obj
    })
let total=filtered.reduce((curr,acc)=>
curr+=acc.discountedPrice,0)
let res = {
  filteredItems: filtered,
  totalDiscountedValue:total
};
console.log(res)