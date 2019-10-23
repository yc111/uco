// const Dialog = require('../../components/dialog/dialog.js');
const {Dialog} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug')({
            id: "test"
        });
    }

    init() {
        $('#show_dialog').click(function() {
            new Dialog({
            })
        })
    }
}

module.exports = Demo;