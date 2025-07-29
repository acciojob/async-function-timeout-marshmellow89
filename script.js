async function display() {
  const mytext = document.getElementById('text').value.trim();
  const mynumber = document.getElementById('delay').value.trim();

  const myoutput = await new Promise(resolve => 
    setTimeout(() => resolve(mytext), mynumber * 1000)
  );


	const mydiv = document.getElementById('output');
	mydiv.textContent = myoutput;
	mydiv.appendChild(mydiv);
}

document.querySelector("#btn").addEventListener("click", function(e) {
  e.preventDefault();
  display();
});
