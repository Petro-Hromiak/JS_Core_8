// Task 2

let f1 = document.forms[0];

f1.elements[6].addEventListener(`click`, function () {
    if (f1.elements[6].checked) {
                document.querySelector(`.signup`).removeAttribute(`disabled`)
    }
    else { document.querySelector(`.signup`).setAttribute(`disabled`) }
})

document.querySelector(`.form`).addEventListener(`submit`, function () {
    document.querySelector(`.name`).innerHTML = f1.elements[0].value + " " + f1.elements[1].value;
    document.querySelector(`.email`).innerHTML = f1.elements[2].value;
    for (let i = 0; i < f1.elements[5].options.length; i++) {
        if (f1.elements[5].options[i].selected) {
            document.querySelector(`.position`).innerHTML = f1.elements[5].options[i].value;
        }
        if (f1.elements[4].checked) {
            document.querySelector(`.photo`).setAttribute(`src`, `./image/women.png`)
        }
    }
           document.querySelector(`.greate`).style.display = `none`;
        document.querySelector(`.account`).style.display = `block`;
    event.preventDefault();
    })

