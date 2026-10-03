/* ================================
   BLITHE SYNDICATE — STORE SYSTEM
================================ */

let cartCount = 0;
let quantity = 1;

let selectedColour = "";
let selectedSize = "";

const products = {

    dominion: {
        name: "BLITHE DOMINION HOODIE",
        price: 2200,

        description:
            "The Blithe Dominion Hoodie. A statement piece from the new era of Blithe Syndicate.",

        colours: {
            WHITE: "images/hoodie-white.png",
            BLUE: "images/hoodie-blue.png",
            GREY: "images/hoodie-grey.png",
            PINK: "images/hoodie-pink.png",
            BLACK: "images/hoodie-black.png"
        },

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    },

    crop: {
        name: "MAKE LOVE NOT WAR CROP TOP",
        price: 700,

        description:
            "Make Love Not War. A Blithe Syndicate statement piece.",

        colours: {
            WHITE: "Canva AI Image 2 Oct 2026, 14_56_34_20261002_151059_0000.jpg"
        },

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ]
    }

};


/* ================================
   OPEN PRODUCT
================================ */

function openProduct(productId) {

    const product = products[productId];

    if (!product) return;

    document.querySelector(".shop").style.display = "none";
    document.querySelector(".collection").style.display = "none";
    document.querySelector(".hero").style.display = "none";

    const productPage =
        document.getElementById("product-page");

    productPage.classList.add("active");

    document.getElementById("product-name").textContent =
        product.name;

    document.getElementById("product-price").textContent =
        `KES ${product.price.toLocaleString()}`;

    document.getElementById("product-description").textContent =
        product.description;


    /* RESET */

    quantity = 1;
    selectedColour = "";
    selectedSize = "";

    document.getElementById("quantity").textContent =
        quantity;


    /* MAIN IMAGE */

    const firstColour =
        Object.keys(product.colours)[0];

    document.getElementById("product-main-image").src =
        product.colours[firstColour];


    /* COLOURS */

    const colourContainer =
        document.getElementById("colour-options");

    colourContainer.innerHTML = "";

    Object.keys(product.colours).forEach(colour => {

        const button =
            document.createElement("button");

        button.textContent = colour;

        button.onclick = () => {

            selectedColour = colour;

            document
                .querySelectorAll("#colour-options button")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");

            document.getElementById(
                "product-main-image"
            ).src = product.colours[colour];

        };

        colourContainer.appendChild(button);

    });


    /* SIZES */

    const sizeContainer =
        document.getElementById("size-options");

    sizeContainer.innerHTML = "";

    product.sizes.forEach(size => {

        const button =
            document.createElement("button");

        button.textContent = size;

        button.onclick = () => {

            selectedSize = size;

            document
                .querySelectorAll("#size-options button")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");

        };

        sizeContainer.appendChild(button);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================
   CLOSE PRODUCT
================================ */

function closeProduct() {

    document
        .getElementById("product-page")
        .classList.remove("active");

    document.querySelector(".shop").style.display = "";
    document.querySelector(".collection").style.display = "";
    document.querySelector(".hero").style.display = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================
   QUANTITY
================================ */

function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    document.getElementById("quantity").textContent =
        quantity;

}


/* ================================
   ADD TO CART
================================ */

function addToCart() {

    if (!selectedColour) {

        alert("Please select a colour.");

        return;
    }

    if (!selectedSize) {

        alert("Please select a size.");

        return;
    }


    cartCount += quantity;

    document.getElementById("cart-count").textContent =
        cartCount;


    alert(
        `Added to cart!\n\nColour: ${selectedColour}\nSize: ${selectedSize}\nQuantity: ${quantity}`
    );

       }
