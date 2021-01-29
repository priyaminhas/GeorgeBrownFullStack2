
const colors = ['red','green','blue'];
const capitalizedColors = colors.map(x =>
    x.charAt(0).toUpperCase()+x.substr(1).toLowerCase()
);
console.log(capitalizedColors)