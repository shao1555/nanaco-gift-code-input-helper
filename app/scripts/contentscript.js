'use strict';
document.addEventListener("DOMContentLoaded", () => {
  // コード入力画面
  const codeEntryForm = document.querySelector('form#registerForm[action="/ap/p/register2.do"]')
  if (codeEntryForm) {
    let inputForms = codeEntryForm.querySelectorAll('input[size="4"]');
    if (inputForms.length > 0) {
      // NodeList から Array へのキャスト
      inputForms = Array.apply(null, inputForms);
      inputForms[0].setAttribute('maxlength', '100');
      inputForms[0].addEventListener('keyup', () => {
        let matches;
        if (matches = /(\w{4})\-?(\w{4})\-?(\w{4})\-?(\w{4})/.exec(inputForms[0].value)) {
          matches.shift();
          matches.forEach( (match) => { inputForms.shift().value = match; } );
          codeEntryForm.submit();
        }
      });
      // 準備ができたら入力欄の背景色を変える
      inputForms.forEach( (input) => { input.style.backgroundColor = '#e0ffe0' } );
      inputForms[0].focus();
    }
  }

  // 登録内容確認画面
  const confirmationForm = document.querySelector('form#registerForm[action="/ap/p/register4.do"]');
  if (confirmationForm) {
    confirmationForm.submit();
  }

  // 登録完了画面
  const guideButton = document.querySelector('form#registerForm img[alt="お受取り方法"]');
  if (guideButton) {
    window.setTimeout( () => {
      window.close();
    }, 3000);
  }
});
