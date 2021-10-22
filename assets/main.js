function onReady(callback) {var intervalId = window.setInterval(function() {if (document.getElementsByTagName('body')[0] !== undefined) { window.clearInterval(intervalId); callback.call(this);      }
    }, 1800); }
  onReady(function() {document.querySelector(".loading").classList.toggle("hidden"); });