var card = document.getElementById("cardDiv");
var cardList = document.getElementById("secondDiv");
var studentID = document.getElementById("studentId");
var studentName = document.getElementById("studentName");
var fatherName = document.getElementById("fatherName");
var studentClass = document.getElementById("class");
var contact = document.getElementById("contact");

function generateCard(){
    var studentIdText = studentID.value
    var studentIdFullText = document.createTextNode(studentIdText);
    var h3 = document.createElement("h3");
    h3.appendChild(studentIdFullText)
    cardList.appendChild(h3)
    card.appendChild(cardList)
    var studentNameText = studentName.value
    var studentNameFullText = document.createTextNode(studentNameText);
    var studentNameh3 = document.createElement('h3');
    studentNameh3.appendChild(studentNameFullText);
    cardList.appendChild(studentNameh3)
    card.appendChild(cardList)
    var fatherNametext = fatherName.value;
    var fatherNameFullText = document.createTextNode(fatherNametext);
    var fatherNameh3 = document.createElement('h3');
    fatherNameh3.appendChild(fatherNameFullText);
    cardList.appendChild(fatherNameh3);
    card.appendChild(cardList);
    var studentClassText = studentClass.value;
    var studentClassFullText = document.createTextNode(studentClassText);
    var studentClassh3 = document.createElement('h3');
    studentClassh3.appendChild(studentClassFullText);
    cardList.appendChild(studentClassh3);
    card.appendChild(cardList);
    var contactText = contact.value;
    var contactFullText = document.createTextNode(contactText);
    var contacth3 = document.createElement('h3');
    contacth3.appendChild(contactFullText);
    cardList.appendChild(contacth3);
    card.appendChild(cardList);
    studentId.value = "";
    studentName.value = "";
    fatherName.value = "";
    studentClass.value = "";
    contact.value = "";
    
    
}