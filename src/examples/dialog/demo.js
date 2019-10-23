// const Dialog = require('../../components/dialog/dialog.js');
const {Dialog} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug')({
            id: "test"
        });
    }

    init() {
        new Dialog({
            el: '#show_dialog'
        })
    }
}

module.exports = Demo;