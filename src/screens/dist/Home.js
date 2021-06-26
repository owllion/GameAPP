"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var expo_font_1 = require("expo-font");
var expo_app_loading_1 = require("expo-app-loading");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_elements_1 = require("react-native-elements");
var react_native_1 = require("react-native");
var axios_1 = require("../api/axios");
var colors_1 = require("../assets/color/colors");
var Card_1 = require("../components/Card");
var Container_1 = require("../components/Container");
var SearchBar_1 = require("../components/SearchBar");
var ListCategory_1 = require("../components/ListCategory");
var width = react_native_1.Dimensions.get("screen").width;
var Home = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var setsetIndexHandler = function (index) { return setSelectedIndex(index); };
    var _c = react_1.useState([]), games = _c[0], setGames = _c[1];
    react_1.useEffect(function () {
        getAllGames();
    }, []);
    var getAllGames = function () { return __awaiter(void 0, void 0, void 0, function () {
        var allGames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("/games/all")];
                case 1:
                    allGames = (_a.sent()).data.allGames;
                    setGames(allGames);
                    return [2 /*return*/];
            }
        });
    }); };
    // const handler = async () => {
    //   const netInfo = useNetInfo();
    //   return !netInfo.isInternetReachable ? alert("沒網路") : alert("有網路!");
    // };
    // handler();
    var isLoaded = expo_font_1.useFonts({
        IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
        IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf")
    })[0];
    if (!isLoaded) {
        return react_1["default"].createElement(expo_app_loading_1["default"], null);
    }
    return (react_1["default"].createElement(Container_1["default"], null,
        react_1["default"].createElement(Header, null,
            react_1["default"].createElement(TextOuterBox, null,
                react_1["default"].createElement(Text, null, "Find your game"),
                react_1["default"].createElement(TextInnerBox, null,
                    react_1["default"].createElement(Text, null, "And have"),
                    react_1["default"].createElement(Text, { color: true },
                        "",
                        " Fun"))),
            react_1["default"].createElement(react_native_elements_1.Icon, { name: "add-shopping-cart", type: "material-icons-outlined", color: colors_1["default"].dark, size: 28, onPress: function () { return console.log("hello"); } })),
        react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, { showsVerticalScrollIndicator: false },
            react_1["default"].createElement(SearchBar_1["default"], null),
            react_1["default"].createElement(Text, { padding: true, small: true }, "Categories"),
            react_1["default"].createElement(ListCategory_1["default"], { selectedIndex: selectedIndex, setsetIndexHandler: setsetIndexHandler }),
            react_1["default"].createElement(Text, { padding: true, small: true }, "Top Game"),
            react_1["default"].createElement(Card_1["default"], { gameList: games, index: selectedIndex }))));
};
var Header = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 2px 20px;\n  flex-direction: row;\n  justify-content: space-between;\n"], ["\n  padding: 2px 20px;\n  flex-direction: row;\n  justify-content: space-between;\n"])));
var TextOuterBox = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-bottom: 15px;\n  margin-top: -10px;\n"], ["\n  padding-bottom: 15px;\n  margin-top: -10px;\n"])));
var TextInnerBox = native_1["default"].View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: row;\n"], ["\n  flex-direction: row;\n"])));
var Text = native_1["default"].Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n\n  font-family: IBMPlexSansBold;\n\n  color: ", ";\n\n  padding: ", ";\n"], ["\n  font-size: ", ";\n\n  font-family: IBMPlexSansBold;\n\n  color: ",
    ";\n\n  padding: ", ";\n"])), function (props) { return (props.small ? "14px" : "18px"); }, function (props) {
    return props.color ? colors_1["default"].primary : "#000";
}, function (props) { return (props.padding ? "20px" : 0); });
exports["default"] = Home;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
