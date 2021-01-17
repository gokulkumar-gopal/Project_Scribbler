function closemodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "none";
}

function openmodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "block";
}

function invalidInput(input) {
    if(input.value == '') {
        input.setCustomValidity('Please fill out this field');
    }
}

function removelocalstorage() {
    storage = window.localStorage;
    storage.removeItem('text1');
    storage.removeItem('text2');
    storage.removeItem('text3');
    storage.removeItem('text4');
    storage.removeItem('text5');
}
