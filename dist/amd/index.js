define(["require", "exports", "./config", "@eriklieben/materialize-css"], function (require, exports, materialConfig) {
    "use strict";
    var MaterializeCssOptions = (function () {
        function MaterializeCssOptions() {
            this.enableAttributes = true;
            this.enableElements = true;
            this.attributeFilter = undefined;
            this.elementFilter = undefined;
            this.configuration = new materialConfig.Configuration();
        }
        return MaterializeCssOptions;
    }());
    exports.MaterializeCssOptions = MaterializeCssOptions;
    function configure(config, options) {
        options = Object.assign(new MaterializeCssOptions(), options);
        materialConfig.config = options.configuration;
        var attributes = [
            "./javascript/collapsible/collapsibleAttribute",
            "./javascript/collapsible/collapsibleBodyAttribute",
            "./javascript/collapsible/collapsibleHeaderAttribute",
            "./javascript/dropdown/dropdownAttribute",
            "./javascript/dropdown/dropdownDividerAttribute",
            "./javascript/media/boxedAttribute",
            "./javascript/modals/modalTriggerAttribute",
            "./javascript/pushpin/pushpinAttribute",
            "./javascript/scrollspy/scrollspyAttribute",
            "./components/badge/badgeAttribute",
            "./components/breadcrumbs/breadcrumbAttribute",
            "./components/breadcrumbs/breadcrumbsAttribute",
            "./components/button/buttonAttribute",
            "./components/card/cardAttribute",
            "./components/card/cardTitleAttribute",
            "./components/card/cardActionAttribute",
            "./components/card/cardImageAttribute",
            "./components/card/cardRevealAttribute",
            "./components/card/cardPanelAttribute",
            "./components/forms/selectAttribute",
            "./components/forms/pickadateAttribute",
        ];
        var elements = [
            "./javascript/collapsible/collapsibleElement",
            "./javascript/collapsible/collapsibleBodyElement",
            "./javascript/collapsible/collapsibleHeaderElement",
            "./javascript/collapsible/collapsibleItemElement",
            "./javascript/dropdown/dropdownElement",
            "./javascript/dropdown/dropdownDividerElement",
            "./javascript/dropdown/dropdownItemElement",
            "./javascript/media/slideElement",
            "./javascript/media/sliderElement",
            "./javascript/modals/modalContentElement",
            "./javascript/modals/modalElement",
            "./javascript/modals/modalFooterElement",
            "./javascript/pushpin/pushpinElement",
            "./javascript/scrollspy/scrollspyElement",
            "./components/badge/badgeElement",
            "./components/breadcrumbs/breadcrumbElement",
            "./components/breadcrumbs/breadcrumbsElement",
            "./components/button/buttonElement",
            "./components/card/cardElement",
            "./components/card/cardTitleElement",
            "./components/card/cardActionElement",
            "./components/card/cardImageElement",
            "./components/card/cardRevealElement",
            "./components/card/cardPanelElement",
        ];
        if (options.attributeFilter) {
            attributes = attributes.filter(options.attributeFilter);
        }
        if (options.elementFilter) {
            elements = elements.filter(options.elementFilter);
        }
        if (options.enableAttributes) {
            config.globalResources(attributes);
        }
        if (options.enableElements) {
            config.globalResources(elements);
        }
    }
    exports.configure = configure;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MaterializeCssOptions;
});

//# sourceMappingURL=index.js.map
