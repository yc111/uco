require('./dialog.scss');

class Dialog {
    constructor(options) {
        this.options = options;
        this.el = this.options.el;
        this.init();
    };
    render() {
        return require('./dialog.pug')({
            name: 'champyin'
        });
    };
    init() {
        $(this.el).html(this.render());
    }
}

module.exports = Dialog;