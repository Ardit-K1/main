function search() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent.trim();
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "list-item"; // Correct display value
        } else {
            li[i].style.display = "none";
        }
    }
}