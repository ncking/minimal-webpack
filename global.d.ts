declare module "*.json";

declare module '*.scss, *.css' {
    const content: {[className: string]: string};
    export default content;
}