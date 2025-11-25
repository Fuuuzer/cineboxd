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

export function validateField(field, value) {
  switch (field) {
    case 'email' :
      if(value === '') return 'É necessário preencher um email';
      if(!regexValidateEmail.test(value)) return 'Email inválido';
      return '';

    case 'user' :
      if(value === '') return 'É necessário preencher um usuário';
      return '';

    case 'password' :
      if(value === '') return 'É necessário preencher uma senha';
      if(!regexValidatePassword.test(value)) return 'A senha não bate os requisitos minimos';
      return '';
    default: return ''
  }
};