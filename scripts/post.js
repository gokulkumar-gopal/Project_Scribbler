var likecount=0;
var storage = window.localStorage;

function filldetails() {
    const params = new URLSearchParams(window.location.search);
    var textid = params.get('param');
    var details = JSON.parse(storage.getItem(textid));
    console.log(details);
    document.getElementById("main-title").innerHTML = details.title;
    document.getElementById("author-name-and-icon").innerHTML = details.author;
    document.getElementById("main-text").innerHTML = details.text;
}

function typesomething() {
    console.log('I have typed something');
}

function increaselikecount() {
    likecount += 1;
    if(likecount > 1) {
        var newtext = likecount + " people like this !";
    } else {
        var newtext = likecount + " person likes this !";
    }
    document.getElementById("like-text").innerHTML = newtext;
}

function addcomments() {
    var comment_text = document.getElementById("comment-text-area").value;
    if(comment_text != "") {
        var comments_list = document.getElementById("all-comments-list");
        var newelement = document.createElement('P');
        newelement.setAttribute("class","comments-text");
        newelement.innerHTML = comment_text;
        comments_list.insertBefore(newelement, comments_list.childNodes[0]);
        document.getElementById("comment-text-area").value = "";
    }
}

function enablesave() {
    var save = document.getElementById("save");
    save.style.display = "block";
    text_element = document.getElementById("main-text");
    title_element = document.getElementById("main-title");
    text_element.contentEditable = true;
    text_element.style.border = "solid";
    text_element.style.borderColor = "blue";
    title_element.contentEditable = true;
    title_element.style.border = "solid";
    title_element.style.borderColor = "blue";
}

function enableedit() {
    var save = document.getElementById("save");
    save.style.display = "none";
    text_element = document.getElementById("main-text");
    title_element = document.getElementById("main-title");
    text_element.contentEditable = false;
    text_element.style.border = "none";
    title_element.contentEditable = false;
    title_element.style.border = "none";
}
