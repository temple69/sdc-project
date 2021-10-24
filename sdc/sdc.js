let account = document.getElementById("toggle"); //functionality for dropdown strats
let info = document.getElementById("showInfo");
let cart = document.getElementById("cart");
let cartItems = document.getElementById("cartItems");
let homeToggle = document.getElementById("homeToggle");
let home = document.getElementById("home");
let shopTogggle = document.getElementById("shopToggle");
let shop = document.getElementById("shop");
let shopSubToggle = document.getElementById("shopSubToggle")
let shopSub = document.getElementById("shopSub");
let vendToggle = document.getElementById("vendToggle");
let vend = document.getElementById("vend");
let megaToggle = document.getElementById("mega");
let megaItems = document.getElementById("megaItems");
let blogToggle = document.getElementById("blogToggle");
let blog = document.getElementById("blog");
let blogSubToggle = document.getElementById("blogSubToggle")
let blogSubItem = document.getElementById("blogSubItem");
let PageToggle = document.getElementById("pagetoggle");
let page = document.getElementById("Pages");
let browse = document.getElementById("browse");
let all = document.getElementById("allToggle");
let category = document.getElementById("category");
let arrow = document.getElementById("arrow");
let nav = document.getElementById("nav");
console.log(all);
account.addEventListener("mouseover", function() {
    if (info.classList.contains("accountInfo")) {
        info.classList.remove("accountInfo")
        info.classList.add("accShow")
    }
})
account.addEventListener("mouseleave", function() {
    info.classList.add("accountInfo")
    info.classList.remove("accShow")

})
cart.addEventListener("mouseover", function() {
    cartItems.classList.remove("Cart");
    cartItems.classList.add("cartShow")
});
cart.addEventListener("mouseleave", function() {
    cartItems.classList.add("Cart");
    cartItems.classList.remove("cartShow")
});
homeToggle.addEventListener("mouseenter", function() {
    home.classList.remove("homeHide");
    home.classList.add("home");
});
homeToggle.addEventListener("mouseleave", function() {
    home.classList.add("homeHide");
    home.classList.remove("home")
});
shopTogggle.addEventListener("mouseenter", function() {
    shopSub.classList.add("shopSubItemHide");
    shop.classList.remove("ShopHide");
    shop.classList.add("Shops")
});
shopTogggle.addEventListener("mouseleave", function() {
    shop.classList.add("ShopHide");
    shop.classList.remove("Shops")
});
shopSubToggle.addEventListener("mouseenter", function() {
    shopSub.classList.remove("shopSubItemHide");
    shopSub.classList.add("shopSubItem");
});
shopSubToggle.addEventListener("mouseleave", function() {
    shopSub.classList.add("shopSubItemHide");
    shopSub.classList.remove("shopSubItem");
});
vendToggle.addEventListener("mouseenter", function() {
    vend.classList.remove("vendHide");
    vend.classList.add("Vendors")
});
vendToggle.addEventListener("mouseleave", function() {
    vend.classList.add("vendHide");
    vend.classList.remove("Vendors")
});
megaToggle.addEventListener("mouseenter", function() {
    megaItems.classList.remove("megaHide");
    megaItems.classList.add("mega")
})
megaToggle.addEventListener("mouseleave", function() {
    megaItems.classList.add("megaHide");
    megaItems.classList.remove("mega")
});
blogToggle.addEventListener("mouseenter", function() {
    blog.classList.remove("BlogHide");
    blog.classList.add("Blog")
});
blogToggle.addEventListener("mouseleave", function() {
    blog.classList.add("BlogHide");
    blog.classList.remove("Blog")
});
blogSubToggle.addEventListener("mouseenter", function() {
    blogSubItem.classList.remove("blogSubHide")
    blogSubItem.classList.add("blogSubItem")
});
blogSubToggle.addEventListener("mouseenter", function() {
    blogSubItem.classList.remove("blogSubHide")
    blogSubItem.classList.add("blogSubItem")
});
blogSubToggle.addEventListener("mouseleave", function() {
    blogSubItem.classList.add("blogSubHide")
    blogSubItem.classList.remove("blogSubItem")
});
PageToggle.addEventListener("mouseenter", function() {
    page.classList.remove("PageHide");
    page.classList.add("Pages")
})
PageToggle.addEventListener("mouseleave", function() {
    page.classList.add("PageHide");
    page.classList.remove("Pages")
});
browse.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"

    }
});
all.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"
    }
});
category.addEventListener("click", function() {
    if (nav.classList.contains("subHide")) {
        nav.classList.remove("subHide");
        nav.classList.add("subItems");
        arrow.innerHTML = "-"

    } else {
        nav.classList.add("subHide");
        nav.classList.remove("subItems");
        arrow.innerHTML = "+"

    }
});
arrow.addEventListener("click", function() {
        if (nav.classList.contains("subHide")) {
            nav.classList.remove("subHide");
            nav.classList.add("subItems");
            arrow.innerHTML = "-"

        } else {
            nav.classList.add("subHide");
            nav.classList.remove("subItems");
            arrow.innerHTML = "+"

        }
    })
    //dropdown functionality ends here
let milk = document.getElementById("milk");
let milkCount = 0;
let cloth = document.getElementById("clothing");
let clothCount = 5;
let pet = document.getElementById("pet");
let petCount = 12;
let bake = document.getElementById("bake");
let bakeCount = 38;
let fresh = document.getElementById("fresh");
let freshCount = 57;
let milkCounter = window.onload = setInterval(() => {
    milkCount++;
    milk.innerHTML = milkCount;
    if (milkCount == 30) {
        clearInterval(milkCounter);
    }
}, 100);
let clothCounter = window.onload = setInterval(() => {
    clothCount++;
    cloth.innerHTML = clothCount;
    if (clothCount == 35) {
        clearInterval(clothCounter);
    }
}, 100);
let petCounter = window.onload = setInterval(() => {
    petCount++;
    pet.innerHTML = petCount;
    if (petCount == 42) {
        clearInterval(petCounter);
    }
}, 100);
let bakeCounter = window.onload = setInterval(() => {
    bakeCount++;
    bake.innerHTML = bakeCount;
    if (clothCount == 35) {
        clearInterval(bakeCounter);
    }
}, 100);
let freshCounter = window.onload = setInterval(() => {
    freshCount++;
    fresh.innerHTML = freshCount;
    if (freshCount == 87) {
        clearInterval(freshCounter);
    }
}, 100);
let range = document.querySelectorAll("input[type='range'");
for (let iter = 0; iter < range.length; iter++) {
    range[0].addEventListener("change", function() {
        document.getElementById("low").innerHTML = `$${range[0].value}`;
    })
    range[1].addEventListener("change", function() {
        document.getElementById("high").innerHTML = `- $${range[1].value}`;
    })
}