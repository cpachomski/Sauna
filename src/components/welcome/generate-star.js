const generateStar = (canvas, context, radius) => {
  const rando = Math.random();

  context.beginPath();

  context.arc(
    radius + Math.random() * canvas.width,
    radius + Math.random() * canvas.height,
    radius * Math.random(),
    0,
    Math.PI * 2,
    false
  );

  if (rando <= 0.5) {
    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.shadowColor = "rgba(255, 255, 255, 0.5)";
    context.shadowBlur = 3;
  } else if (rando > 0.75) {
    context.fillStyle = "rgba(255, 254, 196, 1)";
    context.shadowColor = "rgba(255, 254, 196, 0.5)";
    context.shadowBlur = 4;
  } else {
    context.fillStyle = "rgba(192, 247, 255, 1)";
    context.shadowColor = "rgba(192, 247, 255, 0.5)";
    context.shadowBlur = 7;
  }
  context.fill();
};

export default generateStar;
