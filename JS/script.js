

console.log("Hello world!");


// Dynamic Button
const btn = document.getElementById("btn");

btn.addEventListener("mouseover", function() {
    this.textContent = "Click!";
  })
  btn.addEventListener("mouseout", function() {
    this.textContent = "Hi, I'm Emma.";
  })

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
const d = new Date(2024);


console.log(d); 

// list: Couldn't figure out how to populate list

for (let i =1; i<12, i++;) {
    const li=
    document.createElement("li");
    if (i % 2 ===0) {
 li.textContent = "even";
    }
    else{
 li.textContent = "odd"
    }

    
    document.getElementById('number').appendChild}
