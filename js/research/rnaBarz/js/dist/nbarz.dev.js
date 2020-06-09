"use strict";

(function () {
  this.NBarz = function () {
    this.nbarz = null;
  };

  function _renderBarz() {
    var content, contentHolder, docFrag; // Create a DocumentFragment to build with

    docFrag = document.createDocumentFragment(); // Create nbarz element

    this.nbarz = document.createElement("div");
    this.nbarz.className = "scotch-nbarz " + this.options.className;
    this.nbarz.style.minWidth = this.options.minWidth + "px";
    this.nbarz.style.maxWidth = this.options.maxWidth + "px"; // Create content area and append to modal

    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = "Hello World!";
    this.modal.appendChild(contentHolder); // Append modal to DocumentFragment

    docFrag.appendChild(this.modal); // Append DocumentFragment to body

    document.body.appendChild(docFrag);
  }
})();