function changeText() {
  const text = document.getElementById("text");

  const messages = [
    "Hello, world!",
    "JavaScript is working!",
    "You clicked the button!",
    "Web development is fun!"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  text.textContent = randomMessage;
}
