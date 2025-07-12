const mytext = document.getElementById("text").value.trim();
const mynumber = document.getElementById("delay").value.trim();

async function display(){
	const myoutput = await new Promise(resolve => setTimeout(() => resolve(mytext),mynumber*1000));
	document.getElementById("output").appendChild(myoutput);
}

document.querySelector("form").addEventListener("submit",display());