/**
    @fileOverview
    调色板对话框
    @author Jinjiang<zhaojinjiang@yahoo.com.cn>
 */




/**
    调色板的构造器
    @constructor
 */
function ColorDialog() {
    var COLOR_SET = {
        "#003366": "63,0,72,4,72,15,63,19,54,15,54,4",
        "#336699": "81,0,90,4,90,15,81,19,72,15,72,4",
        "#3366CC": "99,0,108,4,108,15,99,19,90,15,90,4",
        "#003399": "117,0,126,4,126,15,117,19,108,15,108,4",
        "#000099": "135,0,144,4,144,15,135,19,126,15,126,4",
        "#0000CC": "153,0,162,4,162,15,153,19,144,15,144,4",
        "#000066": "171,0,180,4,180,15,171,19,162,15,162,4",
        "#006666": "54,15,63,19,63,30,54,34,45,30,45,19",
        "#006699": "72,15,81,19,81,30,72,34,63,30,63,19",
        "#0099CC": "90,15,99,19,99,30,90,34,81,30,81,19",
        "#0066CC": "108,15,117,19,117,30,108,34,99,30,99,19",
        "#0033CC": "126,15,135,19,135,30,126,34,117,30,117,19",
        "#0000FF": "144,15,153,19,153,30,144,34,135,30,135,19",
        "#3333FF": "162,15,171,19,171,30,162,34,153,30,153,19",
        "#333399": "180,15,189,19,189,30,180,34,171,30,171,19",
        "#669999": "45,30,54,34,54,45,45,49,36,45,36,34",
        "#009999": "63,30,72,34,72,45,63,49,54,45,54,34",
        "#33CCCC": "81,30,90,34,90,45,81,49,72,45,72,34",
        "#00CCFF": "99,30,108,34,108,45,99,49,90,45,90,34",
        "#0099FF": "117,30,126,34,126,45,117,49,108,45,108,34",
        "#0066FF": "135,30,144,34,144,45,135,49,126,45,126,34",
        "#3366FF": "153,30,162,34,162,45,153,49,144,45,144,34",
        "#3333CC": "171,30,180,34,180,45,171,49,162,45,162,34",
        "#666699": "189,30,198,34,198,45,189,49,180,45,180,34",
        "#339966": "36,45,45,49,45,60,36,64,27,60,27,49",
        "#00CC99": "54,45,63,49,63,60,54,64,45,60,45,49",
        "#00FFCC": "72,45,81,49,81,60,72,64,63,60,63,49",
        "#00FFFF": "90,45,99,49,99,60,90,64,81,60,81,49",
        "#33CCFF": "108,45,117,49,117,60,108,64,99,60,99,49",
        "#3399FF": "126,45,135,49,135,60,126,64,117,60,117,49",
        "#6699FF": "144,45,153,49,153,60,144,64,135,60,135,49",
        "#6666FF": "162,45,171,49,171,60,162,64,153,60,153,49",
        "#6600FF": "180,45,189,49,189,60,180,64,171,60,171,49",
        "#6600CC": "198,45,207,49,207,60,198,64,189,60,189,49",
        "#339933": "27,60,36,64,36,75,27,79,18,75,18,64",
        "#00CC66": "45,60,54,64,54,75,45,79,36,75,36,64",
        "#00FF99": "63,60,72,64,72,75,63,79,54,75,54,64",
        "#66FFCC": "81,60,90,64,90,75,81,79,72,75,72,64",
        "#66FFFF": "99,60,108,64,108,75,99,79,90,75,90,64",
        "#66CCFF": "117,60,126,64,126,75,117,79,108,75,108,64",
        "#99CCFF": "135,60,144,64,144,75,135,79,126,75,126,64",
        "#9999FF": "153,60,162,64,162,75,153,79,144,75,144,64",
        "#9966FF": "171,60,180,64,180,75,171,79,162,75,162,64",
        "#9933FF": "189,60,198,64,198,75,189,79,180,75,180,64",
        "#9900FF": "207,60,216,64,216,75,207,79,198,75,198,64",
        "#006600": "18,75,27,79,27,90,18,94,9,90,9,79",
        "#00CC00": "36,75,45,79,45,90,36,94,27,90,27,79",
        "#00FF00": "54,75,63,79,63,90,54,94,45,90,45,79",
        "#66FF99": "72,75,81,79,81,90,72,94,63,90,63,79",
        "#99FFCC": "90,75,99,79,99,90,90,94,81,90,81,79",
        "#CCFFFF": "108,75,117,79,117,90,108,94,99,90,99,79",
        "#CCCCFF": "126,75,135,79,135,90,126,94,117,90,117,79",
        "#CC99FF": "144,75,153,79,153,90,144,94,135,90,135,79",
        "#CC66FF": "162,75,171,79,171,90,162,94,153,90,153,79",
        "#CC33FF": "180,75,189,79,189,90,180,94,171,90,171,79",
        "#CC00FF": "198,75,207,79,207,90,198,94,189,90,189,79",
        "#9900CC": "216,75,225,79,225,90,216,94,207,90,207,79",
        "#003300": "9,90,18,94,18,105,9,109,0,105,0,94",
        "#009933": "27,90,36,94,36,105,27,109,18,105,18,94",
        "#33CC33": "45,90,54,94,54,105,45,109,36,105,36,94",
        "#66FF66": "63,90,72,94,72,105,63,109,54,105,54,94",
        "#99FF99": "81,90,90,94,90,105,81,109,72,105,72,94",
        "#CCFFCC": "99,90,108,94,108,105,99,109,90,105,90,94",
        "#FFFFFF": "117,90,126,94,126,105,117,109,108,105,108,94",
        "#FFCCFF": "135,90,144,94,144,105,135,109,126,105,126,94",
        "#FF99FF": "153,90,162,94,162,105,153,109,144,105,144,94",
        "#FF66FF": "171,90,180,94,180,105,171,109,162,105,162,94",
        "#FF00FF": "189,90,198,94,198,105,189,109,180,105,180,94",
        "#CC00CC": "207,90,216,94,216,105,207,109,198,105,198,94",
        "#660066": "225,90,234,94,234,105,225,109,216,105,216,94",
        "#336600": "18,105,27,109,27,120,18,124,9,120,9,109",
        "#009900": "36,105,45,109,45,120,36,124,27,120,27,109",
        "#66FF33": "54,105,63,109,63,120,54,124,45,120,45,109",
        "#99FF66": "72,105,81,109,81,120,72,124,63,120,63,109",
        "#CCFF99": "90,105,99,109,99,120,90,124,81,120,81,109",
        "#FFFFCC": "108,105,117,109,117,120,108,124,99,120,99,109",
        "#FFCCCC": "126,105,135,109,135,120,126,124,117,120,117,109",
        "#FF99CC": "144,105,153,109,153,120,144,124,135,120,135,109",
        "#FF66CC": "162,105,171,109,171,120,162,124,153,120,153,109",
        "#FF33CC": "180,105,189,109,189,120,180,124,171,120,171,109",
        "#CC0099": "198,105,207,109,207,120,198,124,189,120,189,109",
        "#993399": "216,105,225,109,225,120,216,124,207,120,207,109",
        "#333300": "27,120,36,124,36,135,27,139,18,135,18,124",
        "#669900": "45,120,54,124,54,135,45,139,36,135,36,124",
        "#99FF33": "63,120,72,124,72,135,63,139,54,135,54,124",
        "#CCFF66": "81,120,90,124,90,135,81,139,72,135,72,124",
        "#FFFF99": "99,120,108,124,108,135,99,139,90,135,90,124",
        "#FFCC99": "117,120,126,124,126,135,117,139,108,135,108,124",
        "#FF9999": "135,120,144,124,144,135,135,139,126,135,126,124",
        "#FF6699": "153,120,162,124,162,135,153,139,144,135,144,124",
        "#FF3399": "171,120,180,124,180,135,171,139,162,135,162,124",
        "#CC3399": "189,120,198,124,198,135,189,139,180,135,180,124",
        "#990099": "207,120,216,124,216,135,207,139,198,135,198,124",
        "#666633": "36,135,45,139,45,150,36,154,27,150,27,139",
        "#99CC00": "54,135,63,139,63,150,54,154,45,150,45,139",
        "#CCFF33": "72,135,81,139,81,150,72,154,63,150,63,139",
        "#FFFF66": "90,135,99,139,99,150,90,154,81,150,81,139",
        "#FFCC66": "108,135,117,139,117,150,108,154,99,150,99,139",
        "#FF9966": "126,135,135,139,135,150,126,154,117,150,117,139",
        "#FF6666": "144,135,153,139,153,150,144,154,135,150,135,139",
        "#FF0066": "162,135,171,139,171,150,162,154,153,150,153,139",
        "#CC6699": "180,135,189,139,189,150,180,154,171,150,171,139",
        "#993366": "198,135,207,139,207,150,198,154,189,150,189,139",
        "#999966": "45,150,54,154,54,165,45,169,36,165,36,154",
        "#CCCC00": "63,150,72,154,72,165,63,169,54,165,54,154",
        "#FFFF00": "81,150,90,154,90,165,81,169,72,165,72,154",
        "#FFCC00": "99,150,108,154,108,165,99,169,90,165,90,154",
        "#FF9933": "117,150,126,154,126,165,117,169,108,165,108,154",
        "#FF6600": "135,150,144,154,144,165,135,169,126,165,126,154",
        "#FF5050": "153,150,162,154,162,165,153,169,144,165,144,154",
        "#CC0066": "171,150,180,154,180,165,171,169,162,165,162,154",
        "#660033": "189,150,198,154,198,165,189,169,180,165,180,154",
        "#996633": "54,165,63,169,63,180,54,184,45,180,45,169",
        "#CC9900": "72,165,81,169,81,180,72,184,63,180,63,169",
        "#FF9900": "90,165,99,169,99,180,90,184,81,180,81,169",
        "#CC6600": "108,165,117,169,117,180,108,184,99,180,99,169",
        "#FF3300": "126,165,135,169,135,180,126,184,117,180,117,169",
        "#FF0000": "144,165,153,169,153,180,144,184,135,180,135,169",
        "#CC0000": "162,165,171,169,171,180,162,184,153,180,153,169",
        "#990033": "180,165,189,169,189,180,180,184,171,180,171,169",
        "#663300": "63,180,72,184,72,195,63,199,54,195,54,184",
        "#996600": "81,180,90,184,90,195,81,199,72,195,72,184",
        "#CC3300": "99,180,108,184,108,195,99,199,90,195,90,184",
        "#993300": "117,180,126,184,126,195,117,199,108,195,108,184",
        "#990000": "135,180,144,184,144,195,135,199,126,195,126,184",
        "#800000": "153,180,162,184,162,195,153,199,144,195,144,184",
        "#993333": "171,180,180,184,180,195,171,199,162,195,162,184"
    };

    var root = $('#dialog-for-color');
    var map = $('#dialog-for-color-map');
    var result = $('#dialog-for-color-result');
    var btn = $('#dialog-for-color-btn-default');
    var that = this;


    var currentPage;
    var currentKey;

    function submit(color) {
        that.hide();
        that.notify('color', {
            page: currentPage,
            key: currentKey,
            value: color
        });
    }

    $.each(COLOR_SET, function (color, croods) {
        var area = $('<area shape="poly"></area>').attr('coords', croods).attr('alt', color);
        area.appendTo(map);
        area.click(function (e) {
            result.css('background', color);
            result.data('color', color);
            submit(color);
        }).bind('mouseover', function (e) {
            result.css('background', color);
        });
    });
    map.bind('mouseout', function (e) {
        result.css('background', result.data('color'));
    });
    btn.click(function (e) {
        submit('');
    });

    that.show = function (page, key, value) {
        currentPage = page;
        currentKey = key;
        result.css('background', value || '#000000');
        root.show().css('left', ($('body').width() - root.width()) / 2 + 'px');
    };
    that.hide = function () {
        root.hide();
    };
}


reg(ColorDialog);


