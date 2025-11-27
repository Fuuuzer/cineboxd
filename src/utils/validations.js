const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexValidatePassword = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

export function validateForm(form) {
  const newErrors = {}
  Object.keys(form).forEach((field) => {
    newErrors[field] = validateField(field, form[field]);
  })
  return newErrors
}

export function validateField(field, value) {
  switch (field) {
    case 'email' :
      if(value === '') return 'É necessário preencher um email';
      if(!regexValidateEmail.test(value)) return 'Email inválido';
      return '';

    case 'user' :
      if(value === '') return 'É necessário preencher um usuário';
      return '';
      //

    case 'password' :
      if(value === '') return 'É necessário preencher uma senha';
      if(!regexValidatePassword.test(value)) return 'A senha precisa conter no mínimo 6 digitos, uma letra maiúscula, minuscula e um caractere especial';
      return '';
    default: return ''
  }
};