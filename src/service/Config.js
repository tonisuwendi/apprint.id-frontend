const localhost = true;
const ipHost = false;
const ipAddress = "192.168.8.106";
let thisURL;
let backendURL;
let urlAPI;
if(localhost){
  thisURL = `http://${ipHost ? ipAddress : "localhost"}:3000`;
  backendURL = `http://${ipHost ? ipAddress : "localhost"}:5000/`;
  urlAPI = `http://${ipHost ? ipAddress : "localhost"}:5000/api/`;
}else{
  thisURL = "https://apprint.id";
  backendURL = "https://admin.apprint.id/";
  urlAPI = "https://admin.apprint.id/api/";
}

const Config = {
  thisURL,
  backendURL,
  urlAPI
}

export default Config;