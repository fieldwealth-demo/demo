document.documentElement.classList.add('dark');
/* ---- ui_kits/shadcn/faCls.jsx ---- */
// faCls.jsx — Lucide-name → Font Awesome className bridge.
// Components keep using Lucide names like icon="chevron-right"; this maps them
// to Font Awesome 6 class strings. Add entries here as needed — unknown names
// fall back to solid + `fa-<name>` which will render as "missing icon" so the
// gap is visible.
const __FA_MAP = {
  'chevron-down': 'fa-solid fa-chevron-down',
  'chevron-right': 'fa-solid fa-chevron-right',
  'chevron-up': 'fa-solid fa-chevron-up',
  'chevron-left': 'fa-solid fa-chevron-left',
  'chevrons-up-down': 'fa-solid fa-up-down',
  'external-link': 'fa-solid fa-arrow-up-right-from-square',
  'trending-up': 'fa-solid fa-arrow-trend-up',
  'trending-down': 'fa-solid fa-arrow-trend-down',
  'arrow-up': 'fa-solid fa-arrow-up',
  'arrow-down': 'fa-solid fa-arrow-down',
  'arrow-right': 'fa-solid fa-arrow-right',
  'check': 'fa-solid fa-check',
  'check-circle-2': 'fa-solid fa-circle-check',
  'circle-check': 'fa-solid fa-circle-check',
  'search': 'fa-solid fa-magnifying-glass',
  'plus': 'fa-solid fa-plus',
  'calendar': 'fa-regular fa-calendar',
  'ellipsis': 'fa-solid fa-ellipsis',
  'more-horizontal': 'fa-solid fa-ellipsis',
  'loader-circle': 'fa-solid fa-spinner fa-spin',
  'menu': 'fa-solid fa-bars',
  'panel-left': 'fa-solid fa-bars',
  'download': 'fa-solid fa-download',
  'x': 'fa-solid fa-xmark',
  'mail': 'fa-solid fa-envelope',
  'bell': 'fa-solid fa-bell',
  'sparkles': 'fa-solid fa-wand-magic-sparkles',
  'layout-dashboard': 'fa-solid fa-table-columns',
  'check-square': 'fa-regular fa-square-check',
  'terminal': 'fa-solid fa-terminal',
  'credit-card': 'fa-regular fa-credit-card',
  'users': 'fa-solid fa-users',
  'settings': 'fa-solid fa-gear',
  'file-bar-chart': 'fa-solid fa-chart-column',
  'layers': 'fa-solid fa-layer-group',
  'message-circle': 'fa-solid fa-message',
  'folder': 'fa-regular fa-folder',
  'shield': 'fa-solid fa-shield',
  'target': 'fa-solid fa-bullseye',
  'briefcase': 'fa-solid fa-briefcase',
  'shield-check': 'fa-solid fa-shield-halved',
  'droplet': 'fa-solid fa-droplet',
  'percent': 'fa-solid fa-percent',
  'triangle-alert': 'fa-solid fa-triangle-exclamation'
};
function faCls(name) {
  return __FA_MAP[name] || 'fa-solid fa-' + String(name || '');
}
Object.assign(window, {
  faCls,
  __FA_MAP
});
;
/* ---- ui_kits/shadcn/Button.jsx ---- */
// Button — shadcn-style, tuned to the Field Shadcn Figma source.
// Props: variant ('primary'|'secondary'|'destructive'|'outline'|'ghost'|'link'),
//         size ('sm'|'md'|'lg'|'icon'), icon (lucide name), loading, children
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading,
  children,
  onClick,
  disabled,
  style,
  className = ''
}) {
  const base = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    borderRadius: 10,
    border: '1px solid transparent',
    cursor: loading || disabled ? 'not-allowed' : 'pointer',
    opacity: loading || disabled ? 0.6 : 1,
    transition: 'background .15s ease-out, border-color .15s ease-out, opacity .15s ease-out',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.10)',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      height: 32,
      padding: '0 12px',
      fontSize: 13
    },
    md: {
      height: 36,
      padding: '0 16px',
      fontSize: 14
    },
    lg: {
      height: 40,
      padding: '0 20px',
      fontSize: 14
    },
    icon: {
      height: 36,
      width: 36,
      padding: 0,
      fontSize: 14
    }
  }[size];
  const variants = {
    primary: {
      background: 'rgb(5,122,85)',
      color: 'rgb(249,250,251)'
    },
    secondary: {
      background: 'rgba(255,255,255,0.05)',
      color: 'rgb(249,250,251)',
      borderColor: 'rgb(75,85,99)'
    },
    destructive: {
      background: 'rgb(220,38,38)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'rgb(249,250,251)',
      borderColor: 'rgb(75,85,99)'
    },
    ghost: {
      background: 'transparent',
      color: 'rgb(249,250,251)',
      borderColor: 'transparent',
      boxShadow: 'none'
    },
    link: {
      background: 'transparent',
      color: 'rgb(5,122,85)',
      borderColor: 'transparent',
      boxShadow: 'none',
      textDecoration: 'underline',
      textUnderlineOffset: '2px'
    }
  }[variant];
  const ref = React.useRef();
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    onClick: disabled || loading ? undefined : onClick,
    className: className,
    style: {
      ...base,
      ...sizes,
      ...variants,
      ...style
    }
  }, loading && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin",
    style: {
      width: 14,
      height: 14,
      animation: 'spin 1s linear infinite'
    }
  }), !loading && icon && /*#__PURE__*/React.createElement("i", {
    className: faCls(icon),
    style: {
      width: 16,
      height: 16
    }
  }), children, !loading && iconRight && /*#__PURE__*/React.createElement("i", {
    className: faCls(iconRight),
    style: {
      width: 16,
      height: 16
    }
  }));
}
Object.assign(window, {
  Button
});
;
/* ---- ui_kits/shadcn/Form.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Input + Label + Textarea + small form primitives.
function Label({
  children,
  htmlFor,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
      color: 'rgb(250,250,250)',
      ...style
    }
  }, children);
}
function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  style,
  invalid,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: 36,
      padding: '4px 12px',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${invalid ? 'rgb(248,113,113)' : focused ? 'rgb(5,122,85)' : 'rgb(75,85,99)'}`,
      boxShadow: focused ? '0 0 0 3px rgba(5,122,85,0.30)' : 'none',
      color: 'rgb(249,250,251)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      outline: 'none',
      ...style
    }
  }, rest));
}
function Textarea({
  placeholder,
  value,
  onChange,
  rows = 3,
  style
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      padding: '8px 12px',
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${focused ? 'rgb(5,122,85)' : 'rgb(75,85,99)'}`,
      boxShadow: focused ? '0 0 0 3px rgba(5,122,85,0.30)' : 'none',
      color: 'rgb(249,250,251)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      outline: 'none',
      ...style
    }
  });
}
function Field({
  label,
  children,
  hint,
  error
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement(Label, null, label), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(248,113,113)',
      fontFamily: 'Inter'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(163,163,163)',
      fontFamily: 'Inter'
    }
  }, hint) : null);
}
function Checkbox({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      color: 'rgb(249,250,251)',
      fontFamily: 'Inter',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      border: `1px solid ${checked ? 'rgb(5,122,85)' : 'rgb(75,85,99)'}`,
      background: checked ? 'rgb(5,122,85)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 4,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(window, {
  Label,
  Input,
  Textarea,
  Field,
  Checkbox
});
;
/* ---- ui_kits/shadcn/Card.jsx ---- */
// Card primitives — shadcn pattern: Card > CardHeader (title/desc) > CardContent > CardFooter
// Glassmorphic surface — translucent white + backdrop blur lets the page
// gradient bloom through every tile. No opaque fill.
function Card({
  children,
  style,
  padding = 24,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'glass ' + className,
    style: {
      borderRadius: 14,
      padding,
      color: 'rgb(249,250,251)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, children);
}
function CardHeader({
  title,
  description,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'rgb(163,163,163)',
      lineHeight: 1.4
    }
  }, description)), action);
}
function StatCard({
  title,
  value,
  delta,
  icon
}) {
  const ref = React.useRef();
  React.useEffect(() => {}, [icon]);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'rgb(163,163,163)'
    }
  }, title), icon && /*#__PURE__*/React.createElement("i", {
    className: faCls(icon),
    style: {
      width: 16,
      height: 16,
      color: 'rgb(163,163,163)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: delta.startsWith('-') ? 'rgb(248,113,113)' : 'rgb(134,239,172)'
    }
  }, delta.startsWith('-') ? '▼ ' : '▲ ', delta.replace(/^-/, '')));
}
function Badge({
  children,
  variant = 'default'
}) {
  const v = {
    default: {
      background: 'rgb(249,250,251)',
      color: 'rgb(10,10,10)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'rgba(255,255,255,0.08)',
      color: 'rgb(249,250,251)',
      border: '1px solid rgb(75,85,99)'
    },
    success: {
      background: 'rgba(5,122,85,0.18)',
      color: 'rgb(134,239,172)',
      border: '1px solid rgba(5,122,85,0.35)'
    },
    info: {
      background: 'rgba(0,144,255,0.15)',
      color: 'rgb(94,177,239)',
      border: '1px solid rgba(0,144,255,0.35)'
    },
    warning: {
      background: 'rgba(234,179,8,0.18)',
      color: 'rgb(234,179,8)',
      border: '1px solid rgba(234,179,8,0.35)'
    },
    danger: {
      background: 'rgba(220,38,38,0.18)',
      color: 'rgb(248,113,113)',
      border: '1px solid rgba(248,113,113,0.35)'
    },
    outline: {
      background: 'transparent',
      color: 'rgb(249,250,251)',
      border: '1px solid rgb(75,85,99)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 10px',
      borderRadius: 9999,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 12,
      ...v
    }
  }, children);
}
Object.assign(window, {
  Card,
  CardHeader,
  StatCard,
  Badge
});
;
/* ---- ui_kits/shadcn/Chart.jsx ---- */
// Chart — lightweight SVG area chart, 5-series palette from design tokens.

/* ──────────────────────────────────────────────────────────────────────
   ChartLabel — design-system primitive for bar/line chart labels.

   Rule (see colors_and_type.css --chart-label-size-max): chart labels
   render at 12 CSS px and MUST NOT scale with the chart container. SVG
   <text> inside a viewBox'd SVG scales with the viewport, which breaks
   the rule. Use <ChartLabel> absolutely positioned over the SVG instead.

   Strokes inside chart SVGs should use vector-effect="non-scaling-stroke"
   so line weights stay crisp at any container width.

   Props: left/top/right/bottom — any CSS length (px, %, calc()).
          align — 'left' | 'center' | 'right' (default 'left').
          bold — use chart-value weight (600) instead of 400.
          color — override --chart-label-color.
   ──────────────────────────────────────────────────────────────────── */
function ChartLabel({
  left,
  top,
  right,
  bottom,
  align = 'left',
  children,
  bold = false,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left,
      top,
      right,
      bottom,
      fontFamily: 'Inter',
      fontSize: 'var(--chart-label-size, 12px)',
      lineHeight: 'var(--chart-label-line, 16px)',
      fontWeight: bold ? 600 : 'var(--chart-label-weight, 400)',
      color: color || (bold ? 'var(--chart-value-color, rgb(249,250,251))' : 'var(--chart-label-color, rgb(163,163,163))'),
      textAlign: align,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, children);
}

/* ChartFrame — standard wrapper that gives chart labels something to
   absolutely-position against. Children = <svg> + any <ChartLabel>s. */
function ChartFrame({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0,
      ...style
    }
  }, children);
}

// Chart — lightweight SVG area chart, 5-series palette from design tokens.
function AreaChart({
  data,
  width = 560,
  height = 180,
  colors = ['rgb(5,122,85)', 'rgb(0,144,255)']
}) {
  const max = Math.max(...data.flatMap(s => s.values));
  const min = 0;
  const pts = vals => vals.map((v, i) => {
    const x = i / (vals.length - 1) * (width - 20) + 10;
    const y = height - 16 - (v - min) / (max - min || 1) * (height - 32);
    return [x, y];
  });
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width: '100%',
      height
    }
  }, /*#__PURE__*/React.createElement("defs", null, data.map((s, i) => /*#__PURE__*/React.createElement("linearGradient", {
    key: i,
    id: `g${i}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: colors[i % colors.length],
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: colors[i % colors.length],
    stopOpacity: "0"
  })))), [0.25, 0.5, 0.75].map(t => /*#__PURE__*/React.createElement("line", {
    key: t,
    x1: "10",
    x2: width - 10,
    y1: 16 + (height - 32) * t,
    y2: 16 + (height - 32) * t,
    stroke: "rgba(255,255,255,0.06)",
    strokeDasharray: "3 3"
  })), data.map((s, i) => {
    const p = pts(s.values);
    const line = p.map((pt, j) => `${j === 0 ? 'M' : 'L'}${pt[0]},${pt[1]}`).join(' ');
    const area = `${line} L${p[p.length - 1][0]},${height - 16} L${p[0][0]},${height - 16} Z`;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: `url(#g${i})`
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: colors[i % colors.length],
      strokeWidth: "2",
      strokeLinecap: "round"
    }));
  }));
}
Object.assign(window, {
  AreaChart,
  ChartLabel,
  ChartFrame
});
;
/* ---- ui_kits/shadcn/HC.jsx ---- */
/* Highcharts helper + shared Field theme.
   Usage: <HC options={...} style={{ height: 200 }} />
   The Field theme is applied once via Highcharts.setOptions; every HC instance
   inherits it and can override per-chart.

   In addition to the global theme, this module exposes a small set of helpers
   that produce point/series shapes consistent with the Field design system:

     fieldPalette(i)        → { fill, line, fillDeep, fillSoft }
     fieldPieData(slices)   → [{ name, y, color: fill, borderColor: line }]
     fieldBarData(rows)     → same, for bar/column charts
     fieldAreaSeries(name,
                     data,
                     colorIdx)
                            → an area-series config with gradient fill +
                              billing-style markers (the design system's
                              canonical line-chart treatment)
     fieldLineSeries(...)   → same, but a pure line without the area gradient
     fieldSingleColumn(name,
                       data,
                       colorIdx)
                            → a column/bar series with translucent fill +
                              vivid border (radial-graph treatment, applied
                              uniformly across all bars in the series)
*/

(function defineFieldPalette() {
  if (window.FIELD_PALETTE) return;
  // Each entry has a translucent "fill" for the body of the shape and a
  // vivid "line" for the highlight border / dot. Index 0 is the brand green.
  window.FIELD_PALETTE = [{
    fill: 'rgba( 94,214,164,0.55)',
    line: 'rgb( 94,214,164)'
  }, {
    fill: 'rgba(120,160,230,0.55)',
    line: 'rgb(120,160,230)'
  }, {
    fill: 'rgba(180,150,235,0.55)',
    line: 'rgb(180,150,235)'
  }, {
    fill: 'rgba(245,200, 90,0.55)',
    line: 'rgb(245,200, 90)'
  }, {
    fill: 'rgba(240,140,120,0.55)',
    line: 'rgb(240,140,120)'
  }, {
    fill: 'rgba(120,200,210,0.55)',
    line: 'rgb(120,200,210)'
  }, {
    fill: 'rgba(200,170,130,0.55)',
    line: 'rgb(200,170,130)'
  }, {
    fill: 'rgba(160,170,185,0.55)',
    line: 'rgb(160,170,185)'
  }];
  window.fieldPalette = function (i) {
    const p = window.FIELD_PALETTE[i % window.FIELD_PALETTE.length];
    return {
      fill: p.fill,
      line: p.line,
      fillDeep: p.fill.replace('0.55', '0.35'),
      fillSoft: p.fill.replace('0.55', '0.12'),
      fillNone: p.line.replace('rgb(', 'rgba(').replace(')', ',0)')
    };
  };

  // Given a list of slices/rows, decorate each with the corresponding palette
  // colors so pies / bars get the canonical opacity-fill + highlight-border
  // effect with no per-call boilerplate.
  // Each input row may include:
  //   { name, y }        → standard
  //   { label, value }   → friendly aliases
  //   { color, borderColor, ... } → explicit overrides preserved
  function decorate(rows) {
    return (rows || []).map((r, i) => {
      const p = window.fieldPalette(i);
      const name = r.name != null ? r.name : r.label;
      const y = r.y != null ? r.y : r.value;
      return {
        ...r,
        name,
        y,
        color: r.color != null ? r.color : p.fill,
        borderColor: r.borderColor != null ? r.borderColor : p.line
      };
    });
  }
  window.fieldPieData = decorate;
  window.fieldBarData = decorate;

  // Area series with gradient fill + Billing-style markers.
  window.fieldAreaSeries = function (name, data, colorIdx) {
    const p = window.fieldPalette(colorIdx || 0);
    return {
      type: 'area',
      name,
      color: p.line,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [[0, p.fillDeep], [1, p.fillNone]]
      },
      lineWidth: 2,
      marker: {
        enabled: true,
        radius: 3.5,
        fillColor: 'rgb(10,10,10)',
        lineColor: p.line,
        lineWidth: 2,
        symbol: 'circle'
      },
      data
    };
  };

  // Plain line series with billing-style markers, no fill.
  window.fieldLineSeries = function (name, data, colorIdx) {
    const p = window.fieldPalette(colorIdx || 0);
    return {
      type: 'line',
      name,
      color: p.line,
      lineWidth: 2,
      marker: {
        enabled: true,
        radius: 3.5,
        fillColor: 'rgb(10,10,10)',
        lineColor: p.line,
        lineWidth: 2,
        symbol: 'circle'
      },
      data
    };
  };

  // Bar / column series with the radial-graph treatment applied uniformly to
  // every bar in the series (translucent body + vivid border highlight).
  window.fieldSingleColumn = function (name, data, colorIdx, extra) {
    const p = window.fieldPalette(colorIdx || 0);
    return {
      type: 'column',
      name,
      color: p.fill,
      borderColor: p.line,
      borderWidth: 1.5,
      data,
      ...(extra || {})
    };
  };
  window.fieldSingleBar = function (name, data, colorIdx, extra) {
    const p = window.fieldPalette(colorIdx || 0);
    return {
      type: 'bar',
      name,
      color: p.fill,
      borderColor: p.line,
      borderWidth: 1.5,
      data,
      ...(extra || {})
    };
  };
})();
(function applyFieldTheme() {
  if (typeof Highcharts === 'undefined' || window.__fieldHCThemed) return;
  window.__fieldHCThemed = true;
  const lineColors = window.FIELD_PALETTE.map(p => p.line);
  Highcharts.setOptions({
    colors: lineColors,
    chart: {
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      spacing: [8, 4, 8, 4]
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        color: 'rgb(229,231,235)',
        fontWeight: '500',
        fontSize: '11px'
      },
      itemHoverStyle: {
        color: 'rgb(249,250,251)'
      },
      itemHiddenStyle: {
        color: 'rgb(107,114,128)'
      }
    },
    xAxis: {
      lineColor: 'rgba(75,85,99,0.5)',
      tickColor: 'rgba(75,85,99,0.5)',
      gridLineColor: 'rgba(75,85,99,0.25)',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      gridLineColor: 'rgba(75,85,99,0.25)',
      gridLineDashStyle: 'Dash',
      lineColor: 'transparent',
      tickColor: 'transparent',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '11px'
        }
      },
      title: {
        text: null
      }
    },
    tooltip: {
      backgroundColor: 'rgb(17,24,39)',
      borderColor: 'rgb(75,85,99)',
      borderRadius: 8,
      style: {
        color: 'rgb(249,250,251)',
        fontSize: '11.5px'
      },
      shadow: false,
      useHTML: true
    },
    plotOptions: {
      series: {
        animation: {
          duration: 420
        }
      },
      line: {
        lineWidth: 2,
        marker: {
          enabled: true,
          radius: 3.5,
          fillColor: 'rgb(10,10,10)',
          lineColor: window.FIELD_PALETTE[0].line,
          lineWidth: 2,
          symbol: 'circle'
        }
      },
      area: {
        lineWidth: 2,
        marker: {
          enabled: true,
          radius: 3.5,
          fillColor: 'rgb(10,10,10)',
          lineColor: window.FIELD_PALETTE[0].line,
          lineWidth: 2,
          symbol: 'circle'
        },
        fillOpacity: 0.22
      },
      column: {
        borderWidth: 1.5,
        borderRadius: 4,
        pointPadding: 0.06,
        groupPadding: 0.10
      },
      bar: {
        borderWidth: 1.5,
        borderRadius: 4,
        pointPadding: 0.06,
        groupPadding: 0.10
      },
      pie: {
        innerSize: '68%',
        borderColor: 'rgb(14,26,42)',
        borderWidth: 1.5,
        borderRadius: 0,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            brightness: 0.08,
            halo: {
              size: 6,
              opacity: 0.2
            }
          }
        }
      }
    }
  });
})();
function HC({
  options,
  style
}) {
  const ref = React.useRef();
  const innerRef = React.useRef();
  const chartRef = React.useRef(null);
  /* Highcharts can keep a container sized from an earlier measurement — with
     overflow:hidden that clips the whole svg — so every chart re-checks its own
     box against the wrapper and resizes itself when they disagree. */
  const syncSize = React.useCallback(() => {
    /* measure the WRAPPER, never the chart's own container — Highcharts writes
       an inline size onto the container, so comparing it with itself can never
       disagree and a stale 1px box would survive forever */
    const el = ref.current,
      c = chartRef.current;
    if (!el || !c || !c.container) return;
    const w = el.clientWidth,
      h = el.clientHeight;
    if (!w || !h) return;
    const cw = c.container.offsetWidth,
      ch = c.container.offsetHeight;
    if (Math.abs(cw - w) > 1 || Math.abs(ch - h) > 1 || Math.abs(c.chartWidth - w) > 1 || Math.abs(c.chartHeight - h) > 1) {
      try {
        /* setSize is a no-op when the chart already believes it is this size,
           which leaves a stale inline width (a 1px sliver) on the container —
           so write the box back onto the container before resizing */
        c.container.style.width = w + 'px';
        c.container.style.height = h + 'px';
        c.setSize(w, h, false);
        c.redraw(false);
      } catch (e) {}
    }
  }, []);
  React.useEffect(() => {
    if (!ref.current) return;
    chartRef.current = Highcharts.chart(innerRef.current, options);
    const raf = requestAnimationFrame(syncSize);
    /* a tile can mount before its flex box resolves; re-check a few times so a
       chart never sits at its fallback size waiting for a window resize */
    const ts = [40, 140, 320, 700].map(ms => setTimeout(syncSize, ms));
    const ro = new ResizeObserver(syncSize);
    ro.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      ts.forEach(clearTimeout);
      ro.disconnect();
      try {
        chartRef.current && chartRef.current.destroy();
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (chartRef.current) {
      try {
        chartRef.current.update(options, true, true);
      } catch (e) {}
      requestAnimationFrame(syncSize);
    }
  }, [options]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerRef,
    style: {
      position: 'absolute',
      inset: 0
    }
  }));
}
window.HC = HC;
;
/* ---- ui_kits/shadcn/Sidebar.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Field Shadcn — Sidebar (dual-state)
   A single component with two views the user toggles via the hamburger:
     • Collapsed (56 px icon rail) — parents with sub-items show a dot indicator;
       hovering reveals a flyout panel anchored to the right of the rail.
     • Expanded  (240 px)         — labels visible, parents with sub-items
       reveal as inline accordion groups with a chevron.

   The two views are not separate components — they share one item model,
   selection state, active/hover treatments, and the user's last-chosen toggle
   state. See design-system/Sidebar.html for the canonical documentation.

   Item shape:
     { id, label, icon, badge?, section?, children?:[{id,label,badge?}] }
   Sections (optional, expanded-only headers):
     [{ id:'workspace', label:'Workspace' }, { id:'more', label:'More' }]

   Selection model:
     `active` may be a parent id ('clients') or a sub-item id ('clients.households').
     A parent is treated as active when active===parent.id OR when any of its
     children's ids equal `active`. In collapsed mode, this surfaces the active
     accent on the parent icon along with the dot indicator.

   Persistence:
     persistKey           localStorage key for expanded boolean
     persistAccordionKey  localStorage key for the set of open accordion groups

   Backwards-compat:
     Items without `children` and no `sections` array still render as a plain
     flat nav — this is what the UI-kit demo uses.
*/

/* ---- tokens ------------------------------------------------------------ */
const SB_BG = 'rgb(31,41,55)';
const SB_BORDER = 'rgb(75,85,99)';
const SB_INK_DIM = 'rgb(163,163,163)';
const SB_INK = 'rgb(209,213,219)';
const SB_INK_HI = 'rgb(249,250,251)';
const SB_ACCENT = 'rgb(52,211,153)';
const SB_ACCENT_BG = 'rgba(5,122,85,0.22)';
const SB_HOVER_BG = 'rgba(255,255,255,0.04)';
const SB_DOT = 'rgb(52,211,153)';
const W_COLLAPSED = 56;
const W_EXPANDED = 240;
const FLYOUT_GRACE_MS = 150;

/* ---- small primitives -------------------------------------------------- */
function SBTooltip({
  label,
  anchorRef,
  show
}) {
  const [pos, setPos] = React.useState(null);
  React.useEffect(() => {
    if (show && anchorRef.current) {
      const r = anchorRef.current.getBoundingClientRect();
      setPos({
        top: r.top + r.height / 2,
        left: r.right + 10
      });
    }
  }, [show, anchorRef]);
  if (!show || !pos) return null;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("span", {
    style: {
      position: 'fixed',
      left: pos.left,
      top: pos.top,
      transform: 'translateY(-50%)',
      background: 'rgb(17,24,39)',
      border: `1px solid ${SB_BORDER}`,
      borderRadius: 6,
      padding: '5px 9px',
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 500,
      color: SB_INK_HI,
      whiteSpace: 'nowrap',
      zIndex: 80,
      pointerEvents: 'none',
      boxShadow: '0 8px 20px -4px rgba(0,0,0,0.6)',
      animation: 'sbTipIn 140ms ease-out both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -4,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
      width: 7,
      height: 7,
      background: 'rgb(17,24,39)',
      borderLeft: `1px solid ${SB_BORDER}`,
      borderBottom: `1px solid ${SB_BORDER}`
    }
  }), label), document.body);
}

/* ---- main component ---------------------------------------------------- */
function Sidebar({
  items = [],
  sections = null,
  // optional [{id,label}] for grouped headers in expanded
  footerItems = [],
  // items pinned above the user/sign-out cluster
  active,
  onSelect,
  brand = 'FIELD',
  brandCollapsed,
  signOutHref,
  signOutLabel = 'Sign out',
  user,
  // { name, role, initials? }
  defaultExpanded = false,
  persistKey,
  persistAccordionKey,
  onWidthChange,
  onExpandedChange
}) {
  const sbAutoRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(() => {
    if (!persistKey) return defaultExpanded;
    try {
      const v = localStorage.getItem(persistKey);
      if (v === '1') return true;
      if (v === '0') return false;
      return defaultExpanded;
    } catch (e) {
      return defaultExpanded;
    }
  });
  React.useEffect(() => {
    if (persistKey && sbAutoRef.current === null) {
      try {
        localStorage.setItem(persistKey, expanded ? '1' : '0');
      } catch (e) {}
    }
    if (onExpandedChange) onExpandedChange(expanded);
  }, [expanded, persistKey, onExpandedChange]);

  // Accordion open groups (expanded view only) ------------------------------
  const [openGroups, setOpenGroups] = React.useState(() => {
    let stored = null;
    if (persistAccordionKey) {
      try {
        stored = JSON.parse(localStorage.getItem(persistAccordionKey) || 'null');
      } catch (e) {}
    }
    if (Array.isArray(stored)) return new Set(stored);
    // auto-open whichever parent matches the current active sub-item
    const set = new Set();
    if (active && active.includes('.')) set.add(active.split('.')[0]);
    return set;
  });
  React.useEffect(() => {
    if (!persistAccordionKey) return;
    try {
      localStorage.setItem(persistAccordionKey, JSON.stringify([...openGroups]));
    } catch (e) {}
  }, [openGroups, persistAccordionKey]);

  // Auto-open the parent of the active sub-item when active changes externally
  React.useEffect(() => {
    if (active && active.includes('.')) {
      const p = active.split('.')[0];
      setOpenGroups(prev => prev.has(p) ? prev : new Set([...prev, p]));
    }
  }, [active]);
  const W = expanded ? W_EXPANDED : W_COLLAPSED;
  const sbExpRef = React.useRef(expanded);
  sbExpRef.current = expanded;
  React.useEffect(() => {
    const f = e => {
      const c = !!(e.detail && e.detail.collapse);
      if (c) {
        if (sbAutoRef.current === null) sbAutoRef.current = sbExpRef.current;
        setExpanded(false);
      } else if (sbAutoRef.current !== null) {
        const prev = sbAutoRef.current;
        setExpanded(prev);
        setTimeout(() => {
          sbAutoRef.current = null;
        }, 80);
      }
    };
    window.addEventListener('sb:auto', f);
    return () => window.removeEventListener('sb:auto', f);
  }, []);
  React.useEffect(() => {
    window.__sbW = W;
    window.dispatchEvent(new CustomEvent('sb:width', {
      detail: {
        width: W
      }
    }));
  }, [W]);
  React.useEffect(() => {
    if (expanded && sbAutoRef.current !== null) {
      sbAutoRef.current = null;
      if (persistKey) {
        try {
          localStorage.setItem(persistKey, '1');
        } catch (e) {}
      }
    }
  }, [expanded]);
  React.useEffect(() => {
    if (onWidthChange) onWidthChange(W);
  }, [W, onWidthChange]);
  const toggleRef = React.useRef(null);
  const [toggleHover, setToggleHover] = React.useState(false);
  // Toggling the rail unmounts the hovered button before mouseleave can fire,
  // leaving the tooltip stuck open over the newly-rendered toggle. Reset on
  // every state change.
  React.useEffect(() => {
    setToggleHover(false);
  }, [expanded]);

  // Flyout (collapsed-only) -------------------------------------------------
  const [flyout, setFlyout] = React.useState(null); // { parent, anchorTop }
  const flyoutCloseTimer = React.useRef(null);
  const openFlyout = React.useCallback((parent, anchorEl) => {
    if (flyoutCloseTimer.current) {
      clearTimeout(flyoutCloseTimer.current);
      flyoutCloseTimer.current = null;
    }
    const r = anchorEl.getBoundingClientRect();
    setFlyout({
      parent,
      anchorTop: r.top,
      anchorLeft: r.right + 8
    });
  }, []);
  const scheduleClose = React.useCallback(() => {
    if (flyoutCloseTimer.current) clearTimeout(flyoutCloseTimer.current);
    flyoutCloseTimer.current = setTimeout(() => {
      setFlyout(null);
      flyoutCloseTimer.current = null;
    }, FLYOUT_GRACE_MS);
  }, []);
  const cancelClose = React.useCallback(() => {
    if (flyoutCloseTimer.current) {
      clearTimeout(flyoutCloseTimer.current);
      flyoutCloseTimer.current = null;
    }
  }, []);
  // Close flyout immediately whenever we expand
  React.useEffect(() => {
    if (expanded) setFlyout(null);
  }, [expanded]);

  // Selection helpers ------------------------------------------------------
  const isItemActive = item => {
    if (active === item.id) return true;
    if (item.children && item.children.some(c => c.id === active)) return true;
    return false;
  };
  const activeChildOf = parent => {
    if (!parent.children) return null;
    return parent.children.find(c => c.id === active) || null;
  };

  // Group items by section --------------------------------------------------
  const renderSection = sec => {
    const secItems = items.filter(it => (it.section || null) === (sec ? sec.id : null));
    if (!secItems.length) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: sec ? sec.id : '_default'
    }, expanded && sec && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgb(120,128,141)',
        padding: '14px 10px 6px'
      }
    }, sec.label), !expanded && sec && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'rgba(75,85,99,0.5)',
        width: 24,
        alignSelf: 'center',
        margin: '10px 0 6px'
      }
    }), secItems.map(it => /*#__PURE__*/React.createElement(SBItem, {
      key: it.id,
      item: it,
      expanded: expanded,
      isActive: isItemActive(it),
      activeChildId: active,
      isAccordionOpen: !!openGroups.has(it.id),
      onToggleAccordion: () => setOpenGroups(prev => {
        const next = new Set(prev);
        if (next.has(it.id)) next.delete(it.id);else next.add(it.id);
        return next;
      }),
      onSelect: id => onSelect && onSelect(id),
      onHoverOpen: openFlyout,
      onHoverClose: scheduleClose
    })));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: W,
      boxSizing: 'border-box',
      background: SB_BG,
      borderRight: `1px solid ${SB_BORDER}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: expanded ? 'stretch' : 'center',
      padding: expanded ? '14px 12px' : '14px 0',
      gap: 2,
      zIndex: 40,
      transition: 'width 220ms cubic-bezier(0.22, 0.61, 0.36, 1), padding 220ms cubic-bezier(0.22, 0.61, 0.36, 1)',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  }, expanded ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 32,
      padding: '0 4px 0 8px',
      marginBottom: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: SB_INK_HI,
      letterSpacing: 0.4,
      display: 'flex',
      alignItems: 'center'
    }
  }, brand), /*#__PURE__*/React.createElement("button", {
    ref: toggleRef,
    onClick: () => setExpanded(false),
    onMouseEnter: () => setToggleHover(true),
    onMouseLeave: () => setToggleHover(false),
    title: "",
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      border: 'none',
      background: toggleHover ? SB_HOVER_BG : 'transparent',
      color: toggleHover ? SB_INK_HI : SB_INK_DIM,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 120ms ease, color 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left",
    style: {
      fontSize: 11
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, brandCollapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 8,
      flexShrink: 0
    }
  }, brandCollapsed), /*#__PURE__*/React.createElement("button", {
    ref: toggleRef,
    onClick: () => setExpanded(true),
    onMouseEnter: () => setToggleHover(true),
    onMouseLeave: () => setToggleHover(false),
    title: "",
    style: {
      height: 32,
      width: 32,
      borderRadius: 8,
      border: 'none',
      background: 'transparent',
      color: toggleHover ? SB_INK_HI : SB_INK_DIM,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      marginBottom: 10,
      flexShrink: 0,
      transition: 'color 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars",
    style: {
      fontSize: 14,
      width: 16,
      textAlign: 'center'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: '100%',
      alignItems: expanded ? 'stretch' : 'center'
    }
  }, sections ? sections.map(renderSection) : items.map(it => /*#__PURE__*/React.createElement(SBItem, {
    key: it.id,
    item: it,
    expanded: expanded,
    isActive: isItemActive(it),
    activeChildId: active,
    isAccordionOpen: !!openGroups.has(it.id),
    onToggleAccordion: () => setOpenGroups(prev => {
      const next = new Set(prev);
      if (next.has(it.id)) next.delete(it.id);else next.add(it.id);
      return next;
    }),
    onSelect: id => onSelect && onSelect(id),
    onHoverOpen: openFlyout,
    onHoverClose: scheduleClose
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 8
    }
  }), /*#__PURE__*/React.createElement(ProfileCluster, {
    expanded: expanded,
    user: user,
    footerItems: footerItems,
    signOutHref: signOutHref,
    signOutLabel: signOutLabel,
    activeId: active,
    onSelect: onSelect
  })), flyout && !expanded && /*#__PURE__*/React.createElement(Flyout, {
    parent: flyout.parent,
    anchorTop: flyout.anchorTop,
    anchorLeft: flyout.anchorLeft,
    activeChildId: active,
    onEnter: cancelClose,
    onLeave: scheduleClose,
    onSelect: id => {
      onSelect && onSelect(id);
      setFlyout(null);
      cancelClose();
    }
  }), /*#__PURE__*/React.createElement(SBTooltip, {
    label: expanded ? 'Collapse menu' : 'Expand menu',
    anchorRef: toggleRef,
    show: toggleHover
  }));
}

/* ---- single item ------------------------------------------------------- */
function SBItem({
  item,
  expanded,
  isActive,
  activeChildId,
  isAccordionOpen,
  onToggleAccordion,
  onSelect,
  onHoverOpen,
  onHoverClose
}) {
  const [hover, setHover] = React.useState(false);
  const [tipPos, setTipPos] = React.useState(null);
  const btnRef = React.useRef(null);
  const hasChildren = !!(item.children && item.children.length);
  const onEnter = () => {
    setHover(true);
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setTipPos({
        top: r.top + r.height / 2,
        left: r.right + 10
      });
      if (!expanded && hasChildren) onHoverOpen(item, btnRef.current);
    }
  };
  const onLeave = () => {
    setHover(false);
    if (!expanded && hasChildren) onHoverClose();
  };
  const handleClick = () => {
    if (expanded && hasChildren) {
      onToggleAccordion();
      return;
    }
    onSelect(item.id);
  };
  const showActive = isActive;
  const rowColor = showActive ? SB_ACCENT : hover ? SB_INK_HI : SB_INK_DIM;
  const rowBg = showActive ? SB_ACCENT_BG : hover ? SB_HOVER_BG : 'transparent';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    onClick: handleClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    title: "",
    style: {
      position: 'relative',
      height: 34,
      width: expanded ? '100%' : 32,
      borderRadius: 8,
      border: 'none',
      background: rowBg,
      color: rowColor,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: expanded ? 'flex-start' : 'center',
      padding: expanded ? '0 8px' : 0,
      gap: 12,
      transition: 'background-color 120ms ease, color 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${item.icon}`,
    style: {
      fontSize: 14,
      width: 16,
      textAlign: 'center',
      flexShrink: 0
    }
  }), item.dotColor && !hasChildren && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: expanded ? 10 : 6,
      left: expanded ? 18 : 18,
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: item.dotColor,
      border: `1.5px solid ${SB_BG}`,
      pointerEvents: 'none'
    }
  }), expanded && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: showActive ? 600 : 500,
      color: showActive ? SB_ACCENT : SB_INK,
      whiteSpace: 'nowrap',
      textAlign: 'left'
    }
  }, item.label), expanded && item.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9999,
      background: 'rgb(220,38,38)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, item.badge), !expanded && item.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 14,
      height: 14,
      padding: '0 3px',
      borderRadius: 9999,
      background: 'rgb(220,38,38)',
      color: '#fff',
      fontSize: 9,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, item.badge), expanded && hasChildren && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    style: {
      fontSize: 10,
      color: showActive ? SB_ACCENT : SB_INK_DIM,
      transition: 'transform 200ms ease',
      transform: isAccordionOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
      width: 10
    }
  }), !expanded && !hasChildren && hover && tipPos && ReactDOM.createPortal(/*#__PURE__*/React.createElement("span", {
    style: {
      position: 'fixed',
      left: tipPos.left,
      top: tipPos.top,
      transform: 'translateY(-50%)',
      background: 'rgb(17,24,39)',
      border: `1px solid ${SB_BORDER}`,
      borderRadius: 6,
      padding: '5px 9px',
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 500,
      color: SB_INK_HI,
      whiteSpace: 'nowrap',
      zIndex: 80,
      pointerEvents: 'none',
      boxShadow: '0 8px 20px -4px rgba(0,0,0,0.6)',
      animation: 'sbTipIn 140ms ease-out both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -4,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
      width: 7,
      height: 7,
      background: 'rgb(17,24,39)',
      borderLeft: `1px solid ${SB_BORDER}`,
      borderBottom: `1px solid ${SB_BORDER}`
    }
  }), item.label), document.body)), expanded && hasChildren && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: isAccordionOpen ? item.children.length * 30 + 4 : 0,
      transition: 'max-height 220ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      padding: '2px 0 4px',
      marginLeft: 14,
      borderLeft: '1px solid rgba(75,85,99,0.5)'
    }
  }, item.children.map(child => {
    const childActive = activeChildId === child.id;
    return /*#__PURE__*/React.createElement("button", {
      key: child.id,
      onClick: () => onSelect(child.id),
      style: {
        position: 'relative',
        textAlign: 'left',
        height: 28,
        borderRadius: 6,
        border: 'none',
        background: childActive ? SB_ACCENT_BG : 'transparent',
        color: childActive ? SB_ACCENT : SB_INK,
        cursor: 'pointer',
        padding: '0 10px 0 14px',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: childActive ? 600 : 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        transition: 'background-color 120ms ease, color 120ms ease',
        marginLeft: 6
      },
      onMouseEnter: e => {
        if (!childActive) e.currentTarget.style.background = SB_HOVER_BG;
      },
      onMouseLeave: e => {
        if (!childActive) e.currentTarget.style.background = 'transparent';
      }
    }, childActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: -7,
        top: 6,
        bottom: 6,
        width: 2,
        background: SB_ACCENT,
        borderRadius: 2
      }
    }), child.label, child.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        padding: '0 5px',
        borderRadius: 9999,
        background: 'rgb(220,38,38)',
        color: '#fff',
        fontSize: 9,
        fontWeight: 700
      }
    }, child.badge));
  }))));
}

/* ---- Flyout (collapsed sub-nav) --------------------------------------- */
function Flyout({
  parent,
  anchorTop,
  anchorLeft,
  activeChildId,
  onEnter,
  onLeave,
  onSelect
}) {
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      position: 'fixed',
      left: anchorLeft,
      top: Math.max(8, anchorTop - 6),
      minWidth: 200,
      padding: '6px 6px',
      background: SB_BG,
      border: `1px solid ${SB_BORDER}`,
      borderRadius: 10,
      boxShadow: '0 18px 40px -10px rgba(0,0,0,0.55), 0 4px 10px -2px rgba(0,0,0,0.4)',
      zIndex: 60,
      animation: 'sbFlyoutIn 160ms ease-out both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -5,
      top: 14,
      width: 9,
      height: 9,
      background: SB_BG,
      borderLeft: `1px solid ${SB_BORDER}`,
      borderBottom: `1px solid ${SB_BORDER}`,
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px 8px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgb(120,128,141)'
    }
  }, parent.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, parent.children.map(c => {
    const isActive = activeChildId === c.id;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => onSelect(c.id),
      style: {
        position: 'relative',
        textAlign: 'left',
        height: 30,
        borderRadius: 6,
        border: 'none',
        background: isActive ? SB_ACCENT_BG : 'transparent',
        color: isActive ? SB_ACCENT : SB_INK,
        cursor: 'pointer',
        padding: '0 10px',
        fontFamily: 'Inter',
        fontSize: 12.5,
        fontWeight: isActive ? 600 : 500,
        transition: 'background-color 120ms ease, color 120ms ease'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = SB_HOVER_BG;
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = 'transparent';
      }
    }, c.label, c.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        padding: '0 5px',
        borderRadius: 9999,
        background: 'rgb(220,38,38)',
        color: '#fff',
        fontSize: 9,
        fontWeight: 700
      }
    }, c.badge));
  }))), document.body);
}

/* ---- Profile cluster (always-visible footer: Settings, Help, profile, Sign out) - */
function ProfileCluster({
  expanded,
  user,
  footerItems = [],
  signOutHref,
  signOutLabel = 'Sign out',
  activeId,
  onSelect,
  onHoverOpen,
  onHoverClose
}) {
  const initials = user ? user.initials || (user.name || '').split(' ').map(w => w[0]).slice(0, 2).join('') : '';
  const handleSignOut = e => {
    e.preventDefault();
    if (signOutHref) window.open(signOutHref, '_blank', 'noopener,noreferrer');
  };
  if (!user && !footerItems.length && !signOutHref) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      width: '100%',
      alignItems: expanded ? 'stretch' : 'center',
      paddingTop: 8,
      marginTop: 8,
      borderTop: `1px solid rgba(75,85,99,0.5)`,
      flexShrink: 0
    }
  }, footerItems.map(it => /*#__PURE__*/React.createElement(SBItem, {
    key: it.id,
    item: it,
    expanded: expanded,
    isActive: activeId === it.id || it.children && it.children.some(c => c.id === activeId),
    activeChildId: activeId,
    isAccordionOpen: false,
    onToggleAccordion: () => {},
    onSelect: id => onSelect && onSelect(id),
    onHoverOpen: onHoverOpen || (() => {}),
    onHoverClose: onHoverClose || (() => {})
  })), user && /*#__PURE__*/React.createElement(SBProfileButton, {
    expanded: expanded,
    user: user,
    initials: initials,
    gap: footerItems.length > 0
  }), signOutHref && /*#__PURE__*/React.createElement("a", {
    href: signOutHref,
    onClick: handleSignOut,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      height: 32,
      width: expanded ? '100%' : 32,
      marginTop: 4,
      borderRadius: expanded ? 8 : 9999,
      background: 'transparent',
      border: `1px solid ${SB_BORDER}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: expanded ? 'flex-start' : 'center',
      padding: expanded ? '0 8px' : 0,
      gap: 10,
      color: SB_INK_DIM,
      cursor: 'pointer',
      textDecoration: 'none',
      boxSizing: 'border-box',
      overflow: 'hidden',
      flexShrink: 0,
      transition: 'color 120ms ease, background-color 120ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = SB_INK_HI;
      e.currentTarget.style.background = SB_HOVER_BG;
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = SB_INK_DIM;
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    width: "13",
    height: "13",
    fill: "currentColor",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M86.6 297.4L64 320L86.6 342.6L214.6 470.6L237.2 493.2L282.5 447.9C275.9 441.3 243.9 409.3 186.5 351.9L416 351.9L416 287.9L186.5 287.9C243.9 230.5 275.9 198.5 282.5 191.9L237.2 146.6L214.6 169.2L86.6 297.2zM416 480L384 480L384 544L576 544L576 96L384 96L384 160L512 160L512 480L416 480z"
  })), expanded && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 500,
      color: 'inherit',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0
    }
  }, signOutLabel)));
}
Object.assign(window, {
  Sidebar,
  SBItem,
  SBTooltip,
  ProfileCluster
});
/* ---- Profile button: opens the account menu (profile settings, sign out) ---- */
function SBProfileButton({
  expanded,
  user,
  initials,
  gap
}) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState(null);
  const [signedOut, setSignedOut] = React.useState(false);
  const btnRef = React.useRef(null),
    menuRef = React.useRef(null);
  const me = window.fpCurrent ? fpCurrent() : null;
  const email = user.email || (me ? me.email : 'avery.chen@meridianwealth.com');
  const toggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    const r = btnRef.current.getBoundingClientRect();
    setPos({
      left: r.right + 10,
      bottom: Math.max(12, window.innerHeight - r.bottom)
    });
    setOpen(true);
  };
  React.useEffect(() => {
    if (!open) return;
    const off = e => {
      if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', off);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  const go = sec => {
    setOpen(false);
    try {
      localStorage.setItem('field.settings.sec', sec);
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('nav:set', {
      detail: {
        screen: 'settings'
      }
    }));
  };
  const avatar = (size, font) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      flexShrink: 0,
      background: me ? me.bg : 'linear-gradient(135deg, rgb(16,185,129), rgb(5,122,85))',
      color: 'rgb(249,250,251)',
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: font,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, initials);
  const item = (icon, label, onClick, tone) => /*#__PURE__*/React.createElement("button", {
    role: "menuitem",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      borderRadius: 7,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'Inter',
      fontSize: 13,
      color: tone || 'rgb(229,231,235)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + icon,
    style: {
      width: 13,
      height: 13,
      fontSize: 12,
      color: tone || 'rgb(163,163,163)'
    }
  }), label);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    onClick: toggle,
    "aria-haspopup": "menu",
    "aria-expanded": open,
    title: "Switch account",
    "aria-label": "Switch account (signed in as " + user.name + ")",
    "data-switcher": "",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: expanded ? '100%' : 'auto',
      boxSizing: 'border-box',
      padding: expanded ? '8px 8px' : '4px',
      marginTop: gap ? 4 : 0,
      alignSelf: expanded ? 'stretch' : 'center',
      justifyContent: expanded ? 'flex-start' : 'center',
      flexShrink: 0,
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      background: open ? 'rgba(255,255,255,0.06)' : 'transparent',
      textAlign: 'left'
    },
    onMouseEnter: e => {
      if (!open) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    },
    onMouseLeave: e => {
      if (!open) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, avatar(30, 11), !expanded && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -3,
      bottom: -3,
      width: 15,
      height: 15,
      borderRadius: 9999,
      background: 'rgb(31,41,55)',
      border: '1px solid rgb(75,85,99)',
      color: 'rgb(229,231,235)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m7 15 5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 9 5-5 5 5"
  })))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: 'hidden',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.name), user.role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.role)), expanded && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'rgb(163,163,163)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m7 15 5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 9 5-5 5 5"
  })))), open && pos && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    role: "menu",
    style: {
      position: 'fixed',
      left: pos.left,
      bottom: pos.bottom,
      zIndex: 1000,
      width: 250,
      padding: 6,
      borderRadius: 12,
      background: 'rgb(17,24,39)',
      border: '1px solid rgb(75,85,99)',
      boxShadow: '0 18px 40px -12px rgba(0,0,0,0.7)',
      fontFamily: 'Inter'
    }
  }, window.FPSwitchList && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FPSwitchList, {
    onDone: () => setOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(75,85,99,0.6)',
      margin: '4px'
    }
  })), item('user', 'Profile & security', () => go('profile')), item('gear', 'Settings', () => go('dashboard')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(75,85,99,0.6)',
      margin: '4px'
    }
  }), item('arrow-right-from-bracket', 'Sign out', () => {
    setOpen(false);
    setSignedOut(true);
  })), document.body), signedOut && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Signed out",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 30%, rgb(17,32,38), rgb(10,14,22))',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      padding: '28px 28px 24px',
      borderRadius: 16,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgb(55,65,81)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.3em',
      color: 'rgb(52,211,153)'
    }
  }, "FIELD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, "You've signed out"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgb(163,163,163)',
      lineHeight: 1.5
    }
  }, "Signed out as ", email, "."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSignedOut(false),
    style: {
      height: 38,
      marginTop: 6,
      borderRadius: 9,
      border: '1px solid rgb(5,122,85)',
      background: 'rgb(5,122,85)',
      color: '#fff',
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Sign back in"))), document.body));
}

/* ---- Accounts: one prototype, three seats -----------------------------------
   Advisor, Firm admin and Field Ops share one set of components (client list,
   client page, dashboards, Field AI), so a change to a shared view shows for
   every seat. Switch from the name at the bottom left. */
const FP_KEY = 'field.persona';
const FIELD_PERSONAS = [{
  id: 'advisor',
  name: 'Avery Chen',
  role: 'Senior Advisor',
  org: 'Alpine Partners',
  email: 'avery.chen@meridianwealth.com',
  init: 'AC',
  bg: 'linear-gradient(135deg, rgb(16,185,129), rgb(5,122,85))'
}, {
  id: 'firm',
  name: 'Jane Cooper',
  role: 'Firm admin',
  org: 'Alpine Partners',
  email: 'jane.cooper@alpinepartners.com',
  init: 'JC',
  bg: 'linear-gradient(135deg, rgb(96,165,250), rgb(37,99,235))'
}, {
  id: 'ops',
  name: 'Kyung Min',
  role: 'Internal ops',
  org: 'Field',
  email: 'kyung@fieldwealth.ai',
  init: 'KM',
  bg: 'linear-gradient(135deg, rgb(107,114,128), rgb(55,65,81))'
}];
/* advisor, firm admin or internal ops: all three run in this one app on the same shell */
const FP_IDS = ['advisor', 'firm', 'ops'];
let __fpMem = null; /* artboards may have no storage: keep the choice in memory too */
function fpHash() {
  try {
    const m = String(location.hash || '').match(/as-(advisor|firm|ops)/);
    return m ? m[1] : null;
  } catch (e) {
    return null;
  }
}
function fpGet() {
  const h = fpHash();
  if (h && h !== window.__fpHashSeen) {
    window.__fpHashSeen = h;
    __fpMem = h;
    try {
      localStorage.setItem(FP_KEY, h);
    } catch (e) {}
    return h;
  }
  if (__fpMem) return __fpMem;
  try {
    const v = localStorage.getItem(FP_KEY);
    if (FP_IDS.indexOf(v) >= 0) return v;
  } catch (e) {}
  return 'advisor';
}
function fpCurrent() {
  return FIELD_PERSONAS.find(p => p.id === fpGet()) || FIELD_PERSONAS[0];
}
function fpSet(id) {
  if (id === fpGet()) return;
  __fpMem = id;
  try {
    localStorage.setItem(FP_KEY, id);
  } catch (e) {}
  window.dispatchEvent(new CustomEvent('persona:set', {
    detail: {
      id
    }
  }));
}
/* where project files live, worked out from a script we know loaded */
function fpBase() {
  try {
    const s = document.querySelector('script[src*="proto/app-ui"]');
    if (s && s.src && /^(https?|file):/.test(s.src)) return s.src.replace(/proto\/app-ui[^/]*\.js.*$/, '');
  } catch (e) {}
  return '';
}
function FPAvatar({
  p,
  size = 30,
  font = 11
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      flexShrink: 0,
      background: p.bg,
      color: 'rgb(249,250,251)',
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: font,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, p.init);
}

/* the account list at the top of the profile menu */
function FPSwitchList({
  onDone
}) {
  const cur = fpGet();
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Switch account"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'rgb(115,115,115)',
      padding: '6px 10px 4px'
    }
  }, "Switch account"), FIELD_PERSONAS.map(p => {
    const on = p.id === cur;
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FPAvatar, {
      p: p,
      size: 28,
      font: 10.5
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'Inter',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'rgb(249,250,251)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'Inter',
        fontSize: 11,
        color: 'rgb(163,163,163)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, p.role + ' · ' + p.org)), on && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check",
      style: {
        fontSize: 11,
        color: 'rgb(52,211,153)'
      }
    }));
    const st = {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      boxSizing: 'border-box',
      padding: '7px 10px',
      borderRadius: 8,
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      textDecoration: 'none',
      background: on ? 'rgba(5,122,85,0.14)' : 'transparent'
    };
    const hov = {
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    };
    return /*#__PURE__*/React.createElement("button", _extends({
      key: p.id,
      role: "menuitemradio",
      "aria-checked": on,
      onClick: () => {
        onDone && onDone();
        fpSet(p.id);
      },
      style: st
    }, hov), inner);
  }));
}

/* which app shows: advisor (the default), firm or ops */
function FPRoot({
  Advisor
}) {
  const [id, setId] = React.useState(fpGet);
  const [, bump] = React.useState(0);
  React.useEffect(() => {
    const f = e => {
      const next = e.detail && e.detail.id || fpGet();
      __fpMem = next;
      setId(next);
      window.scrollTo(0, 0);
      const p = FIELD_PERSONAS.find(x => x.id === next);
      if (p) setTimeout(() => window.dispatchEvent(new CustomEvent('cmd:toast', {
        detail: {
          text: 'Signed in as ' + p.name + ' · ' + p.role
        }
      })), 300);
    };
    const r = () => bump(n => n + 1);
    window.addEventListener('persona:set', f);
    window.addEventListener('firm-ready', r);
    window.addEventListener('ops-ready', r);
    /* another tab or a link with #as-… can change the account */
    const sync = () => setId(cur => {
      const v = fpGet();
      return v === cur ? cur : v;
    });
    const onStore = e => {
      if (!e || e.key === FP_KEY) sync();
    };
    window.addEventListener('storage', onStore);
    window.addEventListener('focus', sync);
    window.addEventListener('hashchange', sync);
    document.addEventListener('visibilitychange', sync);
    const t = setInterval(sync, 1000);
    return () => {
      window.removeEventListener('persona:set', f);
      window.removeEventListener('firm-ready', r);
      window.removeEventListener('ops-ready', r);
      window.removeEventListener('storage', onStore);
      window.removeEventListener('focus', sync);
      document.removeEventListener('visibilitychange', sync);
      clearInterval(t);
    };
  }, []);
  if (id === 'firm') {
    const Firm = window.FirmApp;
    return Firm ? /*#__PURE__*/React.createElement(Firm, {
      key: "firm"
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        fontFamily: 'Inter',
        color: 'rgb(163,163,163)'
      }
    }, "Loading the firm view\u2026");
  }
  if (id === 'ops') {
    const Ops = window.OpsApp;
    return Ops ? /*#__PURE__*/React.createElement(Ops, {
      key: "ops"
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        fontFamily: 'Inter',
        color: 'rgb(163,163,163)'
      }
    }, "Loading internal ops\u2026");
  }
  return /*#__PURE__*/React.createElement(Advisor, {
    key: "advisor"
  });
}
Object.assign(window, {
  FIELD_PERSONAS,
  fpGet,
  fpSet,
  fpCurrent,
  fpBase,
  FPAvatar,
  FPSwitchList,
  FPRoot
});
;
/* ---- ui_kits/shadcn/Topbar.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Field Shadcn — Topbar
   Sticky 56px header used at the top of every workspace. Mirrors the
   Asset Manager Portal top bar: title + date on the left, a centered search
   pill, and right-rail action buttons.

   Usage:
     <Topbar
       title="Dashboard"
       subtitle="Thu Nov 20th 2025"
       searchPlaceholder="Search by firm name, advisor, city, or CRD…"
       onBack={...}                          // optional — shows back chevron
       actions={
         <>
           <TopbarButton variant="ghost">Year to date <i className="fa-solid fa-chevron-down" /></TopbarButton>
           <TopbarButton variant="outline" icon="arrow-up-from-bracket">Export</TopbarButton>
           <TopbarButton variant="primary">Edit Dashboard</TopbarButton>
         </>
       }
       activeSelections={[{ label:'Northeast', icon:'location-dot' }]}    // optional
       onClearAll={...}
     />
*/

function Topbar({
  title,
  subtitle,
  searchPlaceholder = 'Search',
  hideSearch,
  onBack,
  actions,
  activeSelections,
  onClearAll,
  center,
  children
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(16,25,40,0.86)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(75,85,99,0.45)'
    }
  }, center ? /*#__PURE__*/React.createElement(TopbarCenterRow, {
    onBack: onBack,
    title: title,
    subtitle: subtitle,
    center: center,
    actions: actions
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px'
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      border: '1px solid rgb(75,85,99)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left",
    style: {
      fontSize: 11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, title && /*#__PURE__*/React.createElement(TopbarTitle, {
    title: title
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      minWidth: center ? 240 : 0
    }
  }, center ? center : !hideSearch && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      width: '100%',
      maxWidth: 420,
      padding: '0 12px',
      borderRadius: 8,
      background: 'rgba(0,0,0,0.35)',
      border: '1px solid rgba(75,85,99,0.5)',
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    style: {
      fontSize: 11,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, searchPlaceholder))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: hideSearch || center ? 1 : 0,
      minWidth: 0
    }
  }, actions), children), activeSelections !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderTop: '1px solid rgba(75,85,99,0.25)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginRight: 4
    }
  }, "Active Selections:"), activeSelections.length === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(107,114,128)',
      fontStyle: 'italic'
    }
  }, "None") : activeSelections.map((sel, i) => /*#__PURE__*/React.createElement(SelectionChip, {
    key: i,
    label: sel.label,
    icon: sel.icon,
    onRemove: sel.onRemove
  })), activeSelections.length > 0 && onClearAll && /*#__PURE__*/React.createElement("button", {
    onClick: onClearAll,
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: 'none',
      color: 'rgb(163,163,163)',
      fontFamily: 'Inter',
      fontSize: 11.5,
      cursor: 'pointer'
    }
  }, "Clear All")));
}
function SelectionChip({
  label,
  icon,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 8px',
      borderRadius: 6,
      background: 'rgba(5,122,85,0.22)',
      border: '1px solid rgba(5,122,85,0.55)',
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(110,240,180)'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    style: {
      fontSize: 10
    }
  }), label, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    onClick: onRemove,
    style: {
      fontSize: 9,
      opacity: 0.7,
      cursor: onRemove ? 'pointer' : 'default'
    }
  }));
}
function TopbarButton({
  variant = 'ghost',
  icon,
  active,
  children,
  ...rest
}) {
  const base = {
    height: 30,
    padding: '0 12px',
    borderRadius: 8,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    border: '1px solid transparent'
  };
  let style;
  if (variant === 'primary') {
    style = {
      background: 'rgb(5,122,85)',
      border: '1px solid rgb(5,122,85)',
      color: '#fff'
    };
  } else if (variant === 'outline') {
    style = active ? {
      background: 'rgba(5,122,85,0.22)',
      border: '1px solid rgb(5,122,85)',
      color: 'rgb(52,211,153)'
    } : {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.45)',
      color: 'rgb(229,231,235)'
    };
  } else {
    style = {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.45)',
      color: 'rgb(229,231,235)'
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    style: {
      fontSize: 11
    }
  }), children);
}
Object.assign(window, {
  Topbar,
  TopbarButton,
  SelectionChip
});
const TB_ICONS = {
  AI: 'wand-magic-sparkles',
  Growth: 'circle-nodes',
  Home: 'house',
  Dashboard: 'table-columns',
  Clients: 'users',
  Insights: 'lightbulb',
  Notifications: 'bell',
  Advisors: 'user-tie',
  Advisor: 'user-tie',
  Billing: 'file-invoice-dollar',
  'Data sharing': 'share-nodes',
  Overview: 'chart-line-up',
  'Organic growth': 'circle-nodes',
  Prospects: 'bullseye',
  Settings: 'gear',
  'Help & support': 'circle-question',
  'Manager Concentration': 'chart-pie'
};
function TopbarTitle({
  title
}) {
  if (typeof title !== 'string') return title;
  const ic = TB_ICONS[title];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 13,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap'
    }
  }, ic && /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + ic,
    style: {
      fontSize: 12,
      color: 'rgb(52,211,153)'
    }
  }), title);
}
function TopbarCenterRow({
  onBack,
  title,
  subtitle,
  center,
  actions,
  children
}) {
  const rowRef = React.useRef(),
    lRef = React.useRef(),
    rRef = React.useRef();
  const [cw, setCw] = React.useState(552);
  React.useLayoutEffect(() => {
    const m = () => {
      const row = rowRef.current;
      if (!row) return;
      const half = row.clientWidth / 2 - 24 - 16 - Math.max(lRef.current ? lRef.current.offsetWidth : 0, rRef.current ? rRef.current.offsetWidth : 0);
      setCw(Math.max(0, Math.min(552, Math.floor(half * 2))));
    };
    m();
    const ro = new ResizeObserver(m);
    [rowRef.current, lRef.current, rRef.current].forEach(el => el && ro.observe(el));
    return () => ro.disconnect();
  }, []);
  const fits = cw >= 260;
  return /*#__PURE__*/React.createElement("div", {
    ref: rowRef,
    style: {
      position: 'relative',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: lRef,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0,
      minWidth: 0
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.45)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left",
    style: {
      fontSize: 11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, title && /*#__PURE__*/React.createElement(TopbarTitle, {
    title: title
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      whiteSpace: 'nowrap'
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: fits ? {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: cw,
      transform: 'translate(-50%, -50%)',
      display: 'flex'
    } : {
      flex: 1,
      minWidth: 200,
      display: 'flex'
    }
  }, center), /*#__PURE__*/React.createElement("div", {
    ref: rRef,
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, actions, children));
}
;
/* ---- advisor/AdvisorTiles.jsx ---- */
// AdvisorTiles — the 12 tiles composing the Advisor Dashboard.
// Each tile: Card with header (title + overflow), body, and footer (As of Today / See more).
// All in a single file to keep the shell tight.

/* Period context — set by the dashboard secondary-menu filter at App level.
   Tiles consume this to render period-appropriate data + footer labels. */
const PeriodContext = React.createContext('Year to date');
window.PeriodContext = PeriodContext;
function periodToLabel(period) {
  switch (period) {
    case 'Today':
      return 'Today · May 13';
    case 'This week':
      return 'May 7 – 13';
    case 'This month':
      return 'May 1 – 13';
    case 'This quarter':
      return 'Apr – May';
    case 'Year to date':
      return 'Jan – May';
    case 'Last 12 months':
      return 'Jun \u201925 – May \u201926';
    case 'All time':
      return 'All time';
    default:
      return period || 'As of Today';
  }
}
window.periodToLabel = periodToLabel;
const TILE = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgb(75,85,99)',
  borderRadius: 14,
  display: 'flex',
  flexDirection: 'column',
  color: 'rgb(249,250,251)',
  overflow: 'hidden',
  height: '100%',
  minHeight: 'var(--tile-min-height, 440px)'
};
const TILE_HEAD = {
  display: 'flex',
  alignItems: 'center',
  padding: '14px 16px 10px'
};
const TILE_TITLE = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 15,
  letterSpacing: '-0.01em'
};
const TILE_BODY = {
  flex: 1,
  padding: '0 16px 8px',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0
};
const TILE_FOOT = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  borderTop: '1px solid rgba(75,85,99,0.55)',
  fontFamily: 'Inter',
  fontSize: 12,
  color: 'rgb(163,163,163)'
};
const SEE_MORE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  color: 'rgb(5,122,85)',
  textDecoration: 'none',
  fontSize: 12,
  fontWeight: 500,
  cursor: 'pointer'
};
const OVERFLOW = {
  background: 'transparent',
  border: 'none',
  color: 'rgb(163,163,163)',
  cursor: 'pointer',
  width: 24,
  height: 24,
  borderRadius: 6,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};

/* Per-tile data provenance — surfaced via the info icon in each tile header.
   Keyed by tile title. `source` = where the data originates; `method` = how
   the numbers are derived; `cadence` = refresh frequency. */
const TILE_INFO = {
  'Recent Activity': {
    source: 'Custodian transaction feed (deposits, withdrawals, transfers, trades and fees) across all managed accounts.',
    cadence: 'Refreshes every 15 minutes'
  },
  'Notifications': {
    source: 'Aggregated from CRM tasks, custodian alerts (Schwab / Fidelity), e-signature status, and the AI monitoring engine.',
    cadence: 'Real-time'
  },
  'Opportunities': {
    source: 'Generated by the overnight AI analysis run across all household portfolios and held-away accounts.',
    method: 'Each portfolio is scored for drift, tax-loss harvesting, idle cash, and concentration against the household’s target policy. Dollar values reflect the assets in scope for the action.',
    cadence: 'Recomputed nightly at 2:00 AM ET'
  },
  'Top Clients': {
    source: 'Household-level balances from the custodian feed and your book-of-business records.',
    cadence: 'Updated daily after custodian reconciliation'
  },
  'Billing Summary': {
    source: 'Your fee schedule plus reconciled period-end account balances.',
    method: 'Fees = billable AUM × applied advisory rate, prorated for the period. Collected vs. outstanding is reconciled against custodian debits and the AR ledger.',
    cadence: 'Updated daily; finalized at quarter close'
  },
  'Content Hub': {
    source: 'Engagement events from the client portal and email campaign tool.',
    method: 'Shows the most recent shares and opens across your client base. Activity reflects unique client interactions, de-duplicated per 24 hours.',
    cadence: 'Refreshes hourly'
  },
  'AUM Asset Allocation': {
    source: 'Position-level holdings from custodians, classified by the security master.',
    method: 'Each holding is mapped to an asset class and aggregated by market value across all managed accounts, then expressed as a percent of total AUM.',
    cadence: 'Updated daily after market close'
  },
  'Assets Under Management': {
    source: 'Reconciled account balances from the custodian feed, grouped by account registration type.',
    method: 'Total managed market value as of the prior business close. “Held-away” reflects accounts you advise on but do not custody.',
    cadence: 'Updated daily after custodian reconciliation'
  },
  'Cash Flow': {
    source: 'Transaction records from the custodian feed (contributions, distributions, fees, transfers).',
    method: 'Net flow = inflows − outflows for the selected period, excluding internal transfers between a household’s own accounts.',
    cadence: 'Updated daily'
  },
  'Projected Fees': {
    source: 'Current billable AUM, your fee schedule, and a forward growth assumption.',
    method: 'Projects advisory revenue through 2030 using a blended portfolio growth rate plus modeled net new assets. A planning estimate — not a guarantee of future revenue.',
    cadence: 'Recomputed weekly'
  },
  'Holdings Breakdown': {
    source: 'Position-level holdings from custodians, rolled up across all managed accounts.',
    method: 'Top 10 securities ranked by aggregate market value (AUM). Identical tickers are combined across accounts and households.',
    cadence: 'Updated daily after market close'
  },
  'Client Activity': {
    source: 'Touchpoint log from the CRM — meetings, calls, emails, and portal logins.',
    method: 'Each cell is one client-week; intensity reflects the count of logged interactions over the last 26 weeks.',
    cadence: 'Refreshes daily'
  },
  /* --- My Practice --- */
  'Client Age': {
    source: 'Client birthdates from CRM profiles, joined to reconciled custodian balances.',
    method: 'Households are bucketed into age brackets; bars compare aggregate AUM to total client assets (including held-away) per bracket.',
    cadence: 'Updated daily'
  },
  'Open Date': {
    source: 'Account open dates from the custodian feed and CRM relationship records.',
    method: 'Clients are grouped by tenure (years since their first account opened); AUM vs. total assets shown per tenure band.',
    cadence: 'Updated daily'
  },
  'Client Age Distribution': {
    source: 'Client birthdates from CRM profiles.',
    method: 'Headcount per age band, with each band expressed as a percent of your total book.',
    cadence: 'Updated daily'
  },
  'Client Occupation': {
    source: 'Occupation field on CRM client profiles.',
    method: 'Clients and their aggregate AUM grouped by occupation category. Uncategorized profiles are excluded.',
    cadence: 'Updated daily'
  },
  'AUM Tier Distribution': {
    source: 'Reconciled household balances from the custodian feed.',
    method: 'Households are grouped into AUM tiers; each row shows the client count and total AUM in that tier.',
    cadence: 'Updated daily after custodian reconciliation'
  },
  'Service Penetration': {
    source: 'Service enrollment and engagement records from the CRM.',
    method: 'Share of clients enrolled in each service line (investment, planning, tax, estate). A client can count toward more than one service.',
    cadence: 'Updated daily'
  },
  'Top Asset Managers': {
    source: 'Position-level holdings classified by fund family / asset manager via the security master.',
    method: 'Aggregate AUM grouped by asset manager across all managed accounts, ranked by market value.',
    cadence: 'Updated daily after market close'
  },
  'Managed Assets Growth': {
    source: 'Reconciled period-end account balances from the custodian feed.',
    method: 'Trend of total managed AUM over time. Growth reflects both market movement and net new assets.',
    cadence: 'Updated daily'
  },
  'Positions': {
    source: 'Position-level holdings from the custodian feed.',
    method: 'Holdings rolled up across all managed accounts, showing market value and portfolio weight per security.',
    cadence: 'Updated daily after market close'
  },
  'Inflows & Outflows': {
    source: 'Transaction records from the custodian feed.',
    method: 'Inflows (contributions, transfers in) vs. outflows (distributions, fees, transfers out) per period, excluding internal transfers between a household’s own accounts.',
    cadence: 'Updated daily'
  },
  'Cash Flow by Type': {
    source: 'Custodian transactions classified by transaction type.',
    cadence: 'Updated daily'
  },
  'Net Cash Flow Trend': {
    source: 'Custodian transaction feed.',
    method: 'Net flow (inflows − outflows) charted over time, excluding internal transfers.',
    cadence: 'Updated daily'
  },
  'Cash Flow by Account Type': {
    source: 'Custodian transactions joined to account registration type.',
    method: 'Net flow grouped by account type (taxable, IRA, Roth, trust, etc.) for the selected period.',
    cadence: 'Updated daily'
  },
  'Recent Transactions': {
    source: 'Posted transactions from the custodian feed.',
    cadence: 'Refreshes hourly'
  },
  /* --- My Practice KPIs --- */
  'Total AUM': {
    source: 'Reconciled account balances from the custodian feed.',
    method: 'Sum of market value across all managed accounts as of the prior business close.',
    cadence: 'Updated daily after custodian reconciliation'
  },
  'YTD Growth': {
    source: 'Reconciled period-end balances from the custodian feed.',
    method: 'Dollar change in managed AUM since January 1, net of contributions and withdrawals.',
    cadence: 'Updated daily'
  },
  'Accounts': {
    source: 'Account registry from the custodian feed and CRM.',
    method: 'Count of active managed accounts. Closed and held-away accounts are excluded.',
    cadence: 'Updated daily'
  },
  'YTD Fees': {
    source: 'Advisory fee billing ledger.',
    method: 'Total advisory fees billed year-to-date across all households.',
    cadence: 'Updated daily; finalized at quarter close'
  },
  'Total Inflows': {
    source: 'Custodian transaction feed.',
    method: 'Sum of contributions and transfers in for the period, excluding internal transfers between a household’s own accounts.',
    cadence: 'Updated daily'
  },
  'Total Outflows': {
    source: 'Custodian transaction feed.',
    method: 'Sum of distributions, fees, and transfers out for the period, excluding internal transfers.',
    cadence: 'Updated daily'
  },
  'Net Cash Flow': {
    source: 'Custodian transaction feed.',
    method: 'Total inflows minus total outflows for the period, excluding internal transfers.',
    cadence: 'Updated daily'
  },
  'Total Transactions': {
    source: 'Custodian transaction feed.',
    method: 'Count of posted transactions across all managed accounts for the period. Pending trades are excluded.',
    cadence: 'Refreshes hourly'
  }
};
function TileInfo({
  title
}) {
  const info = TILE_INFO[title];
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({
    top: 0,
    left: 0
  });
  const wrapRef = React.useRef();
  const btnRef = React.useRef();
  const POP_W = 300;
  const place = React.useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const margin = 12;
    let left = r.left - 6;
    left = Math.min(left, window.innerWidth - POP_W - margin);
    left = Math.max(margin, left);
    setPos({
      top: r.bottom + 8,
      left,
      arrow: r.left + r.width / 2 - left
    });
  }, []);
  React.useEffect(() => {
    if (!open) return;
    place();
    const onDoc = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onReflow = () => place();
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onReflow);
    window.addEventListener('scroll', onReflow, true);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onReflow);
      window.removeEventListener('scroll', onReflow, true);
    };
  }, [open, place]);
  if (!info) return null;
  const Row = ({
    icon,
    label,
    text,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '10px 0',
      borderTop: '1px solid rgba(75,85,99,0.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 22,
      height: 22,
      borderRadius: 6,
      background: 'rgba(255,255,255,0.05)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${icon}`,
    style: {
      width: 12,
      height: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: 'rgb(140,140,140)',
      marginBottom: 3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'rgb(209,213,219)'
    }
  }, text)));
  return /*#__PURE__*/React.createElement("span", {
    ref: wrapRef,
    style: {
      display: 'inline-flex',
      marginLeft: 7
    },
    onMouseDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    className: "tile-info-btn",
    "aria-label": `How “${title}” is calculated`,
    "aria-haspopup": "dialog",
    "aria-expanded": open,
    onClick: e => {
      e.stopPropagation();
      setOpen(o => !o);
    },
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      width: 18,
      height: 18,
      borderRadius: 9,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: open ? 'rgb(94,214,164)' : 'rgb(120,124,130)',
      transition: 'color 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-info",
    style: {
      width: 14,
      height: 14
    }
  })), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": `${title} — data source`,
    onMouseDown: e => e.stopPropagation(),
    style: {
      position: 'fixed',
      top: pos.top,
      left: pos.left,
      zIndex: 9000,
      width: POP_W,
      boxSizing: 'border-box',
      background: 'rgb(28,30,34)',
      border: '1px solid rgb(75,85,99)',
      borderRadius: 12,
      boxShadow: '0 16px 40px -8px rgba(0,0,0,0.6)',
      padding: '12px 14px 4px',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      left: Math.max(8, Math.min((pos.arrow || 14) - 5, POP_W - 18)),
      width: 10,
      height: 10,
      background: 'rgb(28,30,34)',
      borderLeft: '1px solid rgb(75,85,99)',
      borderTop: '1px solid rgb(75,85,99)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      paddingBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement(Row, {
    icon: "fa-database",
    label: "Data source",
    text: info.source,
    color: "rgb(125,178,255)"
  }), info.method && /*#__PURE__*/React.createElement(Row, {
    icon: "fa-function",
    label: "How it's calculated",
    text: info.method,
    color: "rgb(94,214,164)"
  }), info.cadence && /*#__PURE__*/React.createElement(Row, {
    icon: "fa-clock-3",
    label: "Refresh cadence",
    text: info.cadence,
    color: "rgb(196,181,253)"
  })), document.body));
}
function Tile({
  title,
  children,
  onMore,
  style,
  footLabel
}) {
  const ref = React.useRef();
  const period = React.useContext(PeriodContext);
  const label = footLabel || periodToLabel(period);
  const handleMore = () => {
    if (typeof onMore === 'function') onMore();else window.dispatchEvent(new CustomEvent('tile:see-more', {
      detail: {
        title
      }
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      ...TILE,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: TILE_HEAD
  }, /*#__PURE__*/React.createElement("div", {
    style: TILE_TITLE
  }, title), /*#__PURE__*/React.createElement(TileInfo, {
    title: title
  }), /*#__PURE__*/React.createElement("button", {
    className: "tile-overflow-btn",
    style: {
      ...OVERFLOW,
      marginLeft: 'auto'
    },
    "aria-label": "More"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-ellipsis",
    style: {
      width: 14,
      height: 14
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: TILE_BODY
  }, children), /*#__PURE__*/React.createElement("div", {
    style: TILE_FOOT
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("a", {
    style: SEE_MORE,
    onClick: handleMore
  }, "See more ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      width: 12,
      height: 12
    }
  }))));
}

/* 1. Recent Activity — money movement from the custodian transaction feed ------ */
function RecentActivity({
  onMore
}) {
  const rows = [{
    type: 'Deposit',
    tone: 'up',
    client: 'Molly Abernathy',
    detail: 'Individual · Jul 19',
    amt: '+$2,441.83'
  }, {
    type: 'Withdrawal',
    tone: 'down',
    client: 'David Young',
    detail: 'Joint Account · Jul 18',
    amt: '-$44,075.09'
  }, {
    type: 'Transfer Out',
    tone: 'down',
    client: 'Anderson Family',
    detail: 'SPDR Gold Shares · Jul 14',
    amt: '-$62,002.89'
  }, {
    type: 'Transfer In',
    tone: 'up',
    client: 'Maria Workman',
    detail: 'Chevron Corp · Jul 9',
    amt: '+$43,411.01'
  }, {
    type: 'Fee',
    tone: 'mute',
    client: 'Robert Patel',
    detail: 'Advisory fee · Jul 3',
    amt: '-$249.95'
  }];
  const TONE = {
    up: 'rgb(16,185,129)',
    down: 'rgb(248,113,113)',
    mute: 'rgb(163,163,163)'
  };
  const ICON = {
    Deposit: 'arrow-down',
    Withdrawal: 'arrow-up',
    'Transfer Out': 'arrow-up-right-from-square',
    'Transfer In': 'arrow-down',
    Fee: 'file-invoice-dollar'
  };
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Recent Activity",
    onMore: onMore,
    footLabel: "Custodian transaction feed \xB7 synced 9 min ago"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderTop: i ? '1px solid rgba(75,85,99,0.45)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.6)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: TONE[r.tone]
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: faCls(ICON[r.type] || 'chart-column'),
    style: {
      width: 13,
      height: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 13,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.type, " \xB7 ", r.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, r.detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: TONE[r.tone],
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.amt)))));
}

/* 2. Notifications -------------------------------------------------------- */
function Notifications({
  onMore
}) {
  const rows = [{
    icon: 'percent',
    tone: 'success',
    title: 'Drift Alert: David Young',
    body: 'Joint Account is 7.2% off the Growth 60/40 model — rebalance available',
    tag: 'Rule',
    tagTone: 'success',
    action: 'rebalance'
  }, {
    icon: 'arrow-trend-down',
    tone: 'danger',
    title: 'Balance Drop: Anderson Family',
    body: 'Account balance fell 5.4% over the last 5 trading days',
    tag: '-5.4%',
    tagTone: 'danger'
  }, {
    icon: 'droplet',
    tone: 'warning',
    title: 'Cash Drag: Robert Patel',
    body: 'Cash is 11.8% of account value — above your 8% threshold',
    tag: '11.8%',
    tagTone: 'warning'
  }, {
    icon: 'triangle-alert',
    tone: 'info',
    title: 'Recon Mismatch: Workman Trust',
    body: 'Custodian recon status is unmatched since Jul 24 — 2 positions differ',
    tag: 'Unmatched',
    tagTone: 'info'
  }];
  const TONE = {
    info: {
      bg: 'rgba(59,130,246,0.10)',
      ring: 'rgba(59,130,246,0.35)',
      fg: 'rgb(147,197,253)'
    },
    success: {
      bg: 'rgba(5,122,85,0.12)',
      ring: 'rgba(5,122,85,0.45)',
      fg: 'rgb(16,185,129)'
    },
    danger: {
      bg: 'rgba(220,38,38,0.10)',
      ring: 'rgba(220,38,38,0.45)',
      fg: 'rgb(248,113,113)'
    },
    warning: {
      bg: 'rgba(234,179,8,0.10)',
      ring: 'rgba(234,179,8,0.40)',
      fg: 'rgb(234,179,8)'
    },
    mute: {
      bg: 'rgba(255,255,255,0.03)',
      ring: 'rgba(75,85,99,0.6)',
      fg: 'rgb(163,163,163)'
    }
  };
  const TAG = {
    info: {
      bg: 'rgb(37,99,235)',
      fg: '#fff'
    },
    success: {
      bg: 'rgb(5,122,85)',
      fg: '#fff'
    },
    danger: {
      bg: 'rgb(220,38,38)',
      fg: '#fff'
    },
    warning: {
      bg: 'rgba(234,179,8,0.2)',
      fg: 'rgb(253,224,71)',
      border: '1px solid rgba(234,179,8,0.5)'
    },
    mute: {
      bg: 'rgba(17,24,39,0.8)',
      fg: 'rgb(229,231,235)',
      border: '1px solid rgb(75,85,99)'
    }
  };
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Insights",
    onMore: onMore,
    footLabel: "Updated: May 13, 2026"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 4
    }
  }, rows.map((r, i) => {
    const t = TONE[r.tone];
    const tg = TAG[r.tagTone];
    const isClickable = r.action === 'rebalance';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: isClickable ? () => window.dispatchEvent(new CustomEvent('rebalance:open', {
        detail: {
          client: 'David Young'
        }
      })) : undefined,
      style: {
        display: 'grid',
        gridTemplateColumns: '32px 1fr auto',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 10,
        background: t.bg,
        border: `1px solid ${t.ring}`,
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'transform 150ms ease, border-color 150ms ease'
      },
      onMouseEnter: isClickable ? e => {
        e.currentTarget.style.borderColor = 'rgb(16,185,129)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      } : undefined,
      onMouseLeave: isClickable ? e => {
        e.currentTarget.style.borderColor = t.ring;
        e.currentTarget.style.transform = 'translateY(0)';
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        background: 'rgba(17,24,39,0.6)',
        border: `1px solid ${t.ring}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: faCls(r.icon),
      style: {
        width: 16,
        height: 16,
        color: t.fg
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'rgb(249,250,251)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: 'rgb(163,163,163)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.body)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 10.5,
        padding: '3px 10px',
        borderRadius: 9999,
        ...tg
      }
    }, r.tag));
  })));
}

/* 3. Opportunities -------------------------------------------------------- */
function Opportunities({
  onMore
}) {
  const rows = [{
    icon: 'arrows-rotate',
    color: 'rgb(16,185,129)',
    iconBg: 'rgba(5,122,85,0.18)',
    title: 'Portfolio Rebalance',
    subtitle: 'David Young',
    clients: 1,
    val: '$2.4M',
    action: 'rebalance'
  }, {
    icon: 'target',
    color: 'rgb(220,38,38)',
    iconBg: 'rgba(220,38,38,0.12)',
    title: 'Tax-Managed Public Equity',
    clients: 14,
    val: '$18.4M'
  }, {
    icon: 'briefcase',
    color: 'rgb(59,130,246)',
    iconBg: 'rgba(59,130,246,0.12)',
    title: 'State Portfolio',
    clients: 9,
    val: '$14.2M'
  }, {
    icon: 'shield-check',
    color: 'rgb(168,85,247)',
    iconBg: 'rgba(168,85,247,0.12)',
    title: 'Downside Protection Overlay',
    clients: 12,
    val: '$22.8M'
  }, {
    icon: 'droplet',
    color: 'rgb(234,179,8)',
    iconBg: 'rgba(234,179,8,0.12)',
    title: 'Strategic Liquidation Program',
    clients: 7,
    val: '$11.6M'
  }];
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Opportunities",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      padding: '0 0 6px'
    }
  }, "Overnight Analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map((r, i) => {
    const isClickable = r.action === 'rebalance';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: isClickable ? () => window.dispatchEvent(new CustomEvent('rebalance:open', {
        detail: {
          client: 'David Young'
        }
      })) : undefined,
      style: {
        display: 'grid',
        gridTemplateColumns: '32px 1fr auto',
        alignItems: 'center',
        gap: 12,
        padding: '10px 8px',
        margin: '0 -8px',
        borderTop: i ? '1px solid rgba(75,85,99,0.45)' : 'none',
        cursor: isClickable ? 'pointer' : 'default',
        borderRadius: isClickable ? 8 : 0,
        transition: 'background 150ms ease',
        position: 'relative'
      },
      onMouseEnter: isClickable ? e => e.currentTarget.style.background = 'rgba(5,122,85,0.08)' : undefined,
      onMouseLeave: isClickable ? e => e.currentTarget.style.background = 'transparent' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        background: r.iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: faCls(r.icon),
      style: {
        width: 16,
        height: 16,
        color: r.color
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, r.title, isClickable && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-sparkles",
      style: {
        width: 10,
        height: 10,
        color: 'rgb(16,185,129)'
      }
    })), r.subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: 'rgb(163,163,163)',
        marginTop: 2
      }
    }, r.subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: 'rgb(163,163,163)'
      }
    }, r.clients, " client", r.clients !== 1 ? 's' : ''));
  })));
}

/* 4. Top Clients (8 cards in 4×2 grid) ------------------------------------ */
const TOP_CLIENTS_BY_PERIOD = {
  'Today': {
    suffix: 'TODAY',
    cards: [{
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '0.42%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '0.61%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'down',
      pct: '0.18%',
      aum: '$1.4M',
      accent: 'rgb(248,113,113)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '0.09%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '0.34%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }, {
      name: 'Chance Curtis',
      review: '5 month ago',
      dir: 'up',
      pct: '0.22%',
      aum: '$1M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '0.15%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '0.51%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }]
  },
  'This week': {
    suffix: 'WK',
    cards: [{
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '1.84%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '2.41%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'up',
      pct: '0.62%',
      aum: '$1.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '2.10%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '0.31%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '0.84%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }, {
      name: 'Chance Curtis',
      review: '5 month ago',
      dir: 'up',
      pct: '0.74%',
      aum: '$1M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '0.52%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }]
  },
  'This month': {
    suffix: 'MTD',
    cards: [{
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '5.82%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '4.61%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '3.94%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Edwards Family',
      review: '2 month ago',
      dir: 'up',
      pct: '3.18%',
      aum: '$1.6M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'up',
      pct: '2.42%',
      aum: '$1.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '1.21%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '1.84%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '1.12%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }]
  },
  'This quarter': {
    suffix: 'QTD',
    cards: [{
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '9.41%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '7.82%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '6.34%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Edwards Family',
      review: '2 month ago',
      dir: 'up',
      pct: '5.91%',
      aum: '$1.6M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'up',
      pct: '4.22%',
      aum: '$1.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '2.18%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '3.42%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '0.84%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }]
  },
  'Year to date': {
    suffix: 'YTD',
    cards: [{
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '10.68%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '23.68%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'up',
      pct: '7.68%',
      aum: '$1.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '2.68%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '0.68%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }, {
      name: 'Chance Curtis',
      review: '5 month ago',
      dir: 'up',
      pct: '7.28%',
      aum: '$1M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '4.68%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '9.68%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }]
  },
  'Last 12 months': {
    suffix: '12mo',
    cards: [{
      name: 'John Smith',
      review: 'Year ago',
      dir: 'up',
      pct: '34.21%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Maria Workman',
      review: '3 month ago',
      dir: 'up',
      pct: '21.84%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: '1 month ago',
      dir: 'up',
      pct: '18.42%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Edwards Family',
      review: '2 month ago',
      dir: 'up',
      pct: '15.31%',
      aum: '$1.6M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Zaire Herwitz',
      review: '6 month ago',
      dir: 'up',
      pct: '12.45%',
      aum: '$1.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Alfonso Mango',
      review: '2 month ago',
      dir: 'up',
      pct: '9.62%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Ryan Korsgaard',
      review: '7 month ago',
      dir: 'up',
      pct: '6.18%',
      aum: '$1.3M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Mira Aminoff',
      review: '4 month ago',
      dir: 'down',
      pct: '2.41%',
      aum: null,
      accent: 'rgb(248,113,113)'
    }]
  },
  'All time': {
    suffix: 'TOTAL',
    cards: [{
      name: 'Smith Trust',
      review: 'Client since 2014',
      dir: 'up',
      pct: '214.6%',
      aum: '$28.9M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Hawkins Family',
      review: 'Client since 2016',
      dir: 'up',
      pct: '182.4%',
      aum: '$29.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Watson Holdings',
      review: 'Client since 2017',
      dir: 'up',
      pct: '164.3%',
      aum: '$27.2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Maria Workman',
      review: 'Client since 2018',
      dir: 'up',
      pct: '142.8%',
      aum: '$2M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'John Smith',
      review: 'Client since 2019',
      dir: 'up',
      pct: '118.4%',
      aum: '$1.8M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Jones Family',
      review: 'Client since 2020',
      dir: 'up',
      pct: '96.2%',
      aum: '$18.1M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'Lang Trust',
      review: 'Client since 2021',
      dir: 'up',
      pct: '82.4%',
      aum: '$16.4M',
      accent: 'rgb(5,122,85)'
    }, {
      name: 'David Young',
      review: 'Client since 2022',
      dir: 'up',
      pct: '68.1%',
      aum: '$2.4M',
      accent: 'rgb(5,122,85)'
    }]
  }
};
function TopClients({
  onMore
}) {
  const period = React.useContext(PeriodContext);
  const cfg = TOP_CLIENTS_BY_PERIOD[period] || TOP_CLIENTS_BY_PERIOD['Year to date'];
  const cards = cfg.cards;
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Top Clients",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      paddingTop: 4
    }
  }, cards.map((c, i) => {
    const ref = React.useRef();
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      ref: ref,
      style: {
        position: 'relative',
        padding: '10px 12px 10px 14px',
        border: '1px solid rgba(75,85,99,0.6)',
        borderRadius: 10,
        background: 'rgba(255,255,255,0.015)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 10,
        bottom: 10,
        width: 3,
        borderRadius: 9999,
        background: c.accent
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'rgb(249,250,251)',
        marginBottom: 4
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        color: 'rgb(163,163,163)'
      }
    }, "Last Review: ", c.review), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        color: 'rgb(163,163,163)',
        marginTop: 6
      }
    }, "Perf."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid fa-${(c.dir === 'up' ? 'arrow-up' : 'arrow-down').replace(/^fa-/, '')}`,
      style: {
        width: 12,
        height: 12,
        color: c.accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 12,
        fontWeight: 600,
        color: c.accent
      }
    }, c.pct), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10,
        color: 'rgb(163,163,163)'
      }
    }, cfg.suffix)), c.aum && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        color: 'rgb(163,163,163)',
        marginTop: 4
      }
    }, "Total AUM"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontVariantNumeric: 'tabular-nums',
        fontSize: 12.5,
        fontWeight: 600,
        color: 'rgb(249,250,251)'
      }
    }, c.aum)));
  })));
}

/* 5. Billing Summary ------------------------------------------------------ */
const BILLING_BY_PERIOD = {
  'Today': {
    stats: [{
      label: "Today's Fees",
      value: '$1,280',
      delta: '+$190 vs avg day',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p'],
      data: [0.14, 0.18, 0.22, 0.16, 0.12, 0.20, 0.18, 0.10]
    }
  },
  'This week': {
    stats: [{
      label: 'Weekly Fees',
      value: '$5,840',
      delta: '+12% vs prior week',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [0.86, 0.92, 0.78, 1.04, 0.94, 0.62, 0.68]
    }
  },
  'This month': {
    stats: [{
      label: 'MTD Fees',
      value: '$16,520',
      delta: '+4.5% vs Apr',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['W1', 'W2', 'W3', 'W4'],
      data: [3.8, 4.2, 4.1, 4.4]
    }
  },
  'This quarter': {
    stats: [{
      label: 'QTD Fees',
      value: '$32,610',
      delta: '+8.1% vs Q1',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['Apr', 'May'],
      data: [16.10, 16.51]
    }
  },
  'Year to date': {
    stats: [{
      label: 'YTD Billable Assets',
      value: '$16.5M',
      delta: '+5.8% vs prior YTD',
      tone: 'success'
    }, {
      label: 'YTD Fees Collected',
      value: '$78,400',
      delta: '+$4,210 vs prior YTD',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      data: [14.2, 14.8, 15.4, 16.1, 17.9]
    }
  },
  'Last 12 months': {
    stats: [{
      label: '12-mo Fees',
      value: '$172,840',
      delta: '+8.6% YoY',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      data: [12.8, 13.1, 13.4, 13.6, 13.8, 14.0, 14.4, 14.2, 14.8, 15.4, 16.1, 17.9]
    }
  },
  'All time': {
    stats: [{
      label: 'Lifetime Fees',
      value: '$684,200',
      delta: 'Since 2020',
      tone: 'success'
    }, {
      label: 'Billable Assets',
      value: '$16.5M',
      delta: 'Current snapshot',
      tone: 'success'
    }, {
      label: 'Fee Run Rate',
      value: '$175,996',
      delta: 'Annual projection',
      tone: 'success'
    }],
    chart: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      data: [82, 96, 112, 128, 142, 165, 78]
    }
  }
};
function BillingSummary({
  onMore
}) {
  const period = React.useContext(PeriodContext);
  const cfg = BILLING_BY_PERIOD[period] || BILLING_BY_PERIOD['Year to date'];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'area',
      height: 220,
      spacing: [10, 8, 4, 4]
    },
    xAxis: {
      categories: cfg.chart.categories,
      tickLength: 0
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return '$' + this.value + 'K';
        }
      }
    },
    tooltip: {
      valuePrefix: '$',
      valueSuffix: 'K',
      valueDecimals: 1
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, 'rgba(5,122,85,0.35)'], [1, 'rgba(5,122,85,0)']]
        },
        lineWidth: 2,
        color: 'rgb(5,122,85)',
        marker: {
          enabled: true,
          radius: 3.5,
          fillColor: 'rgb(10,10,10)',
          lineColor: 'rgb(5,122,85)',
          lineWidth: 2
        }
      }
    },
    series: [{
      name: 'Fees',
      data: cfg.chart.data
    }],
    legend: {
      enabled: false
    }
  }), [period]);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Billing Summary",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10,
      paddingTop: 4
    }
  }, cfg.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid rgb(75,85,99)',
      borderRadius: 10,
      padding: '14px 14px',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      marginBottom: 6
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.01em',
      color: 'rgb(249,250,251)',
      marginBottom: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(5,122,85)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-up",
    style: {
      fontSize: 10
    }
  }), /*#__PURE__*/React.createElement("span", null, s.delta))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 220,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })));
}

/* 6. Content Hub --------------------------------------------------------- */
function ContentHub({
  onMore
}) {
  const rows = [{
    who: 'Michael Gray',
    when: '4 days ago'
  }, {
    who: 'Jon Hummill',
    when: '1 day ago'
  }, {
    who: 'Andrew King',
    when: '2 days ago'
  }, {
    who: 'Chris Jones',
    when: '3 days ago'
  }];
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Content Hub",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 14,
      paddingTop: 4,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 10,
      overflow: 'hidden',
      background: 'linear-gradient(160deg, rgb(120,143,182) 0%, rgb(70,92,126) 60%, rgb(30,47,76) 100%)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 9px), ' + 'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 5px, transparent 5px 8px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '18%',
      right: '10%',
      bottom: 0,
      top: '22%',
      background: 'linear-gradient(180deg, rgba(20,30,50,0.7), rgba(10,14,24,0.95))',
      clipPath: 'polygon(0 15%, 30% 8%, 30% 0, 70% 0, 70% 6%, 100% 12%, 100% 100%, 0 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '9px 0',
      borderTop: i ? '1px solid rgba(75,85,99,0.45)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500
    }
  }, r.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, r.when))))));
}

/* 7. AUM Asset Allocation (donut OR bar chart) -------------------------- */
function AumAllocation({
  onMore,
  variant = 'donut'
}) {
  const slices = [{
    v: 0.28,
    arc: 'rgba( 94, 214, 164, 0.5)',
    dot: 'rgb( 94, 214, 164)',
    label: 'Equities'
  }, {
    v: 0.18,
    arc: 'rgba(120, 160, 230, 0.5)',
    dot: 'rgb(120, 160, 230)',
    label: 'Fixed Income'
  }, {
    v: 0.14,
    arc: 'rgba(180, 150, 235, 0.5)',
    dot: 'rgb(180, 150, 235)',
    label: 'Alternatives'
  }, {
    v: 0.12,
    arc: 'rgba(245, 200,  90, 0.5)',
    dot: 'rgb(245, 200,  90)',
    label: 'Private'
  }, {
    v: 0.10,
    arc: 'rgba(240, 140, 120, 0.5)',
    dot: 'rgb(240, 140, 120)',
    label: 'Real Estate'
  }, {
    v: 0.08,
    arc: 'rgba(120, 200, 210, 0.5)',
    dot: 'rgb(120, 200, 210)',
    label: 'Cash'
  }, {
    v: 0.06,
    arc: 'rgba(200, 170, 130, 0.5)',
    dot: 'rgb(200, 170, 130)',
    label: 'Hedge'
  }, {
    v: 0.04,
    arc: 'rgba(160, 170, 185, 0.5)',
    dot: 'rgb(160, 170, 185)',
    label: 'Other'
  }];
  const donutOpts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height: 240,
      spacing: [4, 4, 4, 4]
    },
    tooltip: {
      pointFormatter: function () {
        return `<span style="color:${this.color}">●</span> <b>${this.name}</b>: ${Math.round(this.y * 100)}%`;
      }
    },
    plotOptions: {
      pie: {
        innerSize: '68%',
        borderColor: 'rgb(10,10,10)',
        borderWidth: 1,
        borderRadius: 0,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            brightness: 0.08,
            halo: {
              size: 6,
              opacity: 0.2
            }
          }
        }
      }
    },
    series: [{
      name: 'Allocation',
      data: slices.map(s => ({
        name: s.label,
        y: s.v,
        color: s.arc,
        borderColor: s.dot
      }))
    }]
  }), []);
  const barOpts = React.useMemo(() => ({
    chart: {
      type: 'bar',
      height: 280,
      spacing: [8, 4, 4, 4],
      backgroundColor: 'transparent',
      animation: false
    },
    xAxis: {
      categories: slices.map(s => s.label),
      lineColor: 'rgba(75,85,99,0.4)',
      tickColor: 'transparent',
      labels: {
        style: {
          color: 'rgb(229,231,235)',
          fontFamily: 'Inter',
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      min: 0,
      max: 0.32,
      title: {
        text: null
      },
      gridLineColor: 'rgba(75,85,99,0.25)',
      gridLineDashStyle: 'Dash',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontFamily: 'Inter',
          fontSize: '10px'
        },
        formatter: function () {
          return Math.round(this.value * 100) + '%';
        }
      }
    },
    tooltip: {
      pointFormatter: function () {
        return `<span style="color:${this.color}">●</span> <b>${this.category}</b>: ${Math.round(this.y * 100)}%`;
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderWidth: 0,
        pointPadding: 0.08,
        groupPadding: 0.06,
        animation: false,
        dataLabels: {
          enabled: true,
          align: 'left',
          inside: false,
          style: {
            color: 'rgb(249,250,251)',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: '10.5px',
            textOutline: 'none'
          },
          formatter: function () {
            return Math.round(this.y * 100) + '%';
          }
        }
      }
    },
    series: [{
      name: 'Allocation',
      data: slices.map(s => ({
        name: s.label,
        y: s.v,
        color: s.arc,
        borderColor: s.dot,
        borderWidth: 1.5
      }))
    }]
  }), []);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "AUM Asset Allocation",
    onMore: onMore
  }, variant === 'bar' ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: barOpts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 6,
      paddingTop: 8,
      borderTop: '1px solid rgba(75,85,99,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase'
    }
  }, "Total Value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, "$42.3M"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      paddingTop: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 240,
      aspectRatio: '1 / 1',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: donutOpts
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase'
    }
  }, "Total Value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 22,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em',
      marginTop: 2
    }
  }, "$42.3M")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, slices.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'Inter',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: s.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'rgb(229,231,235)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontVariantNumeric: 'tabular-nums',
      color: 'rgb(163,163,163)'
    }
  }, Math.round(s.v * 100), "%"))))));
}

/* 8. Assets Under Management (horizontal bars) --------------------------- */
function AumBars({
  onMore
}) {
  const rows = [{
    label: 'Qualified Retirement',
    aum: 780,
    hold: 220
  }, {
    label: 'Taxable Investment',
    aum: 640,
    hold: 180
  }, {
    label: 'Cash Equivalent',
    aum: 500,
    hold: 280
  }, {
    label: 'Life Insurance',
    aum: 400,
    hold: 220
  }, {
    label: 'Other',
    aum: 180,
    hold: 100
  }];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'bar',
      height: 260,
      spacing: [8, 4, 8, 4]
    },
    xAxis: {
      categories: rows.map(r => r.label),
      lineColor: 'transparent',
      tickLength: 0,
      labels: {
        style: {
          color: 'rgb(229,231,235)',
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      min: 0,
      max: 900,
      tickPositions: [0, 300, 500, 700, 800, 900],
      labels: {
        formatter: function () {
          return this.value === 0 ? '$0' : '$' + this.value + 'M';
        }
      },
      gridLineDashStyle: 'Dash',
      opposite: false
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>${point.y}M</b><br/>'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        pointPadding: 0.15,
        groupPadding: 0.1,
        borderRadius: 3
      }
    },
    series: [{
      name: 'Assets Under Management',
      color: 'rgba(5,122,85,0.45)',
      borderColor: 'rgb(5,122,85)',
      borderWidth: 1.5,
      data: rows.map(r => r.aum)
    }, {
      name: 'Assets Held Away',
      color: 'rgba(160,170,185,0.45)',
      borderColor: 'rgb(160,170,185)',
      borderWidth: 1.5,
      data: rows.map(r => r.hold)
    }]
  }), []);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Assets Under Management",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      paddingTop: 2,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'rgb(5,122,85)'
    }
  }), " Assets Under Management"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'rgb(160,170,185)'
    }
  }), " Assets Held Away")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })));
}

/* 9. Cash Flow (stacked bars) -------------------------------------------- */
const CASHFLOW_BY_PERIOD = {
  'Today': {
    stats: [{
      label: "Today's Inflows",
      value: '$1.2M',
      color: 'rgb(5,122,85)'
    }, {
      label: "Today's Outflows",
      value: '-$0.4M',
      color: 'rgb(248,113,113)'
    }, {
      label: "Today's Net",
      value: '$0.8M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p'],
      inflow: [0.18, 0.24, 0.16, 0.12, 0.10, 0.18, 0.14, 0.08],
      outflow: [-0.04, -0.08, -0.06, -0.02, -0.04, -0.06, -0.08, -0.02]
    }
  },
  'This week': {
    stats: [{
      label: 'Inflows',
      value: '$8.5M',
      color: 'rgb(5,122,85)'
    }, {
      label: 'Outflows',
      value: '-$3.1M',
      color: 'rgb(248,113,113)'
    }, {
      label: 'Net Flow',
      value: '$5.4M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      inflow: [1.2, 1.6, 0.9, 1.4, 1.8, 0.8, 0.8],
      outflow: [-0.4, -0.6, -0.3, -0.5, -0.7, -0.3, -0.3]
    }
  },
  'This month': {
    stats: [{
      label: 'MTD Inflows',
      value: '$31M',
      color: 'rgb(5,122,85)'
    }, {
      label: 'MTD Outflows',
      value: '-$9M',
      color: 'rgb(248,113,113)'
    }, {
      label: 'MTD Net Flow',
      value: '$22M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['W1', 'W2'],
      inflow: [16, 15],
      outflow: [-4, -5]
    }
  },
  'This quarter': {
    stats: [{
      label: 'QTD Inflows',
      value: '$57M',
      color: 'rgb(5,122,85)'
    }, {
      label: 'QTD Outflows',
      value: '-$19M',
      color: 'rgb(248,113,113)'
    }, {
      label: 'QTD Net Flow',
      value: '$38M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['Apr', 'May'],
      inflow: [26, 31],
      outflow: [-10, -9]
    }
  },
  'Year to date': {
    stats: [{
      label: 'YTD Inflows',
      value: '$126.0M',
      color: 'rgb(5,122,85)'
    }, {
      label: 'YTD Outflows',
      value: '-$45.0M',
      color: 'rgb(248,113,113)'
    }, {
      label: 'YTD Net Flow',
      value: '$81.0M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      inflow: [22, 28, 19, 26, 31],
      outflow: [-8, -11, -7, -10, -9]
    }
  },
  'Last 12 months': {
    stats: [{
      label: '12-mo Inflows',
      value: '$268M',
      color: 'rgb(5,122,85)'
    }, {
      label: '12-mo Outflows',
      value: '-$98M',
      color: 'rgb(248,113,113)'
    }, {
      label: '12-mo Net Flow',
      value: '$170M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      inflow: [18, 20, 15, 22, 17, 19, 21, 22, 28, 19, 26, 31],
      outflow: [-6, -8, -5, -9, -7, -8, -9, -8, -11, -7, -10, -9]
    }
  },
  'All time': {
    stats: [{
      label: 'Lifetime Inflows',
      value: '$1.2B',
      color: 'rgb(5,122,85)'
    }, {
      label: 'Lifetime Outflows',
      value: '-$420M',
      color: 'rgb(248,113,113)'
    }, {
      label: 'Lifetime Net',
      value: '$780M',
      color: 'rgb(249,250,251)'
    }],
    chart: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      inflow: [140, 165, 180, 195, 215, 250, 126],
      outflow: [-55, -62, -68, -72, -80, -88, -45]
    }
  }
};
function CashFlow({
  onMore
}) {
  const period = React.useContext(PeriodContext);
  const cfg = CASHFLOW_BY_PERIOD[period] || CASHFLOW_BY_PERIOD['Year to date'];
  const stats = cfg.stats;
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 200,
      spacing: [8, 4, 4, 4]
    },
    xAxis: {
      categories: cfg.chart.categories,
      tickLength: 0,
      lineColor: 'rgba(75,85,99,0.6)'
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return '$' + this.value + 'M';
        }
      },
      plotLines: [{
        value: 0,
        color: 'rgba(75,85,99,0.6)',
        width: 1,
        dashStyle: 'Dash',
        zIndex: 4
      }]
    },
    tooltip: {
      shared: true,
      pointFormatter: function () {
        const sign = this.y < 0 ? '-$' : '$';
        return `<span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${sign}${Math.abs(this.y)}M</b><br/>`;
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        pointPadding: 0.12,
        groupPadding: 0.12,
        borderRadius: 2
      }
    },
    series: [{
      name: 'Inflow',
      color: 'rgba(5,122,85,0.45)',
      borderColor: 'rgb(5,122,85)',
      borderWidth: 1.5,
      data: cfg.chart.inflow
    }, {
      name: 'Outflow',
      color: 'rgba(220,38,38,0.45)',
      borderColor: 'rgb(220,38,38)',
      borderWidth: 1.5,
      data: cfg.chart.outflow
    }]
  }), [period]);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Cash Flow",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8,
      paddingTop: 4
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid rgb(75,85,99)',
      borderRadius: 8,
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      color: 'rgb(163,163,163)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 16,
      fontWeight: 600,
      color: s.color
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      margin: '10px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'rgb(5,122,85)'
    }
  }), " Inflow"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'rgb(220,38,38)'
    }
  }), " Outflow")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })));
}

/* 10. Projected Fees (long-term projection) ------------------------------ */
function ProjectedFees({
  onMore
}) {
  const years = ['2025', '2026', '2027', '2028', '2029', '2030'];
  const base = [150, 185, 235, 285, 340, 400];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'area',
      spacing: [10, 8, 4, 4]
    },
    xAxis: {
      categories: years,
      tickLength: 0
    },
    yAxis: {
      min: 100,
      max: 500,
      tickInterval: 100,
      labels: {
        formatter: function () {
          return '$' + this.value + 'K';
        }
      }
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'K'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, 'rgba(5,122,85,0.35)'], [1, 'rgba(5,122,85,0)']]
        },
        lineWidth: 2,
        color: 'rgb(5,122,85)',
        marker: {
          enabled: true,
          radius: 3,
          fillColor: 'rgb(10,10,10)',
          lineColor: 'rgb(5,122,85)',
          lineWidth: 1.5
        }
      }
    },
    series: [{
      type: 'area',
      name: 'Base',
      data: base
    }]
  }), []);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Projected Fees",
    onMore: onMore,
    footLabel: "2025 \u2013 2030 \xB7 Projection"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 80%',
      minHeight: 0,
      height: '80%'
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })));
}

/* 11. Holdings Breakdown — Top 10 holdings by AUM (matches details page) --- */
function Holdings({
  onMore
}) {
  const categories = ['VTSAX', 'BND', 'VTI', 'AGG', 'BCRED', 'VXUS', 'VOO', 'VEA', 'SPY', 'QQQ'];
  const data = [185, 142, 128, 98, 82, 71, 62, 54, 46, 38];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'bar',
      height: 320,
      spacing: [8, 4, 8, 4],
      backgroundColor: 'transparent'
    },
    xAxis: {
      categories,
      lineColor: 'rgba(75,85,99,0.4)',
      tickColor: 'transparent',
      labels: {
        style: {
          color: 'rgb(229,231,235)',
          fontFamily: 'Inter',
          fontSize: '11.5px',
          fontWeight: '500'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      gridLineColor: 'rgba(75,85,99,0.25)',
      gridLineDashStyle: 'Dash',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontFamily: 'Inter',
          fontSize: '10.5px'
        },
        formatter: function () {
          return '$' + this.value + 'M';
        }
      }
    },
    tooltip: {
      valuePrefix: '$',
      valueSuffix: 'M'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        pointPadding: 0.08,
        groupPadding: 0.06,
        dataLabels: {
          enabled: true,
          align: 'left',
          inside: false,
          crop: false,
          overflow: 'allow',
          style: {
            color: 'rgb(249,250,251)',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: '10.5px',
            textOutline: 'none'
          },
          formatter: function () {
            return '$' + this.y + 'M';
          }
        }
      }
    },
    series: [{
      name: 'AUM',
      color: 'rgba(5,122,85,0.45)',
      borderColor: 'rgb(5,122,85)',
      borderWidth: 1.5,
      data
    }]
  }), []);
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Holdings Breakdown",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      padding: '0 0 6px'
    }
  }, "Top 10 holdings by AUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })));
}

/* 12. Client Roster Heat (small rail) ----------------------------------- */
function ClientHeat({
  onMore
}) {
  const cols = 26,
    rows = 6;
  const cells = Array.from({
    length: cols * rows
  }, (_, i) => Math.random());
  const color = v => v < 0.2 ? 'rgba(75,85,99,0.35)' : v < 0.5 ? 'rgba(5,122,85,0.45)' : v < 0.8 ? 'rgba(5,122,85,0.75)' : 'rgb(5,122,85)';
  return /*#__PURE__*/React.createElement(Tile, {
    title: "Client Activity",
    onMore: onMore
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      padding: '0 0 6px'
    }
  }, "Engagement, last 26 weeks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 3,
      paddingBottom: 6
    }
  }, cells.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: 2,
      background: color(v)
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(163,163,163)',
      paddingTop: 4
    }
  }, "Less", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: 'rgba(75,85,99,0.35)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: 'rgba(5,122,85,0.45)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: 'rgba(5,122,85,0.75)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: 'rgb(5,122,85)'
    }
  }), "More"));
}
Object.assign(window, {
  RecentActivity,
  Notifications,
  Opportunities,
  TopClients,
  BillingSummary,
  ContentHub,
  AumAllocation,
  AumBars,
  CashFlow,
  ProjectedFees,
  Holdings,
  ClientHeat,
  TileInfo
});
;
/* ---- advisor/ClientList.jsx ---- */
/* Client List — table view for the Clients sidebar route.
   Matches Field Shadcn design system; dark surface. */

const CL_SEGMENTS = {
  'Ultra High Net Worth': {
    fg: 'rgb(199,210,254)',
    bg: 'rgba(129,140,248,0.16)',
    bd: 'rgba(129,140,248,0.4)'
  },
  'High Net Worth': {
    fg: 'rgb(252,211,77)',
    bg: 'rgba(245,158,11,0.16)',
    bd: 'rgba(245,158,11,0.4)'
  },
  'Mass Affluent': {
    fg: 'rgb(203,213,225)',
    bg: 'rgba(148,163,184,0.16)',
    bd: 'rgba(148,163,184,0.4)'
  },
  Emerging: {
    fg: 'rgb(110,231,183)',
    bg: 'rgba(5,122,85,0.18)',
    bd: 'rgba(5,122,85,0.45)'
  }
};
function clAumTier(aum) {
  if (aum < 5000000) return '<$5M';
  if (aum < 15000000) return '$5M–$15M';
  if (aum < 30000000) return '$15M–$30M';
  return '$30M+';
}
const CL_COLUMNS = [{
  k: 'name',
  label: 'Clients',
  locked: true
}, {
  k: 'aum',
  label: 'AUM'
}, {
  k: 'accounts',
  label: 'Accounts'
}, {
  k: 'ytd',
  label: 'YTD Return'
}, {
  k: 'segment',
  label: 'Segment'
}, {
  k: 'risk',
  label: 'Risk Profile'
}];
const CL_COLS_DEFAULT = ['name', 'aum', 'accounts', 'ytd', 'segment'];
function clGetCols() {
  if (window.__clCols) return window.__clCols;
  try {
    const v = JSON.parse(localStorage.getItem('adv.clientCols'));
    if (Array.isArray(v)) return window.__clCols = v.filter(k => k !== 'contact' && k !== 'status');
  } catch (e) {}
  return window.__clCols = CL_COLS_DEFAULT;
}
function clSetCols(v) {
  window.__clCols = v;
  try {
    localStorage.setItem('adv.clientCols', JSON.stringify(v));
  } catch (e) {}
  window.dispatchEvent(new CustomEvent('clcols:change', {
    detail: v
  }));
}
function useClCols() {
  const [cols, setCols] = React.useState(clGetCols);
  React.useEffect(() => {
    const on = e => setCols(e.detail);
    window.addEventListener('clcols:change', on);
    return () => window.removeEventListener('clcols:change', on);
  }, []);
  return cols;
}

/* Columns popover — anchored to the topbar "Columns" button */
function ClientColumnsMenu({
  Button
}) {
  const cols = useClCols();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    if (!open) return;
    const on = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', on);
    return () => document.removeEventListener('mousedown', on);
  }, [open]);
  const toggle = k => clSetCols(cols.includes(k) ? cols.filter(c => c !== k) : CL_COLUMNS.map(c => c.k).filter(c => c === k || cols.includes(c)));
  const shown = cols.length;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    active: open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-table-columns",
    style: {
      width: 12,
      height: 12
    }
  }), " Columns \xB7 ", shown, "/", CL_COLUMNS.length), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      zIndex: 90,
      width: 230,
      padding: 6,
      borderRadius: 10,
      background: 'rgb(31,41,55)',
      border: '1px solid rgb(75,85,99)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgb(163,163,163)'
    }
  }, "Available columns"), /*#__PURE__*/React.createElement("button", {
    onClick: () => clSetCols(CL_COLS_DEFAULT),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontSize: 11.5,
      color: 'rgb(52,211,153)',
      fontFamily: 'Inter'
    }
  }, "Reset")), CL_COLUMNS.map(c => {
    const on = cols.includes(c.k);
    return /*#__PURE__*/React.createElement("button", {
      key: c.k,
      disabled: c.locked,
      onClick: () => !c.locked && toggle(c.k),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '7px 8px',
        borderRadius: 6,
        border: 'none',
        background: 'transparent',
        cursor: c.locked ? 'default' : 'pointer',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: 13,
        color: on ? 'rgb(249,250,251)' : 'rgb(163,163,163)'
      },
      onMouseEnter: e => {
        if (!c.locked) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      },
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: 4,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid ' + (on ? 'rgb(5,122,85)' : 'rgb(107,114,128)'),
        background: on ? 'rgb(5,122,85)' : 'transparent',
        opacity: c.locked ? 0.55 : 1,
        color: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check",
      style: {
        width: 10,
        height: 10,
        fontSize: 9
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, c.label), c.locked && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgb(107,114,128)'
      }
    }, "Required"));
  })));
}
const ClPgIcon = ({
  d
}) => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));
function ClHover({
  content,
  children,
  width = 260,
  align = 'left'
}) {
  const [rect, setRect] = React.useState(null);
  const ref = React.useRef();
  const t = React.useRef();
  const enter = () => {
    clearTimeout(t.current);
    setRect(ref.current.getBoundingClientRect());
  };
  const leave = () => {
    t.current = setTimeout(() => setRect(null), 120);
  };
  React.useEffect(() => () => clearTimeout(t.current), []);
  let pos = null;
  if (rect) {
    const below = rect.bottom + 6,
      h = window.innerHeight;
    const left = align === 'center' ? rect.left + rect.width / 2 - width / 2 : align === 'right' ? rect.right - width : rect.left;
    pos = {
      left: Math.max(8, Math.min(left, window.innerWidth - width - 8)),
      ...(below > h - 220 ? {
        bottom: h - rect.top + 6
      } : {
        top: below
      })
    };
  }
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    onMouseEnter: enter,
    onMouseLeave: leave,
    style: {
      display: 'inline-flex'
    }
  }, children, rect && /*#__PURE__*/React.createElement("div", {
    onMouseEnter: enter,
    onMouseLeave: leave,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'fixed',
      ...pos,
      zIndex: 200,
      width,
      boxSizing: 'border-box',
      padding: 6,
      borderRadius: 10,
      background: 'rgb(31,41,55)',
      border: '1px solid rgb(75,85,99)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
      fontFamily: 'Inter',
      cursor: 'default'
    }
  }, content));
}
const clEmail = n => String(n).toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '.') + '@gmail.com';
const clPhone = n => {
  let h = 0;
  for (let i = 0; i < n.length; i++) h = h * 31 + n.charCodeAt(i) >>> 0;
  return '215-555-' + String(1000 + h % 9000);
};
function ClientList({
  onOpenClient,
  view = 'households',
  filters
}) {
  const cols = useClCols();
  const show = k => cols.includes(k);
  const [query, setQuery] = React.useState('');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const searchRef = React.useRef();
  // view: 'households' | 'individuals' | 'prospects' — drives only the heading
  // copy + row count; the dataset itself is unchanged for the demo.
  const VIEW_LABELS = {
    households: {
      label: 'households'
    },
    individuals: {
      label: 'individuals'
    },
    prospects: {
      label: 'prospects'
    }
  };
  const viewInfo = VIEW_LABELS[view] || VIEW_LABELS.households;
  const [sortKey, setSortKey] = React.useState('aum');
  const [sortDir, setSortDir] = React.useState('desc');

  /* rows come from the tenant export: client_book rolled up, YTD from the
     account-level TWRR series. Nothing here is planning data. */
  const rows = React.useMemo(() => {
    const book = (typeof dmRows === 'function' ? dmRows('client_book') : []) || [];
    const perf = (typeof dmRows === 'function' ? dmRows('performance') : []) || [];
    const ytdBy = {};
    perf.forEach(p => {
      if (p.period !== 'YTD' || p.series !== 'TWRR') return;
      const b = ytdBy[p.client] || (ytdBy[p.client] = {
        w: 0,
        v: 0
      });
      b.w += p.market_value;
      b.v += p.return_pct * p.market_value;
    });
    const ytdOf = names => {
      let w = 0,
        v = 0;
      names.forEach(n => {
        const b = ytdBy[n];
        if (b) {
          w += b.w;
          v += b.v;
        }
      });
      return w ? v / w / 100 : 0;
    };
    const segRank = {
      'Ultra High Net Worth': 4,
      'High Net Worth': 3,
      'Mass Affluent': 2,
      Emerging: 1
    };
    const riskOf = s => s >= 66 ? 'Aggressive' : s >= 40 ? 'Moderate' : 'Conservative';
    const people = book.filter(c => c.client && c.client !== 'Unassigned');
    if (view === 'individuals' || view === 'prospects') {
      const list = view === 'prospects' ? people.filter(c => c.status === 'Prospect') : people;
      return list.map((c, i) => ({
        id: i + 1,
        name: c.client,
        sub: c.household,
        aum: Math.round(c.aum),
        segment: c.segment,
        risk: riskOf(c.risk_score),
        status: c.status,
        ytd: ytdOf([c.client]),
        accounts: c.accounts,
        primary: c.client,
        place: [c.city, c.state].filter(Boolean).join(', ')
      }));
    }
    const trustsBy = {},
      trustOwn = {};
    ((typeof dmRows === 'function' ? dmRows('raw_accounts') : []) || []).forEach(a => {
      if (a.account_type !== 'Trust' || !a.household || a.status === 'Closed') return;
      const m = trustsBy[a.household] || (trustsBy[a.household] = {});
      const t = m[a.account] || (m[a.account] = {
        kind: 'trust',
        name: a.account,
        aum: 0,
        accounts: 0
      });
      t.aum += a.market_value || 0;
      t.accounts += 1;
      const o = trustOwn[a.client] || (trustOwn[a.client] = {
        aum: 0,
        accounts: 0
      });
      o.aum += a.market_value || 0;
      o.accounts += 1;
    });
    const hh = {};
    people.forEach(c => {
      const h = hh[c.household] || (hh[c.household] = {
        household: c.household,
        members: [],
        aum: 0,
        accounts: 0,
        seg: c.segment,
        risk: 0,
        status: c.status
      });
      h.members.push(c);
      h.aum += c.aum;
      h.accounts += c.accounts;
      if ((segRank[c.segment] || 0) > (segRank[h.seg] || 0)) h.seg = c.segment;
    });
    return Object.values(hh).map((h, i) => {
      /* the export has no household role, so the largest book in the household leads it */
      const primary = [...h.members].sort((a, b) => b.aum - a.aum)[0];
      const ppl = [...h.members].sort((a, b) => b.aum - a.aum).map((m, j) => {
        const o = trustOwn[m.client] || {
          aum: 0,
          accounts: 0
        };
        return {
          kind: 'person',
          name: m.client,
          role: j === 0 ? 'Primary' : 'Member',
          aum: Math.round(m.aum - o.aum),
          accounts: Math.max(0, m.accounts - o.accounts)
        };
      });
      const trusts = Object.values(trustsBy[h.household] || {}).map(t => ({
        ...t,
        aum: Math.round(t.aum)
      }));
      return {
        id: i + 1,
        name: h.household,
        primary: primary.client,
        place: [primary.city, primary.state].filter(Boolean).join(', '),
        sub: 'Primary \u00b7 ' + primary.client,
        members: [...ppl, ...trusts],
        nPeople: ppl.length,
        nTrusts: trusts.length,
        aum: Math.round(h.aum),
        segment: h.seg,
        risk: riskOf(primary.risk_score),
        status: h.status,
        ytd: ytdOf(h.members.map(m => m.client)),
        accounts: h.accounts
      };
    });
  }, [view]);

  // --- Apply filters from the slide-out drawer ----------------------------
  const f = filters || {};
  const filtered = React.useMemo(() => rows.filter(r => {
    if (f.segment && f.segment.length && !f.segment.includes(r.segment)) return false;
    if (f.aum && f.aum.length && !f.aum.includes(clAumTier(r.aum))) return false;
    if (f.risk && f.risk.length && !f.risk.includes(r.risk)) return false;
    if (f.status && f.status.length && !f.status.includes(r.status)) return false;
    const q = query.trim().toLowerCase();
    if (q && !(String(r.name).toLowerCase().includes(q) || String(r.sub || '').toLowerCase().includes(q) || (r.members || []).some(m => m.name.toLowerCase().includes(q)))) return false;
    return true;
  }), [rows, f.segment, f.aum, f.risk, f.status, query]);
  const sorted = React.useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const av = a[sortKey],
        bv = b[sortKey];
      if (typeof av === 'number') return sortDir === 'desc' ? bv - av : av - bv;
      return sortDir === 'desc' ? String(bv).localeCompare(String(av)) : String(av).localeCompare(String(bv));
    });
    return copy;
  }, [filtered, sortKey, sortDir]);
  const isHH = view === 'households';
  const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);
  const memberSummary = r => [plural(r.nPeople, 'person', 'people'), r.nTrusts ? plural(r.nTrusts, 'trust', 'trusts') : null].filter(Boolean).join(' \u00b7 ');
  const initials = n => String(n).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const MemberMark = ({
    m,
    size = 22,
    ring
  }) => m.kind === 'trust' ? /*#__PURE__*/React.createElement("span", {
    title: m.name,
    style: {
      width: size,
      height: size,
      borderRadius: 6,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgb(55,65,81)',
      color: 'rgb(209,213,219)',
      border: '1.5px solid ' + (ring || 'rgb(75,85,99)')
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-landmark",
    style: {
      fontSize: size * 0.42
    }
  })) : /*#__PURE__*/React.createElement("span", {
    title: m.name,
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgb(31,41,55)',
      color: 'rgb(229,231,235)',
      fontSize: size * 0.4,
      fontWeight: 600,
      border: '1.5px solid ' + (ring || 'rgb(75,85,99)')
    }
  }, initials(m.name));
  const [pageSize, setPageSize] = React.useState(25);
  const [page, setPage] = React.useState(0);
  const pages = Math.max(1, Math.ceil(sorted.length / pageSize));
  React.useEffect(() => {
    setPage(0);
  }, [sorted.length, pageSize, sortKey, sortDir, view]);
  const pg = Math.min(page, pages - 1);
  const pageRows = sorted.slice(pg * pageSize, pg * pageSize + pageSize);
  const scrollRef = React.useRef();
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [pg, pageSize]);
  const tableRef = React.useRef();
  const [tableH, setTableH] = React.useState(null);
  React.useLayoutEffect(() => {
    const fit = () => {
      if (!tableRef.current) return;
      const top = tableRef.current.getBoundingClientRect().top + window.scrollY;
      setTableH(Math.max(320, window.innerHeight - top - 24));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  const onSort = k => {
    if (k === sortKey) setSortDir(d => d === 'desc' ? 'asc' : 'desc');else {
      setSortKey(k);
      setSortDir('desc');
    }
  };
  const fmtCur = n => '$' + n.toLocaleString('en-US');
  const fmtPct = n => (n >= 0 ? '+' : '') + (n * 100).toFixed(1) + '%';
  const COLOR = {
    border: 'rgb(75,85,99)',
    subtle: 'rgb(163,163,163)',
    ink: 'rgb(249,250,251)',
    surface: 'rgb(17,24,39)',
    hover: 'rgba(255,255,255,0.03)',
    green: 'rgb(5,122,85)',
    greenSoft: 'rgba(5,122,85,0.16)',
    pos: 'rgb(52,211,153)',
    neg: 'rgb(248,113,113)'
  };
  const HeadCell = ({
    k,
    label,
    align = 'left'
  }) => /*#__PURE__*/React.createElement("th", {
    onClick: () => k && onSort(k),
    style: {
      textAlign: align,
      padding: '10px 14px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      color: COLOR.subtle,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderBottom: `1px solid ${COLOR.border}`,
      cursor: k ? 'pointer' : 'default',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      flexDirection: align === 'right' ? 'row-reverse' : 'row'
    }
  }, label, k && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-up-down",
    style: {
      width: 9,
      height: 9,
      opacity: sortKey === k ? 1 : 0.4,
      color: sortKey === k ? COLOR.ink : COLOR.subtle
    }
  })));
  const IconBtn = ({
    icon,
    color = 'rgb(163,163,163)'
  }) => /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      border: 'none',
      background: 'transparent',
      color,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    style: {
      width: 13,
      height: 13
    }
  }));
  const SegmentBadge = ({
    tier
  }) => {
    const c = CL_SEGMENTS[tier] || CL_SEGMENTS['Mass Affluent'];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        height: 22,
        padding: '0 9px',
        borderRadius: 9999,
        background: c.bg,
        border: `1px solid ${c.bd}`,
        color: c.fg,
        fontSize: 11,
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, tier);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 32px',
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.__cl-head th { position:sticky; top:0; z-index:2; background:rgb(28,35,47) !important; } .__cl-pg{width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:rgb(209,213,219);cursor:pointer;display:inline-flex;align-items:center;justify-content:center} .__cl-pg:hover:not(:disabled){background:rgba(255,255,255,0.06)} .__cl-pg:disabled{color:rgb(75,85,99);cursor:default}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '6px 2px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: COLOR.subtle
    }
  }, "Showing ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLOR.ink,
      fontWeight: 600
    }
  }, sorted.length), " of ", rows.length, " ", viewInfo.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }, searchOpen || query ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      width: 260,
      padding: '0 10px',
      borderRadius: 8,
      border: `1px solid ${COLOR.green}`,
      background: 'rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    style: {
      width: 13,
      height: 13,
      color: COLOR.subtle,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: searchRef,
    autoFocus: true,
    value: query,
    onChange: e => setQuery(e.target.value),
    onBlur: () => {
      if (!query) setSearchOpen(false);
    },
    onKeyDown: e => {
      if (e.key === 'Escape') {
        setQuery('');
        setSearchOpen(false);
      }
    },
    placeholder: 'Search ' + viewInfo.label,
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: COLOR.ink,
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onMouseDown: e => e.preventDefault(),
    onClick: () => {
      setQuery('');
      searchRef.current && searchRef.current.focus();
    },
    title: "Clear",
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: COLOR.subtle,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7")) : /*#__PURE__*/React.createElement("button", {
    title: "Search clients",
    onClick: () => setSearchOpen(true),
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: `1px solid ${COLOR.border}`,
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    style: {
      width: 13,
      height: 13
    }
  })))), /*#__PURE__*/React.createElement("div", {
    ref: tableRef,
    style: {
      border: `1px solid ${COLOR.border}`,
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(255,255,255,0.05)',
      height: tableH || undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: 860,
      borderCollapse: 'collapse',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("thead", {
    className: "__cl-head"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(HeadCell, {
    k: "name",
    label: isHH ? 'Household' : 'Clients'
  }), isHH && /*#__PURE__*/React.createElement(HeadCell, {
    label: "Members"
  }), show('aum') && /*#__PURE__*/React.createElement(HeadCell, {
    k: "aum",
    label: "AUM",
    align: "right"
  }), show('accounts') && /*#__PURE__*/React.createElement(HeadCell, {
    k: "accounts",
    label: "Accounts",
    align: "right"
  }), show('ytd') && /*#__PURE__*/React.createElement(HeadCell, {
    k: "ytd",
    label: "YTD Return",
    align: "right"
  }), show('segment') && /*#__PURE__*/React.createElement(HeadCell, {
    k: "segment",
    label: "Segment",
    align: "right"
  }), show('risk') && /*#__PURE__*/React.createElement(HeadCell, {
    k: "risk",
    label: "Risk Profile",
    align: "right"
  }))), /*#__PURE__*/React.createElement("tbody", null, pageRows.map((r, i) => {
    const last = i === pageRows.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: r.id + '-' + i
    }, /*#__PURE__*/React.createElement("tr", {
      "data-clickable": (r.primary || r.name) === 'David Young' ? true : undefined,
      onClick: () => onOpenClient && onOpenClient(r.primary || r.name),
      style: {
        borderBottom: last ? 'none' : `1px solid ${COLOR.border}`,
        transition: 'background 120ms',
        cursor: onOpenClient ? 'pointer' : 'default'
      },
      onMouseEnter: e => e.currentTarget.style.background = COLOR.hover,
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        minWidth: 210
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: r.name,
      id: r.id
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: COLOR.ink,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.name), r.sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: COLOR.subtle,
        marginTop: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.sub)))), isHH && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, r.members.slice(0, 4).map((m, j) => /*#__PURE__*/React.createElement("span", {
      key: m.name,
      style: {
        marginLeft: j ? -6 : 0,
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(MemberMark, {
      m: m,
      ring: "rgb(30,37,49)"
    }))), r.members.length > 4 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: -6,
        height: 22,
        padding: '0 6px',
        borderRadius: 9999,
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgb(55,65,81)',
        border: '1.5px solid rgb(30,37,49)',
        color: 'rgb(229,231,235)',
        fontSize: 10,
        fontWeight: 600
      }
    }, "+", r.members.length - 4)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: COLOR.subtle
      }
    }, memberSummary(r)))), show('aum') && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        textAlign: 'right',
        fontSize: 13,
        color: COLOR.ink,
        fontVariantNumeric: 'tabular-nums'
      }
    }, fmtCur(r.aum)), show('accounts') && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        textAlign: 'right',
        fontSize: 13,
        color: COLOR.ink,
        fontVariantNumeric: 'tabular-nums'
      }
    }, r.accounts), show('ytd') && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'flex-end',
        fontSize: 13,
        fontWeight: 600,
        color: r.ytd >= 0 ? COLOR.pos : COLOR.neg
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid fa-arrow-trend-${r.ytd >= 0 ? 'up' : 'down'}`,
      style: {
        width: 11,
        height: 11
      }
    }), fmtPct(r.ytd))), show('segment') && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(SegmentBadge, {
      tier: r.segment
    })), show('risk') && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 14px',
        textAlign: 'right',
        fontSize: 13,
        color: COLOR.ink,
        whiteSpace: 'nowrap'
      }
    }, r.risk)));
  }), sorted.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: cols.length + (isHH ? 1 : 0),
    style: {
      padding: '48px 14px',
      textAlign: 'center',
      color: COLOR.subtle,
      fontFamily: 'Inter',
      fontSize: 13
    }
  }, query ? 'No clients match “' + query + '”.' : 'No clients match the active filters.'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 24,
      padding: '8px 14px',
      borderTop: `1px solid ${COLOR.border}`,
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Page size", /*#__PURE__*/React.createElement("select", {
    value: pageSize,
    onChange: e => setPageSize(Number(e.target.value)),
    style: {
      height: 28,
      padding: '0 6px',
      borderRadius: 6,
      border: `1px solid ${COLOR.border}`,
      background: 'rgb(31,41,55)',
      color: COLOR.ink,
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, [10, 25, 50, 100].map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, n)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, sorted.length ? pg * pageSize + 1 : 0, " to ", Math.min(sorted.length, (pg + 1) * pageSize), " of ", sorted.length), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "__cl-pg",
    title: "First page",
    disabled: pg === 0,
    onClick: () => setPage(0)
  }, /*#__PURE__*/React.createElement(ClPgIcon, {
    d: "M11 17l-5-5 5-5M18 17l-5-5 5-5"
  })), /*#__PURE__*/React.createElement("button", {
    className: "__cl-pg",
    title: "Previous page",
    disabled: pg === 0,
    onClick: () => setPage(pg - 1)
  }, /*#__PURE__*/React.createElement(ClPgIcon, {
    d: "M15 18l-6-6 6-6"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "Page ", pg + 1, " of ", pages), /*#__PURE__*/React.createElement("button", {
    className: "__cl-pg",
    title: "Next page",
    disabled: pg >= pages - 1,
    onClick: () => setPage(pg + 1)
  }, /*#__PURE__*/React.createElement(ClPgIcon, {
    d: "M9 18l6-6-6-6"
  })), /*#__PURE__*/React.createElement("button", {
    className: "__cl-pg",
    title: "Last page",
    disabled: pg >= pages - 1,
    onClick: () => setPage(pages - 1)
  }, /*#__PURE__*/React.createElement(ClPgIcon, {
    d: "M13 17l5-5-5-5M6 17l5-5-5-5"
  }))))));
}
function smBtn() {
  return {
    height: 30,
    padding: '0 12px',
    borderRadius: 8,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgb(75,85,99)',
    color: 'rgb(229,231,235)',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center'
  };
}
function viewBtn(active) {
  return {
    width: 30,
    height: 30,
    borderRadius: 8,
    background: active ? 'rgba(5,122,85,0.22)' : 'rgba(255,255,255,0.04)',
    border: '1px solid rgb(75,85,99)',
    color: active ? 'rgb(5,122,85)' : 'rgb(163,163,163)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
}

/* Avatar — stable per-id gradient with initials */
function Avatar({
  name,
  id
}) {
  const palette = [['#f0abfc', '#c084fc'], ['#fca5a5', '#f87171'], ['#fdba74', '#fb923c'], ['#fcd34d', '#f59e0b'], ['#86efac', '#34d399'], ['#67e8f9', '#22d3ee'], ['#93c5fd', '#60a5fa'], ['#c4b5fd', '#a78bfa'], ['#f9a8d4', '#ec4899']];
  const [a, b] = palette[id % palette.length];
  const initial = String(name || '?').trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      background: `linear-gradient(135deg, ${a}, ${b})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      border: '1px solid rgba(255,255,255,0.15)',
      flexShrink: 0
    }
  }, initial);
}
Object.assign(window, {
  ClientList,
  ClientColumnsMenu,
  CL_COLUMNS,
  CL_SEGMENTS,
  clAumTier
});
;
/* ---- advisor/ClientFilterDrawer.jsx ---- */
/* Client Filter — slide-out drawer (from the right) for the Clients table.
   Live-updates the parent filter state; the active-selections bar below the
   topbar reflects choices immediately. Field Shadcn dark surface. */

const CF_GROUPS = [{
  key: 'aum',
  label: 'AUM',
  icon: 'building-columns',
  options: ['<$5M', '$5M–$15M', '$15M–$30M', '$30M+']
}, {
  key: 'risk',
  label: 'Risk Profile',
  icon: 'shield-halved',
  options: ['Conservative', 'Moderate', 'Aggressive']
}, {
  key: 'status',
  label: 'Status',
  icon: 'circle-check',
  options: ['Active', 'Review Due', 'Prospect']
}];
function ClientFilterDrawer({
  open,
  onClose,
  filters,
  setFilters
}) {
  const f = filters || {};
  const count = CF_GROUPS.reduce((n, g) => n + (f[g.key] || []).length, 0);
  const toggle = (key, val) => {
    setFilters(prev => {
      const cur = new Set(prev[key] || []);
      if (cur.has(val)) cur.delete(val);else cur.add(val);
      return {
        ...prev,
        [key]: Array.from(cur)
      };
    });
  };
  const clearAll = () => setFilters({});
  const cols = useClCols();
  const toggleCol = k => clSetCols(cols.includes(k) ? cols.filter(c => c !== k) : CL_COLUMNS.map(c => c.k).filter(c => c === k || cols.includes(c)));
  const colsChanged = cols.join() !== CL_COLS_DEFAULT.join();
  const secHead = (label, extra, action) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      padding: '18px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, label), extra && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, extra), action);
  const linkBtn = (label, on, enabled) => /*#__PURE__*/React.createElement("button", {
    onClick: on,
    "data-no-hint": true,
    disabled: !enabled,
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: enabled ? 'pointer' : 'default',
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: enabled ? 'rgb(52,211,153)' : 'rgb(107,114,128)'
    }
  }, label);
  const C = {
    panel: 'rgb(17,24,39)',
    border: 'rgb(75,85,99)',
    borderSoft: 'rgba(75,85,99,0.5)',
    ink: 'rgb(249,250,251)',
    subtle: 'rgb(163,163,163)',
    green: 'rgb(5,122,85)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.35)',
      zIndex: 90,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity 180ms ease'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: 380,
      maxWidth: '92vw',
      background: C.panel,
      borderLeft: `1px solid ${C.border}`,
      boxShadow: '-20px 0 60px -20px rgba(0,0,0,0.7)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 240ms cubic-bezier(.2,.8,.2,1)',
      zIndex: 95,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: `1px solid ${C.borderSoft}`,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-sliders",
    style: {
      fontSize: 13,
      color: C.green
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.ink
    }
  }, "Filters & columns"), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 20,
      minWidth: 20,
      padding: '0 6px',
      borderRadius: 9999,
      background: 'rgba(5,122,85,0.22)',
      border: '1px solid rgba(5,122,85,0.55)',
      color: 'rgb(110,231,183)',
      fontSize: 11,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "data-no-hint": true,
    style: {
      marginLeft: 'auto',
      width: 28,
      height: 28,
      borderRadius: 8,
      border: `1px solid ${C.border}`,
      background: 'rgba(255,255,255,0.04)',
      color: C.ink,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 12
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 18px',
      overflowY: 'auto',
      flex: 1
    }
  }, secHead('Filters', count ? count + ' selected' : null, linkBtn('Clear', clearAll, count > 0)), CF_GROUPS.map(g => {
    const sel = f[g.key] || [];
    return /*#__PURE__*/React.createElement("div", {
      key: g.key,
      style: {
        padding: '16px 0',
        borderBottom: `1px solid ${C.borderSoft}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 11
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid fa-${g.icon}`,
      style: {
        fontSize: 11,
        color: C.subtle,
        width: 13
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: C.subtle,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, g.label), sel.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.green,
        fontWeight: 600
      }
    }, "\xB7 ", sel.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, g.options.map(opt => {
      const on = sel.includes(opt);
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        "data-no-hint": true,
        onClick: () => toggle(g.key, opt),
        style: {
          height: 32,
          padding: '0 13px',
          borderRadius: 9999,
          cursor: 'pointer',
          fontFamily: 'Inter',
          fontSize: 12.5,
          fontWeight: 500,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          background: on ? 'rgba(5,122,85,0.22)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${on ? 'rgb(5,122,85)' : C.border}`,
          color: on ? 'rgb(110,231,183)' : 'rgb(229,231,235)',
          transition: 'background 120ms ease, border-color 120ms ease, color 120ms ease'
        }
      }, on && /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-check",
        style: {
          fontSize: 10
        }
      }), opt);
    })));
  }), secHead('Columns', cols.length + ' of ' + CL_COLUMNS.length + ' shown', linkBtn('Reset', () => clSetCols(CL_COLS_DEFAULT), colsChanged)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      paddingTop: 6
    }
  }, CL_COLUMNS.map(c => {
    const on = cols.includes(c.k);
    return /*#__PURE__*/React.createElement("button", {
      key: c.k,
      "data-no-hint": true,
      disabled: c.locked,
      onClick: () => !c.locked && toggleCol(c.k),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 6px',
        borderRadius: 7,
        border: 'none',
        background: 'transparent',
        cursor: c.locked ? 'default' : 'pointer',
        textAlign: 'left',
        fontFamily: 'Inter',
        fontSize: 13,
        color: on ? 'rgb(249,250,251)' : 'rgb(163,163,163)'
      },
      onMouseEnter: e => {
        if (!c.locked) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: 4,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid ' + (on ? 'rgb(5,122,85)' : 'rgb(107,114,128)'),
        background: on ? 'rgb(5,122,85)' : 'transparent',
        opacity: c.locked ? 0.55 : 1,
        color: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check",
      style: {
        width: 10,
        height: 10,
        fontSize: 9
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, c.label), c.locked && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgb(107,114,128)'
      }
    }, "Always shown"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px 16px',
      borderTop: `1px solid ${C.borderSoft}`,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: clearAll,
    "data-no-hint": true,
    disabled: count === 0,
    hidden: true,
    style: {
      height: 36,
      padding: '0 14px',
      borderRadius: 8,
      border: `1px solid ${C.border}`,
      background: 'rgba(255,255,255,0.03)',
      color: count === 0 ? C.subtle : C.ink,
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500,
      cursor: count === 0 ? 'default' : 'pointer',
      opacity: count === 0 ? 0.6 : 1
    }
  }, "Clear all"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "data-no-hint": true,
    style: {
      flex: 1,
      height: 36,
      borderRadius: 8,
      border: '1px solid rgb(5,122,85)',
      background: 'rgb(5,122,85)',
      color: '#fff',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, count > 0 ? `Show results` : 'Done'))));
}
Object.assign(window, {
  ClientFilterDrawer,
  CF_GROUPS
});
;
/* ---- advisor/ClientTabs.jsx ---- */
/* ClientTabs — firm-wide tab layout for the client page. Tiles carry a `tab`
   id; shipped tiles fall back to a default tab by title. Tabs are configured
   here (client page "+ New tab") and in Settings → Client page. */

const CT_KEY = 'adv.client.tabs.v2';
const CT_DEFAULT = [{
  id: 'overview',
  name: 'Overview',
  locked: true
}, {
  id: 'reports',
  name: 'Reports'
}, {
  id: 'opps',
  name: 'Opportunities'
}];
const CT_SEED_TAB = {
  'Summary': 'reports',
  'Invoices': 'reports',
  'Account vs Benchmark Performance': 'reports',
  'Risk Return': 'reports',
  'Cumulative Net Investment': 'reports',
  'Target vs. Actual Allocation': 'opps',
  'Unrealized': 'opps'
};
function ctLoad() {
  try {
    const v = JSON.parse(localStorage.getItem(CT_KEY));
    if (Array.isArray(v) && v.length) return v;
  } catch (e) {}
  return CT_DEFAULT;
}
function ctSave(tabs) {
  try {
    localStorage.setItem(CT_KEY, JSON.stringify(tabs));
  } catch (e) {}
  window.dispatchEvent(new Event('clienttabs:change'));
}
function useClientTabs() {
  const [tabs, setTabs] = React.useState(ctLoad);
  React.useEffect(() => {
    const on = () => setTabs(ctLoad());
    window.addEventListener('clienttabs:change', on);
    return () => window.removeEventListener('clienttabs:change', on);
  }, []);
  const update = fn => ctSave(typeof fn === 'function' ? fn(ctLoad()) : fn);
  return [tabs, update];
}
const DT_KEY = 'adv.dash.tabs.v1';
const DT_DEFAULT = [{
  id: 'overview',
  name: 'Overview',
  kind: 'board',
  locked: true
}, {
  id: 'clients',
  name: 'Client Analysis',
  kind: 'practice'
}, {
  id: 'cashflow',
  name: 'Cash Flow',
  kind: 'practice'
}, {
  id: 'assets',
  name: 'Assets',
  kind: 'practice'
}];
function dtLoad() {
  let v = null;
  try {
    v = JSON.parse(localStorage.getItem(DT_KEY));
  } catch (e) {}
  if (!Array.isArray(v) || !v.length) {
    let pages = [];
    try {
      pages = JSON.parse(localStorage.getItem('adv.pages') || '[]') || [];
    } catch (e) {}
    v = [...DT_DEFAULT, ...pages.map(p => ({
      id: p.id,
      name: p.name,
      kind: 'page'
    }))];
  }
  return v;
}
function useDashTabs() {
  const [tabs, setTabs] = React.useState(dtLoad);
  React.useEffect(() => {
    const on = () => setTabs(dtLoad());
    window.addEventListener('dashtabs:change', on);
    return () => window.removeEventListener('dashtabs:change', on);
  }, []);
  const update = fn => {
    const next = typeof fn === 'function' ? fn(dtLoad()) : fn;
    try {
      localStorage.setItem(DT_KEY, JSON.stringify(next));
    } catch (e) {}
    window.dispatchEvent(new Event('dashtabs:change'));
  };
  return [tabs, update];
}
const dtRoute = t => t.id === 'overview' ? 'dashboard' : t.kind === 'practice' ? 'practice.' + t.id : 'page:' + t.id;
const dtFromRoute = a => a === 'dashboard' ? 'overview' : a.startsWith('practice.') ? a.slice(9) : a === 'practice' ? 'clients' : a.startsWith('page:') ? a.slice(5) : null;
function cdTabOf(t, tabs) {
  const list = tabs || ctLoad();
  const id = t.tab || CT_SEED_TAB[t.title] || 'overview';
  const tb = list.find(x => x.id === id);
  return tb && !tb.hidden ? id : 'overview';
}
function ctNewId(name) {
  return (name.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'tab') + '-' + Date.now().toString(36).slice(-4);
}

/* ── the shared client-page layout (template) ─────────────────────── */
const CT_SRC = 'David Young';
function ctSeeds(name) {
  const v = typeof TA_CLIENT_DEFAULTS_V !== 'undefined' ? TA_CLIENT_DEFAULTS_V : 1;
  return (window.TA_CLIENT_DEFAULTS || []).map((t, i) => ({
    seedV: v,
    ...t,
    id: 'cd' + i + '-' + name.replace(/\W+/g, ''),
    saved: true,
    scopeRef: {
      kind: 'client',
      value: name
    }
  })).filter(t => !t.retired);
}
function ctTemplate() {
  try {
    const tpl = JSON.parse(localStorage.getItem('adv.client.template') || 'null');
    if (tpl && tpl.tiles) return {
      from: tpl.from,
      tiles: tpl.tiles
    };
  } catch (e) {}
  let own = null;
  try {
    own = JSON.parse(localStorage.getItem('adv.client.tiles.' + CT_SRC) || 'null');
  } catch (e) {}
  const seeds = ctSeeds(CT_SRC);
  const has = Array.isArray(own) ? own : [];
  return {
    from: CT_SRC,
    tiles: [...seeds.filter(s => !has.some(t => t.id === s.id)), ...has]
  };
}
function ctSaveTemplate(tiles, from) {
  const at = Date.now();
  try {
    localStorage.setItem('adv.client.template', JSON.stringify({
      from,
      at,
      tiles
    }));
    localStorage.setItem('adv.client.tiles.' + from, JSON.stringify(tiles));
    localStorage.setItem('adv.client.tiles.' + from + '.tpl', String(at));
  } catch (e) {}
  window.dispatchEvent(new Event('clienttemplate:change'));
}
function ctPublish(client) {
  let tiles = null;
  try {
    tiles = JSON.parse(localStorage.getItem('adv.client.tiles.' + client) || 'null');
  } catch (e) {}
  if (!tiles) return;
  ctSaveTemplate(tiles, client);
}
function CDTabBar({
  tabs,
  active,
  onChange,
  onAdd,
  pinned,
  configSec = 'clientpage',
  configTitle = 'Configure client page'
}) {
  const [adding, setAdding] = React.useState(false);
  const [name, setName] = React.useState('');
  const visible = tabs.filter(t => !t.hidden);
  const done = () => {
    const n = name.trim();
    setAdding(false);
    setName('');
    if (n) onAdd(n);
  };
  const tabBtn = on => ({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 2px 11px',
    marginBottom: -1,
    whiteSpace: 'nowrap',
    borderBottom: '2px solid ' + (on ? 'rgb(5,122,85)' : 'transparent'),
    color: on ? 'rgb(249,250,251)' : 'rgb(163,163,163)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: on ? 600 : 500
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      borderBottom: '1px solid rgba(75,85,99,0.5)',
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, visible.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange(t.id),
    style: tabBtn(t.id === active)
  }, t.name)), adding ? /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: name,
    onChange: e => setName(e.target.value),
    onBlur: done,
    placeholder: "Tab name",
    onKeyDown: e => {
      if (e.key === 'Enter') done();
      if (e.key === 'Escape') {
        setName('');
        setAdding(false);
      }
    },
    style: {
      height: 28,
      width: 140,
      padding: '0 9px',
      borderRadius: 7,
      fontFamily: 'Inter',
      fontSize: 12.5,
      outline: 'none',
      background: 'rgba(0,0,0,0.3)',
      color: 'rgb(249,250,251)',
      border: '1px solid rgba(16,185,129,0.5)',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setAdding(true),
    style: {
      ...tabBtn(false),
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'rgb(163,163,163)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus",
    style: {
      fontSize: 10
    }
  }), "New tab"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), (pinned || []).map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => onChange(p.id),
    style: {
      ...tabBtn(p.id === active),
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + p.icon,
    style: {
      fontSize: 11,
      color: p.id === active ? 'rgb(16,185,129)' : 'inherit'
    }
  }), p.name)), pinned && pinned.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'rgba(75,85,99,0.7)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    title: configTitle,
    onClick: () => {
      try {
        localStorage.setItem('field.settings.sec', configSec);
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('nav:set', {
        detail: {
          screen: 'settings'
        }
      }));
    },
    style: {
      ...tabBtn(false),
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-gear",
    style: {
      fontSize: 11
    }
  }), "Configure"));
}
Object.assign(window, {
  useDashTabs,
  dtRoute,
  dtFromRoute,
  ctTemplate,
  ctSaveTemplate,
  ctPublish,
  CT_DEFAULT,
  useClientTabs,
  cdTabOf,
  ctNewId,
  CDTabBar
});
;
/* ---- advisor/FamilyTree.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Family tree — a full-bleed map of the client's household, built from the
   CRM: each person with their own accounts, joint accounts on the couple's
   link, and other household members a generation below. Opened from the
   pinned "Family tree" tab in the client tab bar. */
const FT_CW = 280,
  FT_GAP = 40;
const FT_C = {
  ok: 'rgb(16,185,129)',
  line: 'rgb(107,114,128)',
  ink: 'rgb(249,250,251)',
  mute: 'rgb(163,163,163)',
  card: 'rgb(31,41,55)',
  bd: 'rgb(75,85,99)'
};
const ftIsJoint = a => /joint|jtwros|community|tenants/i.test(a.account_type || '');
const ftIcon = a => /roth|ira|401|403/i.test((a.tax_wrapper || '') + a.account_type) ? 'fa-building-columns' : ftIsJoint(a) ? 'fa-users' : /trust/i.test(a.account_type + a.account) ? 'fa-shield' : 'fa-sack-dollar';
function ftBuild(clientName) {
  const book = dmRows('client_book');
  const info = n => book.find(c => c.client === n) || {};
  const all = cdAccounts(clientName);
  const joint = all.filter(ftIsJoint);
  const people = cdPeople(clientName).map(p => ({
    ...p,
    own: p.accounts.filter(a => !ftIsJoint(a)),
    info: info(p.name)
  }));
  const primary = people.find(p => p.name === clientName) || people[0] || {
    name: clientName,
    own: [],
    info: info(clientName),
    mv: 0
  };
  const rest = people.filter(p => p !== primary);
  const partner = rest.find(p => /spouse|partner|wife|husband/i.test(p.info.household_role || '')) || rest.find(p => (p.info.household_role || '') === '' && Math.abs((p.info.age || 0) - (primary.info.age || 0)) < 15) || null;
  const kids = rest.filter(p => p !== partner);
  const sum = as => as.reduce((x, a) => x + a.market_value, 0);
  return {
    primary,
    partner,
    kids,
    joint,
    total: sum(all),
    count: all.length,
    house: primary.info.household || cdHouseOf(clientName),
    sum
  };
}

/* Drag to move around the tree, trackpad scroll to pan, pinch (or ⌘/ctrl + scroll) to zoom
   around the cursor. Works whether or not a details panel is open. */
function useFTPan(wrapRef, live, setZoom) {
  const [pan, setPanS] = React.useState([0, 0]);
  const panRef = React.useRef([0, 0]);
  const [drag, setDrag] = React.useState(false);
  const [anim, setAnim] = React.useState(false);
  const d = React.useRef(null),
    moved = React.useRef(false);
  const setPan = (p, animate) => {
    panRef.current = p;
    setAnim(!!animate);
    setPanS(p);
  };
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = e => {
      e.preventDefault();
      const L = live.current,
        rc = el.getBoundingClientRect(),
        p = panRef.current;
      if (e.ctrlKey || e.metaKey) {
        const z2 = Math.min(2.5, Math.max(0.4, L.zoom * Math.exp(-Math.max(-60, Math.min(60, e.deltaY)) * 0.01)));
        const s1 = L.fit * L.zoom,
          s2 = L.fit * z2,
          mx = e.clientX - rc.left,
          my = e.clientY - rc.top;
        const b1 = L.base(s1),
          b2 = L.base(s2),
          cx = (mx - b1[0] - p[0]) / s1,
          cy = (my - b1[1] - p[1]) / s1;
        L.zoom = z2;
        setZoom(z2);
        setPan([mx - b2[0] - cx * s2, my - b2[1] - cy * s2]);
        return;
      }
      setPan([p[0] - e.deltaX, p[1] - e.deltaY]);
    };
    el.addEventListener('wheel', onWheel, {
      passive: false
    });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);
  const onMouseDown = e => {
    if (e.button !== 0) return;
    d.current = {
      x: e.clientX,
      y: e.clientY,
      p: panRef.current
    };
    moved.current = false;
    const mv = ev => {
      const dx = ev.clientX - d.current.x,
        dy = ev.clientY - d.current.y;
      if (!moved.current && Math.abs(dx) + Math.abs(dy) < 4) return;
      moved.current = true;
      setDrag(true);
      setPan([d.current.p[0] + dx, d.current.p[1] + dy]);
    };
    const up = () => {
      document.removeEventListener('mousemove', mv);
      document.removeEventListener('mouseup', up);
      setDrag(false);
      setTimeout(() => {
        moved.current = false;
      }, 0);
    };
    document.addEventListener('mousemove', mv);
    document.addEventListener('mouseup', up);
  };
  const onClickCapture = e => {
    if (moved.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };
  /* bring a set of boxes (tree coordinates) into the area left of the details panel */
  const focus = (boxes, scale, base, viewW, viewH, panelW) => {
    if (!boxes.length) return;
    const x0 = Math.min(...boxes.map(b => b[0])),
      y0 = Math.min(...boxes.map(b => b[1])),
      x1 = Math.max(...boxes.map(b => b[0] + b[2])),
      y1 = Math.max(...boxes.map(b => b[1] + b[3]));
    const tx = (viewW - panelW) / 2,
      ty = (56 + viewH) / 2;
    setPan([tx - base[0] - (x0 + x1) / 2 * scale, ty - base[1] - (y0 + y1) / 2 * scale], true);
  };
  return {
    pan,
    setPan,
    drag,
    anim,
    focus,
    handlers: {
      onMouseDown,
      onClickCapture
    }
  };
}
function FTPanHint() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 24,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      background: 'rgba(17,24,39,0.9)',
      border: '1px solid rgb(75,85,99)',
      borderRadius: 9999,
      padding: '5px 12px',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-hand",
    style: {
      fontSize: 11
    }
  }), "Drag to move \xB7 pinch to zoom");
}
const ftCardH = n => 112 + n * 34;
function FTPerson({
  x,
  y,
  p,
  role,
  sel,
  onSel,
  sum
}) {
  const on = sel === p.name,
    dim = sel && !on;
  return /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      onSel(p.name);
    },
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: FT_CW,
      height: ftCardH(p.own.length),
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '14px 16px 8px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'Inter',
      background: on ? 'rgb(6,46,36)' : FT_C.card,
      border: '1px solid ' + (on ? FT_C.ok : FT_C.bd),
      boxShadow: on ? '0 0 0 3px rgba(16,185,129,0.2)' : '0 10px 24px -14px rgba(0,0,0,0.6)',
      opacity: dim ? 0.55 : 1,
      transition: 'opacity 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      background: CD_AVA[cdHash(p.name) % CD_AVA.length],
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 13
    }
  }, p.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: FT_C.ink
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: FT_C.mute
    }
  }, role)), p.info.age ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: FT_C.ink
    }
  }, p.info.age) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FT_C.mute
    }
  }, "Individual assets"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: FT_C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, dmFmt(sum(p.own), 'usd'))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid rgba(75,85,99,0.6)'
    }
  }, p.own.map(a => /*#__PURE__*/React.createElement(FTAcct, {
    key: a.account_id || a.account,
    a: a
  }))));
}
function FTAcct({
  a
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 34,
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + ftIcon(a),
    style: {
      width: 12,
      fontSize: 11,
      color: FT_C.ok,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'rgb(229,231,235)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0
    }
  }, cdAcctLabel(a)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'rgb(209,213,219)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, dmFmt(a.market_value, 'usd')));
}
function CDFamilyTreeView({
  clientName
}) {
  const spec = React.useMemo(() => clientName === 'David Young' && window.foYoungSpec ? foYoungSpec(clientName) : null, [clientName]);
  return spec ? /*#__PURE__*/React.createElement(FTObitTree, {
    spec: spec
  }) : /*#__PURE__*/React.createElement(FTHouseholdTree, {
    clientName: clientName
  });
}
function FTHouseholdTree({
  clientName
}) {
  const root = React.useRef(null);
  const [height, setHeight] = React.useState(560);
  React.useLayoutEffect(() => {
    const f = () => {
      if (root.current) setHeight(Math.max(320, window.innerHeight - root.current.getBoundingClientRect().top));
    };
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const t = React.useMemo(() => ftBuild(clientName), [clientName]);
  const [sel, setSel] = React.useState(null);
  const wrap = React.useRef(null);
  const [box, setBox] = React.useState({
    w: 1000,
    h: 600
  });
  const [zoom, setZoom] = React.useState(1);
  React.useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setBox({
      w: el.clientWidth,
      h: el.clientHeight
    });
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* layout */
  const {
    primary,
    partner,
    kids,
    joint
  } = t;
  const topY = 40,
    pH = ftCardH(primary.own.length),
    qH = partner ? ftCardH(partner.own.length) : 0;
  const jW = 260,
    jH = joint.length ? 72 + joint.length * 34 : 0;
  const coupleW = partner ? FT_CW * 2 + jW + FT_GAP * 2 : FT_CW;
  const kidSlots = Math.max(kids.length, 1);
  const kidsW = kidSlots * FT_CW + (kidSlots - 1) * FT_GAP;
  const W = Math.max(coupleW, kidsW) + 80;
  const cx = W / 2;
  const pX = partner ? cx - coupleW / 2 : cx - FT_CW / 2,
    qX = cx + coupleW / 2 - FT_CW;
  const linkY = topY + 30,
    jY = linkY + 46;
  const rowBot = Math.max(topY + pH, topY + qH, joint.length ? jY + jH : 0);
  const busY = rowBot + 50,
    kY = busY + 50;
  const kH = kids.length ? Math.max(...kids.map(k => ftCardH(k.own.length))) : 132;
  const H = kY + kH + 40;
  const kX = i => cx - kidsW / 2 + i * (FT_CW + FT_GAP);
  const fit = Math.max(0.6, Math.min(1, (box.w - 48) / W, (box.h - 96) / H));
  const scale = fit * zoom;
  const base = sc => [Math.max(24, (box.w - W * sc) / 2), Math.max(64, (box.h - H * sc) / 2)];
  const live = React.useRef({});
  live.current = {
    zoom,
    fit,
    base
  };
  const P = useFTPan(wrap, live, setZoom);
  const b0 = base(scale);
  const srcY = joint.length ? jY + jH : linkY;
  const s = sel && [primary, partner, ...kids].find(p => p && p.name === sel);
  React.useEffect(() => {
    if (!s) return;
    const at = s === primary ? [pX, topY] : s === partner ? [qX, topY] : [kX(kids.indexOf(s)), kY];
    P.focus([[at[0], at[1], FT_CW, ftCardH(s.own.length)]], scale, b0, box.w, box.h, 340);
  }, [sel]);
  const roleOf = p => p === primary ? p.info.household_role || 'Primary client' : p === partner ? p.info.household_role || 'Spouse' : p.info.household_role || 'Household member';
  const cap = {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: FT_C.mute
  };
  const zb = {
    width: 34,
    height: 34,
    background: FT_C.card,
    border: 'none',
    color: 'rgb(229,231,235)',
    cursor: 'pointer',
    fontSize: 12
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    style: {
      position: 'relative',
      height,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      background: 'rgb(13,19,32)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: wrap,
    onClick: () => setSel(null)
  }, P.handlers, {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      cursor: P.drag ? 'grabbing' : 'grab',
      backgroundPosition: P.pan[0] + 'px ' + P.pan[1] + 'px',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: b0[0] + P.pan[0],
      top: b0[1] + P.pan[1],
      width: W,
      height: H,
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
      transition: P.anim ? 'left 320ms ease, top 320ms ease' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, partner && /*#__PURE__*/React.createElement("line", {
    x1: pX + FT_CW,
    y1: linkY,
    x2: qX,
    y2: linkY,
    stroke: FT_C.line,
    strokeWidth: "1.5"
  }), partner && joint.length > 0 && /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: linkY,
    x2: cx,
    y2: jY,
    stroke: FT_C.line,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${partner ? cx : cx} ${partner ? srcY : topY + pH} V${busY} M${kX(0) + FT_CW / 2} ${busY} H${kX(kidSlots - 1) + FT_CW / 2}`,
    stroke: FT_C.line,
    strokeWidth: "1.5",
    fill: "none",
    strokeDasharray: kids.length ? '' : '5 5'
  }), Array.from({
    length: kidSlots
  }, (_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: kX(i) + FT_CW / 2,
    y1: busY,
    x2: kX(i) + FT_CW / 2,
    y2: kY,
    stroke: FT_C.line,
    strokeWidth: "1.5",
    strokeDasharray: kids.length ? '' : '5 5'
  }))), partner && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: cx - 15,
      top: linkY - 15,
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: 'rgb(13,19,32)',
      border: '1.5px solid ' + FT_C.line,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-link",
    style: {
      fontSize: 11,
      color: 'rgb(229,231,235)'
    }
  })), /*#__PURE__*/React.createElement(FTPerson, {
    x: pX,
    y: topY,
    p: primary,
    role: roleOf(primary),
    sel: sel,
    onSel: setSel,
    sum: t.sum
  }), partner && /*#__PURE__*/React.createElement(FTPerson, {
    x: qX,
    y: topY,
    p: partner,
    role: roleOf(partner),
    sel: sel,
    onSel: setSel,
    sum: t.sum
  }), partner && joint.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: cx - jW / 2,
      top: jY,
      width: jW,
      height: jH,
      boxSizing: 'border-box',
      padding: '12px 16px 6px',
      borderRadius: 10,
      background: FT_C.card,
      border: '1px solid ' + FT_C.bd,
      fontFamily: 'Inter',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      opacity: sel && sel !== primary.name && sel !== partner.name ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FT_C.mute
    }
  }, "Joint assets"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: FT_C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, dmFmt(t.sum(joint), 'usd'))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid rgba(75,85,99,0.6)'
    }
  }, joint.map(a => /*#__PURE__*/React.createElement(FTAcct, {
    key: a.account_id || a.account,
    a: a
  })))), kids.map((k, i) => /*#__PURE__*/React.createElement(FTPerson, {
    key: k.name,
    x: kX(i),
    y: kY,
    p: k,
    role: roleOf(k),
    sel: sel,
    onSel: setSel,
    sum: t.sum
  })), !kids.length && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: kX(0),
      top: kY,
      width: FT_CW,
      height: 132,
      boxSizing: 'border-box',
      borderRadius: 10,
      border: '1px dashed rgb(107,114,128)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'Inter',
      textAlign: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(229,231,235)'
    }
  }, "No children on file"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: FT_C.mute
    }
  }, "Add from the CRM or public records"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => e.stopPropagation(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 10px',
      borderRadius: 6,
      border: '1px solid ' + FT_C.bd,
      background: 'rgba(255,255,255,0.05)',
      color: 'rgb(229,231,235)',
      fontFamily: 'Inter',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus",
    style: {
      fontSize: 10
    }
  }), "Add family member"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 18,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      fontFamily: 'Inter',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: FT_C.ink
    }
  }, t.house), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: FT_C.mute
    }
  }, (n => n + (n === 1 ? ' person' : ' people'))([primary, partner, ...kids].filter(Boolean).length), " ", '\u00b7', " ", t.count, " accounts ", '\u00b7', " ", dmFmt(t.total, 'usd'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      display: 'flex',
      border: '1px solid ' + FT_C.bd,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Zoom in",
    onClick: () => setZoom(z => Math.min(2, z + 0.15)),
    style: {
      ...zb,
      borderRight: '1px solid ' + FT_C.bd
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  })), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Zoom out",
    onClick: () => setZoom(z => Math.max(0.5, z - 0.15)),
    style: {
      ...zb,
      borderRight: '1px solid ' + FT_C.bd
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 11,
      height: 2,
      margin: '0 auto',
      background: 'currentColor',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Fit to screen",
    title: "Fit to screen",
    onClick: () => {
      setZoom(1);
      P.setPan([0, 0], true);
    },
    style: zb
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-expand"
  }))), s && /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 56,
      right: 16,
      bottom: 16,
      width: 300,
      overflowY: 'auto',
      boxSizing: 'border-box',
      padding: '16px 18px',
      borderRadius: 12,
      background: 'rgb(17,24,39)',
      border: '1px solid ' + FT_C.bd,
      boxShadow: '0 24px 56px -16px rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 600,
      color: FT_C.ink
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: FT_C.mute
    }
  }, roleOf(s), s.info.age ? ' \u00b7 Age ' + s.info.age : '')), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Close",
    onClick: () => setSel(null),
    style: {
      background: 'transparent',
      border: 'none',
      color: FT_C.mute,
      cursor: 'pointer',
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Accounts"), [...s.own, ...(s === primary || s === partner ? joint : [])].map(a => /*#__PURE__*/React.createElement("div", {
    key: a.account_id || a.account,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.6)',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + ftIcon(a),
    style: {
      width: 12,
      fontSize: 11,
      color: FT_C.ok,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'rgb(229,231,235)'
    }
  }, cdAcctLabel(a)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FT_C.mute
    }
  }, [a.account_number, a.custodian].filter(Boolean).join(' \u00b7 '))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(229,231,235)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, dmFmt(a.market_value, 'usd'))))), /*#__PURE__*/React.createElement(FTSources, {
    items: [{
      k: 'acct',
      t: s.own.length + (s === primary || s === partner ? joint.length : 0) + ' account registrations name ' + s.name.split(' ')[0],
      m: 'Custodian records \u00b7 ' + [...new Set([...s.own, ...(s === primary || s === partner ? joint : [])].map(a => a.custodian).filter(Boolean))].join(', ')
    }, {
      k: 'crm',
      t: 'Household record lists ' + s.name.split(' ')[0] + ' as ' + roleOf(s).toLowerCase(),
      m: 'CRM \u00b7 ' + t.house + (s.info.age ? ' \u00b7 age from client profile' : '')
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Contact"), /*#__PURE__*/React.createElement("span", null, cdEmail(s.name)), /*#__PURE__*/React.createElement("span", null, cdPhone(s.name)))));
}

/* Where a person, trust or business came from — shown in the details panel */
const FT_SRC = {
  obit: {
    icon: 'fa-newspaper',
    c: 'rgb(251,191,36)',
    label: 'Obituary'
  },
  crm: {
    icon: 'fa-note-sticky',
    c: 'rgb(96,165,250)',
    label: 'CRM'
  },
  email: {
    icon: 'fa-envelope',
    c: 'rgb(244,114,182)',
    label: 'Email'
  },
  acct: {
    icon: 'fa-building-columns',
    c: 'rgb(52,211,153)',
    label: 'Account records'
  },
  filing: {
    icon: 'fa-landmark',
    c: 'rgb(125,211,252)',
    label: 'Public filing'
  },
  doc: {
    icon: 'fa-file-signature',
    c: 'rgb(196,181,253)',
    label: 'Document on file'
  }
};
function FTSrcIcons({
  items
}) {
  const kinds = [...new Set((items || []).map(x => x.k))];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      marginLeft: 'auto'
    },
    title: 'From ' + kinds.map(k => FT_SRC[k].label.toLowerCase()).join(', ')
  }, kinds.map(k => /*#__PURE__*/React.createElement("i", {
    key: k,
    className: 'fa-solid ' + FT_SRC[k].icon,
    style: {
      fontSize: 10,
      color: FT_SRC[k].c
    }
  })));
}
function FTSources({
  items
}) {
  if (!items || !items.length) return null;
  const cap = {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgb(163,163,163)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cap,
      display: 'flex',
      alignItems: 'center'
    }
  }, "Where we learned this", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      letterSpacing: 0,
      textTransform: 'none',
      fontWeight: 500
    }
  }, items.length, " source", items.length === 1 ? '' : 's')), items.map((x, i) => {
    const K = FT_SRC[x.k];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        padding: '9px 10px',
        borderRadius: 8,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(75,85,99,0.6)',
        borderLeft: '3px solid ' + K.c,
        fontFamily: 'Inter'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'fa-solid ' + K.icon,
      style: {
        fontSize: 11,
        color: K.c,
        width: 12,
        textAlign: 'center',
        marginTop: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 500,
        color: 'rgb(229,231,235)',
        lineHeight: 1.4
      }
    }, x.t), x.q && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'rgb(209,213,219)',
        lineHeight: 1.45
      }
    }, x.q), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgb(163,163,163)'
      }
    }, K.label, x.m ? ' · ' + x.m : '')));
  }));
}
function cdTreeGet() {
  return !!window.__cdTreeOpen;
}
function cdTreeSet(v) {
  window.__cdTreeOpen = !!v;
  window.dispatchEvent(new CustomEvent('cdtree:set', {
    detail: !!v
  }));
}
function useCDTreeOpen() {
  const [open, setOpen] = React.useState(cdTreeGet);
  React.useEffect(() => {
    const on = e => setOpen(e.detail);
    window.addEventListener('cdtree:set', on);
    return () => window.removeEventListener('cdtree:set', on);
  }, []);
  return [open, cdTreeSet];
}
Object.assign(window, {
  CDFamilyTreeView,
  useCDTreeOpen,
  useFTPan,
  FTPanHint,
  FTSources,
  FTSrcIcons,
  FT_SRC
});
;
/* ---- advisor/FamilyTreeObit.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Family map — the client's extended family, reconstructed from an obituary
   and matched to our accounts, with the trusts and businesses that tie them
   together. Generic renderer + the Young family spec. */
const FO_CW = 240;
const FO_C = {
  ok: 'rgb(16,185,129)',
  trust: 'rgb(196,181,253)',
  biz: 'rgb(125,211,252)',
  line: 'rgb(107,114,128)',
  ink: 'rgb(249,250,251)',
  mute: 'rgb(163,163,163)',
  card: 'rgb(31,41,55)',
  bd: 'rgb(75,85,99)'
};
const FO_KIND = {
  trust: {
    c: FO_C.trust,
    bg: 'rgba(76,29,149,0.16)',
    bgOn: 'rgb(36,28,64)',
    bd: 'rgba(196,181,253,0.45)',
    icon: 'fa-shield',
    r: 4
  },
  biz: {
    c: FO_C.biz,
    bg: 'rgba(12,74,110,0.22)',
    bgOn: 'rgb(12,40,60)',
    bd: 'rgba(125,211,252,0.45)',
    icon: 'fa-briefcase',
    r: 4
  },
  event: {
    c: 'rgb(229,143,176)',
    bg: 'rgba(131,24,67,0.18)',
    bgOn: 'rgb(60,20,40)',
    bd: 'rgba(229,143,176,0.5)',
    icon: 'fa-calendar-days',
    r: 4,
    label: 'Life event',
    cap: 'Who it involves'
  },
  ref: {
    c: 'rgb(108,182,255)',
    bg: 'rgba(30,64,120,0.22)',
    bgOn: 'rgb(20,40,70)',
    bd: 'rgba(108,182,255,0.5)',
    icon: 'fa-handshake-angle',
    r: 10,
    label: 'Referred family',
    cap: 'Who referred them'
  }
};
FO_KIND.trust.label = 'Trust';
FO_KIND.trust.cap = 'Grantors, trustees & beneficiaries';
FO_KIND.biz.label = 'Business';
FO_KIND.biz.cap = 'Owners & founder';
const foH = p => 70 + (p.total != null ? 46 : 0) + p.accts.length * 32 + (p.accts.length ? 6 : 0) + (p.roles && p.roles.length ? p.roles.length * 24 + 8 : 0);
const foJointH = j => 64 + j.accts.length * 32;
const foEH = e => 66 + e.rows.length * 28;
function foYoungSpec(clientName) {
  const all = cdAccounts(clientName);
  const isJ = a => /joint|jtwros|community|tenants/i.test(a.account_type || '');
  const ico = a => /roth|ira|401|403/i.test((a.tax_wrapper || '') + a.account_type) ? 'fa-building-columns' : isJ(a) ? 'fa-users' : 'fa-sack-dollar';
  const row = a => ({
    i: ico(a),
    l: cdAcctLabel(a),
    m: dmFmt(a.market_value, 'usd'),
    sub: [a.account_number, a.custodian].filter(Boolean).join(' \u00b7 ')
  });
  const sum = as => as.reduce((x, a) => x + a.market_value, 0);
  const book = dmRows('client_book');
  const age = n => (book.find(c => c.client === n) || {}).age;
  const own = n => all.filter(a => a.client === n && !isJ(a));
  const joint = all.filter(isJ);
  const dA = own('David Young'),
    kA = own('Karen Young');
  const tAcct = all.filter(a => /trust/i.test((a.account_type || '') + ' ' + (a.tax_wrapper || '')));
  const tTot = sum(tAcct),
    tOwner = tAcct[0] && tAcct[0].client;
  const E = [{
    id: 'biz',
    kind: 'biz',
    name: 'Young Precision Tooling, Inc.',
    short: 'Young Precision Tooling',
    type: 'S-Corp \u00b7 Bristol, PA',
    x: 40,
    y: 30,
    link: 'robert',
    rows: [{
      l: 'Founded',
      m: '1972 by Robert'
    }, {
      l: 'David Young',
      m: '60% \u00b7 President'
    }, {
      l: 'Michael Young',
      m: '40%'
    }],
    facts: ['Family manufacturing business founded by Robert Young.', 'David runs it as President. Ownership is split 60/40 with his brother Michael.', 'No buy-sell agreement on file. Worth raising at the next review.']
  }, {
    id: 'ryft',
    kind: 'trust',
    name: 'Robert Young Family Trust',
    short: 'Robert Young Family Trust',
    type: 'Irrevocable \u00b7 est. 1998',
    x: 1200,
    y: 30,
    link: 'margaret',
    rows: [{
      l: 'Trustee',
      m: 'Michael Young'
    }, {
      l: 'Beneficiaries',
      m: 'David & Michael, 50/50'
    }, {
      l: 'Our books',
      m: 'Not held here'
    }],
    facts: ['Named in Margaret\u2019s obituary.', 'Created by Robert and Margaret. Michael is trustee.', 'Splits equally between their sons David and Michael.']
  }, {
    id: 'rev',
    kind: 'trust',
    name: 'Young Revocable Trust',
    short: 'Young Revocable Trust',
    type: 'Revocable \u00b7 est. 2015',
    x: 1320,
    y: 250,
    link: 'karen',
    rows: [{
      l: 'Trustees',
      m: 'David & Karen'
    }, {
      l: 'Beneficiaries',
      m: 'Emily & Ryan'
    }, {
      l: 'Our books',
      m: tAcct.length ? 'Trust account \u00b7 ' + dmFmt(tTot, 'usd') : 'Not funded here'
    }],
    facts: ['David and Karen\u2019s estate plan.', 'They are grantors and co-trustees.', 'Emily and Ryan are the remainder beneficiaries.', tAcct.length ? 'Funded here through ' + (tAcct.length === 1 ? 'one trust-registered account' : tAcct.length + ' trust-registered accounts') + ' (' + dmFmt(tTot, 'usd') + '), held under ' + (tOwner || 'the household') + '.' : 'None of the Young Household accounts are titled to it yet.']
  }];
  const rels = [{
    e: 'biz',
    p: 'robert',
    l: 'Founder'
  }, {
    e: 'biz',
    p: 'david',
    l: 'Owner \u00b7 60%'
  }, {
    e: 'biz',
    p: 'michael',
    l: 'Owner \u00b7 40%'
  }, {
    e: 'ryft',
    p: 'robert',
    l: 'Grantor'
  }, {
    e: 'ryft',
    p: 'margaret',
    l: 'Grantor'
  }, {
    e: 'ryft',
    p: 'michael',
    l: 'Trustee \u00b7 beneficiary 50%'
  }, {
    e: 'ryft',
    p: 'david',
    l: 'Beneficiary \u00b7 50%'
  }, {
    e: 'rev',
    p: 'david',
    l: tAcct.length && tOwner === 'David Young' ? 'Grantor \u00b7 trustee \u00b7 ' + dmFmt(tTot, 'usd') : 'Grantor \u00b7 trustee'
  }, {
    e: 'rev',
    p: 'karen',
    l: tAcct.length && tOwner === 'Karen Young' ? 'Grantor \u00b7 trustee \u00b7 ' + dmFmt(tTot, 'usd') : 'Grantor \u00b7 trustee'
  }, {
    e: 'rev',
    p: 'emily',
    l: 'Beneficiary'
  }, {
    e: 'rev',
    p: 'ryan',
    l: 'Beneficiary'
  }];
  const EB = Object.fromEntries(E.map(e => [e.id, e]));
  const roles = id => rels.filter(r => r.p === id).map(r => ({
    e: r.e,
    kind: EB[r.e].kind,
    t: r.l,
    n: EB[r.e].short
  }));
  const P = [{
    id: 'robert',
    name: 'Robert Young',
    x: 470,
    y: 30,
    role: 'David\u2019s father',
    deceased: true,
    external: true,
    accts: [],
    facts: ['Predeceased Margaret, per her obituary.', 'Founded Young Precision Tooling in 1972.']
  }, {
    id: 'margaret',
    name: 'Margaret Young',
    x: 850,
    y: 30,
    role: 'David\u2019s mother \u00b7 Obituary subject',
    deceased: true,
    external: true,
    accts: [],
    facts: ['Survived by her sons David (Karen) and Michael.', 'Grandchildren Emily Carter (James) and Ryan Young; great-grandchildren Lily and Noah.']
  }, {
    id: 'michael',
    name: 'Michael Young',
    x: 40,
    y: 290,
    role: 'Brother \u00b7 Doylestown, PA',
    external: true,
    accts: [],
    facts: ['David\u2019s brother, named in Margaret\u2019s obituary.', 'Not in our data.']
  }, {
    id: 'david',
    name: 'David Young',
    x: 380,
    y: 290,
    role: 'Primary client',
    age: age('David Young'),
    crm: true,
    total: dmFmt(sum(dA), 'usd'),
    accts: dA.map(row),
    facts: ['Margaret\u2019s son. Matches our Young Household.']
  }, {
    id: 'karen',
    name: 'Karen Young',
    x: 1020,
    y: 290,
    role: 'Spouse',
    age: age('Karen Young'),
    crm: true,
    total: dmFmt(sum(kA), 'usd'),
    accts: kA.map(row),
    facts: ['Named as David\u2019s wife in Margaret\u2019s obituary. Matches our Young Household.']
  }];
  P.forEach(p => {
    p.roles = roles(p.id);
  });
  const dB = 290 + foH(P[3]),
    kB = 290 + foH(P[4]);
  const jY = 290 + 26 + 44,
    jB = joint.length ? jY + foJointH({
      accts: joint
    }) : 0;
  const r2 = Math.max(dB, kB, jB) + 90;
  const kid = o => ({
    ...o,
    roles: roles(o.id)
  });
  P.push(kid({
    id: 'emily',
    name: 'Emily Carter',
    x: 380,
    y: r2,
    role: 'Daughter \u00b7 Wayne, PA',
    external: true,
    accts: [],
    facts: ['David and Karen\u2019s daughter, named with her husband James.', 'Not in our data. A likely heir to the Young Household.']
  }), kid({
    id: 'james',
    name: 'James Carter',
    x: 680,
    y: r2,
    role: 'Son-in-law',
    external: true,
    accts: [],
    facts: ['Emily\u2019s husband.', 'Not in our data.']
  }), kid({
    id: 'ryan',
    name: 'Ryan Young',
    x: 1020,
    y: r2,
    role: 'Son \u00b7 Boston, MA',
    external: true,
    accts: [],
    facts: ['David and Karen\u2019s son.', 'Not in our data. A likely heir to the Young Household.']
  }));
  const r3 = r2 + Math.max(...P.slice(-3).map(foH)) + 100;
  P.push(kid({
    id: 'lily',
    name: 'Lily Carter',
    x: 380,
    y: r3,
    role: 'Granddaughter',
    external: true,
    accts: [],
    facts: ['Emily and James\u2019s daughter.', 'Not in our data.']
  }), kid({
    id: 'noah',
    name: 'Noah Carter',
    x: 680,
    y: r3,
    role: 'Grandson',
    external: true,
    accts: [],
    facts: ['Emily and James\u2019s son.', 'Not in our data.']
  }));
  /* where each person, trust and business came from */
  const custs = as => [...new Set(as.map(a => a.custodian).filter(Boolean))].join(', ');
  const OB = {
    k: 'obit',
    m: 'Bristol, PA notice · Mar 2026 · matched by Field'
  };
  const SRC = {
    robert: [{
      ...OB,
      t: 'Named as Margaret’s late husband',
      q: '“…predeceased by her husband of 58 years, Robert.”'
    }, {
      k: 'filing',
      t: 'Incorporator of Young Precision Tooling, Inc. (1972)',
      m: 'PA Department of State'
    }],
    margaret: [{
      ...OB,
      t: 'Obituary for Margaret A. Young, 91',
      q: '“Margaret A. Young, 91, of Bristol, passed away peacefully on March 9.”'
    }, {
      k: 'crm',
      t: 'David’s mother passed in March. Michael is settling the estate as trustee.',
      m: 'Note from the Apr 2026 review'
    }],
    michael: [{
      ...OB,
      t: 'Named as Margaret’s son',
      q: '“She is survived by her sons David (Karen) and Michael of Doylestown…”'
    }, {
      k: 'filing',
      t: 'Officer and 40% shareholder of Young Precision Tooling',
      m: 'S-Corp annual report · 2025'
    }],
    david: [{
      k: 'acct',
      t: 'Primary owner on ' + dA.length + ' accounts' + (joint.length ? ', joint owner on ' + joint.length : ''),
      m: custs(dA.concat(joint))
    }, {
      k: 'crm',
      t: 'Primary client of the Young Household since ' + ((book.find(c => c.client === 'David Young') || {}).client_since_year || 2011),
      m: 'Client profile'
    }, {
      ...OB,
      t: 'Named as Margaret’s son, which links the obituary to this household',
      q: '“…her sons David (Karen) and Michael…”'
    }],
    karen: [{
      k: 'acct',
      t: 'Owner on ' + kA.length + ' accounts' + (joint.length ? ', joint owner on ' + joint.length : ''),
      m: custs(kA.concat(joint))
    }, {
      ...OB,
      t: 'Named as David’s wife',
      q: '“…her sons David (Karen)…”'
    }],
    emily: [{
      ...OB,
      t: 'Named as granddaughter, with her husband',
      q: '“…grandchildren Emily Carter (James) of Wayne and Ryan Young of Boston…”'
    }, {
      k: 'crm',
      t: 'Emily lives in Wayne and recently married James. David wants to talk about gifting.',
      m: 'Note from the Oct 2025 review'
    }, {
      k: 'doc',
      t: 'Named as a beneficiary of the Young Revocable Trust',
      m: 'Certification of trust · 2015'
    }],
    james: [{
      ...OB,
      t: 'Named as Emily’s husband',
      q: '“…Emily Carter (James) of Wayne…”'
    }, {
      k: 'email',
      t: 'Mentioned by Karen',
      q: '“Emily and James are hosting everyone for the holidays this year.”',
      m: 'From Karen Young · Nov 2025'
    }],
    ryan: [{
      ...OB,
      t: 'Named as grandson',
      q: '“…and Ryan Young of Boston…”'
    }, {
      k: 'crm',
      t: 'Ryan moved to Boston for a job in biotech.',
      m: 'Note from the Oct 2025 review'
    }, {
      k: 'doc',
      t: 'Named as a beneficiary of the Young Revocable Trust',
      m: 'Certification of trust · 2015'
    }],
    lily: [{
      ...OB,
      t: 'Named as great-granddaughter',
      q: '“…and great-grandchildren Lily and Noah.”'
    }, {
      k: 'email',
      t: 'Karen asked about a college fund',
      q: '“Could we talk about starting a college fund for Lily, and maybe Noah too?”',
      m: 'From Karen Young · May 2026'
    }],
    noah: [{
      ...OB,
      t: 'Named as great-grandson',
      q: '“…and great-grandchildren Lily and Noah.”'
    }, {
      k: 'email',
      t: 'Mentioned with Lily in Karen’s college-fund question',
      m: 'From Karen Young · May 2026'
    }],
    biz: [{
      k: 'filing',
      t: 'S-Corp registered in Bristol, PA since 1972',
      m: 'PA Department of State'
    }, {
      k: 'filing',
      t: 'Ownership 60% David, 40% Michael',
      m: 'S-Corp annual report · 2025'
    }, {
      k: 'crm',
      t: 'David is President. No buy-sell agreement on file.',
      m: 'Note from the Oct 2025 review'
    }],
    ryft: [{
      ...OB,
      t: 'Named in the obituary',
      q: '“Memorial gifts may be made in Margaret’s name through the Robert Young Family Trust.”'
    }, {
      k: 'crm',
      t: 'Michael is trustee of their parents’ trust. David is a 50% beneficiary.',
      m: 'Note from the Apr 2026 review'
    }],
    rev: [{
      k: 'doc',
      t: 'Certification of trust on file',
      m: 'Uploaded Aug 2015 · grantors David & Karen'
    }].concat(tAcct.length ? [{
      k: 'acct',
      t: 'Funded through ' + tAcct.length + ' trust-registered account' + (tAcct.length === 1 ? '' : 's') + ' (' + dmFmt(tTot, 'usd') + ')',
      m: custs(tAcct)
    }] : [])
  };
  P.forEach(p => {
    p.src = SRC[p.id] || [];
  });
  E.forEach(e => {
    e.src = SRC[e.id] || [];
  });
  const by = Object.fromEntries(P.map(p => [p.id, p]));
  const H = r3 + 70 + 50;
  return {
    title: 'Young family',
    sub: 'From Margaret Young\u2019s obituary \u00b7 2 of 10 matched to our accounts \u00b7 2 trusts \u00b7 1 business',
    W: 1620,
    H,
    people: P,
    by,
    entities: E,
    ebyid: EB,
    rels,
    couples: [{
      a: 'robert',
      b: 'margaret'
    }, {
      a: 'david',
      b: 'karen',
      joint: joint.length ? {
        label: 'Joint assets',
        total: dmFmt(sum(joint), 'usd'),
        accts: joint.map(row),
        y: jY
      } : null
    }, {
      a: 'emily',
      b: 'james'
    }],
    descents: [{
      from: 'c0',
      to: ['michael', 'david']
    }, {
      from: 'c1',
      to: ['emily', 'ryan']
    }, {
      from: 'c2',
      to: ['lily', 'noah']
    }],
    groups: [{
      label: 'Young Household \u00b7 our client',
      x: 360,
      y: 260,
      w: 920,
      h: Math.max(dB, kB, jB) + 20 - 260
    }, {
      label: 'Carter family \u00b7 not in our data',
      x: 360,
      y: r2 - 30,
      w: 580,
      h: H - 20 - (r2 - 30),
      proposed: true
    }]
  };
}
function FOCard({
  p,
  dim,
  on,
  onSel
}) {
  return /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      onSel(p.id);
    },
    style: {
      position: 'absolute',
      left: p.x,
      top: p.y,
      width: FO_CW,
      height: foH(p),
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '12px 14px 6px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'Inter',
      background: on ? 'rgb(6,46,36)' : p.external ? 'rgba(31,41,55,0.45)' : FO_C.card,
      border: '1px ' + (p.external ? 'dashed ' : 'solid ') + (on ? p.accent || FO_C.ok : p.accent ? p.accent : p.external ? 'rgb(107,114,128)' : FO_C.bd),
      borderLeft: p.accent ? '3px solid ' + p.accent : undefined,
      boxShadow: on ? '0 0 0 3px rgba(16,185,129,0.2)' : 'none',
      opacity: dim ? 0.4 : 1,
      transition: 'opacity 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13.5,
      fontWeight: 600,
      color: FO_C.ink,
      whiteSpace: 'nowrap'
    }
  }, p.name, p.deceased && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: FO_C.mute
    }
  }, '\u2020'), p.age ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, p.age) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: FO_C.mute,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.role), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 11,
      color: p.accent || (p.crm ? 'rgb(110,231,183)' : 'rgb(209,213,219)'),
      fontWeight: p.accent ? 600 : 400
    }
  }, p.status || (p.crm ? 'In our data' : p.deceased ? 'From obituary' : 'Not in our data'), window.FTSrcIcons && /*#__PURE__*/React.createElement(FTSrcIcons, {
    items: p.src
  }))), p.roles && p.roles.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, p.roles.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      height: 20,
      padding: '0 7px',
      borderRadius: 4,
      fontSize: 10.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      color: FO_KIND[r.kind].c,
      background: FO_KIND[r.kind].bg
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + FO_KIND[r.kind].icon,
    style: {
      fontSize: 9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.t.split(' \u00b7 ')[0], " ", '\u00b7', " ", r.n)))), p.total != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FO_C.mute
    }
  }, "Individual assets"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: FO_C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.total)), p.accts.length > 0 && /*#__PURE__*/React.createElement(FORows, {
    rows: p.accts
  }));
}
function FORows({
  rows
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid rgba(75,85,99,0.6)'
    }
  }, rows.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + a.i,
    style: {
      width: 12,
      fontSize: 11,
      color: FO_C.ok,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'rgb(229,231,235)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0
    }
  }, a.l), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'rgb(209,213,219)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.m))));
}
function FOEntity({
  e,
  on,
  dim,
  onSel
}) {
  const k = FO_KIND[e.kind];
  return /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: ev => {
      ev.stopPropagation();
      onSel(e.id);
    },
    style: {
      position: 'absolute',
      left: e.x,
      top: e.y,
      width: 260,
      height: foEH(e),
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '12px 14px 6px',
      borderRadius: k.r,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'Inter',
      background: on ? k.bgOn : k.bg,
      border: '1px solid ' + (on ? k.c : k.bd),
      boxShadow: on ? '0 0 0 3px ' + k.bg : 'none',
      opacity: dim ? 0.4 : 1,
      transition: 'opacity 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 13.5,
      fontWeight: 600,
      color: FO_C.ink,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + k.icon,
    style: {
      fontSize: 11,
      color: k.c
    }
  }), e.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 11.5,
      color: FO_C.mute
    }
  }, FO_KIND[e.kind].label, " ", '\u00b7', " ", e.type, window.FTSrcIcons && /*#__PURE__*/React.createElement(FTSrcIcons, {
    items: e.src
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid ' + k.bd
    }
  }, e.rows.map(r => /*#__PURE__*/React.createElement("span", {
    key: r.l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: FO_C.mute,
      whiteSpace: 'nowrap'
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      fontWeight: 500,
      color: 'rgb(229,231,235)',
      whiteSpace: 'nowrap'
    }
  }, r.m)))));
}
function FOEdges({
  spec,
  sel,
  related,
  layer
}) {
  const B = spec.by,
    cx = p => p.x + FO_CW / 2,
    mid = p => p.y + 26;
  const ringX = c => (B[c.a].x + FO_CW + B[c.b].x) / 2;
  const on = ids => !sel || ids.every(id => related.has(id)) ? 1 : 0.18;
  const S = {
    stroke: FO_C.line,
    strokeWidth: 1.6,
    fill: 'none'
  };
  const ring = (x, y, o, k) => /*#__PURE__*/React.createElement("g", {
    key: k,
    opacity: o
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "13",
    fill: "rgb(13,19,32)",
    stroke: "rgb(229,231,235)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x - 3,
    cy: y,
    r: "4.5",
    fill: "none",
    stroke: "rgb(229,231,235)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x + 3,
    cy: y,
    r: "4.5",
    fill: "none",
    stroke: "rgb(229,231,235)",
    strokeWidth: "1.5"
  }));
  /* ownership / trust links: the short anchor link always; every link while selected */
  const live = sel ? spec.rels.filter(r => r.e === sel || r.p === sel) : [];
  const ePt = (e, p) => {
    const ex = e.x + 130,
      ey = e.y + foEH(e) / 2;
    const px = cx(p),
      py = p.y + foH(p) / 2;
    const ax = px < e.x ? e.x : px > e.x + 260 ? e.x + 260 : ex,
      ay = py > e.y + foEH(e) ? e.y + foEH(e) : py < e.y ? e.y : ey;
    const bx = px,
      by = py > ay ? p.y : p.y + foH(p);
    return {
      ax,
      ay,
      bx: Math.abs(py - ay) < 80 ? px < ax ? p.x + FO_CW : p.x : bx,
      by: Math.abs(py - ay) < 80 ? mid(p) : by
    };
  };
  const lbl = (x, y, t, c) => /*#__PURE__*/React.createElement("g", {
    key: t + x + y
  }, /*#__PURE__*/React.createElement("rect", {
    x: x - t.length * 3.1 - 9,
    y: y - 11,
    width: t.length * 6.2 + 18,
    height: 22,
    rx: 11,
    fill: "rgb(13,19,32)",
    stroke: c,
    strokeOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 4,
    textAnchor: "middle",
    fontFamily: "Inter",
    fontSize: "11",
    fontWeight: "500",
    fill: c
  }, t));
  const box = id => B[id] ? {
    x: B[id].x,
    y: B[id].y,
    w: FO_CW,
    h: foH(B[id])
  } : spec.ebyid[id] ? {
    x: spec.ebyid[id].x,
    y: spec.ebyid[id].y,
    w: 260,
    h: foEH(spec.ebyid[id])
  } : null;
  const lk = k => {
    const a = box(k.a),
      b = box(k.b);
    if (!a || !b) return null;
    if (b.y > a.y + a.h) {
      const x1 = a.x + a.w / 2,
        y1 = a.y + a.h,
        x2 = b.x + b.w / 2,
        y2 = b.y,
        my = (y1 + y2) / 2;
      return {
        d: `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`,
        mx: (x1 + x2) / 2,
        my
      };
    }
    const right = b.x > a.x,
      x1 = right ? a.x + a.w : a.x,
      y1 = a.y + 26,
      x2 = right ? b.x : b.x + b.w,
      y2 = b.y + 26,
      mx = (x1 + x2) / 2;
    return {
      d: `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`,
      mx,
      my: (y1 + y2) / 2
    };
  };
  const links = spec.links || [];
  if (layer === 'labels') return /*#__PURE__*/React.createElement("svg", {
    width: spec.W,
    height: spec.H,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, links.map((k, i) => {
    const q = lk(k);
    return q && k.l ? /*#__PURE__*/React.createElement("g", {
      key: 'lkl' + i,
      opacity: !sel || related.has(k.a) && related.has(k.b) ? 1 : 0.25
    }, lbl(q.mx, q.my, k.l, k.c || 'rgb(209,213,219)')) : null;
  }), live.map((r, i) => {
    const e = spec.ebyid[r.e],
      q = ePt(e, B[r.p]);
    return lbl((q.ax + q.bx) / 2, (q.ay + q.by) / 2, r.l, FO_KIND[e.kind].c);
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: spec.W,
    height: spec.H,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, spec.couples.map((c, i) => /*#__PURE__*/React.createElement("g", {
    key: 'c' + i,
    opacity: on([c.a, c.b])
  }, /*#__PURE__*/React.createElement("line", _extends({
    x1: B[c.a].x + FO_CW,
    y1: mid(B[c.a]),
    x2: B[c.b].x,
    y2: mid(B[c.b])
  }, S)), c.joint && /*#__PURE__*/React.createElement("line", _extends({
    x1: ringX(c),
    y1: mid(B[c.a]),
    x2: ringX(c),
    y2: c.joint.y
  }, S)))), spec.descents.map((d, i) => {
    const c = spec.couples[+d.from.slice(1)];
    const sx = ringX(c),
      sy = c.joint ? c.joint.y + foJointH(c.joint) : mid(B[c.a]);
    const kids = d.to.map(id => B[id]),
      busY = Math.min(...kids.map(k => k.y)) - 36;
    const xs = [sx, ...kids.map(cx)];
    return /*#__PURE__*/React.createElement("path", _extends({
      key: 'd' + i,
      opacity: sel ? 0.18 : 1
    }, S, {
      d: `M${sx} ${sy} V${busY} M${Math.min(...xs)} ${busY} H${Math.max(...xs)} ` + kids.map(k => `M${cx(k)} ${busY} V${k.y}`).join(' ')
    }));
  }), !sel && spec.entities.map(e => {
    const p = B[e.link];
    if (!p) return null;
    const left = p.x > e.x;
    const x1 = left ? e.x + 260 : e.x,
      x2 = left ? p.x : p.x + FO_CW;
    return /*#__PURE__*/React.createElement("line", {
      key: e.id,
      x1: x1,
      y1: mid(p),
      x2: x2,
      y2: mid(p),
      stroke: FO_KIND[e.kind].c,
      strokeWidth: "1.6",
      strokeDasharray: "2 5",
      strokeLinecap: "round"
    });
  }), spec.couples.map((c, i) => ring(ringX(c), mid(B[c.a]), on([c.a, c.b]), 'r' + i)), links.map((k, i) => {
    const q = lk(k);
    return q ? /*#__PURE__*/React.createElement("path", {
      key: 'lk' + i,
      d: q.d,
      stroke: k.c || FO_C.line,
      strokeWidth: "1.8",
      fill: "none",
      strokeDasharray: k.dash ? '6 4' : null,
      opacity: !sel || related.has(k.a) && related.has(k.b) ? 1 : 0.18
    }) : null;
  }), live.map((r, i) => {
    const e = spec.ebyid[r.e],
      p = B[r.p],
      k = FO_KIND[e.kind],
      q = ePt(e, p);
    const my = (q.ay + q.by) / 2;
    const d = Math.abs(q.ay - q.by) < 80 ? `M${q.ax} ${q.ay} C${(q.ax + q.bx) / 2} ${q.ay} ${(q.ax + q.bx) / 2} ${q.by} ${q.bx} ${q.by}` : `M${q.ax} ${q.ay} C${q.ax} ${my} ${q.bx} ${my} ${q.bx} ${q.by}`;
    return /*#__PURE__*/React.createElement("path", {
      key: 'l' + i,
      d: d,
      stroke: k.c,
      strokeWidth: "2",
      fill: "none",
      strokeDasharray: "6 4"
    });
  }));
}
function FTObitTree({
  spec,
  initialSel,
  fixedHeight
}) {
  const root = React.useRef(null),
    wrap = React.useRef(null);
  const [height, setHeight] = React.useState(fixedHeight || 560);
  const [box, setBox] = React.useState({
    w: 1000,
    h: 600
  });
  const [zoom, setZoom] = React.useState(1);
  const [sel, setSel] = React.useState(initialSel || window.__ftOpp && window.__ftOpp.sel || null);
  React.useState(() => {
    window.__ftOpp = null;
    return 0;
  });
  const oppOn = !!window.moOppsFor && moOppsFor(spec).length > 0;
  React.useLayoutEffect(() => {
    if (fixedHeight) return;
    const f = () => {
      if (root.current) setHeight(Math.max(320, window.innerHeight - root.current.getBoundingClientRect().top));
    };
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  React.useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setBox({
      w: el.clientWidth,
      h: el.clientHeight
    });
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const {
    W,
    H
  } = spec;
  const fit = Math.max(0.55, Math.min(1, (box.w - 48) / W, (box.h - 96) / H));
  const scale = fit * zoom;
  const base = sc => [Math.max(24, (box.w - W * sc) / 2), Math.max(64, (box.h - H * sc) / 2)];
  const live = React.useRef({});
  live.current = {
    zoom,
    fit,
    base
  };
  const PN = useFTPan(wrap, live, setZoom);
  const b0 = base(scale);
  const ent = sel && spec.ebyid[sel],
    per = sel && spec.by[sel];
  const related = React.useMemo(() => {
    if (!sel) return new Set();
    const s = new Set([sel]);
    spec.rels.forEach(r => {
      if (r.e === sel) s.add(r.p);
      if (r.p === sel) s.add(r.e);
    });
    (spec.links || []).forEach(k => {
      if (k.a === sel) s.add(k.b);
      if (k.b === sel) s.add(k.a);
    });
    return s;
  }, [sel]);
  React.useEffect(() => {
    if (!sel) return;
    const boxes = [...related].map(id => spec.by[id] ? [spec.by[id].x, spec.by[id].y, FO_CW, foH(spec.by[id])] : spec.ebyid[id] ? [spec.ebyid[id].x, spec.ebyid[id].y, 260, foEH(spec.ebyid[id])] : null).filter(Boolean);
    PN.focus(boxes, scale, b0, box.w, box.h, 340);
  }, [sel]);
  const cap = {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: FO_C.mute
  };
  const txt = {
    fontFamily: 'Inter',
    fontSize: 12.5,
    lineHeight: 1.5,
    color: 'rgb(209,213,219)',
    margin: 0,
    textWrap: 'pretty'
  };
  const zb = {
    width: 34,
    height: 34,
    background: FO_C.card,
    border: 'none',
    color: 'rgb(229,231,235)',
    cursor: 'pointer',
    fontSize: 12
  };
  const ringX = c => (spec.by[c.a].x + FO_CW + spec.by[c.b].x) / 2;
  const Sw = ({
    k,
    t
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 2,
      border: '1px solid ' + FO_KIND[k].bd,
      background: FO_KIND[k].bg
    }
  }), t);
  const linkRow = (key, icon, c, bg, bd, title, meta, id) => /*#__PURE__*/React.createElement("button", {
    key: key,
    "data-no-hint": true,
    onClick: () => setSel(id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      borderRadius: 6,
      background: bg,
      border: '1px solid ' + bd,
      cursor: 'pointer',
      fontFamily: 'Inter',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + icon,
    style: {
      fontSize: 11,
      color: c,
      width: 12,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'rgb(229,231,235)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FO_C.mute
    }
  }, meta)));
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    style: {
      position: 'relative',
      height,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      background: 'rgb(13,19,32)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: wrap,
    onClick: () => setSel(null)
  }, PN.handlers, {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      cursor: PN.drag ? 'grabbing' : 'grab',
      backgroundPosition: PN.pan[0] + 'px ' + PN.pan[1] + 'px',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: b0[0] + PN.pan[0],
      top: b0[1] + PN.pan[1],
      width: W,
      height: H,
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
      transition: PN.anim ? 'left 320ms ease, top 320ms ease' : 'none'
    }
  }, spec.groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      position: 'absolute',
      left: g.x,
      top: g.y,
      width: g.w,
      height: g.h,
      borderRadius: 14,
      opacity: sel ? 0.4 : 1,
      border: '1px ' + (g.proposed ? 'dashed rgba(107,114,128,0.7)' : 'solid rgba(16,185,129,0.4)'),
      background: g.proposed ? 'rgba(255,255,255,0.015)' : 'rgba(16,185,129,0.03)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      position: 'absolute',
      top: -8,
      left: 14,
      padding: '0 6px',
      background: 'rgb(13,19,32)',
      color: g.proposed ? FO_C.mute : 'rgb(110,231,183)'
    }
  }, g.label))), spec.couples.filter(c => c.joint).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.a,
    style: {
      position: 'absolute',
      left: ringX(c) - FO_CW / 2,
      top: c.joint.y,
      width: FO_CW,
      height: foJointH(c.joint),
      boxSizing: 'border-box',
      padding: '12px 14px 6px',
      borderRadius: 10,
      background: FO_C.card,
      border: '1px solid ' + FO_C.bd,
      fontFamily: 'Inter',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: sel && !related.has(c.a) && !related.has(c.b) ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FO_C.mute
    }
  }, c.joint.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: FO_C.ink,
      fontVariantNumeric: 'tabular-nums'
    }
  }, c.joint.total)), /*#__PURE__*/React.createElement(FORows, {
    rows: c.joint.accts
  }))), /*#__PURE__*/React.createElement(FOEdges, {
    spec: spec,
    sel: sel,
    related: related
  }), spec.people.map(p => /*#__PURE__*/React.createElement(FOCard, {
    key: p.id,
    p: p,
    on: sel === p.id,
    dim: sel && !related.has(p.id),
    onSel: setSel
  })), spec.entities.map(e => /*#__PURE__*/React.createElement(FOEntity, {
    key: e.id,
    e: e,
    on: sel === e.id,
    dim: sel && !related.has(e.id),
    onSel: setSel
  })), /*#__PURE__*/React.createElement(FOEdges, {
    spec: spec,
    sel: sel,
    related: related,
    layer: "labels"
  }), oppOn && /*#__PURE__*/React.createElement(MOBadges, {
    spec: spec,
    sel: sel,
    onSel: setSel
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 16,
      right: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      fontFamily: 'Inter',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: FO_C.ink
    }
  }, spec.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: FO_C.mute
    }
  }, spec.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 3,
      border: '1px solid ' + FO_C.bd,
      background: FO_C.card
    }
  }), "In our data"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 3,
      border: '1px dashed rgb(107,114,128)'
    }
  }), "Not in our data"), /*#__PURE__*/React.createElement(Sw, {
    k: "trust",
    t: "Trust"
  }), /*#__PURE__*/React.createElement(Sw, {
    k: "biz",
    t: "Business"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      display: 'flex',
      border: '1px solid ' + FO_C.bd,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Zoom in",
    onClick: () => setZoom(z => Math.min(2, z + 0.15)),
    style: {
      ...zb,
      borderRight: '1px solid ' + FO_C.bd
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  })), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Zoom out",
    onClick: () => setZoom(z => Math.max(0.5, z - 0.15)),
    style: {
      ...zb,
      borderRight: '1px solid ' + FO_C.bd
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 11,
      height: 2,
      margin: '0 auto',
      background: 'currentColor',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Fit to screen",
    title: "Fit to screen",
    onClick: () => {
      setZoom(1);
      PN.setPan([0, 0], true);
    },
    style: zb
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-expand"
  }))), (ent || per) && /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 56,
      right: 16,
      bottom: 16,
      width: 310,
      overflowY: 'auto',
      boxSizing: 'border-box',
      padding: '16px 18px',
      borderRadius: 12,
      background: 'rgb(17,24,39)',
      border: '1px solid ' + FO_C.bd,
      boxShadow: '0 24px 56px -16px rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 600,
      color: FO_C.ink
    }
  }, (ent || per).name, per && per.deceased ? ' \u2020' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: FO_C.mute
    }
  }, ent ? FO_KIND[ent.kind].label + ' \u00b7 ' + ent.type : per.role + (per.age ? ' \u00b7 Age ' + per.age : ''))), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Close",
    onClick: () => setSel(null),
    style: {
      background: 'transparent',
      border: 'none',
      color: FO_C.mute,
      cursor: 'pointer',
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), oppOn && /*#__PURE__*/React.createElement(MOPanel, {
    spec: spec,
    id: sel
  }), window.FTSources && /*#__PURE__*/React.createElement(FTSources, {
    items: (ent || per).src
  }), ent && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, FO_KIND[ent.kind].cap), spec.rels.filter(r => r.e === ent.id).map(r => {
    const p = spec.by[r.p];
    return linkRow(r.p, 'fa-user', 'rgb(229,231,235)', 'rgba(255,255,255,0.04)', 'rgba(75,85,99,0.6)', p.name + (p.deceased ? ' \u2020' : ''), r.l + (p.crm ? ' \u00b7 our client' : ''), p.id);
  })), per && per.accts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Accounts"), per.accts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.6)',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + a.i,
    style: {
      width: 12,
      fontSize: 11,
      color: FO_C.ok,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'rgb(229,231,235)'
    }
  }, a.l), a.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: FO_C.mute
    }
  }, a.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(229,231,235)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.m)))), per && per.roles && per.roles.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Trusts & businesses"), per.roles.map(r => {
    const k = FO_KIND[r.kind];
    return linkRow(r.e, k.icon, k.c, k.bg, k.bd, spec.ebyid[r.e].name, r.t, r.e);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Notes"), (ent || per).facts.map(f => /*#__PURE__*/React.createElement("p", {
    key: f,
    style: txt
  }, f)))));
}
Object.assign(window, {
  FTObitTree,
  foYoungSpec,
  foH,
  foEH,
  FO_KIND
});
;
/* ---- advisor/ManagerOpps.jsx ---- */
/* Partner-manager opportunities. BlackRock, PIMCO and Blackstone run their engines on the
   advisor's Field data (under the firm's data-sharing agreement). What comes back is shown
   need first: the gap in the family, one best-fit product, other managers' options collapsed.
   Used by the family-tree lens, the advisor Growth page and the AI feed. Illustrative. */

const MO_MGR = {
  blackrock: {
    name: 'BlackRock',
    c: 'rgb(229,231,235)',
    bg: 'rgba(255,255,255,0.07)',
    bd: 'rgba(229,231,235,0.35)',
    engine: 'BlackRock portfolio engine'
  },
  pimco: {
    name: 'PIMCO',
    c: 'rgb(147,197,253)',
    bg: 'rgba(37,99,235,0.16)',
    bd: 'rgba(147,197,253,0.4)',
    engine: 'PIMCO fixed income engine'
  },
  blackstone: {
    name: 'Blackstone',
    c: 'rgb(252,211,77)',
    bg: 'rgba(202,138,4,0.14)',
    bd: 'rgba(252,211,77,0.4)',
    engine: 'Blackstone private wealth engine'
  },
  helm: {
    name: 'Helm',
    c: 'rgb(110,231,183)',
    bg: 'rgba(5,122,85,0.16)',
    bd: 'rgba(110,231,183,0.4)',
    engine: 'Helm'
  }
};
const MO_NEED = {
  cash: {
    label: 'Idle cash',
    icon: 'sack-dollar',
    g: 'portfolio'
  },
  conc: {
    label: 'Concentration',
    icon: 'chart-pie',
    g: 'portfolio'
  },
  alts: {
    label: 'Income & alternatives',
    icon: 'layer-group',
    g: 'portfolio'
  },
  inherit: {
    label: 'Inheritance',
    icon: 'hand-holding-dollar',
    g: 'estate'
  },
  biz: {
    label: 'Business owner',
    icon: 'briefcase',
    g: 'biz'
  },
  nextgen: {
    label: 'Next generation',
    icon: 'seedling',
    g: 'nextgen'
  },
  edu: {
    label: 'Education',
    icon: 'graduation-cap',
    g: 'nextgen'
  }
};
const MO_GROUPS = [{
  id: 'nextgen',
  label: 'Next generation',
  icon: 'seedling',
  sub: 'heirs and grandchildren with no advisor'
}, {
  id: 'estate',
  label: 'Trusts & estates',
  icon: 'shield',
  sub: 'money about to change hands'
}, {
  id: 'biz',
  label: 'Business owners',
  icon: 'briefcase',
  sub: 'companies our clients own'
}, {
  id: 'portfolio',
  label: 'Portfolio fit',
  icon: 'sliders',
  sub: 'cash, concentration, alternatives'
}];
const MO_ORANGE = 'rgb(52,211,153)',
  MO_INK = 'rgb(249,250,251)',
  MO_MUTE = 'rgb(163,163,163)',
  MO_BODY = 'rgb(209,213,219)',
  MO_LINE = 'rgba(75,85,99,0.6)';
const MO_ASOF = 'Nov 17';
const MO_MONEY = {
  new: 'new money',
  keep: 'heir assets',
  move: 'repositioned'
};
const moSum = (os, k) => os.filter(o => !k || o.money === k).reduce((t, o) => t + o.potential, 0);
function moM(v) {
  const a = Math.abs(v);
  if (a >= 1e9) return '$' + (a / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return '$' + (a / 1e6).toFixed(a >= 1e7 ? 1 : 2).replace(/\.0+$/, '') + 'M';
  if (a >= 1e3) return '$' + Math.round(a / 1e3) + 'K';
  return '$' + Math.round(a);
}
function moFee(client) {
  const c = (window.dmRows ? dmRows('client_book') : []).find(r => r.client === client);
  const r = c && c.avg_fee_rate ? +c.avg_fee_rate : 0.85;
  return r > 0.05 ? r / 100 : r; /* stored as a percent */
}

/* ---- households from positions (same basis as the AI feed) ---- */
let __moHH = null;
function moHouseholds() {
  if (__moHH) return __moHH;
  const hh = {};
  const base = window.dmBase ? dmBase() : {
    positions: []
  };
  base.positions.forEach(p => {
    if (!p.household || window.DM_UNASSIGNED && p.household === DM_UNASSIGNED) return;
    const h = hh[p.household] || (hh[p.household] = {
      household: p.household,
      aum: 0,
      cash: 0,
      alts: 0,
      stocks: {},
      clients: {}
    });
    h.aum += p.market_value;
    if (p.asset_class === 'Cash' || p.asset_class === 'Cash Debit') h.cash += p.market_value;
    if (/Alternative/i.test(p.asset_class || '')) h.alts += p.market_value;
    if (p.security_type === 'CommonStock') h.stocks[p.ticker] = (h.stocks[p.ticker] || 0) + p.market_value;
    h.clients[p.client] = (h.clients[p.client] || 0) + p.market_value;
  });
  __moHH = Object.values(hh).map(h => {
    h.client = Object.keys(h.clients).sort((a, b) => h.clients[b] - h.clients[a])[0];
    h.cashPct = h.aum ? h.cash / h.aum : 0;
    const top = Object.keys(h.stocks).sort((a, b) => h.stocks[b] - h.stocks[a])[0];
    h.top = top || null;
    h.topV = top ? h.stocks[top] : 0;
    h.topPct = h.aum ? h.topV / h.aum : 0;
    return h;
  });
  return __moHH;
}

/* ---- the Young family: what the engines found, keyed to the family-tree nodes ---- */
let __moYoung = null;
function moYoung() {
  if (__moYoung) return __moYoung;
  const h = moHouseholds().find(x => x.household === 'Young Household') || {
    aum: 54.2e6,
    cash: 4.4e6,
    cashPct: 0.081,
    top: 'VZ',
    topV: 8.16e6,
    topPct: 0.15
  };
  const fam = 'Young family',
    client = 'David Young',
    fee = moFee(client);
  const cashMove = Math.round(h.cash * 0.68 / 1e5) * 1e5;
  const concMove = Math.round(h.topV * 0.6 / 1e5) * 1e5;
  const heir = Math.round(h.aum / 2 / 1e5) * 1e5;
  __moYoung = [{
    id: 'yg-inherit',
    nodes: ['ryft'],
    client,
    family: fam,
    who: 'Robert Young Family Trust → David',
    need: 'inherit',
    title: 'About $7M coming to David from his parents’ trust',
    sub: 'Margaret died in March. Michael is settling the trust; David gets half.',
    why: ['The Robert Young Family Trust splits 50/50 between David and Michael (Margaret’s obituary, Apr 2026 review note).', 'It is held elsewhere, so the money arrives as new, taxable cash. Everything David has with us today is in IRAs.', 'Assets get a stepped-up basis at Margaret’s death, so it can be invested fresh without a tax bill.'],
    potential: 7e6,
    money: 'new',
    newMoney: true,
    feeYr: 7e6 * fee,
    benefit: 'Tax-exempt income on the new money',
    best: {
      m: 'pimco',
      product: 'PIMCO municipal bond ladder (SMA)',
      fit: 94,
      amount: '$4M of the $7M',
      detail: 'David is in the top bracket and drawing income. A 1–10 year muni ladder gives tax-exempt income and dates he can plan around.'
    },
    others: [{
      m: 'blackrock',
      product: 'BlackRock direct indexing (tax-managed equity)',
      fit: 88,
      why: 'For the equity part: harvests losses to offset future gains.'
    }, {
      m: 'blackstone',
      product: 'Blackstone Private Credit Fund (BCRED)',
      fit: 81,
      why: 'Higher income, but monthly liquidity limits. Accredited only.'
    }]
  }, {
    id: 'yg-biz',
    nodes: ['biz'],
    client,
    family: fam,
    who: 'Young Precision Tooling',
    need: 'biz',
    title: 'Young Precision Tooling has no retirement plan on file',
    sub: 'David owns 60% and is President',
    why: ['No 401(k) shows up in filings or our data for the company.', 'A plan cuts David’s and Michael’s taxes and helps keep staff.', 'No buy-sell agreement is on file either; raise both together.'],
    potential: 2.4e6,
    money: 'new',
    newMoney: true,
    feeYr: 2.4e6 * 0.005,
    benefit: 'Tax-deferred savings for the owners and staff',
    best: {
      m: 'blackrock',
      product: 'BlackRock LifePath Index target-date funds (401(k))',
      fit: 91,
      amount: '~$2.4M in plan assets in 3 years',
      detail: 'Low-cost default investment for a new plan. The plan sponsor is the company, so this is a new client relationship.'
    },
    others: [{
      m: 'pimco',
      product: 'PIMCO stable value option',
      fit: 76,
      why: 'A capital-preservation choice inside the plan.'
    }]
  }, {
    id: 'yg-heirs',
    nodes: ['emily', 'ryan'],
    client,
    family: fam,
    who: 'Emily Carter & Ryan Young',
    need: 'nextgen',
    title: 'Emily and Ryan are heirs with no advisor',
    sub: 'Remainder beneficiaries of the Young Revocable Trust',
    why: ['They split the Young Revocable Trust and would inherit about ' + moM(h.aum) + ' in IRAs, which must be emptied within 10 years.', 'Neither is in our data. Most heirs leave their parents’ advisor; meeting them now is how you keep the relationship.', 'Emily lives in Wayne, PA; Ryan in Boston, MA.'],
    potential: heir * 2,
    money: 'keep',
    newMoney: false,
    feeYr: heir * 2 * fee,
    benefit: 'A plan for the inherited IRAs before they land',
    best: {
      m: 'blackrock',
      product: 'BlackRock model portfolios (their own accounts)',
      fit: 85,
      amount: 'Start with their savings today',
      detail: 'Low-minimum managed accounts so the relationship starts now; the inheritance follows later.'
    },
    others: [{
      m: 'pimco',
      product: 'PIMCO income model portfolio',
      fit: 74,
      why: 'If either wants income over growth.'
    }]
  }];
  return __moYoung;
}

/* ---- book-wide: the same engines across every household ---- */
let __moBook = null;
function moBook() {
  if (__moBook) return __moBook;
  const list = moHouseholds().filter(h => h.household !== 'Young Household' && h.aum >= 1e6);
  const out = [];
  list.filter(h => h.cashPct > 0.08).sort((a, b) => b.cash - a.cash).slice(0, 4).forEach(h => {
    const mv = Math.round(h.cash * 0.65 / 5e4) * 5e4;
    out.push({
      id: 'bk-cash-' + h.household,
      nodes: [],
      client: h.client,
      family: h.household.replace(/ Household$/, ' family'),
      who: h.client,
      need: 'cash',
      title: moM(h.cash) + ' sitting in cash',
      sub: Math.round(h.cashPct * 100) + '% of ' + moM(h.aum),
      why: [Math.round(h.cashPct * 100) + '% of the household is cash.', 'No large withdrawals scheduled.'],
      potential: mv,
      money: 'move',
      newMoney: false,
      benefit: '+' + moM(mv * 0.03) + ' a year vs. the sweep',
      best: {
        m: 'pimco',
        product: 'PIMCO Enhanced Short Maturity Active ETF (MINT)',
        fit: 90,
        amount: moM(mv),
        detail: 'Leaves a year of spending in cash.'
      },
      others: [{
        m: 'blackrock',
        product: 'iShares Short Maturity Bond ETF (NEAR)',
        fit: 88,
        why: 'Similar yield and risk.'
      }]
    });
  });
  list.filter(h => h.topPct > 0.12 && h.top).sort((a, b) => b.topV - a.topV).slice(0, 3).forEach(h => {
    const mv = Math.round(h.topV * 0.5 / 5e4) * 5e4;
    out.push({
      id: 'bk-conc-' + h.household,
      nodes: [],
      client: h.client,
      family: h.household.replace(/ Household$/, ' family'),
      who: h.client,
      need: 'conc',
      title: h.top + ' is ' + Math.round(h.topPct * 100) + '% of the household',
      sub: moM(h.topV) + ' in one stock',
      why: ['Above the firm’s 10% single-stock limit.', 'Check where it’s held: taxable lots need a tax-aware exit.'],
      potential: mv,
      money: 'move',
      newMoney: false,
      benefit: 'Less single-stock risk, managed tax cost',
      best: {
        m: 'blackrock',
        product: 'BlackRock direct indexing (tax-managed transition)',
        fit: 87,
        amount: moM(mv),
        detail: 'Sells down over time, offsetting gains with harvested losses.'
      },
      others: []
    });
  });
  list.filter(h => h.alts === 0 && h.aum >= 5e6).sort((a, b) => b.aum - a.aum).slice(0, 3).forEach(h => {
    const mv = Math.round(h.aum * 0.07 / 5e4) * 5e4;
    out.push({
      id: 'bk-alts-' + h.household,
      nodes: [],
      client: h.client,
      family: h.household.replace(/ Household$/, ' family'),
      who: h.client,
      need: 'alts',
      title: 'No alternatives in ' + moM(h.aum),
      sub: 'All public markets',
      why: ['Risk profile allows alternatives.', 'Accredited: eligible for private credit.'],
      potential: mv,
      money: 'move',
      newMoney: false,
      benefit: 'Income that moves less with stocks',
      best: {
        m: 'blackstone',
        product: 'Blackstone Private Credit Fund (BCRED)',
        fit: 84,
        amount: moM(mv) + ' (7%)',
        detail: 'Monthly income; quarterly liquidity, capped.'
      },
      others: [{
        m: 'helm',
        product: 'Helm Private Markets Fund X',
        fit: 83,
        why: 'Multi-asset private markets, $100K minimum.'
      }]
    });
  });
  __moBook = out;
  return out;
}
function moAll() {
  return moYoung().concat(moBook());
}
function moOppsFor(spec) {
  return spec && /Young/.test(spec.title || '') ? moYoung() : [];
}
function moByNode(spec, id) {
  return moOppsFor(spec).filter(o => o.nodes.indexOf(id) >= 0);
}

/* ---- small pieces ---- */
function MOMgr({
  m,
  small
}) {
  const M = MO_MGR[m];
  if (!M) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: small ? 18 : 20,
      padding: '0 7px',
      borderRadius: 5,
      background: M.bg,
      border: '1px solid ' + M.bd,
      color: M.c,
      fontFamily: 'Inter',
      fontSize: small ? 10 : 10.5,
      fontWeight: 700,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, M.name);
}
function MONeed({
  need
}) {
  const N = MO_NEED[need];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: '0 8px',
      borderRadius: 6,
      background: 'rgba(16,185,129,0.12)',
      border: '1px solid rgba(52,211,153,0.4)',
      color: 'rgb(110,231,183)',
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + N.icon,
    style: {
      fontSize: 9.5
    }
  }), N.label);
}
function MODisclosure() {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'Inter',
      fontSize: 10.5,
      lineHeight: 1.5,
      color: 'rgb(115,115,115)'
    }
  }, "Found by partner managers\u2019 engines on your Field data under Alpine\u2019s data-sharing agreement. Ranked on the client\u2019s need first; compare the options and document best interest before recommending. Illustrative.");
}
const moBtn = primary => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  height: 30,
  padding: '0 12px',
  borderRadius: 8,
  cursor: 'pointer',
  fontFamily: 'Inter',
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  background: primary ? 'rgb(5,122,85)' : 'rgba(255,255,255,0.04)',
  border: '1px solid ' + (primary ? 'rgb(5,122,85)' : MO_LINE),
  color: primary ? '#fff' : 'rgb(229,231,235)'
});
function moAsk(o) {
  window.dispatchEvent(new CustomEvent('fieldai:open', {
    detail: {
      prompt: 'Draft a proposal for ' + o.who + ': ' + o.title.replace(/\.$/, '') + '. Lead with the need, then ' + MO_MGR[o.best.m].name + ' ' + o.best.product + ', and compare the other options.'
    }
  }));
}
function moOpenTree(o) {
  window.__ftOpp = {
    on: true,
    sel: o.nodes[0] || null
  };
  window.dispatchEvent(new CustomEvent('client:open', {
    detail: {
      client: o.client
    }
  }));
  if (o.nodes.length) setTimeout(() => {
    if (window.cdTreeSet) cdTreeSet(true);
  }, 350);
}

/* The detail of one opportunity: need, why, best fit, other options, actions */
function MODetail({
  o,
  compact,
  onTree
}) {
  const [more, setMore] = React.useState(false);
  const B = o.best,
    cap = {
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: MO_MUTE
    };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MONeed, {
    need: o.need
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: MO_INK,
      fontWeight: 600
    }
  }, '~' + moM(o.potential)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10.5,
      color: MO_MUTE
    }
  }, MO_MONEY[o.money]))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: MO_INK,
      lineHeight: 1.35
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MO_MUTE
    }
  }, o.sub)), !compact && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, o.why.map(w => /*#__PURE__*/React.createElement("li", {
    key: w,
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: MO_BODY
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '12px 12px 10px',
      borderRadius: 10,
      background: 'rgba(5,122,85,0.08)',
      border: '1px solid rgba(16,185,129,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, "Best fit"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'rgb(110,231,183)'
    }
  }, 'Fit ' + B.fit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MOMgr, {
    m: B.m
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: MO_INK,
      lineHeight: 1.35
    }
  }, B.product)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: MO_BODY,
      lineHeight: 1.5
    }
  }, B.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      paddingTop: 8,
      borderTop: '1px solid rgba(16,185,129,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: MO_MUTE
    }
  }, "Amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: MO_INK,
      fontWeight: 500
    }
  }, B.amount)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: MO_MUTE
    }
  }, o.money === 'new' ? 'New fees a year' : o.money === 'keep' ? 'Fees kept a year' : 'For the client'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: MO_INK,
      fontWeight: 500
    }
  }, o.money !== 'move' ? '~' + moM(o.feeYr) : o.benefit))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: MO_MUTE
    }
  }, 'From the ' + MO_MGR[B.m].engine + ' · ' + MO_ASOF)), o.others.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      setMore(v => !v);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12,
      color: MO_BODY
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-chevron-' + (more ? 'down' : 'right'),
    style: {
      fontSize: 9,
      width: 10
    }
  }), o.others.length + ' other option' + (o.others.length === 1 ? '' : 's') + ' · ' + o.others.map(x => MO_MGR[x.m].name).join(', ')), more && o.others.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.product,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '9px 10px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid ' + MO_LINE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MOMgr, {
    m: x.m,
    small: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'rgb(229,231,235)',
      fontWeight: 500,
      flex: 1,
      minWidth: 0
    }
  }, x.product), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: MO_MUTE
    }
  }, 'Fit ' + x.fit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: MO_MUTE,
      lineHeight: 1.45
    }
  }, x.why)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      moAsk(o);
    },
    style: moBtn(true)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-magic-sparkles",
    style: {
      fontSize: 11
    }
  }), "Draft proposal"), onTree && o.nodes.length > 0 && /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      onTree(o);
    },
    style: moBtn(false)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-sitemap",
    style: {
      fontSize: 11
    }
  }), "See on family tree")));
}

/* ---- family-tree lens ---- */
function MOToggle({
  spec,
  on,
  set
}) {
  const n = moOppsFor(spec).length;
  if (!n) return null;
  const tot = moSum(moOppsFor(spec), 'new');
  return /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: e => {
      e.stopPropagation();
      set(!on);
    },
    "aria-pressed": on,
    title: "Show what partner managers' engines found in this family",
    style: {
      pointerEvents: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 28,
      padding: '0 10px',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      background: on ? 'rgba(16,185,129,0.14)' : 'rgb(31,41,55)',
      border: '1px solid ' + (on ? 'rgba(52,211,153,0.55)' : 'rgb(75,85,99)'),
      color: on ? 'rgb(110,231,183)' : 'rgb(229,231,235)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 14,
      borderRadius: 9999,
      background: on ? MO_ORANGE : 'rgb(75,85,99)',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 14 : 2,
      width: 10,
      height: 10,
      borderRadius: 9999,
      background: '#fff',
      transition: 'left 120ms'
    }
  })), "Opportunities", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: on ? 'rgb(110,231,183)' : MO_MUTE
    }
  }, n + ' · ~' + moM(tot) + ' new'));
}
function MOBadges({
  spec,
  sel,
  onSel
}) {
  const ids = [...new Set(moOppsFor(spec).flatMap(o => o.nodes))];
  return /*#__PURE__*/React.createElement(React.Fragment, null, ids.map(id => {
    const p = spec.by[id],
      e = spec.ebyid[id];
    if (!p && !e) return null;
    const n = p || e,
      w = p ? FO_CW : 260,
      on = sel === id;
    return /*#__PURE__*/React.createElement("span", {
      key: id,
      style: {
        position: 'absolute',
        left: n.x,
        top: n.y - 10,
        width: w,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 12,
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      "data-no-hint": true,
      onClick: ev => {
        ev.stopPropagation();
        onSel(id);
      },
      title: "Opportunity found by a partner manager's engine",
      style: {
        pointerEvents: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: 20,
        padding: '0 8px',
        borderRadius: 6,
        cursor: 'pointer',
        fontFamily: 'Inter',
        fontSize: 10.5,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        background: on ? 'rgb(6,78,59)' : 'rgb(6,46,36)',
        border: '1px solid ' + (on ? 'rgb(52,211,153)' : 'rgba(52,211,153,0.55)'),
        color: 'rgb(110,231,183)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-trend-up",
      style: {
        fontSize: 9
      }
    }), "Opportunity"));
  }));
}
const moAside = {
  position: 'absolute',
  top: 56,
  right: 16,
  bottom: 16,
  width: 330,
  overflowY: 'auto',
  boxSizing: 'border-box',
  padding: '16px 18px',
  borderRadius: 12,
  background: 'rgb(17,24,39)',
  border: '1px solid rgb(75,85,99)',
  boxShadow: '0 24px 56px -16px rgba(0,0,0,0.8)',
  display: 'flex',
  flexDirection: 'column',
  gap: 14
};
function MOSummary({
  spec,
  onSel
}) {
  const opps = moOppsFor(spec);
  const nw = moSum(opps, 'new'),
    kp = moSum(opps, 'keep');
  const mgrs = [...new Set(opps.map(o => o.best.m))];
  return /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: moAside
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: MO_INK
    }
  }, "Opportunities in this family"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MO_MUTE
    }
  }, opps.length + ' found by ' + mgrs.map(m => MO_MGR[m].name).join(', ') + ' · ' + MO_ASOF)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      border: '1px solid ' + MO_LINE,
      borderRadius: 10,
      overflow: 'hidden',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: MO_MUTE,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "New money"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: MO_INK,
      marginTop: 2
    }
  }, '~' + moM(nw))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderLeft: '1px solid ' + MO_LINE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: MO_MUTE,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Keep at transfer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: MO_INK,
      marginTop: 2
    }
  }, '~' + moM(kp)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, opps.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    "data-no-hint": true,
    onClick: () => onSel(o.nodes[0]),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      padding: '10px 11px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid ' + MO_LINE,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MONeed, {
    need: o.need
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      fontWeight: 600,
      color: MO_INK
    }
  }, '~' + moM(o.potential), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: MO_MUTE
    }
  }, ' ' + MO_MONEY[o.money]))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'rgb(229,231,235)',
      lineHeight: 1.4
    }
  }, o.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: MO_MUTE,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(MOMgr, {
    m: o.best.m,
    small: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, o.best.product))))), /*#__PURE__*/React.createElement(MODisclosure, null));
}
function MOPanel({
  spec,
  id
}) {
  const mine = moByNode(spec, id);
  if (!mine.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingBottom: 14,
      borderBottom: '1px solid ' + MO_LINE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgb(110,231,183)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-trend-up",
    style: {
      fontSize: 9
    }
  }), mine.length === 1 ? 'Opportunity' : mine.length + ' opportunities'), mine.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      paddingTop: i ? 14 : 0,
      borderTop: i ? '1px dashed ' + MO_LINE : 'none'
    }
  }, /*#__PURE__*/React.createElement(MODetail, {
    o: o
  }))), /*#__PURE__*/React.createElement(MODisclosure, null));
}

/* ---- advisor Growth page ---- */
function AdvGrowthPage() {
  const all = React.useMemo(moAll, []);
  const [mgr, setMgr] = React.useState('all');
  const [grp, setGrp] = React.useState('all');
  const [open, setOpen] = React.useState(null);
  const rows = all.filter(o => (mgr === 'all' || o.best.m === mgr) && (grp === 'all' || MO_NEED[o.need].g === grp)).sort((a, b) => b.potential - a.potential);
  const mgrs = ['blackrock', 'pimco', 'blackstone'];
  const cnt = m => all.filter(o => o.best.m === m).length;
  const fams = new Set(all.map(o => o.family)).size;
  const cell = {
    padding: '12px 14px',
    borderBottom: '1px solid rgba(75,85,99,0.35)',
    fontFamily: 'Inter',
    fontSize: 12.5,
    color: 'rgb(229,231,235)',
    verticalAlign: 'middle'
  };
  const th = {
    padding: '10px 14px',
    borderBottom: '1px solid ' + MO_LINE,
    fontFamily: 'Inter',
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: MO_MUTE,
    textAlign: 'left',
    whiteSpace: 'nowrap'
  };
  const pill = on => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 30,
    padding: '0 12px',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    background: on ? 'rgba(5,122,85,0.18)' : 'rgba(255,255,255,0.03)',
    border: '1px solid ' + (on ? 'rgba(16,185,129,0.55)' : MO_LINE),
    color: on ? 'rgb(110,231,183)' : 'rgb(209,213,219)'
  });
  const o = open && all.find(x => x.id === open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '24px 24px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: MO_BODY
    }
  }, all.length + ' opportunities in ' + fams + ' families, found by BlackRock, PIMCO and Blackstone’s engines on your book · ~' + moM(moSum(all, 'new')) + ' new money, ~' + moM(moSum(all, 'keep')) + ' heir assets'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: MO_MUTE
    }
  }, 'Updated ' + MO_ASOF)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 12
    }
  }, MO_GROUPS.map(G => {
    const its = all.filter(x => MO_NEED[x.need].g === G.id),
      on = grp === G.id;
    return /*#__PURE__*/React.createElement("button", {
      key: G.id,
      onClick: () => setGrp(on ? 'all' : G.id),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: '16px 18px',
        borderRadius: 12,
        fontFamily: 'Inter',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        background: on ? 'rgba(5,122,85,0.1)' : 'rgba(255,255,255,0.03)',
        border: '1px solid ' + (on ? 'rgba(16,185,129,0.55)' : 'rgba(75,85,99,0.55)')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        fontWeight: 600,
        color: MO_INK
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 6,
        background: 'rgba(16,185,129,0.14)',
        color: 'rgb(110,231,183)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'fa-solid fa-' + G.icon,
      style: {
        fontSize: 11
      }
    })), G.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        fontWeight: 600,
        color: MO_INK,
        fontVariantNumeric: 'tabular-nums'
      }
    }, its.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: MO_MUTE
      }
    }, G.sub + ' · ~' + moM(moSum(its))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      border: '1px solid rgba(75,85,99,0.55)',
      background: 'rgba(255,255,255,0.02)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 16px',
      flexWrap: 'wrap',
      borderBottom: '1px solid ' + MO_LINE
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 15,
      fontWeight: 600,
      color: MO_INK,
      marginRight: 8
    }
  }, "Opportunities", /*#__PURE__*/React.createElement("span", {
    style: {
      color: MO_MUTE,
      fontWeight: 500
    }
  }, ' · ' + rows.length)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: MO_MUTE,
      marginLeft: 'auto',
      marginRight: 4
    }
  }, "Best fit from"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMgr('all'),
    style: pill(mgr === 'all')
  }, "All"), mgrs.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setMgr(mgr === m ? 'all' : m),
    style: pill(mgr === m)
  }, MO_MGR[m].name, /*#__PURE__*/React.createElement("span", {
    style: {
      color: MO_MUTE
    }
  }, cnt(m))))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", null), !o && /*#__PURE__*/React.createElement("col", {
    style: {
      width: 170
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: o ? '34%' : '32%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 120
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 136
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Opportunity"), !o && /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Need"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Best fit"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "Potential"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    onClick: () => setOpen(r.id),
    style: {
      cursor: 'pointer',
      background: open === r.id ? 'rgba(5,122,85,0.08)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: MO_INK,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: MO_MUTE,
      marginTop: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.family + ' · ' + r.who)), !o && /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(MONeed, {
    need: r.need
  })), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(MOMgr, {
    m: r.best.m,
    small: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.best.product)), r.others.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: MO_MUTE,
      marginTop: 3
    }
  }, '+' + r.others.length + ' other option' + (r.others.length === 1 ? '' : 's'))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, '~' + moM(r.potential)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: MO_MUTE,
      marginTop: 2
    }
  }, MO_MONEY[r.money])), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'right'
    }
  }, r.nodes.length > 0 ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      moOpenTree(r);
    },
    style: {
      ...moBtn(false),
      height: 28,
      padding: '0 10px',
      fontWeight: 500
    },
    title: "Open the family tree with this highlighted"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-sitemap",
    style: {
      fontSize: 10
    }
  }), "Family tree") : /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      moOpenTree(r);
    },
    style: {
      ...moBtn(false),
      height: 28,
      padding: '0 10px',
      fontWeight: 500
    }
  }, "Open client")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(MODisclosure, null)))), o && /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 380,
      flexShrink: 0,
      borderLeft: '1px solid ' + MO_LINE,
      background: 'rgb(17,24,39)',
      padding: '18px 20px',
      position: 'sticky',
      top: 56,
      alignSelf: 'flex-start',
      maxHeight: 'calc(100vh - 56px)',
      overflowY: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      fontFamily: 'Inter'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: MO_INK
    }
  }, o.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: MO_MUTE
    }
  }, o.family)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: () => setOpen(null),
    style: {
      background: 'none',
      border: 0,
      color: MO_MUTE,
      cursor: 'pointer',
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), /*#__PURE__*/React.createElement(MODetail, {
    o: o,
    onTree: moOpenTree
  }), /*#__PURE__*/React.createElement(MODisclosure, null)));
}

/* ---- AI feed: one card for the Young family, one for the book ---- */
function moFeedItems() {
  const y = moYoung(),
    all = moAll();
  const yNew = moSum(y, 'new'),
    yKeep = moSum(y, 'keep'),
    aNew = moSum(all, 'new');
  const fams = new Set(all.map(o => o.family)).size;
  return [{
    kind: 'answer',
    id: 'mo-young',
    when: 'Today',
    who: 'Partner engines · Young family',
    eyebrow: 'BlackRock · PIMCO · Blackstone',
    initials: 'YF',
    title: y.length + ' opportunities across the Young family, ~' + moM(yNew) + ' of it new money',
    body: 'David’s ~$7M share of his parents’ trust, a retirement plan for the family company, and Emily and Ryan, heirs to ~' + moM(yKeep) + ' with no advisor. Each is marked on the family tree.',
    stats: [{
      k: 'Opportunities',
      v: String(y.length)
    }, {
      k: 'New money',
      v: '~' + moM(yNew)
    }, {
      k: 'Heir assets',
      v: '~' + moM(yKeep)
    }],
    meta: [],
    action: 'See them on the family tree',
    open: () => moOpenTree({
      client: 'David Young',
      nodes: [null]
    })
  }].concat((() => {
    let d = null;
    try {
      d = window.ogBuild ? window.ogBuild() : null;
    } catch (e) {}
    if (!d || !d.ops || !d.ops.length) return [];
    const T = window.OG_TYPES || {};
    const tot = d.ops.reduce((t, o) => t + (o.est || 0), 0);
    return [{
      kind: 'answer',
      id: 'mo-book',
      when: 'Today',
      who: 'Growth \u00b7 your book',
      eyebrow: 'Relationships you already have',
      initials: 'GR',
      title: d.ops.length + ' opportunities in your clients\u2019 families, about ' + moM(tot),
      body: 'Heirs with no advisor, client-owned businesses, clients who refer and upcoming life events.',
      stats: Object.keys(T).slice(0, 3).map(k => ({
        k: T[k].label,
        v: String(d.ops.filter(o => o.type === k).length)
      })),
      meta: [],
      action: 'Open Growth',
      open: () => window.dispatchEvent(new CustomEvent('nav:set', {
        detail: {
          screen: 'growth'
        }
      }))
    }];
  })());
}
Object.assign(window, {
  MO_MGR,
  MO_NEED,
  moAll,
  moYoung,
  moBook,
  moOppsFor,
  moFeedItems,
  MOToggle,
  MOBadges,
  MOSummary,
  MOPanel,
  MODetail,
  AdvGrowthPage
});
;
/* ---- advisor/ClientDetail.jsx ---- */
/* Client Detail — David Young. General sidebar column plus six tiles:
   Portfolio Value, Asset Allocation, Accounts / Performance, Unrealized,
   Mandate & Billing. Follows Field Shadcn tile patterns. */

const CD_TILE = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgb(75,85,99)',
  borderRadius: 14,
  color: 'rgb(249,250,251)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100%',
  minHeight: 320
};
const CD_HEAD = {
  display: 'flex',
  alignItems: 'center',
  padding: '14px 16px 6px'
};
const CD_TITLE = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: '-0.01em'
};
const CD_FOOT = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  borderTop: '1px solid rgba(75,85,99,0.55)',
  fontFamily: 'Inter',
  fontSize: 11.5,
  color: 'rgb(163,163,163)',
  marginTop: 'auto'
};
const CD_SEE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  color: 'rgb(5,122,85)',
  textDecoration: 'none',
  fontSize: 11.5,
  fontWeight: 500,
  cursor: 'pointer'
};

/* height of the app's sticky topbar — sidebar must pin below it, not under it */
const CD_TOPBAR_H = 57;
const CD_TABS_H = 0;

/* ── Scope: view every account in the household together, or one at a time ──
   Backed by the real seeded book, so the toggle recomputes every tile. */
const CDScopeContext = React.createContext({
  mode: 'household',
  person: null,
  accountId: null,
  client: 'David Young'
});
const useCDScope = () => React.useContext(CDScopeContext);

/* accounts belonging to the scoped household, in value order */
function cdAccounts(client) {
  const house = cdHouseOf(client || '');
  return dmRows('raw_accounts').filter(a => a.household === house).sort((x, y) => y.market_value - x.market_value);
}

/* positions matching the current scope */
/* everyone with an account in the household, in value order */
function cdPeople(client) {
  const accts = cdAccounts(client);
  const by = {};
  accts.forEach(a => {
    by[a.client] = (by[a.client] || 0) + a.market_value;
  });
  /* the client whose page this is always leads; everyone else by value */
  return Object.entries(by).sort((a, b) => a[0] === client ? -1 : b[0] === client ? 1 : b[1] - a[1]).map(([name, mv]) => ({
    name,
    mv,
    accounts: accts.filter(a => a.client === name)
  }));
}
function cdMatches(scope, row) {
  if (scope.mode === 'account') return row.account === scope.accountId;
  if (scope.mode === 'person') return row.client === scope.person;
  return true;
}
function cdPositions(scope) {
  const house = cdHouseOf(scope.client || '');
  return dmRows('holdings').filter(p => p.household === house && cdMatches(scope, p));
}
function cdScopeAccounts(scope) {
  return cdAccounts(scope.client).filter(a => cdMatches(scope, a));
}

/* human-readable name for whatever is selected */
function cdScopeLabel(scope) {
  if (scope.mode === 'account') return scope.accountId;
  if (scope.mode === 'person') return scope.person;
  return cdHouseOf(scope.client || '');
}

/* "Joint" not "Joint · None (Taxable)"; "Roth IRA" not "Roth IRA · Roth IRA" */
function cdAcctLabel(a) {
  const wrapper = a.tax_wrapper && a.tax_wrapper !== 'None (Taxable)' && !a.tax_wrapper.includes(a.account_type) && !a.account_type.includes(a.tax_wrapper.split(' ')[0]) ? ' \u00b7 ' + a.tax_wrapper : '';
  return a.account_type + wrapper;
}

/* headline aggregates for the scope */
function cdTotals(scope) {
  const pos = cdPositions(scope);
  const mv = pos.reduce((s, p) => s + p.market_value, 0);
  const cb = pos.reduce((s, p) => s + p.cost_basis, 0);
  const cash = pos.filter(p => p.asset_class === 'Cash').reduce((s, p) => s + p.market_value, 0);
  const lt = pos.filter(p => p.holding_period === 'Long Term');
  const st = pos.filter(p => p.holding_period === 'Short Term');
  const gl = arr => ({
    gain: arr.filter(p => p.unrealized > 0).reduce((s, p) => s + p.unrealized, 0),
    loss: arr.filter(p => p.unrealized < 0).reduce((s, p) => s + p.unrealized, 0)
  });
  return {
    mv,
    cb,
    cash,
    positions: pos.length,
    unrealized: mv - cb,
    unrealizedPct: cb ? (mv - cb) / cb * 100 : 0,
    total: gl(pos),
    long: gl(lt),
    short: gl(st),
    accounts: cdScopeAccounts(scope)
  };
}
const cdUsd = v => (v < 0 ? '-' : '') + '$' + Math.abs(Math.round(v)).toLocaleString();

/* ── Scope switcher ─────────────────────────────────────────────────────── */
function CDScopeBar({
  scope,
  setScope
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const all = cdAccounts(scope.client);
  const people = cdPeople(scope.client);
  const total = all.reduce((s, a) => s + a.market_value, 0);
  const t = cdTotals(scope);

  /* what the trigger reads as, and the sub-line under it */
  const label = scope.mode === 'household' ? 'Household \u00b7 all accounts' : scope.mode === 'person' ? scope.person + ' \u00b7 all accounts' : scope.accountId;
  const sub = scope.mode === 'account' ? `${cdAcctLabel(t.accounts[0] || {})} \u00b7 ${(t.accounts[0] || {}).account_number || ''}` : `${t.accounts.length} account${t.accounts.length === 1 ? '' : 's'}`;
  const pick = next => {
    setScope({
      ...scope,
      ...next
    });
    setOpen(false);
  };
  const Item = ({
    active,
    indent,
    title,
    meta,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "data-no-hint": true,
    style: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: indent ? '7px 10px 7px 24px' : '8px 10px',
      borderRadius: 7,
      cursor: 'pointer',
      background: active ? 'rgba(5,122,85,0.22)' : 'transparent',
      border: '1px solid ' + (active ? 'rgba(16,185,129,0.55)' : 'transparent')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: active ? 600 : 500,
      color: active ? 'rgb(249,250,251)' : 'rgb(229,231,235)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: active ? 'rgb(110,231,183)' : 'rgb(163,163,163)',
      marginTop: 1
    }
  }, meta)), active && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      width: 11,
      height: 11,
      color: 'rgb(16,185,129)',
      flexShrink: 0
    }
  }));
  const groupCap = {
    fontFamily: 'Inter',
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgb(163,163,163)',
    padding: '9px 10px 4px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "data-no-hint": true,
    title: 'Viewing ' + label + ' · ' + sub,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      minWidth: 0,
      maxWidth: 300,
      height: 30,
      boxSizing: 'border-box',
      borderRadius: 8,
      padding: '0 12px',
      cursor: 'pointer',
      textAlign: 'left',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid ' + (open ? 'rgb(16,185,129)' : 'rgba(75,85,99,0.45)')
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${scope.mode === 'account' ? 'building-columns' : scope.mode === 'person' ? 'user' : 'users'}`,
    style: {
      width: 12,
      height: 12,
      color: 'rgb(163,163,163)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(209,213,219)',
      fontVariantNumeric: 'tabular-nums',
      flexShrink: 0
    }
  }, dmFmt(t.mv, 'usd')), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    style: {
      width: 9,
      height: 9,
      color: 'rgb(163,163,163)',
      flexShrink: 0
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      zIndex: 80,
      width: 'max(340px, 100%)',
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 420,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: 5,
      background: 'rgb(17,24,39)',
      border: '1px solid rgb(75,85,99)',
      borderRadius: 11,
      boxShadow: '0 22px 48px -14px rgba(0,0,0,0.75)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: groupCap
  }, "Everything together"), /*#__PURE__*/React.createElement(Item, {
    active: scope.mode === 'household',
    title: cdHouseOf(scope.client),
    meta: `All ${all.length} accounts \u00b7 ${dmFmt(total, 'usd')}`,
    onClick: () => pick({
      mode: 'household',
      person: null,
      accountId: null
    })
  }), people.map(p => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.name
  }, /*#__PURE__*/React.createElement("div", {
    style: groupCap
  }, p.name), /*#__PURE__*/React.createElement(Item, {
    active: scope.mode === 'person' && scope.person === p.name,
    title: `All of ${p.name.split(' ')[0]}\u2019s accounts`,
    meta: `${p.accounts.length} account${p.accounts.length === 1 ? '' : 's'} \u00b7 ${dmFmt(p.mv, 'usd')}`,
    onClick: () => pick({
      mode: 'person',
      person: p.name,
      accountId: null
    })
  }), p.accounts.map(acct => /*#__PURE__*/React.createElement(Item, {
    key: acct.account_id,
    indent: true,
    active: scope.mode === 'account' && scope.accountId === acct.account,
    title: cdAcctLabel(acct),
    meta: `${acct.account_number} \u00b7 ${acct.custodian} \u00b7 ${dmFmt(acct.market_value, 'usd')}`,
    onClick: () => pick({
      mode: 'account',
      person: acct.client,
      accountId: acct.account
    })
  })))))));
}

/* How-it's-calculated copy + data source per tile, surfaced via the header info icon */
const CD_INFO = {
  cd_portvalue: {
    source: 'schwab',
    text: 'Portfolio value = sum of position market values across the client\u2019s linked accounts. Positions and prices sync from the custodian feed; cost basis comes from tax lots.'
  },
  cd_allocation: {
    source: 'fidelity',
    text: 'Each slice is the market value of an asset class ÷ total portfolio value. Positions sync intraday from the custodian.'
  },
  cd_holdings: {
    source: 'schwab',
    text: 'Positions for whatever is in view, rolled up by security across accounts. Weight = the security\u2019s market value \u00f7 the total value in view. Unrealized = market value \u2212 cost basis from tax lots.'
  },
  cd_accounts: {
    source: 'schwab',
    text: 'One row per linked account from the custodian: registration type, tax wrapper, status and current market value. Held-away accounts are flagged where the custodian reports them.'
  },
  cd_performance: {
    source: 'pershing',
    text: 'Returns are time-weighted (TWRR), net of fees, and benchmarked against the S&P 500. Computed from daily account valuations.'
  },
  cd_unrealized: {
    source: 'fidelity',
    text: 'Unrealized gain/loss = current market value − cost basis, split into long- and short-term by holding period.'
  },
  cd_mandate: {
    source: 'internal',
    text: 'Model portfolio, benchmark, fee schedule and reconciliation fields as recorded on the account record in Orion. Recon status and last reconciled date come from the nightly custodian match.'
  }
};
function InfoPopover({
  kind,
  source
}) {
  const [open, setOpen] = React.useState(false);
  const info = CD_INFO[kind] || {};
  const srcId = source || info.source;
  const meta = srcId ? (window.SOURCE_META || {})[srcId] || {
    name: srcId,
    dot: 'rgb(107,114,128)'
  } : null;
  const toggle = e => {
    e.stopPropagation();
    setOpen(o => !o);
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      marginLeft: 'auto',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: toggle,
    "aria-label": "How this is calculated",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      width: 24,
      height: 24,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: open ? 'rgb(5,122,85)' : 'rgb(163,163,163)',
      transition: 'color 150ms ease'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-info",
    style: {
      width: 14,
      height: 14
    }
  })), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 30,
      right: 0,
      zIndex: 41,
      width: 264,
      background: 'rgb(17,24,39)',
      border: '1px solid rgb(75,85,99)',
      borderRadius: 10,
      boxShadow: '0 12px 32px -8px rgba(0,0,0,0.6)',
      padding: '12px 13px',
      fontFamily: 'Inter',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'rgb(163,163,163)',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-info",
    style: {
      width: 11,
      height: 11,
      color: 'rgb(5,122,85)'
    }
  }), "How this is calculated"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.5,
      color: 'rgb(209,213,219)'
    }
  }, info.text || 'Calculation details unavailable.'), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 10,
      paddingTop: 9,
      borderTop: '1px solid rgba(75,85,99,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'rgb(163,163,163)'
    }
  }, "Source"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      color: 'rgb(229,231,235)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: meta.dot
    }
  }), meta.name)))));
}
function CDTile({
  title,
  children,
  footLink = 'Reports',
  style,
  showFoot = true,
  source,
  kind,
  footLabel
}) {
  const period = React.useContext(window.PeriodContext || React.createContext('Year to date'));
  const periodLabel = footLabel || (window.periodToLabel ? window.periodToLabel(period) : 'As of Today');
  const open = e => {
    if (e) e.stopPropagation();
    if (kind) window.dispatchEvent(new CustomEvent('clienttile:open', {
      detail: {
        kind
      }
    }));
  };
  const hasDetails = !!kind;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CD_TILE,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: CD_HEAD
  }, /*#__PURE__*/React.createElement("div", {
    style: CD_TITLE
  }, title), /*#__PURE__*/React.createElement(InfoPopover, {
    kind: kind,
    source: source
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 10px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, children), showFoot && /*#__PURE__*/React.createElement("div", {
    style: CD_FOOT
  }, /*#__PURE__*/React.createElement("span", null, periodLabel), hasDetails ? /*#__PURE__*/React.createElement("a", {
    onClick: open,
    style: {
      ...CD_SEE,
      cursor: 'pointer'
    }
  }, "See details ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      width: 11,
      height: 11
    }
  })) : /*#__PURE__*/React.createElement("a", {
    style: {
      ...CD_SEE,
      cursor: 'default'
    }
  }, footLink, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      width: 11,
      height: 11
    }
  }))));
}

/* Sub-tabs under topbar */
function CDTabs({
  active,
  onChange,
  period,
  setPeriod,
  scope,
  setScope
}) {
  const tabs = ['Profile', 'Reports', 'Billing'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '10px 24px 0',
      borderBottom: '1px solid rgba(75,85,99,0.5)',
      position: 'sticky',
      top: CD_TOPBAR_H,
      zIndex: 40,
      background: 'rgb(14,26,42)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange(t),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 2px 10px',
      borderBottom: active === t ? '2px solid rgb(5,122,85)' : '2px solid transparent',
      color: active === t ? 'rgb(249,250,251)' : 'rgb(163,163,163)',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: active === t ? 600 : 500,
      marginBottom: -1
    }
  }, t)), scope && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(CDScopeBar, {
    scope: scope,
    setScope: setScope
  })));
}

/* 1. Portfolio Value — market value trend + cost basis (positions + tax lots) */
const PV_BY_PERIOD = {
  'Today': {
    cats: ['9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p'],
    data: [4536, 4538.5, 4539.8, 4537.5, 4541, 4540.5, 4542.1, 4542.5],
    delta: '0.10%',
    dir: 'up',
    deltaLabel: 'today'
  },
  'This week': {
    cats: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    data: [4523, 4528, 4534, 4539, 4542.5],
    delta: '0.43%',
    dir: 'up',
    deltaLabel: 'this week'
  },
  'This month': {
    cats: ['W1', 'W2', 'W3', 'W4'],
    data: [4509, 4520, 4534, 4542.5],
    delta: '0.74%',
    dir: 'up',
    deltaLabel: 'this month'
  },
  'This quarter': {
    cats: ['Apr', 'May'],
    data: [4465, 4542.5],
    delta: '1.74%',
    dir: 'up',
    deltaLabel: 'this quarter'
  },
  'Year to date': {
    cats: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    data: [4272, 4324, 4392, 4465, 4542.5],
    delta: '6.33%',
    dir: 'up',
    deltaLabel: 'YTD'
  },
  'Last 12 months': {
    cats: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    data: [4168, 4213, 4257, 4310, 4272, 4324, 4361, 4392, 4433, 4465, 4509, 4542.5],
    delta: '8.97%',
    dir: 'up',
    deltaLabel: '12-month'
  },
  'All time': {
    cats: ['2021', '2022', '2023', '2024', '2025', '2026'],
    data: [2854, 3262, 3596, 4004, 4375, 4542.5],
    delta: '59.2%',
    dir: 'up',
    deltaLabel: 'since inception'
  }
};
function PortfolioValue() {
  const period = React.useContext(window.PeriodContext || React.createContext('Year to date'));
  const scope = useCDScope();
  const t = React.useMemo(() => cdTotals(scope), [scope.mode, scope.person, scope.accountId, scope.client]);
  const cfg = PV_BY_PERIOD[period] || PV_BY_PERIOD['Year to date'];
  /* the shape of the trend is the period's; the level is the scope's */
  const scale = t.mv / (cfg.data[cfg.data.length - 1] * 1000);
  const series = React.useMemo(() => cfg.data.map(v => Math.round(v * 1000 * scale)), [cfg, scale]);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'area',
      height: 150,
      spacing: [4, 4, 4, 4],
      backgroundColor: 'transparent'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: cfg.cats,
      lineColor: 'rgba(75,85,99,0.4)',
      tickColor: 'rgba(75,85,99,0.4)',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10px'
        }
      }
    },
    yAxis: {
      visible: true,
      gridLineColor: 'rgba(75,85,99,0.2)',
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return dmFmt(this.value, 'usd');
        },
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10px'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgb(75,85,99)',
      style: {
        color: 'rgb(249,250,251)',
        fontSize: '11px'
      },
      formatter: function () {
        return `<b>${this.x}</b><br/>${cdUsd(this.y)}`;
      }
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, 'rgba(5,122,85,0.35)'], [1, 'rgba(5,122,85,0)']]
        },
        lineWidth: 2,
        color: 'rgb(5,122,85)',
        marker: {
          enabled: true,
          radius: 2.5,
          fillColor: 'rgb(10,10,10)',
          lineColor: 'rgb(5,122,85)',
          lineWidth: 1.5,
          symbol: 'circle'
        }
      }
    },
    series: [{
      name: 'Market Value',
      data: series
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), [period, series]);
  const upColor = cfg.dir === 'up' ? 'rgb(5,122,85)' : 'rgb(248,113,113)';
  const foot = scope.mode === 'account' ? `${scope.accountId} · positions as of Jul 27, 2026` : `${cdScopeLabel(scope)} · ${t.accounts.length} accounts · as of Jul 27, 2026`;
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Portfolio Value",
    footLink: "Facts",
    source: "schwab",
    kind: "cd_portvalue",
    footLabel: foot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: '-0.02em',
      padding: '2px 0 8px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, cdUsd(t.mv)), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 0 10px',
      fontFamily: 'Inter',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-arrow-${cfg.dir}`,
    style: {
      width: 11,
      height: 11,
      color: upColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: upColor,
      fontWeight: 600
    }
  }, cfg.delta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)'
    }
  }, cfg.dir === 'up' ? 'up' : 'down', " ", cfg.deltaLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      paddingTop: 12,
      borderTop: '1px solid rgba(75,85,99,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Cost Basis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, cdUsd(t.cb))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Cash"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, cdUsd(t.cash)))));
}

/* 2. Asset Allocation — donut + legend */
const CD_ASSET_COLORS = {
  'US Equity': {
    fill: 'rgba( 94,214,164,0.55)',
    dot: 'rgb( 94,214,164)'
  },
  'Intl Equity': {
    fill: 'rgba(180,150,235,0.55)',
    dot: 'rgb(180,150,235)'
  },
  'Fixed Income': {
    fill: 'rgba(120,160,230,0.55)',
    dot: 'rgb(120,160,230)'
  },
  'Alternatives': {
    fill: 'rgba(245,200, 90,0.55)',
    dot: 'rgb(245,200, 90)'
  },
  'Cash': {
    fill: 'rgba(120,200,210,0.55)',
    dot: 'rgb(120,200,210)'
  }
};
function AssetAllocation() {
  const scope = useCDScope();
  const data = React.useMemo(() => {
    const pos = cdPositions(scope);
    const total = pos.reduce((s, p) => s + p.market_value, 0) || 1;
    const by = {};
    pos.forEach(p => {
      by[p.asset_class] = (by[p.asset_class] || 0) + p.market_value;
    });
    return Object.entries(by).sort((a, b) => b[1] - a[1]).map(([name, mv]) => {
      const col = CD_ASSET_COLORS[name] || {
        fill: 'rgba(240,140,120,0.55)',
        dot: 'rgb(240,140,120)'
      };
      return {
        name,
        y: Math.round(mv / total * 1000) / 10,
        mv,
        amt: (mv / total * 100).toFixed(1) + '%',
        ...col
      };
    });
  }, [scope.mode, scope.person, scope.accountId, scope.client]);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height: 196,
      backgroundColor: 'transparent',
      spacing: [0, 0, 0, 0]
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgb(75,85,99)',
      style: {
        color: 'rgb(249,250,251)',
        fontSize: '11px'
      },
      formatter: function () {
        return `<b>${this.point.name}</b><br/>${cdUsd(this.point.mv)} · ${this.y}%`;
      }
    },
    plotOptions: {
      pie: {
        innerSize: '64%',
        borderWidth: 0,
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Allocation',
      data: data.map(d => ({
        name: d.name,
        y: d.y,
        mv: d.mv,
        color: d.fill,
        borderColor: d.dot,
        borderWidth: 1.4
      }))
    }]
  }), [data]);
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Asset Allocation",
    footLink: "Reports",
    source: "fidelity",
    kind: "cd_allocation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 196
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      paddingTop: 10,
      borderTop: '1px solid rgba(75,85,99,0.5)'
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Inter',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: d.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'rgb(209,213,219)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, d.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, dmFmt(d.mv, 'usd')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      minWidth: 44,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, d.amt)))));
}

/* 3. Holdings — the largest positions for whatever is in view. Fixed shape:
   three summary figures over a scrolling position list, so switching scope
   refigures without the tile changing identity or height. */
function HoldingsTile() {
  const scope = useCDScope();
  const t = React.useMemo(() => cdTotals(scope), [scope.mode, scope.person, scope.accountId, scope.client]);
  /* positions roll up by security, so one ticket held in three accounts reads once */
  const rows = React.useMemo(() => {
    const by = {};
    cdPositions(scope).forEach(p => {
      const k = p.ticker;
      if (!by[k]) by[k] = {
        ticker: p.ticker,
        security: p.security,
        asset_class: p.asset_class,
        mv: 0,
        unrealized: 0,
        accounts: new Set()
      };
      by[k].mv += p.market_value;
      by[k].unrealized += p.unrealized;
      by[k].accounts.add(p.account);
    });
    return Object.values(by).sort((x, y) => y.mv - x.mv);
  }, [scope.mode, scope.person, scope.accountId, scope.client]);
  const top = rows[0];
  const Metric = ({
    label,
    value,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(163,163,163)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 19,
      letterSpacing: '-0.02em',
      color: tone || 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, value));
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Holdings",
    footLink: "Reports",
    source: "schwab",
    kind: "cd_holdings",
    footLabel: [rows.length + ' securities', t.accounts.length + ' account' + (t.accounts.length === 1 ? '' : 's'), 'priced Jul 27, 2026'].join(' \u00b7 ')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))',
      gap: '10px 12px',
      padding: '2px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Securities",
    value: String(rows.length)
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Positions",
    value: String(t.positions)
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Largest weight",
    value: top && t.mv ? (top.mv / t.mv * 100).toFixed(1) + '%' : '\u2014'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 180,
      maxHeight: 260,
      overflowY: 'auto',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      borderTop: '1px solid rgba(75,85,99,0.45)',
      paddingTop: 10,
      scrollbarGutter: 'stable'
    }
  }, rows.map(r => {
    const weight = t.mv ? r.mv / t.mv * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: r.ticker,
      style: {
        border: '1px solid rgba(75,85,99,0.5)',
        borderRadius: 8,
        padding: '8px 10px',
        flexShrink: 0,
        background: 'rgba(255,255,255,0.015)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.02em',
        color: 'rgb(110,231,183)',
        flexShrink: 0
      }
    }, r.ticker), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: 'rgb(209,213,219)',
        flex: 1,
        minWidth: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.security), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12.5,
        fontWeight: 600,
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0
      }
    }, dmFmt(r.mv, 'usd'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        height: 4,
        borderRadius: 2,
        background: 'rgba(75,85,99,0.45)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: Math.max(weight, 1.5) + '%',
        height: '100%',
        background: 'rgb(5,122,85)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        color: 'rgb(163,163,163)',
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0,
        minWidth: 38,
        textAlign: 'right'
      }
    }, weight.toFixed(1), "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10.5,
        fontWeight: 600,
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0,
        minWidth: 56,
        textAlign: 'right',
        color: r.unrealized >= 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)'
      }
    }, (r.unrealized >= 0 ? '+' : '') + dmFmt(r.unrealized, 'usd'))));
  })));
}
function CDChip({
  children,
  tone
}) {
  const good = tone === 'good';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 21,
      padding: '0 8px',
      borderRadius: 6,
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      background: good ? 'rgba(5,122,85,0.18)' : 'rgba(255,255,255,0.05)',
      border: '1px solid ' + (good ? 'rgba(16,185,129,0.45)' : 'rgba(75,85,99,0.65)'),
      color: good ? 'rgb(110,231,183)' : 'rgb(209,213,219)'
    }
  }, children);
}

/* 4. Left sidebar column — General + Recent Activity, single scrollable container.
   Everything renders from the seeded book for the client passed in. */
const cdHash = s => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
  return h;
};
const cdEmail = n => n.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '.') + '@gmail.com';
const cdPhone = n => '215-555-' + String(1000 + cdHash(n) % 9000);
const cdRiskLabel = r => r < 40 ? 'Conservative' : r < 62 ? 'Moderate' : 'Aggressive';
const CD_AVA = ['linear-gradient(135deg,#f0abfc,#c084fc)', 'linear-gradient(135deg,#7dd3fc,#818cf8)', 'linear-gradient(135deg,#6ee7b7,#3b82f6)', 'linear-gradient(135deg,#fcd34d,#f97316)'];
function ClientSidebar({
  clientName,
  onBack
}) {
  const book = React.useMemo(() => dmRows('client_book'), []);
  const me = book.find(c => c.client === clientName) || book[0] || {};
  const members = React.useMemo(() => cdPeople(clientName).map(p => book.find(c => c.client === p.name)).filter(c => c && c.client !== clientName), [clientName, book]);
  const activity = React.useMemo(() => {
    const house = cdHouseOf(clientName || '');
    return dmRows('money_movement').filter(t => t.household === house).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  }, [clientName]);
  const fmtD = d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const fmtA = v => (v < 0 ? '-$' : '$') + Math.abs(v).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const actMeta = t => {
    const isTrade = t.transaction_type === 'Buy' || t.transaction_type === 'Sell';
    return {
      icon: t.transaction_type === 'Deposit' ? 'arrow-down' : t.transaction_type === 'Withdrawal' ? 'arrow-up' : isTrade ? 'chart-column' : t.transaction_type === 'Advisory Fee' ? 'file-invoice-dollar' : 'right-left',
      color: t.transaction_type === 'Deposit' ? 'rgb(16,185,129)' : t.transaction_type === 'Withdrawal' ? 'rgb(248,113,113)' : isTrade ? 'rgb(56,189,248)' : 'rgb(5,122,85)',
      title: isTrade ? t.transaction_type + ' \u2014 ' + (t.security || t.ticker) : t.transaction_type,
      meta: fmtA(t.amount) + ' \u00b7 ' + t.account_type + ' \u00b7 ' + fmtD(t.date)
    };
  };
  const sectionHead = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 0 8px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: CD_TOPBAR_H + CD_TABS_H,
      alignSelf: 'start',
      maxHeight: 'calc(100vh - ' + (CD_TOPBAR_H + CD_TABS_H) + 'px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      overscrollBehavior: 'contain',
      WebkitMaskImage: 'linear-gradient(to bottom, #000 calc(100% - 24px), transparent 100%)',
      maskImage: 'linear-gradient(to bottom, #000 calc(100% - 24px), transparent 100%)',
      color: 'rgb(249,250,251)',
      padding: '0 24px 28px'
    },
    className: "cd-sidebar-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionHead
  }, /*#__PURE__*/React.createElement("div", {
    style: CD_TITLE
  }, "General"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    title: "Share with client",
    onClick: () => window.dispatchEvent(new CustomEvent('share:open', {
      detail: {
        client: me.client,
        email: cdEmail(me.client || ''),
        phone: cdPhone(me.client || '')
      }
    })),
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: 'none',
      color: 'rgb(163,163,163)',
      cursor: 'pointer',
      width: 24,
      height: 24,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-share-nodes",
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    title: "Settings",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'rgb(163,163,163)',
      cursor: 'pointer',
      width: 24,
      height: 24,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-gear",
    style: {
      width: 14,
      height: 14
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 9999,
      background: CD_AVA[cdHash(me.client || 'x') % CD_AVA.length],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 16,
      flexShrink: 0,
      border: '1px solid rgba(255,255,255,0.15)'
    }
  }, (me.client || '?')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 600
    }
  }, me.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, me.household, " \xB7 Client since ", me.client_since_year)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 22,
      fontWeight: 300,
      color: 'rgb(163,163,163)'
    }
  }, me.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 12,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    style: {
      width: 12,
      height: 12,
      color: 'rgb(163,163,163)'
    }
  }), /*#__PURE__*/React.createElement("span", null, cdEmail(me.client || ''))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      width: 12,
      height: 12,
      color: 'rgb(163,163,163)'
    }
  }), /*#__PURE__*/React.createElement("span", null, cdPhone(me.client || '')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CDChip, {
    tone: "good"
  }, me.status || 'Active'), /*#__PURE__*/React.createElement(CDChip, null, me.segment), /*#__PURE__*/React.createElement(CDChip, null, "Risk ", me.risk_score, " \xB7 ", cdRiskLabel(me.risk_score || 0)), me.source && /*#__PURE__*/React.createElement(CDChip, null, me.source)), members.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.client,
    style: {
      marginTop: 14,
      paddingTop: 14,
      borderTop: '1px solid rgba(75,85,99,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgb(163,163,163)',
      marginBottom: 10
    }
  }, "Household Member"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9999,
      background: CD_AVA[cdHash(m.client) % CD_AVA.length],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 14,
      flexShrink: 0,
      border: '1px solid rgba(255,255,255,0.15)'
    }
  }, m.client[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13.5,
      fontWeight: 600
    }
  }, m.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, m.household_role || 'Member', " \xB7 Joint owner")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 19,
      fontWeight: 300,
      color: 'rgb(163,163,163)'
    }
  }, m.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 10,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    style: {
      width: 12,
      height: 12,
      color: 'rgb(163,163,163)'
    }
  }), /*#__PURE__*/React.createElement("span", null, cdEmail(m.client))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      width: 12,
      height: 12,
      color: 'rgb(163,163,163)'
    }
  }), /*#__PURE__*/React.createElement("span", null, cdPhone(m.client)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(CDChip, {
    tone: "good"
  }, m.status || 'Active'), /*#__PURE__*/React.createElement(CDChip, null, "Risk ", m.risk_score, " \xB7 ", cdRiskLabel(m.risk_score || 0)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionHead,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CD_TITLE
  }, "Recent Activity"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: 'none',
      color: 'rgb(163,163,163)',
      cursor: 'pointer',
      width: 24,
      height: 24,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-ellipsis",
    style: {
      width: 14,
      height: 14
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 16px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, activity.map((t, i) => {
    const a = actMeta(t);
    return /*#__PURE__*/React.createElement(ActivityRow, {
      key: i,
      icon: a.icon,
      iconColor: a.color,
      title: a.title,
      meta: a.meta,
      last: i === activity.length - 1
    });
  }), !activity.length && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      padding: '8px 0'
    }
  }, "No recent transactions.")));
}
function CustodianRow({
  source,
  label,
  amount,
  muted
}) {
  const meta = (window.SOURCE_META || {})[source] || {
    name: source,
    dot: 'rgb(107,114,128)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.6)',
      background: muted ? 'transparent' : 'rgba(255,255,255,0.03)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 9,
      background: meta.dot
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(229,231,235)'
    }
  }, meta.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      marginTop: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: muted ? 'rgb(163,163,163)' : 'rgb(229,231,235)'
    }
  }, amount));
}
function ActivityRow({
  icon,
  iconColor,
  title,
  meta,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '10px 0',
      borderBottom: last ? 'none' : '1px solid rgba(75,85,99,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.6)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: iconColor
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    style: {
      width: 13,
      height: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'rgb(229,231,235)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, meta)));
}
/* 5. Performance — grouped bar chart + period-aware summary */
const PERF_BY_PERIOD = {
  'Today': {
    metrics: [{
      k: '1D Return',
      v: '0.18%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '0.11%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '0.07%',
      dir: 'up'
    }]
  },
  'This week': {
    metrics: [{
      k: '1W Return',
      v: '1.04%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '0.82%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '0.22%',
      dir: 'up'
    }]
  },
  'This month': {
    metrics: [{
      k: 'MTD',
      v: '3.42%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '2.91%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '0.51%',
      dir: 'up'
    }]
  },
  'This quarter': {
    metrics: [{
      k: 'QTD',
      v: '13.19%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '9.84%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '3.35%',
      dir: 'up'
    }]
  },
  'Year to date': {
    metrics: [{
      k: 'YTD',
      v: '12.69%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '14.21%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '1.52%',
      dir: 'down'
    }]
  },
  'Last 12 months': {
    metrics: [{
      k: '12-month',
      v: '18.42%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '16.84%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '1.58%',
      dir: 'up'
    }]
  },
  'All time': {
    metrics: [{
      k: 'ITD',
      v: '68.10%',
      dir: 'up'
    }, {
      k: 'Bench',
      v: '52.40%',
      dir: 'up'
    }, {
      k: 'Alpha',
      v: '15.7%',
      dir: 'up'
    }]
  }
};
function Performance() {
  const period = React.useContext(window.PeriodContext || React.createContext('Year to date'));
  const cfg = PERF_BY_PERIOD[period] || PERF_BY_PERIOD['Year to date'];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 210,
      backgroundColor: 'transparent',
      spacing: [8, 4, 4, 4]
    },
    xAxis: {
      categories: ['QTD', 'YTD', 'ITD'],
      lineColor: 'rgba(75,85,99,0.5)',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10px'
        }
      }
    },
    yAxis: {
      min: -50,
      max: 50,
      tickInterval: 50,
      gridLineColor: 'rgba(75,85,99,0.3)',
      labels: {
        formatter: function () {
          return this.value + '%';
        },
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10px'
        }
      },
      title: {
        text: null
      },
      plotLines: [{
        value: 0,
        color: 'rgba(75,85,99,0.8)',
        width: 1
      }]
    },
    plotOptions: {
      column: {
        borderWidth: 1.5,
        pointPadding: 0.08,
        groupPadding: 0.12,
        borderRadius: 3
      }
    },
    series: [{
      name: 'TWRR',
      data: [28, 15, 42],
      color: 'rgba( 94,214,164,0.55)',
      borderColor: 'rgb( 94,214,164)'
    }, {
      name: 'MMkt',
      data: [12, 8, 22],
      color: 'rgba(120,160,230,0.55)',
      borderColor: 'rgb(120,160,230)'
    }, {
      name: 'SP500',
      data: [22, 10, 38],
      color: 'rgba(245,200, 90,0.55)',
      borderColor: 'rgb(245,200, 90)'
    }, {
      name: 'Bond',
      data: [6, 4, 10],
      color: 'rgba(180,150,235,0.55)',
      borderColor: 'rgb(180,150,235)'
    }],
    legend: {
      enabled: false
    },
    tooltip: {
      valueSuffix: '%'
    },
    credits: {
      enabled: false
    }
  }), []);
  const Dot = ({
    c,
    label
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: c
    }
  }), " ", label);
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Performance",
    footLink: "Reports",
    source: "pershing",
    kind: "cd_performance"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '2px 0 6px'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    c: "rgb( 94,214,164)",
    label: "TWRR"
  }), /*#__PURE__*/React.createElement(Dot, {
    c: "rgb(120,160,230)",
    label: "MMkt"
  }), /*#__PURE__*/React.createElement(Dot, {
    c: "rgb(245,200, 90)",
    label: "SP500"
  }), /*#__PURE__*/React.createElement(Dot, {
    c: "rgb(180,150,235)",
    label: "Bond"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 210
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      padding: '8px 0 6px',
      borderTop: '1px solid rgba(75,85,99,0.5)'
    }
  }, cfg.metrics.map((m, i) => {
    const c = m.dir === 'up' ? 'rgb(5,122,85)' : 'rgb(248,113,113)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: 'rgb(163,163,163)'
      }
    }, m.k), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 600,
        color: c
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid fa-arrow-${m.dir}`,
      style: {
        width: 10,
        height: 10
      }
    }), m.v));
  })));
}

/* 6. Unrealized */
function Unrealized() {
  const scope = useCDScope();
  const t = React.useMemo(() => cdTotals(scope), [scope.mode, scope.person, scope.accountId, scope.client]);
  const Row = ({
    label,
    gain,
    loss
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0',
      borderTop: '1px solid rgba(75,85,99,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 22,
      fontWeight: 700,
      color: 'rgb(5,122,85)',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-up",
    style: {
      width: 14,
      height: 14
    }
  }), cdUsd(gain)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Gains")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 22,
      fontWeight: 700,
      color: 'rgb(248,113,113)',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-down",
    style: {
      width: 14,
      height: 14
    }
  }), cdUsd(loss)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Losses"))));
  const netColor = t.unrealized >= 0 ? 'rgb(5,122,85)' : 'rgb(248,113,113)';
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Unrealized",
    footLink: "Reports",
    source: "fidelity",
    kind: "cd_unrealized",
    footLabel: `${t.positions} positions · from tax lots`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 9,
      padding: '2px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: netColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, t.unrealized >= 0 ? '+' : '', cdUsd(t.unrealized)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: netColor
    }
  }, t.unrealizedPct >= 0 ? '+' : '', t.unrealizedPct.toFixed(1), "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, "net")), /*#__PURE__*/React.createElement(Row, {
    label: "Unrealized Total",
    gain: t.total.gain,
    loss: t.total.loss
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Long Term",
    gain: t.long.gain,
    loss: t.long.loss
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Short Term",
    gain: t.short.gain,
    loss: t.short.loss
  }));
}

/* 7. Mandate & Billing — model portfolio, fee schedule, reconciliation */
function MandateBilling() {
  const scope = useCDScope();
  const accounts = React.useMemo(() => cdScopeAccounts(scope), [scope.mode, scope.person, scope.accountId, scope.client]);
  const a = accounts[0] || {};
  const uniq = k => [...new Set(accounts.map(x => x[k]))];
  const many = (k, fmt) => {
    const v = uniq(k);
    return v.length === 1 ? fmt ? fmt(v[0]) : v[0] : v.length + ' schedules';
  };
  const avgRisk = accounts.length ? Math.round(accounts.reduce((s, x) => s + x.risk_score, 0) / accounts.length) : 0;
  const allMatched = accounts.every(x => x.recon_status === 'Matched');
  const lastRecon = uniq('recon_status').length ? 'Feb 20, 2026' : '\u2014';
  const rows = [['Model Portfolio', uniq('model_portfolio').length === 1 ? a.model_portfolio : uniq('model_portfolio').length + ' models'], ['Benchmark', 'S&P 500 TR (SPXTR)'], ['Cost Basis Method', 'FIFO'], ['Fee Schedule', uniq('fee_schedule').length === 1 ? a.fee_schedule : uniq('fee_schedule').length + ' schedules'], ['Billing Frequency', uniq('billing_frequency').length === 1 ? a.billing_frequency : 'Mixed'], ['Custodian', uniq('custodian').length === 1 ? a.custodian : uniq('custodian').join(', ')], ['Last Reconciled', lastRecon]];
  return /*#__PURE__*/React.createElement(CDTile, {
    title: "Mandate & Billing",
    footLink: "Reports",
    source: "internal",
    kind: "cd_mandate",
    footLabel: `${accounts.length} account${accounts.length === 1 ? '' : 's'} · from the account record`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, accounts.length > 1 ? 'Avg Risk Score' : 'Risk Score'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, avgRisk, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'rgb(163,163,163)'
    }
  }, "/ 100"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Recon Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 22,
      color: allMatched ? 'rgb(16,185,129)' : 'rgb(234,179,8)',
      letterSpacing: '-0.02em'
    }
  }, allMatched ? 'Matched' : 'Pending'))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      padding: '9px 0',
      borderTop: '1px solid rgba(75,85,99,0.45)',
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(249,250,251)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, r[1]))));
}

/* The profile grid: twelve tracks, with the per-card span chosen from the space
   actually available so cards never collapse to unreadable slivers. Built-in
   cards and studio-made ones share the same tracks. */
const CDSpanContext = React.createContext(4);
function CDProfileGrid({
  children
}) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setW(Math.round(el.getBoundingClientRect().width));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  /* Client tiles sit three across; they widen to halves and then to full width
     as the column narrows, so a tile is never too thin to read. */
  const unit = w === 0 || w >= 880 ? 4 : w >= 560 ? 6 : 12;
  return /*#__PURE__*/React.createElement(CDSpanContext.Provider, {
    value: unit
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0,1fr))',
      gridAutoRows: '460px',
      gap: 16,
      alignItems: 'stretch'
    }
  }, children));
}
function CDSlot({
  span,
  children
}) {
  const unit = React.useContext(CDSpanContext);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: `span ${span || unit}`,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children);
}

/* studio tiles read the same unit so they line up with the built-in cards */
function CDBuilderSlot({
  clientName,
  period,
  editing,
  onDirtyChange,
  tab,
  tabs
}) {
  const unit = React.useContext(CDSpanContext);
  const scope = useCDScope();
  return /*#__PURE__*/React.createElement(ClientBuilderTiles, {
    inline: true,
    clientName: clientName,
    period: period,
    minSpan: unit,
    viewScope: scope,
    editing: editing,
    onDirtyChange: onDirtyChange,
    tab: tab,
    tabs: tabs
  });
}

/* ── Client menu: the topbar title. Opens the client's profile — general info,
   household members — and every account, which doubles as the Viewing scope. */
function cdPanelGet() {
  return !!window.__cdPanelOpen;
}
function cdPanelSet(v) {
  window.__cdPanelOpen = !!v;
  window.dispatchEvent(new CustomEvent('cdprofile:set', {
    detail: v
  }));
}
function useCDPanelOpen() {
  const [open, setOpen] = React.useState(cdPanelGet);
  React.useEffect(() => {
    const on = e => setOpen(!!e.detail);
    window.addEventListener('cdprofile:set', on);
    return () => window.removeEventListener('cdprofile:set', on);
  }, []);
  return [open, cdPanelSet];
}
function CDClientMenu({
  clientName,
  scope
}) {
  const [open, setOpen] = useCDPanelOpen();
  const sc = scope && scope.client === clientName ? scope : {
    mode: 'household'
  };
  const all = cdAccounts(clientName);
  const viewing = sc.mode === 'household' ? null : sc.mode === 'person' ? sc.person + '\u2019s accounts' : cdAcctLabel(all.find(a => a.account === sc.accountId) || {});
  const [hover, setHover] = React.useState(false);
  const on = open || hover;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "data-no-hint": true,
    "aria-expanded": open,
    title: open ? 'Hide client profile' : 'Show client profile',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 34,
      padding: '0 6px 0 4px',
      marginLeft: -4,
      borderRadius: 9,
      border: '1px solid ' + (open ? 'rgba(16,185,129,0.55)' : on ? 'rgb(107,114,128)' : 'rgb(75,85,99)'),
      background: open ? 'rgba(5,122,85,0.16)' : on ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
      color: 'rgb(249,250,251)',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 15,
      transition: 'background 120ms, border-color 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 9999,
      background: CD_AVA[cdHash(clientName || 'x') % CD_AVA.length],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      border: '1px solid rgba(255,255,255,0.15)',
      flexShrink: 0
    }
  }, (clientName || '?')[0]), clientName, viewing && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13,
      color: 'rgb(163,163,163)'
    }
  }, '\u00b7 ' + viewing), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 8px',
      marginLeft: 2,
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 500,
      color: open ? 'rgb(167,243,208)' : 'rgb(209,213,219)',
      background: open ? 'rgba(16,185,129,0.18)' : 'rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-id-card",
    style: {
      fontSize: 11
    }
  }), open ? 'Hide profile' : 'Profile', /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + (open ? 'fa-chevron-left' : 'fa-chevron-right'),
    style: {
      fontSize: 9,
      opacity: 0.8
    }
  })));
}
function CDProfilePanel({
  clientName,
  scope,
  setScope,
  onClose
}) {
  const book = React.useMemo(() => dmRows('client_book'), []);
  const me = book.find(c => c.client === clientName) || {};
  const sc = scope && scope.client === clientName ? scope : {
    mode: 'household',
    person: null,
    accountId: null,
    client: clientName
  };
  const all = cdAccounts(clientName);
  const people = cdPeople(clientName);
  const members = people.map(p => book.find(c => c.client === p.name)).filter(c => c && c.client !== clientName);
  const total = all.reduce((x, a) => x + a.market_value, 0);
  const pick = next => setScope({
    ...sc,
    ...next
  });
  const cap = {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgb(163,163,163)'
  };
  const Avatar = ({
    name,
    size
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      background: CD_AVA[cdHash(name || 'x') % CD_AVA.length],
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: size * 0.38,
      border: '1px solid rgba(255,255,255,0.15)'
    }
  }, (name || '?')[0]);
  const Contact = ({
    name
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    style: {
      width: 11,
      height: 11,
      color: 'rgb(163,163,163)'
    }
  }), cdEmail(name)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      width: 11,
      height: 11,
      color: 'rgb(163,163,163)'
    }
  }), cdPhone(name)));
  const [openP, setOpenP] = React.useState({});
  const isOpen = name => openP[name] != null ? openP[name] : sc.mode === 'account' && sc.person === name;
  const Row = ({
    active,
    indent,
    title,
    meta,
    onClick,
    toggle
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "data-no-hint": true,
    style: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: indent ? '7px 10px 7px 22px' : '8px 10px',
      borderRadius: 7,
      cursor: 'pointer',
      background: active ? 'rgba(5,122,85,0.22)' : 'transparent',
      border: '1px solid ' + (active ? 'rgba(16,185,129,0.55)' : 'transparent')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: active ? 600 : 500,
      color: 'rgb(229,231,235)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: active ? 'rgb(110,231,183)' : 'rgb(163,163,163)',
      marginTop: 1
    }
  }, meta)), active && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      width: 11,
      height: 11,
      color: 'rgb(16,185,129)',
      flexShrink: 0
    }
  }), toggle && /*#__PURE__*/React.createElement("span", {
    role: "button",
    title: toggle.open ? 'Collapse accounts' : 'Expand accounts',
    onClick: e => {
      e.stopPropagation();
      toggle.onToggle();
    },
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'rgb(163,163,163)',
      background: 'rgba(255,255,255,0.05)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + (toggle.open ? 'fa-chevron-up' : 'fa-chevron-down'),
    style: {
      fontSize: 9
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "General"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    title: "Close profile",
    "aria-label": "Close profile",
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: 'none',
      color: 'rgb(163,163,163)',
      cursor: 'pointer',
      width: 24,
      height: 24,
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      width: 13,
      height: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: clientName,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, clientName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, me.household, " \xB7 Client since ", me.client_since_year, " \xB7 Age ", me.age))), /*#__PURE__*/React.createElement(Contact, {
    name: clientName
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(CDChip, {
    tone: "good"
  }, me.status || 'Active'), /*#__PURE__*/React.createElement(CDChip, null, me.segment), /*#__PURE__*/React.createElement(CDChip, null, 'Risk ' + me.risk_score + ' · ' + cdRiskLabel(me.risk_score || 0)))), members.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderTop: '1px solid rgba(75,85,99,0.5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cap
  }, "Household members"), members.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.client,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.client,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, m.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginTop: 1
    }
  }, m.household_role || 'Member', " \xB7 Age ", m.age))), /*#__PURE__*/React.createElement(Contact, {
    name: m.client
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 10px 10px',
      borderTop: '1px solid rgba(75,85,99,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cap,
      padding: '0 6px 6px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Accounts \xB7 viewing"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 0,
      textTransform: 'none',
      fontWeight: 500
    }
  }, dmFmt(total, 'usd'))), /*#__PURE__*/React.createElement(Row, {
    active: sc.mode === 'household',
    title: (me.household || 'Household') + ' \u00b7 all accounts',
    meta: all.length + ' accounts \u00b7 ' + dmFmt(total, 'usd'),
    onClick: () => pick({
      mode: 'household',
      person: null,
      accountId: null
    })
  }), people.map(p => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.name
  }, /*#__PURE__*/React.createElement(Row, {
    active: sc.mode === 'person' && sc.person === p.name,
    title: p.name + ' \u00b7 all accounts',
    meta: p.accounts.length + ' account' + (p.accounts.length === 1 ? '' : 's') + ' \u00b7 ' + dmFmt(p.mv, 'usd'),
    onClick: () => pick({
      mode: 'person',
      person: p.name,
      accountId: null
    }),
    toggle: p.accounts.length ? {
      open: isOpen(p.name),
      onToggle: () => setOpenP(o => ({
        ...o,
        [p.name]: !isOpen(p.name)
      }))
    } : null
  }), isOpen(p.name) && p.accounts.map(acct => /*#__PURE__*/React.createElement(Row, {
    key: acct.account_id,
    indent: true,
    active: sc.mode === 'account' && sc.accountId === acct.account,
    title: cdAcctLabel(acct),
    meta: acct.account_number + ' \u00b7 ' + acct.custodian + ' \u00b7 ' + dmFmt(acct.market_value, 'usd'),
    onClick: () => pick({
      mode: 'account',
      person: acct.client,
      accountId: acct.account
    })
  }))))));
}

/* Root */
function ClientDetail({
  clientName = 'David Young',
  onBack,
  highlightOpp,
  editing,
  onDirtyChange,
  period: periodProp,
  setPeriod: setPeriodProp,
  scope: scopeProp,
  setScope: setScopeProp
}) {
  const [periodInternal, setPeriodInternal] = React.useState('Year to date');
  const [scopeInternal, setScopeInternal] = React.useState({
    mode: 'household',
    person: null,
    accountId: null,
    client: clientName
  });
  const scope = scopeProp || scopeInternal;
  const setScope = setScopeProp || setScopeInternal;
  React.useEffect(() => {
    setScope(s => s && s.client === clientName ? s : {
      mode: 'household',
      person: null,
      accountId: null,
      client: clientName
    });
  }, [clientName]);
  const period = periodProp != null ? periodProp : periodInternal;
  const setPeriod = setPeriodProp || setPeriodInternal;
  const Provider = window.PeriodContext && window.PeriodContext.Provider || React.Fragment;
  const providerProps = window.PeriodContext ? {
    value: period
  } : {};
  const [tabs, setTabs] = useClientTabs();
  const [tab, setTabRaw] = React.useState('overview');
  React.useEffect(() => {
    setTabRaw('overview');
  }, [clientName]);
  const setTab = id => setTabRaw(id);
  const curTab = tabs.find(t => t.id === tab && !t.hidden) || tabs[0];
  const cur = curTab.id;
  React.useEffect(() => {
    window.__clientTab = {
      id: cur,
      name: curTab.name
    };
    window.dispatchEvent(new CustomEvent('clienttab:change', {
      detail: window.__clientTab
    }));
  }, [cur, curTab.name]);
  const [panelOpen, setPanelOpen] = useCDPanelOpen();
  const [treeOpen, setTreeOpen] = useCDTreeOpen();
  React.useEffect(() => {
    setTreeOpen(false);
  }, [clientName]);
  React.useEffect(() => {
    if (treeOpen) setPanelOpen(false);
  }, [treeOpen]);
  React.useEffect(() => {
    if (panelOpen) setTreeOpen(false);
  }, [panelOpen]);
  const [vw, setVw] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const on = () => setVw(window.innerWidth);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const overlay = vw < 1100;
  const panel = /*#__PURE__*/React.createElement(CDProfilePanel, {
    clientName: clientName,
    scope: scope,
    setScope: setScope,
    onClose: () => setPanelOpen(false)
  });
  const panelBox = {
    background: 'rgb(17,24,39)',
    border: '1px solid rgb(75,85,99)',
    borderRadius: 12,
    overflowY: 'auto'
  };
  const [hdrH, setHdrH] = React.useState(64);
  React.useLayoutEffect(() => {
    const h = document.querySelector('header');
    if (h) setHdrH(Math.round(h.getBoundingClientRect().height));
  }, [panelOpen]);
  const addTab = name => {
    const id = ctNewId(name);
    setTabs(ts => [...ts, {
      id,
      name
    }]);
    setTab(id);
    setTimeout(() => window.dispatchEvent(new Event('dash:edit')), 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Provider, providerProps, /*#__PURE__*/React.createElement(CDScopeContext.Provider, {
    value: scope
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 0,
      minWidth: 0
    }
  }, panelOpen && !overlay && /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '0 0 320px',
      width: 320,
      position: 'sticky',
      top: hdrH,
      height: 'calc(100vh - ' + hdrH + 'px)',
      overflowY: 'auto',
      boxSizing: 'border-box',
      background: 'rgba(3,7,18,0.45)',
      borderRight: '1px solid rgba(75,85,99,0.55)',
      animation: 'cdPanelIn 200ms ease-out'
    }
  }, panel), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '8px 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, !treeOpen && /*#__PURE__*/React.createElement(CDTabBar, {
    tabs: tabs,
    active: cur,
    onChange: id => setTab(id),
    onAdd: n => addTab(n)
  }), treeOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '-8px -24px -32px'
    }
  }, /*#__PURE__*/React.createElement(CDProfileStrip, {
    clientName: clientName,
    onClose: () => setTreeOpen(false)
  }), /*#__PURE__*/React.createElement(CDFamilyTreeView, {
    clientName: clientName
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CDProfileGrid, null, /*#__PURE__*/React.createElement(CDBuilderSlot, {
    clientName: clientName,
    period: period,
    editing: editing,
    onDirtyChange: onDirtyChange,
    tab: cur,
    tabs: tabs
  }))))), /*#__PURE__*/React.createElement("style", null, '@keyframes cdPanelIn{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:none}}'), panelOpen && overlay && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPanelOpen(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(2,6,12,0.45)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      ...panelBox,
      position: 'absolute',
      top: 12,
      left: 12,
      bottom: 12,
      width: 'min(360px, calc(100vw - 24px))',
      boxShadow: '0 24px 56px -16px rgba(0,0,0,0.8)',
      animation: 'cdPanelIn 200ms ease-out'
    }
  }, panel)), document.body))));
}

/* ── Topbar header for the client page: who you're looking at, and which slice ── */
function CDClientTitle({
  clientName,
  scope
}) {
  const sc = scope && scope.client === clientName ? scope : {
    mode: 'household'
  };
  const all = cdAccounts(clientName);
  const viewing = sc.mode === 'household' ? null : sc.mode === 'person' ? sc.person.split(' ')[0] + '’s accounts' : cdAcctLabel(all.find(a => a.account === sc.accountId) || {});
  const [open, setOpen] = useCDTreeOpen();
  const [hover, setHover] = React.useState(false);
  const first = (clientName || '').split(' ')[0];
  return /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: () => setOpen(!open),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": open,
    title: open ? 'Back to ' + first + '’s overview' : 'Family & relationships: ' + first + '’s profile and family tree' + (viewing ? ' (viewing ' + viewing + ')' : ''),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 34,
      padding: '0 10px 0 5px',
      marginLeft: -5,
      borderRadius: 9,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 15,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap',
      border: '1px solid ' + (open ? 'rgba(16,185,129,0.55)' : hover ? 'rgb(75,85,99)' : 'transparent'),
      background: open ? 'rgba(5,122,85,0.16)' : hover ? 'rgba(255,255,255,0.05)' : 'transparent',
      transition: 'background 120ms, border-color 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 9999,
      background: CD_AVA[cdHash(clientName || 'x') % CD_AVA.length],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      border: '1px solid rgba(255,255,255,0.15)',
      flexShrink: 0
    }
  }, (clientName || '?')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: 150,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, clientName), /*#__PURE__*/React.createElement("span", {
    "aria-label": open ? 'Back to overview' : 'Family & relationships',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 24,
      marginLeft: 2,
      borderRadius: 6,
      flexShrink: 0,
      color: open ? 'rgb(167,243,208)' : 'rgb(52,211,153)',
      background: open ? 'rgba(16,185,129,0.22)' : hover ? 'rgba(16,185,129,0.18)' : 'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,' + (open || hover ? '0.55' : '0.35') + ')'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + (open ? 'fa-arrow-left' : 'fa-people-roof'),
    style: {
      fontSize: 11
    }
  })));
}

/* ── Banner under the topbar when the page shows part of the household ── */
function CDScopeBanner({
  clientName,
  scope,
  setScope
}) {
  const sc = scope && scope.client === clientName ? scope : null;
  if (!sc || sc.mode === 'household') return null;
  const all = cdAccounts(clientName),
    total = all.reduce((x, a) => x + a.market_value, 0);
  const accts = all.filter(a => cdMatches(sc, a)),
    mv = accts.reduce((x, a) => x + a.market_value, 0);
  const a0 = accts[0] || {};
  const title = sc.mode === 'account' ? cdAcctLabel(a0) : 'All of ' + sc.person.split(' ')[0] + '’s accounts';
  const meta = sc.mode === 'account' ? ' · ' + [a0.account_number, a0.custodian, a0.client].filter(Boolean).join(' · ') : ' · ' + accts.length + ' account' + (accts.length === 1 ? '' : 's');
  const house = cdHouseOf(clientName);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 24px 0',
      padding: '10px 14px',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap',
      fontFamily: 'Inter',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(75,85,99,0.6)',
      borderLeft: '3px solid rgb(16,185,129)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + (sc.mode === 'account' ? 'fa-building-columns' : 'fa-user'),
    style: {
      fontSize: 12,
      color: 'rgb(52,211,153)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, "Viewing ", title, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'rgb(156,163,175)'
    }
  }, meta)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(209,213,219)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, dmFmt(mv, 'usd'), " \xB7 ", total ? Math.round(mv / total * 100) : 0, "% of the ", house), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: () => setScope({
      mode: 'household',
      person: null,
      accountId: null,
      client: clientName
    }),
    style: {
      height: 28,
      padding: '0 10px',
      borderRadius: 7,
      background: 'transparent',
      border: '1px solid rgba(75,85,99,0.6)',
      color: 'rgb(209,213,219)',
      fontFamily: 'Inter',
      fontSize: 11.5,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Show whole household"));
}

/* ── Profile tab: who the client is, then the family tree ── */
function CDProfileStrip({
  clientName,
  onClose
}) {
  const book = React.useMemo(() => dmRows('client_book'), []);
  const me = book.find(c => c.client === clientName) || {};
  const all = cdAccounts(clientName),
    people = cdPeople(clientName);
  const total = all.reduce((x, a) => x + a.market_value, 0);
  const item = (icon, text) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + icon,
    style: {
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }), text);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      fontFamily: 'Inter',
      borderTop: '1px solid rgba(75,85,99,0.5)',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 9999,
      background: CD_AVA[cdHash(clientName || 'x') % CD_AVA.length],
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 17,
      border: '1px solid rgba(255,255,255,0.15)'
    }
  }, (clientName || '?')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, clientName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, [me.household, me.client_since_year && 'Client since ' + me.client_since_year, me.age && 'Age ' + me.age].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(CDChip, {
    tone: "good"
  }, me.status || 'Active'), me.segment && /*#__PURE__*/React.createElement(CDChip, null, me.segment), me.risk_score != null && /*#__PURE__*/React.createElement(CDChip, null, 'Risk ' + me.risk_score + ' · ' + cdRiskLabel(me.risk_score || 0))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, item('envelope', cdEmail(clientName)), item('phone', cdPhone(clientName)), item('users', people.length + (people.length === 1 ? ' person · ' : ' people · ') + all.length + ' accounts · ' + dmFmt(total, 'usd'))), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    "aria-label": "Close profile",
    title: "Back to overview",
    onClick: () => onClose && onClose(),
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.6)',
      background: 'transparent',
      color: 'rgb(209,213,219)',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 12
    }
  })));
}
Object.assign(window, {
  CDClientTitle,
  CDScopeBanner,
  CDProfileStrip,
  cdAcctLabel,
  CD_AVA,
  cdHash,
  cdEmail,
  cdPhone,
  ClientDetail,
  CDClientMenu,
  CDProfilePanel,
  CDScopeBar,
  CDScopeContext,
  cdAccounts,
  cdPeople,
  cdPositions,
  cdTotals,
  cdScopeLabel
});
;
/* ---- advisor/ClientReports.jsx ---- */
/* Client Reports — David Young. Dense, tabular report view matching the Field Shadcn
   glass-tile aesthetic. Sections:
     1. 4 KPI tiles (Portfolio Value, Monthly Return, Annual Return, Risk Score)
     2. 12-month portfolio trend vs S&P 500 + allocation donut
     3. 4 metric tiles (Risk, Fees, Allocation, Income)
     4. Holdings table
     5. Recent Transactions table
*/

const CR_TILE = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgb(75,85,99)',
  borderRadius: 14,
  color: 'rgb(249,250,251)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
};
const CR_LABEL = {
  fontFamily: 'Inter',
  fontSize: 11,
  color: 'rgb(163,163,163)',
  letterSpacing: '0.01em'
};
const CR_VALUE = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: '-0.01em',
  fontVariantNumeric: 'tabular-nums'
};
const CR_TITLE = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: '-0.01em'
};
const CR_DIVIDER = '1px solid rgba(75,85,99,0.45)';
const CR_GREEN = 'rgb(5,122,85)';
const CR_GREEN_SOFT = 'rgba(5,122,85,0.18)';
const CR_RED = 'rgb(248,113,113)';
const CR_RED_SOFT = 'rgba(248,113,113,0.16)';
const CR_BLUE = 'rgb(56,189,248)';
const CR_BLUE_SOFT = 'rgba(56,189,248,0.18)';
const CR_AMBER = 'rgb(234,179,8)';

/* ---- 1. KPI tiles --------------------------------------------------- */
function CRKpi({
  label,
  value,
  sub,
  tone = 'green'
}) {
  const tones = {
    green: {
      v: CR_GREEN,
      s: 'rgb(163,163,163)'
    },
    amber: {
      v: CR_AMBER,
      s: 'rgb(163,163,163)'
    },
    red: {
      v: CR_RED,
      s: 'rgb(163,163,163)'
    },
    neutral: {
      v: 'rgb(249,250,251)',
      s: 'rgb(163,163,163)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '16px 18px',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_LABEL,
      textAlign: 'center'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_VALUE,
      color: tones.v,
      textAlign: 'center',
      fontSize: 18
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_LABEL,
      color: tones.s,
      textAlign: 'center'
    }
  }, sub));
}

/* ---- 2. Portfolio trend chart -------------------------------------- */
function PortfolioTrend() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const portfolio = [742, 748, 720, 764, 768, 780, 810, 798, 820, 838, 840, 856];
  const benchmark = [740, 744, 716, 758, 760, 770, 796, 788, 808, 824, 828, 840];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'area',
      height: 310,
      backgroundColor: 'transparent',
      spacing: [8, 8, 8, 8]
    },
    xAxis: {
      categories: months,
      lineColor: 'rgba(75,85,99,0.6)',
      tickColor: 'rgba(75,85,99,0.6)',
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      gridLineColor: 'rgba(75,85,99,0.35)',
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return '$' + this.value + 'K';
        },
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '11px'
        }
      },
      min: 700,
      max: 870
    },
    tooltip: {
      shared: true,
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgb(75,85,99)',
      style: {
        color: 'rgb(249,250,251)',
        fontSize: '11px'
      },
      formatter: function () {
        return `<b>${this.x}</b><br/>` + this.points.map(p => `<span style="color:${p.color}">●</span> ${p.series.name}: <b>$${p.y}K</b>`).join('<br/>');
      }
    },
    plotOptions: {
      area: {
        marker: {
          enabled: true,
          radius: 3.5,
          fillColor: 'rgb(10,10,10)',
          lineWidth: 2
        },
        lineWidth: 2
      },
      series: {
        states: {
          hover: {
            lineWidth: 2.5
          }
        }
      }
    },
    series: [{
      name: 'Portfolio Value',
      data: portfolio,
      color: CR_GREEN,
      marker: {
        lineColor: CR_GREEN
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [[0, 'rgba(5,122,85,0.35)'], [1, 'rgba(5,122,85,0)']]
      }
    }, {
      name: 'S&P 500 Benchmark',
      data: benchmark,
      color: 'rgb(160,170,185)',
      dashStyle: 'Dash',
      fillColor: 'rgba(0,0,0,0)',
      marker: {
        enabled: true,
        radius: 3,
        symbol: 'circle',
        fillColor: 'transparent',
        lineWidth: 1.5,
        lineColor: 'rgb(160,170,185)'
      }
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), []);
  const Dot = ({
    c,
    label,
    dashed
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, dashed ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 9999,
      border: '1.5px solid ' + c,
      background: 'transparent'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 9999,
      background: c
    }
  }), label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '14px 16px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CR_TITLE
  }, "Portfolio Performance"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(209,213,219)',
      background: 'rgba(17,24,39,0.7)',
      border: '1px solid rgba(75,85,99,0.8)',
      borderRadius: 6,
      padding: '3px 8px'
    }
  }, "12 Month Trend")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 310
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 22,
      paddingTop: 8,
      marginTop: 4,
      borderTop: CR_DIVIDER
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    c: CR_GREEN,
    label: "Portfolio Value"
  }), /*#__PURE__*/React.createElement(Dot, {
    c: "rgb(163,163,163)",
    label: "S&P 500 Benchmark",
    dashed: true
  })));
}

/* ---- Allocation donut ---------------------------------------------- */
function AllocationDonut() {
  const data = [{
    name: 'Domestic Stock Funds',
    y: 62,
    fill: 'rgba( 94,214,164,0.55)',
    dot: 'rgb( 94,214,164)',
    amt: '$529,220'
  }, {
    name: 'Bond Funds',
    y: 18,
    fill: 'rgba(120,160,230,0.55)',
    dot: 'rgb(120,160,230)',
    amt: '$153,720'
  }, {
    name: 'International Equities',
    y: 11,
    fill: 'rgba(180,150,235,0.55)',
    dot: 'rgb(180,150,235)',
    amt: '$93,940'
  }, {
    name: 'Cash',
    y: 5,
    fill: 'rgba(245,200, 90,0.55)',
    dot: 'rgb(245,200, 90)',
    amt: '$42,700'
  }, {
    name: 'Alternatives',
    y: 4,
    fill: 'rgba(240,140,120,0.55)',
    dot: 'rgb(240,140,120)',
    amt: '$34,160'
  }];
  const opts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height: 260,
      backgroundColor: 'transparent',
      spacing: [4, 4, 4, 4]
    },
    tooltip: {
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgb(75,85,99)',
      style: {
        color: 'rgb(249,250,251)',
        fontSize: '11px'
      },
      pointFormat: '<b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
      pie: {
        innerSize: '68%',
        borderWidth: 1.5,
        borderRadius: 0,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            brightness: 0.08,
            halo: {
              size: 6,
              opacity: 0.2
            }
          }
        }
      }
    },
    series: [{
      data: data.map(d => ({
        name: d.name,
        y: d.y,
        color: d.fill,
        borderColor: d.dot
      }))
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TITLE,
      marginBottom: 6
    }
  }, "Allocation"), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6px 12px',
      paddingTop: 10,
      marginTop: 6,
      borderTop: CR_DIVIDER
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: d.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, d.name)))));
}

/* ---- 3. Metric tiles (Risk / Fees / Allocation / Income) ----------- */
function MetricList({
  title,
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TITLE,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : CR_DIVIDER,
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)'
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: r.tone === 'red' ? CR_RED : r.tone === 'green' ? CR_GREEN : 'rgb(249,250,251)',
      fontWeight: r.v ? 600 : 400,
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.v || /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(107,114,128)',
      fontStyle: 'italic'
    }
  }, "\u2014"))))));
}

/* ---- 4. Holdings table --------------------------------------------- */
function HoldingsTable() {
  const rows = [{
    sec: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    sh: '420',
    mv: '$198,240',
    pct: '23.2%',
    ytd: '+18.2%',
    tone: 'green',
    basis: '$167,520'
  }, {
    sec: 'AAPL',
    name: 'Apple Inc.',
    sh: '310',
    mv: '$72,640',
    pct: '8.5%',
    ytd: '+24.6%',
    tone: 'green',
    basis: '$58,280'
  }, {
    sec: 'MSFT',
    name: 'Microsoft Corp.',
    sh: '155',
    mv: '$68,915',
    pct: '8.1%',
    ytd: '+16.8%',
    tone: 'green',
    basis: '$58,990'
  }, {
    sec: 'AGG',
    name: 'iShares Core US Agg Bond',
    sh: '820',
    mv: '$81,180',
    pct: '9.5%',
    ytd: '-2.4%',
    tone: 'red',
    basis: '$83,180'
  }, {
    sec: 'AMZN',
    name: 'Amazon.com Inc.',
    sh: '210',
    mv: '$47,460',
    pct: '5.6%',
    ytd: '+38.4%',
    tone: 'green',
    basis: '$34,300'
  }, {
    sec: 'BRK.B',
    name: 'Berkshire Hathaway B',
    sh: '125',
    mv: '$59,125',
    pct: '6.9%',
    ytd: '+11.3%',
    tone: 'green',
    basis: '$53,125'
  }];
  const headSt = {
    fontFamily: 'Inter',
    fontSize: 10.5,
    fontWeight: 600,
    color: 'rgb(163,163,163)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '12px 14px'
  };
  const cellSt = {
    fontFamily: 'Inter',
    fontSize: 12.5,
    color: 'rgb(229,231,235)',
    padding: '14px 14px',
    fontVariantNumeric: 'tabular-nums',
    borderTop: CR_DIVIDER
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '14px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TITLE,
      padding: '0 16px 8px'
    }
  }, "Holdings"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'left'
    }
  }, "Security"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Shares/Units"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Market Value"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "% of Portfolio"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "YTD Return"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Cost Basis"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, r.sec), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, r.name)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right'
    }
  }, r.sh), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right',
      fontWeight: 600
    }
  }, r.mv), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right'
    }
  }, r.pct), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right',
      color: r.tone === 'red' ? CR_RED : CR_GREEN,
      fontWeight: 600
    }
  }, r.ytd), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right'
    }
  }, r.basis)))))));
}

/* ---- 5. Transactions table ----------------------------------------- */
function TransactionsTable() {
  const rows = [{
    date: 'Dec 18, 2025',
    type: 'BUY',
    sec: 'NVDA',
    qty: '42',
    price: '$577.62',
    amt: '-$24,260',
    tone: 'red',
    bal: 'Cash ↓'
  }, {
    date: 'Dec 15, 2025',
    type: 'SELL',
    sec: 'TSLA',
    qty: '75',
    price: '$248.49',
    amt: '+$18,637',
    tone: 'green',
    bal: 'Cash ↑'
  }, {
    date: 'Dec 10, 2025',
    type: 'BUY',
    sec: 'VOO',
    qty: '20',
    price: '$480.20',
    amt: '-$9,604',
    tone: 'red',
    bal: 'Cash ↓'
  }, {
    date: 'Dec 05, 2025',
    type: 'DIV',
    sec: 'AAPL',
    qty: '—',
    price: '—',
    amt: '+$180',
    tone: 'green',
    bal: 'Cash ↑'
  }, {
    date: 'Dec 01, 2025',
    type: 'BUY',
    sec: 'MSFT',
    qty: '28',
    price: '$445.43',
    amt: '-$12,472',
    tone: 'red',
    bal: 'Cash ↓'
  }, {
    date: 'Nov 24, 2025',
    type: 'SELL',
    sec: 'META',
    qty: '41',
    price: '$549.41',
    amt: '+$22,526',
    tone: 'green',
    bal: 'Cash ↑'
  }];
  const badge = t => {
    const map = {
      BUY: {
        bg: CR_GREEN_SOFT,
        bd: 'rgba(5,122,85,0.55)',
        c: 'rgb(52,211,153)'
      },
      SELL: {
        bg: CR_RED_SOFT,
        bd: 'rgba(248,113,113,0.55)',
        c: 'rgb(252,165,165)'
      },
      DIV: {
        bg: CR_BLUE_SOFT,
        bd: 'rgba(56,189,248,0.55)',
        c: 'rgb(125,211,252)'
      }
    }[t];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: 9999,
        background: map.bg,
        border: '1px solid ' + map.bd,
        color: map.c,
        fontFamily: 'Inter',
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '0.04em'
      }
    }, t);
  };
  const headSt = {
    fontFamily: 'Inter',
    fontSize: 10.5,
    fontWeight: 600,
    color: 'rgb(163,163,163)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '12px 14px'
  };
  const cellSt = {
    fontFamily: 'Inter',
    fontSize: 12.5,
    color: 'rgb(229,231,235)',
    padding: '13px 14px',
    fontVariantNumeric: 'tabular-nums',
    borderTop: CR_DIVIDER
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...CR_TILE,
      padding: '14px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CR_TITLE
  }, "Recent Transactions"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Last 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'left'
    }
  }, "Transaction Type"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'left'
    }
  }, "Security"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Quantity"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Price"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...headSt,
      textAlign: 'right'
    }
  }, "Balance Impact"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'left',
      color: 'rgb(209,213,219)'
    }
  }, r.date), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'left'
    }
  }, badge(r.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'left',
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, r.sec), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right'
    }
  }, r.qty), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right'
    }
  }, r.price), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right',
      color: r.tone === 'red' ? CR_RED : CR_GREEN,
      fontWeight: 600
    }
  }, r.amt), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cellSt,
      textAlign: 'right',
      color: r.tone === 'red' ? CR_RED : CR_GREEN
    }
  }, r.bal)))))));
}

/* ---- Root ---------------------------------------------------------- */
function ClientReports() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CRKpi, {
    label: "Total Portfolio Value",
    value: "+12.4% YTD",
    tone: "green"
  }), /*#__PURE__*/React.createElement(CRKpi, {
    label: "Monthly Return",
    value: "+0.6% vs benchmark",
    tone: "green"
  }), /*#__PURE__*/React.createElement(CRKpi, {
    label: "Annual Return",
    value: "Outperforming S&P 500",
    tone: "green"
  }), /*#__PURE__*/React.createElement(CRKpi, {
    label: "Risk Score",
    value: "Moderate Risk",
    tone: "amber"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PortfolioTrend, null), /*#__PURE__*/React.createElement(AllocationDonut, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MetricList, {
    title: "Risk Metrics",
    rows: [{
      k: 'Beta (Market Risk)',
      v: '0.92'
    }, {
      k: 'Sharpe Ratio',
      v: '1.34'
    }, {
      k: 'Alpha (Excess Return)',
      v: '+2.8%',
      tone: 'green'
    }, {
      k: 'Standard Deviation',
      v: '11.4%'
    }, {
      k: 'Maximum Drawdown',
      v: '-8.2%',
      tone: 'red'
    }]
  }), /*#__PURE__*/React.createElement(MetricList, {
    title: "Fees & Expenses",
    rows: [{
      k: 'Advisory Fee (1.25% annually)',
      v: '-$10,591',
      tone: 'red'
    }, {
      k: 'Fund Expense Ratios',
      v: '-$2,847',
      tone: 'red'
    }, {
      k: 'Trading Commissions',
      v: '-$245',
      tone: 'red'
    }, {
      k: 'Total Annual Fees',
      v: '-$13,683',
      tone: 'red'
    }, {
      k: 'Net Fee Rate',
      v: '1.61%'
    }]
  }), /*#__PURE__*/React.createElement(MetricList, {
    title: "Asset Class Exposure",
    rows: [{
      k: 'US Equities',
      v: '62%'
    }, {
      k: 'International Equities',
      v: '11%'
    }, {
      k: 'Fixed Income',
      v: '18%'
    }, {
      k: 'Cash & Equivalents',
      v: '5%'
    }, {
      k: 'Alternative Investments',
      v: '4%'
    }]
  }), /*#__PURE__*/React.createElement(MetricList, {
    title: "Income Generation",
    rows: [{
      k: 'Quarterly Dividend Income',
      v: '$4,285'
    }, {
      k: 'Annual Dividend Yield',
      v: '2.18%'
    }, {
      k: 'Interest Income',
      v: '$1,840'
    }, {
      k: 'Total Income YTD',
      v: '$24,500'
    }, {
      k: 'Tax-Efficient Income',
      v: '$8,420'
    }]
  })), /*#__PURE__*/React.createElement(HoldingsTable, null), /*#__PURE__*/React.createElement(TransactionsTable, null));
}
Object.assign(window, {
  ClientReports
});
;
/* ---- advisor/ClientInvoices.jsx ---- */
/* Client invoices — a tile listing every fee invoice issued to the household,
   and the invoice document itself. Built from the account records in scope. */

const CI_PERIODS = [{
  q: 'Q3 2026',
  start: '7/1/2026',
  end: '9/30/2026',
  date: 'September 30, 2026',
  short: 'Sep 30, 2026',
  days: 92,
  i: 4
}, {
  q: 'Q2 2026',
  start: '4/1/2026',
  end: '6/30/2026',
  date: 'June 30, 2026',
  short: 'Jun 30, 2026',
  days: 91,
  i: 3
}, {
  q: 'Q1 2026',
  start: '1/1/2026',
  end: '3/31/2026',
  date: 'March 31, 2026',
  short: 'Mar 31, 2026',
  days: 90,
  i: 2
}, {
  q: 'Q4 2025',
  start: '10/1/2025',
  end: '12/31/2025',
  date: 'December 31, 2025',
  short: 'Dec 31, 2025',
  days: 92,
  i: 1
}, {
  q: 'Q3 2025',
  start: '7/1/2025',
  end: '9/30/2025',
  date: 'September 30, 2025',
  short: 'Sep 30, 2025',
  days: 92,
  i: 0
}];
const ciUsd = v => '$' + (v || 0).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const ciPct = v => (v || 0).toFixed(2) + '%';
function ciBuild(accounts, household) {
  return CI_PERIODS.map(p => {
    const lines = accounts.map(a => {
      const val = Math.round(a.market_value * (0.9 + p.i * 0.035) * 100) / 100;
      const bill = Math.round(val * 1.0135 * 100) / 100;
      const fee = Math.round(bill * (a.fee_rate / 100) * p.days / 365 * 100) / 100;
      return {
        name: a.account,
        sub: (a.account_number || '').replace(/\u2022+/, 'XXXXX ') + ', ' + a.custodian,
        val,
        bill,
        fee,
        rate: a.fee_rate
      };
    });
    const sum = k => lines.reduce((s, l) => s + l[k], 0);
    const val = sum('val'),
      bill = sum('bill'),
      fee = sum('fee');
    return {
      ...p,
      id: 'INV-' + p.q.replace(' ', '-'),
      household,
      lines,
      val,
      bill,
      fee,
      annual: fee * 365 / p.days,
      rate: bill ? fee * 365 / p.days / bill * 100 : 0,
      advisor: (accounts[0] || {}).advisor || 'Your advisor'
    };
  });
}
function ciScoped(scope) {
  const fs = scope && scope.extraFilters ? scope.extraFilters('raw_accounts') : [];
  const accts = dmRows('raw_accounts').filter(a => a.status !== 'Closed' && fs.every(f => dmMatchFilter(a, f)));
  const house = (fs.find(f => f.k === 'household') || {}).v || (accts[0] || {}).household || 'Household';
  return {
    accts,
    house
  };
}
function ClientInvoiceList({
  scope
}) {
  const {
    accts,
    house
  } = React.useMemo(() => ciScoped(scope), [scope && scope.key]);
  const invoices = React.useMemo(() => ciBuild(accts, house), [accts, house]);
  const [open, setOpen] = React.useState(null);
  const cap = {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'rgb(163,163,163)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '2px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Fees billed \xB7 last 4 qtrs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, ciUsd(invoices.slice(0, 4).reduce((s, v) => s + v.fee, 0)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, "Effective rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, ciPct(invoices[0].rate)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr) auto',
      gap: 10,
      padding: '7px 2px',
      borderTop: '1px solid rgba(75,85,99,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, "Invoice"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      textAlign: 'right'
    }
  }, "Fee"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      width: 62
    }
  }, "Status")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      minHeight: 0,
      flex: 1
    }
  }, invoices.map((inv, k) => /*#__PURE__*/React.createElement("button", {
    key: inv.id,
    onClick: () => setOpen(k),
    "data-no-hint": true,
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr) auto',
      gap: 10,
      alignItems: 'center',
      padding: '8px 2px',
      background: 'transparent',
      border: 'none',
      borderTop: '1px solid rgba(75,85,99,0.4)',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, inv.short), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(163,163,163)',
      marginTop: 1
    }
  }, inv.q, " \xB7 ", inv.days, " days \xB7 ", inv.lines.length, " accts")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      color: 'rgb(249,250,251)'
    }
  }, ciUsd(inv.fee)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'rgb(110,231,183)',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, "Debited ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 8.5,
      color: 'rgb(163,163,163)',
      marginLeft: 'auto'
    }
  }))))), open != null && /*#__PURE__*/React.createElement(ClientInvoiceViewer, {
    invoices: invoices,
    index: open,
    setIndex: setOpen,
    onClose: () => setOpen(null)
  }));
}
function ClientInvoiceViewer({
  invoices,
  index,
  setIndex,
  onClose
}) {
  const inv = invoices[index];
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const ink = 'rgb(17,24,39)',
    mute = 'rgb(75,85,99)',
    line = 'rgb(229,231,235)';
  const navBtn = dis => ({
    width: 32,
    height: 32,
    borderRadius: 8,
    border: '1px solid rgb(75,85,99)',
    background: 'rgba(255,255,255,0.05)',
    color: dis ? 'rgb(75,85,99)' : 'rgb(229,231,235)',
    cursor: dis ? 'default' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  const th = {
    fontSize: 11,
    fontWeight: 500,
    color: mute,
    padding: '0 10px 10px',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  };
  const td = {
    fontSize: 12.5,
    padding: '12px 10px',
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  };
  const sumRows = [['Assets Under Management', 'As of ' + inv.date, ciUsd(inv.val)], ['Billable Balance', null, ciUsd(inv.bill)], ['Management Fee', 'For the current period (see account details, below)', ciUsd(inv.fee), ciUsd(inv.annual) + ' per annum'], ['Amount Due', ciUsd(inv.fee) + ' will be directly withdrawn from your custodian', ciUsd(0)], ['Effective Rate', null, ciPct(inv.rate)]];
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 980,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 600,
      color: 'rgb(249,250,251)'
    }
  }, inv.household, " \xB7 ", inv.q, " invoice"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(163,163,163)'
    }
  }, index + 1, " of ", invoices.length), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    title: "Newer",
    disabled: index === 0,
    onClick: () => setIndex(index - 1),
    style: navBtn(index === 0)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left",
    style: {
      fontSize: 11
    }
  })), /*#__PURE__*/React.createElement("button", {
    title: "Older",
    disabled: index === invoices.length - 1,
    onClick: () => setIndex(index + 1),
    style: navBtn(index === invoices.length - 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 11
    }
  })), /*#__PURE__*/React.createElement("button", {
    title: "Close",
    onClick: onClose,
    style: navBtn(false)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 12
    }
  })))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 980,
      background: '#fff',
      color: ink,
      borderRadius: 12,
      padding: '40px 44px 44px',
      boxSizing: 'border-box',
      fontFamily: 'Inter',
      boxShadow: '0 30px 70px -20px rgba(0,0,0,0.8)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: '0.02em',
      lineHeight: 1
    }
  }, "INVOICE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: mute,
      marginTop: 6,
      letterSpacing: '0.04em'
    }
  }, "THIS IS NOT A BILL")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid ' + line,
      borderRadius: 8,
      padding: '10px 14px',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gap: '6px 20px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: mute
    }
  }, "Invoice Date"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontWeight: 500
    }
  }, inv.date), /*#__PURE__*/React.createElement("span", {
    style: {
      color: mute
    }
  }, "Amount Due"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontWeight: 600
    }
  }, ciUsd(0)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 24,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: mute
    }
  }, "From"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 8,
      letterSpacing: '-0.01em'
    }
  }, inv.advisor)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: mute
    }
  }, "To"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 8,
      letterSpacing: '-0.01em'
    }
  }, inv.household))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      margin: '40px 0 14px'
    }
  }, "Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + line
    }
  }, sumRows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 16,
      padding: '12px 10px',
      borderBottom: '1px solid ' + line,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, r[0]), r[1] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: mute,
      marginTop: 3
    }
  }, r[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, r[2]), r[3] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: mute,
      marginTop: 3
    }
  }, r[3]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      margin: '40px 0 14px'
    }
  }, "Account Details"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'Inter',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: '1px solid ' + line
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left'
    }
  }, "Account"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Valuation"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Billable Balance"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'left'
    }
  }, "Period"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Fee"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Debit"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Effective Rate"))), /*#__PURE__*/React.createElement("tbody", null, inv.lines.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.name,
    style: {
      borderBottom: '1px solid ' + line
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'left',
      whiteSpace: 'normal'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: mute,
      marginTop: 3
    }
  }, l.sub)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(l.val)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(l.bill)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", null, inv.days, " days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: mute,
      marginTop: 3
    }
  }, inv.start, " to ", inv.end)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(l.fee)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(l.fee)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciPct(l.rate)))), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '2px solid rgb(209,213,219)',
      borderBottom: '1px solid ' + line,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'left'
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(inv.val)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(inv.bill)), /*#__PURE__*/React.createElement("td", {
    style: td
  }), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(inv.fee)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciUsd(inv.fee)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, ciPct(inv.rate)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      margin: '40px 0 10px'
    }
  }, "Agreement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.6,
      color: 'rgb(55,65,81)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Per your agreement with ", inv.advisor, ", the management fee ", ciUsd(inv.fee), " will be directly withdrawn from your financial institution, as applicable. This invoice documents you are responsible for paying ", ciUsd(0), " directly to your advisor."))), document.body);
}
Object.assign(window, {
  ClientInvoiceList,
  ClientInvoiceViewer
});
;
/* ---- advisor/AlertRules.jsx ---- */
/* Alert Rules — build notifications from the data we actually hold.
   Every metric here maps to a field in the Salesforce CRM record or the Orion
   feed (accounts, positions, tax-lots, transactions, model-portfolios,
   fee-schedules). No calendar, planning or goal data is referenced. */

const AR_GREEN = 'rgb(5,122,85)';
const AR_INK = 'rgb(249,250,251)';
const AR_MUTE = 'rgb(163,163,163)';
const AR_LINE = 'rgba(75,85,99,0.6)';
const AR_SURF = 'rgba(255,255,255,0.04)';
const AR_WINDOWS = ['1 day', '5 days', '30 days', '90 days', 'Year to date'];
const AR_METRICS = [{
  group: 'Balances & flows',
  items: [{
    id: 'bal_change',
    label: 'Account balance change',
    unit: '%',
    ops: ['drops by', 'rises by', 'moves by'],
    win: true,
    def: 5,
    src: 'positions'
  }, {
    id: 'bal_value',
    label: 'Account balance',
    unit: '$',
    ops: ['falls below', 'rises above'],
    def: 250000,
    src: 'positions'
  }, {
    id: 'net_flow',
    label: 'Net flows',
    unit: '$',
    ops: ['exceed', 'fall below'],
    win: true,
    def: 100000,
    src: 'transactions'
  }, {
    id: 'txn_amount',
    label: 'A single transaction',
    unit: '$',
    ops: ['exceeds'],
    win: true,
    def: 50000,
    src: 'transactions',
    qual: {
      label: 'Transaction type',
      options: ['Any type', 'Money out', 'Money in']
    }
  }, {
    id: 'hh_cash_pct',
    label: 'Cash as % of household',
    unit: '%',
    ops: ['rises above'],
    def: 10,
    src: 'positions'
  }, {
    id: 'cash_pct',
    label: 'Cash as % of account',
    unit: '%',
    ops: ['rises above', 'falls below'],
    def: 8,
    src: 'positions'
  }]
}, {
  group: 'Portfolio & risk',
  items: [{
    id: 'drift',
    label: 'Drift from model portfolio',
    unit: '%',
    ops: ['exceeds'],
    def: 5,
    src: 'positions + model-portfolios'
  }, {
    id: 'concentration',
    label: 'Single position weight',
    unit: '%',
    ops: ['exceeds'],
    def: 20,
    src: 'positions + securities'
  }, {
    id: 'rmd_open',
    label: 'Required distribution not taken',
    unit: 'years',
    ops: ['at age'],
    def: 73,
    src: 'accounts + transactions'
  }, {
    id: 'unreal_loss',
    label: 'Unrealized loss on a lot',
    unit: '$',
    ops: ['exceeds'],
    def: 10000,
    src: 'tax-lots'
  }, {
    id: 'risk_score',
    label: 'Account risk score',
    unit: '',
    ops: ['rises above', 'falls below'],
    def: 70,
    src: 'accounts'
  }]
}, {
  group: 'Operations',
  items: [{
    id: 'recon_status',
    label: 'Custodian recon status',
    unit: '',
    ops: ['is not matched'],
    noValue: true,
    src: 'accounts'
  }, {
    id: 'recon_age',
    label: 'Days since last reconciled',
    unit: 'days',
    ops: ['exceeds'],
    def: 3,
    src: 'accounts'
  }, {
    id: 'billing_due',
    label: 'Billing period ends',
    unit: 'days',
    ops: ['is within'],
    def: 7,
    src: 'fee-schedules'
  }]
}];
const AR_ALL_METRICS = AR_METRICS.flatMap(g => g.items);
const arMetric = id => AR_ALL_METRICS.find(m => m.id === id) || AR_ALL_METRICS[0];
const AR_SCOPES = ['All clients', 'My book only', 'Segment: Mass Affluent', 'Segment: High Net Worth', 'Segment: Ultra High Net Worth', 'Household: Young Household', 'Client: David Young', 'Client: Molly Abernathy', 'Taxable accounts only', 'Retirement accounts only'];
const AR_SEVERITIES = [{
  id: 'high',
  label: 'High',
  tone: 'danger'
}, {
  id: 'medium',
  label: 'Medium',
  tone: 'warning'
}, {
  id: 'info',
  label: 'Info',
  tone: 'info'
}];
function arFormatValue(m, v) {
  if (m.noValue) return '';
  if (m.unit === '$') return '$' + Number(v || 0).toLocaleString();
  if (m.unit === '%') return v + '%';
  if (m.unit === 'days') return v + ' days';
  return String(v);
}
function arSentence(r) {
  const m = arMetric(r.metric);
  const val = arFormatValue(m, r.value);
  const win = m.win ? ` over ${String(r.window).toLowerCase()}` : '';
  const qual = m.qual && r.qual && r.qual !== m.qual.options[0] ? ` (${r.qual})` : '';
  return `${m.label}${qual} ${r.op}${val ? ' ' + val : ''}${win}`;
}

/* Deterministic stand-in for the match count the rule engine would return */
function arMatchCount(r) {
  const s = r.metric + r.op + r.value + r.scope;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return h % 9;
}
const AR_DEFAULT_RULES = [{
  id: 'r1',
  name: 'Money leaving',
  metric: 'txn_amount',
  op: 'exceeds',
  value: 50000,
  window: '30 days',
  qual: 'Money out',
  scope: 'All clients',
  severity: 'high',
  channels: {
    inapp: true,
    email: true,
    digest: false
  },
  enabled: true
}, {
  id: 'r2',
  name: 'RMD due',
  metric: 'rmd_open',
  op: 'at age',
  value: 73,
  window: 'Year to date',
  scope: 'All clients',
  severity: 'high',
  channels: {
    inapp: true,
    email: true,
    digest: false
  },
  enabled: true
}, {
  id: 'r3',
  name: 'Concentrated position',
  metric: 'concentration',
  op: 'exceeds',
  value: 20,
  window: '1 day',
  scope: 'All clients',
  severity: 'medium',
  channels: {
    inapp: true,
    email: false,
    digest: true
  },
  enabled: true
}, {
  id: 'r4',
  name: 'Idle cash',
  metric: 'hh_cash_pct',
  op: 'rises above',
  value: 10,
  window: '1 day',
  scope: 'All clients',
  severity: 'medium',
  channels: {
    inapp: true,
    email: false,
    digest: true
  },
  enabled: true
}, {
  id: 'r5',
  name: 'New money in',
  metric: 'txn_amount',
  op: 'exceeds',
  value: 100000,
  window: '30 days',
  qual: 'Money in',
  scope: 'All clients',
  severity: 'info',
  channels: {
    inapp: true,
    email: false,
    digest: true
  },
  enabled: true
}];

/* ---- primitives --------------------------------------------------------- */
function ARLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: AR_MUTE,
      marginBottom: 7
    }
  }, children);
}
function ARSelect({
  value,
  onChange,
  options,
  groups,
  width
}) {
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      borderRadius: 7,
      color: AR_INK,
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500,
      padding: '8px 28px 8px 11px',
      cursor: 'pointer',
      width: width || 'auto',
      minWidth: 0,
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='7' viewBox='0 0 10 7'><path d='M1 1l4 4 4-4' fill='none' stroke='rgb(163,163,163)' stroke-width='1.6' stroke-linecap='round'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center'
    }
  }, groups ? groups.map(g => /*#__PURE__*/React.createElement("optgroup", {
    key: g.group,
    label: g.group,
    style: {
      background: 'rgb(17,24,39)'
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement("option", {
    key: it.id,
    value: it.id,
    style: {
      background: 'rgb(17,24,39)'
    }
  }, it.label)))) : options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      background: 'rgb(17,24,39)'
    }
  }, o)));
}
function ARNumber({
  value,
  onChange,
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      borderRadius: 7,
      overflow: 'hidden'
    }
  }, unit === '$' && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0 0 11px',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: AR_MUTE
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: AR_INK,
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      padding: '8px 6px 8px 9px',
      width: unit === '$' ? 96 : 62
    }
  }), unit && unit !== '$' && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 11px 0 0',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: AR_MUTE
    }
  }, unit));
}
function ARToggle({
  on,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 19,
      borderRadius: 9999,
      flexShrink: 0,
      position: 'relative',
      background: on ? AR_GREEN : 'rgba(255,255,255,0.08)',
      border: `1px solid ${on ? 'rgb(16,185,129)' : AR_LINE}`,
      transition: 'background 150ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 13,
      height: 13,
      borderRadius: 9999,
      background: '#fff',
      transition: 'left 150ms ease'
    }
  })), label);
}
function ARChip({
  active,
  onClick,
  tone,
  children
}) {
  const tones = {
    danger: {
      bg: 'rgba(220,38,38,0.18)',
      bd: 'rgb(220,38,38)',
      fg: 'rgb(248,113,113)'
    },
    warning: {
      bg: 'rgba(234,179,8,0.18)',
      bd: 'rgba(234,179,8,0.7)',
      fg: 'rgb(253,224,71)'
    },
    info: {
      bg: 'rgba(56,189,248,0.16)',
      bd: 'rgba(56,189,248,0.7)',
      fg: 'rgb(56,189,248)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      fontWeight: 600,
      padding: '6px 13px',
      borderRadius: 6,
      cursor: 'pointer',
      background: active ? t.bg : AR_SURF,
      border: `1px solid ${active ? t.bd : AR_LINE}`,
      color: active ? t.fg : 'rgb(209,213,219)'
    }
  }, children);
}

/* ---- builder ------------------------------------------------------------ */
function AlertRuleBuilder({
  initial,
  onSave,
  onCancel
}) {
  const [r, setR] = React.useState(() => initial || {
    id: 'r' + Date.now(),
    metric: 'bal_change',
    op: 'drops by',
    value: 5,
    window: '5 days',
    qual: 'Any type',
    scope: 'All clients',
    severity: 'high',
    channels: {
      inapp: true,
      email: false,
      digest: false
    },
    enabled: true,
    fired: 'Not yet triggered'
  });
  const m = arMetric(r.metric);
  const set = patch => setR(prev => ({
    ...prev,
    ...patch
  }));
  const setMetric = id => {
    const nm = arMetric(id);
    set({
      metric: id,
      op: nm.ops[0],
      value: nm.def != null ? nm.def : '',
      qual: nm.qual ? nm.qual.options[0] : undefined
    });
  };
  const matches = window.arPreviewCount ? window.arPreviewCount(r) : arMatchCount(r);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${AR_LINE}`,
      borderLeft: `3px solid ${AR_GREEN}`,
      borderRadius: 12,
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 600,
      color: AR_INK
    }
  }, initial && !initial.draft ? 'Edit alert rule' : 'New alert rule'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: AR_MUTE
    }
  }, "Built on fields we sync today"), initial && initial.draft && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(110,231,183)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-magic-sparkles",
    style: {
      fontSize: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "Drafted from \"", initial.draft, "\" \xB7 check and adjust"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARLabel, null, "Name"), /*#__PURE__*/React.createElement("input", {
    value: r.name || '',
    onChange: e => set({
      name: e.target.value
    }),
    placeholder: arSentence(r),
    "aria-label": "Rule name",
    maxLength: 60,
    style: {
      width: '100%',
      maxWidth: 420,
      boxSizing: 'border-box',
      height: 34,
      padding: '0 11px',
      borderRadius: 7,
      outline: 'none',
      background: 'rgba(0,0,0,0.25)',
      border: '1px solid ' + AR_LINE,
      color: AR_INK,
      fontFamily: 'Inter',
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: AR_MUTE,
      marginTop: 6
    }
  }, "Shown on each insight this rule creates")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARLabel, null, "Notify me when"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ARSelect, {
    value: r.metric,
    onChange: setMetric,
    groups: AR_METRICS
  }), /*#__PURE__*/React.createElement(ARSelect, {
    value: r.op,
    onChange: v => set({
      op: v
    }),
    options: m.ops
  }), !m.noValue && /*#__PURE__*/React.createElement(ARNumber, {
    value: r.value,
    onChange: v => set({
      value: v
    }),
    unit: m.unit
  }), m.win && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: AR_MUTE
    }
  }, "over"), /*#__PURE__*/React.createElement(ARSelect, {
    value: r.window,
    onChange: v => set({
      window: v
    }),
    options: AR_WINDOWS
  })), m.qual && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: AR_MUTE
    }
  }, "type"), /*#__PURE__*/React.createElement(ARSelect, {
    value: r.qual || m.qual.options[0],
    onChange: v => set({
      qual: v
    }),
    options: m.qual.options
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: AR_MUTE,
      marginTop: 8
    }
  }, "Source: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)'
    }
  }, m.src))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARLabel, null, "Applies to"), /*#__PURE__*/React.createElement(ARSelect, {
    value: r.scope,
    onChange: v => set({
      scope: v
    }),
    options: AR_SCOPES,
    width: 280
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARLabel, null, "Severity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, AR_SEVERITIES.map(s => /*#__PURE__*/React.createElement(ARChip, {
    key: s.id,
    tone: s.tone,
    active: r.severity === s.id,
    onClick: () => set({
      severity: s.id
    })
  }, s.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARLabel, null, "Deliver to"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(ARToggle, {
    on: r.channels.inapp,
    label: "Insights inbox",
    onChange: v => set({
      channels: {
        ...r.channels,
        inapp: v
      }
    })
  }), /*#__PURE__*/React.createElement(ARToggle, {
    on: r.channels.email,
    label: "Email me",
    onChange: v => set({
      channels: {
        ...r.channels,
        email: v
      }
    })
  }), /*#__PURE__*/React.createElement(ARToggle, {
    on: r.channels.digest,
    label: "Daily digest",
    onChange: v => set({
      channels: {
        ...r.channels,
        digest: v
      }
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(5,122,85,0.10)',
      border: '1px solid rgba(5,122,85,0.45)',
      borderRadius: 9,
      padding: '11px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell",
    style: {
      width: 13,
      height: 13,
      color: 'rgb(16,185,129)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(229,231,235)',
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: AR_INK
    }
  }, r.name || arSentence(r)), " \u2014 ", r.scope.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: matches ? 'rgb(16,185,129)' : AR_MUTE,
      fontWeight: 600
    }
  }, matches ? `${matches} insight${matches > 1 ? 's' : ''} right now` : 'Nothing matches right now')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave(r),
    style: {
      background: AR_GREEN,
      border: `1px solid ${AR_GREEN}`,
      color: '#fff',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12,
      padding: '8px 16px',
      borderRadius: 7,
      cursor: 'pointer'
    }
  }, initial ? 'Save rule' : 'Create rule'), /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      color: 'rgb(229,231,235)',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12,
      padding: '8px 16px',
      borderRadius: 7,
      cursor: 'pointer'
    }
  }, "Cancel")));
}

/* ---- rule row ----------------------------------------------------------- */
function AlertRuleRow({
  rule,
  onToggle,
  onEdit,
  onDelete
}) {
  const sev = AR_SEVERITIES.find(s => s.id === rule.severity) || AR_SEVERITIES[2];
  const tones = {
    danger: 'rgb(220,38,38)',
    warning: 'rgb(234,179,8)',
    info: 'rgb(56,189,248)'
  };
  const bd = tones[sev.tone];
  const channels = [rule.channels.inapp && 'Inbox', rule.channels.email && 'Email', rule.channels.digest && 'Digest'].filter(Boolean).join(' · ') || 'No delivery';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${AR_LINE}`,
      borderLeft: `3px solid ${rule.enabled ? bd : 'rgba(75,85,99,0.8)'}`,
      borderRadius: 12,
      padding: '14px 18px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 14,
      alignItems: 'center',
      opacity: rule.enabled ? 1 : 0.62
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13.5,
      fontWeight: 600,
      color: AR_INK
    }
  }, rule.name || arSentence(rule)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 9.5,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '2px 7px',
      borderRadius: 4,
      color: bd,
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${bd}`
    }
  }, sev.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: AR_MUTE,
      marginTop: 5
    }
  }, rule.name ? arSentence(rule) + ' · ' : '', rule.scope, " \xB7 ", channels, " \xB7 ", window.arFiredText ? window.arFiredText(rule) : rule.fired)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ARToggle, {
    on: rule.enabled,
    onChange: () => onToggle(rule.id)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onEdit(rule),
    title: "Edit",
    style: {
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      color: 'rgb(209,213,219)',
      borderRadius: 6,
      width: 30,
      height: 28,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-pen-to-square",
    style: {
      width: 11,
      height: 11
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDelete(rule.id),
    title: "Delete",
    style: {
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      color: 'rgb(248,113,113)',
      borderRadius: 6,
      width: 30,
      height: 28,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-trash-can",
    style: {
      width: 11,
      height: 11
    }
  }))));
}

/* ---- panel -------------------------------------------------------------- */
function AlertRulesPanel() {
  const [rules, setRules] = React.useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem('adv.alert.rules.v3') || 'null');
      if (Array.isArray(s) && s.length) return s;
    } catch (e) {}
    return AR_DEFAULT_RULES;
  });
  const [editing, setEditing] = React.useState(() => {
    const p = window.__pendingAlertDraft;
    window.__pendingAlertDraft = null;
    return p || null;
  }); // null | 'new' | rule
  React.useEffect(() => {
    const on = e => {
      const r = e.detail && e.detail.rule;
      window.__pendingAlertDraft = null;
      if (r) setEditing(r);
    };
    window.addEventListener('alertrule:draft', on);
    return () => window.removeEventListener('alertrule:draft', on);
  }, []);
  React.useEffect(() => {
    try {
      localStorage.setItem('adv.alert.rules.v3', JSON.stringify(rules));
    } catch (e) {}
  }, [rules]);
  const save = r0 => {
    const {
      draft,
      ...r
    } = r0;
    setRules(prev => prev.some(x => x.id === r.id) ? prev.map(x => x.id === r.id ? r : x) : [r, ...prev]);
    setEditing(null);
  };
  const activeCount = rules.filter(r => r.enabled).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: AR_MUTE,
      flex: 1,
      minWidth: 200
    }
  }, activeCount, " of ", rules.length, " rules active \xB7 evaluated after each custodian sync"), !editing && /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditing('new'),
    style: {
      background: AR_GREEN,
      border: `1px solid ${AR_GREEN}`,
      color: '#fff',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 11.5,
      padding: '8px 14px',
      borderRadius: 7,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-plus",
    style: {
      width: 12,
      height: 12
    }
  }), " New rule")), editing && /*#__PURE__*/React.createElement(AlertRuleBuilder, {
    initial: editing === 'new' ? null : editing,
    onSave: save,
    onCancel: () => setEditing(null)
  }), rules.map(r => /*#__PURE__*/React.createElement(AlertRuleRow, {
    key: r.id,
    rule: r,
    onToggle: id => setRules(prev => prev.map(x => x.id === id ? {
      ...x,
      enabled: !x.enabled
    } : x)),
    onEdit: rule => setEditing(rule),
    onDelete: id => setRules(prev => prev.filter(x => x.id !== id))
  })), rules.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: AR_SURF,
      border: `1px solid ${AR_LINE}`,
      borderRadius: 12,
      padding: '40px 20px',
      textAlign: 'center',
      color: AR_MUTE,
      fontFamily: 'Inter',
      fontSize: 13
    }
  }, "No alert rules yet. Create one to start receiving notifications."));
}
Object.assign(window, {
  AlertRulesPanel,
  AlertRuleBuilder,
  AR_METRICS,
  arSentence
});
;
/* ---- advisor/NotificationsPage.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Notifications Page — full-width list view of all notifications with filter chips.
   Matches the Field Shadcn glass aesthetic. Each card is bordered left with a tone
   color (red=high, yellow=medium, blue=info, purple=private). Cards can have a
   dense "multi-client" variant with a bulleted breakdown, and an actions row.
*/

const NOTIF_TONES = {
  danger: {
    border: 'rgb(220,38,38)',
    iconBg: 'rgba(220,38,38,0.14)',
    iconFg: 'rgb(248,113,113)',
    dot: 'rgb(220,38,38)',
    tag: {
      bg: 'rgba(220,38,38,0.18)',
      fg: 'rgb(248,113,113)',
      border: '1px solid rgba(220,38,38,0.45)'
    }
  },
  warning: {
    border: 'rgb(234,179,8)',
    iconBg: 'rgba(234,179,8,0.14)',
    iconFg: 'rgb(253,224,71)',
    dot: 'rgb(234,179,8)',
    tag: {
      bg: 'rgba(234,179,8,0.18)',
      fg: 'rgb(253,224,71)',
      border: '1px solid rgba(234,179,8,0.5)'
    }
  },
  success: {
    border: 'rgb(5,122,85)',
    iconBg: 'rgba(5,122,85,0.18)',
    iconFg: 'rgb(16,185,129)',
    dot: 'rgb(5,122,85)',
    tag: {
      bg: 'rgba(5,122,85,0.22)',
      fg: 'rgb(16,185,129)',
      border: '1px solid rgba(5,122,85,0.5)'
    }
  },
  info: {
    border: 'rgb(56,189,248)',
    iconBg: 'rgba(56,189,248,0.14)',
    iconFg: 'rgb(56,189,248)',
    dot: 'rgb(56,189,248)',
    tag: {
      bg: 'rgba(56,189,248,0.18)',
      fg: 'rgb(56,189,248)',
      border: '1px solid rgba(56,189,248,0.5)'
    }
  },
  violet: {
    border: 'rgb(139,92,246)',
    iconBg: 'rgba(139,92,246,0.14)',
    iconFg: 'rgb(167,139,250)',
    dot: 'rgb(139,92,246)',
    tag: {
      bg: 'rgba(139,92,246,0.2)',
      fg: 'rgb(196,181,253)',
      border: '1px solid rgba(139,92,246,0.5)'
    }
  },
  mute: {
    border: 'rgba(75,85,99,0.8)',
    iconBg: 'rgba(255,255,255,0.05)',
    iconFg: 'rgb(163,163,163)',
    dot: 'rgb(107,114,128)',
    tag: {
      bg: 'rgba(17,24,39,0.8)',
      fg: 'rgb(229,231,235)',
      border: '1px solid rgb(75,85,99)'
    }
  }
};
const NP_CARD_BASE = {
  background: 'rgba(255,255,255,0.04)',
  borderTop: '1px solid rgba(75,85,99,0.55)',
  borderRight: '1px solid rgba(75,85,99,0.55)',
  borderBottom: '1px solid rgba(75,85,99,0.55)',
  borderRadius: 12,
  color: 'rgb(249,250,251)',
  position: 'relative'
};
const NP_LABEL = {
  fontFamily: 'Inter',
  fontSize: 11,
  color: 'rgb(163,163,163)'
};
const NP_TITLE = {
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeight: 600,
  color: 'rgb(249,250,251)',
  letterSpacing: '-0.005em'
};
const NP_BODY = {
  fontFamily: 'Inter',
  fontSize: 12.5,
  color: 'rgb(209,213,219)',
  lineHeight: 1.55
};
function NPBadge({
  tone = 'mute',
  children,
  size = 'sm'
}) {
  const t = NOTIF_TONES[tone] || NOTIF_TONES.mute;
  const sizes = size === 'xs' ? {
    padding: '2px 7px',
    fontSize: 9.5,
    letterSpacing: '0.06em'
  } : {
    padding: '3px 9px',
    fontSize: 10,
    letterSpacing: '0.06em'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Inter',
      fontWeight: 700,
      textTransform: 'uppercase',
      borderRadius: 4,
      ...t.tag,
      ...sizes
    }
  }, children);
}
function NPMetaChip({
  children,
  tone = 'mute'
}) {
  const t = NOTIF_TONES[tone] || NOTIF_TONES.mute;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 10.5,
      padding: '3px 9px',
      borderRadius: 5,
      background: tone === 'mute' ? 'rgba(255,255,255,0.04)' : t.tag.bg,
      color: tone === 'mute' ? 'rgb(163,163,163)' : t.tag.fg,
      border: tone === 'mute' ? '1px solid rgba(75,85,99,0.55)' : t.tag.border
    }
  }, children);
}
function NPButton({
  variant = 'primary',
  children,
  onClick,
  noHint
}) {
  const styles = variant === 'primary' ? {
    background: 'rgb(5,122,85)',
    color: '#fff',
    border: '1px solid rgb(5,122,85)'
  } : variant === 'violet' ? {
    background: 'rgb(139,92,246)',
    color: '#fff',
    border: '1px solid rgb(139,92,246)'
  } : {
    background: 'rgba(255,255,255,0.04)',
    color: 'rgb(229,231,235)',
    border: '1px solid rgba(75,85,99,0.8)'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "data-no-hint": noHint || !onClick || undefined,
    style: {
      ...styles,
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 11.5,
      padding: '6px 12px',
      borderRadius: 6,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, children);
}

/* ---- Generic Card ------------------------------------------------------- */
function NotificationCard({
  tone = 'mute',
  icon = 'bell',
  iconChar,
  title,
  titleBadges = [],
  body,
  clients,
  meta = [],
  actions = [],
  unread = true,
  time,
  children
}) {
  const t = NOTIF_TONES[tone] || NOTIF_TONES.mute;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_CARD_BASE,
      borderLeft: `3px solid ${t.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr auto',
      gap: 14,
      padding: '14px 18px 14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: t.iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${t.tag.border.replace('1px solid ', '')}`,
      marginTop: 2
    }
  }, iconChar ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 13,
      color: t.iconFg
    }
  }, iconChar) : /*#__PURE__*/React.createElement("i", {
    className: faCls(icon),
    style: {
      width: 16,
      height: 16,
      color: t.iconFg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: NP_TITLE
  }, title), titleBadges.map((b, i) => /*#__PURE__*/React.createElement(NPBadge, {
    key: i,
    tone: b.tone || 'mute'
  }, b.label))), body && /*#__PURE__*/React.createElement("div", {
    style: NP_BODY
  }, body), clients && clients.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '2px 0 0',
      padding: '0 0 0 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, clients.map((c, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      ...NP_BODY,
      fontSize: 12,
      color: 'rgb(209,213,219)'
    }
  }, c.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)'
    }
  }, "\u2014 ", c.amount)))), children, meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(NPMetaChip, {
    key: i,
    tone: m.tone || 'mute'
  }, m.label))), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 10
    }
  }, actions.map((a, i) => a.render ? /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, a.render()) : /*#__PURE__*/React.createElement(NPButton, {
    key: i,
    variant: a.variant || (i === 0 ? 'primary' : 'secondary'),
    onClick: a.onClick,
    noHint: a.noHint
  }, a.label, " ", a.arrow && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      width: 10,
      height: 10
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 8,
      paddingTop: 4
    }
  }, time && /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_LABEL,
      fontSize: 10.5,
      whiteSpace: 'nowrap'
    }
  }, time), unread && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: t.dot,
      boxShadow: `0 0 8px ${t.dot}`
    }
  }))));
}

/* ---- Data ---------------------------------------------------------------
   The inbox is built from the live `alerts` dataset — the same rows the alert
   tiles and rules run on — so every card names a real client, account and
   value from the sample data. */
const NP_RULE_META = {
  'Drift exceeds 5%': {
    tone: 'success',
    icon: 'percent',
    action: 'Review Rebalance'
  },
  'Balance drops by 5% in 5 days': {
    tone: 'danger',
    icon: 'arrow-trend-down',
    action: 'Open Account'
  },
  'Transaction exceeds $50K': {
    tone: 'danger',
    icon: 'external-link',
    action: 'Open Client'
  },
  'Cash rises above 8%': {
    tone: 'warning',
    icon: 'droplet',
    action: 'View Account'
  }
};
const npFmtUsd = v => '$' + Math.round(v).toLocaleString('en-US');
const npAge = h => h < 1 ? 'Just now' : h < 24 ? h + (h === 1 ? ' hour ago' : ' hours ago') : h < 48 ? 'Yesterday' : Math.floor(h / 24) + ' days ago';
const npAllNotifications = () => {
  const live = window.fieldInsights ? window.fieldInsights() : null;
  const rows = (live || dmDataset('alerts').rows().slice(0, 12)).filter(r => r.status === 'Open');
  return rows.map((r, i) => {
    const m = NP_RULE_META[r.rule] || {
      tone: 'mute',
      icon: 'bell'
    };
    const high = r.severity === 'High';
    const dismissed = !!(live && window.insightDismissState(r));
    const open = r.brief && window.faOpenInsight ? () => window.faOpenInsight(r) : m.action === 'Open Client' ? () => window.dispatchEvent(new CustomEvent('client:open', {
      detail: {
        client: r.client
      }
    })) : undefined;
    return {
      key: r.key || 'n' + i,
      dismissed,
      src: live ? r : null,
      tone: m.tone,
      icon: m.icon,
      unread: r.age_hours < 24 && !dismissed,
      title: r.title,
      titleBadges: high ? [{
        tone: 'danger',
        label: 'High'
      }] : r.severity === 'Medium' ? [{
        tone: 'warning',
        label: 'Medium'
      }] : [],
      body: r.body + '. Value at stake ' + npFmtUsd(r.impact) + ' · ' + r.household + (r.advisor && r.advisor !== '—' ? ' · ' + r.advisor : '') + '.',
      extra: dismissed ? 'Hidden until ' + window.insightUntilLabel(r) + '. Comes back sooner if the amount changes by more than 10%.' : null,
      until: () => window.insightUntilLabel(r),
      restore: () => window.insightRestore(r),
      meta: [],
      actions: [{
        variant: 'primary',
        label: r.cta || m.action || 'Open',
        arrow: true,
        onClick: open
      }, !live ? {
        variant: 'secondary',
        label: 'Dismiss'
      } : dismissed ? {
        variant: 'secondary',
        label: 'Restore',
        onClick: () => window.insightRestore(r)
      } : {
        variant: 'secondary',
        label: 'Dismiss',
        onClick: () => window.insightDismiss(r, 30)
      }],
      rule: true,
      priority: high ? 'high' : r.severity === 'Medium' ? 'medium' : 'low',
      today: r.age_hours < 24
    };
  });
};

/* a just-dismissed insight collapses to this row so it can be undone in place */
function NpUndoRow({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_CARD_BASE,
      borderLeft: '1px dashed rgba(75,85,99,0.8)',
      borderTop: '1px dashed rgba(75,85,99,0.8)',
      borderRight: '1px dashed rgba(75,85,99,0.8)',
      borderBottom: '1px dashed rgba(75,85,99,0.8)',
      background: 'rgba(255,255,255,0.015)',
      padding: '12px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye-slash",
    style: {
      width: 13,
      height: 13,
      color: 'rgb(115,115,115)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_BODY,
      flex: 1,
      minWidth: 0,
      color: 'rgb(163,163,163)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(229,231,235)',
      fontWeight: 500
    }
  }, n.title), " is dismissed until ", n.until(), ". Comes back sooner if the amount changes by more than 10%."), /*#__PURE__*/React.createElement(NPButton, {
    variant: "secondary",
    onClick: n.restore
  }, "Undo"));
}

/* dropdown used by Dismiss (inbox) and the ⋯ menu (Field AI feed) */
function InsightMenu({
  items,
  footer,
  trigger,
  align = 'left'
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const off = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', off);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(v => !v),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: {
      display: 'inline-flex'
    }
  }, trigger(open)), open && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      [align]: 0,
      top: 'calc(100% + 6px)',
      zIndex: 60,
      width: 264,
      padding: 4,
      borderRadius: 10,
      background: 'rgb(17,24,39)',
      border: '1px solid rgb(75,85,99)',
      boxShadow: '0 16px 36px -10px rgba(0,0,0,0.65)'
    }
  }, items.map((m, i) => m.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    role: "separator",
    style: {
      height: 1,
      margin: '4px 6px',
      background: 'rgba(75,85,99,0.6)'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    onClick: () => {
      setOpen(false);
      m.run();
    },
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      borderRadius: 7,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(229,231,235)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + m.icon,
    style: {
      width: 12,
      height: 12,
      fontSize: 11,
      color: 'rgb(163,163,163)',
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, m.label), m.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'rgb(115,115,115)',
      lineHeight: 1.4
    }
  }, m.sub)))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 2px 0',
      padding: '9px 10px 7px',
      borderTop: '1px solid rgba(75,85,99,0.6)',
      display: 'flex',
      gap: 8,
      fontFamily: 'Inter',
      fontSize: 11,
      lineHeight: 1.45,
      color: 'rgb(163,163,163)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-info",
    style: {
      width: 11,
      height: 11,
      fontSize: 10,
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, footer))));
}

/* ---- grouped inbox: one card per rule, in the inbox and in Dismissed ---- */
function npBlocks(rows, filter) {
  const order = [],
    byRule = {};
  rows.forEach(n => {
    const id = n.src && n.src.ruleId;
    if (!id) {
      order.push(n);
      return;
    }
    if (!byRule[id]) {
      byRule[id] = [];
      order.push({
        ruleSlot: id
      });
    }
    byRule[id].push(n);
  });
  return order.map(o => !o.ruleSlot ? o : {
    key: 'grp|' + o.ruleSlot,
    groupItems: byRule[o.ruleSlot],
    dismissedView: filter === 'dismissed'
  });
}
const NP_SEV_TONE = {
  High: 'danger',
  Medium: 'warning',
  Info: 'info'
};
const npUnit = (u, n) => n === 1 ? u.replace(/s$/, '') : u;
function NpGroupCard({
  g
}) {
  const rows = g.groupItems;
  const dv = !!g.dismissedView;
  const live = dv ? rows : rows.filter(n => !n.dismissed);
  const [open, setOpen] = React.useState(false);
  const info = window.insightGroupInfo((live.length ? live : rows).map(n => n.src));
  const t = NOTIF_TONES[NP_SEV_TONE[info.severity]] || NOTIF_TONES.mute;
  const meta = NP_RULE_META[rows[0].src.rule] || {
    icon: 'bell'
  };
  const unit = info.unit || 'households';
  const one = live.length === 1 ? live[0].src : null;

  /* the whole group was just dismissed: leave an undo in its place */
  if (!dv && !live.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...NP_CARD_BASE,
        borderLeft: '1px dashed rgba(75,85,99,0.8)',
        borderTop: '1px dashed rgba(75,85,99,0.8)',
        borderRight: '1px dashed rgba(75,85,99,0.8)',
        borderBottom: '1px dashed rgba(75,85,99,0.8)',
        background: 'rgba(255,255,255,0.015)',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-eye-slash",
      style: {
        width: 13,
        height: 13,
        color: 'rgb(115,115,115)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...NP_BODY,
        flex: 1,
        minWidth: 0,
        color: 'rgb(163,163,163)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgb(229,231,235)',
        fontWeight: 500
      }
    }, info.name), " dismissed until ", rows[0].until(), ". Comes back sooner if an amount changes by more than 10%."), /*#__PURE__*/React.createElement(NPButton, {
      variant: "secondary",
      onClick: () => window.insightRestoreMany(rows.map(n => n.src))
    }, "Undo"));
  }
  const targets = live.map(n => n.src);
  const summary = one ? one.body + '.' : info.title + ', ' + info.totalPhrase + ' in total.';
  const iconBtn = {
    width: 28,
    height: 28,
    borderRadius: 6,
    cursor: 'pointer',
    background: 'transparent',
    border: '1px solid transparent',
    color: 'rgb(115,115,115)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_CARD_BASE,
      borderLeft: `3px solid ${dv ? 'rgba(75,85,99,0.8)' : t.border}`,
      opacity: dv ? 0.92 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px minmax(0, 1fr) auto',
      columnGap: 14,
      rowGap: 12,
      padding: '14px 18px 14px 16px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: t.iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${t.tag.border.replace('1px solid ', '')}`,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: faCls(meta.icon),
    style: {
      width: 16,
      height: 16,
      color: t.iconFg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: NP_TITLE
  }, one ? one.title : info.name), /*#__PURE__*/React.createElement(NPBadge, {
    tone: NP_SEV_TONE[info.severity]
  }, info.severity)), /*#__PURE__*/React.createElement("div", {
    style: NP_BODY
  }, summary), dv && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye-slash",
    style: {
      width: 11,
      height: 11
    }
  }), "Dismissed until ", rows[0].until(), ". Comes back sooner if an amount changes by more than 10%."), !one && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-expanded": open,
    style: {
      alignSelf: 'flex-start',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '2px 0',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(163,163,163)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'rgb(229,231,235)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'rgb(163,163,163)';
    }
  }, open ? 'Hide' : 'Show', " ", live.length, " ", npUnit(unit, live.length), /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-chevron-' + (open ? 'up' : 'down'),
    style: {
      width: 9,
      height: 9
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(NPButton, {
    variant: "primary",
    onClick: () => one ? window.faOpenInsight(one) : window.faOpenInsightGroup(targets)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-magic-sparkles",
    style: {
      width: 11,
      height: 11
    }
  }), " Brief"), dv ? /*#__PURE__*/React.createElement(NPButton, {
    variant: "secondary",
    onClick: () => window.insightRestoreMany(targets)
  }, "Restore") : /*#__PURE__*/React.createElement(NPButton, {
    variant: "secondary",
    onClick: () => one ? window.insightDismiss(one, 30) : window.insightDismissMany(targets, 30, 'grp|' + info.ruleId)
  }, "Dismiss")), open && !one && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '2 / 4',
      border: '1px solid rgba(75,85,99,0.55)',
      borderRadius: 9,
      overflow: 'hidden'
    }
  }, rows.map((n, i) => !dv && n.dismissed ? /*#__PURE__*/React.createElement("div", {
    key: n.key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 12px',
      borderTop: i ? '1px solid rgba(75,85,99,0.45)' : 'none',
      background: 'rgba(255,255,255,0.015)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye-slash",
    style: {
      width: 12,
      height: 12,
      color: 'rgb(115,115,115)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_BODY,
      flex: 1,
      fontSize: 12,
      color: 'rgb(163,163,163)'
    }
  }, n.src.household, " dismissed until ", n.until(), "."), /*#__PURE__*/React.createElement("button", {
    onClick: n.restore,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(16,185,129)'
    }
  }, "Undo")) : /*#__PURE__*/React.createElement("div", {
    key: n.key,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px, 210px) minmax(0, 1fr) 76px auto 28px',
      alignItems: 'center',
      gap: 12,
      padding: '9px 12px',
      borderTop: i ? '1px solid rgba(75,85,99,0.45)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n.src.household.replace(/ Household$/, '')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n.src.client)), /*#__PURE__*/React.createElement("div", {
    title: n.src.body,
    style: {
      ...NP_BODY,
      fontSize: 12,
      color: 'rgb(163,163,163)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n.src.body), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 500,
      color: 'rgb(229,231,235)',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, window.insightMoney(n.src.impact)), /*#__PURE__*/React.createElement(NPButton, {
    variant: "secondary",
    onClick: () => window.faOpenInsight(n.src)
  }, "Brief"), dv ? /*#__PURE__*/React.createElement("button", {
    title: "Restore",
    "aria-label": 'Restore ' + n.src.household,
    onClick: n.restore,
    style: iconBtn,
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(75,85,99,0.8)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye",
    style: {
      width: 12,
      height: 12
    }
  })) : /*#__PURE__*/React.createElement("button", {
    title: "Dismiss for 30 days",
    "aria-label": 'Dismiss ' + n.src.household,
    onClick: () => window.insightDismiss(n.src, 30),
    style: iconBtn,
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(75,85,99,0.8)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye-slash",
    style: {
      width: 12,
      height: 12
    }
  })))))));
}
const NP_FILTERS = [{
  id: 'all',
  label: 'All',
  match: () => true
}, {
  id: 'unread',
  label: 'Unread',
  match: n => n.unread
}, {
  id: 'high',
  label: 'High Priority',
  match: n => n.priority === 'high'
}, {
  id: 'today',
  label: 'Today',
  match: n => n.today
}, {
  id: 'dismissed',
  label: 'Dismissed',
  match: n => n.dismissed
}];

/* ---- Page -------------------------------------------------------------- */
function NotificationsPage() {
  const [filter, setFilter] = React.useState('all');
  const [view, setView] = React.useState(() => window.__pendingAlertDraft ? 'rules' : 'inbox'); // 'inbox' | 'rules'
  React.useEffect(() => {
    const on = () => setView('rules');
    window.addEventListener('alertrule:draft', on);
    return () => window.removeEventListener('alertrule:draft', on);
  }, []);

  // "All" = union of unread + high priority + today + next 10 days, de-duped.
  // Other filters apply their match predicate across the whole set.
  const [ver, setVer] = React.useState(0);
  const [recent, setRecent] = React.useState({});
  React.useEffect(() => {
    const on = e => {
      const d = e.detail || {};
      if (d.action === 'dismiss') setRecent(p => {
        const o = {
          ...p
        };
        (d.keys || [d.key]).forEach(k => {
          o[k] = 1;
        });
        return o;
      });
      setVer(v => v + 1);
    };
    window.addEventListener('insights:changed', on);
    return () => window.removeEventListener('insights:changed', on);
  }, []);
  const every = React.useMemo(npAllNotifications, [ver]);
  const dismissedCount = every.filter(n => n.dismissed).length;
  const all = filter === 'dismissed' ? every.filter(n => n.dismissed) : every.filter(n => !n.dismissed || recent[n.key]);
  const rows = React.useMemo(() => {
    const f = NP_FILTERS.find(x => x.id === filter) || NP_FILTERS[0];
    const seen = new Set();
    if (filter === 'all') return all;
    return all.filter(n => {
      if (!f.match(n)) return false;
      if (seen.has(n.title)) return false;
      seen.add(n.title);
      return true;
    });
  }, [filter, all, recent]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 28px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      letterSpacing: '-0.01em'
    }
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      marginBottom: 16,
      borderBottom: '1px solid rgba(75,85,99,0.55)'
    }
  }, [{
    id: 'inbox',
    label: 'Inbox'
  }, {
    id: 'rules',
    label: 'Alert Rules'
  }].map(v => {
    const on = v.id === view;
    return /*#__PURE__*/React.createElement("button", {
      key: v.id,
      onClick: () => setView(v.id),
      style: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 12.5,
        padding: '9px 14px',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        color: on ? 'rgb(249,250,251)' : 'rgb(163,163,163)',
        borderBottom: on ? '2px solid rgb(5,122,85)' : '2px solid transparent',
        marginBottom: -1
      }
    }, v.label);
  })), view === 'rules' ? window.AlertRulesPanel ? /*#__PURE__*/React.createElement(AlertRulesPanel, null) : null : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, NP_FILTERS.filter(f => f.id !== 'dismissed' || dismissedCount || filter === 'dismissed').map(f => {
    const active = f.id === filter;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      onClick: () => setFilter(f.id),
      style: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 11.5,
        padding: '7px 14px',
        borderRadius: 6,
        cursor: 'pointer',
        border: active ? '1px solid rgb(5,122,85)' : '1px solid rgba(75,85,99,0.7)',
        background: active ? 'rgb(5,122,85)' : 'rgba(255,255,255,0.04)',
        color: active ? '#fff' : 'rgb(209,213,219)',
        letterSpacing: '0.01em'
      }
    }, f.label, f.id === 'dismissed' && dismissedCount ? ' · ' + dismissedCount : '');
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, npBlocks(rows, filter).map((n, i) => n.groupItems ? /*#__PURE__*/React.createElement(NpGroupCard, {
    key: n.key + (n.dismissedView ? '|d' : ''),
    g: n
  }) : filter !== 'dismissed' && n.dismissed ? /*#__PURE__*/React.createElement(NpUndoRow, {
    key: n.key,
    n: n
  }) : /*#__PURE__*/React.createElement(NotificationCard, _extends({
    key: n.key || n.group + '-' + i
  }, n), n.extra && /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_BODY,
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginTop: 2
    }
  }, n.extra))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...NP_CARD_BASE,
      borderLeft: '1px solid rgba(75,85,99,0.55)',
      padding: '40px 20px',
      textAlign: 'center',
      color: 'rgb(163,163,163)',
      fontFamily: 'Inter',
      fontSize: 13
    }
  }, filter === 'dismissed' ? 'Nothing dismissed. A dismissed insight stays hidden for 30 days.' : 'No insights match this filter.'))));
}
;
/* ---- advisor/TableFilter.jsx ---- */
/* Shared column filters for the grid-style tables (My Practice, client tables).

   Two pieces that work together:
     <FilterHead>  — header cell with a filter affordance + popover
                     (multi-select w/ search, date presets, numeric range)
     <FilterBar>   — the active filters restated as removable chips above the
                     table, so filter state is visible without opening menus.

   useColFilters(rows, defs) owns the state and does the filtering.
   defs: [{ k, label, type:'set'|'num'|'date', get?(row) }]
*/

const TF_LINE = 'rgba(75,85,99,0.6)';
const TF_PANEL = 'rgb(17,19,20)';
const TF_GREEN = 'rgb(5,122,85)';
const TF_TEXT = 'rgb(229,231,235)';
const TF_MUTE = 'rgb(163,163,163)';
const TF_DATE_PRESETS = [{
  id: 'ytd',
  label: 'YTD'
}, {
  id: '30d',
  label: 'Last 30 Days'
}, {
  id: '90d',
  label: 'Last 90 Days'
}, {
  id: 'qtd',
  label: 'QTD'
}, {
  id: 'mtd',
  label: 'MTD'
}, {
  id: 't12',
  label: 'Trailing 12 Months'
}, {
  id: 'ly',
  label: 'Last Year'
}, {
  id: 'lq',
  label: 'Last Quarter'
}, {
  id: 'lm',
  label: 'Last Month'
}];

/* the demo data is anchored to Sep 2026; "today" follows the newest row so the
   presets always return something */
function tfRange(preset, anchor) {
  const now = anchor ? new Date(anchor) : new Date();
  const y = now.getFullYear(),
    m = now.getMonth(),
    q = Math.floor(m / 3);
  const d = (yy, mm, dd) => new Date(yy, mm, dd);
  switch (preset) {
    case 'ytd':
      return [d(y, 0, 1), now];
    case '30d':
      return [new Date(now - 30 * 864e5), now];
    case '90d':
      return [new Date(now - 90 * 864e5), now];
    case 'qtd':
      return [d(y, q * 3, 1), now];
    case 'mtd':
      return [d(y, m, 1), now];
    case 't12':
      return [new Date(d(y, m, now.getDate()) - 365 * 864e5), now];
    case 'ly':
      return [d(y - 1, 0, 1), d(y - 1, 11, 31)];
    case 'lq':
      return [d(y, (q - 1) * 3, 1), d(y, q * 3, 0)];
    case 'lm':
      return [d(y, m - 1, 1), d(y, m, 0)];
    default:
      return null;
  }
}

/* pre-formatted display strings -> a number: "$2.40M" 2400000, "-$0.85M" -850000,
   "+14.2%" 14.2, "1,240" 1240 */
function tfNum(v) {
  if (typeof v === 'number') return v;
  const s = String(v == null ? '' : v).replace(/[,$\s]/g, '');
  const m = s.match(/^([+-]?)([0-9.]+)([KMB]?)/i);
  if (!m) return NaN;
  const mult = {
    k: 1e3,
    m: 1e6,
    b: 1e9
  }[m[3].toLowerCase()] || 1;
  return (m[1] === '-' ? -1 : 1) * parseFloat(m[2]) * mult;
}

/* derive filter defs from a column config of the shape used by the drill-down
   tables: { key, label, align, num, kind } */
function tfDefsFromCols(cols, rows) {
  return cols.filter(c => c.kind !== 'source' && c.kind !== 'owner' && !rows.some(r => typeof r[c.key] === 'function')).map(c => {
    const isDate = /date|recon/i.test(c.key) && rows.some(r => !isNaN(new Date(r[c.key]).getTime()));
    if (isDate) return {
      k: c.key,
      label: c.label,
      type: 'date',
      align: c.align
    };
    if (c.num) return {
      k: c.key,
      label: c.label,
      type: 'num',
      align: c.align,
      get: r => tfNum(r[c.key])
    };
    return {
      k: c.key,
      label: c.label,
      type: 'set',
      align: c.align
    };
  });
}
function useColFilters(rows, defs) {
  const [filters, setFilters] = React.useState({});
  const get = React.useCallback((def, r) => def.get ? def.get(r) : r[def.k], []);
  const values = React.useMemo(() => {
    const out = {};
    defs.filter(d => d.type === 'set').forEach(d => {
      out[d.k] = Array.from(new Set(rows.map(r => get(d, r)).filter(v => v != null && v !== ''))).sort();
    });
    return out;
  }, [rows, defs, get]);
  const anchor = React.useMemo(() => {
    const dd = defs.find(d => d.type === 'date');
    if (!dd) return null;
    return rows.reduce((mx, r) => {
      const t = new Date(get(dd, r)).getTime();
      return t > mx ? t : mx;
    }, 0) || null;
  }, [rows, defs, get]);
  const filtered = React.useMemo(() => rows.filter(r => defs.every(d => {
    const f = filters[d.k];
    if (!f) return true;
    const v = get(d, r);
    if (d.type === 'set') return !f.length || f.includes(v);
    if (d.type === 'date') {
      const rng = tfRange(f, anchor);
      if (!rng) return true;
      const t = new Date(v).getTime();
      return t >= rng[0].getTime() && t <= rng[1].getTime() + 864e5 - 1;
    }
    if (d.type === 'num') {
      const n = Number(v),
        min = f.min === '' ? null : Number(f.min),
        max = f.max === '' ? null : Number(f.max);
      const use = f.abs ? Math.abs(n) : n;
      if (f.op === 'gt') return min == null || use > min;
      if (f.op === 'lt') return max == null || use < max;
      return (min == null || use >= min) && (max == null || use <= max);
    }
    return true;
  })), [rows, defs, filters, anchor, get]);
  const setFilter = (k, v) => setFilters(s => {
    const n = {
      ...s
    };
    if (v == null) delete n[k];else n[k] = v;
    return n;
  });
  const clearAll = () => setFilters({});
  return {
    filters,
    setFilter,
    clearAll,
    filtered,
    values,
    anchor
  };
}
const tfBtn = primary => ({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 11.5,
  padding: '6px 14px',
  borderRadius: 6,
  cursor: 'pointer',
  border: primary ? 'none' : `1px solid ${TF_LINE}`,
  background: primary ? TF_GREEN : 'transparent',
  color: primary ? '#fff' : TF_MUTE
});
const tfInput = {
  fontFamily: 'Inter',
  fontSize: 12,
  padding: '7px 10px',
  borderRadius: 6,
  width: '100%',
  boxSizing: 'border-box',
  border: `1px solid ${TF_LINE}`,
  background: 'rgba(255,255,255,0.04)',
  color: TF_TEXT,
  outline: 'none'
};

/* rendered into <body> so the table's overflow:auto can't clip it */
function TFPanel({
  children,
  align,
  title,
  rect
}) {
  const W = 288;
  const left = align === 'right' ? Math.max(12, (rect ? rect.right : 0) - W) : Math.min(window.innerWidth - W - 12, rect ? rect.left : 0);
  const panel = /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'fixed',
      top: (rect ? rect.bottom : 0) + 8,
      left,
      zIndex: 4000,
      width: W,
      boxSizing: 'border-box',
      background: TF_PANEL,
      border: `1px solid ${TF_LINE}`,
      borderRadius: 10,
      boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
      padding: 14,
      textTransform: 'none',
      letterSpacing: 0,
      maxHeight: 'calc(100vh - 40px)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12,
      color: TF_TEXT,
      marginBottom: 10
    }
  }, title), children);
  return ReactDOM.createPortal(panel, document.body);
}
function TFSetBody({
  options,
  value,
  onApply,
  onClear
}) {
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(value || []);
  const shown = options.filter(o => String(o).toLowerCase().includes(q.toLowerCase()));
  const toggle = o => setSel(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, options.length > 7 && /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search values...",
    style: tfInput
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 210,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, shown.map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 8px',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: TF_TEXT,
      background: sel.includes(o) ? 'rgba(255,255,255,0.06)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: sel.includes(o),
    onChange: () => toggle(o),
    style: {
      accentColor: 'rgb(16,185,129)',
      width: 13,
      height: 13
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, o))), !shown.length && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: TF_MUTE,
      padding: '8px 4px'
    }
  }, "No matches")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: onClear,
    style: tfBtn(false)
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: () => onApply(sel.length ? sel : null),
    style: tfBtn(true)
  }, "Apply")));
}
function TFDateBody({
  value,
  onApply,
  onClear
}) {
  const [sel, setSel] = React.useState(value || null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, TF_DATE_PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    "data-no-hint": true,
    onClick: () => setSel(p.id),
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 11,
      padding: '5px 10px',
      borderRadius: 6,
      cursor: 'pointer',
      border: `1px solid ${sel === p.id ? 'rgb(16,185,129)' : TF_LINE}`,
      background: sel === p.id ? 'rgba(16,185,129,0.16)' : 'transparent',
      color: sel === p.id ? 'rgb(110,231,183)' : TF_TEXT
    }
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: onClear,
    style: tfBtn(false)
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: () => onApply(sel),
    style: tfBtn(true)
  }, "Apply")));
}
function TFNumBody({
  value,
  abs,
  onApply,
  onClear
}) {
  const [op, setOp] = React.useState(value?.op || 'between');
  const [min, setMin] = React.useState(value?.min ?? '');
  const [max, setMax] = React.useState(value?.max ?? '');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: op,
    onChange: e => setOp(e.target.value),
    style: {
      ...tfInput,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "between"
  }, "Between"), /*#__PURE__*/React.createElement("option", {
    value: "gt"
  }, "Greater than"), /*#__PURE__*/React.createElement("option", {
    value: "lt"
  }, "Less than")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, op !== 'lt' && /*#__PURE__*/React.createElement("input", {
    value: min,
    onChange: e => setMin(e.target.value),
    placeholder: "Min",
    inputMode: "decimal",
    style: tfInput
  }), op !== 'gt' && /*#__PURE__*/React.createElement("input", {
    value: max,
    onChange: e => setMax(e.target.value),
    placeholder: "Max",
    inputMode: "decimal",
    style: tfInput
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: onClear,
    style: tfBtn(false)
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: () => onApply(min === '' && max === '' ? null : {
      op,
      min,
      max,
      abs
    }),
    style: tfBtn(true)
  }, "Apply")));
}

/* Header cell. Drop in place of the <span>Label</span> in a grid header row. */
function FilterHead({
  def,
  ctl,
  align = 'left',
  options
}) {
  const [open, setOpen] = React.useState(false);
  const [rect, setRect] = React.useState(null);
  const btnRef = React.useRef(null);
  const active = ctl.filters[def.k] != null;
  React.useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);
  const apply = v => {
    ctl.setFilter(def.k, v);
    setOpen(false);
  };
  const clear = () => {
    ctl.setFilter(def.k, null);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, def.label), /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    "data-no-hint": true,
    title: `Filter ${def.label}`,
    onClick: e => {
      e.stopPropagation();
      const r = btnRef.current.getBoundingClientRect();
      setRect(r);
      setOpen(o => !o);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      padding: 0,
      borderRadius: 4,
      cursor: 'pointer',
      border: 'none',
      flexShrink: 0,
      background: active || open ? 'rgba(16,185,129,0.18)' : 'transparent',
      color: active ? 'rgb(16,185,129)' : TF_MUTE
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 2.5h9M3 6h6M4.5 9.5h3"
  }))), open && /*#__PURE__*/React.createElement(TFPanel, {
    align: align,
    rect: rect,
    title: `Filter ${def.label}`
  }, def.type === 'set' && /*#__PURE__*/React.createElement(TFSetBody, {
    options: options || ctl.values[def.k] || [],
    value: ctl.filters[def.k],
    onApply: apply,
    onClear: clear
  }), def.type === 'date' && /*#__PURE__*/React.createElement(TFDateBody, {
    value: ctl.filters[def.k],
    onApply: apply,
    onClear: clear
  }), def.type === 'num' && /*#__PURE__*/React.createElement(TFNumBody, {
    value: ctl.filters[def.k],
    abs: def.abs,
    onApply: apply,
    onClear: clear
  })));
}
function tfSummary(def, f) {
  if (def.type === 'set') return f.length <= 2 ? f.join(', ') : `${f.slice(0, 2).join(', ')} +${f.length - 2}`;
  if (def.type === 'date') return (TF_DATE_PRESETS.find(p => p.id === f) || {}).label || String(f);
  const unit = def.unit || '';
  if (f.op === 'gt') return `> ${unit}${f.min}`;
  if (f.op === 'lt') return `< ${unit}${f.max}`;
  return `${unit}${f.min || '0'} – ${unit}${f.max || '∞'}`;
}

/* Active filters restated as chips. Shown only when something is filtered. */
function FilterBar({
  ctl,
  defs,
  count,
  total,
  noun = 'rows'
}) {
  const keys = Object.keys(ctl.filters);
  if (!keys.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px 10px'
    }
  }, keys.map(k => {
    const def = defs.find(d => d.k === k);
    if (!def) return null;
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 6px 4px 10px',
        borderRadius: 999,
        border: '1px solid rgba(16,185,129,0.45)',
        background: 'rgba(16,185,129,0.12)',
        fontFamily: 'Inter',
        fontSize: 11.5,
        color: 'rgb(209,250,229)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgb(110,231,183)',
        fontWeight: 600
      }
    }, def.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        maxWidth: 220,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, tfSummary(def, ctl.filters[k])), /*#__PURE__*/React.createElement("button", {
      "data-no-hint": true,
      onClick: () => ctl.setFilter(k, null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        padding: 0,
        border: 'none',
        borderRadius: 999,
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.08)',
        color: 'rgb(209,250,229)',
        fontSize: 11
      }
    }, "\xD7"));
  }), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: ctl.clearAll,
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      fontWeight: 600,
      color: TF_MUTE,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 6px'
    }
  }, "Clear all"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: TF_MUTE,
      marginLeft: 'auto'
    }
  }, count.toLocaleString(), " of ", total.toLocaleString(), " ", noun));
}
Object.assign(window, {
  useColFilters,
  FilterHead,
  FilterBar,
  TF_DATE_PRESETS,
  tfNum,
  tfDefsFromCols
});
;
/* ---- advisor/MyPracticeCashFlow.jsx ---- */
/* My Practice — Cash Flow tab. Depends on MP_* shared tokens from MyPractice.jsx.
   Every figure is aggregated from the money_movement dataset (custodian
   transactions in the tenant export). Nothing here is invented: the export has
   no transaction status or free-text description, so those columns are gone. */

const CF_MONTH_ORDER = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function cfTx() {
  return typeof dmRows === 'function' ? dmRows('money_movement') : [];
}
const cfFmt = n => {
  const a = Math.abs(n),
    sign = n < 0 ? '-' : '';
  if (a >= 1e9) return sign + '$' + (a / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return sign + '$' + (a / 1e6).toFixed(2) + 'M';
  if (a >= 1e3) return sign + '$' + Math.round(a / 1e3) + 'K';
  return sign + '$' + a.toFixed(0);
};
const cfFmtFull = n => (n < 0 ? '-' : '+') + '$' + Math.abs(n).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

/* month keys sort chronologically: "Jan 26" -> 2026-01 */
function cfMonthKey(label) {
  const [m, y] = String(label).split(' ');
  return (2000 + Number(y)) * 100 + (CF_MONTH_ORDER.indexOf(m) + 1);
}
function cfMonthly(rows) {
  const m = {};
  rows.forEach(t => {
    const b = m[t.month] || (m[t.month] = {
      month: t.month,
      key: cfMonthKey(t.month),
      inflow: 0,
      outflow: 0,
      net: 0
    });
    b.inflow += t.inflow;
    b.outflow += t.outflow;
    b.net += t.net_flow;
  });
  return Object.values(m).sort((a, b) => a.key - b.key);
}
const CF_TYPE_TONE = {
  Deposit: {
    char: '+',
    color: 'rgb(16,185,129)',
    bg: 'rgba(16,185,129,0.14)'
  },
  'Transfer In': {
    char: '⇄',
    color: 'rgb(56,189,248)',
    bg: 'rgba(56,189,248,0.14)'
  },
  Dividend: {
    char: '%',
    color: 'rgb(139,92,246)',
    bg: 'rgba(139,92,246,0.14)'
  },
  Sell: {
    char: '↑',
    color: 'rgb(110,231,183)',
    bg: 'rgba(16,185,129,0.10)'
  },
  Buy: {
    char: '↓',
    color: 'rgb(148,163,184)',
    bg: 'rgba(148,163,184,0.14)'
  },
  Withdrawal: {
    char: '−',
    color: 'rgb(248,113,113)',
    bg: 'rgba(248,113,113,0.14)'
  },
  'Transfer Out': {
    char: '⇄',
    color: 'rgb(251,146,60)',
    bg: 'rgba(234,88,12,0.14)'
  },
  Fee: {
    char: '$',
    color: 'rgb(234,88,12)',
    bg: 'rgba(234,88,12,0.14)'
  }
};
function CFRangeToggle({
  value,
  onChange
}) {
  const ranges = ['3M', '6M', '12M', 'All'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: '1px solid rgba(75,85,99,0.6)',
      borderRadius: 8,
      padding: 3,
      background: 'rgba(255,255,255,0.02)'
    }
  }, ranges.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    "data-no-hint": true,
    onClick: () => onChange(r),
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 10.5,
      padding: '4px 10px',
      borderRadius: 5,
      cursor: 'pointer',
      border: 'none',
      background: value === r ? 'rgb(5,122,85)' : 'transparent',
      color: value === r ? '#fff' : 'rgb(163,163,163)'
    }
  }, r)));
}
function CFInflowsOutflows({
  months
}) {
  const [range, setRange] = React.useState('12M');
  const take = range === '3M' ? 3 : range === '6M' ? 6 : range === '12M' ? 12 : months.length;
  const shown = months.slice(-take);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 260,
      spacing: [12, 8, 8, 8]
    },
    xAxis: {
      categories: shown.map(m => m.month),
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      labels: {
        formatter: function () {
          return cfFmt(this.value);
        }
      },
      plotLines: [{
        color: 'rgba(75,85,99,0.6)',
        width: 1,
        value: 0
      }]
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shared: true,
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' + this.points.map(p => `<span style="color:${p.color}">●</span> ${p.series.name}: <b>${cfFmt(Math.abs(p.y))}</b>`).join('<br/>');
      }
    },
    plotOptions: {
      column: {
        borderRadius: 3,
        borderWidth: 1.5,
        pointPadding: 0.1,
        groupPadding: 0.15,
        maxPointWidth: 24
      }
    },
    series: [{
      name: 'Inflows',
      data: shown.map(m => m.inflow),
      color: 'rgba(16,185,129,0.45)',
      borderColor: 'rgb(16,185,129)'
    }, {
      name: 'Outflows',
      data: shown.map(m => -m.outflow),
      color: 'rgba(248,113,113,0.45)',
      borderColor: 'rgb(248,113,113)'
    }]
  }), [shown]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Inflows & Outflows"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Inflows & Outflows"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: 'rgb(16,185,129)'
    }
  }), " Inflows"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(209,213,219)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: 'rgb(248,113,113)'
    }
  }), " Outflows"))), /*#__PURE__*/React.createElement(CFRangeToggle, {
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 260
    }
  })));
}
function CFByType({
  rows
}) {
  const types = React.useMemo(() => {
    const m = {};
    rows.forEach(t => {
      const b = m[t.transaction_type] || (m[t.transaction_type] = {
        label: t.transaction_type,
        count: 0,
        net: 0
      });
      b.count += 1;
      b.net += t.net_flow;
    });
    return Object.values(m).sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
  }, [rows]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Cash Flow by Type"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Cash Flow by Type"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2px 18px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, types.map((r, i) => {
    const tone = CF_TYPE_TONE[r.label] || {
      char: '•',
      color: 'rgb(163,163,163)',
      bg: 'rgba(148,163,184,0.14)'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '32px minmax(0,1fr) auto',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: tone.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        color: tone.color
      }
    }, tone.char), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 12.5,
        color: 'rgb(249,250,251)'
      }
    }, r.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: 'rgb(163,163,163)'
      }
    }, r.count.toLocaleString(), " transactions")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 13,
        fontVariantNumeric: 'tabular-nums',
        color: r.net >= 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)'
      }
    }, (r.net >= 0 ? '+' : '') + cfFmt(r.net)));
  })));
}
function CFNetTrend({
  months
}) {
  const opts = React.useMemo(() => ({
    chart: {
      type: 'areaspline',
      height: 280,
      spacing: [12, 8, 8, 8]
    },
    xAxis: {
      categories: months.map(m => m.month)
    },
    yAxis: {
      tickAmount: 7,
      labels: {
        formatter: function () {
          return cfFmt(this.value);
        }
      },
      plotLines: [{
        color: 'rgba(75,85,99,0.6)',
        width: 1,
        value: 0
      }]
    },
    legend: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' + cfFmt(this.y);
      }
    },
    plotOptions: {
      areaspline: {
        fillColor: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [[0, 'rgba(16,185,129,0.35)'], [1, 'rgba(16,185,129,0)']]
        },
        lineColor: 'rgb(16,185,129)',
        lineWidth: 2,
        marker: {
          enabled: true,
          radius: 3.5,
          fillColor: 'rgb(10,10,10)',
          lineColor: 'rgb(16,185,129)',
          lineWidth: 2,
          symbol: 'circle'
        }
      }
    },
    series: [{
      name: 'Net Cash Flow',
      data: months.map(m => m.net)
    }]
  }), [months]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Net Cash Flow Trend"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Net Cash Flow Trend"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(209,213,219)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: 'rgb(16,185,129)'
    }
  }), " Net Cash Flow"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 280
    }
  })));
}
function CFByAccountType({
  rows,
  net
}) {
  const COLORS = ['rgb(16,185,129)', 'rgb(56,189,248)', 'rgb(139,92,246)', 'rgb(234,88,12)', 'rgb(234,179,8)', 'rgb(244,114,182)'];
  const types = React.useMemo(() => {
    const m = {};
    rows.forEach(t => {
      const b = m[t.account_type] || (m[t.account_type] = {
        label: t.account_type,
        inflow: 0,
        outflow: 0
      });
      b.inflow += t.inflow;
      b.outflow += t.outflow;
    });
    return Object.values(m).sort((a, b) => b.inflow - a.inflow);
  }, [rows]);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height: 230,
      spacing: [8, 4, 8, 4]
    },
    tooltip: {
      pointFormatter: function () {
        return '<b>' + cfFmt(this.y) + '</b> in';
      }
    },
    plotOptions: {
      pie: {
        innerSize: '68%',
        borderWidth: 1.5,
        borderRadius: 0,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            brightness: 0.08,
            halo: {
              size: 6,
              opacity: 0.2
            }
          }
        }
      }
    },
    series: [{
      name: 'Inflows',
      data: types.map((a, i) => ({
        name: a.label,
        y: a.inflow,
        color: COLORS[i % COLORS.length].replace('rgb(', 'rgba(').replace(')', ',0.55)'),
        borderColor: COLORS[i % COLORS.length]
      }))
    }]
  }), [types]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Flows by Account Type"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Flows by Account Type"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 240,
      height: 230
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 230
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      color: 'rgb(163,163,163)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Net Flow"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 20,
      color: net >= 0 ? 'rgb(249,250,251)' : 'rgb(248,113,113)'
    }
  }, cfFmt(net)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 8
    }
  }, types.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'rgb(229,231,235)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: COLORS[i % COLORS.length],
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, a.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 12.5,
      fontVariantNumeric: 'tabular-nums'
    }
  }, cfFmt(a.inflow)))))));
}
const CF_COL_DEFS = [{
  k: 'client',
  label: 'Client',
  type: 'set'
}, {
  k: 'transaction_type',
  label: 'Type',
  type: 'set'
}, {
  k: 'security',
  label: 'Security',
  type: 'set'
}, {
  k: 'date',
  label: 'Date',
  type: 'date'
}, {
  k: 'net_flow',
  label: 'Amount',
  type: 'num',
  unit: '$',
  abs: true
}];
function CFTransactions({
  rows
}) {
  const [tab, setTab] = React.useState('All');
  const tabs = ['All', 'Inflows', 'Outflows'];
  const tabRows = React.useMemo(() => rows.filter(t => tab === 'Inflows' ? t.net_flow > 0 : tab === 'Outflows' ? t.net_flow < 0 : true), [rows, tab]);
  const ctl = useColFilters(tabRows, CF_COL_DEFS);
  const shown = React.useMemo(() => [...ctl.filtered].sort((a, b) => new Date(a.date) - new Date(b.date) ? new Date(b.date) - new Date(a.date) : 0).slice(0, 12), [ctl.filtered]);
  const COLS = 'minmax(200px,1.5fr) 120px minmax(160px,1.6fr) 110px 130px';
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Recent Transactions"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Recent Transactions"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: '1px solid rgba(75,85,99,0.6)',
      borderRadius: 999,
      padding: 3,
      background: 'rgba(255,255,255,0.02)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    "data-no-hint": true,
    onClick: () => setTab(t),
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 10.5,
      padding: '4px 12px',
      borderRadius: 999,
      cursor: 'pointer',
      border: 'none',
      background: tab === t ? 'rgba(255,255,255,0.1)' : 'transparent',
      color: tab === t ? 'rgb(249,250,251)' : 'rgb(163,163,163)'
    }
  }, t)))), /*#__PURE__*/React.createElement(FilterBar, {
    ctl: ctl,
    defs: CF_COL_DEFS,
    count: ctl.filtered.length,
    total: tabRows.length,
    noun: "transactions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 12px',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: COLS,
      alignItems: 'center',
      gap: 12,
      padding: '8px 14px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase',
      borderBottom: '1px solid rgba(75,85,99,0.4)'
    }
  }, CF_COL_DEFS.map((d, i) => /*#__PURE__*/React.createElement(FilterHead, {
    key: d.k,
    def: d,
    ctl: ctl,
    align: i === CF_COL_DEFS.length - 1 ? 'right' : 'left'
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 14px',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(163,163,163)'
    }
  }, "No transactions match these filters."), shown.map((r, i) => {
    const initials = String(r.client).split(' ').map(s => s[0]).join('').slice(0, 2);
    const tone = CF_TYPE_TONE[r.transaction_type] || {
      color: 'rgb(163,163,163)'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: COLS,
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderBottom: i === shown.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.25)',
        fontFamily: 'Inter',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        background: 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 11,
        color: 'rgb(229,231,235)',
        flexShrink: 0
      }
    }, initials), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'rgb(249,250,251)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.client), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'rgb(163,163,163)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.account_type))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 10.5,
        padding: '3px 10px',
        borderRadius: 4,
        whiteSpace: 'nowrap',
        background: `color-mix(in srgb, ${tone.color} 22%, transparent)`,
        color: tone.color,
        border: `1px solid color-mix(in srgb, ${tone.color} 45%, transparent)`
      }
    }, r.transaction_type)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgb(209,213,219)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.security || '—'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgb(163,163,163)'
      }
    }, r.date), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 700,
        color: r.net_flow >= 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)'
      }
    }, cfFmtFull(r.net_flow)));
  }))));
}
function MPCashFlowTab() {
  /* trades move money inside an account rather than in or out of the household,
     so buys and sells are excluded from the cash-flow view */
  const rows = React.useMemo(() => cfTx().filter(t => t.transaction_type !== 'Buy' && t.transaction_type !== 'Sell'), []);
  const months = React.useMemo(() => cfMonthly(rows), [rows]);
  const totals = React.useMemo(() => rows.reduce((s, t) => ({
    inflow: s.inflow + t.inflow,
    outflow: s.outflow + t.outflow,
    count: s.count + 1
  }), {
    inflow: 0,
    outflow: 0,
    count: 0
  }), [rows]);
  const net = totals.inflow - totals.outflow;
  const kpis = [{
    label: 'Total Inflows',
    value: cfFmt(totals.inflow),
    sub: 'Deposits, transfers in and dividends'
  }, {
    label: 'Total Outflows',
    value: '-' + cfFmt(totals.outflow),
    sub: 'Withdrawals, transfers out and fees'
  }, {
    label: 'Net Cash Flow',
    value: cfFmt(net),
    sub: 'Inflows less outflows across the book'
  }, {
    label: 'Transactions',
    value: totals.count.toLocaleString(),
    sub: 'Settled money movements, trades excluded'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 16
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: 'span 3'
    }
  }, /*#__PURE__*/React.createElement(MPKpi, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 8'
    }
  }, /*#__PURE__*/React.createElement(CFInflowsOutflows, {
    months: months
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement(CFByType, {
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 8'
    }
  }, /*#__PURE__*/React.createElement(CFNetTrend, {
    months: months
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 4'
    }
  }, /*#__PURE__*/React.createElement(CFByAccountType, {
    rows: rows,
    net: net
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 12'
    }
  }, /*#__PURE__*/React.createElement(CFTransactions, {
    rows: rows
  })));
}
window.MPCashFlowTab = MPCashFlowTab;
;
/* ---- advisor/MyPracticeAssets.jsx ---- */
/* My Practice — Assets tab. Depends on MP_* shared tokens from MyPractice.jsx.
   Built from the holdings dataset (positions joined to securities and accounts).
   The export carries no fund-family, no held-away balances and no historical
   valuations, so there is no "top managers", no managed-vs-held-away split and
   no growth-over-time line here. */

function asPositions() {
  return typeof dmRows === 'function' ? dmRows('holdings') : [];
}
const asFmt = n => {
  const a = Math.abs(n),
    sign = n < 0 ? '-' : '';
  if (a >= 1e9) return sign + '$' + (a / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return sign + '$' + (a / 1e6).toFixed(2) + 'M';
  if (a >= 1e3) return sign + '$' + Math.round(a / 1e3) + 'K';
  return sign + '$' + a.toFixed(0);
};
const asFmtFull = n => (n < 0 ? '-' : '') + '$' + Math.abs(n).toLocaleString(undefined, {
  maximumFractionDigits: 0
});
const AS_CLASS_COLORS = {
  Equity: 'rgb(16,185,129)',
  'Fixed Income': 'rgb(56,189,248)',
  Cash: 'rgb(234,179,8)',
  'Cash Debit': 'rgb(248,113,113)',
  Alternative: 'rgb(139,92,246)',
  'Real Estate': 'rgb(234,88,12)'
};
const AS_FALLBACK_COLORS = ['rgb(139,92,246)', 'rgb(234,88,12)', 'rgb(244,114,182)', 'rgb(148,163,184)'];
function asColor(label, i) {
  return AS_CLASS_COLORS[label] || AS_FALLBACK_COLORS[i % AS_FALLBACK_COLORS.length];
}
function asGroup(rows, key) {
  const m = {};
  rows.forEach(p => {
    const k = p[key] || 'Unassigned';
    const b = m[k] || (m[k] = {
      label: k,
      market_value: 0,
      cost_basis: 0,
      positions: 0
    });
    b.market_value += p.market_value;
    b.cost_basis += p.cost_basis;
    b.positions += 1;
  });
  return Object.values(m).sort((a, b) => b.market_value - a.market_value);
}
function ASAllocation({
  rows,
  total
}) {
  const classes = React.useMemo(() => asGroup(rows, 'asset_class'), [rows]);
  const positive = classes.filter(c => c.market_value > 0);
  const boxRef = React.useRef(null);
  const [wide, setWide] = React.useState(true);
  React.useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWide(el.clientWidth >= 470));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height: 220,
      spacing: [4, 4, 4, 4]
    },
    tooltip: {
      pointFormatter: function () {
        return '<b>' + asFmt(this.y) + '</b> (' + this.percentage.toFixed(1) + '%)';
      }
    },
    plotOptions: {
      pie: {
        innerSize: '68%',
        borderWidth: 1.5,
        borderRadius: 0,
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            brightness: 0.08,
            halo: {
              size: 6,
              opacity: 0.2
            }
          }
        }
      }
    },
    series: [{
      name: 'Allocation',
      data: positive.map((a, i) => ({
        name: a.label,
        y: a.market_value,
        color: asColor(a.label, i).replace('rgb(', 'rgba(').replace(')', ',0.55)'),
        borderColor: asColor(a.label, i)
      }))
    }]
  }), [positive]);
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "AUM Asset Allocation"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "AUM Asset Allocation"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: wide ? 'minmax(0,220px) minmax(0,1fr)' : 'minmax(0,1fr)',
      gap: 16,
      padding: '4px 20px 16px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 220
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 220
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10,
      color: 'rgb(163,163,163)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Total Value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 20,
      color: 'rgb(249,250,251)'
    }
  }, asFmt(total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, classes.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto 46px',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'Inter',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'rgb(229,231,235)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: asColor(a.label, i),
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, a.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      color: 'rgb(229,231,235)',
      fontWeight: 600
    }
  }, asFmt(a.market_value)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      color: 'rgb(163,163,163)'
    }
  }, Math.round(a.market_value / total * 100), "%"))))));
}
function ASByAccountType({
  rows,
  total
}) {
  const types = React.useMemo(() => asGroup(rows, 'account_type'), [rows]);
  const max = Math.max(1, ...types.map(t => t.market_value));
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Assets by Registration"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Assets by Registration"
  })), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, "Market value by account registration type")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 15
    }
  }, types.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(229,231,235)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, asFmt(t.market_value))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 8,
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 9999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: Math.max(0, t.market_value / max * 100) + '%',
      background: 'rgb(5,122,85)',
      borderRadius: 9999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'rgb(209,213,219)',
      fontWeight: 600
    }
  }, t.positions.toLocaleString()), " positions"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, Math.round(t.market_value / total * 100), "% of AUM"))))));
}
function ASUnrealized({
  rows
}) {
  const classes = React.useMemo(() => asGroup(rows, 'asset_class').map(c => ({
    ...c,
    unrealized: c.market_value - c.cost_basis
  })).sort((a, b) => b.unrealized - a.unrealized), [rows]);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 300,
      spacing: [16, 8, 8, 8]
    },
    xAxis: {
      categories: classes.map(c => c.label),
      labels: {
        style: {
          color: 'rgb(209,213,219)',
          fontSize: '11.5px'
        }
      }
    },
    yAxis: {
      labels: {
        formatter: function () {
          return asFmt(this.value);
        }
      },
      tickAmount: 6,
      plotLines: [{
        color: 'rgba(75,85,99,0.6)',
        width: 1,
        value: 0
      }]
    },
    legend: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' + asFmt(this.y);
      }
    },
    plotOptions: {
      column: {
        borderRadius: 4,
        borderWidth: 1.5,
        pointPadding: 0.08,
        groupPadding: 0.18,
        maxPointWidth: 64
      }
    },
    series: [{
      name: 'Unrealized G/L',
      data: classes.map(c => ({
        y: c.unrealized,
        color: c.unrealized >= 0 ? 'rgba(16,185,129,0.45)' : 'rgba(248,113,113,0.45)',
        borderColor: c.unrealized >= 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)'
      }))
    }]
  }), [classes]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Unrealized Gain / Loss"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Unrealized Gain / Loss"
  })), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, "Market value less cost basis, by asset class")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 300
    }
  })));
}
const AS_COL_DEFS = [{
  k: 'name',
  label: 'Holding',
  type: 'set'
}, {
  k: 'cls',
  label: 'Asset Class',
  type: 'set'
}, {
  k: 'market_value',
  label: 'Market Value',
  type: 'num',
  unit: '$'
}, {
  k: 'cost_basis',
  label: 'Cost Basis',
  type: 'num',
  unit: '$'
}, {
  k: 'unrealized',
  label: 'Unrealized G/L',
  type: 'num',
  unit: '$'
}, {
  k: 'alloc',
  label: 'Allocation',
  type: 'num',
  unit: ''
}];
function ASPositions({
  rows,
  total
}) {
  const [tab, setTab] = React.useState('All');
  const holdings = React.useMemo(() => {
    const m = {};
    rows.forEach(p => {
      const b = m[p.ticker] || (m[p.ticker] = {
        ticker: p.ticker,
        name: p.security,
        cls: p.asset_class,
        market_value: 0,
        cost_basis: 0,
        accounts: new Set()
      });
      b.market_value += p.market_value;
      b.cost_basis += p.cost_basis;
      b.accounts.add(p.account_id);
    });
    return Object.values(m).map(h => ({
      ...h,
      accounts: h.accounts.size,
      unrealized: h.market_value - h.cost_basis,
      alloc: total ? h.market_value / total * 100 : 0
    })).sort((a, b) => b.market_value - a.market_value);
  }, [rows, total]);
  const tabs = React.useMemo(() => ['All', ...[...new Set(holdings.map(h => h.cls))].slice(0, 4)], [holdings]);
  const tabRows = React.useMemo(() => holdings.filter(h => tab === 'All' || h.cls === tab), [holdings, tab]);
  const ctl = useColFilters(tabRows, AS_COL_DEFS);
  const shown = React.useMemo(() => ctl.filtered.slice(0, 12), [ctl.filtered]);
  const maxAlloc = Math.max(1, ...shown.map(h => h.market_value / total * 100));
  const COLS = 'minmax(240px,2fr) 130px 130px 130px 140px 150px';
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Largest Positions"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Largest Positions"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: '1px solid rgba(75,85,99,0.6)',
      borderRadius: 999,
      padding: 3,
      background: 'rgba(255,255,255,0.02)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    "data-no-hint": true,
    onClick: () => setTab(t),
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 10.5,
      padding: '4px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      border: 'none',
      background: tab === t ? 'rgba(255,255,255,0.1)' : 'transparent',
      color: tab === t ? 'rgb(249,250,251)' : 'rgb(163,163,163)'
    }
  }, t)))), /*#__PURE__*/React.createElement(FilterBar, {
    ctl: ctl,
    defs: AS_COL_DEFS,
    count: ctl.filtered.length,
    total: tabRows.length,
    noun: "holdings"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 12px',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: COLS,
      alignItems: 'center',
      gap: 12,
      padding: '8px 14px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase',
      borderBottom: '1px solid rgba(75,85,99,0.4)'
    }
  }, AS_COL_DEFS.map((d, i) => /*#__PURE__*/React.createElement(FilterHead, {
    key: d.k,
    def: d,
    ctl: ctl,
    align: i >= 2 ? 'right' : 'left'
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 14px',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(163,163,163)'
    }
  }, "No holdings match these filters."), shown.map((r, i) => {
    const alloc = r.market_value / total * 100;
    const color = asColor(r.cls, i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: COLS,
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderBottom: i === shown.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.22)',
        fontFamily: 'Inter',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 9999,
        background: 'rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 9.5,
        color: 'rgb(229,231,235)',
        flexShrink: 0
      }
    }, String(r.ticker).slice(0, 4)), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'rgb(249,250,251)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'rgb(163,163,163)'
      }
    }, r.ticker, " \xB7 ", r.accounts, " accounts"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 10.5,
        padding: '3px 10px',
        borderRadius: 4,
        whiteSpace: 'nowrap',
        background: `color-mix(in srgb, ${color} 20%, transparent)`,
        color,
        border: `1px solid color-mix(in srgb, ${color} 45%, transparent)`
      }
    }, r.cls)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        color: 'rgb(229,231,235)'
      }
    }, asFmtFull(r.market_value)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        color: 'rgb(209,213,219)'
      }
    }, asFmtFull(r.cost_basis)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 700,
        color: r.unrealized >= 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)'
      }
    }, (r.unrealized >= 0 ? '+' : '-') + '$' + Math.abs(Math.round(r.unrealized)).toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 5,
        borderRadius: 9999,
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${Math.min(100, alloc / maxAlloc * 100)}%`,
        height: '100%',
        background: 'rgb(16,185,129)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 600,
        minWidth: 42,
        textAlign: 'right'
      }
    }, alloc.toFixed(1), "%")));
  }))));
}
function MPAssetsTab() {
  const rows = React.useMemo(() => asPositions(), []);
  const stats = React.useMemo(() => {
    const accounts = new Set(),
      securities = new Set();
    let mv = 0,
      cb = 0;
    rows.forEach(p => {
      mv += p.market_value;
      cb += p.cost_basis;
      accounts.add(p.account_id);
      securities.add(p.ticker);
    });
    return {
      mv,
      cb,
      accounts: accounts.size,
      securities: securities.size,
      positions: rows.length
    };
  }, [rows]);
  const unrealized = stats.mv - stats.cb;
  const kpis = [{
    label: 'Total AUM',
    value: asFmt(stats.mv),
    sub: 'Market value of all reconciled positions'
  }, {
    label: 'Unrealized G/L',
    value: (unrealized >= 0 ? '+' : '') + asFmt(unrealized),
    delta: (unrealized / (stats.cb || 1) * 100).toFixed(1) + '% over cost basis',
    deltaTone: unrealized >= 0 ? 'success' : 'danger'
  }, {
    label: 'Accounts',
    value: stats.accounts.toLocaleString(),
    sub: stats.positions.toLocaleString() + ' open positions'
  }, {
    label: 'Securities Held',
    value: stats.securities.toLocaleString(),
    sub: 'Distinct instruments across the book'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 16
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: 'span 3'
    }
  }, /*#__PURE__*/React.createElement(MPKpi, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 7'
    }
  }, /*#__PURE__*/React.createElement(ASAllocation, {
    rows: rows,
    total: stats.mv
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 5'
    }
  }, /*#__PURE__*/React.createElement(ASByAccountType, {
    rows: rows,
    total: stats.mv
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 12'
    }
  }, /*#__PURE__*/React.createElement(ASUnrealized, {
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 12'
    }
  }, /*#__PURE__*/React.createElement(ASPositions, {
    rows: rows,
    total: stats.mv
  })));
}
window.MPAssetsTab = MPAssetsTab;
;
/* ---- advisor/MyPractice.jsx ---- */
/* My Practice — Three-tab workspace: Client Analysis, Cash Flow, Assets.
   Shell lives here. Each tab component is defined in its own file:
     - MyPractice.jsx (this file)      — shell + Client Analysis tab
     - MyPracticeCashFlow.jsx          — Cash Flow tab
     - MyPracticeAssets.jsx            — Assets tab
*/

/* ---- Shared tokens ----------------------------------------------------- */
const MP_CARD = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(75,85,99,0.55)',
  borderRadius: 14,
  color: 'rgb(249,250,251)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxSizing: 'border-box',
  height: '100%'
};
const MP_HEAD = {
  display: 'flex',
  alignItems: 'baseline',
  padding: '14px 18px 6px',
  gap: 10
};
const MP_TITLE = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: '-0.005em'
};
const MP_SUB = {
  fontFamily: 'Inter',
  fontSize: 11,
  color: 'rgb(163,163,163)'
};
const MP_LABEL = {
  fontFamily: 'Inter',
  fontSize: 10.5,
  color: 'rgb(163,163,163)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase'
};
const MP_VALUE = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: 'clamp(18px, 2.1vw, 26px)',
  letterSpacing: '-0.01em',
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap'
};
const MP_FOOT = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 16px',
  borderTop: '1px solid rgba(75,85,99,0.45)',
  fontFamily: 'Inter',
  fontSize: 12,
  color: 'rgb(163,163,163)',
  cursor: 'pointer'
};
function MPExportFooter({
  onSeeMore
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_FOOT,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-no-hint": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-download",
    style: {
      width: 12,
      height: 12
    }
  }), "Export Data"), onSeeMore && /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: onSeeMore,
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(110,231,183)',
      background: 'none',
      border: 'none',
      padding: 0
    }
  }, "See more ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 10
    }
  })));
}

/* Generic KPI tile ------------------------------------------------------- */
function MPKpi({
  label,
  value,
  delta,
  deltaTone = 'success',
  sub
}) {
  const deltaColor = deltaTone === 'success' ? 'rgb(16,185,129)' : deltaTone === 'danger' ? 'rgb(248,113,113)' : 'rgb(163,163,163)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_CARD,
      padding: '16px 20px',
      gap: 8,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(TileInfo, {
    title: label
  })), /*#__PURE__*/React.createElement("div", {
    style: MP_LABEL
  }, label), /*#__PURE__*/React.createElement("div", {
    style: MP_VALUE
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: deltaColor
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: deltaTone === 'danger' ? 'fa-solid fa-arrow-trend-down' : 'fa-solid fa-arrow-trend-up',
    style: {
      width: 11,
      height: 11
    }
  }), delta), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_SUB
    }
  }, sub));
}

/* Tabs header ------------------------------------------------------------ */
function MPTabs({
  value,
  onChange,
  pages,
  onNew
}) {
  const tabs = [{
    id: 'clients',
    label: 'Client Analysis'
  }, {
    id: 'cashflow',
    label: 'Cash Flow'
  }, {
    id: 'assets',
    label: 'Assets'
  }, ...(pages || []).map(p => ({
    id: 'page:' + p.id,
    label: p.name
  }))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '12px 28px 0',
      borderBottom: '1px solid rgba(75,85,99,0.45)'
    }
  }, tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 2px',
        marginBottom: -1,
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 12.5,
        color: active ? 'rgb(16,185,129)' : 'rgb(163,163,163)',
        borderBottom: `2px solid ${active ? 'rgb(5,122,85)' : 'transparent'}`
      }
    }, t.label);
  }), onNew && /*#__PURE__*/React.createElement("button", {
    onClick: onNew,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 2px',
      marginBottom: -1,
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'rgb(163,163,163)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderBottom: '2px solid transparent',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus",
    style: {
      fontSize: 10
    }
  }), "New page"));
}

/* ---- Client Analysis data ----------------------------------------------
   Every cut below is rolled up from the tenant export (client_book): age,
   tenure, AUM, advisor, acquisition source. Occupation and service
   engagement are not part of the sync, so those cuts are not shown. */
function caBook() {
  return (typeof dmRows === 'function' ? dmRows('client_book') : []).filter(c => c.client && c.client !== 'Unassigned');
}
const caFmtAum = n => {
  const a = Math.abs(n);
  if (a >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  return '$' + Math.round(n / 1000) + 'K';
};
function caBuckets(rows, buckets, keyOf) {
  const out = buckets.map(b => ({
    label: b.label,
    clients: 0,
    aum: 0
  }));
  rows.forEach(r => {
    const i = buckets.findIndex(b => b.test(keyOf(r)));
    if (i >= 0) {
      out[i].clients += 1;
      out[i].aum += r.aum;
    }
  });
  return out;
}
function caByDim(rows, key) {
  const m = {};
  rows.forEach(r => {
    const k = r[key] || 'Unassigned';
    const b = m[k] || (m[k] = {
      name: k,
      clients: 0,
      aum: 0
    });
    b.clients += 1;
    b.aum += r.aum;
  });
  return Object.values(m).sort((a, b) => b.aum - a.aum);
}
const CA_AGE_BUCKETS = [{
  label: 'Under 40',
  test: v => v < 40
}, {
  label: '40 - 49',
  test: v => v >= 40 && v < 50
}, {
  label: '50 - 59',
  test: v => v >= 50 && v < 60
}, {
  label: '60 - 69',
  test: v => v >= 60 && v < 70
}, {
  label: '70+',
  test: v => v >= 70
}];
const CA_TENURE_BUCKETS = [{
  label: '0 - 2 yrs',
  test: v => v < 3
}, {
  label: '3 - 5 yrs',
  test: v => v >= 3 && v < 6
}, {
  label: '6 - 10 yrs',
  test: v => v >= 6 && v < 11
}, {
  label: '10+ yrs',
  test: v => v >= 11
}];
const CA_SEGMENTS = [{
  label: 'Ultra High Net Worth',
  floor: 10000000,
  color: 'rgb(139,92,246)'
}, {
  label: 'High Net Worth',
  floor: 2000000,
  color: 'rgb(16,185,129)'
}, {
  label: 'Mass Affluent',
  floor: 500000,
  color: 'rgb(56,189,248)'
}, {
  label: 'Emerging',
  floor: 0,
  color: 'rgb(234,179,8)'
}];

/* ---- Client Analysis components --------------------------------------- */
function MPClientTable({
  title,
  sub,
  rows,
  cols
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, title), /*#__PURE__*/React.createElement(TileInfo, {
    title: title
  })), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 80px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase',
      padding: '8px 10px',
      borderBottom: '1px solid rgba(75,85,99,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, cols[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, cols[1])), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 80px',
      alignItems: 'center',
      padding: '10px',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.25)',
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, r[1])))), /*#__PURE__*/React.createElement(MPExportFooter, null));
}
function MPAgeDistribution({
  onSeeMore
}) {
  const rows = React.useMemo(() => caBuckets(caBook(), CA_AGE_BUCKETS, r => r.age), []);
  const total = rows.reduce((s, r) => s + r.clients, 0) || 1;
  const pre = rows.slice(0, 3).reduce((s, r) => s + r.clients, 0);
  const prePct = Math.round(pre / total * 100);
  const retPct = 100 - prePct;
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 260,
      spacing: [24, 8, 8, 8]
    },
    xAxis: {
      categories: rows.map(d => d.label),
      labels: {
        style: {
          color: 'rgb(229,231,235)',
          fontSize: '11.5px',
          fontWeight: 500
        }
      }
    },
    yAxis: {
      tickAmount: 4,
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10.5px'
        }
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: '<b>{point.y}</b> clients ({point.pct})'
    },
    plotOptions: {
      column: {
        borderRadius: 4,
        borderWidth: 1.5,
        pointPadding: 0.08,
        groupPadding: 0.2,
        maxPointWidth: 70,
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.y + ' (' + this.point.pct + ')';
          },
          style: {
            color: 'rgb(196,181,253)',
            fontWeight: 700,
            fontSize: '11.5px',
            textOutline: 'none',
            fontStyle: 'italic'
          }
        }
      }
    },
    series: [{
      name: 'Clients',
      color: 'rgba(139,92,246,0.45)',
      borderColor: 'rgb(139,92,246)',
      borderWidth: 1.5,
      data: rows.map(d => ({
        y: d.clients,
        name: d.label,
        pct: Math.round(d.clients / total * 100) + '%'
      }))
    }]
  }), [rows, total]);
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_HEAD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Client Age Distribution"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Client Age Distribution"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 260
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 12px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, "Pre-Retirement (Under 60)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, prePct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 9999,
      background: 'rgba(139,92,246,0.2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: prePct + '%',
      height: '100%',
      background: 'rgb(139,92,246)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, "Retirement Phase (60+)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 11.5,
      color: 'rgb(209,213,219)'
    }
  }, retPct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 9999,
      background: 'rgba(139,92,246,0.2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: retPct + '%',
      height: '100%',
      background: 'rgb(196,181,253)'
    }
  })))), /*#__PURE__*/React.createElement(MPExportFooter, {
    onSeeMore: onSeeMore
  }));
}
function MPSegmentBreakdown({
  onSeeMore
}) {
  const rows = React.useMemo(() => {
    const book = caBook();
    const out = CA_SEGMENTS.map(s => ({
      ...s,
      clients: 0,
      accounts: 0,
      aum: 0
    }));
    book.forEach(c => {
      const i = out.findIndex(s => c.aum >= s.floor);
      const t = out[i >= 0 ? i : out.length - 1];
      t.clients += 1;
      t.accounts += c.accounts || 0;
      t.aum += c.aum;
    });
    return out;
  }, []);
  const total = rows.reduce((s, r) => s + r.aum, 0) || 1;
  const max = Math.max(1, ...rows.map(r => r.aum));
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Client Segments"), /*#__PURE__*/React.createElement(TileInfo, {
    title: "Client Segments"
  })), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, "Clients, accounts and AUM by wealth segment")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, rows.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(229,231,235)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: t.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 12.5,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, caFmtAum(t.aum))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 8,
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 9999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: t.aum / max * 100 + '%',
      background: t.color,
      borderRadius: 9999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'rgb(209,213,219)',
      fontWeight: 600
    }
  }, t.clients), " clients"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'rgb(209,213,219)',
      fontWeight: 600
    }
  }, t.accounts), " accounts"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, Math.round(t.aum / total * 100), "% of AUM"))))), /*#__PURE__*/React.createElement(MPExportFooter, {
    onSeeMore: onSeeMore
  }));
}

/* Combo: table on the left + AUM column chart on the right */
function MPTableChartCombo({
  title,
  sub,
  cols,
  rows,
  chartData,
  color,
  chartTitle = 'AUM by bracket',
  onSeeMore
}) {
  const fade = c => c.replace(/^rgb\(/, 'rgba(').replace(/\)$/, ',0.45)');
  /* the table and the chart sit side by side only when the card is wide enough
     for both; below that the chart stacks under the table */
  const boxRef = React.useRef(null);
  const [wide, setWide] = React.useState(true);
  React.useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWide(el.clientWidth >= 430));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 220,
      spacing: [16, 4, 8, 4]
    },
    xAxis: {
      categories: chartData.cats,
      labels: {
        style: {
          color: 'rgb(163,163,163)',
          fontSize: '10.5px'
        }
      }
    },
    yAxis: {
      labels: {
        formatter: function () {
          return caFmtAum(this.value);
        }
      },
      tickAmount: 4
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderRadius: 4,
        pointPadding: 0.08,
        groupPadding: 0.2,
        maxPointWidth: 42
      }
    },
    tooltip: {
      pointFormatter: function () {
        return '<b>' + caFmtAum(this.y) + '</b>';
      }
    },
    series: [{
      name: 'AUM',
      data: chartData.aum,
      color: fade(color),
      borderColor: color,
      borderWidth: 1.5
    }]
  }), [chartData, color]);
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: wide ? 'minmax(190px,240px) minmax(0,1fr)' : 'minmax(0,1fr)',
      alignItems: 'stretch',
      gap: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 8px',
      borderRight: wide ? '1px solid rgba(75,85,99,0.3)' : 'none',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 6px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, title), /*#__PURE__*/React.createElement(TileInfo, {
    title: title
  })), sub && /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 60px',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'rgb(163,163,163)',
      textTransform: 'uppercase',
      padding: '6px 6px',
      borderBottom: '1px solid rgba(75,85,99,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, cols[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, cols[1])), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 60px',
      alignItems: 'center',
      padding: '10px 6px',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.25)',
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, r[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 8px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_TITLE,
      fontSize: 12.5,
      padding: '14px 12px 4px',
      color: 'rgb(209,213,219)'
    }
  }, chartTitle), /*#__PURE__*/React.createElement(HC, {
    options: opts,
    style: {
      height: 220
    }
  }))), /*#__PURE__*/React.createElement(MPExportFooter, {
    onSeeMore: onSeeMore
  }));
}

/* ---- Client Analysis tab ---------------------------------------------- */
function MPClientAnalysisTab({
  onSeeMore
}) {
  const book = React.useMemo(() => caBook(), []);
  const age = React.useMemo(() => caBuckets(book, CA_AGE_BUCKETS, r => r.age), [book]);
  const tenure = React.useMemo(() => caBuckets(book, CA_TENURE_BUCKETS, r => r.tenure_years), [book]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 6'
    }
  }, /*#__PURE__*/React.createElement(MPTableChartCombo, {
    title: "Client Age",
    sub: "Clients and AUM by age bracket",
    cols: ['Age', 'Clients'],
    rows: age.map(r => [r.label, r.clients]),
    chartData: {
      cats: age.map(r => r.label),
      aum: age.map(r => r.aum)
    },
    chartTitle: "AUM by age bracket",
    color: "rgb(56,130,246)",
    onSeeMore: () => onSeeMore && onSeeMore('age')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 6'
    }
  }, /*#__PURE__*/React.createElement(MPAgeDistribution, {
    onSeeMore: () => onSeeMore && onSeeMore('age')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 6'
    }
  }, /*#__PURE__*/React.createElement(MPTableChartCombo, {
    title: "Client Tenure",
    sub: "Years with the firm, from the first account opened",
    cols: ['Years', 'Clients'],
    rows: tenure.map(r => [r.label, r.clients]),
    chartData: {
      cats: tenure.map(r => r.label),
      aum: tenure.map(r => r.aum)
    },
    chartTitle: "AUM by tenure",
    color: "rgb(16,185,129)",
    onSeeMore: () => onSeeMore && onSeeMore('tenure')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 6'
    }
  }, /*#__PURE__*/React.createElement(MPSegmentBreakdown, {
    onSeeMore: () => onSeeMore && onSeeMore('segments')
  })));
}

/* ---- Shell ------------------------------------------------------------- */
function MyPractice({
  initialTab = 'clients',
  onTabChange,
  period,
  editing,
  onDirtyChange,
  creatorReq,
  onCreatorHandled
}) {
  const [tab, setTab] = React.useState(initialTab);
  const [detail, setDetail] = React.useState(null);
  const keptRef = React.useRef(null);
  const [, bump] = React.useState(0);
  React.useEffect(() => {
    const on = () => setTimeout(() => bump(n => n + 1), 0);
    window.addEventListener('dash:save', on);
    window.addEventListener('tiles:appended', on);
    return () => {
      window.removeEventListener('dash:save', on);
      window.removeEventListener('tiles:appended', on);
    };
  }, []);
  React.useEffect(() => {
    setTab(initialTab);
    setDetail(null);
  }, [initialTab]);
  const changeTab = id => {
    setTab(id);
    setDetail(null);
    if (onTabChange) onTabChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 28px 48px'
    }
  }, tab === 'clients' && (detail ? /*#__PURE__*/React.createElement(MPClientDetailPage, {
    id: detail,
    onBack: () => setDetail(null)
  }) : /*#__PURE__*/React.createElement(MPClientAnalysisTab, {
    onSeeMore: setDetail
  })), tab === 'cashflow' && /*#__PURE__*/React.createElement(MPCashFlowTab, null), tab === 'assets' && /*#__PURE__*/React.createElement(MPAssetsTab, null), !detail && (() => {
    const key = 'adv.practice.tiles.' + tab;
    let has = false;
    try {
      has = (JSON.parse(localStorage.getItem(key) || '[]') || []).length > 0;
    } catch (e) {}
    if (editing) keptRef.current = tab;
    if (!editing && !has && keptRef.current !== tab) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '16px -24px 0',
        display: !editing && !has ? 'none' : undefined
      }
    }, /*#__PURE__*/React.createElement(DashboardCanvas, {
      key: key,
      storeKey: key,
      defaults: [],
      period: period,
      editing: editing,
      onDirtyChange: onDirtyChange,
      creatorReq: creatorReq,
      onCreatorHandled: onCreatorHandled,
      crumb: 'My Practice'
    }));
  })()));
}

/* Expose shared helpers to other MyPractice files -------------------------- */
window.MP_CARD = MP_CARD;
window.MP_HEAD = MP_HEAD;
window.MP_TITLE = MP_TITLE;
window.MP_SUB = MP_SUB;
window.MP_LABEL = MP_LABEL;
window.MP_VALUE = MP_VALUE;
window.MP_FOOT = MP_FOOT;
window.MPExportFooter = MPExportFooter;
window.MPKpi = MPKpi;
window.caBook = caBook;
window.caFmtAum = caFmtAum;
window.CA_AGE_BUCKETS = CA_AGE_BUCKETS;
window.CA_TENURE_BUCKETS = CA_TENURE_BUCKETS;
window.CA_SEGMENTS = CA_SEGMENTS;
window.MPTabs = MPTabs;
;
/* ---- advisor/MyPracticeDetail.jsx ---- */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* My Practice — Client Analysis drill-downs.

   Each Client Analysis card has a "See more" that opens one of these pages:
   the same cut of the book, but at client grain — every row behind the tile,
   with column filters and paging. Depends on MP_* tokens (MyPractice.jsx),
   TableFilter.jsx and the client_book dataset. */

const MPD_PAGE = 25;
const MPD_COL_DEFS = [{
  k: 'client',
  label: 'Client',
  type: 'set',
  w: 'minmax(180px,1.6fr)'
}, {
  k: 'band',
  label: 'Bracket',
  type: 'set',
  w: '120px'
}, {
  k: 'segment',
  label: 'Segment',
  type: 'set',
  w: '150px'
}, {
  k: 'advisor',
  label: 'Advisor',
  type: 'set',
  w: '140px'
}, {
  k: 'state',
  label: 'State',
  type: 'set',
  w: '70px'
}, {
  k: 'age',
  label: 'Age',
  type: 'num',
  w: '70px'
}, {
  k: 'tenure_years',
  label: 'Tenure',
  type: 'num',
  w: '90px'
}, {
  k: 'accounts',
  label: 'Accounts',
  type: 'num',
  w: '100px'
}, {
  k: 'aum',
  label: 'AUM',
  type: 'num',
  unit: '$',
  w: '130px'
}];
const MPD_COLS = 'minmax(180px,1.6fr) 120px 150px 140px 70px 70px 90px 100px 130px';
const MPD_CELL = {
  client: r => /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'rgb(249,250,251)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.client),
  band: r => /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)'
    }
  }, r.band),
  segment: r => /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(209,213,219)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.segment),
  advisor: r => /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.advisor),
  state: r => /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(163,163,163)'
    }
  }, r.state),
  age: r => /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.age),
  tenure_years: r => /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.tenure_years),
  accounts: r => /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.accounts),
  aum: r => /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 700
    }
  }, mpdFmt(r.aum))
};
function mpdFmt(n) {
  const a = Math.abs(n);
  if (a >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  return '$' + Math.round(n / 1000) + 'K';
}
function MPDPager({
  page,
  pages,
  onPage
}) {
  if (pages <= 1) return null;
  const nums = [];
  const from = Math.max(1, Math.min(page - 2, pages - 4));
  for (let i = from; i < from + 5 && i <= pages; i++) nums.push(i);
  const btn = (on, active) => ({
    fontFamily: 'Inter',
    fontSize: 11.5,
    fontWeight: 600,
    minWidth: 28,
    height: 28,
    padding: '0 8px',
    borderRadius: 6,
    cursor: on ? 'pointer' : 'default',
    border: '1px solid ' + (active ? 'rgb(5,122,85)' : 'rgba(75,85,99,0.6)'),
    background: active ? 'rgba(5,122,85,0.25)' : 'transparent',
    color: on ? 'rgb(229,231,235)' : 'rgb(107,114,128)'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '12px 16px',
      borderTop: '1px solid rgba(75,85,99,0.45)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    disabled: page === 1,
    onClick: () => onPage(page - 1),
    style: btn(page > 1, false)
  }, "Prev"), from > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(107,114,128)',
      fontFamily: 'Inter',
      fontSize: 11.5
    }
  }, "\u2026"), nums.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    "data-no-hint": true,
    onClick: () => onPage(n),
    style: btn(true, n === page)
  }, n)), from + 5 <= pages && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(107,114,128)',
      fontFamily: 'Inter',
      fontSize: 11.5
    }
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    disabled: page === pages,
    onClick: () => onPage(page + 1),
    style: btn(page < pages, false)
  }, "Next"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, "Page ", page, " of ", pages));
}

/* client-grain table shared by every Client Analysis drill-down.
   On the segments page the bracket IS the segment, so the generic band column
   is dropped rather than shown twice. */
function MPDClientTable({
  rows,
  bandLabel,
  bandKey
}) {
  const defs = React.useMemo(() => MPD_COL_DEFS.filter(d => !(d.k === 'band' && bandKey === 'segment')).map(d => d.k === 'band' ? {
    ...d,
    label: bandLabel
  } : d), [bandLabel, bandKey]);
  const grid = React.useMemo(() => defs.map(d => d.w).join(' '), [defs]);
  const rightFrom = defs.findIndex(d => d.type === 'num');
  const ctl = useColFilters(rows, defs);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState({
    k: 'aum',
    dir: 'desc'
  });
  React.useEffect(() => {
    setPage(1);
  }, [ctl.filters]);
  const sorted = React.useMemo(() => [...ctl.filtered].sort((a, b) => {
    const va = a[sort.k],
      vb = b[sort.k];
    const c = typeof va === 'number' ? va - vb : String(va).localeCompare(String(vb));
    return sort.dir === 'desc' ? -c : c;
  }), [ctl.filtered, sort]);
  const pages = Math.max(1, Math.ceil(sorted.length / MPD_PAGE));
  const shown = sorted.slice((page - 1) * MPD_PAGE, page * MPD_PAGE);
  const head = {
    display: 'grid',
    gridTemplateColumns: grid,
    alignItems: 'center',
    gap: 12,
    padding: '10px 16px',
    fontFamily: 'Inter',
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: 'rgb(163,163,163)',
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(75,85,99,0.5)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, "Clients"), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, "One row per client, rolled up from the custodian feed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, "Sort by"), /*#__PURE__*/React.createElement("select", {
    value: sort.k + ':' + sort.dir,
    onChange: e => {
      const [k, dir] = e.target.value.split(':');
      setSort({
        k,
        dir
      });
    },
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      padding: '6px 10px',
      borderRadius: 6,
      cursor: 'pointer',
      border: '1px solid rgba(75,85,99,0.6)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "aum:desc"
  }, "AUM, high to low"), /*#__PURE__*/React.createElement("option", {
    value: "aum:asc"
  }, "AUM, low to high"), /*#__PURE__*/React.createElement("option", {
    value: "client:asc"
  }, "Client, A\u2013Z"), /*#__PURE__*/React.createElement("option", {
    value: "age:desc"
  }, "Age, oldest first"), /*#__PURE__*/React.createElement("option", {
    value: "tenure_years:desc"
  }, "Tenure, longest first"), /*#__PURE__*/React.createElement("option", {
    value: "accounts:desc"
  }, "Accounts, most first")))), /*#__PURE__*/React.createElement(FilterBar, {
    ctl: ctl,
    defs: defs,
    count: ctl.filtered.length,
    total: rows.length,
    noun: "clients"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, defs.map((d, i) => /*#__PURE__*/React.createElement(FilterHead, {
    key: d.k,
    def: d,
    ctl: ctl,
    align: i >= rightFrom ? 'right' : 'left'
  }))), shown.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: grid,
      alignItems: 'center',
      gap: 12,
      padding: '11px 16px',
      borderBottom: '1px solid rgba(75,85,99,0.22)',
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, defs.map(d => /*#__PURE__*/React.createElement(React.Fragment, {
    key: d.k
  }, MPD_CELL[d.k](r))))), !shown.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 16px',
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(163,163,163)'
    }
  }, "No clients match these filters."))), /*#__PURE__*/React.createElement(MPDPager, {
    page: page,
    pages: pages,
    onPage: setPage
  }));
}

/* bracket summary strip above the client table */
function MPDBuckets({
  buckets,
  total,
  totalAum,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: MP_CARD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MP_HEAD
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: MP_TITLE
  }, label), /*#__PURE__*/React.createElement("div", {
    style: MP_SUB
  }, "Share of clients and AUM in each bracket"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${buckets.length}, minmax(0,1fr))`,
      gap: 1,
      background: 'rgba(75,85,99,0.35)'
    }
  }, buckets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgb(10,10,10)',
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: 'rgb(163,163,163)'
    }
  }, b.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 19,
      fontVariantNumeric: 'tabular-nums'
    }
  }, b.clients), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 4,
      background: 'rgba(255,255,255,0.08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: (total ? b.clients / total * 100 : 0) + '%',
      height: '100%',
      background: 'rgb(16,185,129)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, mpdFmt(b.aum), " \xB7 ", totalAum ? Math.round(b.aum / totalAum * 100) : 0, "% of AUM")))));
}
const MPD_PAGES = {
  age: {
    title: 'Client Age',
    subtitle: 'Clients and AUM by age bracket, down to the client',
    bandLabel: 'Age Band',
    buckets: CA_AGE_BUCKETS,
    keyOf: r => r.age
  },
  tenure: {
    title: 'Client Tenure',
    subtitle: 'Years with the firm, from the first account opened',
    bandLabel: 'Tenure Band',
    buckets: CA_TENURE_BUCKETS,
    keyOf: r => r.tenure_years
  },
  segments: {
    title: 'Client Segments',
    subtitle: 'Clients grouped by household AUM',
    bandLabel: 'Segment',
    bandKey: 'segment'
  }
};
function MPClientDetailPage({
  id,
  onBack
}) {
  const cfg = MPD_PAGES[id] || MPD_PAGES.age;
  const book = React.useMemo(() => caBook(), []);
  const rows = React.useMemo(() => book.map(c => ({
    ...c,
    band: cfg.buckets ? (cfg.buckets.find(b => b.test(cfg.keyOf(c))) || {
      label: '—'
    }).label : (CA_SEGMENTS.find(s => c.aum >= s.floor) || {
      label: 'Emerging'
    }).label
  })), [book, cfg]);
  const buckets = React.useMemo(() => {
    const labels = cfg.buckets ? cfg.buckets.map(b => b.label) : CA_SEGMENTS.map(s => s.label);
    return labels.map(label => {
      const rs = rows.filter(r => r.band === label);
      return {
        label,
        clients: rs.length,
        aum: rs.reduce((s, r) => s + r.aum, 0)
      };
    });
  }, [rows, cfg]);
  const totalAum = rows.reduce((s, r) => s + r.aum, 0);
  const top = [...buckets].sort((a, b) => b.aum - a.aum)[0] || {
    label: '—'
  };
  const kpis = [{
    label: 'Clients',
    value: rows.length.toLocaleString(),
    sub: 'Active households in the book'
  }, {
    label: 'Total AUM',
    value: mpdFmt(totalAum),
    sub: 'Reconciled market value'
  }, {
    label: 'Largest Bracket',
    value: top.label,
    sub: mpdFmt(top.aum) + ' across ' + top.clients + ' clients'
  }, {
    label: 'Average AUM',
    value: mpdFmt(rows.length ? totalAum / rows.length : 0),
    sub: 'Per client'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    "data-no-hint": true,
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(163,163,163)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 10px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left",
    style: {
      fontSize: 11
    }
  }), " Back to Client Analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgb(110,231,183)'
    }
  }, "Practice \xB7 Client Analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.01em',
      marginTop: 4
    }
  }, cfg.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      color: 'rgb(163,163,163)',
      marginTop: 4
    }
  }, cfg.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
      gap: 16
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement(MPKpi, _extends({
    key: i
  }, k)))), /*#__PURE__*/React.createElement(MPDBuckets, {
    buckets: buckets,
    total: rows.length,
    totalAum: totalAum,
    label: cfg.bandLabel
  }), /*#__PURE__*/React.createElement(MPDClientTable, {
    rows: rows,
    bandLabel: cfg.bandLabel,
    bandKey: cfg.bandKey
  }));
}
window.MPClientDetailPage = MPClientDetailPage;
;
/* ---- advisor/RebalanceFlow.jsx ---- */
/* RebalanceFlow — full-screen LLM-style takeover for the Rebalance opportunity.
   Progressive reveal: streaming "thinking" prose, then structured rationale cards
   appear in sequence. CTA at the end opens the generated client deck.

   Trigger: window.dispatchEvent(new CustomEvent('rebalance:open', { detail:{ client } }))
   Close:   window.dispatchEvent(new CustomEvent('rebalance:close'))
*/

const RB_CLIENT = {
  name: 'David Young',
  initials: 'DY',
  portfolio: '$2.4M',
  riskTolerance: 'Moderate Growth',
  current: [{
    label: 'Fixed Income',
    pct: 22,
    color: 'rgb(56,189,248)'
  }, {
    label: 'Domestic Equity',
    pct: 58,
    color: 'rgb(16,185,129)'
  }, {
    label: 'International Equity',
    pct: 20,
    color: 'rgb(234,88,12)'
  }],
  recommended: [{
    label: 'Fixed Income',
    pct: 15,
    delta: -7,
    color: 'rgb(56,189,248)'
  }, {
    label: 'Domestic Equity',
    pct: 65,
    delta: +7,
    color: 'rgb(16,185,129)'
  }, {
    label: 'International Equity',
    pct: 20,
    delta: 0,
    color: 'rgb(234,88,12)'
  }]
};

/* ---- Streaming prose chunks (revealed in sequence) ---------------------- */
const RB_THINKING_LINES = [{
  type: 'thinking',
  text: 'Analyzing David Young\'s portfolio against current market conditions…'
}, {
  type: 'thinking',
  text: 'Evaluating allocation drift relative to target Moderate Growth profile…'
}, {
  type: 'thinking',
  text: 'Cross-referencing September 2025 market assessment data…'
}, {
  type: 'thinking',
  text: 'Computing risk-adjusted return optimization…'
}, {
  type: 'response',
  text: 'Based on my analysis, David Young\'s portfolio has drifted from target allocation. Fixed income is overweight at 22% (target 15%), while domestic equity is underweight at 58% (target 65%). Current market conditions favor reducing fixed income exposure given stabilizing yields, and increasing equity allocation aligns with his Moderate Growth objective.'
}, {
  type: 'response',
  text: 'Tax-efficient implementation is feasible — recommended trades qualify for harvest opportunities, and gradual execution over 2–3 days minimizes market impact. Estimated total cost: ~0.05% of portfolio value.'
}, {
  type: 'response',
  text: 'I recommend proceeding with the rebalance. I\'ve prepared a client-ready presentation covering rationale, recommended adjustments, efficient frontier analysis, trade cost management, and implementation timeline.'
}];
const RB_PILLARS = [{
  num: '1',
  title: 'Risk Management',
  body: 'Prevents portfolio drift that could expose you to unintended risk levels beyond your comfort zone'
}, {
  num: '2',
  title: 'Return Optimization',
  body: 'Ensures your asset allocation remains aligned with long-term growth objectives and market opportunities'
}, {
  num: '3',
  title: 'Disciplined Approach',
  body: 'Maintains systematic buy-low, sell-high discipline by trimming overweight positions'
}, {
  num: '4',
  title: 'Tax Efficiency',
  body: 'Optimizes after-tax returns through strategic harvesting and asset location strategies'
}];
const RB_MARKET = [{
  label: 'Fixed Income:',
  body: 'Yields stabilizing around 4.5-5% range',
  accent: 'Favorable for reduced allocation timing'
}, {
  label: 'Equity Markets:',
  body: 'Moderate valuations with selective opportunities',
  accent: 'Supporting increased equity exposure'
}, {
  label: 'International:',
  body: 'Emerging market recovery momentum',
  accent: 'Maintaining 20% allocation optimal'
}, {
  label: 'Volatility:',
  body: 'VIX in normal range (15-20)',
  accent: 'Good environment for rebalancing'
}];

/* ---- Streaming line component ------------------------------------------ */
function RBStreamLine({
  line,
  delay,
  onComplete
}) {
  const [shown, setShown] = React.useState('');
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    let t = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setShown(line.text.slice(0, i));
        if (i >= line.text.length) {
          clearInterval(id);
          setDone(true);
          onComplete && onComplete();
        }
      }, line.type === 'thinking' ? 12 : 8);
    }, delay);
    return () => clearTimeout(t);
  }, []);
  if (line.type === 'thinking') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '6px 0',
        fontFamily: 'Inter',
        fontSize: 13,
        color: 'rgb(163,163,163)',
        fontStyle: 'italic'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid fa-${done ? 'check' : 'circle-notch'} ${done ? '' : 'fa-spin'}`,
      style: {
        width: 11,
        height: 11,
        color: done ? 'rgb(16,185,129)' : 'rgb(163,163,163)'
      }
    }), /*#__PURE__*/React.createElement("span", null, shown));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      marginTop: 8,
      background: 'rgba(5,122,85,0.06)',
      border: '1px solid rgba(5,122,85,0.3)',
      borderRadius: 10,
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'rgb(229,231,235)',
      lineHeight: 1.6
    }
  }, shown, !done && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 7,
      height: 14,
      background: 'rgb(16,185,129)',
      marginLeft: 2,
      verticalAlign: 'middle',
      animation: 'rb-blink 1s infinite'
    }
  }));
}

/* ---- Main overlay ------------------------------------------------------- */
function RebalanceFlow() {
  const [open, setOpen] = React.useState(false);
  const [streamIdx, setStreamIdx] = React.useState(0);
  const [showRationale, setShowRat] = React.useState(false);
  const [showAllocations, setShowAlloc] = React.useState(false);
  const [showCta, setShowCta] = React.useState(false);
  const [followUps, setFollowUps] = React.useState([]); // [{role:'user'|'assistant', text, streaming?}]
  const [draft, setDraft] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [showDeck, setShowDeck] = React.useState(false);
  const scrollRef = React.useRef(null);

  // Open/close events
  React.useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setStreamIdx(0);
      setShowRat(false);
      setShowAlloc(false);
      setShowCta(false);
      setFollowUps([]);
      setDraft('');
      setBusy(false);
      setShowDeck(false);
    };
    const onClose = () => setOpen(false);
    window.addEventListener('rebalance:open', onOpen);
    window.addEventListener('rebalance:close', onClose);
    return () => {
      window.removeEventListener('rebalance:open', onOpen);
      window.removeEventListener('rebalance:close', onClose);
    };
  }, []);

  // Esc closes
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Reveal rationale + allocations + CTA after streaming completes
  React.useEffect(() => {
    if (!open) return;
    if (streamIdx >= RB_THINKING_LINES.length) {
      const t1 = setTimeout(() => setShowRat(true), 300);
      const t2 = setTimeout(() => setShowAlloc(true), 1200);
      const t3 = setTimeout(() => setShowCta(true), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [streamIdx, open]);

  // Auto-scroll as content arrives
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [streamIdx, showRationale, showAllocations, showCta, followUps]);
  const handleAsk = async () => {
    const q = draft.trim();
    if (!q || busy) return;
    setDraft('');
    setBusy(true);
    setFollowUps(prev => [...prev, {
      role: 'user',
      text: q
    }, {
      role: 'assistant',
      text: '',
      streaming: true
    }]);
    try {
      const reply = await window.claude.complete({
        messages: [{
          role: 'user',
          content: `You are Field Intelligence, an AI assistant helping a financial advisor analyze a portfolio rebalance for client David Young (currently 22% Fixed Income / 58% Domestic Equity / 20% International Equity, target 15/65/20, Moderate Growth profile, $2.4M portfolio). Answer this advisor's follow-up question concisely (2-4 sentences, professional tone): ${q}`
        }]
      });
      setFollowUps(prev => prev.map((m, i) => i === prev.length - 1 ? {
        role: 'assistant',
        text: reply,
        streaming: false
      } : m));
    } catch (err) {
      setFollowUps(prev => prev.map((m, i) => i === prev.length - 1 ? {
        role: 'assistant',
        text: 'I had trouble generating a response. Please try again.',
        streaming: false
      } : m));
    }
    setBusy(false);
  };
  if (!open) return null;
  const handleGenerate = () => {
    setShowDeck(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(10,15,25,0.92)',
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      animation: 'rb-fadein 250ms ease-out',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes rb-fadein { from { opacity:0; } to { opacity:1; } }
        @keyframes rb-blink  { 0%,49% { opacity:1; } 50%,100% { opacity:0; } }
        @keyframes rb-rise   { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
        @keyframes rb-pulse  { 0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); } 50% { box-shadow: 0 0 0 8px rgba(16,185,129,0); } }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 28px',
      borderBottom: '1px solid rgba(75,85,99,0.5)'
    }
  }, showDeck ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowDeck(false),
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.7)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left",
    style: {
      width: 11,
      height: 11
    }
  }), "Back to analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 14,
      color: 'rgb(249,250,251)'
    }
  }, "Portfolio Rebalancing Recommendation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, "Prepared for ", RB_CLIENT.name)), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.open('advisor/Rebalance Deck - David Young.html', '_blank'),
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.7)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(229,231,235)',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12.5,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-up-right-from-square",
    style: {
      width: 11,
      height: 11
    }
  }), "Full screen")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      background: 'linear-gradient(135deg, rgb(5,122,85) 0%, rgb(16,185,129) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'rb-pulse 2.5s infinite'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-magic-sparkles",
    style: {
      width: 16,
      height: 16,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 14,
      color: 'rgb(249,250,251)'
    }
  }, "Field Intelligence"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, "Analyzing rebalance opportunity for ", RB_CLIENT.name))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid rgba(75,85,99,0.7)',
      background: 'rgba(255,255,255,0.04)',
      color: 'rgb(209,213,219)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      width: 13,
      height: 13
    }
  }))), showDeck && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      background: 'rgb(13,22,38)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "advisor/Rebalance Deck - David Young.html",
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block'
    },
    title: "Rebalancing Recommendation"
  })), !showDeck && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '40px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(75,85,99,0.5)',
      borderRadius: 12,
      marginBottom: 28,
      animation: 'rb-rise 400ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 9999,
      background: 'linear-gradient(135deg, rgb(56,189,248) 0%, rgb(139,92,246) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 13,
      color: '#fff'
    }
  }, RB_CLIENT.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 14,
      color: 'rgb(249,250,251)'
    }
  }, RB_CLIENT.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)'
    }
  }, RB_CLIENT.portfolio, " portfolio \xB7 ", RB_CLIENT.riskTolerance)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 11,
      padding: '5px 10px',
      borderRadius: 6,
      background: 'rgba(5,122,85,0.2)',
      color: 'rgb(16,185,129)',
      border: '1px solid rgba(5,122,85,0.45)'
    }
  }, "REBALANCE OPPORTUNITY")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgb(16,185,129)',
      marginBottom: 14,
      animation: 'rb-rise 400ms ease-out'
    }
  }, "Analysis in progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, RB_THINKING_LINES.slice(0, streamIdx + 1).map((line, i) => /*#__PURE__*/React.createElement(RBStreamLine, {
    key: i,
    line: line,
    delay: i === 0 ? 200 : 0,
    onComplete: () => setStreamIdx(prev => Math.max(prev, i + 1))
  }))), showRationale && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      animation: 'rb-rise 500ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgb(16,185,129)',
      marginBottom: 14
    }
  }, "Why portfolio rebalancing matters"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px 32px'
    }
  }, RB_PILLARS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      animation: `rb-rise 500ms ease-out ${i * 100}ms both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1,
      color: 'rgba(75,85,99,0.7)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.num), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 14,
      color: 'rgb(249,250,251)',
      marginBottom: 6
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(163,163,163)',
      lineHeight: 1.55
    }
  }, p.body)))))), showAllocations && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      animation: 'rb-rise 500ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgb(16,185,129)',
      marginBottom: 14
    }
  }, "Recommended adjustments"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      display: 'grid',
      gridTemplateColumns: '1fr 40px 1fr',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(163,163,163)',
      textAlign: 'center',
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "Current Allocation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, RB_CLIENT.current.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(75,85,99,0.5)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginBottom: 4
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 24,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.pct, "%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      width: 24,
      height: 24,
      color: 'rgb(16,185,129)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 10.5,
      color: 'rgb(163,163,163)',
      textAlign: 'center',
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "Recommended Allocation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, RB_CLIENT.recommended.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      background: 'rgba(5,122,85,0.06)',
      border: '1px solid rgba(5,122,85,0.45)',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(163,163,163)',
      marginBottom: 4
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 24,
      color: 'rgb(249,250,251)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.pct, "%")), a.delta !== 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: 11.5,
      padding: '4px 9px',
      borderRadius: 6,
      background: a.delta > 0 ? 'rgba(5,122,85,0.3)' : 'rgba(220,38,38,0.25)',
      color: a.delta > 0 ? 'rgb(16,185,129)' : 'rgb(248,113,113)',
      border: a.delta > 0 ? '1px solid rgba(5,122,85,0.55)' : '1px solid rgba(220,38,38,0.5)'
    }
  }, a.delta > 0 ? '+' : '', a.delta, "%"))))))), showCta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32,
      animation: 'rb-rise 500ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgb(16,185,129)',
      marginBottom: 14
    }
  }, "September 2025 market assessment"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8,
      borderTop: '1px solid rgba(75,85,99,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      color: 'rgb(209,213,219)',
      lineHeight: 1.55,
      marginBottom: 14
    }
  }, "Current market conditions present unique opportunities for tactical rebalancing while maintaining strategic asset allocation discipline."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10
    }
  }, RB_MARKET.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(75,85,99,0.5)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12.5,
      color: 'rgb(249,250,251)',
      marginBottom: 6
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(209,213,219)',
      lineHeight: 1.5,
      marginBottom: 8
    }
  }, m.body), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(16,185,129)',
      lineHeight: 1.5
    }
  }, m.accent)))))), showCta && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      background: 'linear-gradient(135deg, rgba(5,122,85,0.12) 0%, rgba(5,122,85,0.04) 100%)',
      border: '1px solid rgba(5,122,85,0.45)',
      borderRadius: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      animation: 'rb-rise 500ms ease-out 200ms both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      flexShrink: 0,
      background: 'rgba(5,122,85,0.25)',
      border: '1px solid rgba(5,122,85,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-file-powerpoint",
    style: {
      width: 20,
      height: 20,
      color: 'rgb(16,185,129)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 15,
      color: 'rgb(249,250,251)',
      marginBottom: 4
    }
  }, "Client presentation ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12.5,
      color: 'rgb(163,163,163)'
    }
  }, "6-slide rebalance recommendation prepared for ", RB_CLIENT.name)), /*#__PURE__*/React.createElement("button", {
    onClick: handleGenerate,
    style: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 13,
      padding: '12px 20px',
      borderRadius: 8,
      cursor: 'pointer',
      background: 'rgb(5,122,85)',
      border: '1px solid rgb(16,185,129)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 4px 12px rgba(5,122,85,0.4)'
    }
  }, "Open Presentation", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      width: 11,
      height: 11
    }
  }))), showCta && followUps.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, followUps.map((m, i) => m.role === 'user' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: 'flex-end',
      maxWidth: '80%',
      padding: '12px 16px',
      background: 'rgba(56,189,248,0.12)',
      border: '1px solid rgba(56,189,248,0.35)',
      borderRadius: '12px 12px 2px 12px',
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'rgb(229,231,235)',
      lineHeight: 1.5,
      animation: 'rb-rise 300ms ease-out'
    }
  }, m.text) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: 'flex-start',
      maxWidth: '85%',
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.55)',
      borderRadius: '12px 12px 12px 2px',
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'rgb(229,231,235)',
      lineHeight: 1.6,
      animation: 'rb-rise 300ms ease-out'
    }
  }, m.streaming && !m.text ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center',
      color: 'rgb(163,163,163)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'rgb(16,185,129)',
      animation: 'rb-blink 1s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'rgb(16,185,129)',
      animation: 'rb-blink 1s infinite 0.15s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: 'rgb(16,185,129)',
      animation: 'rb-blink 1s infinite 0.3s'
    }
  })) : m.text))))), showCta && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      borderTop: '1px solid rgba(75,85,99,0.5)',
      background: 'rgba(10,15,25,0.7)',
      backdropFilter: 'blur(8px)',
      padding: '14px 28px',
      animation: 'rb-rise 400ms ease-out 600ms both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto'
    }
  }, followUps.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, ['What\'s the tax impact?', 'How does this compare to peers?', 'Why not 70% equity?'].map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setDraft(s),
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      padding: '5px 10px',
      borderRadius: 9999,
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(75,85,99,0.6)',
      color: 'rgb(209,213,219)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(75,85,99,0.7)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-comment-dots",
    style: {
      width: 14,
      height: 14,
      color: 'rgb(163,163,163)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleAsk();
      }
    },
    placeholder: "Ask a follow-up about this rebalance\u2026",
    disabled: busy,
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'Inter',
      fontSize: 13.5,
      color: 'rgb(249,250,251)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleAsk,
    disabled: busy || !draft.trim(),
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      cursor: busy || !draft.trim() ? 'default' : 'pointer',
      background: busy || !draft.trim() ? 'rgba(75,85,99,0.4)' : 'rgb(5,122,85)',
      border: busy || !draft.trim() ? '1px solid rgba(75,85,99,0.6)' : '1px solid rgb(16,185,129)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: busy || !draft.trim() ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${busy ? 'circle-notch fa-spin' : 'arrow-up'}`,
    style: {
      width: 13,
      height: 13
    }
  })))))));
}
window.RebalanceFlow = RebalanceFlow;
;
/* ---- advisor/ios-frame.jsx ---- */
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
;
/* ---- advisor/ShareWithClient.jsx ---- */
/* ShareWithClient — secure client-portal share flow.
   Triggered by the "Share with Client" button on a client's Profile tab.
   Listens for window event 'share:open' (detail: { client, email, phone }).

   Left  : secure-link configuration + send action (live ties to the preview).
   Right : a real iPhone preview of the client's mobile portal — the same
           right-side profile tiles, tappable into detail screens.

   Icons are inline Lucide-style SVG (the page's fa-* shim only covers a subset,
   so anything outside it would render as a square — we avoid the shim entirely). */

/* ── advisory firm (client-facing brand — edit here) ───────────────── */
const ADV_FIRM = 'Meridian Wealth Partners';
const ADV_NAME = 'Avery Chen';
const ADV_ROLE = 'Senior Advisor';

/* ── shared tokens ─────────────────────────────────────────────────── */
const SW_GREEN = 'rgb(5,122,85)';
const SW_GREENB = 'rgb(16,185,129)';
const SW_INK = 'rgb(249,250,251)';
const SW_MUTE = 'rgb(163,163,163)';
const SW_SUB = 'rgb(209,213,219)';
const SW_LINE = 'rgba(75,85,99,0.55)';
const SW_CARD = 'rgba(255,255,255,0.05)';

/* ── inline Lucide icons ───────────────────────────────────────────── */
const SW_ICONS = {
  share: "<circle cx='18' cy='5' r='3'/><circle cx='6' cy='12' r='3'/><circle cx='18' cy='19' r='3'/><line x1='8.59' y1='13.51' x2='15.42' y2='17.49'/><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'/>",
  lock: "<rect width='18' height='11' x='3' y='11' rx='2' ry='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/>",
  wallet: "<path d='M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 1-1 1v-2'/><path d='M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4'/>",
  pie: "<path d='M21.21 15.89A10 10 0 1 1 8 2.83'/><path d='M22 12A10 10 0 0 0 12 2v10z'/>",
  line: "<path d='M3 3v18h18'/><path d='m19 9-5 5-4-4-3 3'/>",
  landmark: "<line x1='3' x2='21' y1='22' y2='22'/><line x1='6' x2='6' y1='18' y2='11'/><line x1='10' x2='10' y1='18' y2='11'/><line x1='14' x2='14' y1='18' y2='11'/><line x1='18' x2='18' y1='18' y2='11'/><polygon points='12 2 20 7 4 7'/>",
  trendUp: "<polyline points='22 7 13.5 15.5 8.5 10.5 2 17'/><polyline points='16 7 22 7 22 13'/>",
  receipt: "<path d='M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z'/><path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8'/><path d='M12 17.5v-11'/>",
  chevronRight: "<path d='m9 18 6-6-6-6'/>",
  chevronLeft: "<path d='m15 18-6-6 6-6'/>",
  arrowUp: "<path d='M12 19V5'/><path d='m5 12 7-7 7 7'/>",
  arrowDown: "<path d='M12 5v14'/><path d='m19 12-7 7-7-7'/>",
  eye: "<path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'/><circle cx='12' cy='12' r='3'/>",
  clock: "<circle cx='12' cy='12' r='10'/><polyline points='12 6 12 12 16 14'/>",
  shield: "<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/><path d='m9 12 2 2 4-4'/>",
  circleCheck: "<circle cx='12' cy='12' r='10'/><path d='m9 12 2 2 4-4'/>",
  circle: "<circle cx='12' cy='12' r='10'/>",
  send: "<path d='M22 2 11 13'/><path d='M22 2 15 22l-4-9-9-4Z'/>",
  check: "<polyline points='20 6 9 17 4 12'/>",
  copy: "<rect width='14' height='14' x='8' y='8' rx='2' ry='2'/><path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'/>",
  refresh: "<path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/><path d='M21 3v5h-5'/>",
  smartphone: "<rect width='14' height='20' x='5' y='2' rx='2' ry='2'/><path d='M12 18h.01'/>",
  x: "<path d='M18 6 6 18'/><path d='m6 6 12 12'/>"
};
function Icon({
  name,
  size = 14,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const inner = SW_ICONS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}

/* firm monogram mark */
function FirmMark({
  size = 26,
  radius = 7
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      flexShrink: 0,
      background: 'linear-gradient(135deg, rgb(16,185,129), rgb(5,122,85))',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: size * 0.5,
      letterSpacing: '-0.02em'
    }
  }, ADV_FIRM[0]);
}

/* ── tile registry — drives both the section toggles and the phone ──── */
const SW_SECTIONS = [{
  key: 'networth',
  label: 'Net Worth',
  icon: 'wallet'
}, {
  key: 'allocation',
  label: 'Asset Allocation',
  icon: 'pie'
}, {
  key: 'performance',
  label: 'Performance',
  icon: 'line'
}, {
  key: 'investment',
  label: 'Investment Overview',
  icon: 'landmark'
}, {
  key: 'unrealized',
  label: 'Unrealized Gains',
  icon: 'trendUp'
}, {
  key: 'tax',
  label: 'Tax Summary',
  icon: 'receipt'
}];

/* ════════════════════════════════════════════════════════════════════
   MOBILE PORTAL — what the client sees on their phone
   ════════════════════════════════════════════════════════════════════ */
const MP_BG = 'rgb(11,13,17)';
const MP_TILE = 'rgb(20,24,31)';
const MP_BORDER = 'rgba(75,85,99,0.5)';
function MPCard({
  icon,
  title,
  onTap,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onTap,
    style: {
      background: MP_TILE,
      border: `1px solid ${MP_BORDER}`,
      borderRadius: 18,
      padding: '15px 16px 14px',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      flexShrink: 0,
      background: 'rgba(5,122,85,0.16)',
      border: '1px solid rgba(16,185,129,0.35)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 13,
    color: SW_GREENB
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 600,
      color: SW_INK
    }
  }, title), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 15,
    color: SW_MUTE
  })), children);
}
function MPStat({
  label,
  value,
  color
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: SW_MUTE
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: color || SW_INK,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}

/* mini area chart for net worth */
function MPSpark() {
  const opts = React.useMemo(() => ({
    chart: {
      type: 'area',
      height: 108,
      backgroundColor: 'transparent',
      margin: [6, 2, 20, 2]
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      lineColor: 'rgba(75,85,99,0.4)',
      tickLength: 0,
      labels: {
        style: {
          color: 'rgb(120,124,134)',
          fontSize: '9px'
        }
      }
    },
    yAxis: {
      visible: false
    },
    tooltip: {
      backgroundColor: 'rgba(17,24,39,0.95)',
      borderColor: 'rgb(75,85,99)',
      style: {
        color: SW_INK,
        fontSize: '11px'
      },
      formatter: function () {
        return `<b>${this.x}</b><br/>$${(this.y / 1000).toFixed(2)}M`;
      }
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, 'rgba(5,122,85,0.35)'], [1, 'rgba(5,122,85,0)']]
        },
        lineWidth: 2,
        color: SW_GREEN,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      data: [5760, 5830, 5920, 6020, 6124]
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '2px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(HC, {
    options: opts
  }));
}

/* donut for allocation */
const MP_ALLOC = [{
  name: 'Domestic Stock',
  y: 35,
  dot: 'rgb( 94,214,164)',
  fill: 'rgba( 94,214,164,0.55)'
}, {
  name: 'Bond Funds',
  y: 25,
  dot: 'rgb(120,160,230)',
  fill: 'rgba(120,160,230,0.55)'
}, {
  name: 'International',
  y: 18,
  dot: 'rgb(180,150,235)',
  fill: 'rgba(180,150,235,0.55)'
}, {
  name: 'Alternatives',
  y: 10,
  dot: 'rgb(245,200, 90)',
  fill: 'rgba(245,200, 90,0.55)'
}, {
  name: 'Real Estate',
  y: 7,
  dot: 'rgb(240,140,120)',
  fill: 'rgba(240,140,120,0.55)'
}, {
  name: 'Cash',
  y: 5,
  dot: 'rgb(120,200,210)',
  fill: 'rgba(120,200,210,0.55)'
}];
function MPDonut({
  height = 128
}) {
  const opts = React.useMemo(() => ({
    chart: {
      type: 'pie',
      height,
      backgroundColor: 'transparent',
      margin: [2, 2, 2, 2]
    },
    tooltip: {
      pointFormat: '<b>{point.y}%</b>'
    },
    plotOptions: {
      pie: {
        innerSize: '66%',
        borderWidth: 1.5,
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      data: MP_ALLOC.map(d => ({
        name: d.name,
        y: d.y,
        color: d.fill,
        borderColor: d.dot
      }))
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), [height]);
  return /*#__PURE__*/React.createElement(HC, {
    options: opts
  });
}

/* small grouped column for performance */
function MPPerfBars() {
  const opts = React.useMemo(() => ({
    chart: {
      type: 'column',
      height: 124,
      backgroundColor: 'transparent',
      margin: [8, 2, 20, 2]
    },
    xAxis: {
      categories: ['QTD', 'YTD', 'ITD'],
      lineColor: 'rgba(75,85,99,0.5)',
      tickLength: 0,
      labels: {
        style: {
          color: 'rgb(120,124,134)',
          fontSize: '9px'
        }
      }
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      column: {
        borderWidth: 1.2,
        pointPadding: 0.06,
        groupPadding: 0.18,
        borderRadius: 2
      }
    },
    series: [{
      name: 'Portfolio',
      data: [13.2, 12.7, 68.1],
      color: 'rgba( 94,214,164,0.6)',
      borderColor: 'rgb( 94,214,164)'
    }, {
      name: 'S&P 500',
      data: [9.8, 14.2, 52.4],
      color: 'rgba(245,200, 90,0.55)',
      borderColor: 'rgb(245,200, 90)'
    }],
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }), []);
  return /*#__PURE__*/React.createElement(HC, {
    options: opts
  });
}
function MPRow({
  k,
  v,
  color,
  first
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '9px 0',
      borderTop: first ? 'none' : `1px solid rgba(75,85,99,0.4)`,
      fontFamily: 'Inter',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: SW_SUB
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color || SW_INK,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, v));
}

/* ── detail screens (one per tile) ─────────────────────────────────── */
function MPDetail({
  section
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  };
  if (section === 'networth') {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: SW_MUTE,
        marginBottom: 7
      }
    }, "Total net worth"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        color: SW_INK
      }
    }, "$6,124,145"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'Inter',
        fontSize: 13,
        color: SW_GREENB,
        fontWeight: 600,
        marginTop: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowUp",
      size: 12,
      color: SW_GREENB
    }), "6.33% year to date")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement(MPSpark, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '4px 16px 10px'
      }
    }, /*#__PURE__*/React.createElement(MPRow, {
      k: "Assets",
      v: "$6,850,000",
      first: true
    }), /*#__PURE__*/React.createElement(MPRow, {
      k: "Liabilities",
      v: "$725,855"
    }), /*#__PURE__*/React.createElement(MPRow, {
      k: "Cash on hand",
      v: "$586,929"
    }), /*#__PURE__*/React.createElement(MPRow, {
      k: "Net worth",
      v: "$6,124,145",
      color: SW_GREENB
    })));
  }
  if (section === 'allocation') {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '10px 16px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 170
      }
    }, /*#__PURE__*/React.createElement(MPDonut, {
      height: 170
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '4px 16px 8px'
      }
    }, MP_ALLOC.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '10px 0',
        borderTop: i === 0 ? 'none' : '1px solid rgba(75,85,99,0.4)',
        fontFamily: 'Inter',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 9,
        background: d.dot,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: SW_SUB
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: SW_INK,
        fontWeight: 600,
        fontVariantNumeric: 'tabular-nums'
      }
    }, d.y, "%")))));
  }
  if (section === 'performance') {
    const metrics = [['QTD', '+13.19%'], ['YTD', '+12.69%'], ['Since inception', '+68.10%'], ['Benchmark (S&P 500) YTD', '+14.21%'], ['Alpha YTD', '-1.52%']];
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '12px 16px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Inter',
        fontSize: 12,
        color: SW_SUB
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 9,
        background: 'rgb( 94,214,164)'
      }
    }), " Portfolio"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Inter',
        fontSize: 12,
        color: SW_SUB
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 9,
        background: 'rgb(245,200, 90)'
      }
    }), " S&P 500")), /*#__PURE__*/React.createElement(MPPerfBars, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '4px 16px 10px'
      }
    }, metrics.map((m, i) => /*#__PURE__*/React.createElement(MPRow, {
      key: i,
      k: m[0],
      v: m[1],
      color: m[1].startsWith('-') ? 'rgb(248,113,113)' : SW_GREENB,
      first: i === 0
    }))));
  }
  if (section === 'investment') {
    const rows = [['Stocks', '$1,512,195'], ['Non-custodied assets', '$2,424,275'], ['Cash', '$586,929'], ['Accrued income', '$165,419'], ['Inception date', 'Sep 8, 2020']];
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: SW_MUTE,
        marginBottom: 7
      }
    }, "Total invested"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        color: SW_INK
      }
    }, "$4,542,548")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '4px 16px 10px'
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement(MPRow, {
      key: i,
      k: r[0],
      v: r[1],
      first: i === 0
    }))));
  }
  if (section === 'unrealized') {
    const Block = ({
      label,
      gain,
      loss
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 0',
        borderTop: '1px solid rgba(75,85,99,0.4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: SW_MUTE,
        marginBottom: 8
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 700,
        color: SW_GREENB
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowUp",
      size: 13,
      color: SW_GREENB
    }), gain), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: SW_MUTE
      }
    }, "Gains")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 700,
        color: 'rgb(248,113,113)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowDown",
      size: 13,
      color: "rgb(248,113,113)"
    }), loss), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: SW_MUTE
      }
    }, "Losses"))));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '2px 16px 6px'
      }
    }, /*#__PURE__*/React.createElement(Block, {
      label: "Unrealized total",
      gain: "$199,195",
      loss: "$-7,195"
    }), /*#__PURE__*/React.createElement(Block, {
      label: "Long term",
      gain: "$142,650",
      loss: "$0"
    }), /*#__PURE__*/React.createElement(Block, {
      label: "Short term",
      gain: "$56,545",
      loss: "$-7,195"
    }));
  }
  if (section === 'tax') {
    const rows = [['Federal (32% bracket)', '$121,840', 'rgb(248,113,113)'], ['PA State (3.07%)', '$18,781', SW_INK], ['Long-term capital gains', '$21,397', SW_INK], ['Tax-loss harvest available', '-$7,195', SW_GREENB]];
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(MPStat, {
      label: "Total liability",
      value: "$184,320"
    }), /*#__PURE__*/React.createElement(MPStat, {
      label: "Effective rate",
      value: "30.1%",
      color: "rgb(234,179,8)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: MP_TILE,
        border: `1px solid ${MP_BORDER}`,
        borderRadius: 16,
        padding: '4px 16px 10px'
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement(MPRow, {
      key: i,
      k: r[0],
      v: r[1],
      color: r[2],
      first: i === 0
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Inter',
        fontSize: 11,
        color: SW_MUTE,
        lineHeight: 1.5,
        padding: '0 2px'
      }
    }, "Tax Year 2026 \xB7 estimated from 1099 & realized gains/losses. For planning purposes only."));
  }
  return null;
}

/* ── the portal screen (home list ↔ detail) ────────────────────────── */
const SW_VIZ_ICON = {
  donut: 'pie',
  area: 'line',
  line: 'line',
  column: 'trendUp',
  bar: 'trendUp',
  stacked: 'trendUp',
  scatter: 'trendUp',
  table: 'receipt',
  pivot: 'receipt',
  list: 'clock',
  kpi: 'wallet',
  cards: 'landmark',
  invoices: 'receipt'
};

/* a live tile, queried with the same scope the advisor is viewing */
function MPTileBody({
  cfg,
  scopeOf,
  height,
  detail
}) {
  const scope = scopeOf ? scopeOf(cfg) : null;
  const eff = React.useMemo(() => ({
    ...cfg,
    dateRange: scope && scope.dateRange,
    crossFilter: null,
    filters: [...(cfg.filters || []), ...(scope ? scope.extraFilters(cfg.ds) : [])]
  }), [JSON.stringify(cfg), scope && scope.key]);
  const q = React.useMemo(() => {
    try {
      return dmRunQuery(eff);
    } catch (e) {
      return null;
    }
  }, [eff]);
  const shown = detail ? cfg : {
    ...cfg,
    side: null
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      overflow: 'hidden',
      pointerEvents: detail ? 'auto' : 'none'
    }
  }, cfg.viz === 'invoices' && window.ClientInvoiceList ? /*#__PURE__*/React.createElement(ClientInvoiceList, {
    scope: scope
  }) : /*#__PURE__*/React.createElement(TileViz, {
    cfg: shown,
    q: q,
    height: 0,
    deltaCfg: eff
  }));
}
function MobilePortal({
  client,
  visible,
  tiles,
  scopeOf
}) {
  const [screen, setScreen] = React.useState(null); // null = home, else tile id
  const sec = tiles.find(t => t.id === screen);
  const shown = tiles.filter(t => visible[t.id]);
  const firstName = String(client).split(' ')[0];
  const total = React.useMemo(() => {
    try {
      const sc = scopeOf ? scopeOf({
        ds: 'holdings'
      }) : null;
      const q = dmRunQuery({
        ds: 'holdings',
        viz: 'kpi',
        values: [{
          k: 'market_value',
          agg: 'sum'
        }],
        filters: sc ? sc.extraFilters('holdings') : []
      });
      return q.totals[q.valueCols[0].key] || 0;
    } catch (e) {
      return 0;
    }
  }, [client, scopeOf]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: MP_BG,
      color: SW_INK
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 6,
      paddingTop: 50,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 16,
      background: 'rgba(11,13,17,0.86)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${MP_BORDER}`,
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      minHeight: 50
    }
  }, screen === null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FirmMark, {
    size: 30,
    radius: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, ADV_FIRM), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11,
      color: SW_MUTE
    }
  }, "Client portal")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 9px',
      borderRadius: 999,
      flexShrink: 0,
      background: 'rgba(5,122,85,0.16)',
      border: '1px solid rgba(16,185,129,0.35)',
      fontFamily: 'Inter',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'rgb(110,231,183)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 10,
    color: "rgb(110,231,183)"
  }), " Secure")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen(null),
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      flexShrink: 0,
      background: MP_TILE,
      border: `1px solid ${MP_BORDER}`,
      color: SW_INK,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 15,
    color: SW_INK
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, sec && sec.title), /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14,
    color: SW_MUTE
  }))), screen === null ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Hello, ", firstName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      color: SW_MUTE,
      marginBottom: 20
    }
  }, "Your portfolio \xB7 as of Jul 27, 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(5,122,85,0.24), rgba(20,24,31,0.55))',
      border: '1px solid rgba(16,185,129,0.35)',
      borderRadius: 20,
      padding: '24px 22px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'rgb(167,243,208)',
      marginBottom: 12
    }
  }, "Total portfolio value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1
    }
  }, '$' + Math.round(total).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(MPCard, {
    key: t.id,
    icon: SW_VIZ_ICON[t.viz] || 'line',
    title: t.title,
    onTap: () => setScreen(t.id)
  }, /*#__PURE__*/React.createElement(MPTileBody, {
    cfg: t,
    scopeOf: scopeOf,
    height: (t.kpis || []).length ? 230 : 180
  }))), !shown.length && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      color: SW_MUTE,
      textAlign: 'center',
      padding: '24px 0'
    }
  }, "No tiles shared yet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      marginTop: 20,
      fontFamily: 'Inter',
      fontSize: 11,
      color: SW_MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 10,
    color: SW_MUTE
  }), " Read-only \xB7 shared by ", ADV_NAME)) : /*#__PURE__*/React.createElement("div", {
    key: screen,
    style: {
      padding: '24px 16px 44px',
      animation: 'mp-slide 280ms cubic-bezier(0.22,1,0.36,1)'
    }
  }, sec && /*#__PURE__*/React.createElement("div", {
    style: {
      background: MP_TILE,
      border: `1px solid ${MP_BORDER}`,
      borderRadius: 16,
      padding: '14px 14px 12px'
    }
  }, /*#__PURE__*/React.createElement(MPTileBody, {
    cfg: sec,
    scopeOf: scopeOf,
    height: sec.side === 'table' ? 560 : 440,
    detail: true
  }))));
}

/* ════════════════════════════════════════════════════════════════════
   PHONE — scales to fit the available height
   ════════════════════════════════════════════════════════════════════ */
function PhonePreview({
  client,
  visible,
  tiles,
  scopeOf
}) {
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(0.8);
  React.useEffect(() => {
    const fit = () => {
      const el = wrapRef.current;
      if (!el) return;
      const s = Math.min((el.clientHeight - 20) / 874, (el.clientWidth - 8) / 402, 0.9);
      setScale(Math.max(0.4, s));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 402 * scale,
      height: 874 * scale,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: 402,
      height: 874
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    dark: true
  }, /*#__PURE__*/React.createElement(MobilePortal, {
    client: client,
    visible: visible,
    tiles: tiles,
    scopeOf: scopeOf
  })))));
}

/* ════════════════════════════════════════════════════════════════════
   ROOT OVERLAY
   ════════════════════════════════════════════════════════════════════ */
function ShareWithClient() {
  const store = useShareStore();
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState('share');
  const [device, setDevice] = React.useState('mobile');
  const [recip, setRecip] = React.useState({
    client: 'David Young',
    email: 'joe.smith@gmail.com',
    phone: '215-555-5555'
  });
  const [sent, setSent] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [templateId, setTemplateId] = React.useState(store.settings.templateId);
  const [visible, setVisible] = React.useState({});
  const [tiles, setTiles] = React.useState([]);
  const [scopeOf, setScopeOf] = React.useState(null);
  const link = 'portal.meridianwealth.com/v/9f2a7c41';
  React.useEffect(() => {
    const onOpen = e => {
      const d = e.detail || {};
      if (e.detail) setRecip(r => ({
        ...r,
        ...d
      }));
      const src = window.__clientShare;
      const live = src && (!d.client || src.client === d.client) ? src : null;
      /* advisor-only: the activity feed carries CRM notes and internal tasks */
      const ADVISOR_ONLY = t => t.ds === 'activity' || /recent activit/i.test(t.title || '');
      const list = (d.tiles || live && live.tiles || []).filter(t => t && t.title && !ADVISOR_ONLY(t));
      setTiles(list);
      setScopeOf(() => live ? live.scopeOf : null);
      setSent(false);
      setCopied(false);
      setView('share');
      const tid = store.settings.templateId;
      setTemplateId(tid);
      setVisible(sxApply(store.templates.find(t => t.id === tid), list));
      setOpen(true);
    };
    window.addEventListener('share:open', onOpen);
    return () => window.removeEventListener('share:open', onOpen);
  }, [store.settings.templateId, store.templates]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText('https://' + link);
    } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const pickTemplate = id => {
    setTemplateId(id);
    setVisible(sxApply(store.templates.find(t => t.id === id), tiles));
    setSent(false);
  };
  const saveTemplate = name => {
    const titles = tiles.filter(t => visible[t.id]).map(t => t.title);
    const id = 'tpl-' + Date.now();
    store.setTemplates(ts => [...ts, {
      id,
      name,
      desc: titles.slice(0, 3).join(', ') + (titles.length > 3 ? ' +' + (titles.length - 3) : ''),
      titles
    }]);
    setTemplateId(id);
  };
  if (!open) return null;
  const firstName = String(recip.client).split(' ')[0];
  const st = store.settings;
  const tab = (k, label, icon) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setView(k),
    style: {
      height: 32,
      padding: '0 13px',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: view === k ? 'rgba(255,255,255,0.08)' : 'transparent',
      color: view === k ? SW_INK : SW_MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 13,
    color: view === k ? SW_INK : SW_MUTE
  }), label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(8,11,18,0.93)',
      backdropFilter: 'blur(18px) saturate(140%)',
      WebkitBackdropFilter: 'blur(18px) saturate(140%)',
      animation: 'sw-fade 220ms ease-out',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes sw-fade { from { opacity:0; } to { opacity:1; } }
        @keyframes mp-slide { from { opacity:0; transform: translateX(18px); } to { opacity:1; transform: translateX(0); } }
        .sw-scroll::-webkit-scrollbar { width:8px; }
        .sw-scroll::-webkit-scrollbar-thumb { background:rgba(75,85,99,0.5); border-radius:8px; }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '14px 26px',
      borderBottom: `1px solid ${SW_LINE}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      background: 'rgba(5,122,85,0.18)',
      border: '1px solid rgba(16,185,129,0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 15,
    color: SW_GREENB
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: SW_INK
    }
  }, "Share with Client"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SW_MUTE
    }
  }, "Send ", recip.client, " a secure, read-only link to their portfolio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 3,
      borderRadius: 10,
      border: `1px solid ${SW_LINE}`
    }
  }, tab('share', 'Share', 'send'), tab('settings', 'Settings', 'settings')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${SW_LINE}`,
      color: SW_SUB,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15,
    color: SW_SUB
  }))), view === 'settings' ? /*#__PURE__*/React.createElement(ShareSettingsView, {
    client: recip.client,
    email: recip.email,
    phone: recip.phone,
    store: store,
    tiles: tiles
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      gridTemplateColumns: 'minmax(380px, 440px) 1fr',
      gridTemplateRows: 'minmax(0, 1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-scroll",
    style: {
      borderRight: `1px solid ${SW_LINE}`,
      overflowY: 'auto',
      padding: '24px 26px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px',
      borderRadius: 12,
      border: `1px solid ${SW_LINE}`,
      background: SW_CARD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      flexShrink: 0,
      background: 'linear-gradient(135deg,#f0abfc,#c084fc)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 16
    }
  }, firstName[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: SW_INK
    }
  }, recip.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SW_MUTE,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, recip.email)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: SW_MUTE,
      padding: '4px 9px',
      borderRadius: 999,
      border: `1px solid ${SW_LINE}`
    }
  }, "Client")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: SW_MUTE,
      marginBottom: 9
    }
  }, "Secure link"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 4px 0 12px',
      height: 42,
      borderRadius: 10,
      border: `1px solid ${SW_LINE}`,
      background: 'rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13,
    color: SW_GREENB
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 12.5,
      color: SW_SUB,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontVariantNumeric: 'tabular-nums'
    }
  }, link), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      height: 32,
      padding: '0 12px',
      borderRadius: 7,
      flexShrink: 0,
      cursor: 'pointer',
      background: copied ? 'rgba(5,122,85,0.2)' : 'rgba(255,255,255,0.06)',
      border: `1px solid ${copied ? 'rgba(16,185,129,0.5)' : SW_LINE}`,
      color: copied ? 'rgb(110,231,183)' : SW_SUB,
      fontSize: 12,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copied ? 'check' : 'copy',
    size: 12,
    color: copied ? 'rgb(110,231,183)' : SW_SUB
  }), copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: SW_MUTE,
      marginTop: 7
    }
  }, "Read-only \xB7 expires in 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(SxTemplatePicker, {
    templates: store.templates,
    templateId: templateId,
    onPick: pickTemplate,
    tiles: tiles,
    visible: visible,
    setVisible: setVisible,
    onSaveTemplate: saveTemplate,
    firstName: firstName
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setView('settings'),
    style: {
      marginTop: 14,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 12px',
      borderRadius: 10,
      cursor: 'pointer',
      textAlign: 'left',
      background: 'transparent',
      border: `1px dashed ${SW_LINE}`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: st.auto ? SW_GREENB : SW_MUTE
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12,
      color: SW_SUB
    }
  }, st.auto ? /*#__PURE__*/React.createElement(React.Fragment, null, "Auto-sends ", st.freq.toLowerCase(), " \xB7 next ", sxNextSend(st)) : 'Automatic sending is off'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(110,231,183)'
    }
  }, "Manage")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, !sent ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setSent(true),
    style: {
      width: '100%',
      height: 46,
      borderRadius: 11,
      cursor: 'pointer',
      border: '1px solid rgba(16,185,129,0.6)',
      background: 'linear-gradient(180deg, rgb(7,140,98), rgb(5,110,76))',
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      boxShadow: '0 8px 24px rgba(5,122,85,0.32)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 15,
    color: "#fff"
  }), "Send secure link to ", firstName) : /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 13,
      border: '1px solid rgba(16,185,129,0.45)',
      background: 'rgba(5,122,85,0.12)',
      padding: '18px',
      animation: 'mp-slide 300ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: SW_GREEN,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: SW_INK
    }
  }, "Secure link sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SW_SUB
    }
  }, "Emailed to ", recip.email))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 15
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      flex: 1,
      height: 38,
      borderRadius: 9,
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.06)',
      border: `1px solid ${SW_LINE}`,
      color: SW_SUB,
      fontSize: 12.5,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copied ? 'check' : 'copy',
    size: 12,
    color: SW_SUB
  }), copied ? 'Copied' : 'Copy link'), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSent(false);
      setTimeout(() => setSent(true), 50);
    },
    style: {
      flex: 1,
      height: 38,
      borderRadius: 9,
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.06)',
      border: `1px solid ${SW_LINE}`,
      color: SW_SUB,
      fontSize: 12.5,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 12,
    color: SW_SUB
  }), "Resend"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      minHeight: 0,
      background: 'radial-gradient(circle at 50% 30%, rgba(5,122,85,0.1), transparent 60%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '14px 0 4px',
      fontFamily: 'Inter',
      fontSize: 12,
      color: SW_MUTE,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "What ", firstName, " sees on"), /*#__PURE__*/React.createElement(SxSeg, {
    options: [{
      value: 'mobile',
      label: 'Mobile',
      icon: 'smartphone'
    }, {
      value: 'desktop',
      label: 'Desktop',
      icon: 'monitor'
    }],
    value: device,
    onChange: setDevice
  })), device === 'mobile' ? /*#__PURE__*/React.createElement(PhonePreview, {
    client: recip.client,
    visible: visible,
    tiles: tiles,
    scopeOf: scopeOf
  }) : /*#__PURE__*/React.createElement(DesktopPreview, {
    client: recip.client,
    visible: visible,
    tiles: tiles,
    scopeOf: scopeOf,
    link: link
  }))));
}
function SettingRow({
  icon,
  title,
  sub,
  right,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '13px 14px',
      borderBottom: last ? 'none' : `1px solid rgba(75,85,99,0.4)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${SW_LINE}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: SW_MUTE
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: 500,
      color: SW_INK
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: SW_MUTE
    }
  }, sub)), right);
}
function Toggle({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 42,
      height: 24,
      borderRadius: 999,
      cursor: 'pointer',
      flexShrink: 0,
      position: 'relative',
      background: on ? SW_GREEN : 'rgba(120,124,134,0.4)',
      border: 'none',
      transition: 'background 180ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 20 : 2,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: '#fff',
      transition: 'left 180ms ease'
    }
  }));
}
Object.assign(window, {
  ShareWithClient,
  SW_ICONS,
  Icon,
  FirmMark,
  Toggle,
  MPTileBody,
  ADV_FIRM_NAME: ADV_FIRM,
  ADV_PERSON: ADV_NAME
});
;
/* ---- advisor/ShareExtras.jsx ---- */
/* ShareExtras — templates, AI tile editing, share settings view and desktop preview
   for the ShareWithClient overlay. Loaded after ShareWithClient.jsx. */

Object.assign(window.SW_ICONS, {
  sparkle: "<path d='M9.94 14.06 4 20'/><path d='M12 3v3'/><path d='M18.36 5.64l-2.12 2.12'/><path d='M21 12h-3'/><path d='M6 12H3'/><path d='M18.36 18.36l-2.12-2.12'/><path d='M12 18v3'/><path d='M7.76 7.76 5.64 5.64'/>",
  settings: "<path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'/><circle cx='12' cy='12' r='3'/>",
  monitor: "<rect width='20' height='14' x='2' y='3' rx='2'/><line x1='8' x2='16' y1='21' y2='21'/><line x1='12' x2='12' y1='17' y2='21'/>",
  calendar: "<rect width='18' height='18' x='3' y='4' rx='2' ry='2'/><line x1='16' x2='16' y1='2' y2='6'/><line x1='8' x2='8' y1='2' y2='6'/><line x1='3' x2='21' y1='10' y2='10'/>",
  trash: "<path d='M3 6h18'/><path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'/><path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'/>",
  pencil: "<path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'/>",
  layers: "<path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65'/><path d='m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65'/>",
  mail: "<rect width='20' height='16' x='2' y='4' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>"
});
const SX_INK = 'rgb(249,250,251)',
  SX_MUTE = 'rgb(163,163,163)',
  SX_SUB = 'rgb(209,213,219)',
  SX_LINE = 'rgba(75,85,99,0.55)',
  SX_CARD = 'rgba(255,255,255,0.05)',
  SX_GREEN = 'rgb(5,122,85)',
  SX_GREENB = 'rgb(16,185,129)',
  SX_MINT = 'rgb(110,231,183)';
const SX_CAP = {
  fontSize: 11.5,
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: SX_MUTE,
  marginBottom: 9
};

/* ── templates + settings store (persisted) ───────────────────────── */
const SX_DEFAULT_TEMPLATES = [{
  id: 'full',
  name: 'Full portfolio',
  desc: 'Every client-safe tile',
  match: null,
  builtin: true
}, {
  id: 'snapshot',
  name: 'Monthly snapshot',
  desc: 'Net worth, allocation and performance',
  match: ['net worth', 'allocation', 'performance', 'balance', 'value'],
  builtin: true
}, {
  id: 'tax',
  name: 'Tax review',
  desc: 'Tax, gains and income',
  match: ['tax', 'gain', 'realiz', 'income', 'loss'],
  builtin: true
}];
const SX_DEFAULT_SETTINGS = {
  auto: true,
  freq: 'Monthly',
  day: '1st of the month',
  templateId: 'snapshot',
  channel: 'Email',
  review: true
};
function sxLoad(k, d) {
  try {
    const v = JSON.parse(localStorage.getItem(k));
    return v == null ? d : v;
  } catch (e) {
    return d;
  }
}
function useShareStore() {
  const [templates, setTemplates] = React.useState(() => sxLoad('field.share.templates', SX_DEFAULT_TEMPLATES));
  const [settings, setSettings] = React.useState(() => ({
    ...SX_DEFAULT_SETTINGS,
    ...sxLoad('field.share.settings', {})
  }));
  React.useEffect(() => {
    localStorage.setItem('field.share.templates', JSON.stringify(templates));
  }, [templates]);
  React.useEffect(() => {
    localStorage.setItem('field.share.settings', JSON.stringify(settings));
  }, [settings]);
  return {
    templates,
    setTemplates,
    settings,
    setSettings
  };
}
function sxApply(tpl, tiles) {
  const on = t => {
    if (!tpl) return true;
    if (tpl.titles) return tpl.titles.includes(t.title);
    if (!tpl.match) return true;
    const s = String(t.title).toLowerCase();
    return tpl.match.some(m => s.includes(m));
  };
  return Object.fromEntries(tiles.map(t => [t.id, on(t)]));
}
function sxNextSend(s) {
  const now = new Date(2026, 9, 7);
  let m = now.getMonth() + 1,
    y = now.getFullYear();
  if (s.freq === 'Quarterly') {
    m = Math.ceil((now.getMonth() + 1) / 3) * 3;
  }
  if (m > 11) {
    m -= 12;
    y++;
  }
  let d;
  if (s.day === '15th of the month') d = new Date(y, m, 15);else if (s.day === 'Last business day') {
    d = new Date(y, m + 1, 0);
    while ([0, 6].includes(d.getDay())) d.setDate(d.getDate() - 1);
  } else d = new Date(y, m, 1);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/* ── AI: edit the tile selection from a plain-language instruction ── */
async function sxAiAdjust(q, tiles, visible) {
  const titles = tiles.map(t => t.title);
  const cur = tiles.filter(t => visible[t.id]).map(t => t.title);
  try {
    const reply = await window.claude.complete({
      messages: [{
        role: 'user',
        content: `You choose which dashboard tiles a wealth advisor shares with a client in a read-only report.
Available tiles: ${JSON.stringify(titles)}
Currently included: ${JSON.stringify(cur)}
Advisor instruction: "${q}"
Reply with ONLY JSON: {"include":[exact titles from the available list],"name":"short template name, max 4 words","summary":"one short sentence describing what changed"}`
      }]
    });
    const j = JSON.parse(String(reply).match(/\{[\s\S]*\}/)[0]);
    const inc = new Set((j.include || []).filter(x => titles.includes(x)));
    return {
      visible: Object.fromEntries(tiles.map(t => [t.id, inc.has(t.title)])),
      name: j.name || 'Custom template',
      summary: j.summary || 'Updated tiles.'
    };
  } catch (e) {
    const s = q.toLowerCase(),
      remove = /remove|drop|without|exclude|hide|no /.test(s);
    const hit = t => String(t.title).toLowerCase().split(/\s+/).some(w => w.length > 3 && s.includes(w));
    const next = {
      ...visible
    };
    const changed = [];
    tiles.forEach(t => {
      if (hit(t)) {
        next[t.id] = !remove;
        changed.push(t.title);
      }
    });
    return {
      visible: next,
      name: 'Custom template',
      summary: changed.length ? (remove ? 'Removed ' : 'Added ') + changed.join(', ') + '.' : 'No matching tiles found.'
    };
  }
}

/* ── small controls ────────────────────────────────────────────────── */
function SxSeg({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 3,
      borderRadius: 9,
      border: `1px solid ${SX_LINE}`,
      background: 'rgba(0,0,0,0.25)'
    }
  }, options.map(o => {
    const k = o.value || o,
      on = value === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onChange(k),
      style: {
        height: 28,
        padding: '0 11px',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: 'none',
        background: on ? 'rgba(5,122,85,0.25)' : 'transparent',
        color: on ? SX_MINT : SX_MUTE
      }
    }, o.icon && /*#__PURE__*/React.createElement(Icon, {
      name: o.icon,
      size: 13,
      color: on ? SX_MINT : SX_MUTE
    }), o.label || o);
  }));
}
function SxSelect({
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      height: 32,
      padding: '0 10px',
      borderRadius: 8,
      fontSize: 12.5,
      fontFamily: 'Inter',
      background: 'rgba(0,0,0,0.3)',
      color: SX_INK,
      border: `1px solid ${SX_LINE}`,
      cursor: 'pointer',
      maxWidth: 220
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value || o,
    value: o.value || o
  }, o.label || o)));
}
const sxBtn = {
  height: 30,
  padding: '0 11px',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 12,
  fontWeight: 600,
  background: 'rgba(255,255,255,0.05)',
  border: `1px solid ${SX_LINE}`,
  color: SX_SUB,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6
};

/* ── template picker + AI editor (left column of the Share view) ──── */
function SxTemplatePicker({
  templates,
  templateId,
  onPick,
  tiles,
  visible,
  setVisible,
  onSaveTemplate,
  firstName
}) {
  const [q, setQ] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [note, setNote] = React.useState(null);
  const [saveName, setSaveName] = React.useState(null);
  const tpl = templates.find(t => t.id === templateId);
  const base = sxApply(tpl, tiles);
  const custom = tiles.some(t => !!base[t.id] !== !!visible[t.id]);
  const count = tp => Object.values(sxApply(tp, tiles)).filter(Boolean).length;
  const run = async () => {
    if (!q.trim() || busy) return;
    setBusy(true);
    setNote(null);
    const r = await sxAiAdjust(q.trim(), tiles, visible);
    setVisible(r.visible);
    setNote(r.summary);
    setSaveName(null);
    setQ('');
    setBusy(false);
    setSaveName(null);
    window.__sxSuggest = r.name;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SX_CAP,
      flex: 1
    }
  }, "Template")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, templates.map(tp => {
    const on = tp.id === templateId;
    return /*#__PURE__*/React.createElement("button", {
      key: tp.id,
      onClick: () => {
        onPick(tp.id);
        setNote(null);
        setSaveName(null);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        borderRadius: 10,
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'rgba(5,122,85,0.1)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${on ? 'rgba(16,185,129,0.45)' : SX_LINE}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'circleCheck' : 'circle',
      size: 16,
      color: on ? SX_GREENB : 'rgba(120,124,134,0.6)'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: on ? SX_INK : SX_SUB
      }
    }, tp.name, on && custom ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: SX_MUTE,
        fontWeight: 500
      }
    }, " \xB7 edited") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: SX_MUTE,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, tp.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: SX_MUTE,
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0
      }
    }, count(tp), " tiles"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      borderRadius: 12,
      border: `1px solid ${SX_LINE}`,
      background: SX_CARD,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      fontWeight: 600,
      color: SX_INK,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 13,
    color: SX_GREENB
  }), "Adjust with AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') run();
    },
    disabled: busy,
    placeholder: `e.g. Add tax summary, leave out invoices`,
    style: {
      flex: 1,
      minWidth: 0,
      height: 36,
      padding: '0 11px',
      borderRadius: 8,
      fontSize: 12.5,
      fontFamily: 'Inter',
      outline: 'none',
      background: 'rgba(0,0,0,0.3)',
      color: SX_INK,
      border: `1px solid ${SX_LINE}`
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: run,
    disabled: busy || !q.trim(),
    style: {
      ...sxBtn,
      height: 36,
      opacity: q.trim() ? 1 : 0.5,
      background: 'rgba(5,122,85,0.2)',
      border: '1px solid rgba(16,185,129,0.45)',
      color: SX_MINT
    }
  }, busy ? 'Working…' : 'Apply')), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SX_SUB,
      marginTop: 9,
      lineHeight: 1.45
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 11
    }
  }, tiles.map(t => {
    const on = visible[t.id];
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      title: on ? 'Remove' : 'Add',
      onClick: () => setVisible(v => ({
        ...v,
        [t.id]: !v[t.id]
      })),
      style: {
        height: 26,
        padding: '0 9px',
        borderRadius: 999,
        cursor: 'pointer',
        fontSize: 11.5,
        fontWeight: 500,
        maxWidth: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        background: on ? 'rgba(5,122,85,0.14)' : 'transparent',
        border: `1px solid ${on ? 'rgba(16,185,129,0.4)' : SX_LINE}`,
        color: on ? SX_INK : SX_MUTE,
        textDecoration: on ? 'none' : 'line-through'
      }
    }, on && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 11,
      color: SX_GREENB
    }), t.title);
  })), custom && (saveName === null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      paddingTop: 11,
      borderTop: '1px solid rgba(75,85,99,0.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 11.5,
      color: SX_MUTE
    }
  }, "Changed from ", tpl ? tpl.name : 'template'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVisible(base),
    style: {
      ...sxBtn,
      height: 28
    }
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaveName(window.__sxSuggest || ''),
    style: {
      ...sxBtn,
      height: 28,
      color: SX_MINT,
      border: '1px solid rgba(16,185,129,0.45)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 12,
    color: SX_MINT
  }), "Save as template")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginTop: 12,
      paddingTop: 11,
      borderTop: '1px solid rgba(75,85,99,0.4)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: saveName,
    onChange: e => setSaveName(e.target.value),
    placeholder: "Template name",
    onKeyDown: e => {
      if (e.key === 'Enter' && saveName.trim()) {
        onSaveTemplate(saveName.trim());
        setSaveName(null);
        setNote(null);
      }
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: 32,
      padding: '0 10px',
      borderRadius: 8,
      fontSize: 12.5,
      fontFamily: 'Inter',
      outline: 'none',
      background: 'rgba(0,0,0,0.3)',
      color: SX_INK,
      border: `1px solid ${SX_LINE}`
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaveName(null),
    style: {
      ...sxBtn,
      height: 32
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    disabled: !saveName.trim(),
    onClick: () => {
      onSaveTemplate(saveName.trim());
      setSaveName(null);
      setNote(null);
    },
    style: {
      ...sxBtn,
      height: 32,
      background: SX_GREEN,
      border: '1px solid rgba(16,185,129,0.6)',
      color: '#fff',
      opacity: saveName.trim() ? 1 : 0.5
    }
  }, "Save")))));
}

/* ── Settings view ─────────────────────────────────────────────────── */
function SxRow({
  title,
  sub,
  right,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid rgba(75,85,99,0.4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: SX_INK
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: SX_MUTE,
      marginTop: 2
    }
  }, sub)), right);
}
const sxPanel = {
  borderRadius: 12,
  border: `1px solid ${SX_LINE}`,
  background: SX_CARD,
  overflow: 'hidden'
};
function ShareSettingsView({
  client,
  email,
  phone,
  store,
  tiles
}) {
  const {
    settings: s,
    setSettings,
    templates,
    setTemplates
  } = store;
  const set = (k, v) => setSettings(p => ({
    ...p,
    [k]: v
  }));
  const [renaming, setRenaming] = React.useState(null);
  const firstName = String(client).split(' ')[0];
  const count = tp => Object.values(sxApply(tp, tiles)).filter(Boolean).length;
  const def = templates.find(t => t.id === s.templateId) || templates[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "sw-scroll",
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '28px 26px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: SX_CAP
  }, "Automatic sharing \xB7 ", client), /*#__PURE__*/React.createElement("div", {
    style: sxPanel
  }, /*#__PURE__*/React.createElement(SxRow, {
    title: "Send automatically",
    sub: s.auto ? `Next send ${sxNextSend(s)} using ${def ? def.name : '—'}` : 'Links are only sent when you share manually',
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: s.auto,
      onClick: () => set('auto', !s.auto)
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: s.auto ? 1 : 0.45,
      pointerEvents: s.auto ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement(SxRow, {
    title: "Frequency",
    right: /*#__PURE__*/React.createElement(SxSeg, {
      options: ['Monthly', 'Quarterly'],
      value: s.freq,
      onChange: v => set('freq', v)
    })
  }), /*#__PURE__*/React.createElement(SxRow, {
    title: "Send on",
    right: /*#__PURE__*/React.createElement(SxSelect, {
      value: s.day,
      options: ['1st of the month', '15th of the month', 'Last business day'],
      onChange: v => set('day', v)
    })
  }), /*#__PURE__*/React.createElement(SxRow, {
    title: "Template",
    sub: "What each scheduled report includes",
    right: /*#__PURE__*/React.createElement(SxSelect, {
      value: s.templateId,
      options: templates.map(t => ({
        value: t.id,
        label: t.name
      })),
      onChange: v => set('templateId', v)
    })
  }), /*#__PURE__*/React.createElement(SxRow, {
    title: "Delivery",
    sub: s.channel === 'Email' ? email : `${email} · ${phone}`,
    right: /*#__PURE__*/React.createElement(SxSeg, {
      options: ['Email', 'Email + text'],
      value: s.channel,
      onChange: v => set('channel', v)
    })
  }), /*#__PURE__*/React.createElement(SxRow, {
    title: "Hold for my review",
    sub: "Queue each send in your inbox 2 days early; it goes out only after you approve",
    last: true,
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: s.review,
      onClick: () => set('review', !s.review)
    })
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SX_CAP,
      flex: 1
    }
  }, "Templates"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: SX_MUTE
    }
  }, "Shared across all clients")), /*#__PURE__*/React.createElement("div", {
    style: sxPanel
  }, templates.map((tp, i) => /*#__PURE__*/React.createElement("div", {
    key: tp.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: i === templates.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 15,
    color: SX_MUTE
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, renaming === tp.id ? /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    defaultValue: tp.name,
    onBlur: e => {
      const v = e.target.value.trim();
      if (v) setTemplates(ts => ts.map(t => t.id === tp.id ? {
        ...t,
        name: v
      } : t));
      setRenaming(null);
    },
    onKeyDown: e => {
      if (e.key === 'Enter') e.target.blur();
      if (e.key === 'Escape') setRenaming(null);
    },
    style: {
      height: 28,
      width: '100%',
      maxWidth: 280,
      padding: '0 8px',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'Inter',
      outline: 'none',
      background: 'rgba(0,0,0,0.3)',
      color: SX_INK,
      border: `1px solid ${SX_LINE}`
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 600,
      color: SX_INK
    }
  }, tp.name, tp.id === s.templateId && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: SX_MINT,
      padding: '2px 7px',
      borderRadius: 999,
      background: 'rgba(5,122,85,0.18)',
      border: '1px solid rgba(16,185,129,0.35)'
    }
  }, "Scheduled")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: SX_MUTE,
      marginTop: 2
    }
  }, tp.desc, " \xB7 ", count(tp), " tiles for ", firstName)), /*#__PURE__*/React.createElement("button", {
    title: "Rename",
    onClick: () => setRenaming(tp.id),
    style: {
      ...sxBtn,
      width: 30,
      padding: 0,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 12,
    color: SX_SUB
  })), !tp.builtin && /*#__PURE__*/React.createElement("button", {
    title: "Delete",
    onClick: () => {
      setTemplates(ts => ts.filter(t => t.id !== tp.id));
      if (s.templateId === tp.id) set('templateId', 'snapshot');
    },
    style: {
      ...sxBtn,
      width: 30,
      padding: 0,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 12,
    color: SX_SUB
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: SX_MUTE,
      marginTop: 9
    }
  }, "Create a template from the Share tab: adjust the tiles, then choose Save as template.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 12,
      color: SX_MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13,
    color: SX_MUTE
  }), "Every link is read-only and expires after 30 days. Each send issues a new link.")));
}

/* ── Desktop preview — browser window, scaled to fit ──────────────── */
function SxDesktopPortal({
  client,
  visible,
  tiles,
  scopeOf
}) {
  const [screen, setScreen] = React.useState(null);
  const sec = tiles.find(t => t.id === screen);
  const shown = tiles.filter(t => visible[t.id]);
  const firstName = String(client).split(' ')[0];
  const total = React.useMemo(() => {
    try {
      const sc = scopeOf ? scopeOf({
        ds: 'holdings'
      }) : null;
      const q = dmRunQuery({
        ds: 'holdings',
        viz: 'kpi',
        values: [{
          k: 'market_value',
          agg: 'sum'
        }],
        filters: sc ? sc.extraFilters('holdings') : []
      });
      return q.totals[q.valueCols[0].key] || 0;
    } catch (e) {
      return 0;
    }
  }, [client, scopeOf]);
  const tileBox = {
    background: 'rgb(20,24,31)',
    border: '1px solid rgba(75,85,99,0.5)',
    borderRadius: 14
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'rgb(11,13,17)',
      color: SX_INK,
      fontFamily: 'Inter'
    },
    className: "sw-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 40px',
      background: 'rgba(11,13,17,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(75,85,99,0.5)'
    }
  }, /*#__PURE__*/React.createElement(FirmMark, {
    size: 30,
    radius: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, window.ADV_FIRM_NAME), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: SX_MUTE
    }
  }, "Client portal")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: SX_MUTE
    }
  }, "Shared by ", window.ADV_PERSON), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 10px',
      borderRadius: 999,
      background: 'rgba(5,122,85,0.16)',
      border: '1px solid rgba(16,185,129,0.35)',
      fontSize: 11,
      fontWeight: 600,
      color: SX_MINT
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 10,
    color: SX_MINT
  }), "Secure \xB7 read-only")), screen === null ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Hello, ", firstName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: SX_MUTE,
      marginTop: 4
    }
  }, "Your portfolio \xB7 as of Jul 27, 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      padding: '16px 22px',
      borderRadius: 16,
      background: 'linear-gradient(135deg, rgba(5,122,85,0.24), rgba(20,24,31,0.55))',
      border: '1px solid rgba(16,185,129,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgb(167,243,208)',
      marginBottom: 6
    }
  }, "Total portfolio value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1
    }
  }, '$' + Math.round(total).toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 16
    }
  }, shown.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    onClick: () => setScreen(t.id),
    style: {
      ...tileBox,
      padding: '14px 16px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 600
    }
  }, t.title), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 15,
    color: SX_MUTE
  })), /*#__PURE__*/React.createElement(MPTileBody, {
    cfg: t,
    scopeOf: scopeOf,
    height: 260
  })))), !shown.length && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: SX_MUTE,
      textAlign: 'center',
      padding: '40px 0'
    }
  }, "No tiles shared yet.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 40px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen(null),
    style: {
      ...sxBtn,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 13,
    color: SX_SUB
  }), "All tiles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 14
    }
  }, sec && sec.title), sec && /*#__PURE__*/React.createElement("div", {
    style: {
      ...tileBox,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement(MPTileBody, {
    cfg: sec,
    scopeOf: scopeOf,
    height: sec.side === 'table' ? 560 : 480,
    detail: true
  }))));
}
function DesktopPreview(props) {
  const W = 1280,
    H = 820;
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(0.6);
  React.useEffect(() => {
    const fit = () => {
      const el = wrapRef.current;
      if (!el) return;
      setScale(Math.max(0.3, Math.min((el.clientWidth - 48) / W, (el.clientHeight - 32) / (H + 38), 1)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W * scale,
      height: (H + 38) * scale,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: W,
      height: H + 38,
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid rgba(75,85,99,0.7)',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      flexShrink: 0,
      background: 'rgb(30,33,40)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px'
    }
  }, ['rgb(255,95,87)', 'rgb(254,188,46)', 'rgb(40,200,64)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 11,
      background: c
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      height: 24,
      padding: '0 14px',
      borderRadius: 6,
      background: 'rgba(0,0,0,0.3)',
      fontFamily: 'Inter',
      fontSize: 12,
      color: SX_MUTE,
      minWidth: 360,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 10,
    color: SX_MUTE
  }), props.link)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 49
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SxDesktopPortal, props)))));
}
Object.assign(window, {
  useShareStore,
  sxApply,
  sxNextSend,
  SxSeg,
  SxTemplatePicker,
  ShareSettingsView,
  DesktopPreview
});
;
/* ---- advisor/SettingsPage.jsx ---- */
/* SettingsPage — Personal (profile, security) and Firm (firm profile, client sharing, connections, team). */

Object.assign(window.SW_ICONS, {
  user: "<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/>",
  building: "<rect width='16' height='20' x='4' y='2' rx='2' ry='2'/><path d='M9 22v-4h6v4'/><path d='M8 6h.01'/><path d='M16 6h.01'/><path d='M12 6h.01'/><path d='M12 10h.01'/><path d='M12 14h.01'/><path d='M16 10h.01'/><path d='M16 14h.01'/><path d='M8 10h.01'/><path d='M8 14h.01'/>",
  plug: "<path d='M12 22v-5'/><path d='M9 8V2'/><path d='M15 8V2'/><path d='M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z'/>",
  users: "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>"
});
const ST_INK = 'rgb(249,250,251)',
  ST_MUTE = 'rgb(163,163,163)',
  ST_SUB = 'rgb(209,213,219)',
  ST_LINE = 'rgba(75,85,99,0.55)',
  ST_CARD = 'rgba(255,255,255,0.04)',
  ST_GREEN = 'rgb(5,122,85)',
  ST_MINT = 'rgb(110,231,183)';
const stPanel = {
  borderRadius: 12,
  border: `1px solid ${ST_LINE}`,
  background: ST_CARD,
  overflow: 'hidden'
};
const stInput = {
  height: 36,
  width: '100%',
  maxWidth: 320,
  padding: '0 11px',
  borderRadius: 8,
  fontSize: 13,
  fontFamily: 'Inter',
  outline: 'none',
  background: 'rgba(0,0,0,0.3)',
  color: ST_INK,
  border: `1px solid ${ST_LINE}`,
  boxSizing: 'border-box'
};
const stBtn = {
  height: 34,
  padding: '0 13px',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 12.5,
  fontWeight: 600,
  fontFamily: 'Inter',
  background: 'rgba(255,255,255,0.05)',
  border: `1px solid ${ST_LINE}`,
  color: ST_SUB,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  flexShrink: 0
};
const stPrimary = {
  ...stBtn,
  background: ST_GREEN,
  border: '1px solid rgba(16,185,129,0.6)',
  color: '#fff'
};
function StRow({
  title,
  sub,
  children,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 18px',
      borderBottom: last ? 'none' : '1px solid rgba(75,85,99,0.4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 200px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: ST_INK
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: ST_MUTE,
      marginTop: 2,
      lineHeight: 1.45
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 320px',
      display: 'flex',
      justifyContent: 'flex-end',
      minWidth: 0
    }
  }, children));
}
function StField({
  value,
  type,
  readOnly
}) {
  const [v, setV] = React.useState(value);
  if (readOnly) return /*#__PURE__*/React.createElement("input", {
    type: type || 'text',
    value: v,
    readOnly: true,
    tabIndex: -1,
    style: {
      ...stInput,
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  });
  return /*#__PURE__*/React.createElement("input", {
    type: type || 'text',
    value: v,
    onChange: e => setV(e.target.value),
    style: stInput
  });
}
function StGroup({
  title,
  note,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 13,
      fontWeight: 600,
      color: ST_SUB
    }
  }, title), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: ST_MUTE
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: stPanel
  }, children));
}

/* ── sections ──────────────────────────────────────────────────────── */
function StProfile() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StGroup, {
    title: "Profile"
  }, /*#__PURE__*/React.createElement(StRow, {
    title: "Full name"
  }, /*#__PURE__*/React.createElement(StField, {
    value: "Avery Chen",
    readOnly: true
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Title"
  }, /*#__PURE__*/React.createElement(StField, {
    value: "Senior Advisor"
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Email",
    sub: "Used to sign in and as the reply-to on client shares"
  }, /*#__PURE__*/React.createElement(StField, {
    value: "avery.chen@meridianwealth.com",
    readOnly: true
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Phone",
    last: true
  }, /*#__PURE__*/React.createElement(StField, {
    value: "215-555-0142"
  }))), /*#__PURE__*/React.createElement(StSecurity, null));
}
function StPwInput({
  value,
  onChange,
  invalid,
  autoFocus
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: value,
    autoFocus: autoFocus,
    onChange: e => onChange(e.target.value),
    style: {
      ...stInput,
      maxWidth: 'none',
      paddingRight: 34,
      ...(invalid ? {
        border: '1px solid rgb(248,113,113)'
      } : {})
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShow(s => !s),
    title: show ? 'Hide' : 'Show',
    style: {
      position: 'absolute',
      right: 4,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 26,
      height: 26,
      border: 'none',
      background: 'transparent',
      color: 'rgb(163,163,163)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid ' + (show ? 'fa-eye-slash' : 'fa-eye'),
    style: {
      fontSize: 12
    }
  })));
}
function StPwMsg({
  text
}) {
  return text ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(248,113,113)',
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation",
    style: {
      fontSize: 10
    }
  }), text) : null;
}
const ST_PW_RULES = [{
  id: 'len',
  label: 'At least 8 characters',
  test: v => v.length >= 8
}, {
  id: 'case',
  label: 'Upper and lowercase letters',
  test: v => /[a-z]/.test(v) && /[A-Z]/.test(v)
}, {
  id: 'num',
  label: 'At least one number',
  test: v => /\d/.test(v)
}, {
  id: 'sym',
  label: 'At least one symbol',
  test: v => /[^A-Za-z0-9]/.test(v)
}];
function StSecurity() {
  const [pw, setPw] = React.useState(false);
  const [mfa, setMfa] = React.useState(true);
  const [cur, setCur] = React.useState('');
  const [nw, setNw] = React.useState('');
  const [cf, setCf] = React.useState('');
  const [tried, setTried] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [changed, setChanged] = React.useState('Aug 14, 2026');
  const rulesOk = ST_PW_RULES.every(r => r.test(nw));
  const errs = {
    cur: !cur ? 'Enter your current password' : null,
    nw: !nw ? 'Enter a new password' : !rulesOk ? 'Password doesn\u2019t meet the requirements' : nw === cur ? 'New password must be different from your current one' : null,
    cf: !cf ? 'Confirm your new password' : cf !== nw ? 'Passwords don\u2019t match' : null
  };
  const valid = !errs.cur && !errs.nw && !errs.cf;
  const reset = () => {
    setCur('');
    setNw('');
    setCf('');
    setTried(false);
    setSaving(false);
  };
  const submit = () => {
    setTried(true);
    if (!valid || saving) return;
    setSaving(true);
    setTimeout(() => {
      reset();
      setPw(false);
      setSaved(true);
      setChanged('Oct 13, 2026');
      setTimeout(() => setSaved(false), 4000);
    }, 700);
  };
  const liveCf = cf && cf !== nw && cf.length >= nw.length ? 'Passwords don\u2019t match' : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StGroup, {
    title: "Password"
  }, !pw ? /*#__PURE__*/React.createElement(React.Fragment, null, saved && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '12px 18px 0',
      padding: '9px 12px',
      borderRadius: 8,
      background: 'rgba(5,122,85,0.16)',
      border: '1px solid rgba(52,211,153,0.35)',
      color: 'rgb(110,231,183)',
      fontFamily: 'Inter',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check",
    style: {
      fontSize: 12
    }
  }), "Password updated. Use your new password next time you sign in."), /*#__PURE__*/React.createElement(StRow, {
    title: "Password",
    sub: 'Last changed ' + changed,
    last: true
  }, /*#__PURE__*/React.createElement("button", {
    style: stBtn,
    onClick: () => {
      setSaved(false);
      setPw(true);
    }
  }, "Change password"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StRow, {
    title: "Current password"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(StPwInput, {
    value: cur,
    onChange: setCur,
    autoFocus: true,
    invalid: tried && errs.cur
  }), /*#__PURE__*/React.createElement(StPwMsg, {
    text: tried && errs.cur
  }))), /*#__PURE__*/React.createElement(StRow, {
    title: "New password",
    sub: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginTop: 6
      }
    }, ST_PW_RULES.map(r => {
      const ok = r.test(nw);
      const bad = tried && !ok;
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'Inter',
          fontSize: 11.5,
          color: ok ? 'rgb(110,231,183)' : bad ? 'rgb(248,113,113)' : 'rgb(163,163,163)'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: 'fa-solid ' + (ok ? 'fa-check' : bad ? 'fa-xmark' : 'fa-circle'),
        style: {
          fontSize: ok || bad ? 10 : 4,
          width: 10,
          textAlign: 'center'
        }
      }), r.label);
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(StPwInput, {
    value: nw,
    onChange: setNw,
    invalid: tried && errs.nw
  }), /*#__PURE__*/React.createElement(StPwMsg, {
    text: tried && errs.nw && errs.nw !== 'Password doesn\u2019t meet the requirements' ? errs.nw : null
  }))), /*#__PURE__*/React.createElement(StRow, {
    title: "Confirm new password"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(StPwInput, {
    value: cf,
    onChange: setCf,
    invalid: tried && errs.cf || liveCf
  }), /*#__PURE__*/React.createElement(StPwMsg, {
    text: tried && errs.cf || liveCf
  }), !errs.cf && cf && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 11.5,
      color: 'rgb(110,231,183)',
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      fontSize: 10
    }
  }), "Passwords match"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: stBtn,
    onClick: () => {
      reset();
      setPw(false);
    },
    disabled: saving
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...stPrimary,
      opacity: saving ? 0.7 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    },
    onClick: submit,
    disabled: saving
  }, saving && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin",
    style: {
      fontSize: 11
    }
  }), saving ? 'Updating\u2026' : 'Update password')))), /*#__PURE__*/React.createElement(StGroup, {
    title: "Sign-in"
  }, /*#__PURE__*/React.createElement(StRow, {
    title: "Two-factor authentication",
    sub: mfa ? 'Authenticator app' : 'Off'
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: mfa,
    onClick: () => setMfa(m => !m)
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Active sessions",
    sub: "MacBook Pro \xB7 Philadelphia \xB7 this device",
    last: true
  }, /*#__PURE__*/React.createElement("button", {
    style: stBtn
  }, "Sign out other sessions"))));
}
function StFirm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StGroup, {
    title: "Firm profile",
    note: "Shown to clients on shared portals and reports"
  }, /*#__PURE__*/React.createElement(StRow, {
    title: "Firm name"
  }, /*#__PURE__*/React.createElement(StField, {
    value: "Meridian Wealth Partners"
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Logo",
    sub: "SVG or PNG, square"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FirmMark, {
    size: 36,
    radius: 9
  }), /*#__PURE__*/React.createElement("button", {
    style: stBtn
  }, "Upload"))), /*#__PURE__*/React.createElement(StRow, {
    title: "Website"
  }, /*#__PURE__*/React.createElement(StField, {
    value: "meridianwealth.com"
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Address",
    last: true
  }, /*#__PURE__*/React.createElement(StField, {
    value: "1650 Market St, Philadelphia, PA 19103"
  }))), /*#__PURE__*/React.createElement(StGroup, {
    title: "Disclosures",
    note: "Appended to every client share and report"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    defaultValue: "Advisory services offered through Meridian Wealth Partners, a registered investment adviser. Information is provided for planning purposes and is not tax or legal advice.",
    style: {
      width: '100%',
      minHeight: 84,
      boxSizing: 'border-box',
      padding: '10px 12px',
      borderRadius: 8,
      fontSize: 12.5,
      lineHeight: 1.5,
      fontFamily: 'Inter',
      resize: 'vertical',
      outline: 'none',
      background: 'rgba(0,0,0,0.3)',
      color: ST_SUB,
      border: `1px solid ${ST_LINE}`
    }
  }))));
}
function StSharing() {
  const store = useShareStore();
  const s = store.settings,
    set = (k, v) => store.setSettings(p => ({
      ...p,
      [k]: v
    }));
  const sel = (value, options, k) => /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => set(k, e.target.value),
    style: {
      ...stInput,
      maxWidth: 220,
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value || o,
    value: o.value || o
  }, o.label || o)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StGroup, {
    title: "Default schedule",
    note: "Applies to new clients; each client can override from Share"
  }, /*#__PURE__*/React.createElement(StRow, {
    title: "Send automatically",
    sub: s.auto ? `Next send ${sxNextSend(s)}` : 'Off for new clients'
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: s.auto,
    onClick: () => set('auto', !s.auto)
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Frequency"
  }, /*#__PURE__*/React.createElement(SxSeg, {
    options: ['Monthly', 'Quarterly'],
    value: s.freq,
    onChange: v => set('freq', v)
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Send on"
  }, sel(s.day, ['1st of the month', '15th of the month', 'Last business day'], 'day')), /*#__PURE__*/React.createElement(StRow, {
    title: "Template"
  }, sel(s.templateId, store.templates.map(t => ({
    value: t.id,
    label: t.name
  })), 'templateId')), /*#__PURE__*/React.createElement(StRow, {
    title: "Delivery"
  }, /*#__PURE__*/React.createElement(SxSeg, {
    options: ['Email', 'Email + text'],
    value: s.channel,
    onChange: v => set('channel', v)
  })), /*#__PURE__*/React.createElement(StRow, {
    title: "Hold for advisor review",
    sub: "Queue each send 2 days early; it goes out only after approval",
    last: true
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: s.review,
    onClick: () => set('review', !s.review)
  }))), /*#__PURE__*/React.createElement(StGroup, {
    title: "Templates",
    note: `${store.templates.length} templates`
  }, store.templates.map((t, i) => /*#__PURE__*/React.createElement(StRow, {
    key: t.id,
    title: t.name,
    sub: t.desc,
    last: i === store.templates.length - 1
  }, t.id === s.templateId ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: ST_MINT,
      padding: '3px 8px',
      borderRadius: 999,
      background: 'rgba(5,122,85,0.18)',
      border: '1px solid rgba(16,185,129,0.35)'
    }
  }, "Default") : !t.builtin && /*#__PURE__*/React.createElement("button", {
    style: stBtn,
    onClick: () => store.setTemplates(ts => ts.filter(x => x.id !== t.id))
  }, "Delete")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 12,
      color: ST_MUTE
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13,
    color: ST_MUTE
  }), "Client links are read-only and expire after 30 days."));
}
function StConnections({
  onOpenConnections
}) {
  const rows = [['Schwab', 'Custodian', 'Connected'], ['Fidelity', 'Custodian', 'Connected'], ['Redtail CRM', 'CRM', 'Connected'], ['Plaid', 'Held-away accounts', 'Not connected']];
  return /*#__PURE__*/React.createElement(StGroup, {
    title: "Data connections",
    note: /*#__PURE__*/React.createElement("button", {
      style: {
        ...stBtn,
        height: 28
      },
      onClick: onOpenConnections
    }, "Manage connections")
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(StRow, {
    key: r[0],
    title: r[0],
    sub: r[1],
    last: i === rows.length - 1
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: r[2] === 'Connected' ? ST_MINT : ST_MUTE
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 7,
      background: r[2] === 'Connected' ? 'rgb(16,185,129)' : 'rgba(120,124,134,0.7)'
    }
  }), r[2]))));
}
function StTeam() {
  const [team, setTeam] = React.useState([{
    n: 'Avery Chen',
    e: 'avery.chen@meridianwealth.com',
    r: 'Admin',
    you: true
  }, {
    n: 'Marcus Bell',
    e: 'marcus.bell@meridianwealth.com',
    r: 'Advisor'
  }, {
    n: 'Priya Nair',
    e: 'priya.nair@meridianwealth.com',
    r: 'Operations'
  }]);
  return /*#__PURE__*/React.createElement(StGroup, {
    title: "Team",
    note: /*#__PURE__*/React.createElement("button", {
      style: {
        ...stBtn,
        height: 28
      }
    }, "Invite member")
  }, team.map((m, i) => /*#__PURE__*/React.createElement(StRow, {
    key: m.e,
    title: /*#__PURE__*/React.createElement("span", null, m.n, m.you && /*#__PURE__*/React.createElement("span", {
      style: {
        color: ST_MUTE,
        fontWeight: 400
      }
    }, " \xB7 you")),
    sub: m.e,
    last: i === team.length - 1
  }, /*#__PURE__*/React.createElement("select", {
    value: m.r,
    disabled: m.you,
    onChange: e => setTeam(t => t.map(x => x.e === m.e ? {
      ...x,
      r: e.target.value
    } : x)),
    style: {
      ...stInput,
      maxWidth: 150,
      cursor: m.you ? 'default' : 'pointer',
      opacity: m.you ? 0.6 : 1
    }
  }, ['Admin', 'Advisor', 'Operations', 'Read-only'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))));
}
function StTabsEditor({
  tabs,
  setTabs,
  note,
  kindLabel,
  onDelete
}) {
  const [renaming, setRenaming] = React.useState(null);
  const [name, setName] = React.useState('');
  const mv = (i, d) => setTabs(ts => {
    const n = [...ts];
    const j = i + d;
    if (j < 1 || j >= n.length) return ts;
    [n[i], n[j]] = [n[j], n[i]];
    return n;
  });
  const patch = (id, p) => setTabs(ts => ts.map(t => t.id === id ? {
    ...t,
    ...p
  } : t));
  const add = () => {
    const n = name.trim();
    if (!n) return;
    setTabs(ts => [...ts, {
      id: kindLabel ? 'p' + Date.now().toString(36) : ctNewId(n),
      name: n,
      ...(kindLabel ? {
        kind: 'page'
      } : {})
    }]);
    setName('');
  };
  const ib = dis => ({
    ...stBtn,
    width: 30,
    height: 30,
    padding: 0,
    justifyContent: 'center',
    opacity: dis ? 0.35 : 1,
    cursor: dis ? 'default' : 'pointer'
  });
  const canDelete = t => !t.locked && (!kindLabel || t.kind === 'page');
  return /*#__PURE__*/React.createElement(StGroup, {
    title: "Tabs",
    note: note
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 14px 11px 18px',
      borderBottom: '1px solid rgba(75,85,99,0.4)',
      opacity: t.hidden ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, renaming === t.id ? /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    defaultValue: t.name,
    style: {
      ...stInput,
      height: 30,
      maxWidth: 240
    },
    onBlur: e => {
      const v = e.target.value.trim();
      if (v) patch(t.id, {
        name: v
      });
      setRenaming(null);
    },
    onKeyDown: e => {
      if (e.key === 'Enter') e.target.blur();
      if (e.key === 'Escape') setRenaming(null);
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: ST_INK
    }
  }, t.name, t.locked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ST_MUTE,
      fontWeight: 400
    }
  }, " \xB7 default tab"), kindLabel && !t.locked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ST_MUTE,
      fontWeight: 400
    }
  }, " \xB7 ", t.kind === 'page' ? 'custom' : 'built-in'), t.hidden && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ST_MUTE,
      fontWeight: 400
    }
  }, " \xB7 hidden"))), !t.locked && /*#__PURE__*/React.createElement("button", {
    title: "Move up",
    disabled: i <= 1,
    onClick: () => mv(i, -1),
    style: ib(i <= 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-up",
    style: {
      fontSize: 10
    }
  })), !t.locked && /*#__PURE__*/React.createElement("button", {
    title: "Move down",
    disabled: i === tabs.length - 1,
    onClick: () => mv(i, 1),
    style: ib(i === tabs.length - 1)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    style: {
      fontSize: 10
    }
  })), /*#__PURE__*/React.createElement("button", {
    title: "Rename",
    onClick: () => setRenaming(t.id),
    style: ib(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 12,
    color: ST_SUB
  })), !t.locked && /*#__PURE__*/React.createElement("button", {
    title: t.hidden ? 'Show' : 'Hide',
    onClick: () => patch(t.id, {
      hidden: !t.hidden
    }),
    style: ib(false)
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa-solid fa-' + (t.hidden ? 'eye-slash' : 'eye'),
    style: {
      fontSize: 11
    }
  })), canDelete(t) ? /*#__PURE__*/React.createElement("button", {
    title: "Delete",
    onClick: () => {
      if (window.confirm('Delete the "' + t.name + '" tab?')) {
        setTabs(ts => ts.filter(x => x.id !== t.id));
        onDelete && onDelete(t);
      }
    },
    style: ib(false)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-trash-can",
    style: {
      fontSize: 11
    }
  })) : !t.locked && kindLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30
    }
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '12px 14px 12px 18px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') add();
    },
    placeholder: "New tab name",
    style: {
      ...stInput,
      maxWidth: 260
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    disabled: !name.trim(),
    style: {
      ...stPrimary,
      opacity: name.trim() ? 1 : 0.5
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus",
    style: {
      fontSize: 10
    }
  }), "Add tab")));
}
function StDashboardPage() {
  const [tabs, setTabs] = useDashTabs();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StTabsEditor, {
    tabs: tabs,
    setTabs: setTabs,
    kindLabel: true,
    note: "Tabs across the top of your dashboard",
    onDelete: t => {
      try {
        localStorage.removeItem('adv.page.' + t.id);
      } catch (e) {}
    }
  }), /*#__PURE__*/React.createElement(StDashTiles, {
    tabs: tabs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: ST_MUTE,
      lineHeight: 1.5
    }
  }, "Built-in tabs can be renamed, reordered or hidden. You can also edit tiles from the dashboard with Edit."));
}
const stDashStore = t => t.id === 'overview' ? DC_STORE : t.kind === 'practice' ? pbStore(t.id) : 'adv.page.' + t.id;
const stDashLoad = t => {
  try {
    return dcInitialTiles(t.id === 'overview' ? undefined : stDashStore(t), t.kind === 'practice' ? () => pbDefaults(t.id) : []);
  } catch (e) {
    return [];
  }
};
function StDashTiles({
  tabs
}) {
  const vis = tabs.filter(t => !t.hidden);
  const [ver, setVer] = React.useState(0);
  React.useEffect(() => {
    const on = () => setVer(v => v + 1);
    window.addEventListener('tiles:appended', on);
    window.addEventListener('storage', on);
    return () => {
      window.removeEventListener('tiles:appended', on);
      window.removeEventListener('storage', on);
    };
  }, []);
  const lists = React.useMemo(() => Object.fromEntries(vis.map(t => [t.id, stDashLoad(t)])), [ver, tabs]);
  const [peek, setPeek] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [toTab, setToTab] = React.useState(vis[0] ? vis[0].id : 'overview');
  const write = (t, tiles) => {
    try {
      localStorage.setItem(stDashStore(t), JSON.stringify(tiles));
    } catch (e) {}
  };
  const remove = (tb, tile) => {
    write(tb, lists[tb.id].filter(x => x.id !== tile.id));
    if (tb.id === 'overview') {
      try {
        const k = DC_STORE + '.removed';
        const cur = JSON.parse(localStorage.getItem(k) || '[]');
        if (!cur.includes(tile.id)) localStorage.setItem(k, JSON.stringify([...cur, tile.id]));
      } catch (e) {}
    }
    setVer(v => v + 1);
  };
  const moveTo = (from, tile, toId) => {
    const to = vis.find(x => x.id === toId);
    if (!to || to.id === from.id) return;
    write(from, lists[from.id].filter(x => x.id !== tile.id));
    write(to, [...(lists[to.id] || stDashLoad(to)), {
      ...tile,
      userEdited: true
    }]);
    setVer(v => v + 1);
  };
  const tabCtx = tb => ({
    kind: 'dashsettings',
    store: stDashStore(tb),
    tabName: tb.name,
    label: 'Dashboard · ' + tb.name
  });
  const add = (text, tbIn) => {
    const tb = tbIn || vis.find(t => t.id === toTab) || vis[0];
    if (!tb) return;
    window.dispatchEvent(new CustomEvent('fieldai:open', {
      detail: {
        prompt: (text || q).trim() || 'Create a tile',
        actionId: 'tile',
        ctx: tabCtx(tb)
      }
    }));
    setQ('');
  };
  const toT = vis.find(t => t.id === toTab) || {};
  const ideas = (() => {
    try {
      return cbTileIdeas(toT.kind === 'practice' ? {
        kind: 'practice',
        sub: toT.name
      } : null);
    } catch (e) {
      return [];
    }
  })();
  return /*#__PURE__*/React.createElement(React.Fragment, null, vis.map(tb => {
    const list = lists[tb.id] || [];
    return /*#__PURE__*/React.createElement(StGroup, {
      key: tb.id,
      title: tb.name + ' tiles',
      note: list.length + (list.length === 1 ? ' tile' : ' tiles')
    }, !list.length && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 18px',
        fontSize: 12.5,
        color: ST_MUTE
      }
    }, "No tiles yet."), list.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        borderBottom: i === list.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px 10px 18px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'fa-solid fa-' + (ST_VIZ_ICON[t.viz] || 'chart-column'),
      style: {
        fontSize: 12,
        color: ST_MUTE,
        width: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: ST_INK,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: ST_MUTE
      }
    }, (window.dmDataset && dmDataset(t.ds) || {}).label || t.ds)), /*#__PURE__*/React.createElement("button", {
      title: peek === t.id ? 'Hide preview' : 'Preview',
      onClick: () => setPeek(p => p === t.id ? null : t.id),
      style: {
        ...stBtn,
        width: 30,
        height: 30,
        padding: 0,
        justifyContent: 'center',
        ...(peek === t.id ? {
          background: 'rgba(5,122,85,0.2)',
          border: '1px solid rgba(16,185,129,0.5)',
          color: ST_MINT
        } : {})
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-eye",
      style: {
        fontSize: 11
      }
    })), /*#__PURE__*/React.createElement("select", {
      value: tb.id,
      onChange: e => moveTo(tb, t, e.target.value),
      title: "Move to tab",
      style: {
        ...stInput,
        width: 'auto',
        maxWidth: 150,
        height: 30,
        fontSize: 12,
        cursor: 'pointer'
      }
    }, vis.map(x => /*#__PURE__*/React.createElement("option", {
      key: x.id,
      value: x.id
    }, x.name))), /*#__PURE__*/React.createElement("button", {
      title: "Remove from dashboard",
      onClick: () => remove(tb, t),
      style: {
        ...stBtn,
        width: 30,
        height: 30,
        padding: 0,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-trash-can",
      style: {
        fontSize: 11
      }
    }))), peek === t.id && /*#__PURE__*/React.createElement(StTilePreview, {
      cfg: t,
      book: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 14px 10px 14px',
        borderTop: list.length ? '1px solid rgba(75,85,99,0.4)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => window.dispatchEvent(new CustomEvent('fieldai:open', {
        detail: {
          mode: 'tile',
          ctx: {
            ...tabCtx(tb),
            tabKind: tb.kind
          }
        }
      })),
      style: {
        ...stBtn,
        height: 30,
        fontWeight: 500,
        background: 'transparent',
        border: '1px dashed ' + ST_LINE,
        color: ST_SUB
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-plus",
      style: {
        fontSize: 10
      }
    }), "Add a tile")));
  }));
}
function StClientPage() {
  const [tabs, setTabs] = useClientTabs();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StTabsEditor, {
    tabs: tabs,
    setTabs: setTabs,
    note: "Same tabs for every client. Tiles on a hidden or deleted tab move to Overview."
  }), /*#__PURE__*/React.createElement(StClientTiles, {
    tabs: tabs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: ST_MUTE,
      lineHeight: 1.5
    }
  }, "Add tiles to a tab from any client page with Edit. In edit mode, a tile's arrow button moves it to another tab."));
}
const ST_VIZ_ICON = {
  kpi: 'chart-line',
  column: 'chart-column',
  bar: 'chart-bar',
  donut: 'chart-pie',
  table: 'table',
  list: 'list',
  area: 'chart-area',
  line: 'chart-line',
  scatter: 'braille',
  stacked: 'chart-column',
  invoices: 'list'
};
function StTilePreview({
  cfg,
  from,
  book
}) {
  const scoped = React.useMemo(() => {
    const hh = cdHouseOf(String(from || 'David Young'));
    const add = ds => {
      if (book) return [];
      try {
        return dmFields(ds).some(f => f.k === 'household') ? [{
          k: 'household',
          op: 'is',
          v: hh
        }] : [];
      } catch (e) {
        return [];
      }
    };
    return {
      ...cfg,
      filters: [...(cfg.filters || []), ...add(cfg.ds)],
      kpis: cfg.kpis ? cfg.kpis.map(k => ({
        ...k,
        filters: [...(k.filters || []), ...add(cfg.ds)]
      })) : cfg.kpis
    };
  }, [cfg]);
  const q = React.useMemo(() => {
    try {
      return dmRunQuery({
        ...scoped,
        dateRange: 'ytd'
      });
    } catch (e) {
      return null;
    }
  }, [scoped]);
  const isKpi = cfg.viz === 'kpi';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 14px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: isKpi ? 140 : 300,
      maxWidth: isKpi ? 340 : 560,
      background: 'rgba(0,0,0,0.2)',
      border: `1px solid ${ST_LINE}`,
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 6px',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: 12.5,
      color: ST_INK
    }
  }, cfg.title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 14px 10px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      pointerEvents: 'none'
    }
  }, q ? /*#__PURE__*/React.createElement(TileViz, {
    cfg: scoped,
    q: q,
    onPick: () => {},
    height: 0,
    deltaCfg: scoped
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: ST_MUTE
    }
  }, "No preview available."))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: ST_MUTE,
      marginTop: 6
    }
  }, book ? 'Preview uses your whole book.' : `Preview uses ${from || 'David Young'}'s data.`));
}
function StClientTiles({
  tabs
}) {
  const [peek, setPeek] = React.useState(null);
  const [tpl, setTpl] = React.useState(ctTemplate);
  React.useEffect(() => {
    const on = () => setTpl(ctTemplate());
    window.addEventListener('clienttemplate:change', on);
    return () => window.removeEventListener('clienttemplate:change', on);
  }, []);
  const vis = tabs.filter(t => !t.hidden);
  const [q, setQ] = React.useState('');
  const [toTab, setToTab] = React.useState(vis[0] ? vis[0].id : 'overview');
  const save = tiles => {
    ctSaveTemplate(tiles, tpl.from);
    setTpl({
      ...tpl,
      tiles
    });
  };
  const live = tpl.tiles.filter(t => !t.removed);
  const seedV = typeof TA_CLIENT_DEFAULTS_V !== 'undefined' ? TA_CLIENT_DEFAULTS_V : 1;
  const remove = t => save(/^cd\d/.test(t.id) ? tpl.tiles.map(x => x.id === t.id ? {
    ...x,
    removed: true,
    userEdited: true,
    seedV
  } : x) : tpl.tiles.filter(x => x.id !== t.id));
  const moveTo = (t, tab) => save(tpl.tiles.map(x => x.id === t.id ? {
    ...x,
    tab,
    userEdited: true,
    seedV: x.seedV || seedV
  } : x));
  const add = text => {
    const p = (text || q).trim();
    const tb = tabs.find(t => t.id === toTab) || {
      name: 'Overview'
    };
    window.dispatchEvent(new CustomEvent('fieldai:open', {
      detail: {
        prompt: p || 'Create a tile',
        actionId: 'tile',
        ctx: {
          kind: 'clienttemplate',
          tab: toTab,
          tabName: tb.name,
          label: 'All client pages · ' + tb.name
        }
      }
    }));
    setQ('');
  };
  const ideas = (() => {
    try {
      return cbTileIdeas({
        kind: 'client',
        tab: toTab
      });
    } catch (e) {
      return [];
    }
  })();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StGroup, {
    title: "Add tiles with AI",
    note: "Added to every client's page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 4px 0 12px',
      height: 40,
      borderRadius: 9,
      background: 'rgba(0,0,0,0.3)',
      border: '1px solid rgba(16,185,129,0.4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 13,
    color: "rgb(16,185,129)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') add();
    },
    placeholder: "Describe a tile, e.g. fees by month",
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: ST_INK,
      fontFamily: 'Inter',
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("select", {
    value: toTab,
    onChange: e => setToTab(e.target.value),
    style: {
      ...stInput,
      width: 'auto',
      maxWidth: 170,
      height: 40,
      cursor: 'pointer'
    }
  }, vis.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, 'To ' + t.name))), /*#__PURE__*/React.createElement("button", {
    onClick: () => add(),
    style: {
      ...stPrimary,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 12,
    color: "#fff"
  }), "Create with AI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ideas.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => add(s),
    style: {
      height: 28,
      padding: '0 11px',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontSize: 12,
      background: 'transparent',
      border: `1px solid ${ST_LINE}`,
      color: ST_SUB
    }
  }, s))))), vis.map(tb => {
    const list = live.filter(t => cdTabOf(t, tabs) === tb.id);
    return /*#__PURE__*/React.createElement(StGroup, {
      key: tb.id,
      title: tb.name + ' tiles',
      note: list.length + (list.length === 1 ? ' tile' : ' tiles')
    }, !list.length && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 18px',
        fontSize: 12.5,
        color: ST_MUTE
      }
    }, "No tiles yet."), list.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        borderBottom: i === list.length - 1 ? 'none' : '1px solid rgba(75,85,99,0.4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px 10px 18px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'fa-solid fa-' + (ST_VIZ_ICON[t.viz] || 'chart-column'),
      style: {
        fontSize: 12,
        color: ST_MUTE,
        width: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: ST_INK,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: ST_MUTE
      }
    }, (window.dmDataset && dmDataset(t.ds) || {}).label || t.ds)), /*#__PURE__*/React.createElement("button", {
      title: peek === t.id ? 'Hide preview' : 'Preview',
      onClick: () => setPeek(p => p === t.id ? null : t.id),
      style: {
        ...stBtn,
        width: 30,
        height: 30,
        padding: 0,
        justifyContent: 'center',
        ...(peek === t.id ? {
          background: 'rgba(5,122,85,0.2)',
          border: '1px solid rgba(16,185,129,0.5)',
          color: ST_MINT
        } : {})
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-eye",
      style: {
        fontSize: 11
      }
    })), /*#__PURE__*/React.createElement("select", {
      value: tb.id,
      onChange: e => moveTo(t, e.target.value),
      title: "Move to tab",
      style: {
        ...stInput,
        width: 'auto',
        maxWidth: 150,
        height: 30,
        fontSize: 12,
        cursor: 'pointer'
      }
    }, vis.map(x => /*#__PURE__*/React.createElement("option", {
      key: x.id,
      value: x.id
    }, x.name))), /*#__PURE__*/React.createElement("button", {
      title: "Remove from client pages",
      onClick: () => remove(t),
      style: {
        ...stBtn,
        width: 30,
        height: 30,
        padding: 0,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-trash-can",
      style: {
        fontSize: 11
      }
    }))), peek === t.id && /*#__PURE__*/React.createElement(StTilePreview, {
      cfg: t,
      from: tpl.from
    }))));
  }));
}
const ST_NAV = [{
  group: 'Personal',
  items: [{
    id: 'profile',
    label: 'Profile & security',
    icon: 'user'
  }]
}, {
  group: 'Pages',
  items: [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layers'
  }, {
    id: 'clientpage',
    label: 'Client page',
    icon: 'user'
  }]
}, {
  group: 'Practice',
  items: [{
    id: 'sharing',
    label: 'Client sharing',
    icon: 'share'
  }, {
    id: 'team',
    label: 'Team',
    icon: 'users'
  }]
}];
function SettingsPage({
  onOpenConnections
}) {
  const [sec, setSec] = React.useState(() => localStorage.getItem('field.settings.sec') || 'profile');
  React.useEffect(() => {
    localStorage.setItem('field.settings.sec', sec);
  }, [sec]);
  const cur = ST_NAV.flatMap(g => g.items).find(i => i.id === sec) || ST_NAV[0].items[0];
  const body = {
    profile: /*#__PURE__*/React.createElement(StProfile, null),
    security: /*#__PURE__*/React.createElement(StSecurity, null),
    sharing: /*#__PURE__*/React.createElement(StSharing, null),
    dashboard: /*#__PURE__*/React.createElement(StDashboardPage, null),
    clientpage: /*#__PURE__*/React.createElement(StClientPage, null),
    team: /*#__PURE__*/React.createElement(StTeam, null)
  }[cur.id];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100%',
      fontFamily: 'Inter',
      color: ST_INK
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 220,
      flexShrink: 0,
      padding: '32px 14px',
      borderRight: `1px solid ${ST_LINE}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, ST_NAV.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: ST_MUTE,
      padding: '0 10px 6px'
    }
  }, g.group), g.items.map(it => {
    const on = it.id === cur.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setSec(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 34,
        padding: '0 10px',
        borderRadius: 8,
        cursor: 'pointer',
        border: 'none',
        textAlign: 'left',
        fontSize: 13,
        fontWeight: on ? 600 : 500,
        fontFamily: 'Inter',
        background: on ? 'rgba(255,255,255,0.07)' : 'transparent',
        color: on ? ST_INK : ST_SUB
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 14,
      color: on ? 'rgb(16,185,129)' : ST_MUTE
    }), it.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '32px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600
    }
  }, cur.label), body)));
}
Object.assign(window, {
  SettingsPage
});
;