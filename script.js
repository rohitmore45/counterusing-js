const count1 = document.getElementById("count");
let c = 0;

function increment() {
  c++;
  count1.textContent = c;
  if (c > 20) {
    document.write("Not valid Number");
  }
}

function decrement() {
  c--;
  count1.textContent = c

  if (c < -20) {
    document.write("Not Valid Number");
  }
}

function reset() {
  c = 0;
  count1.textContent = c;
}
