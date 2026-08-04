const convertToCelsius = function(fah) {
    fah = ((fah - 32) * 5)/9;
    let converted = fah

    if(converted % 1 != 0){
        converted = parseFloat(converted.toFixed(1));
        return converted;
    }
    return converted;
};

const convertToFahrenheit = function(cel) {
  cel = ((cel * 9) / 5 ) + 32;
  let converted = cel;

  if(converted != 0){
    converted = parseFloat (converted.toFixed(1));
    return converted;
  }

  return converted;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(72.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
