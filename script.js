function dda(x1, y1, x2, y2) {
  let c = document.getElementById("dda");
  let ctx = c.getContext("2d");
  let imgData = ctx.createImageData(1, 1);
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 0] = 0;
    imgData.data[i + 1] = 100;
    imgData.data[i + 2] = 50;
    imgData.data[i + 3] = 255;
  }

  let titikx_awal = x1;
  let titiky_awal = y1;

  let titikx_akhir = x2;
  let titiky_akhir = y2;

  let dx = titikx_akhir - titikx_awal;
  let dy = titiky_akhir - titiky_awal;
  let step = 0;

  if (dx > dy) {
    step = dx;
  } else {
    step = dy;
  }

  let x_inc = dx / step;
  let y_inc = dy / step;

  let x = titikx_awal;
  let y = titiky_awal;

  for (let s = 0; s < step; s += 1) {
    x = x + x_inc;
    xa = Math.round(x);
    y = y + y_inc;
    ya = Math.round(y);
    ctx.putImageData(imgData, xa, ya);
    console.log(xa + " " + ya);
  }
}

function clearDda(){
  var canvas = document.getElementById('dda');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function bresenhem(x1, y1, x2, y2) {
  let c = document.getElementById("bresenhem");
  let ctx = c.getContext("2d");
  let imgData = ctx.createImageData(1, 1);
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 0] = 0;
    imgData.data[i + 1] = 100;
    imgData.data[i + 2] = 50;
    imgData.data[i + 3] = 255;
  }

  let dx = x2 - x1;
  let dy = y2 - y1;
  let x = x1;
  let y = y1;
  let e = 2 * dy - dx;

  while (x != x2 && y != y2) {
    if (e < 0) {
      x++;
      e = e + 2 * dy;
    } else {
      x++;
      y++;
      e = e + 2 * dy - 2 * dx;
    }
    ctx.putImageData(imgData, x, y);
    console.log(x + " " + y);
  }
}

function clearBresemhem(){
  var canvas = document.getElementById('bresenhem');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}