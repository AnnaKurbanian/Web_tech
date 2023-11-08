const node_for_click = document.getElementsByClassName("block4")[0]

function find_edit(){

    const secondName = document.getElementsByClassName('block4')[0]
    console.log(secondName.innerText)
    secondName.innerText = 'Kurbanian'
}

node_for_click.addEventListener("click", find_edit);


const node_for_click_1 = document.getElementsByClassName("block5")[0]

function find_edit_1(){

    const Name = document.getElementsByClassName("block5")[0]
    console.log(Name.innerText)
    Name.innerText = 'Anna'
}

node_for_click_1.addEventListener("click", find_edit_1);

const node_for_click_2 = document.getElementsByClassName("block6")[0]

function find_edit_2(){

    const fathername = document.getElementsByClassName("block6")[0]
    console.log(fathername.innerText)
    fathername.innerText = 'Artyomovna'
}

node_for_click_2.addEventListener("click", find_edit_2);


const node_for_click_3 = document.getElementsByClassName("block7")[0]

function find_edit_3(){

    const sex = document.getElementsByClassName("block7")[0]
    console.log(sex.innerText)
    sex.innerText = 'female'
}

node_for_click_3.addEventListener("click", find_edit_3);


const node_for_click_4 = document.getElementsByClassName("block9")[0]

function find_edit_4(){

    const city = document.getElementsByClassName("block9")[0]
    console.log(city.innerText)
    city.innerText = 'Moscow'
}

node_for_click_4.addEventListener("click", find_edit_4);