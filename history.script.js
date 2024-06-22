document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.querySelector('.edit-btn');
    editButton.addEventListener('click', () => {
      alert('Edit button clicked!');
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const tripContainer = document.getElementById('tripContainer');

    const tripHistory = JSON.parse(localStorage.getItem('tripHistory')) || [];
    let month0 = localStorage.getItem("month0");
    let month1 = localStorage.getItem("month1");
    let month2 = localStorage.getItem("month2");
    let month3 = localStorage.getItem("month3");
    let month4 = localStorage.getItem("month4");
    let month5 = localStorage.getItem("month5");
    let car0 = localStorage.getItem("car0");
    let car1 = localStorage.getItem("car1");
    let car2 = localStorage.getItem("car2");
    let car3 = localStorage.getItem("car3");
    let car4 = localStorage.getItem("car4");
    let car5 = localStorage.getItem("car5");
    document.getElementById('month0').innerHTML = returnmonth(month0);
    document.getElementById('month1').innerHTML = returnmonth(month1);
    document.getElementById('month2').innerHTML = returnmonth(month2);
    document.getElementById('month3').innerHTML = returnmonth(month3);
    document.getElementById('month4').innerHTML = returnmonth(month4);
    document.getElementById('month5').innerHTML = returnmonth(month5);
    document.getElementById('car0').innerHTML = car0;
    document.getElementById('car1').innerHTML = car1;
    document.getElementById('car2').innerHTML = car2;
    document.getElementById('car3').innerHTML = car3;
    document.getElementById('car4').innerHTML = car4;
    document.getElementById('car5').innerHTML = car5;
});

function returnmonth(month){
  if(month==1){
    return "January";
  }
  if(month==2){
    return "Febuary";
  }
  if(month==3){
    return "March";
  }
  if(month==4){
    return "April";
  }
  if(month==5){
    return "Mei";
  }
  if(month==6){
    return "June";
  }
  if(month==7){
    return "July";
  }
  if(month==8){
    return "August";
  }
  if(month==9){
    return "September";
  }
  if(month==10){
    return "Oktober";
  }
  if(month==11){
    return "November";
  }
  if(month==12){
    return "December";
  }
}