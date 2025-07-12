
async function display(){
	const mytext = document.getElementById("text").value.trim();
const mynumber = document.getElementById("delay").value.trim();
	
	const myoutput = await new Promise(resolve => setTimeout(() => resolve(mytext),mynumber*1000));
	const node = document.createElement("div");
    node.textContent = myoutput;
	document.getElementById("output").appendChild(node);
}

document.querySelector("form").addEventListener("submit",function(e){
	e.preventDefault();
	display();
});