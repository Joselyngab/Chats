const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@link-color": "#00FF6A",
              //  "@text-color": "#fff",
              "@disabled-color": "#fff",
              "@picker-basic-cell-hover-color": "00FF6A",
              "@picker-basic-cell-hover-color": "#f5f5f5",
              "@picker-basic-cell-active-with-range-color":
                "tint(#00FF6A, 90%)",
              "@picker-basic-cell-hover-with-range-color":
                "lighten(#00FF6A, 35%)",
              "@picker-basic-cell-disabled-bg": "rgba(0, 0, 0, 0.04)",
              "@picker-border-color": "hsv(0, 0, 94%)",
              "@picker-date-hover-range-border-color": "lighten(#00FF6A, 20%)",
              "@text-color-dark": "fade(#fff, 85%)",
              "@text-color-secondary-dark": "fade(#fff, 65%)",
              "@input-color": "fade(#000, 85%)",
              "@select-color": "fade(#000, 85%)",
              "@picker-color": "fade(#000, 85%)",
              "@input-icon-color": "fade(#000, 85%)",
              "@select-item-selected-color": "#000",
              "@select-selection-item-bg": "hsv(0, 0, 96%)",
              "@select-border-color": "hsv(0, 0, 85%)",
              "@select-multiple-item-disabled-color": "#bfbfbf",
              "@primary-color": "#00FF6A",
              "@btn-primary-color": " #00001e",
              "@layout-header-background": "#00001e",
              "@component-background": "#fff",
              "@layout-sider-background": "#00001e",
              "@layout-header-color": "#fff",
              "@layout-trigger-color": "#fff",
              "@menu-bg": "#00001e",
              "@menu-item-color": "#fff",
              "@menu-item-active-bg": "#25253A",
              "@menu-inline-submenu-bg": "#00001e",
              "@popover-bg": "#00001e",
              "@popover-color": "#fff",
              "@menu-popup-bg": "#00001e",
              "@table-bg": "#00001e",
              "@table-header-color": "#fff",
              "@table-border-color": "#fff",
              "@table-header-bg": "#00001e",
              "@table-header-color": "#fff",
              "@table-row-hover-bg": "#00001e",
              "@table-selected-row-color": "inherit",
              "@table-selected-row-bg": "#fff",
              "@table-header-cell-split-color": "inherit",
              "@table-filter-dropdown-bg": "#00001e",
              "@table-header-sort-active-bg": "#00001e",
              "@table-header-sort-bg": "#00001e",
              "@table-body-sort-bg": "#00001e",
              "@pagination-item-bg": "#00001e",
              "@pagination-item-bg-active": "#00001e",
              "@pagination-item-link-bg": "#00001e",
              "@pagination-item-disabled-color-active": "#fff",
              "@pagination-item-disabled-bg-active": "#00001e",
              "@table-footer-bg": "#00001e",
              "@table-footer-color": "#fff",
              "@input-icon-color:": "fade(#000, 85%)",
              "@icon-color": "inherit",
              "@icon-color-hover": "fade(#000, 75%)",
              "@table-expanded-row-bg": "#00001e",
              "@table-expand-icon-bg": "#00001e",
              "@switch-shadow-color": "fade(#00230b, 20%)",
              "@switch-inner-color": "#bfbfbf",
              "@modal-header-bg": "#00001e",
              "@select-selection-item-bg": "#00001e",
              "@select-clear-background": "#ccc",
              "@btn-disable-color": "#00001e",
              "@btn-disable-bg": "#248E42",
              "@btn-disable-border":"#248E42"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
