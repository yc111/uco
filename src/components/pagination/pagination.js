
require('./pagination.scss');

const defaultPageSize = 10;
const defaultCurrent = 1;

class Pagination {
    constructor(options) {
        this.options = options;
        this.el = this.options.el;
        this.total = this.options.total;
        if(!this.options.current) {
            this.current = defaultCurrent;
        }
        this.current = this.options.current;
        if(!this.options.pageSize) {
            this.pageSize = defaultPageSize;
        }
        this.pageSize = this.options.pageSize;
        this.totalPage = Math.ceil(this.total / this.pageSize);
        this.events = {
            onchange: []
        }

        this.init();
    }
    render(current) {
        let _total = this.totalPage;
        let _current = this.current;

        if(current > 0) {
            _current = current
        }

        return require('./pagination.pug')({   
            total: _total,
            current: _current
        })
    }
    init() {
        let $parent = $('#' + this.el);
        $parent.html(this.render());

        $parent.click((e) => {
            if($(e.target).hasClass('uco-page-item')) {
                $parent.find('.uco-page-item').removeClass('active');
                $(e.target).addClass('active');
    
                let currentNum = parseInt($(e.target).text());
    
                if(this.events.onchange.length > 0) {
                    this.events.onchange.forEach(fn => {
                        fn({
                            page: currentNum,
                            pageSize: this.pageSize
                        })
                    });
                }

                $parent.html(this.render(currentNum));
            }
        })
    }
    onchange(fn) {
        this.events.onchange.push(fn);
    }


}

module.exports = Pagination;