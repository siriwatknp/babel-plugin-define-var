import path from 'path';
import { transformAsync } from '@babel/core';
import packageJson from '../package.json';

const options = {
  plugins: [
    path.resolve(process.cwd(), `dist/${packageJson.name}.cjs.production.min`),
  ],
  babelrc: false,
};

it('add missing _c', async () => {
  const result = await transformAsync(
    `const Divider = /*#__PURE__*/ _s(React.forwardRef(_c = _s(function Divider(inProps, ref) {
    _s();
    const props = useThemeProps({
        props: inProps,
        name: "MuiDivider"
    });
    const { absolute = false, children, className, component = children ? "div" : "hr", flexItem = false, light = false, orientation = "horizontal", role = component !== "hr" ? "separator" : undefined, textAlign = "center", variant = "fullWidth" } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
    const ownerState = _extends({}, props, {
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ _jsx(DividerRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        role: role,
        ref: ref,
        ownerState: ownerState
    }, other, {
        children: children ? /*#__PURE__*/ _jsx(DividerWrapper, {
            className: classes.wrapper,
            ownerState: ownerState,
            children: children
        }) : null
    }));
}, "526RDEpO1CGEADq5vnCvoNyCejQ=", false, function() {
    return [
        useThemeProps,
        useUtilityClasses
    ];
})), "526RDEpO1CGEADq5vnCvoNyCejQ=", false, function() {
    return [
        useThemeProps,
        useUtilityClasses
    ];
});
_c1 = Divider;
/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */ Divider.muiSkipListHighlight = true;

export default Divider;
var _c1;
$RefreshReg$(_c1, "Divider");
`,
    options
  );

  expect(result?.code).toMatchSnapshot();
});

it('does not add if _c is already defined', async () => {
  const result = await transformAsync(
    `const Divider = /*#__PURE__*/ _s(React.forwardRef(_c = _s(function Divider(inProps, ref) {
    _s();
    const props = useThemeProps({
        props: inProps,
        name: "MuiDivider"
    });
    const { absolute = false, children, className, component = children ? "div" : "hr", flexItem = false, light = false, orientation = "horizontal", role = component !== "hr" ? "separator" : undefined, textAlign = "center", variant = "fullWidth" } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
    const ownerState = _extends({}, props, {
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ _jsx(DividerRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        role: role,
        ref: ref,
        ownerState: ownerState
    }, other, {
        children: children ? /*#__PURE__*/ _jsx(DividerWrapper, {
            className: classes.wrapper,
            ownerState: ownerState,
            children: children
        }) : null
    }));
}, "526RDEpO1CGEADq5vnCvoNyCejQ=", false, function() {
    return [
        useThemeProps,
        useUtilityClasses
    ];
})), "526RDEpO1CGEADq5vnCvoNyCejQ=", false, function() {
    return [
        useThemeProps,
        useUtilityClasses
    ];
});
_c1 = Divider;
/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */ Divider.muiSkipListHighlight = true;

export default Divider;
var _c, _c1;
$RefreshReg$(_c, "Divider$forwardRef");
$RefreshReg$(_c1, "Divider");
`,
    options
  );

  expect(result?.code).toMatchSnapshot();
});

it('add missing _systemDefaultTheme', async () => {
  const result = await transformAsync(
    `'use client';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.shouldForwardProp = shouldForwardProp;
exports.systemDefaultTheme = void 0;
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
_systemDefaultTheme = (0, _createTheme.default)();`,
    options
  );

  expect(result?.code).toMatchSnapshot();
});
