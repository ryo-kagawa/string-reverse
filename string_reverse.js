"use strict";

Object.defineProperty(
  String.prototype,
  "reverse",
  {
    value() {
      return this.split("").reverse().join("");
    }
  }
);
