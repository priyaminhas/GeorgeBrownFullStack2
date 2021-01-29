function greaterThanSize() {
    var size=getRandomInt(100);
    console.log(size);
    var counter=1;
    while (counter<size) {
        console.log("The current size is "+size+" and count is "+counter);
        counter++;
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
greaterThanSize();