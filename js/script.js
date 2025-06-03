var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImgInput = document.getElementById("productImg");
var productDescInput = document.getElementById("productDesc");
var allProduct = [];

//Zbon Gdid
if (localStorage.getItem("product") != null) {
  allProduct = JSON.parse(localStorage.getItem("product"));
  display();
}

function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    img: productImgInput.files[0]?.name,
    description: productDescInput.value,
  };

  allProduct.push(product);

  localStorage.setItem("product", JSON.stringify(allProduct));
  console.log(allProduct);

  display();
  clearInputs();
}

function clearInputs() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productImgInput.value = "";
  productDescInput.value = "";
}

function display() {
  var cartoona = "";
  for (var i = 0; i < allProduct.length; i++) {
    cartoona += `
    <tr>
              <td>${i + 1}</td>
              <td><img src="/imgs/${allProduct[i].img}" alt="" /></td>
              <td>${allProduct[i].name}</td>
              <td>${allProduct[i].price}</td>
              <td>${allProduct[i].category}</td>
              <td>${allProduct[i].description}</td>
              <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
            </tr>
    `;
  }
  document.getElementById("demo").innerHTML = cartoona;
}

function deleteProduct(index) {
  allProduct.splice(index, 1);
  localStorage.setItem("product", JSON.stringify(allProduct));
  display();
}