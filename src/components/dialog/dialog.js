require('./dialog.scss');
const uuidv4 = require('uuid/v4');

class Dialog {
    constructor(options) {
        this.options = options;
        this.id = uuidv4();
        this.closeBtnId = uuidv4();
        this.contentId = uuidv4();
        this.commitId = uuidv4();
        this.cancelId = uuidv4();
        this.events = {
            onclose: [],
            onok: []
        };
        this.content = this.options.content;
        this.init();
    };

    render() {
        return require('./dialog.pug')({
            id: this.id,
            closeBtnId: this.closeBtnId,
            contentId: this.contentId,
            commitId: this.commitId,
            cancelId: this.cancelId,
            content: this.content
        });
    };

    init() {
        $('body').append('<div class="uco-dialog-mask"></div>').append(this.render());

        $(`#${this.closeBtnId}`).click(() => {
            this.events['onclose'].forEach(fn => {
                fn()
            });
            this._distroy();
        }) 
        $(`#${this.commitId}`).click(() => {
            this.events['onok'].forEach(fn => {
                fn(this);
            })
            $(`#${this.closeBtnId}`).trigger('click');
        })
        $(`#${this.cancelId}`).click(() => {
            $(`#${this.closeBtnId}`).trigger('click');
        })
    };

    _distroy() {
        $(`#${this.id}`).remove();
        $(`.uco-dialog-mask`).remove();
    }

    onclose(cb) {
        if(cb) {
            this.events['onclose'].push(cb);
        }
    }

    onok(cb) {
        if(cb) {
            this.events['onok'].push(cb);
        }
    }
}

module.exports = Dialog;