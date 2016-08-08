export class Configuration implements IConfiguration {

    public prefix = "m:";

    public collapsible = `${this.prefix}collapsible`.trim();
    public collapsibleBody = `${this.prefix}collapsible-body`.trim();
    public collapsibleHeader = `${this.prefix}collapsible-header`.trim();
    public collapsibleItem = `${this.prefix}collapsible-item`.trim();

    public dropdown = `${this.prefix}dropdown`.trim();
    public dropdownDivider = `${this.prefix}dropdown-divider`.trim();
    public dropdownItem = `${this.prefix}dropdown-item`.trim();

    public boxed = `${this.prefix}boxed`.trim();
    public slide = `${this.prefix}slide`.trim();
    public slider = `${this.prefix}slider`.trim();
}

export interface IConfiguration {
    prefix?: string;

    collapsible?: string;
    collapsibleBody?: string;
    collapsibleHeader?: string;
    collapsibleItem?: string;

    dropdown?: string;
    dropdownDivider?: string;
    dropdownItem?: string;

    boxed?: string;
    slide?: string;
    slider?: string;
}

export var config: IConfiguration = new Configuration();
export default config;
