function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#subjectField").val();
  var field4 = $("#messageField").val();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(field1 == ""){
    alert('Please Fill Your Name');
    document.getElementById("nameField").focus();
    return false;
  }
  if(field2 == ""){
    alert('Please Fill Your Email');
    document.getElementById("emailField").focus();
    return false;
  }
  if(!field2.match(mailformat)){
    alert('Please enter a valid email address');
    document.getElementById("emailField").focus();
    return false;
  }
  if(field3 == ""){
    alert('Please Fill Subject');
    document.getElementById("subjectField").focus();
    return false;
  }
  if(field4 == ""){
    alert('Please Fill Your Message');
    document.getElementById("messageField").focus();
    return false;
  }




  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf9Fp5mZpyW623dMR7iCSAdmI209scDJfPLMvWIUraF_dnF0w/formResponse?",
    data: {"entry.1543498098": field1, "entry.1657167440": field2, "entry.512308903": field3, 'entry.536732932': field4},
    type: "POST",
    dataType: "xml",
    success: function(d)
    {
    },
    error: function(x, y, z)
    {

      $('#success-msg').show();
      $('#form').hide();

    }
  });
  alert('Done! we will read it as soon as possible');
  document.getElementById('subjectField').value = '';
  document.getElementById('messageField').value = '';

  return false;
}
