require('./checkbox.scss');

class Checkbox {
    constructor(options) {
        this.options = options;
        this.el = this.options.el;
        this.value = this.options.value;
        this.label = this.options.label;
        this.event = {
            onchange: []
        }

        this.init();
    }
    render () {
        return require('./checkbox.pug')({
            value: this.value,
            label: this.label
        })
    }
    init() {
        const $parent = $('#' + this.el);
        $parent.html(this.render());
        $parent.click((e) => {
            this.event.onchange.forEach(fn => {
                fn(this.value);
            })
        })
        const $child = $parent.find('.uco-checkbox');
        $parent.find('input').click((e) => {
            e.stopPropagation();
            $child.toggleClass('active');
        })
    }
    value() {
        return this.value;
    }
    onchange(fn) {
        this.event.onchange.push(fn);
    }
}

module.exports = Checkbox;