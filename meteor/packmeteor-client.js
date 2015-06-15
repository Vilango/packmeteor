Packmeteor = {
  chrome: {},
  cordova: {}
};

// Cordova device ready dependency
var deviceReady = false;
var deviceReadyDeps = new Deps.Dependency();

// Chrome packaged apps
var chromePackagedApp = (typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined');

Packmeteor.chrome.isReady = function() {
  return chromePackagedApp;
};

Packmeteor.cordova.isReady = function() {
  deviceReadyDeps.depend();
  return deviceReady;
};

// Listen to the cordova event
document.addEventListener("deviceready", function() {
  deviceReady = true;
  deviceReadyDeps.changed();
}, false);


// DISABLED BY GB #10.06.2015 for testing purposes
// This package will stop Migration
if (typeof Reload !== 'undefined') {
  Reload._onMigrate('Packmeteor', function() {
    // check if we are in the a nwjs instance and prevent reload

    if (typeof process !== 'undefined'){
      // Nope we will not allow reload
      console.log("Packmeteor","We will NOT allow reload");
      return [false];
    } else {
      console.log("Packmeteor","We allow reload");
      return [true];  
    }
    
  });
}