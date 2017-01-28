'use strict';

firstInput = document.querySelector('form#registerForm[action="/ap/p/register2.do"] input#gift01');
if (firstInput && typeof window.change1 == 'function') {
  firstInput.setAttribute('maxlength', '20');
  firstInput.removeEventListener('keyup', window.change1);
  firstInput.addEventListener('keyup', function(){
    var str = document.getElementById("gift01").value;
    if (matches = /^(\w{4})\-?(\w{4})\-?(\w{4})\-?(\w{4})$/.exec(str)) {
      matches.shift();
      document.getElementById("gift01").value = matches[0];
      document.getElementById("gift02").value = matches[1];
      document.getElementById("gift03").value = matches[2];
      document.getElementById("gift04").value = matches[3];
    }  
  });
}
