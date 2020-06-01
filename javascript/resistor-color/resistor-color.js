//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (colorCode = "Black") => {
  if (colorCode === "black") {
    return 0;
  }
  if (colorCode === "white") {
    return 9;
  }
  if (colorCode === "orange") {
    return 3;
  }
  return ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
}


export const COLORS = colorCode();
//["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
