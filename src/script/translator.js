

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

function allowSubmit() {
    let xmlFile = document.querySelector('#xmlFile');
    let submit_button = document.querySelector('#submit_button');

    //checks xml file is uploaded
    if(xmlFile.value !== "") {
        console.log(submit_button);
        submit_button.disabled = false;
        submit_button.style.backgroundColor ="#6495ED";
        submit_button.style.color ="#e3e3e3";
    }
}

function allowView() {
    console.log("click");
    let view_button = document.querySelector('#view_button');
    view_button.disabled = false;
    view_button.style.backgroundColor ="#000000";
    view_button.style.color ="#ffffff";
}


function initializeColor() {
    let submit_button = document.querySelector('#submit_button');
    let view_button = document.querySelector('#view_button');
    submit_button.disabled = true;
    submit_button.style.backgroundColor ="#2f3c59";
    submit_button.style.color ="#9a9a9a";
    view_button.disabled = true;
    view_button.style.backgroundColor ="#252222";
    view_button.style.color ="#8d8d8d";
}

initializeColor();
