import p5 from 'p5';

//TODO: Import done, and working, now twitching and adding a button to stop animation needed 
const background_anim = (p, theme) => {
  const linspace = (n, mi, ma) => {
    // get n numbers evenly distributed between (mi, ma).
    // includes the end values.
    const res = [];
    const s = (ma - mi) / (n - 1);
    let y = mi;
    for (let i = 0; i < n; i++) {
      res.push(y);
      y += s;
    }
    return res;
  };

  const vec = (x, y = null) => {
    // create a vector (x, y). if y is not provided, the vector will be
    // (x, x).
    return p.createVector(x, y || x);
  };

  const drawCirc = (path, rad = 10, strokeColor) => {
    // draw circles of radius rad for every p5.Vector in path.
    // ignores falsy elements.
    if (strokeColor) {
      p.stroke(strokeColor);
    } else {
      p.stroke(255);
    }
    path.forEach((v) => {
      if (v) {
        p.ellipse(v.x, v.y, rad, rad);
      }
    });
  };

  const rndInCirc = (rad, xy = vec(0.0)) => {
    // return a p5.Vector uniformly distributed in a circle with radius rad,
    // centered at xy.
    const a = p.random(p.TWO_PI);
    const r = rad * p.sqrt(p.random(1));
    return vec(xy.x + r * p.cos(a), xy.y + r * p.sin(a));
  };

  let obj, mid, win, width, height;

  function init(n, width) {
    // make some circles along a horizontal line.
    obj = linspace(n, 0, width).map((x) => vec(x, p.windowHeight));
  }

  p.setup = () => {
    win = vec(1000, 1000);
    mid = win.copy().mult(0.5);

    //either filled or unfilled circles
    // p.createCanvas(win.x, win.y);
    p.createCanvas(p.windowWidth, p.windowHeight);

    init(3, p.windowHeight); //Change number for different amount.
    p.fill(p.color(`${theme.opaque_background}`));
    // noFill()
  };

  p.draw = () => {
    const mouse = vec(p.mouseX, p.mouseY);
    obj = obj.map((o) => {
      // vector from mouse to circle
      const df = o.copy().sub(mouse);
      // lengt of df, multiplied by 0.2, can change if neccesary
      const l = df.mag() * 0.2;
      // draw with random radius and color
      drawCirc([o], p.random(l), theme.opaque_secondary);
      // take a small step in the direction of the mouse.
      // and add some randomness
      return o.copy().sub(df.normalize()).add(rndInCirc(5));
    });
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    init(3, p.windowHeight); // Reinitialize or adjust objects for new size
  };
};

export default background_anim;
