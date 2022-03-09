const deposit = document.getElementById("deposit-balance");
const withdraw = document.getElementById("withdraw-balance");
const total = document.getElementById("total-balance");


// handle deposit
const handleDeposit = () => {
    let totalBalance = parseInt(total.innerText);
    const depositBalance = parseInt(deposit.innerText);
    const depositFeild = document.getElementById("deposit-input");
    const depositInput = depositFeild.value;

    totalBalance = totalBalance + parseInt(depositInput);
    total.innerText = totalBalance;
    deposit.innerText = depositBalance + parseInt(depositInput);

    depositFeild.value = '';
}


// handle withdraw
const handleWithdraw = () => {
    const withdrawField = document.getElementById("withdraw-input");
    const withdrawInput = withdrawField.value
    let withdrawBalance = parseInt(withdraw.innerText);
    let totalBalance = parseInt(total.innerText);

    totalBalance = totalBalance - parseInt(withdrawInput);
    total.innerText = totalBalance;

    withdrawBalance = withdrawBalance + parseInt(withdrawInput);
    withdraw.innerText = withdrawBalance;

    withdrawField.value = '';
}