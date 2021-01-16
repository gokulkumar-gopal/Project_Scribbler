var selectedmodal;
function closemodal(element) {
    var modal_to_close = document.getElementById(element);
    modal_to_close.style.display = "none";
    selectedmodal = null;
}

function openmodal(element, curr_ref) {
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