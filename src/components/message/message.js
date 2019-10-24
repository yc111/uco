require('./message.scss');
const uuidv4 = require('uuid/v4');
const animationDuration = 300;
const defaultTime = 2000;
let removeTime;

class Message {
    constructor(options) {
        if(!options || typeof options !== 'object') {
            throw new Error('new Message should pass options whitch is an object type');
        }
        this.options = options;
        
        let isElegal = this.options.type !== 'success' && this.options.type !== 'info' && this.options.type !== 'danger' && this.options.type !== 'warning';
        if(!this.options.type || isElegal) {
            this.type = "info";
        }
        this.type = this.options.type;

        this.text = this.options.text || '';

        if(!this.options.time || isNaN(this.options.time) || this.options.time < 0) {
            this.time = defaultTime;
        } else {
            this.time = this.options.time;
        }
        removeTime = this.time + animationDuration;
        if(this.time < animationDuration) {
            removeTime = this.time + animationDuration * 2;
        }

        this.id = uuidv4();
        this.init();
    }
    render() {
        return require('./message.pug')({
            id: this.id,
            type: this.type,
            text: this.text
        });
    }
    init() {
        let messageContainer = '<div class="uco-message"></div>'
        if($('.uco-message').length === 0) {
            $('body').append(messageContainer)
        }
        $('.uco-message').append(this.render());
        $(`#${this.id}`).removeClass('move-up-leave').addClass('move-up-enter');
        setTimeout(() => {
            $(`#${this.id}`).removeClass('move-up-enter');
        }, animationDuration);

        setTimeout(() => {
            $(`#${this.id}`).addClass('move-up-leave');
        }, this.time);

        setTimeout(() => {
            $(`#${this.id}`).remove();
        }, removeTime);

    }
}

module.exports = Message;