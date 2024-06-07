let Products = [
    {
        Brand: "Arrow",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/c/r/38-araeosh1276-arrow-original-imagz8vu3cygwghh.jpeg?q=70",
        name: "Slim Fit Shirt",
        price: "Rs. 500.00",
        ActualPrice: "Rs. 750.00"
    },
    {
        Brand: "Van Heusen",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/i/e/39-vssfuslpb60517-van-heusen-original-imagnbytbw72xrwh.jpeg?q=70",
        name: "Slim Fit Shirt",
        price: "Rs. 800.00",
        ActualPrice: "Rs. 1200.00"

    },
    {
        Brand: "Wrogn",
        img_src: "https://rukminim2.flixcart.com/image/612/612/k7gikcw0/shirt/g/z/9/46-11361160-wrogn-original-imafpzfcyugrwfgs.jpeg?q=70",
        name: "Slim Fit Shirt",
        price: "Rs. 1000.00",
        ActualPrice: "Rs. 1500.00"
    },
    {
        Brand: "The Indian Garage Co.",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/a/x/-original-imagnggpehp6a5gf.jpeg?q=70",
        name: "Slim Fit Shirt",
        price: "Rs. 650.00",
        ActualPrice: "Rs. 800.00"
    },
    {
        Brand: "Allen Solly",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/b/5/42-assfmmofn18671-allen-solly-original-imags2fgk7ctedfy.jpeg?q=70",
        name: "Shirt",
        price: "Rs. 1250.00",
        ActualPrice: "Rs. 2000.00"
    },
    {
        Brand: "Park Avenue",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/c/a/40-pmsx18261-n3-park-avenue-original-imagz8zzatu6u5dc.jpeg?q=70",
        name: "Fit Shirt",
        price: "Rs. 2000.00",
        ActualPrice: "Rs. 2200.00"
    },
    {
        Brand: "The Bear House",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/0/w/3xl-tbh-baroc-bl-the-bear-house-original-imagqpf45qhyvb6j.jpeg?q=70",
        name: "fit Shirt",
        price: "Rs. 500.00",
        ActualPrice: "Rs. 650.00"
    },
    {
        Brand: "Arrow",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/c/r/38-araeosh1276-arrow-original-imagz8vu3cygwghh.jpeg?q=70",
        name: "Slim Fit Shirt",
        price: "Rs. 500.00",
        ActualPrice: "Rs. 750.00"
    }
];


localStorage.setItem("Product_data", JSON.stringify(Products));
let collection = JSON.parse(localStorage.getItem("Product_data")) || [];
Product();
function Product() {
    collection.map((element)=>{
    let box = document.createElement("div");
    let innerBox = document.createElement("div");

    let price1 = document.createElement("span");
    price1.innerHTML = element.price;
    price1.className = "price1"
    let price2 = document.createElement("span");
    price2.innerHTML = element.ActualPrice;
    price2.className = "actualprice"

    innerBox.append(price1, price2);
    innerBox.className = "innerBox";

    let image = document.createElement("img");
    image.src = element.img_src;
    image.className = "avtar";
    
    let type = document.createElement("p");
    type.innerHTML = element.name;
    type.className="type";

    let brandName = document.createElement("p");
    brandName.innerHTML = element.Brand;
    brandName.className="Brand"

    box.append( image, brandName, type, innerBox);
    document.getElementById("collection").append(box);





})
}


document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
