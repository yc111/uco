require('./dialog.scss');
const uuidv4 = require('uuid/v4');

class Dialog {
    constructor(options) {
        this.options = options;
        this.id = uuidv4();
        this.init();
    };
    render() {
        return require('./dialog.pug')({
            id: this.id
        });
    };
    init() {
        $('body').append('<div class="uco-dialog-mask"></div>').append(this.render());
    }
}

module.exports = Dialog;