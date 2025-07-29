async function display() {
  const mytext = document.getElementById("text").value.trim();
  const mynumber = document.getElementById("delay").valueAsNumber();

  await new Promise(resolve => 
    setTimeout(resolve, mynumber)
  );


	const mydiv = document.getElementById("output");
	mydiv.textContent = mytext;
	
}

document.querySelector("#btn").addEventListener("click", function(e) {
  e.preventDefault();
  display();
});


// async function display() {
//   const mytext = document.getElementById("text").value.trim();
//   const mynumber = Number(document.getElementById("delay").value.trim());

//   // Delay using Promise
//   await new Promise(resolve => setTimeout(resolve, mynumber));

//   // Set output text
//   const mydiv = document.getElementById("output");
//   mydiv.textContent = mytext;
// }

// document.getElementById("btn").addEventListener("click", function (e) {
//   e.preventDefault();
//   display();
// });

