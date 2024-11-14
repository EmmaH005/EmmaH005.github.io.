




// Dynamic Greeting Button
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    greeting();
    console.log("button clicked");
});

const greeting = () => {
    if (d.getHours() <= 11) {
        alert(`Good morning!`);
    } else if (d.getHours() < 18) {
        alert(`Good afternoon!`);
    } else {
        alert(`Good evening!`);
    }
}

// dynamic year
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.innerText = d.getFullYear();

console.log(d);


