var hodors = document.querySelectorAll('audio');

chrome.browserAction.onClicked.addListener(function(){
    var index = Math.floor(Math.random()*hodors.length);
    hodors[index].play();
});

var onPlay = function(){
    chrome.browserAction.setIcon({
        path: "icon64-open.png"
    });
};

var onStop = function(){
    chrome.browserAction.setIcon({
        path: "icon64.png"
    });
};

Array.prototype.forEach.call(hodors, function(hodor){
    hodor.addEventListener('playing', onPlay);
    hodor.addEventListener('ended', onStop);
});
