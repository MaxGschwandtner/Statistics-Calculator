function standardDeviation(list){
  var s = 0;
  var i = 0;
  for (var i = 0; i < list.length; i++) {
    s = s + Math.pow(parseInt(list[i]) - average(list), 2);
  }
  s = s/list.length;
  s = Math.sqrt(s);
  return s;
}
function average(list){
  let sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum = sum + parseInt(list[i]);
  }
  var average = sum/list.length;
  return average;
}

function median(list){
  list.sort(function(a, b){return a-b});
  if (list.length % 2 != 0) {
    return list[list.length/2 - 0.5];
  }
  else if (list.length % 2 == 0) {
    median1 = (parseInt(list[list.length/2 - 1]) + parseInt(list[list.length/2]))/2;
    return median1;
  }
  return false;
}

function modus(list2){
  var max = 0, element, temp;
  list2.sort(function(a, b){return a-b});
  while (list2.length > 0) {
    temp = list2.lastIndexOf(list2[0]) + 1
    if (temp > max) {
      max = temp;;
      element = list2[0];
    }
    list2.splice(0, temp);
  }
  return element;
}

function max(list){
  list.sort(function(a, b){return a-b});
  return list[list.length - 1];
}

function min(list){
  list.sort(function(a, b){return a-b});
  return list[0];
}


function calculate(){
  var numbers = document.getElementById("numbers").value.split(',');
  var result = document.getElementById("result");
  result.innerHTML = "arithmetisches Mittel: " + average(numbers) + "<br>" +
                      "Maximum: " + max(numbers) + "<br>" +
                      "Minimum: " + min(numbers) + "<br>" +
                      "Median: " + median(numbers) + "<br>" +
                      "Standardabweichung: " + standardDeviation(numbers) + "<br>" +
                      "Modus: " + modus(numbers) + "<br>";
  return false;
}
