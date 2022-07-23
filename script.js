document.getElementById("btn").addEventListener("click",thanks);
let cont = document.getElementById("container");
let result = document.querySelector(".rating-number");

function thanks() {
        let selected = document.querySelector("input[name='rate']:checked");
        result.textContent="You selected "+selected.value+" out of 5";
        cont.classList.add("show");
}
