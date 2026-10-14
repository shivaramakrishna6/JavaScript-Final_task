let products="https://fakestoreapi.com/products/"

fetch(products).then((api)=>{
    return api.json()
})
.then((item)=>{
    let Final=document.querySelector(".final")
    item.forEach(element => {
        let div=document.createElement("div")
        div.innerHTML=`<h1>${element.title.slice(0,20)}</h1> <h2>${element.category}</h2> <img src="${element.image}" /> <p>${element.description.slice(0,120)}</p>`
        Final.append(div)
    });
})
.catch((dataError)=>{
    // final.innerHTML=dataError
    let Error=document.querySelector(".final")
    Error.textContent=`Products could not be loaded: ${dataError.message}`
    Error.style.color="red"
})
.finally(()=>{
    console.log("Api called")
})