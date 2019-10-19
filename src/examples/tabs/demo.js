const Tabs = require('../../components/tabs/tabs');

class Demo{
    render() {
        return require('./demo.ejs');
    }
    init() {
        let tab = new Tabs({
            el: '#show_tab_1',
            list: [
                {text: 'Tab1'},
                {text: 'Tab2'},
                {text: 'Tab3'},
                {text: 'Tab4'},
            ]
        })
        tab.onchange(function(data){
            console.log(data);
        })
    }
}

module.exports = Demo;


