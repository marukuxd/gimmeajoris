const pre = ["jo", "bo", "ro", "zo", "to",];
var suf = ["tis", "bis", "jis", "dis", "tis", "techtv"];
const lol = document.getElementById("anal");
var db = new PouchDB('presuf');



function joris() {
    var a = Math.floor(Math.random() * Math.floor(pre.length));
    var b = Math.floor(Math.random() * Math.floor(suf.length));
    lol.innerHTML = pre[a] + suf[b];
    return pre[a] + suf[b];
    
}



joris();