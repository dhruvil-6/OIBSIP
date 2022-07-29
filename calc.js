let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == 'Enter') {
            screen.value = eval(screenValue);
        }

        else if (buttonText == 'del') {
            screenValue = screen.value.slice(0, -1);
            screen.value = screenValue;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}