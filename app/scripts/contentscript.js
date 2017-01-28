'use strict';
document.addEventListener("DOMContentLoaded", function(){
  const firstInput = document.querySelector('form#registerForm[action="/ap/p/register2.do"] input#gift01');
  if (firstInput) {
    firstInput.setAttribute('maxlength', '20');
    firstInput.addEventListener('keyup', function(){
      const str = firstInput.value;
      let matches;
      if (matches = /^(\w{4})\-?(\w{4})\-?(\w{4})\-?(\w{4})$/.exec(str)) {
        matches.shift();
        document.querySelector("#gift01").value = matches[0];
        document.querySelector("#gift02").value = matches[1];
        document.querySelector("#gift03").value = matches[2];
        document.querySelector("#gift04").value = matches[3];
        document.querySelector("#gift04").focus();
      }
    });
    firstInput.focus();
  }

});
