function getDOMElements(){
   
    let elements=document.getElementsByClassName("item");
    console.log(elements);
    let highlightElement=document.getElementsByClassName("item highlight");
    console.log(highlightElement);
    const readBtnItem= document.getElementsByName("readBtn");
    console.log(readBtnItem);
    let h1Elements=document.getElementsByTagName("h1");
    console.log(h1Elements);
    let h2Elements=document.getElementsByTagName("h2");
    console.log(h2Elements);
    setTimeout(function(){
        const menuId=document.getElementById("menu");
        console.log(menuId);
    },2000);
   
}
getDOMElements();