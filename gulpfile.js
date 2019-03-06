const typetalk = require("gulp-typetalk");
const config = require("./config");

function typetalkExample (cb) {
    typetalk({
        token: config.token,
        topicId: config.topicId,
        message: "Hello, World!"
    });
    cb();
}

exports.default = typetalkExample;
