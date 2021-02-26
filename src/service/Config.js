const localhost = true;
let thisURL;
let backendURL;
let urlAPI
if(localhost){
  thisURL = "http://localhost:3000";
  backendURL = "http://192.168.8.106:5000/";
  urlAPI = "http://192.168.8.106:5000/api/";
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