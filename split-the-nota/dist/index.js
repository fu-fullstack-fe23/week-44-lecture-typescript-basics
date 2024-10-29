let buttonRef = document.querySelector('#calculateButton');
buttonRef.addEventListener('click', () => {
    const sumRef = document.querySelector('#sum');
    const tipRef = document.querySelector('#tip');
    const nmbrOfFriendsRef = document.querySelector('#numberOfFriends');
    const sum = parseInt(sumRef.value);
    const tip = parseInt(tipRef.value);
    const friends = parseInt(nmbrOfFriendsRef.value);
    const calculatedTip = calculateTip(sum, tip);
    const sumToPay = sum + calculatedTip;
    const dividedSum = divideSumToPay(sumToPay, friends);
    showDividedSum(dividedSum);
});
function calculateTip(sum, tip) {
    return sum * tip;
}
function divideSumToPay(sumToPay, friends) {
    return sumToPay / friends;
}
function showDividedSum(sum) {
    document.querySelector('#inputForm').classList.toggle('hide');
    document.querySelector('#showSum').classList.toggle('hide');
    document.querySelector('#friendSum').textContent = sum + ' kr';
}
