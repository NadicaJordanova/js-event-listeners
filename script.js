var enterBtn = document.getElementById("enterbtn");
var nameInput = document.getElementById("nameandsurname");
var emailInput = document.getElementById("email");
var indexNumbInput = document.getElementById("indexnumb");
var dateInput = document.getElementById("dateofbirth");

// enterBtn.addEventListener("click", () =>{
// console.log(nameInput.value)
// console.log(emailInput.value)
// console.log(indexNumbInput.value)
// console.log(dateInput.value)
//  document.getElementById('nameandsurname').value='';
// document.getElementById('email').value='';
// document.getElementById('indexnumb').value='';
// document.getElementById('dateofbirth').value='';
// })

// var student1 = {
//     studenName: nameInput.value,
//     studentEmail: emailInput.value,
//     studenDateOfBirth: dateInput.value,
//     studentIndexNumber: indexNumbInput.value
// }
// console.log(student1)

var studentsContainer = document.getElementById("studentcard");
students = [];
enterBtn.addEventListener("click", () => {
  // console.log(nameInput.value)
  // console.log(emailInput.value)
  // console.log(indexNumbInput.value)
  // console.log(dateInput.value)
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
  document.getElementById("nameandsurname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("indexnumb").value = "";
  document.getElementById("dateofbirth").value = "";
});
