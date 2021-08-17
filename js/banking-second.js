function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const moneyInputText = inputField.value;
    const newAmountInput = parseFloat(moneyInputText);
    inputField.value = '';

    return newAmountInput;
}

function updateMoney(totalInputField, newInput) {

    const totalField = document.getElementById(totalInputField);
    const previousAmountText = totalField.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const updatedTotal = previousAmount + newInput;
    totalField.innerText = updatedTotal;

}

function updateBalance(newInput, isAdd) {
    const balance = document.getElementById("balance-total");
    const balanceTotalText = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balance.innerText = balanceTotal + newInput;
    }
    else {
        balance.innerText = balanceTotal - newInput;
    }
}


// get the diposit amount
const btn = document.getElementById('diposit-btn').addEventListener('click', function () {




    // updateMoney("diposit-total", newDepositInput);
    /* const dipositInput = document.getElementById('diposit-input');
     const depositInputText = dipositInput.value;
     const newDepositInput = parseFloat(depositInputText);*/
    //  console.log(newdepositInput);



    // update deposit amount
    /*const dipositTotal = document.getElementById('diposit-total');
    const previousDipositAmountText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositAmountText);
    const updatedDipositTotal = previousDipositAmount + newDepositInput;
    dipositTotal.innerText = updatedDipositTotal;*/


    // get the total balance:
    /*const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    const totalBlance = balanceTotal + newDepositInput;
    balance.innerText = totalBlance;*/
    const newDepositInput = getInputValue("diposit-input");
    if (newDepositInput>0) {

        updateMoney('diposit-total', newDepositInput);
        updateBalance(newDepositInput, true);

    };

    // dipositInput.value = '';
})

// get withdraw amount

const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function () {




    /*const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawInput = parseFloat(withdrawInputText);*/
    // console.log(newWithdrawInput);




    // update withdraw
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdraw = parseFloat(withdrawTotalText);
    // const WithdrawTotalAmount = previousWithdraw + newWithdrawInput;
    // withdrawTotal.innerText = WithdrawTotalAmount;




    // update balance after withdraw

    // const balanceAmount = document.getElementById("balance-total");
    // const balanceAmountText = balanceAmount.innerText;
    // const balanceMoney = parseFloat(balanceAmountText);
    // balanceAmount.innerText = balanceMoney - newWithdrawInput;
    const newWithdrawInput = getInputValue('withdraw-input');
    if (newWithdrawInput > 0) {
        updateMoney('withdraw-total', newWithdrawInput);
        updateBalance(newWithdrawInput, false);
    }


    // withdrawInput.value = '';
});

