import axios from "axios";

export async function postData(data) {

   await axios.post('https://seal-app-bnztn.ondigitalocean.app/ritam', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
