




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


const body = document.querySelector('body');
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  body.style.backgroundColor = 'lightblue';
} else if (hour < 18) {
  body.style.backgroundColor = 'orange';
} else {
  body.style.backgroundColor = 'black';
}

