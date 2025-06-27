const mytext = document.getElementById("text").value.trim();
const mynumber = document.getElementById("delay").value.trim();

async function display(){
	const oldtext = await new promise(resolve => setTimeout(() => resolve(mytext)));
	const oldnumber = await new promise(resolve => setTimeout(() => resolve(mynumber)));
	};
document.getElementById("output").push(oldtext,oldnumber);