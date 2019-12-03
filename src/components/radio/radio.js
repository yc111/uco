require('./radio.scss');

class Radio {
    constructor(options) {
        this.options = options;
        this.el = this.options.el;
        this.value = this.options.value | undefined;
        this.label = this.options.label;
        this.events = {
                onchange: []
            };
        this.init();
    }
    render () {
        return require('./radio.pug')({
            value: this.value,
            label: this.label
        });
    }
    init() {
        let $parent = $('#'+this.el);
        $parent.html(this.render());
        $parent.click((e) => {
            $parent.find('.uco-radio').addClass('active');
            this.events.onchange.forEach(fn => {
                fn(this.value);
            })
        })
    }
    value() {
        return this.value;
    }
    onchange(fn) {
        this.events.onchange.push(fn)
    }
}

module.exports = Radio;