document.getElementById('encryptForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Encrypt button clicked!');
    let text = document.getElementById('inpute').value;
    let messy = document.getElementById('keyInputEncrypt').value;
    let output = document.getElementById('outputTexte');
    let key = messy.replace(/\s/g, '');
    let encrypt = ""; let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') encrypt += ' ';
        else {
            let char = String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(j % key.length));
            encrypt += btoa(char);
            j++;
        }
    }
    navigator.clipboard.writeText(encrypt);
    output.textContent = encrypt;
    const tab = document.createElement('div');
    tab.textContent = "Copied to clipboard";
    tab.style.position = 'fixed';
    tab.style.right = "1vw";
    tab.style.top = "5vw";
    tab.style.backgroundColor = "#8aff7e";
    tab.style.color = "black";
    tab.style.padding = "10px 20px";
    tab.style.borderRadius = "8px";
    tab.style.fontFamily = "'Orbitron', monospace";
    tab.style.fontWeight = "600";
    tab.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    tab.style.zIndex = "999";
    document.body.appendChild(tab);
    setTimeout(() => {
        tab.remove();
    }, 3000);

});
document.getElementById('decryptForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Decrypt button clicked!');
    let text = document.getElementById('inputd').value;
    let messy = document.getElementById('keyInputDecrypt').value;
    let output = document.getElementById('outputTextd');
    let key = messy.replace(/\s/g, '');
    let decrypt = "", j = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            decrypt += ' ';
        }
        else {
            let char = text[i] + text[i + 1] + text[i + 2] + text[i + 3];  
            let decoded = atob(char);
            let decryptedChar = String.fromCharCode(decoded.charCodeAt(0) ^ key.charCodeAt(j % key.length));
            decrypt += decryptedChar;
            i+=3;
            j++;
        }
    }
    output.textContent = decrypt;
});

