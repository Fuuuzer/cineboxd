const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexValidatePassword = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

export function validateForm({user, email, password}) {
  if (!user || !email || !password) {
    return 'É necessário preencher todos os campos';
  }

  if(!regexValidateEmail.test(email)) {
    return 'Email inválido';
  }

  if(!regexValidatePassword.test(password)){
    return 'Senha inválida: precisa ter letra maiúscula, minúscula, número, símbolo e 6–15 caracteres.';
  }

  return true
};
