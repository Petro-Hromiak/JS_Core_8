// Task 1


let f1 = document.forms[0];

f1.elements[1].addEventListener(`click`, function () {
    if (f1.elements[0].value != ``) {
        f1.elements[2].value = f1.elements[0].value
        f1.elements[0].value = ``;
    }

})

let f2 = document.forms[1];
f2.elements[0].addEventListener(`blur`, function () {
    if (f2.elements[0].value != ``) {
        f2.elements[0].placeholder = f2.elements[0].value
        f2.elements[0].value = ``;
    }

})
