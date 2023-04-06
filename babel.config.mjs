const plugins = []

const presets = [
    "@babel/preset-typescript",
    ["@babel/preset-react", { "runtime": "automatic" }]
]

export default {
    presets,
    plugins
}

