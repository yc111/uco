// const Pagination = require('../../components/pagination/pagination.js');
const {Pagination} = require('../../../dist/lib/uco.min.js');


class Demo {
    render() {
        return require('./demo.pug');
    }
    init() {
        this.pagination = new Pagination({
            el: 'show',
            current: 59,
            total: 560,
            pageSize: 9
        })
        this.pagination.onchange(({page, pageSize}) => {
            console.log(page, pageSize);
        })
    }
}

module.exports = Demo;