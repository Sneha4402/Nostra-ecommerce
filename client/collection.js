var productContainer=document.getElementById("product")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    for( var count=0;count<productList.length;count=count+1)
    {
        var productname=productList[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})

