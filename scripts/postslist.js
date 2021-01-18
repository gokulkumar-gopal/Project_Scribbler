var selectedmodal;
function closemodal_postlist(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "none";
    selectedmodal = null;
}

function openmodal_postlist(element, curr_ref) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "block";
    selectedmodal = curr_ref.parentNode.parentNode;
    console.log(selectedmodal.innerHTML);
}

function invalidInput(input) {
    if(input.value == '') {
        input.setCustomValidity('Please fill out this field');
    }
}

function deletedata() {
    if(selectedmodal != null) {
        selectedmodal.parentNode.remove();
    }
    selectedmodal = null;
}

function parsefulltext(element,textid) {
    var storage = window.localStorage;
    if(storage.getItem(textid) === null) {
        var parser = new DOMParser();
        var doc = element.parentNode.parentNode.innerHTML;
        var temp = parser.parseFromString(doc, "text/html");
        var title = temp.getElementsByClassName("text-title")[0].innerHTML;
        var author = temp.getElementsByClassName("author-name-text")[0].innerHTML;
        var text = temp.getElementsByClassName("text-small")[0].innerHTML;
        console.log(title);
        console.log(author);
        console.log(text);
        var obj = {"author":author, "title":title, "text":text};
        storage.setItem(textid,JSON.stringify(obj));
        console.log(storage.getItem(textid));
    } else {
        console.log('havent dont anything');
    }
}

function openpostpage(textid) {
    var url = "post.html?param="+textid;
    window.open(url);
}