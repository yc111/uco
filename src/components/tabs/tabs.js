require('./tabs.scss');
const uuidv4 = require('uuid');

class Tabs {
    constructor(options) {
        if(!options || typeof options !== 'object'){
            throw new Error('new Tabs must pass options whitch is an object type');
        }
        this.options = options;

        if(!this.el || el.slice(0,1) !== '#') {
            throw new Error('need options.el which is a string type and begins with "#"');
        }
        this.el = this.options.el;

        if(!this.list || !Array.isArray(list)) {
            throw new Error('need options.list whitch is an array type');
        }
        this.list = this.options.list;

        let selected = this.options.selected || 0;
        if (!isNaN(parseInt(selected)) && selected >= 0 && selected < this.list.length) {
            this.selected = selected;
        }else {
            this.selected = 0;
        }

        this.events = {
            onchange: []
        };
        this.id = uuidv4();

        this.init();
    }

    render() {
        return require('./tabs.ejs')({
            id: this.id,
            list: this.list,
            selected: this.selected
        })
    }

    init() {
        let html = this.render()
        $(this.el).html(html);

        $(`#${this.id} .uco-tabs-nav`).click((e) => {
            if($(e.target).hasClass('uco-tabs-tab')) {
                $(`#${this.id} .uco-tabs-tab`).removeClass('active');
                $(e.target).addClass('active');

                this.selected = $(`#${this.id} .uco-tabs-tab`).index(e.target);
                this.events['onchange'].forEach(fn => {
                    fn(this.selected);
                });

                let activeBarWidth = Math.round($(e.target).outerWidth());
                let transformDistance = Math.round($(e.target).position().left);

                $(`#${this.id} .uco-tabs-active-bar`).css({
                    display: 'block',
                    transform: `translate3d(${transformDistance}px, 0, 0)`,
                    width: activeBarWidth
                })
            }
        })
    }

    onchange(cb) {
        if(cb) {
            this.events['onchange'].push(cb);
        }
    }
}

module.exports = Tabs;