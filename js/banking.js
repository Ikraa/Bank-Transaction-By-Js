// handled diposit button:
const dipositButton = document.getElementById('diposit-btn').addEventListener('click', function () {
    // get the amount diposited:
    const dipositInput = document.getElementById('diposit-input');
    const newDipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText);
    // console.log(newDipositAmount);

    // Update diposit total:
    const dipositTotal = document.getElementById('diposit-total');
    // console.log(dipositTotal.innerText);
    const previousDipositAmountText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositAmountText);
    const updatedDipositTotal = previousDipositAmount + newDipositAmount;
    dipositTotal.innerText = updatedDipositTotal;


    // updated balance:
    const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    const updatedTotalBalance=previousTotalBalance+newDipositAmount;
    balance.innerText=updatedTotalBalance;



    //clear the diposit input felid:
    dipositInput.value = '';
});

//--------------------------------------------------------------------------------------------------
// handled Withdraw button: 
const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get the amount withdraw:
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log(newWithdrawAmount);

    // get the total amount withdrawed:
    const withdrawTotal = document.getElementById('withdraw-total');
    // console.log(withdraw-total.innerText);
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const updatedWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = updatedWithdrawTotal;


    // updated balance:
    const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    const updatedTotalBalance=previousTotalBalance-newWithdrawAmount;
    balance.innerText=updatedTotalBalance;

    //clear the diposit input felid:
    dipositInput.value = '';
});
