window.addEventListener('load', (event) => {
    window.setInterval(function clockiphone14pro(){
        let nowIphone = new Date();
         let clockIph = document.querySelector('.clockiphone');
       clockIph.innerHTML = nowIphone.toLocaleTimeString();
   }, 1000);
}) ;

let ringtonephone14pro = document.querySelector('.ringtoneiphone14')

ringtonephone14pro.addEventListener('click', myRingtone)

function myRingtone() {
    console.log('call')
    var iphoneRingtone = new Audio();
    iphoneRingtone.src = 'mp3/ringtone.mp3';
    iphoneRingtone.autoplay = true;

    setTimeout(() => {

        let callwallpaper = document.createElement('img')
      callwallpaper.src = "iphone14/telephonefoto.png"
      let phonepulldiv = document.querySelector('.lookprogram')   
      callwallpaper.style.width = "15px"
      callwallpaper.style.height = "15px"
      document.getElementById('callwindowhalf').style.display = "block"

      phonepulldiv.appendChild(callwallpaper)
    }, 1300);

};

//background iphone function


//wallpaper - 1
window.addEventListener('load', (event) => {


if (localStorage.getItem('bgw1') !== null) {
  var bgwl1 = localStorage.getItem('bgw1');
  document.querySelector('.iphonebackwallpaper').style.backgroundImage = bgwl1;
}

document.getElementById('1bg').addEventListener('click', bgButton1);
function bgButton1() {

  document.querySelector('.iphonebackwallpaper').style.backgroundImage = " url(iphone14/iphonebg1.jpg) "
  localStorage.setItem('bgw1', 'url(iphone14/iphonebg1.jpg)')
}
});

//wallpaper - 2

window.addEventListener('load', (event) => {


  if (localStorage.getItem('bgw2') !== null) {
    var bgwl2 = localStorage.getItem('bgw2');
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = bgwl2;
  }
  
  document.getElementById('2bg').addEventListener('click', bgButton2);
  function bgButton2() {
  
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = " url(iphone14/iphonebg2.jfif) "
    localStorage.setItem('bgw2', 'url(iphone14/iphonebg2.jfif)')
  }
  });

//wallpaper - 3

window.addEventListener('load', (event) => {


  if (localStorage.getItem('bgw3') !== null) {
    var bgwl3 = localStorage.getItem('bgw3');
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = bgwl3;
  }
  
  document.getElementById('3bg').addEventListener('click', bgButton3);
  function bgButton3() {
  
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = " url(iphone14/iphonebg3.jfif) "
    localStorage.setItem('bgw3', 'url(iphone14/iphonebg3.jfif)')
  }
  });

//wallpaper  - 4

window.addEventListener('load', (event) => {


  if (localStorage.getItem('bgw4') !== null) {
    var bgwl4 = localStorage.getItem('bgw4');
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = bgwl4;
  }
  
  document.getElementById('4bg').addEventListener('click', bgButton4);
  function bgButton4() {
  
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = " url(iphone14/iphonebg4.jfif) "
    localStorage.setItem('bgw4', 'url(iphone14/iphonebg4.jfif)')
  }
  });

//wallpaper - 5

window.addEventListener('load', (event) => {


  if (localStorage.getItem('bgw5') !== null) {
    var bgwl5 = localStorage.getItem('bgw5');
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = bgwl5;
  }
  
  document.getElementById('5bg').addEventListener('click', bgButton5);
  function bgButton5() {
  
    document.querySelector('.iphonebackwallpaper').style.backgroundImage = " url(iphone14/iphonebg0.jpg) "
    localStorage.setItem('bgw5', 'url(iphone14/iphonebg0.jpg)')
  }
  });



  function removefunctionbg() {
    localStorage.removeItem('bgw1')
    localStorage.removeItem('bgw2')
    localStorage.removeItem('bgw3')
    localStorage.removeItem('bgw4')
    localStorage.removeItem('bgw5')
  };

//wallpaper end


function callEnd() {
  location.reload();
}
function updateofficialbutton() {  //reload button official
  location.reload();
};

function backhistoryaccbut(){    //history back account page
  document.getElementById('pageForAccount').style.display = "none"
}

//settings start
function setbutwindow() {
  document.querySelector('.setwindow').style.display = "block"
  document.querySelector('.underlineiphone14').style.background = "#000"
  document.querySelector('.charging_object').style.color = "#000"
  document.querySelector('.signalicons').style.color = "#000"
  document.querySelector('.wifiicons').style.color = "#000"
     };

  // settings close   
function exitfunctionbg() {
  document.querySelector('.setwindow').style.display = "none"
  document.querySelector('.underlineiphone14').style.background = "#fff"
  document.querySelector('.charging_object').style.color = "#fff"
  document.querySelector('.signalicons').style.color = "#fff"
  document.querySelector('.wifiicons').style.color = "#fff"
}
//page for bg colour settings start
function page2setwindow() {
  document.querySelector('.page2_setwindow').style.display = "block"
  
}
//page for bg colour settings close
function backbtset001() {
  document.querySelector('.page2_setwindow').style.display = "none"
}
// page for account
function buttonforaccount() {
  document.getElementById('pageForAccount').style.display = "block"
  
}

navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    
    updateLevelInfo();
    
    updateDischargingInfo();
  }
  updateAllBatteryInfo();


  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
   

  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "yes" : "No"}`);
    document.querySelector('.watchbatterynoyes').innerHTML = `${battery.charging ? "." : ""}`
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
    document.querySelector('.charging_object').innerHTML = ` ${battery.level * 100}%`;
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});



window.addEventListener('load', (event) => {
  
  if(localStorage.getItem('bgcl001') !== null) {
   var colorObject1 =  localStorage.getItem('bgcl001');
   document.querySelector('.body').style.background = colorObject1;
  }

  document.querySelector('#clbg001').addEventListener('click', clBgColour1)
  function clBgColour1() {
    document.querySelector('.body').style.background = "#7400b8"
    localStorage.setItem('bgcl001', '#7400b8')
  }

  if(localStorage.getItem('bgcl002') !== null) {
    var colorObject2 =  localStorage.getItem('bgcl002');
    document.querySelector('.body').style.background = colorObject2;
   }
 
   document.querySelector('#clbg002').addEventListener('click', clBgColour2)
   function clBgColour2() {
     document.querySelector('.body').style.background = "#ffee32"
     localStorage.setItem('bgcl002', '#ffee32')
   }

   if(localStorage.getItem('bgcl003') !== null) {
    var colorObject3 =  localStorage.getItem('bgcl003');
    document.querySelector('.body').style.background = colorObject3;
   }
 
   document.querySelector('#clbg003').addEventListener('click', clBgColour3)
   function clBgColour3() {
     document.querySelector('.body').style.background = "#96e072"
     localStorage.setItem('bgcl003', '#96e072')
   }
  

});
function clearallfuncbgcolor() {
  localStorage.removeItem('bgcl001')
  localStorage.removeItem('bgcl002')
  localStorage.removeItem('bgcl003')
}

// Account name save half

const localInput = document.getElementById('writeaccountnamevalue');
const localText = document.getElementById('looknameaccount');
const localButton = document.getElementById('clicksaveaccount');
const storeInput = localStorage.getItem('textinput')

if(localInput) {
  localText.textContent = storeInput
}

localInput.addEventListener('input', letter => {
  localText.textContent = letter.target.value
});

const saveToLocalStorage = () => {
  localStorage.setItem('textinput', localText.textContent)
}
localButton.addEventListener('click', saveToLocalStorage)
 