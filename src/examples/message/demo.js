// const Message = require('../../components/message/message.js');
const {Message} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug')();
    }
    init() {
        $('#message_info').click(function() {
            new Message({
                type: 'info',
                text: '嗯，你正在一步步前进。'
            });
        })
        $('#message_success').click(function() {
            new Message({
                type: 'success',
                text: '恭喜，离目标又近了一步！'
            });
        })
        $('#message_warning').click(function() {
            new Message({
                type: 'warning',
                text: '注意了，附近有漏电！'
            });
        })
        $('#message_danger').click(function() {
            new Message({
                type: 'danger',
                text: '危险，进入敌人营地范围！'
            });
        })
    }
}

module.exports = Demo;