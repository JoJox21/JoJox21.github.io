const login = document.querySelector('.login');
// login.style.display = '';
const sign_in_btn = document.querySelector('.sign_in');
const signIn = () =>{
    const more = document.querySelector('.container h2');
    const details = document.querySelector('#details');
    const login = document.querySelector('.login');
    const sign_in_btn = document.querySelector('.sign_in');
    sign_in_btn.style.display = 'none';
    login.style.display = 'flex';
    details.style.display = 'none'
    more.style.display = 'none'


}
sign_in_btn.addEventListener('click',signIn)