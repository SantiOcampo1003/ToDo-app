let tbody1 = document.getElementById("tbody1");
let input2 = document.getElementById("input2");
let input1 = document.getElementById("input1");

input2.onclick = function () {
  console.log(input1.value);
  console.log("hace algo");
  let row = document.createElement("tr");
  let td = ` <td>${input1.value} <button onClick =  "borrarFila(this)" >x</button></td>`;
  row.innerHTML = td;
  tbody1.append(row);
  input1.value = "";
};

const borrarFila = function (datos) {
  let td = datos.parentNode;
  let tr = td.parentNode;
  let tbody = tr.parentNode; 
  tbody.removeChild(tr);

  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
