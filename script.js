// count is on the letter 0
const count = document.querySelector('.count');
// input is the text field. There's a placeholder on it.
const input = document.querySelector('input');

// keyup indicates when a key is released from the keyboard
input.addEventListener('keyup', () => {
  count.innerHTML = input.value.length;
});
