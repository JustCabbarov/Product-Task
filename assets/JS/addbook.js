const form = document.querySelector("#productForm")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const title = document.querySelector("#title").value
    const count = document.querySelector("#count").value
    const price = document.querySelector("#price").value
    const category = document.querySelector("#category").value

 

    const newProduct = {
        title,
        price,
        count,
        category

    }
    

    if (title && price && count && category) {
        axios.post(`https://fakestoreapi.com/products`, newProduct).then((res) => {
            form.reset()
        }).catch((err) => {
            console.log(err);

        })
    } else {
        alert("Fill All Imputs")
    }

})