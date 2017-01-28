'use strict';
document.addEventListener("DOMContentLoaded", function(){
  // コード入力画面
  const codeInput = document.querySelector('form#registerForm[action="/ap/p/register2.do"] input#gift01');
  if (codeInput) {
    codeInput.setAttribute('maxlength', '20');
    codeInput.addEventListener('keyup', function(){
      const str = codeInput.value;
      let matches;
      if (matches = /^(\w{4})\-?(\w{4})\-?(\w{4})\-?(\w{4})$/.exec(str)) {
        matches.shift();
        document.querySelector("#gift01").value = matches[0];
        document.querySelector("#gift02").value = matches[1];
        document.querySelector("#gift03").value = matches[2];
        document.querySelector("#gift04").value = matches[3];
        document.querySelector('form#registerForm[action="/ap/p/register2.do"]').submit();
      }
    });
    // 準備ができたら入力欄の背景色を変える
    document.querySelectorAll('form#registerForm[action="/ap/p/register2.do"] input[size="4"]').forEach(function(input){input.style.backgroundColor = '#e0ffe0'});
    codeInput.focus();
  }

  // 登録内容確認画面
  const confirmationForm = document.querySelector('form#registerForm[action="/ap/p/register4.do"]');
  if (confirmationForm) {
    confirmationForm.submit();
  }
});
