
// get the diposit amount
const btn = document.getElementById('diposit-btn').addEventListener('click', function () {
    const dipositInput = document.getElementById('diposit-input');
    const depositInputText = dipositInput.value;
    const newDepositInput = parseFloat(depositInputText);
    //  console.log(newdepositInput);

    // update deposit amount
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositAmountText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositAmountText);
    const updatedDipositTotal = previousDipositAmount + newDepositInput;
    dipositTotal.innerText = updatedDipositTotal;

    // dipositInput.value='';


    // get the total balance:
    const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    const totalBlance = balanceTotal + newDepositInput;
    balance.innerText = totalBlance;

    dipositInput.value = '';
})

// get withdraw amount

const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput= document.getElementById('withdraw-input');
    const withdrawInputText=withdrawInput.value;
    const newWithdrawInput= parseFloat(withdrawInputText);
    // console.log(newWithdrawInput);

    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalText=withdrawTotal.innerText;
    const previousWithdraw=parseFloat(withdrawTotalText);
    const WithdrawTotalAmount=previousWithdraw+newWithdrawInput;
    withdrawTotal.innerText=WithdrawTotalAmount;

    // update balance after withdraw

    const balanceAmount=document.getElementById("balance-total");
    const balanceAmountText=balanceAmount.innerText;
    const balanceMoney=parseFloat(balanceAmountText);
    const updateMoney=balanceMoney-newWithdrawInput;
    balanceAmount.innerText=updateMoney;
    
    withdrawInput.value='';
})

