let MesProduits = [
  {
    name: "Focal Clear Headphones",
    description: "The best detail",
    price: 790,
    quantity: 1,
    image: "https://headphones.com/cdn/shop/products/72b00a38-3ee9-40db-9211-d4687f2866b2.png?v=1707787325&width=360",
  },
  {
    name: "Focal Celestee High-End Headphones",
    description: "Elegant design",
    price: 567,
    quantity: 1,
    image: "https://headphones.com/cdn/shop/products/Celestee11024x1024.jpg?v=1707787769&width=360",
  },

  {
    name: "Focal Radiance Headphones ",
    description: "Limited Edition",
    price: 890,
    quantity: 1,
    image: "https://headphones.com/cdn/shop/products/FocalRadiance61024x1024color.jpg?v=1707787660&width=360",
  },

  {
    name: "Focal Stellia Headphones",
    description: "BEAUTIFUL, INSIDE AND OUT",
    price: 1500,
    quantity: 1,
    image: "https://headphones.com/cdn/shop/products/Stellia_1_1024x1024_d1a97a22-004b-4139-8b7f-b2f6a92c14c5.jpg?v=1707787412&width=360",
  },
];


let CartGeneral = document.getElementById("Cart");

MesProduits.forEach((item) => {
  let divProduct = document.createElement("div");
  divProduct.classList.add("card", 'mt-2');
  divProduct.style.width = '18rem'

  let NameProduct = document.createElement("h3");
  NameProduct.innerHTML = item.name;
  divProduct.appendChild(NameProduct);

  let ImageProduct = document.createElement('img')
  ImageProduct.classList.add('card-img-top')
  ImageProduct.src = item.image
  divProduct.appendChild(ImageProduct);


  let QuantityElement = document.createElement("span");
  QuantityElement.textContent = "Quantité : " + item.quantity;
  divProduct.appendChild(QuantityElement);

  let increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  increaseButton.addEventListener("click", () => {
    item.quantity++;
    QuantityElement.textContent = "Quantité : " + item.quantity;
    updateTotalPrice()
  });
  divProduct.appendChild(increaseButton);

  let decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  decreaseButton.addEventListener("click", (e) => {
    if (item.quantity === 1) {
      e.preventDefault;
    } else {
      item.quantity--;
      QuantityElement.textContent = "Quantité : " + item.quantity;
    }
    updateTotalPrice()
  });
  divProduct.appendChild(decreaseButton);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    CartGeneral.removeChild(divProduct);
    MesProduits = MesProduits.filter((i) => {
      return i !== item;
    });
    updateTotalPrice()
  });
  divProduct.appendChild(deleteButton);

  item.isLiked = false;

  let LikeButton = document.createElement("button");
  LikeButton.textContent = "🖤";
  LikeButton.addEventListener("click", () => {
    if (item.isLiked) {
      LikeButton.textContent = "💚";
      item.isLiked = !item.isLiked;
    } else {
      LikeButton.textContent = "❤️";
      item.isLiked = !item.isLiked;
    }
  });
  divProduct.appendChild(LikeButton);
  
  
  CartGeneral.appendChild(divProduct);
});


 
function updateTotalPrice() {
  let TotalPrice = MesProduits.reduce(
    (total, currentValue) => total + currentValue.price * currentValue.quantity,
    0
  );
  let TotalPriceElement = document.getElementById("TotalPrice");
  TotalPriceElement.textContent = "Total Price : $" + TotalPrice;
}

updateTotalPrice()


