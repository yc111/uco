const Checkbox = require('../../components/checkbox/checkbox.js');

class Demo {
    render () {
        return require('./demo.pug');
    }
    init() {
        this.checkbox = new Checkbox({
            el: 'show',
            value: 1,
            label: 'apple'
        })
        console.log(this.checkbox.value, 'outer');
        this.checkbox.onchange((value) => {
            console.log(value);
        })
    }
}

module.exports = Demo;