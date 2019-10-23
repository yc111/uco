require('./index.scss');
require('../../dist/lib/uco.min.css');

// const x = require('../../dist/lib/uco.min.js');
// console.log(x);

$('#sidebar_button').click(function(e) {
    $('#sidebar').toggleClass('sidebar-open');
})

$('#link_list').click(function(e) {
    if(e.target.className === 'sidebar-link') {
        $('.sidebar .sidebar-link').removeClass('active');
        $(e.target).addClass('active');
        renderDemo(e.target.text.toLowerCase());
    }
})

renderDemo = (name)=> {
    let Demo = require(`../examples/${name}/demo.js`);
    let demo = new Demo();
    let demoHtml = '';
    if(demo.render) {
        demoHtml = demo.render();
    }
    $('#page_content').html(demoHtml);
    if(demo.init) {
        demo.init();
    }
}

$.get('./assets/linklist.json').then(data => {
    let str = ``;
    data.forEach((item, index) => {
        // if(index === 0) {
            // str += `<li><a class="sidebar-link active">${item.text}</a></li>`
        // }else {
            str += `<li><a class="sidebar-link">${item.text}</a></li>`
        // }
    });
    $('#link_list').html(str);
    $('.sidebar-link').first().trigger('click')
})