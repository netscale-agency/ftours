export async function postData( data = {}) {

    const key = "ritam";
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    
    const data = `POST\r\n/rest/api/v1/agency/traveler/create\r\n${
      date + "." + month + "." + year
    } ${
      hours < 10
        ? `0${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        : hours + ":" + minutes + ":" + seconds
    }`;
    function getHash(string) {
      let hmac = crypto.createHmac("sha1", key);
      hmac.update(string);
      return hmac.digest();
    }
    const requestUrl = `https://ritamapi.vsvcloud.com:8920/rest/api/v1/agency/traveler/create?username=test&date=${
      date + "." + month + "." + year
    }+${
      hours < 10 ? `0${hours}` : hours
    }%3A${minutes}%3A${seconds}&signature=${getHash(data).toString("hex")}`;

    const response = await fetch(requestUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}