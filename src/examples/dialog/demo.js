// const Dialog = require('../../components/dialog/dialog.js');
const {Dialog} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug')();
    }

    init() {
        let dialog;
        let content = require('./content.pug')();
        $('#show_dialog').click(function() {
            dialog = new Dialog({
                content: content
            });
            dialog.onclose(function() {
                console.log('关闭吧');
            })
            dialog.onok(function() {
                console.log('确定');
            })
        })

    }
}

module.exports = Demo;