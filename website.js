const btn = document.getElementsByClassName("for-dropdown")[0],
      dropdown = document.getElementsByClassName("dropdown")[0];

function check() {
    if (dropdown.classList.contains("dropdown-active")) {
    dropdown.classList.remove("dropdown-active")

    }else{
    dropdown.classList.add("dropdown-active")
    }
}

btn.addEventListener("click", check);



