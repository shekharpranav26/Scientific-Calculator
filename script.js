function checkNum(input) {
    return !isNaN(input);
  }
  function addChar(display, char) {
    if (display.value === "0" || display.value === "Error") {
      display.value = char;
    } else {
      display.value += char;
    }
  }
  function changeSign(display) {
    if (checkNum(display.value)) {
      display.value = -display.value;
    }
  }
  function deleteChar(display) {
    display.value = display.value.slice(0, -1);
  }
  function compute(form) {
    try {
      form.display.value = eval(form.display.value);
    } catch {
      form.display.value = "Error";
    }
  }
  
  
  function percent(display) {
    if (checkNum(display.value)) {
      display.value = eval(display.value) / 100;
    }
  }
  
  function exp(form) {
    if (checkNum(form.display.value)) {
      form.display.value = Math.pow(form.display.value, 2);
      form.display.value = form.display.value.toString() + "^";
    }
  }
  function square(form) {
    if (checkNum(form.display.value)) {
      form.display.value = Math.pow(form.display.value, 2);
    }
  }
  function sqrt(form) {
    if (checkNum(form.display.value) && form.display.value >= 0) {
      form.display.value = Math.sqrt(form.display.value);
    }
  }
  function ln(form) {
    if (checkNum(form.display.value) && form.display.value > 0) {
      form.display.value = Math.log(form.display.value);
    }
  }
  function sin(form) {
    if (checkNum(form.display.value)) {
      form.display.value = Math.sin(form.display.value);
    }
  }
  function cos(form) {
    if (checkNum(form.display.value)) {
      form.display.value = Math.cos(form.display.value);
    }
  }
  function tan(form) {
    if (checkNum(form.display.value)) {
      form.display.value = Math.tan(form.display.value);
    }
  }