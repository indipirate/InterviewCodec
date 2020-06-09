"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  this.NBarz = function () {
    this.nbarz = null; // Define option defaults

    var defaults = {
      backgroundColor: "#000",
      color: "#fff",
      widh: "100%",
      height: "50px",
      content: "Hello World! Iam Nifty Barz",
      className: "nBarz-content",
      position: "top"
    }; // Create options by extending defaults with the passed in arugments

    if (arguments[0] && _typeof(arguments[0]) === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    _renderBarz.call(this);
  }; // Private Methods


  function _renderBarz() {
    var content, contentHolder, docFrag; // Create a DocumentFragment to build with

    docFrag = document.createDocumentFragment(); // Create nbarz element

    this.nbarz = document.createElement("div");
    this.nbarz.className = "scotch-nbarz " + this.options.className;
    this.nbarz.style.backgroundColor = this.options.backgroundColor;
    this.nbarz.style.color = this.options.color; // Create content area and append to modal

    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = this.options.content;
    this.nbarz.appendChild(contentHolder); // Append modal to DocumentFragment

    docFrag.appendChild(this.nbarz); // Append DocumentFragment to body

    document.body.insertBefore(docFrag, document.getElementsByTagName("script")[0]);
  }

  function extendDefaults(source, properties) {
    var property;

    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }

    return source;
  }
})();

var response = {};

switch (_nbarzId) {
  case 1:
    {
      response = {
        content: "This is Attempt One to show Custom Mesage!",
        backgroundColor: "#ffff00",
        color: "#000",
        position: "top"
      };
      break;
    }

  case 2:
    {
      response = {
        content: "This is Attempt Two to show Custom Mesage!",
        backgroundColor: "#000",
        color: "#fff",
        position: "top"
      };
      break;
    }
}

var myBar = new NBarz(response); // Fetch request From api

var myRequest = new Request("flowers.jpg");
fetch(myRequest).then(function (response) {
  if (!response.ok) {
    throw new Error("HTTP error! status: ".concat(response.status));
  }

  var myBar = new NBarz(response);
  return response.blob();
}).then(function (response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});