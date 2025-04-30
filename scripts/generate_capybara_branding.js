const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

// Ensure output directories exist
function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate title.png
function generateTitle() {
  const width = 800;
  const height = 300;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#A3D9A5"; // light green, nature theme
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.font = 'bold 64px "Arial"';
  ctx.fillStyle = "#4B3F2F"; // dark brown
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Capybara", width / 2, height / 2 - 40);
  ctx.font = 'bold 48px "Arial"';
  ctx.fillText("Crossy Road", width / 2, height / 2 + 40);

  // Save
  ensureDirSync(path.dirname("assets/images/title.png"));
  const out = fs.createWriteStream("assets/images/title.png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Generated assets/images/title.png"));
}

// Generate app.png (icon)
function generateIcon() {
  const size = 512;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#A3D9A5";
  ctx.fillRect(0, 0, size, size);

  // Simple capybara face (cartoon)
  ctx.fillStyle = "#D2B48C"; // tan
  ctx.beginPath();
  ctx.ellipse(size / 2, size / 2, 170, 140, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.arc(size / 2 - 50, size / 2 - 20, 18, 0, 2 * Math.PI);
  ctx.arc(size / 2 + 50, size / 2 - 20, 18, 0, 2 * Math.PI);
  ctx.fill();

  // Nose
  ctx.beginPath();
  ctx.arc(size / 2, size / 2 + 30, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(size / 2 - 20, size / 2 + 60);
  ctx.lineTo(size / 2, size / 2 + 80);
  ctx.lineTo(size / 2 + 20, size / 2 + 60);
  ctx.stroke();

  // Save
  ensureDirSync(path.dirname("assets/icons/app.png"));
  const out = fs.createWriteStream("assets/icons/app.png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Generated assets/icons/app.png"));
}

generateTitle();
generateIcon();
