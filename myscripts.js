var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function validation(){

	let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let birth = document.getElementById('birth').value;
	let gender = document.querySelector('#gender').value;

    if (name == ""){

        setError("username", " ** name is required");
    }


    else if ((name.length <= 2) || (name.length > 20)){

        setError("username", " ** name length must be between 2 and 20");

    }

    else if (!isNaN(name)){

        setError("username"," ** only characters");


    }
    else{

        setError("username","");

    }

    if (age == ""){

        setError("num"," ** age is required")
    }
    else{

        setError("num","");

    }

    if (birth == ""){

        setError("dob", " ** date of birth is required");
    }
    else{

        setError("dob","");

    }

    if (gender == ""){

        setError("gen", " ** gender is required");
    }
    else{

        setError("gen","");

    }

    
    
    var addRow = document.getElementById('show');
    var newRow = addRow.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("age").value;
    list3[x] = document.getElementById("birth").value;
    list4[x] = document.getElementById("gender").value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];

    n++;
    x++;

     // Taking data to associative array
     person['name'] = name;
     person['age'] = age;
     person['gender'] = gender;
     person['birth'] = birth;
 
 
     // Displaying user data in console using associative array
     for (let index in person){
         console.log(index+": "+person[index]+"<br>");  
     }
 
}


function setError(input, message){

    document.getElementById(input).innerHTML = message;

}



