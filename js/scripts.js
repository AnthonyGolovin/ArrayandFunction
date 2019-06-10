$(document).ready(function() {

  $(".btn").click(function(event) {



    var flavs =['fav1', 'fav2', 'fav3'];

    var flavorArray = [];
    alert(flavorArray);

    flavs.forEach(function(flav) {
      var userInput = $("input#" + flav).val();
      flavorArray.push(userInput);
    });

    alert(flavorArray);

    flavorArray.reverse();
    alert(flavorArray);
    
    // var fav1 = $("#fav1").val();
    // var fav2 = $("#fav2").val();
    // var fav3 = $("#fav3").val();


    // var reversedArray = [fav1, fav2, fav3].reverse();
    // alert(reversedArray);
    event.preventDefault();
  });
});

//    $(".btn").click(function(event) {
//      var favorites = ["fav1", "fav1", "fav3"];
//
//      favorites.forEach(function(blank){
//         var userInput = $("input#") + blank).val();
//   )
// }
