var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImgInput = document.getElementById("productImg");
var productDescInput = document.getElementById("productDesc");
var allProduct = [];

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
