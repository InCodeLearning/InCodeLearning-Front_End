var b = document.getElementsByTagName('button');
for (var i = 0; i < b.length; i++) {
  // console.log(b[i].value);
  if (b[i].innerHTML == "Save") {
    setTimeout(b[i].click(), 2000);
    // delay might be needed for multiple buttons
  }
}
