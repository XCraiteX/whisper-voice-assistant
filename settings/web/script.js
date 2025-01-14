// ====================== Переменные ======================

// Основные
var voiceid = 1;
var usevoice = "True";
var needsaykey = "True";
var names = "";

// Музыка
var platform = "";
var spotifyTiming = 0;
var yandexTiming = 0;
var platformPath = "";

// ====================== Округление ======================

const round = (yandexTiming) => Math.round(yandexTiming * 100) / 100;

// ====================== Основная панель ======================
// VOICE ID
function CheckVoiceIDButtons(){
    if(voiceid == 2){
        document.getElementById("KarenID").style.backgroundColor = "#00ff00";document.getElementById("KarenID").style.boxShadow = "0 0 6px 1px #00ff00"
        document.getElementById("WhisperID").style.backgroundColor = "#ff0000";document.getElementById("WhisperID").style.boxShadow = "none"
    }
    else{
        document.getElementById("WhisperID").style.backgroundColor = "#00ff00";document.getElementById("WhisperID").style.boxShadow = "0 0 6px 1px #00ff00"
        document.getElementById("KarenID").style.backgroundColor = "#ff0000";document.getElementById("KarenID").style.boxShadow = "none"}
}
async function GetVoiceID(){
    voiceid = await eel.getVoiceID()();
    CheckVoiceIDButtons();
}
GetVoiceID();
function SetVoiceID(num){
    voiceid = num;
    CheckVoiceIDButtons();
}

//USE VOICE
function CheckUseVoiceButtons(){
    if(usevoice == "True"){
        document.getElementById("YesVoice").style.backgroundColor = "#00ff00"
        document.getElementById("YesVoice").style.boxShadow = "0 0 6px 1px #00ff00"

        document.getElementById("NoVoice").style.backgroundColor = "#ff0000"
        document.getElementById("NoVoice").style.boxShadow = "none"
    }
    else{
        document.getElementById("NoVoice").style.backgroundColor = "#00ff00"
        document.getElementById("NoVoice").style.boxShadow = "0 0 6px 1px #00ff00"
        document.getElementById("YesVoice").style.backgroundColor = "#ff0000"
        document.getElementById("YesVoice").style.boxShadow = "none"
    }
}
async function GetUseVoice(){
    usevoice = await eel.getUseVoice()();
    CheckUseVoiceButtons();
}
GetUseVoice();
function SetUseVoice(str){
    usevoice = str;
    CheckUseVoiceButtons();
}

//NEED SAY KEY
function CheckNeedSayKeyButtons(){
    if(needsaykey == "True"){
        document.getElementById("YesSay").style.backgroundColor = "#00ff00";document.getElementById("YesSay").style.boxShadow = "0 0 6px 1px #00ff00";
        document.getElementById("NoSay").style.backgroundColor = "#ff0000";document.getElementById("NoSay").style.boxShadow = "none";
    }
    else{
        document.getElementById("NoSay").style.backgroundColor = "#00ff00";document.getElementById("NoSay").style.boxShadow = "0 0 6px 1px #00ff00"
        document.getElementById("YesSay").style.backgroundColor = "#ff0000";document.getElementById("YesSay").style.boxShadow = "none"
    }
}

async function GetNeedSayKey(){
    needsaykey = await eel.getNeedSayKey()();
    CheckNeedSayKeyButtons();
}
GetNeedSayKey();

function SetNeedSayKey(str){
    needsaykey = str;
    CheckNeedSayKeyButtons();
}
// ======Музыка=========

//Platform
function CheckPlatformButtons(){
    if(platform == "spotify"){
        document.getElementById("Spotify").style.backgroundColor = "#00ff00";document.getElementById("Spotify").style.boxShadow = "0 0 6px 1px #00ff00";
        document.getElementById("Yandex").style.backgroundColor = "#ff0000";document.getElementById("Yandex").style.boxShadow = "none";
    }
    else{
        document.getElementById("Yandex").style.backgroundColor = "#00ff00";document.getElementById("Yandex").style.boxShadow = "0 0 6px 1px #00ff00"
        document.getElementById("Spotify").style.backgroundColor = "#ff0000";document.getElementById("Spotify").style.boxShadow = "none"
    }
}

async function GetPlatform(){
    platform = await eel.getPlatform()();
    CheckPlatformButtons();
}
GetPlatform();

function SetPlatform(str){
    platform = str;
    CheckPlatformButtons();
}

// ====================== Сохранение =======================

function SaveMainSettings(){
    names = document.getElementById("namesInput").value;
    eel.saveMainSettings(voiceid, usevoice ,needsaykey);
    eel.saveNamesSettings(names);
}

function SaveMusicSettings(){
    spotifyTiming = document.getElementById("spotifyTiming").value;
    yandexTiming = document.getElementById("yandexTiming").value;
    platformPath = document.getElementById("platformPath").value;
    eel.saveMusicSettings(platform, spotifyTiming, yandexTiming, platformPath)
}

// ====================== Заполнение полей ======================

async function GetNames() {
    names = await eel.getNames()();
    document.getElementById("namesInput").value = names;
}
GetNames();

async function GetPlatformPath() {
    document.getElementById("platformPath").value = await eel.getPlatformPath()();
}
GetPlatformPath();

async function GetSpotifyTiming() {
    spotifyTiming = await eel.getSpotifyTiming()();
    document.getElementById("spotifyTiming").value = spotifyTiming;
}
GetSpotifyTiming();

async function GetYandexTiming() {
    yandexTiming = await eel.getYandexTiming()();
    document.getElementById("yandexTiming").value = yandexTiming;
}
GetYandexTiming();

// ====================== Смена таймингов ======================

function minusSpotifyTiming(){
    spotifyTiming -= 0.1;
    document.getElementById("spotifyTiming").value = round(spotifyTiming);
    spotifyTiming = round(spotifyTiming)
}
function plusSpotifyTiming(){
    spotifyTiming += 0.1;
    spotifyTiming = round(spotifyTiming)
    document.getElementById("spotifyTiming").value = round(spotifyTiming);
}
function minusYandexTiming(){
    yandexTiming -= 0.1;
    yandexTiming = round(yandexTiming)
    document.getElementById("yandexTiming").value = round(yandexTiming);
}
function plusYandexTiming(){
    yandexTiming += 0.1;
    yandexTiming = round(yandexTiming)
    document.getElementById("yandexTiming").value = round(yandexTiming);
}

// ====================== Переключение панелей ======================

function OpenMainSettings(){
    pageId = 1;
    document.getElementById("musicPage").style.display = "none";
    //document.getElementById("customPage").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
    WhatsPage();
}

function OpenMusicSettings(){
    pageId = 2;
    document.getElementById("mainPage").style.display = "none";
    //document.getElementById("customPage").style.display = "none";
    document.getElementById("musicPage").style.display = "flex";
    WhatsPage();
}

var pageId = 1;

function WhatsPage(){
    if(pageId == 1){
        document.getElementById("firstButton").style.backgroundColor = "#44d420e0";
        document.getElementById("secondButton").style.backgroundColor = "#ff0000";
    } else if (pageId == 2){
        document.getElementById("firstButton").style.backgroundColor = "#ff0000";
        document.getElementById("secondButton").style.backgroundColor = "#44d420e0";
    }
}