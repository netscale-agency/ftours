export const check = (val, id) => {
  switch (id) {
    case "prezimeRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }
      break;
    case "imeRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "telRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "emailRoditelj":
      if (!val.includes("@")) {
          return "Polje nije popunjeno ili nije ispravan format";
      }

      break;
    case "prezimePutnika":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "imePutnika":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "adresaPutnika":
      if (val === "" && !val.includes(" ")) {
        return "Polje nije popunjeno";
      }

      break;
    case "mjesto":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "datumRodenja":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    default:
      break;
  }
};
