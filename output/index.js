'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useToggle() {
    var _a = react.useState(true), state = _a[0], setState = _a[1];
    var toggle = function () { return setState(function (prev) { return !prev; }); };
    return { state: state, toggle: toggle };
}

function useWindowSize() {
    //  initialize window size with undefined so it works same for server and client renders
    var _a = react.useState({
        width: undefined,
        height: undefined
    }), size = _a[0], setSize = _a[1];
    react.useEffect(function () {
        function updateSize() {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener("resize", updateSize);
        //   update size with initial window size
        updateSize();
        //   removes event listener on cleanup
        return function () { return window.removeEventListener("resize", updateSize); };
    }, []);
    return size;
}

exports.useToggle = useToggle;
exports.useWindowSize = useWindowSize;
