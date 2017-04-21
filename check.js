function checkIt() {
  var dennis = 0;
  var dee = 0;
  var mac = 0;
  var charlie = 0;
  var frank = 0;

  var elements = document.getElementsByClassName('answer');

  for (var e of elements) {

    if(e.checked) {
      if (e.value == 'dennis') {
        dennis++;
      }
      else if (e.value == 'dee') {
        dee++;
      }
      else if (e.value == 'mac') {
        mac++;
      }
      else if (e.value == 'charlie') {
        charlie++;
      }
      else if (e.value == 'frank') {
        frank++;
      }
    }
  }

var counts = "Dennis: " + dennis + ","  +
              "Dee: "  + dee + "," +
              "Mac: " + mac +"," +
              "Charlie: " + charlie + "," +
              "Frank: " + frank;

  //display results//
  document.getElementById('result').innerHTML = counts;
}
