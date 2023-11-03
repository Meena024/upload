const ul = document.querySelector('.items');

ul.firstElementChild.textContent='HELLO';
ul.firstElementChild.style.color = 'red';
ul.children[1].innerText = 'Hello';
ul.children[1].style.color = 'yellow';
ul.children[2].innerText = 'hello';
ul.children[2].style.color = 'green';
ul.children[2].style.size = '5';
function printInput() {
    var form = document.getElementById("myForm");
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var phone = form.elements.phone.value;
    var time = form.elements.time.value;
    var date = form.elements.date.value;
    console.log(name,"\n",email,"\n",phone,"\n",date,"\n",time);
    document.getElementById("output").innerHTML = "OUTPUT:" +"<br><br>"+ name + "<br>"+ email +"<br>"+ phone +"<br>"+date+"<br>"+time;
}
