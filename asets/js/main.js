async function getProduct() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const products = await response.json();
    const data=products.recipes;
    console.log(data);

    const result = data.map(function (product) {
        return `
        <div class='product'>
          <h2>${product.title}</h2>
          <img src='${product.image_url}'/>
        </div>
         `;
    }).join('');
    document.querySelector(".products .row").innerHTML=result;
}

getProduct();