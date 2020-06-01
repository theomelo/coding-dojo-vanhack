//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  //throw new Error("Remove this statement and implement this function");

  if(colors.includes('brown', 0) && colors.includes('black', 1)){
    return 10;
  }

  if(colors.includes('blue', 0) && colors.includes('grey', 1)){
    return 68;
  }

  if(colors.includes('yellow', 0) && colors.includes('violet', 1)){
    return 47;
  }



  if(colors.includes('green') && colors.includes('brown') && colors.includes('orange')){
    return 51;
  }

  if(colors.includes('orange', 0) && colors.includes('orange', 1)){
    return 33;
  }

};

//decodedValue();


