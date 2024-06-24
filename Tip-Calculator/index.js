

function calculate(){
    const bill = document.querySelector('#Bill').value;
    const tip = document.querySelector('#Tip').value;
    const total = document.querySelector('#total');
    const totalvalue = bill *(1 + tip / 100)
    total.textContent = `Total: ${totalvalue.toFixed(2)}`;
}
