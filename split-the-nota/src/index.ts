let buttonRef = document.querySelector('#calculateButton') as HTMLButtonElement;

buttonRef.addEventListener('click', () : void => {
    const sumRef = document.querySelector('#sum') as HTMLInputElement;
    const tipRef = document.querySelector('#tip') as HTMLInputElement;
    const nmbrOfFriendsRef = document.querySelector('#numberOfFriends') as HTMLInputElement;

    const sum : number = parseInt(sumRef.value);
    const tip : number = parseInt(tipRef.value);
    const friends : number = parseInt(nmbrOfFriendsRef.value);

    const calculatedTip : number = calculateTip(sum, tip);
    const sumToPay : number = sum + calculatedTip;
    const dividedSum : number = divideSumToPay(sumToPay, friends);

    showDividedSum(dividedSum);
});

function calculateTip(sum : number, tip: number) : number {
    return sum * tip;
}

function divideSumToPay(sumToPay : number, friends : number) : number {
    return sumToPay / friends;
}

function showDividedSum(sum : number) : void {
    document.querySelector<HTMLElement>('#inputForm').classList.toggle('hide');
    document.querySelector<HTMLElement>('#showSum').classList.toggle('hide');

    document.querySelector<HTMLHeadingElement>('#friendSum').textContent = sum + ' kr';
}