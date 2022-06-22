// JavaScript Document
var data=[]
var idUpdate
var id = 1

function add(event){
	event.preventDefault()

	var item_userName=document.getElementById("userName");
	var item_fullName=document.getElementById("fullName");
	var item_email=document.getElementById("email");
	var item_birthday=document.getElementById("birthday");
	
	var obj={
		Id: id,
		userName :item_userName.value,
		fullName :item_fullName.value,
		email :item_email.value,
		birthday: item_birthday.value,
	}

		var item={
		Id: idUpdate,
		userName :item_userName.value,
		fullName :item_fullName.value,
		email :item_email.value,
		birthday: item_birthday.value,}
		
let indexUpdate = data.findIndex((c)=>c.Id==item.Id)

	if(indexUpdate >=0) {
		data.splice(indexUpdate,1,item)
		idUpdate = -1;
	} else {
		data.push(obj)
		id++
	}
		
	render(data)
	clear(event)
}

function render(data){
	let table =`<tr style="background-color:#178e4c ;">
				<td>No</td>
				<td>User name</td>
				<td>Full name</td>
				<td>Email</td>
				<td>Birthday</td>
				<td>Edit</td>
				<td>Delete</td>
			</tr>`
	for(let i=0;i<data.length; i++){
		table += `<tr>`
		table += `<td>${data[i].Id}</td>`
		table += `<td>${data[i].userName}</td>`
		table += `<td>${data[i].fullName}</td>`
		table += `<td>${data[i].email}</td>`
		table += `<td>${data[i].birthday}</td>`
		table += `<td><button class="button-or" onclick="editItem(event, ${data[i].Id})">Edit</button></td>`
		table += `<td><button class="button-r" onclick="deleteItem(${data[i].Id})">Delete</button></td>`
		table += `</tr>`
				
	}
	document.getElementById("render").innerHTML=table
	console.log("render")
}
function clear(e){
	e.preventDefault()
	
	document.getElementById("userName").value="";
	document.getElementById("fullName").value="";
	document.getElementById("email").value="";
	document.getElementById("birthday").value="";
}

document.getElementById("reset-button").addEventListener("click", clear)

function editItem(e, x){
	console.log(e, x)
	e.preventDefault()
	for(let i=0;i<data.length; i++){
		if(data[i].Id==x){
		document.getElementById("userName").value=data[i].userName;
		document.getElementById("fullName").value=data[i].fullName;
		document.getElementById("email").value=data[i].email;
		document.getElementById("birthday").value=data[i].birthday;
		}
	}
	idUpdate = x
	
	console.log("Up", idUpdate)
}
function deleteItem(x){
	for(let i=0;i<data.length;i++){
		if(data[i].Id==x){
			data.splice(i,1)
			
			
		render(data)
		}
		
	}
}