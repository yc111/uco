const Tabs = require('../../components/tabs/tabs');

class Demo{
    render() {
        return require('./demo.ejs');
    }
    init() {
        let tab = new Tabs({
            el: '#show_tab_1',
            list: []
        })
    }
}

module.exports = Demo;


