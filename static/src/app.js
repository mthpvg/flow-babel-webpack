// @flow



function greeter(): string {
  return 'Hello, world!';
}

const shell = document.getElementById('shell');

if (shell != null) {
shell.innerHTML = greeter();
}
