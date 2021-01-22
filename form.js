const copy = document.querySelector('.copy');
const input1 = document.querySelector('.input12')

copy.addEventListener('click', () => {


    input1.select();
    input1.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("copied address:" + input1.value);

});
