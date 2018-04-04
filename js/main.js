$(function(){
    //侧面下拉框
    $('.side-treeview-title').bind('click', function () {
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp(300);
        } else {
            $(this).next().slideDown(300);
        }
    });

    $('.treeview-menu-title>a').bind('click', function () {
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp(300);
            $(this).children('span').children('i').addClass('open');
        } else {
            $(this).next().slideDown(300);
            $(this).children('span').children('i').removeClass('open');
            $(this).parent('li').siblings('li').children('a').next().slideUp(300);
        }
    });
    $('.treeview-menu-list>a').bind('click', function () {
        $('.treeview-menu-list').removeClass('active');
        $(this).parent('li').addClass('active');
    });

   
});

$(function(){
    //导航上的下拉框
    $('.dropdown-tog').click(function () {
        if ($('.dropdown-list').is(":visible")){
            $('.dropdown-list').hide();
        }else{
            $('.dropdown-list').show();
        } 
    });

    $('.dropdown-list li').click(function(){
        $('.dropdown-list li').removeClass('active');
        $(this).addClass('active');
    })
});

$(function () {
    //模型列表
    $('.table-tog').click(function () {
        if ($(this).parent('div').parent('li').hasClass('active')) {
            $(this).parent('div').parent('li').removeClass('active');
            $(this).next().slideUp();
            $(this).children('i').removeClass('open');
        } else {
            $(this).next().slideDown();
            $(this).parent('div').parent('li').addClass('active');
            $(this).children('i').addClass('open');
        }
    });
});

$(function () {
//用户标签
    //弹出用户标签复选框
    $('.user-tag-tog').click(function() {
        $('.user-tag-tog>option').css('display', 'none');
        $('.user-tag').css('display', 'block');
        $('.mask').css('display', 'block');
    });
    // 确认
    $('.submit').click(function () {
        $('.user-tag').css('display', 'none');
        $('.mask').css('display', 'none');

        //将选择的标签放入input框中
        var actives = $('.user-tag .active');
        var text = "";
        for (var i = 0; i < actives.length; i++) {
            text += $(actives[i]).text() + " ";
        }
        console.log(text);
        $('.user-tag-tog option').text(text);
    });
    // 取消
    $('.cancel').click(function () {
       $('.user-tag').css('display','none');
        $('.mask').css('display', 'none');
    });
    
    //添加焦点
    $('.tag-list label input').click(function(){
        if($(this).parent('label').hasClass('active')){
            $(this).parent('label').removeClass('active');
        }else{

            $(this).parent('label').addClass('active');
        }
    });

    

    //选择性别
    $(document).on('click','.select-sex label input',function(){
        if ($(this).parent('label').hasClass('active')) {
            // $(this).parent('label').removeClass('active');
        } else {
            $(this).parent('label').addClass('active');
            $(this).parent('label').siblings().removeClass('active'); 
        }
    });
   /*  $('.select-sex label input').click(function () {
        if ($(this).parent('label').hasClass('active')) {
            // $(this).parent('label').removeClass('active');
        } else {
            $(this).parent('label').addClass('active');
            $(this).parent('label').siblings().removeClass('active');
        }
    }); */
    
    //文件上传
    function getFileName(path) {
        var pos1 = path.lastIndexOf('/');
        var pos2 = path.lastIndexOf('\\');
        var pos = Math.max(pos1, pos2);
        if (pos < 0) {
            return path;
        }
        else {
            return path.substring(pos + 1);
        }
    }  

    $('#file').change(function () {
        var str = $(this).val();
        var fileName = getFileName(str);
        $('.show-fileurl i').text(fileName);
    });  
});


