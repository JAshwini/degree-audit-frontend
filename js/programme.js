$("tr").on("click", "#remove", function(){
      $(this).text('Add');
      $(this).addClass('btn-primary').removeClass('btn-danger').attr('id','add-btn');
      var tr = $(this).parent().parent();
      $('#masterList').append(tr);
});

$("tr").on("click", "#add-btn", function(){
    console.log('aaa');
      $(this).text('Remove');
      $(this).removeClass('btn-primary').addClass('btn-danger').attr('id','remove');
      var tr = $(this).parent().parent();
      $('#semesterTable').append(tr);
});