var productcontainerEle = document.getElementById("pro-container");


let containerProducts = document.getElementById("pro-container")

//Using Async/Await
async function loadProducts(){
    try {
      //Fetch the Data
      let productsData = await fetch('https://fakestoreapi.com/products');
      let productData= await productsData.json();
      
      //Display the Data in the UI
      displayProductData(productData)
        
      }catch (err) {
        console.log("Something went wrong!", err)
      
      } 
    }
    loadProducts()

    
    function displayProductData(productData) {
      let productEleli = productData.map(product =>  `<div onclick="populatePopup(id)" id="${product.id}" class="pro">
        <img src="${product.image}" alt="">
        <div class="description">
            <div class="cart">
                <h4>$ ${product.price}</h4>
                <div class="yello">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
                </div>
                <span class="category">${product.category}</span>
                <h5>${product.title}</h5>
                <button>Add To Cart</button>
            
        </div>
    </div>`              
    );
    containerProducts.innerHTML=productEleli;
    }



//DISPLAY PRODUCT ON CLICK
  //Display product details functionality when clicked
  let productPopUp = document.getElementById("popup");
  
  let preventClick = document.getElementById("prevent");
  
  //select all product element
  let productEle = document.querySelectorAll(".pro");


//The product Template when clicked
// Using async/await to populatePopup
async function populatePopup(id){
  let productsData = await fetch('https://fakestoreapi.com/products');
  let productData= await productsData.json();
 
 
  let targetProduct = productData.find((pro) =>pro.id === parseInt(id));

  let productPopupDetail = `
          <img src=${targetProduct.image} alt="">
          <div class="details">
          <button id="btn"><i class="fa-solid fa-xmark"></i></button>
          <h4>${targetProduct.title}</h4>
          <h6>${targetProduct.category}</h6>
          <p>${targetProduct.description}</p>
          <span>Price: $${targetProduct.price}</span>
          <button onclick="addToCart()" id="
          disappear" class="btn">Add To Cart</button>
          <div class="increament">
          <button onclick="decreament()"><i class="fa-solid fa-minus"></i></button>
          <button id="itemQuantity">1</button>
          <button onclick="increament()"><i class="fa-solid fa-plus"></i></button>
        </div>
        </div>`
                  
//Show the clicked product
productPopUp.innerHTML = productPopupDetail;
preventClick.classList.remove("inactive");

//Close the popup
let closeBtn = document.getElementById("btn");

closeBtn.addEventListener("click", function(){
  preventClick.classList.add("inactive");
})


}



   //make the AddToCart button dessapear after getting clicked
   let btnDisappear= document.getElementsByClassName("btn");


  //Add 1 to the cart when add to cart is clicked
  let count = 0;
  let toCart=document.getElementById("quantityDisplay");

  function addToCart(){
    count++;
    toCart.innerText = count;
    btnDisappear.classList.add("remove")
  }

 
//Increament by one each time the + button is clicked

let quantityDisplay = document.getElementById("quantityDisplay");
let number = document.getElementById("itemQuantity");

function increament(){
  count++;
  quantityDisplay.innerText = count;
  number.innerText = count;

  
  console.log(number)
}

//Decreasing the number by one each time 



function decreament(){
  count--;
  quantityDisplay.innerText = count;
  number.innerText = count;
  console.log(number)
}


































































































































































































































  







