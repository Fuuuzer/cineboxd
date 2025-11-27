const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateForm(user, email, password) {
  if (!user || !email || !password) {
    return console.log('É necessário preencher todos os campos');
  }

  if(!regexValidateEmail.text(email.value)) {
    return console.log('Preencha um email válido')
  }

<<<<<<< HEAD
export function validateForm(user, email, password) {
  if (!user || !email || !password) {
    return console.log('É necessário preencher todos os campos');
  }
=======
>>>>>>> ecb8c30a5d8bc11541b162cef38ef7bbef6f9565
};
