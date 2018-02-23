// alert('Hello there.\n new line');

var c = confirm('Are you sure?');
// alert(c); this will provide true when click on ok and false when click on cancel
if(c) {
 alert('you are sure.'); 
}
else{
  alert('you are not sure.');
}

var name = prompt('Please enter your name:');
// alert(name);
if(name != ''){
  alert('Hello '+name);
}