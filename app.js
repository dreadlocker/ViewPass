window.onload = function () {
    const input = document.getElementById('inp');
    const submitBtn = document.getElementById('submit');    
    let savedInputVal = '';

    input.addEventListener('keydown', function (event) {
        if (event.key === ' ') {
            alert("Don't use Space please!")
            return location.reload();
        }

        if (event.key == 'Backspace' || event.key == 'Enter' || event.key == 'Tab' || event.key == 'CapsLock' || event.key ==
            'Shift' || event.key == 'Control' || event.key == 'Alt') {} else {
            savedInputVal += event.key;
        }

        if (event.key == 'Enter') {
            submitBtn.click();
        }
    });

    input.addEventListener('keyup', function (event) {
        const replaceText = input.value.replace(/(?:[a-zA-Z0-9!@#$%^&*\(\)-_+=`])/g, "*");
        input.value = replaceText;
    });


    submitBtn.addEventListener('click', function () {
        alert(`Password is: ${savedInputVal}`);
    });
}