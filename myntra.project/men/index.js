const items=[
    {
        id:1,
        Image:'photo/1.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:2,
        Image:'photo/2.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:3,
        Image:'photo/3.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:4,
        Image:'photo/4.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:5,
        Image:"photo/5.jpg",
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:6,
        Image:'photo/6.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:1,
        Image:'photo/1.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:2,
        Image:'photo/2.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:3,
        Image:'photo/3.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:4,
        Image:'photo/4.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:5,
        Image:"photo/5.jpg",
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
    {
        id:6,
        Image:'photo/6.jpg',
        name:"BMW",
        description: "This is a BWM car",
        rate:{
            stars:4.6,
            count:100,
        },
        price:  89753,
        ORIGINAL:1003,
        discount:12,
    },
]
const innerHTML = document.querySelector(".box1");
let html = '';

items.forEach(item => {
    
    html += `<div class="box">
    <img  class="Image"src="${item.Image}" alt="image1">
<div class="rating">
    ${item.rate.stars}⭐|${item.rate.count}
</div>
<div class="company">${item.name}</div>
<div class="item_name">${item.description}</div>
<div class="price">
    <span class="current_price">Rs${item.price}</span>
    <span class="old_price">Rs${item.ORIGINAL}</span>
    <span class="discount">${item.discount}%off</span>
</div>
<button class="bag">Add to Bag</button>
</div> `;
});

innerHTML.innerHTML = html;
