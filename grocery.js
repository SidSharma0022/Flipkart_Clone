let groceryItem = [
    {
        img_src :"https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
        heading : "Staples"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/9fbd36.jpg?q=100",
        heading:"Snacks and Beverages"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100",
        heading:"Packaged Food"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/7670e2.jpg?q=100",
        heading:"Personal baby care"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/b7ade9.jpg?q=100",
        heading:"Household Care"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/8014b1.jpg?q=100",
        heading:"Dairy & Eggs"
    },
    {
        img_src:"https://rukminim2.flixcart.com/flap/128/128/image/e6e0ecc56771471a.png?q=100",
        heading:"Home & Kitchen"
    }
];


groceryItem.map((element)=>{
    let image = document.createElement("img");
    image.src = element.img_src;

    let title = document.createElement("p");
    title.innerHTML = element.heading;

    let box = document.createElement("div");
    box.append(image, title)

    document.getElementById("grocerycategories")
    grocerycategories.append(box);

})