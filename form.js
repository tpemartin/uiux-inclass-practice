// 把要在console可看到的變數在此宣告
// var ...; 

var formData={
  staticEmail:null,
  exampleInputEmail1:null,
  exampleIputPassword1:null,
  exampleSelect1:null,
  exampleSelect2:null,
  exampleTextarea:null,
  exampleInputFile:null,
  optionRadios1:null,
  optionRadios2:null,
  optionRadios3:null,
  check1:null,
  check2:null,
  customRange1:null
};
var requestURL = 'SearchShowAction.json';
var myData;


// 確保整個html文件DOM已完整才進行js
$(document).ready(function(){

  //Fetch
  fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      myData=data
    })
    .catch(e => console.log("error", e))

  $("#myForm").change(function(){
    if($("#check1").is(":checked")){
      $("#check1out").text(
        JSON.stringify(myData[0]['showInfo'])
      ) 
    } else {
      $("#check1out").text("")
    }
    if($("#check2").is(":checked")){
      $("#check2out").text(
        JSON.stringify(myData[1]['showInfo'])
      ) 
    } else {
      $("#check2out").text("")
    }
    if($("#check3").is(":checked")){
      $("#check3out").text(
        JSON.stringify(myData[2]['showInfo'])
      ) 
    } else {
      $("#check3out").text("")
    }

    check1=document.forms.myForm.check1.checked;
    check2=document.forms.myForm.check2.checked;
    check3=document.forms.myForm.check3.checked;
    $()

    $("#result").text(resultText);
  });
  
 
 /* 
  // AJAX

  //設定準備使用的GET instance
  const requestMyJson = new XMLHttpRequest();
  requestMyJson.open('GET', requestURL);
  requestMyJson.responseType = 'json';
  
  //Asynchronous communication
  requestMyJson.onload = function() {
    exchangeRate = requestMyJson.response;
  }
  
  //送出請求
  requestMyJson.send();
*/
  


})