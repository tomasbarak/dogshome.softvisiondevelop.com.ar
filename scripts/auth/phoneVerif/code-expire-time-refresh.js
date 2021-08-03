function interval(){
    var t = sessionStorage.getItem('');
    setInterval(function(){
        document.getElementById("testdiv").innerHTML=t++;
    },1000);
}