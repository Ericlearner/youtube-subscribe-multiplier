const myBtn = document.getElementById("myBtn")

myBtn.addEventListener("click", function(e) {
    console.log(e)
})

var x =0;
function count(){
    x=x+1;
    document.getElementById('count').value=x;
}
