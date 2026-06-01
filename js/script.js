// ======================
// DIOR PERFUME STORE
// Nguyễn Ngọc Thiên Ân
// DH52300107
// ======================


// THÔNG BÁO THÊM GIỎ HÀNG

function addToCart(productName) {
    alert(productName + " đã được thêm vào giỏ hàng!");
}



// ĐĂNG NHẬP

const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.querySelector("#loginEmail").value;
        const password = document.querySelector("#loginPassword").value;

        if (email === "" || password === "") {

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;
        }

        alert("Đăng nhập thành công!");

    });

}



// ĐĂNG KÝ

const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullname = document.querySelector("#fullname").value;
        const email = document.querySelector("#registerEmail").value;
        const password = document.querySelector("#registerPassword").value;
        const repassword = document.querySelector("#repassword").value;

        if (
            fullname === "" ||
            email === "" ||
            password === "" ||
            repassword === ""
        ) {

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;
        }

        if (password !== repassword) {

            alert("Mật khẩu không khớp!");

            return;
        }

        alert("Đăng ký thành công!");

    });

}



// THANH TOÁN

const checkoutBtn = document.querySelector("#checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function () {

        alert("Đặt hàng thành công!\nCảm ơn bạn đã mua sắm tại Dior Perfume Store.");

    });

}



// TÌM KIẾM

function searchProduct() {

    let keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    if (keyword === "") {

        alert("Vui lòng nhập tên sản phẩm!");

        return;
    }

    alert("Kết quả tìm kiếm cho: " + keyword);

}



// SCROLL TO TOP

window.addEventListener("scroll", function () {

    let btn = document.getElementById("backToTop");

    if (!btn) return;

    if (window.scrollY > 300) {

        btn.style.display = "block";

    } else {

        btn.style.display = "none";

    }

});



function scrollToTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}



// HIỆU ỨNG LOAD TRANG

window.onload = function () {

    console.log("Dior Perfume Store Loaded");

};

function addToCart(name, price, image){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name:name,
        price:price,
        image:image,
        quantity:1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Đã thêm vào giỏ hàng!");
}