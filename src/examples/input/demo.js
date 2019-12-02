// require('../../components/input/input.scss')
require('../../../dist/lib/uco.min.css');
require('./demo.scss');

class Demo{
    render() {
        return require('./demo.pug')({})
    }
}

module.exports = Demo;