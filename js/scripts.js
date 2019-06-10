$(document).ready(function() {

  $(".btn").click(function(event) {
    var fav1 = $("#fav1").val();
    var fav2 = $("#fav2").val();
    var fav3 = $("#fav3").val();

    var reversedArray = [fav1, fav2, fav3].reverse();
    alert(reversedArray);
  });
});

   $(".btn").click(function(event) {
     var favorites = ["fav1", "fav1", "fav3"];

     favorites.forEach(function(blank){
        var userInput = $("input#") + blank).val();
  )
}
