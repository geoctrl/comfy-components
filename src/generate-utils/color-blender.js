const colorLerp = require('color-lerp');

console.log(colorLerp('#ffffff','#000000', 3, 'rgb'));


// function fixColor(color) {
//   let c = color;
//   if (color.length === 3) {
//     c = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
//   }
//   return c.replace(/#/, '');
// }
//
// function colorsInBetween(lightColor, darkColor, steps = 1) {
//   let colors = [...Array(steps).keys()].map(() => '');
//   const a = fixColor(lightColor);
//   const b = fixColor(darkColor);
//   if (a.length !== 6 || b.length !== 6) throw Error(`Colors need to be valid`);
//   for (let i = 0; i < 3; i++) {
//     let sub1 = a.substring(2 * i, (2 * i) + 2);
//     let sub2 = b.substring(2 * i, (2 * i) + 2);
//     const v1 = parseInt(sub1, 16);
//     const v2 = parseInt(sub2, 16);
//     console.log(v1, v2);
//     const diff = Math.floor((v1 - v2) / (steps + 1));
//     colors = colors.map((c, j) => {
//       const sub = Math.floor(255 - (diff + (j * diff))).toString(16).toUpperCase();
//       const padSub = ('0' + sub).slice(-2);
//       c += padSub;
//       return c;
//     });
//   }
//   return colors;
// }
//
// console.log(colorsInBetween(light, dark, 3));