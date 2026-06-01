// =====================
// DIOR PERFUME STORE
// Nguyễn Ngọc Thiên Ân
// DH52300107
// =====================

// THÊM VÀO GIỎ HÀNG

function addToCart(name, price, image){

```
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
    name: name,
    price: price,
    image: image,
    quantity: 1
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Đã thêm vào giỏ hàng!");
```

}

// SCROLL TOP

window.addEventListener("scroll", function(){

```
let btn = document.getElementById("backToTop");

if(btn){

    if(window.scrollY > 300){

        btn.style.display = "block";

    }else{

        btn.style.display = "none";

    }

}
```

});

function scrollToTop(){

```
window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

}
