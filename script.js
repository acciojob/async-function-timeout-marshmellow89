const mytext = document.getElementById("text").value.trim();
const mynumber = document.getElementById("delay").value.trim();

async function display(){
	const oldtext = await new promise(resolve => setTimeout(() => resolve(mytext),1000));
	const oldnumber = await new promise(resolve => setTimeout(() => resolve(mynumber),2000));
	};
document.getElementById("output").push(oldtext,oldnumber);