var enterBtn = document.getElementById("enterbtn");
var nameInput = document.getElementById("nameandsurname");
var emailInput = document.getElementById("email");
var indexNumbInput = document.getElementById("indexnumb");
var dateInput = document.getElementById("dateofbirth");


var studentsContainer = document.getElementById("studentcard");
var errorLog = document.getElementById("error")
students = [];

enterBtn.addEventListener("click", () => {
  var student = {
    studentName: nameInput.value,
    studentEmail: emailInput.value,
    studentDateOfBirth: dateInput.value,
    studentIndexNumber: indexNumbInput.value,
  };
if(student.studentName == "" ||student.studentEmail == "" || student.studentDateOfBirth == "" || student.studentIndexNumber == "" ){
document.getElementById("error").innerHTML +=`
<div class="error">
<h2>Error</h2>
<img src="https://www.freeiconspng.com/uploads/orange-error-icon-0.png" width="200px"/>
<h4>Empty fields - all fields need to be filled!</h4>
</div>
`
}
else{
  document.getElementById("error").innerHTML = ""
  var student = {
    studentName: nameInput.value,
    studentEmail: emailInput.value,
    studentDateOfBirth: dateInput.value,
    studentIndexNumber: indexNumbInput.value,
  };
  console.log(student);
  students.push(student);
  console.log(students);

  document.getElementById("studentcard").innerHTML = "";
  students.forEach((student) => {
    // const divElement = document.createElement("div");
    // divElement.classList.add("stdcard");
    // const h2Element = document.createElement("h2");
    // h2Element.innerText = `E-index`;
    // const h31Element = document.createElement("h3");
    // h31Element.innerText = `Student name: ${student.studentName}`;
    // const h32Element = document.createElement("h3");
    // h32Element.innerText = `Student email: ${student.studentEmail}`;
    // const h33Element = document.createElement("h3");
    // h33Element.innerText = `Index number: ${student.studentIndexNumber}`;

    // studentsContainer.appendChild(divElement);
    // divElement.appendChild(h2Element);
    // divElement.appendChild(h31Element);
    // divElement.appendChild(h32Element);
    // divElement.appendChild(h33Element);

    document.getElementById("studentcard").innerHTML += `
       <div class='stdcard'>
       <h2>E-index</h2>
       <h3>Student name: ${student.studentName}</h3>
       <h3>Date of Birth: ${student.studentDateOfBirth}</h3>
       <h3>Student email: ${student.studentEmail}</h3>
       <h3>Index number: ${student.studentIndexNumber}</h3>
       </div>
    
       `;
});
}
  document.getElementById("nameandsurname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("indexnumb").value = "";
  document.getElementById("dateofbirth").value = "";
});
