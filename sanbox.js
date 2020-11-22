//Forms and Form Events

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
const pattern = /^[a-zA-Z\d]{6,18}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // validation
    const username = form.username.value;
    pattern.test(username) ? 
    feedback.textContent = 'Success!':
    feedback.textContent = 'username must contain letters and numbers only with 6 - 18 characters';
});

form.username.addEventListener('keyup', e => {
    pattern.test(e.target.value) ? 
    form.username.setAttribute('class', 'success'):
    form.username.setAttribute('class', 'error');
});




// testing RegEx

// const username = 'bijobijoRrewarfaUH$IJdsaHKUHIYhjuygIU5HOJNgU';
// const pattern = /^[a-zA-Z\d]{6,}$/;


// let result = pattern.test(username);


// if(result){
//     console.log('you shall pass');
// } else {
//     console.log('YOU SHALL NOT PASS');
// }