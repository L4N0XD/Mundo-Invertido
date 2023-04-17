import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";


const ipUrl = "https://api.ipify.org";

fetch(ipUrl)
  .then(response => response.text())
  .then(ip => {
    const myIp = ip;
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://fraudsentinel.p.rapidapi.com/sentinel.json?ip=${myIp}`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "d6859beee1mshcd003a3ac463590p19d84fjsn6c13f3db0077",
            "X-RapidAPI-Host": "fraudsentinel.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.Flag === "Block") {
            window.location.href = "error.html";
        }

    });
  })
  .catch(error => console.log(error));



const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");
const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscriptionId = subscribeToHellfireClub(subscription);
    console.log(`Inscrito com Sucesso: ${subscriptionId}`);

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
});