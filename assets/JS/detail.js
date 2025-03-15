let detailproduct=document.querySelector(("#detailproduct"))
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
axios(` https://fakestoreapi.com/products/${id}`).then((res)=>{
    console.log(res);
    
    detailproduct.innerHTML +=

    `    
    <h1> ${res.data.title}</h1>
     <div id="detailcard">
    <div>
    <img id="img" src="${res.data.image}" alt="">
    </div>
             <div style="margin-left:30px; font-size:20px">
        <p>Price: ${res.data.price}</p>
        <p>Description: ${res.data.description}</p>
        <p>Category: ${res.data.category}</p>
        <p>Count: ${res.data.rating.count}</p>
          <a href="./products-list.html" class="btn btn-dark">Go Back</a>
           </div>
           </div>
       
    `
})
