var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImgInput = document.getElementById("productImg");
var productDescInput = document.getElementById("productDesc");
var allProduct;

//Zbon Gdid
if (localStorage.getItem("product") == null){
  allProduct = [];
} else {
  //Zbon adim leh data
  allProduct = JSON.parse(localStorage.getItem('product'));
  display();
}

function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    img: productImgInput.value,
    description: productDescInput.value,
  };

  allProduct.push(product);

  console.log(allProduct);

  display()
  // clearInputs();
  localStorage.setItem('product' , JSON.stringify(allProduct))
}
  
function clearInputs() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productImgInput.value = "";
  productDescInput.value = "";
}

function display() {
  var cartoona = ""
  for (var i = 0; i < allProduct.length; i++) {
    cartoona += `
    <tr>
              <td>${i + 1}</td>
              <td><img src="${allProduct[i].img}" alt="" /></td>
              <td>${allProduct[i].name}</td>
              <td>${allProduct[i].price}</td>
              <td>${allProduct[i].category}</td>
              <td>${allProduct[i].description}</td>
            </tr>
    `;
  }
  document.getElementById("demo").innerHTML = cartoona
}
