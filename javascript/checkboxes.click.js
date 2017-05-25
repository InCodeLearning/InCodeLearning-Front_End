// find all input tagged elements
var w = document.getElementsByTagName('input');
for(var i = 0; i < w.length; i++){ 
  if(w[i].type=='checkbox' && w[i].checked == true){ 
    w[i].click();
    // w[i].checked = false; works to set all checkboxes unchecked but status do not stay. When clicking the save button, all checkboxes old values popped back.
  }
};
