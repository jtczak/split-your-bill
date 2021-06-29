const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const countBtn = document.querySelector('.count')
const cost = document.querySelector('.cost')

const showBill = () => {


    if (price.value === '' || people.value === '' || tip.value === 0) {
        error.textContent = 'you must complete all fields with numbers ;)';
        costInfo.textContent = '';
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);

}

countBtn.addEventListener('click', showBill)