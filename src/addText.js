export function addText({
  x, y, x2, y2,
  textString,
  textSize,
  textColor = "black",
  backgroundColor = null,
  p5 = window,
}) {
  if (!textString) {
    return;
  }

  if (textSize) {
    p5.textSize(textSize);
  }
  if (backgroundColor) {
    p5.fill(backgroundColor);
    p5.rect(x, y, x2, y2);
  }
  if (textColor) {
    p5.fill(textColor);
  }
  p5.text(textString, x, y, x2, y2);
}