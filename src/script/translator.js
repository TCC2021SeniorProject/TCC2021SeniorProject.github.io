function addRow () {
    let rows = document.querySelectorAll('.execFile');
    if (rows.length < 10) {
        document.querySelector('.button_wrapper').insertAdjacentHTML(
            "beforebegin",
            `<label for="lname" class="execLabel">Executable python file (optional)
                    <input type="file" class="execFile" name="execFile" accept="py, txt">
                    <br>
                    <br>
                  </label>`
        )
    } else {
        alert("Too many files");
    }
}

function removeRow () {
    let exec_labels = document.querySelectorAll('.execLabel');

    if (exec_labels.length > 1) {
        exec_labels[exec_labels.length - 1].remove();
    }
}

