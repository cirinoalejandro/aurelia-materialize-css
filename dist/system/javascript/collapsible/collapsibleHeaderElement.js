System.register(["aurelia-framework", "./../../config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, config_1;
    var CollapsibleHeaderElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CollapsibleHeaderElement = (function () {
                function CollapsibleHeaderElement() {
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], CollapsibleHeaderElement.prototype, "class", void 0);
                CollapsibleHeaderElement = __decorate([
                    aurelia_framework_1.customElement(config_1.config.collapsibleHeader),
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.inlineView("<template><div class='collapsible-header ${class}'><slot></slot></div></template>"), 
                    __metadata('design:paramtypes', [])
                ], CollapsibleHeaderElement);
                return CollapsibleHeaderElement;
            }());
            exports_1("CollapsibleHeaderElement", CollapsibleHeaderElement);
        }
    }
});

//# sourceMappingURL=collapsibleHeaderElement.js.map
