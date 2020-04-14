"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductRow, _React$Component);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return _react["default"].createElement("tr", null, _react["default"].createElement("td", null, product.id), _react["default"].createElement("td", null, product.productName), _react["default"].createElement("td", null, product.price), _react["default"].createElement("td", null, product.category), _react["default"].createElement("td", null, _react["default"].createElement("a", {
        href: product.imageUrl,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(_react["default"].Component);

var ProductTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProductTable, _React$Component2);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTable).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var productRows = this.props.products.map(function (product) {
        return _react["default"].createElement(ProductRow, {
          product: product
        });
      });
      return _react["default"].createElement("div", null, _react["default"].createElement("h4", null, "Showing all available products"), _react["default"].createElement("hr", null), _react["default"].createElement("table", null, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "Id"), _react["default"].createElement("th", null, "Product Name"), _react["default"].createElement("th", null, "Price"), _react["default"].createElement("th", null, "Category"), _react["default"].createElement("th", null, "Image"))), _react["default"].createElement("tbody", null, productRows)));
    }
  }]);

  return ProductTable;
}(_react["default"].Component);

exports["default"] = ProductTable;