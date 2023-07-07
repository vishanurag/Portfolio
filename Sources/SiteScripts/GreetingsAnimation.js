/* -------------------------STARTS---------------------- */
/*/////////// ----------GREETINGS------ANIMATIONS//////////// */

let greetingArr = [
  "नमस्ते",
  "Hola",
  "नमस्कार",
  "Olá",
  "Ciao",
  "Goddag",
  "Bonjour",
  "வணக்கம்",
  "Shikamoo",
  "Konnichiwa",
  "Привет",
  "こんにちは",
  "안녕하세요",
  "Guten Tag",
  "નમસ્તે",
  "Sveiki",
  "নমস্কাৰ",
  "Welcome",
];
let index = 0;

let greetings = document.getElementById("greetingsDiffLanguages");
async function greetAnimation() {
  setTimeout(() => {
    greetingsAnimationText();
  }, 1000);
}
function greetingsAnimationText() {
  if (index < 18) {
    greetings.innerHTML = greetingArr[index];
    setTimeout(() => {
        greetingsAnimationText();
      }, 160);
  }
  index++;
}
greetAnimation();

/* -------------------------ENDS---------------------- */
/*/////////// ----------GREETINGS------ANIMATIONS//////////// */

