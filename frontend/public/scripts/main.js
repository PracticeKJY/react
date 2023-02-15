"use strict";

var _App = _interopRequireDefault(require("./components/App.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// ES 구조 분해 할당
// 번들링 (트리 쉐이킹)
var _React = React,
  StrictMode = _React.StrictMode;
var _ReactDOM = ReactDOM,
  createRoot = _ReactDOM.createRoot;
var reactDomRoot = createRoot(document.getElementById("root"));
reactDomRoot.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(_App["default"], null)));