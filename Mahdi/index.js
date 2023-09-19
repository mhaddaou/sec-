var newDiv = document.createElement('div');
newDiv.style.width = '20%';
    newDiv.style.height = '100%';
    newDiv.style.borderRight = '1px solid rgba(131, 128, 128, 0.32)';


    var parentElements = document.getElementsByClassName('line');
    for (var i = 0; i < parentElements.length; i++) {
        parentElements[i].appendChild(newDiv.cloneNode(true));
      }