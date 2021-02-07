/** Sets the pixels from 0 through length of value. */
module.exports = function(x, y, value, pixels){
  for(let i = 0; i < value.length; i++){
    pixels.set(x, y, i, value[i]);
  }
};