document.addEventListener("DOMContentLoaded", function () {
    
    // 1. HEADER-ஐ ID மூலம் இணைக்க
    const headerId = document.getElementById("profenaa-global-header");
    if (headerId) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                // முழு HTML கோப்பாக இருந்தால், அதன் body பகுதியை மட்டும் பிரித்தெடுக்கிறோம்
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const bodyContent = doc.body.innerHTML;
                
                headerId.innerHTML = bodyContent;
            })
            .catch(error => console.error("Header இணைப்பதில் பிழை:", error));
    }

    // 2. FOOTER-ஐ ID மூலம் இணைக்க
    const footerId = document.getElementById("profenaa-global-footer");
    if (footerId) {
        fetch("fotter.html")
            .then(response => response.text())
            .then(data => {
                // முழு HTML கோப்பாக இருந்தால், அதன் body பகுதியை மட்டும் பிரித்தெடுக்கிறோம்
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const bodyContent = doc.body.innerHTML;
                
                footerId.innerHTML = bodyContent;
            })
            .catch(error => console.error("Footer இணைப்பதில் பிழை:", error));
    }
});