const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexValidatePassword = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

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