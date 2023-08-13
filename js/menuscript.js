let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Latte",
        foodimg: 'images/latte1.jpg.jpg',
        price: "RS 150",
        type: "coffee",
        des: "It is an espresso-based coffee drink with steamed milk and foamed milk.Other flavorings can be added to the latte to suit the taste of the drinker. Vanilla, chocolate, and caramel are all popular variants."
    },
    {
        FoodName: "Decaf",
        foodimg: 'images/decaf.jpg',
        price: "RS 130",
        type: "coffee",
        des: "Decaf coffee is coffee made from coffee beans whose most of the caffeine quantity is removed before the process of roasting and grinding."
    },
    {
        FoodName: "Sandwich",
        foodimg: 'images/sandwich.jpg',
        price: "RS 100",
        type: "Quick-Bites",
        des: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
    },
    {
        FoodName: "Almond Milk",
        foodimg: 'images/almond.jpg',
        price: "RS 170",
        type: "Shakes",
        des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
    },
    {
        FoodName: "Croissant",
        foodimg: 'images/croissant.jpg',
        price: "RS 300",
        type: "Quick-Bites",
        des: " a buttery, flaky, French viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough."
    },
    {
        FoodName: "Cappuccino",
        foodimg: 'images/cappuccino1.jpg',
        price: "RS 170",
        type: "coffee",
        des: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft"
    },
    {
        FoodName: "Kiwi Shake",
        foodimg: 'images/kiwi.jpg',
        price: "RS 200",
        type: "Shakes",
        des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew."
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'images/s1.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'images/s2.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
    },

    {
        FoodName: "Red Valvet Cupcake",
        foodimg: 'images/red valvet cupcake.jpg',
        price: "RS 80 per peice",
        type: "Quick-Bites",
        des: "Fluffy and moist, these buttery red velvet cupcakes are everyone's favorite. The tangy cream cheese frosting puts them over the top!"
    },
    {
        FoodName: "Boba Tea",
        foodimg: 'images/boba.jpg',
        price: "RS 250",
        type: "Shakes",
        des: "Bubble Tea, also known as boba milk tea, is a cold, frothy drink made with a tea base shaken with flavors, sweeteners and/or milk with tapioca pearls at the base of the drink."
    },
    {
        FoodName: "Mint Muffins",
        foodimg: 'images/mint muffin.jpg',
        price: "RS 80 per peice",
        type: "Quick-Bites",
        des: "Fluffy, soft muffins studded with aromatic mint and finished with a crunchy raw sugar topping. They are perfection."
    },
    {
        FoodName: "Frappe",
        foodimg: 'images/frappe.jpg',
        price: "RS 250",
        type: "coffee",
        des: "A frappé is an iced beverage that has been shaken, blended or beaten to produce a tasty, foamy, and refreshing drink"
    },
    {
        FoodName: "Choco Lava",
        foodimg: 'images/lava.jpg',
        price: "RS 100",
        type: "Quick-Bites",
        des: "A delicious indulgence for every occasion yet easy for every day dessert! Classic chocolate lava cake made with five simple ingredients. So decadent, you just can't resist for another bite."
    },
    {
        FoodName: "Garlic Bread",
        foodimg: 'images/garlic bread.jpg',
        price: "RS 350",
        type: "Quick-Bites",
        des: "Are you a garlic lover? If yes. Garlic Bread is that perfect accompaniment that goes well with Pizza and Pasta. It is an ideal amalgamation of cheese, aromatic spices, herbs and crunchy toasts. It makes for an awesome delight that can be relished any time. "
    },
    {
        FoodName: "Cortado",
        foodimg: 'images/cortado.jpg',
        price: "RS 200",
        type: "coffee",
        des: "A perfect drink for those who love balance in their lives, a Cortado is a small coffee drink that pairs espresso and steamed/textured milk in equal proportions"
    },

]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Coffee'){
                if(box.classList.contains('coffee'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Quick-Bites'){
                if(box.classList.contains('Quick-Bites'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Shakes'){
                if(box.classList.contains('Shakes'))
                {
                    box.classList.remove('d-none')
                }
                
            }

        })
        
    })
})