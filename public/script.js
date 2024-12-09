function generateCaptcha() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

const captchaElement = document.getElementById('captcha');
const captchaHiddenInput = document.getElementById('captchaHidden');
let currentCaptcha = generateCaptcha();
captchaElement.textContent = currentCaptcha;
captchaHiddenInput.value = currentCaptcha;

document.getElementById('refreshCaptcha').addEventListener('click', () => {
  currentCaptcha = generateCaptcha();
  captchaElement.textContent = currentCaptcha;
  captchaHiddenInput.value = currentCaptcha;
});
