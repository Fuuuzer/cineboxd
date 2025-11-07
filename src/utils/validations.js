
export function validateForm(user, email, password) {
  if (!user || !email || !password) {
    return console.log('É necessário preencher todos os campos');
  }
};
