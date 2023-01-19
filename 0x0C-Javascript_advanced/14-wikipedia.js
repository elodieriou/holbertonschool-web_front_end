function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data;
    document.body.appendChild(paragraph);    
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhr.send();
    xhr.onload = function () {
        const response = JSON.parse(xhr.response);
        const key = Object.keys(response.query.pages)[0];
        const extract = response.query.pages[key].extract;
        callback(extract);
    }
    xhr.onerror = function () {
        alert("Request failed");
    }
}
queryWikipedia(createElement);
