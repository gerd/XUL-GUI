function onOK() {
    var text = document.getElementById("username").value;
    alert(document.getElementById("host").value + ':' +
        text + ':' +
        document.getElementById("password").value);

    // the XMLHttpRequest do not work over SSL
}
