var hodors = document.querySelectorAll('audio');

chrome.browserAction.onClicked.addListener(function(){
    var index = Math.floor(Math.random()*hodors.length);
    hodors[index].play();
});

var onPlay = function(){
    var icon = this.src.indexOf(';(') > -1 ? 'sad' : 'icon64-open';
    chrome.browserAction.setIcon({
        path: icon + '.png'
    });
};

var onStop = function(){
    chrome.browserAction.setIcon({
        path: 'icon64.png'
    });
};

Array.prototype.forEach.call(hodors, function(hodor){
    hodor.addEventListener('playing', onPlay);
    hodor.addEventListener('ended', onStop);
});
