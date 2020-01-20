window.onload = initAll;

function initAll() {
    document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
    alert("请注意，即将跳出本网站!");
    window.location = this;
    return false;
}