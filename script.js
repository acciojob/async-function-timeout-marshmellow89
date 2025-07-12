const mytext = document.getElementById("text").value.trim();
const mynumber = document.getElementById("delay").value.trim();

async function display(){
	const myoutput = await new promise(resolve => setTimeout(() => resolve(mytext),mynumber));
	document.getElementById("output").appendchild(myoutput);
}

document.querySelector("form").addEventListener("submit",display());