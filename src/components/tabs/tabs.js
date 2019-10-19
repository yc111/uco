require('./tabs.scss');

class Tabs {
    constructor(options) {
        this.options = options || {};
        this.el = this.options.el;
        this.list = this.options.list;
        this.init();
    }
    render() {
        return require('./tabs.ejs')({
            list: this.list
        })
    }
    init() {
        let html = this.render()
        $(this.el).html(html);
    }
}

module.exports = Tabs;