window.onload = initAll;

function initAll() {
    document.getElementById("Lincoln").onclick = saySomething;
    document.getElementById("Kennedy").onclick = saySomething;
    document.getElementById("Nixon").onclick = saySomething;
}

function saySomething() {
    switch(this.id){
        case "Lincoln":
            alert("Four score and seven years ago...");
            break;
        case "Kennedy":
            alert("你的国家可以为你做什么");
            break;
        case "Nixon":
            alert("我是一个厨师");
            break;
    }
}