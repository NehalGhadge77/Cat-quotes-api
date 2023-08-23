

h1 = document.querySelector("h1");
btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let url = "https://catfact.ninja/fact";
    fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        let fact = data.fact;
        h1.innerHTML = fact; // Corrected this line
    });
});




