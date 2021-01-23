import { button } from 'material-ui/core'
const BITCOIN = document.querySelector(".form1");
const BITCOIN1 = document.querySelector(".form2");
const button = document.querySelector(".button1");



BITCOIN.addEventListener('click', (e) => {
    e.preventDefault();

    const bitcoinvalue = BITCOIN.bitcoin.value;
    const cash = BITCOIN.cash.value;


    const convmoney = bitcoinvalue * 40.6
    parseFloat(convmoney);

    convmoney.toFixed(2)


    console.log(convmoney)

    BITCOIN.bitcash.value = convmoney;



});

BITCOIN1.addEventListener('click', (e) => {
    e.preventDefault();

    const bitcoinvalue = BITCOIN1.Bitcoin.value;
    const cash = BITCOIN.cash.value;


    const convmoney = bitcoinvalue * 67.11
    convmoney.toFixed(2)

    BITCOIN1.ethe.value = convmoney;



});


button.addEventListener('click', () => {
    window.location.href = "./checkout.html"
});

const menu = document.querySelector(".menubar");
const menu1 = document.querySelector(".menu10");
const menu3 = document.querySelector('.menu3')

menu1.addEventListener('click', () => {
    menu.classList.remove('menubar');
});


menu3.addEventListener('click', () => {
    menu10.classList.add('menubar')
})










