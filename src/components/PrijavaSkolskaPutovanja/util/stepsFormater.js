export const steps = [
  { name: "korak 1", id: 1, classFilled: "step1" },
  { name: "korak 2", id: 2, classFilled: "step2" },
  { name: "korak 3", id: 3, classFilled: "step3" },
  { name: "korak 4", id: 4, classFilled: "step4" },
];
export function activatedSteps(active) {
  switch (active) {
    case 0:
      return [0];
      break;
    case 1:
      return [0, 1];
      break;
    case 2:
      return [0, 1, 2];
      break;
    case 3:
      return [0, 1, 2, 3];
      break;
    default:
      break;
  }
}
