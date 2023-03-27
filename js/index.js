function insertValue(num) {
  document.form.text.value+=num;
}

function equalstoo() {
  var equation = document.form.text.value;
  if(equation) {
    document.form.text.value = eval(document.form.text.value);
  }
}

function clean() {
  document.form.text.value = "";
}
