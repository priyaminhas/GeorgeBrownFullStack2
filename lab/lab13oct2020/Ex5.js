function getDOMElements(){
    const menuId=document.querySelector("#menu");
    console.log(menuId);
    let elements=document.querySelectorAll(".item");
    console.log(elements);
    let highlightElement=document.querySelector(".item.highlight");
    console.log(highlightElement);
    const readBtnItem= document.querySelectorAll("button[name='readBtn']");
    console.log(readBtnItem);
    let h1Elements=document.querySelectorAll("h1");
    console.log(h1Elements);
    let h2Elements=document.querySelectorAll("h2");
    console.log(h2Elements);
  
   
}
getDOMElements();