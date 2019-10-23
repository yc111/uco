// const Tabs = require('../../components/tabs/tabs');
const {Tabs} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug');
    }
    init() {
        let tab = new Tabs({
            el: '#show_tab_1',
            list: [
                { text: 'Tab1' },
                { text: 'Tab2' },
                { text: 'Tab3' }
            ]
        })
        tab.onchange(function (data) {
            console.log(data);
        })
    }
}

module.exports = Demo;


