
function myFunction() {
  // Declare variables 
  var input, filter, table, tr, id, i,name;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    id = tr[i].getElementsByTagName("td")[0];
    name = tr[i].getElementsByTagName("td")[1];
    if (id || name) {
      if (id.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if(name.innerHTML.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}
