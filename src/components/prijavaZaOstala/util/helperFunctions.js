export const genderCheck = (data) => {
  if (data) {
    return "M";
  } else return "Ž";
};
export const uvjetiCheck = (data) => {
  if (data) {
    return "Da";
  } else return "Ne";
};
export const slikeCheck = (data) => {
  if (data) {
    return "Da";
  } else return "Ne";
};

export const sobaCheck = (data) => {
  if (data.jedno) {
    return "Jednokrevetna";
  } else if (data.dvo) {
    return "Dvokrevetna";
  } else if (data.tro) {
    return "trokrevetna";
  } else {
    return "Višekrevetna";
  }
};
export const docCheck = (data) => {
  if (data) {
    return "osobna";
  } else return "putovnica";
};
