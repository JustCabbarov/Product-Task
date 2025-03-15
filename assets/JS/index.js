
let containerlist=document.querySelector("#productlist")
axios(`https://fakestoreapi.com/products`).then((res)=>{
   res.data.forEach(element => {
       containerlist.innerHTML +=
       `<table class="table table-bordered text-center">
        <thead class="table-success text-white">
            <tr>
                <th>Product ID</th>
                <th>Product Title</th>
                <th>Product Count</th>
                <th>Product Price</th>
                <th>Product Category</th>
                <th>Detail</th>
                <th>Edit Product</th>
                <th>Delete Product</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.rating.count}</td>
                <td>${element.price}</td>
                <td>${element.category}</td>
                
              
                <td "><a href="detail.html?id=${element.id}"  class="btn btn-primary detail " style="margin-top: 25px">Link to Products</a></td>
              <td style="padding-top: 30px;"><button class="btn btn-danger deletebtn" data-id="${element.id}">Delete</button></td>

                <td style="padding-top: 0px"><a href="update.html?id=${element.id }" class="btn btn-success update">Update</a></td>
            </tr>
        </tbody>
    </table>
</div>
       `
       
       
   });
})


let btnDelete = document.querySelectorAll(".deletebtn");

btnDelete.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        let id = btn.getAttribute("data-id");
        DeleteData(id, btn);
    });
});

function DeleteData(id, deleteBtn) {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
           
            deleteBtn.closest("tr").remove();
        })
        .catch((err) => {
            console.error( err);
        });
}







