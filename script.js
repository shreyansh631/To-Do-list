$("document").ready(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if (val !== ''){
      var obj = $("<li></li>").text(val);
      $(obj).append("<button class = 'delete'>DELETE</button>");
      $("#mylist").append(obj);
      $("input").val("");
      $(".delete").on("click", function(){
      $(this).parent().remove() });
    }
  });
  
});