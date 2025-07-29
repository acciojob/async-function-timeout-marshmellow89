// async function display() {
//   const mytext = document.getElementById("text").value.trim();
//   const mynumber = document.getElementById("delay").value.trim();

//   const myoutput = await new Promise(resolve => 
//     setTimeout(() => resolve(mytext), mynumber*1000)
//   );


// 	const mydiv = document.getElementById("output");
// 	mydiv.textContent = myoutput;
// 	mydiv.appendChild(myoutput);
// }

// document.querySelector("#btn").addEventListener("click", function(e) {
//   e.preventDefault();
//   display();
// });


async function display() {
  const mytext = document.getElementById("text").value.trim();
  const mynumber = Number(document.getElementById("delay").value.trim());

  // Delay using Promise
  await new Promise(resolve => setTimeout(resolve, mynumber));

  // Set output text
  const mydiv = document.getElementById("output");
  mydiv.textContent = mytext;
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  display();
});

