const pay = document.querySelector('#section_pay');
const myItem = document.querySelector('#section_myitem');
const money = myItem.querySelector('.output_myMoney');

// 소지금 입력
function myMoney() {
  const input = parseInt(prompt('소지금액을 입력해주세요.'));
  
  if(isNaN(input) == true) {
    alert('소지금 입력이 잘못 되었습니다.');
    return myMoney();
  } else if(input < 0) {
    alert('소지금 입력이 잘못 되었습니다.');
    return myMoney();
  } else if(isNaN(input) == false) {
    money.textContent = input;
  }
}
myMoney();

// 입금
function inputPay() {
  const inputPay = pay.querySelector('.input_pay');
  const outputChange = pay.querySelector('.output_change');

  if(isNaN(parseInt(inputPay.value)) == true) {
    alert('입금액 입력이 잘못 되었습니다.');
    inputPay.value = '';
    return false;
  } else if(parseInt(inputPay.value) < 9) {
    alert('입금액 입력이 잘못 되었습니다.');
    inputPay.value = '';
    return false;
  } else if(money.textContent < 0) {
    alert('소지금이 부족합니다.');
    inputPay.value = '';
    return false;
  }
  
  money.textContent = parseInt(money.textContent) - parseInt(inputPay.value);
  outputChange.textContent = parseInt(outputChange.textContent) + parseInt(inputPay.value);
  inputPay.value = '';
}
const btnPay = pay.querySelector('.btn_pay');
btnPay.addEventListener('click', inputPay);

// 거스름돈 반환
function changeMoney() {
  const outputChange = pay.querySelector('.output_change');
  const btnChange = pay.querySelector('.btn_change');

  btnChange.addEventListener('click', () => {
    money.textContent = parseInt(money.textContent) + parseInt(outputChange.textContent);
    outputChange.textContent = 0;
  })
}
changeMoney();