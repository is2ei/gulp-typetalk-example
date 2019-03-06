"use strict";

const typetalk = require("gulp-typetalk");
const config = require("./config");

function typetalkExample (cb) {
    typetalk({
        "message": "Hello, World!",
        "token": config.token,
        "topicId": config.topicId
    });
    cb();
}

exports.default = typetalkExample;
