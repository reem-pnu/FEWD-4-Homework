var pets=['Beagle','Pony','Iguana','Cat','Bunny'];
for(var i=0; i<pets.length;i++){
    var x = document.getElementById("mydropdown");
    var option = document.createElement("option");
    option.text = pets[i];
    x.add(option); 
}

function myFunction() {
    var x = document.getElementById("mydropdown").value;
    console.log(x);
    var value = x.concat('.jpg');
    console.log(value);
    $("img").attr("src", "img/"+value);
  }

  