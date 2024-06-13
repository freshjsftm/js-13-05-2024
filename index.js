
/**
 * draw multiple times thing
 * @param {number} times default value 1
 * @param {string} thing default value ':)'
 */
function drawThings(times=1, thing=':)') {
  for (let i = 1; i <= times; i++) {
    console.log(i, thing);
  }
}



drawThings(2, '|^|^|');
drawThings(5);
drawThings(undefined,'=^.^=');
drawThings();
