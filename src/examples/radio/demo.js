// const Radio = require('../../components/radio/radio.js');
const {Radio} = require('../../../dist/lib/uco.min.js');

class Demo {
    render() {
        return require('./demo.pug')
    }
    init() {
        this.radio = new Radio({
            el: 'show',
            value: 10,
            label: 'age'
        })
        console.log(this.radio.value, 'outer');
        this.radio.onchange((value) => {
            console.log(value)
        })
    }
}

module.exports = Demo;

