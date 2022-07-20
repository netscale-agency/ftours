import crypto from "crypto";

export async function postData(data) {
  const key = "ritam";
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();

  const dataSig = `${process.env.REACT_RITAM_MET}\r\n${
    process.env.REACT_RITAM_SIG
  }\r\n${date + "." + month + "." + year} ${
    hours < 10
      ? `0${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
      : hours + ":" + minutes + ":" + seconds
  }`;
  function getHash(string) {
    let hmac = crypto.createHmac("sha1", key);
    hmac.update(string);
    return hmac.digest();
  }
  const requestUrl = `${process.env.REACT_APP_API_RITAM_KEY_POST}${date +
    "." +
    month +
    "." +
    year}+${
    hours < 10 ? `0${hours}` : hours
  }%3A${minutes}%3A${seconds}&signature=${getHash(dataSig).toString("hex")}`;

  const response = await fetch(requestUrl, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
