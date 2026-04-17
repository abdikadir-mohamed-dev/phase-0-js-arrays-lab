// Write your code here//
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
  console.log(products);
}

function updateProductName(position, newName) {
  products[position] = newName;
  console.log(products);
}

function removeLastProduct() {
  products.pop();
  console.log(products);
}

logFirstProduct();
addProduct("Tablet");
updateProductName(1, "iPhone");
removeLastProduct();



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
