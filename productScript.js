
// col-left effect
$(document).ready(function(){
    $(".toggleShow").click(function(){
        let isDropDown = $(this).attr("isDropDown");
        isDropDown = isDropDown === "true" ? true : false ;
        $(this).find("i").replaceWith(
            isDropDown === false
            ? '<i class="fa fa-caret-down" aria-hidden="true"></i>'
            : '<i class="fa fa-caret-right" aria-hidden="true"></i>'
        );
        $(this).attr("isDropDown",`${!isDropDown}`);
        $(this).next().slideToggle();
    })
    $("li.child li").click(function(){
        $("li.child li").removeClass("whenActive");
        $(this).addClass("whenActive");
    })
});

// col-right script
const products = [
    {
        id: 1,
        name: "Full Wall Bed Kit with 3 Drawers",
        brand: "Brestar",
        type: "Bed",
        price: "2,499.00",
        img: "./img-products/Brand_Bestar_product1.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 2,
        name: "Full Wall Bed Kit",
        brand: "Brestar",
        type: "Bed",
        price: "1,200.00",
        img: "./img-products/Brand_Bestar_product2.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 3,
        name: "Full Wall Bed Kit with Door",
        brand: "Brestar",
        type: "Bed",
        price: "1,300.00",
        img: "./img-products/Brand_Bestar_product3.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 0,
    },
    {
        id: 4,
        name: "Folding Queen Wall Bed",
        brand: "Brestar",
        type: "Bed",
        price: "1,100.00",
        img: "./img-products/Brand_Bestar_product4.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 0,
    },
    {
        id: 5,
        name: "Storage Platform Bed",
        brand: "MASHstudios",
        type: "Bed",
        price: "999.00",
        img: "./img-products/Brand_MASHstudios_product1.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 6,
        name: "Headboard Storage Platform",
        brand: "MASHstudios",
        type: "Bed",
        price: "1,000.00",
        img: "./img-products/Brand_MASHstudios_product2.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 0,
    },
    {
        id: 7,
        name: "Bed With Lid",
        brand: "MASHstudios",
        type: "Bed",
        price: "1,100.00",
        img: "./img-products/Brand_MASHstudios_product3.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 8,
        name: "Bed With Side-Lid",
        brand: "MASHstudios",
        type: "Bed",
        price: "1,050.00",
        img: "./img-products/Brand_MASHstudios_product4.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 9,
        name: "Dark Cone Table And Chairs",
        brand: "Vento",
        type: "Table/chairs",
        price: "499.00",
        img: "./img-products/Brand_Vento_product1.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 0,
    },
    {
        id: 10,
        name: "Wooden Hybrid Table And Chairs",
        brand: "Vento",
        type: "Table/chairs",
        price: "520.00",
        img: "./img-products/Brand_Vento_product2.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 11,
        name: "Wall-hanged Outdoor Table And Chairs",
        brand: "Vento",
        type: "Table/chairs",
        price: "600.00",
        img: "./img-products/Brand_Vento_product3.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 1,
    },
    {
        id: 12,
        name: "Wooden Table And Chairs",
        brand: "Vento",
        type: "Table/chairs",
        price: "500.00",
        img: "./img-products/Brand_Vento_product4.jpg",
        details: {
            long: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            wide: Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            height : Math.round(((Math.random() * 100) + 1) * 100) / 100 + "m",
            weight: Math.floor((Math.random() * 990) + 1 ) + "kg"
        },
        stock: 0,
    },
    
];

$(document).ready( function(){
    productsContain = document.querySelector("#list-products");
    ////////////////////////
    function ExportHtml(productArr){
        let tempStr = "";
        productArr.forEach( (obj) => {
            tempStr += `
                <div class="grid-item" data-id="${obj.id}">
                    <button class="compare btn btn-info">Compare</button>
                    <button class="btn btn-white brand">${obj.brand}</button>\
                    <img src="${obj.img}" alt="img not found">
                    <p>${obj.name}<p>
                    <div>
                        <h5>Price: $${obj.price}</h5>
                        <button class="btn btn-warning">Buy</button>
                    </div>
                </div>`;
        });
        productsContain.innerHTML = tempStr;
        EventDeclare();
    };

    function EventDeclare(){
        $(".grid-item").on("mouseenter",function(){
            const id = this.dataset.id;
            let item = {};
            products.forEach( obj => {
                if( parseInt(obj.id) === parseInt(id)){
                    item = obj;
                };
            });
            document.querySelector(".details").innerHTML = `
                <h4>Details</h4>
                <p><b>Weight: </b>${item.details.weight}</p>
                <p><b>Long: </b>${item.details.long}</p>
                <p><b>Wide: </b>${item.details.wide}</p>
                <p><b>Height: </b>${item.details.height}</p>
                <button class="btn ${item.stock === 1 ? "btn-success" : "btn-danger"}">${ item.stock === 1 ? "Stock" : "Out of stock"}</button>`;
        });
        $(".grid-item").on("mouseleave",function(){
            document.querySelector(".details").innerHTML = `
                <h4>Details</h4>
                <p><b>Weight: </b></p>
                <p><b>Long: </b></p>
                <p><b>Wide: </b></p>
                <p><b>Height: </b></p>
                <button class="btn btn-dark"}"></button>`;
        })
        $(".grid-item button:first-child").on("click",function(){
            const id =  $(this).parent().attr("data-id");
            let item = {};
            products.forEach( obj => {
                if( parseInt(obj.id) === parseInt(id)){
                    item = obj;
                };
            });
            document.querySelector(".compare").innerHTML = `
                <img src="${item.img}">
                <div>
                    <p>${item.name}</p>
                    <p><b>Weight: </b>${item.details.weight}</p>
                    <p><b>Long: </b>${item.details.long}</p>
                    <p><b>Wide: </b>${item.details.wide}</p>
                    <p><b>Height: </b>${item.details.height}</p>
                </div>`
        });
    }
    /////////////////

    ExportHtml(products); // First export all <div> list of products
    document.querySelector(".menu li:first-child").addEventListener("click",function(){ExportHtml(products);});

    document.querySelectorAll("li.child li").forEach( elem =>{
        elem.addEventListener("click", function(){
            const sortBy = this.dataset.sortby;
            const value = this.dataset.value;
            const listProducts = products.filter( (obj) => {
                return obj[sortBy] === value;
            });
            ExportHtml(listProducts);
        })
    });
    
});

