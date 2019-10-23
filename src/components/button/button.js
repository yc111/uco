
$(function () {
    const $btn = $('.uco-btn');
    //屏蔽按钮的回车、空格事件
    $btn.keydown(function (event) {
        if (event.keyCode === 13) {
            event.keyCode = 0;
            return false;
        }
    });
    //让按钮点击后自动失去焦点
    $btn.click(function () {
        this.blur();
    });
});