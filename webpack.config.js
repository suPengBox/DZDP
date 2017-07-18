"use strict"
var path = require("path");
module.exports={
    entry:[path.resolve(__dirname,"src/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","react","stage-2"]},exclude:/node_modules/},
            {test:/\.jsx$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:/node_modules/},
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.(png|jpg|gif|jpeg|webp)$/,loader:"url-loader"},
            {test:/\.(woff|woff2|ttf|svg|eot)$/,loader:"file-loader"}
        ]
    }
}