let inputs = document.querySelectorAll('form input');

// Check if the input value is equal to maxlength then move to next input

inputs.forEach(input => {
    input.addEventListener('input', function (e) {
        if (e.target.value.length == e.target.maxLength) {
            e.target.nextElementSibling.focus();
        }
    });
    
    // Check if the input value is equal to 0 then move to previous input
    input.addEventListener('input', function (e) {
        if (e.target.value.length == 0) {
            e.target.previousElementSibling.focus();
        }
    }
    );
});

