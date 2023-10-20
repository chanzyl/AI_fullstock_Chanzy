const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止表单提交刷新页面

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 假设登录验证逻辑为：用户名为 "admin"，密码为 "password"
  if (username === 'admin' && password === 'password') {
    // 登录成功，跳转到首页或其他操作
    window.location.href = 'home.html';
  } else {
    // 登录失败，显示错误信息
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '用户名或密码错误，请重试。';
  }
});
