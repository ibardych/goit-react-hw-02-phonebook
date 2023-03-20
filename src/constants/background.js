import { colors } from './colors';

const draw = ctx => {
  var width = ctx.canvas.clientWidth;
  var height = ctx.canvas.clientHeight;
  const font = 8;
  const background = 'rgba(30, 30, 30, .1)';
  const color = colors.theme2;
  const spread = 0.97;

  ctx.font = `${font}px Roboto`;

  let str = 'PUC '.split(''),
    col = width / font,
    arr = [];

  for (let i = 0; i < col; i++) {
    arr[i] = 1;
  }

  function getRandomText() {
    let txt = str[Math.floor(Math.random() * str.length)];
    let random = Math.floor(Math.random() * 2);
    if (txt === 'P') {
      ctx.fillStyle = colors.theme3;
    } else if (txt === 'U' && random === 1) {
      ctx.fillStyle = colors.theme1;
    } else if (txt === 'C' && random === 1) {
      ctx.fillStyle = colors.default;
    }

    return txt;
  }

  const draw = () => {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < arr.length; i++) {
      ctx.fillStyle = color;
      let txt = getRandomText();

      ctx.fillText(txt, i * font, arr[i] * font);

      if (Math.random() > spread) {
        arr[i] = 0;
      }
      arr[i]++;
    }
  };

  setInterval(draw, 50);
};

export default draw;
