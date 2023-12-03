function apiCall(stnum) {

    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=a${stnum}`
}

function makeQr() {

    let stnum1 = document.getElementById('qr-text1').value;
    let stnum2 = document.getElementById('qr-text2').value;
    let stnum3 = document.getElementById('qr-text3').value;
    let stnum4 = document.getElementById('qr-text4').value;

    if (stnum1.length != 0) {

        document.getElementById('img1').src = apiCall(stnum1);
    }
    if (stnum2.length != 0) {

        document.getElementById('img2').src = apiCall(stnum2);
    }
    if (stnum3.length != 0) {

        document.getElementById('img3').src = apiCall(stnum3);
    }
    if (stnum4.length != 0) {

        document.getElementById('img4').src = apiCall(stnum4);
    }
}
