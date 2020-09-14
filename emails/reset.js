const keys = require("../keys");

module.exports = function (email, token) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: "Восстановление доступа",
    html: `
        <h2>Вы забыли пароль?</h2>
        <p>Если нет - проигнорируйте это письмо!</p>
        <p>Иначе перейдите по ссылке:</p>
        <p><a href="${keys.BASE_URL}/auth/password/${token}">Восстановить доступ</a></p>
        <hr />
        <a href="${keys.BASE_URL}">Магазин курсов</a>   
        `,
  };
};
