var productcontainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = document.querySelector("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUppercase()

    for (count=0;count<productlist.clientHeight;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productlist.toUppercase().indexOf(enteredvalue)<0)
            {productlist[count].style.display="none"

            }
            else{
                productlist[count].style.display="block"
            }
    }
})