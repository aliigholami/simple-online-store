const main=document.getElementById('main')
const searchbar=document.querySelector('.searchbar')
let data=[]
fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then((json)=>{
    json.forEach(addToDom);
    data=json
    //console.log(data)
})
searchbar.addEventListener('input', () => {
    main.innerHTML = '';
    const filteredData = data.filter((product) => {
        return product.title.toLowerCase().includes(searchbar.value.toLowerCase());
    });
    filteredData.forEach(addToDom);
});
function addToDom(element){
    let div=document.createElement('div')
    let img=document.createElement('img')
    let div2=document.createElement('div')
    div2.innerHTML=
    `<h6 style='padding-left:40%'>${element.title}</h6>
    <p style='padding-left:40%'>${element.price+'$'}</p>`
    div.classList.add('box')
    div2.classList.add('box2')
    img.setAttribute('src',element.image)
    div.appendChild(img)
    div.appendChild(div2)
    main.appendChild(div) 
}