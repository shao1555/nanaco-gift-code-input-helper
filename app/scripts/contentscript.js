/*
Copyright (C) 2017 Sho Sawada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
