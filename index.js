const BITCOIN = document.querySelector(".form1");
const BITCOIN1 = document.querySelector(".form2");
const button = document.querySelector(".button1");
const input1 = document.getElementById("iput1");
const input2 = document.getElementById("iput2");
const menu = document.querySelector(".menubar");
const menu1 = document.querySelector(".menu10");
const menu3 = document.querySelector('.menu3');
const menu2 = document.querySelector(".menu2")


input1.addEventListener('input', () => {
    const bitcoinvalue = BITCOIN.bitcoin.value;
    const convmoney = bitcoinvalue * 81.34
    parseFloat(convmoney);
    BITCOIN.bitcash.value = convmoney;






});
input2.addEventListener('input', () => {
    const bitcoinvalue1 = BITCOIN1.Bitcoin.value;
    const cash = BITCOIN.cash.value;


    const convmoney = bitcoinvalue1 * 38.25
    convmoney.toFixed(2)

    BITCOIN1.ethe.value = convmoney;






});



menu1.addEventListener('click', () => {
    menu.classList.remove('menubar');
});

menu3.addEventListener('click', () => {
    menu.classList.add('menubar')
});



BITCOIN.addEventListener('click', (e) => {
    e.preventDefault();

    const bitcoinvalue = BITCOIN.bitcoin.value;
    const cash = BITCOIN.cash.value;


    const convmoney = bitcoinvalue * 74.6
    parseFloat(convmoney);

    convmoney.toFixed(2)


    console.log(convmoney)

    BITCOIN.bitcash.value = convmoney;



});

BITCOIN1.addEventListener('click', (e) => {
    e.preventDefault();
    const bitcoinvalue1 = BITCOIN1.Bitcoin.value;
    const cash = BITCOIN.cash.value;


    const convmoney = bitcoinvalue1 * 45.11
    convmoney.toFixed(2)

    BITCOIN1.ethe.value = convmoney;

    //const bitcoinvalue1 = BITCOIN1.Bitcoin.value;
    //const cash = BITCOIN.cash.value;

    BITCOIN1.addEventListener('click', () => {
        window.location.href = "./checkout.html"
    });


});

//import { button } from 'material-ui/core'

button.addEventListener('click', () => {
    window.location.href = "./checkout.html"
});










