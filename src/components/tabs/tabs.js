require('./tabs.scss');
const uuidv4 = require('uuid/v4');

class Tabs {
    constructor(options) {
        if (!options || typeof options !== 'object') {
            throw new Error('new Tabs should pass options whitch is an object type');
        }
        this.options = options;

        if (!this.options.el || this.options.el.slice(0, 1) !== '#') {
            throw new Error('need options.el which is a string type and begins with "#"');
        }
        this.el = this.options.el;

        if (!this.options.list || !Array.isArray(this.options.list)) {
            throw new Error('need options.list whitch is an array type');
        }
        this.list = this.options.list;

        let selected = this.options.selected || 0;
        if (!isNaN(parseInt(selected)) && selected >= 0 && selected < this.list.length) {
            this.selected = selected;
        } else {
            this.selected = 0;
        }

        this.events = {
            onchange: []
        };
        this.id = uuidv4();

        let len = this.list.length;
        this.panelIds = [];
        for (i = 0; i < len; i++) {
            this.panelIds.push(uuidv4());
        }
        this.activePanelId = this.panelIds[this.selected];

        this.init();
    }

    render() {
        return require('./tabs.pug')({
            id: this.id,
            ids: this.panelIds,
            list: this.list,
            selected: this.selected
        })
    }

    init() {
        let html = this.render()
        $(this.el).html(html);

        $(`#${this.id} .uco-tabs-nav`).click((e) => {
            if ($(e.target).hasClass('uco-tabs-tab')) {
                $(`#${this.id} .uco-tabs-tab`).removeClass('active');
                $(e.target).addClass('active');

                this.selected = $(`#${this.id} .uco-tabs-tab`).index(e.target);
                this.activePanelId = this.panelIds[this.selected];

                $(`#${this.id} .uco-tabs-panel`).removeClass('active');
                $(`#${this.activePanelId}`).addClass('active')
                $(`#${this.id} .uco-tabs-content`).css({
                    transform: `translateX(-${this.selected}00%) translateZ(0px)`
                });

                this.events['onchange'].forEach(fn => {
                    fn({
                        index: this.selected,
                        panelId: this.activePanelId
                    });
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
        if (cb) {
            this.events['onchange'].push(cb);
        }
    }
}

module.exports = Tabs;