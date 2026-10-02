// BLITHE SYNDICATE
// Website interactions

let cartCount = 0;

const cart = document.querySelector(".cart");
const buttons = document.querySelectorAll(".product");

buttons.forEach((product) => {
    product.addEventListener("click", () => {
        cartCount++;
        cart.textContent = `CART (${cartCount})`;

        product.style.transform = "scale(0.98)";

        setTimeout(() => {
            product.style.transform = "scale(1)";
        }, 150);
    });
});


// Smooth entrance animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});