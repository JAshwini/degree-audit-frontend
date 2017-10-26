function getProgramTableData() {
  $.ajax({
    url:'http://13.126.207.109:8080/DegreeAudit/controller?action=login&username=abhilash&password=abc123',
    success: function (result) {
      console.log(result);
      $.ajax({
        url:'http://13.126.207.109:8080/DegreeAudit/controller?action=getprogram',
        dataType: 'json',
        success: function(result) {
          console.log(result);
        }
      });
    }
  });
   
}

$("#courses").click(function(e){
  e.preventDefault();
  window.location.href='course_list.html';
});


function getPage(a){
  if(a=='prgstr'){
    $.ajax({
      url:'programme_str.html',
      success:function(data){
        $("#dataarea").html(data);
      }
    });
  }else if (a=='programme') {
    $.ajax({
      url:'programme.html',
      success:function(data){
        $("#dataarea").html(data);
      }
    });
  }
}
