module.exports = function(source) {
  const src = source.replace(/\n {2}/g, '\n')
  const newSrc = src.slice(src.indexOf('(') + 2, src.indexOf(')') - 2);
  return `module.exports = \`${newSrc}\``;
}