jQuery&&function(e){function t(i){var t=i.parent();i.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeProp("maxlength").removeClass("minicolors-input"),t.before(i).remove()}function o(i){r(i)}function s(i){var t=i.parent(),o=t.find(".minicolors-panel"),s=i.data("minicolors-settings");!i.data("minicolors-initialized")||i.prop("disabled")||t.hasClass("minicolors-inline")||t.hasClass("minicolors-focus")||(a(),t.addClass("minicolors-focus"),o.stop(!0,!0).fadeIn(s.showSpeed,function(){s.show&&s.show.call(i)}))}function a(){e(".minicolors-input").each(function(){var i=e(this),t=i.data("minicolors-settings"),o=i.parent();t.inline||o.find(".minicolors-panel").fadeOut(t.hideSpeed,function(){o.hasClass("minicolors-focus")&&t.hide&&t.hide.call(i),o.removeClass("minicolors-focus")})})}function n(i,t,o){var s=i.parents(".minicolors").find(".minicolors-input"),n=s.data("minicolors-settings"),a=i.find("[class$=-picker]"),e=i.offset().left,r=i.offset().top,c=Math.round(t.pageX-e),l=Math.round(t.pageY-r),o=o?n.animationSpeed:0;t.originalEvent.changedTouches&&(c=t.originalEvent.changedTouches[0].pageX-e,l=t.originalEvent.changedTouches[0].pageY-r),c<0&&(c=0),l<0&&(l=0),c>i.width()&&(c=i.width()),l>i.height()&&(l=i.height()),i.parent().is(".minicolors-slider-wheel")&&a.parent().is(".minicolors-grid")&&(e=75-c,t=75-l,r=Math.sqrt(e*e+t*t),(e=Math.atan2(t,e))<0&&(e+=2*Math.PI),75<r&&(c=75-75*Math.cos(e),l=75-75*Math.sin(e)),c=Math.round(c),l=Math.round(l)),i.is(".minicolors-grid")?a.stop(!0).animate({top:l+"px",left:c+"px"},o,n.animationEasing,function(){h(s,i)}):a.stop(!0).animate({top:l+"px"},o,n.animationEasing,function(){h(s,i)})}function h(i,t){function o(i,t){var o,s;return i.length&&t?(o=i.offset().left,s=i.offset().top,{x:o-t.offset().left+i.outerWidth()/2,y:s-t.offset().top+i.outerHeight()/2}):null}var s,n,a,e=i.val(),r=i.attr("data-opacity"),c=i.parent(),l=i.data("minicolors-settings"),h=(c.find(".minicolors-panel"),c.find(".minicolors-swatch")),d=c.find(".minicolors-grid"),p=c.find(".minicolors-slider"),u=c.find(".minicolors-opacity-slider"),g=d.find("[class$=-picker]"),m=p.find("[class$=-picker]"),f=u.find("[class$=-picker]"),b=o(g,d),v=o(m,p),f=o(f,u);if(t.is(".minicolors-grid, .minicolors-slider")){switch(l.control){case"wheel":s=d.width()/2-b.x,a=d.height()/2-b.y,n=Math.sqrt(s*s+a*a),(a=Math.atan2(a,s))<0&&(a+=2*Math.PI),75<n&&(n=75,b.x=69-75*Math.cos(a),b.y=69-75*Math.sin(a)),s=C(n/.75,0,100),e=x({h:n=C(180*a/Math.PI,0,360),s:s,b:a=C(100-Math.floor(v.y*(100/p.height())),0,100)}),p.css("backgroundColor",x({h:n,s:s,b:100}));break;case"saturation":e=x({h:n=C(parseInt(b.x*(360/d.width())),0,360),s:s=C(100-Math.floor(v.y*(100/p.height())),0,100),b:a=C(100-Math.floor(b.y*(100/d.height())),0,100)}),p.css("backgroundColor",x({h:n,s:100,b:a})),c.find(".minicolors-grid-inner").css("opacity",s/100);break;case"brightness":e=x({h:n=C(parseInt(b.x*(360/d.width())),0,360),s:s=C(100-Math.floor(b.y*(100/d.height())),0,100),b:a=C(100-Math.floor(v.y*(100/p.height())),0,100)}),p.css("backgroundColor",x({h:n,s:s,b:100})),c.find(".minicolors-grid-inner").css("opacity",1-a/100);break;default:e=x({h:n=C(360-parseInt(v.y*(360/p.height())),0,360),s:s=C(Math.floor(b.x*(100/d.width())),0,100),b:a=C(100-Math.floor(b.y*(100/d.height())),0,100)}),d.css("backgroundColor",x({h:n,s:100,b:100}))}i.val(w(e,l.letterCase))}t.is(".minicolors-opacity-slider")&&(r=l.opacity?parseFloat(1-f.y/u.height()).toFixed(2):1,l.opacity&&i.attr("data-opacity",r)),h.find("SPAN").css({backgroundColor:e,opacity:r}),y(i,e,r)}function r(i,t,o){var s,n,a,e,r,c=i.parent(),l=i.data("minicolors-settings"),h=c.find(".minicolors-swatch"),d=c.find(".minicolors-grid"),p=c.find(".minicolors-slider"),u=c.find(".minicolors-opacity-slider"),g=d.find("[class$=-picker]"),m=p.find("[class$=-picker]"),f=u.find("[class$=-picker]"),b=w(M(i.val(),!0),l.letterCase),v=function(i){i=function(i){var t={h:0,s:0,b:0},o=Math.min(i.r,i.g,i.b),s=Math.max(i.r,i.g,i.b),o=s-o;t.b=s,t.s=0!==s?255*o/s:0,0!==t.s?i.r===s?t.h=(i.g-i.b)/o:i.g===s?t.h=2+(i.b-i.r)/o:t.h=4+(i.r-i.g)/o:t.h=-1;t.h*=60,t.h<0&&(t.h+=360);return t.s*=100/255,t.b*=100/255,t}(k(i));0===i.s&&(i.h=360);return i}(b=b||w(M(l.defaultValue,!0)));switch(t||i.val(b),l.opacity&&(s=""===i.attr("data-opacity")?1:C(parseFloat(i.attr("data-opacity")).toFixed(2),0,1),isNaN(s)&&(s=1),i.attr("data-opacity",s),h.find("SPAN").css("opacity",s),a=C(u.height()-u.height()*s,0,u.height()),f.css("top",a+"px")),h.find("SPAN").css("backgroundColor",b),l.control){case"wheel":e=C(Math.ceil(.75*v.s),0,d.height()/2),r=v.h*Math.PI/180,n=C(75-Math.cos(r)*e,0,d.width()),a=C(75-Math.sin(r)*e,0,d.height()),g.css({top:a+"px",left:n+"px"}),a=150-v.b/(100/d.height()),""===b&&(a=0),m.css("top",a+"px"),p.css("backgroundColor",x({h:v.h,s:v.s,b:100}));break;case"saturation":n=C(5*v.h/12,0,150),a=C(d.height()-Math.ceil(v.b/(100/d.height())),0,d.height()),g.css({top:a+"px",left:n+"px"}),a=C(p.height()-v.s*(p.height()/100),0,p.height()),m.css("top",a+"px"),p.css("backgroundColor",x({h:v.h,s:100,b:v.b})),c.find(".minicolors-grid-inner").css("opacity",v.s/100);break;case"brightness":n=C(5*v.h/12,0,150),a=C(d.height()-Math.ceil(v.s/(100/d.height())),0,d.height()),g.css({top:a+"px",left:n+"px"}),a=C(p.height()-v.b*(p.height()/100),0,p.height()),m.css("top",a+"px"),p.css("backgroundColor",x({h:v.h,s:v.s,b:100})),c.find(".minicolors-grid-inner").css("opacity",1-v.b/100);break;default:n=C(Math.ceil(v.s/(100/d.width())),0,d.width()),a=C(d.height()-Math.ceil(v.b/(100/d.height())),0,d.height()),g.css({top:a+"px",left:n+"px"}),a=C(p.height()-v.h/(360/p.height()),0,p.height()),m.css("top",a+"px"),d.css("backgroundColor",x({h:v.h,s:100,b:100}))}o||y(i,b,s)}function y(i,t,o){var s=i.data("minicolors-settings");t+o!==i.data("minicolors-lastChange")&&(i.data("minicolors-lastChange",t+o),s.change&&(s.changeDelay?(clearTimeout(i.data("minicolors-changeTimeout")),i.data("minicolors-changeTimeout",setTimeout(function(){s.change.call(i,t,o)},s.changeDelay))):s.change.call(i,t,o)))}function w(i,t){return"uppercase"===t?i.toUpperCase():i.toLowerCase()}function M(i,t){return 3!==(i=i.replace(/[^A-F0-9]/gi,"")).length&&6!==i.length?"":(3===i.length&&t&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),"#"+i)}function C(i,t,o){return i<t&&(i=t),o<i&&(i=o),i}function x(i){return t=i,s={},n=Math.round(t.h),a=Math.round(255*t.s/100),i=Math.round(255*t.b/100),0===a?s.r=s.g=s.b=i:(i=n%60*((t=i)-(a=(255-a)*i/255))/60,360===n&&(n=0),n<60?(s.r=t,s.b=a,s.g=a+i):n<120?(s.g=t,s.b=a,s.r=t-i):n<180?(s.g=t,s.r=a,s.b=a+i):n<240?(s.b=t,s.r=a,s.g=t-i):n<300?(s.b=t,s.g=a,s.r=a+i):n<360?(s.r=t,s.g=a,s.b=t-i):(s.r=0,s.g=0,s.b=0)),s={r:Math.round(s.r),g:Math.round(s.g),b:Math.round(s.b)},o=[s.r.toString(16),s.g.toString(16),s.b.toString(16)],e.each(o,function(i,t){1===t.length&&(o[i]="0"+t)}),"#"+o.join("");var o,t,s,n,a}function k(i){return{r:(i=parseInt(-1<i.indexOf("#")?i.substring(1):i,16))>>16,g:(65280&i)>>8,b:255&i}}e.minicolors={defaultSettings:{animationSpeed:100,animationEasing:"swing",change:null,changeDelay:0,control:"hue",defaultValue:"",hide:null,hideSpeed:100,inline:!1,letterCase:"lowercase",opacity:!1,position:"default",show:null,showSpeed:100,swatchPosition:"left",textfield:!0,theme:"default"}},e.extend(e.fn,{minicolors:function(i,n){switch(i){case"destroy":return e(this).each(function(){t(e(this))}),e(this);case"hide":return a(),e(this);case"opacity":return void 0===n?e(this).attr("data-opacity"):(e(this).each(function(){o(e(this).attr("data-opacity",n))}),e(this));case"rgbObject":return function(i){var t=k(M(e(i).val(),!0)),i=e(i).attr("data-opacity");if(!t)return null;void 0!==i&&e.extend(t,{a:parseFloat(i)});return t}(e(this));case"rgbString":case"rgbaString":return function(i,t){var o=k(M(e(i).val(),!0)),i=e(i).attr("data-opacity");if(!o)return null;void 0===i&&(i=1);return t?"rgba("+o.r+", "+o.g+", "+o.b+", "+parseFloat(i)+")":"rgb("+o.r+", "+o.g+", "+o.b+")"}(e(this),"rgbaString"===i);case"settings":return void 0===n?e(this).data("minicolors-settings"):(e(this).each(function(){var i=e(this).data("minicolors-settings")||{};t(e(this)),e(this).minicolors(e.extend(!0,i,n))}),e(this));case"show":return s(e(this).eq(0)),e(this);case"value":return void 0===n?e(this).val():(e(this).each(function(){o(e(this).val(n))}),e(this));case"create":default:return"create"!==i&&(n=i),e(this).each(function(){var i,t,o,s;i=e(this),t=n,o=e('<span class="minicolors" />'),s=e.minicolors.defaultSettings,i.data("minicolors-initialized")||(t=e.extend(!0,{},s,t),o.addClass("minicolors-theme-"+t.theme).addClass("minicolors-swatch-position-"+t.swatchPosition).toggleClass("minicolors-swatch-left","left"===t.swatchPosition).toggleClass("minicolors-with-opacity",t.opacity),void 0!==t.position&&e.each(t.position.split(" "),function(){o.addClass("minicolors-position-"+this)}),i.addClass("minicolors-input").data("minicolors-initialized",!0).data("minicolors-settings",t).prop("size",7).prop("maxlength",7).wrap(o).after('<span class="minicolors-panel minicolors-slider-'+t.control+'"><span class="minicolors-slider"><span class="minicolors-picker"></span></span><span class="minicolors-opacity-slider"><span class="minicolors-picker"></span></span><span class="minicolors-grid"><span class="minicolors-grid-inner"></span><span class="minicolors-picker"><span></span></span></span></span>'),i.parent().find(".minicolors-panel").on("selectstart",function(){return!1}).end(),"left"===t.swatchPosition?i.before('<span class="minicolors-swatch"><span></span></span>'):i.after('<span class="minicolors-swatch"><span></span></span>'),t.textfield||i.addClass("minicolors-hidden"),t.inline&&i.parent().addClass("minicolors-inline"),r(i,!1,!0))}),e(this)}}}),e(document).on("mousedown.minicolors touchstart.minicolors",function(i){e(i.target).parents().add(i.target).hasClass("minicolors")||a()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(i){var t=e(this);i.preventDefault(),e(document).data("minicolors-target",t),n(t,i,!0)}).on("mousemove.minicolors touchmove.minicolors",function(i){var t=e(document).data("minicolors-target");t&&n(t,i)}).on("mouseup.minicolors touchend.minicolors",function(){e(this).removeData("minicolors-target")}).on("mousedown.minicolors touchstart.minicolors",".minicolors-swatch",function(i){var t=e(this).parent().find(".minicolors-input");t.parent().hasClass("minicolors-focus")?a():s(t)}).on("focus.minicolors",".minicolors-input",function(i){var t=e(this);t.data("minicolors-initialized")&&s(t)}).on("blur.minicolors",".minicolors-input",function(i){var t=e(this),o=t.data("minicolors-settings");t.data("minicolors-initialized")&&(t.val(M(t.val(),!0)),""===t.val()&&t.val(M(o.defaultValue,!0)),t.val(w(t.val(),o.letterCase)))}).on("keydown.minicolors",".minicolors-input",function(i){var t=e(this);if(t.data("minicolors-initialized"))switch(i.keyCode){case 9:a();break;case 27:a(),t.blur()}}).on("keyup.minicolors",".minicolors-input",function(i){var t=e(this);t.data("minicolors-initialized")&&r(t,!0)}).on("paste.minicolors",".minicolors-input",function(i){var t=e(this);t.data("minicolors-initialized")&&setTimeout(function(){r(t,!0)},1)})}(jQuery);

(function ($) { "use strict";
$(document).ready(function () {

var templateSettings = {

	initialized: false,

	init: function() {

		var $tis = this;

		if ($tis.initialized){
			return;
		}

		$tis.initialized = true;

		/**
		 * Append minicolors CSS / template settings css
		 */
        var css = ".minicolors{position:relative;display:inline-block;z-index:1}.minicolors-focus{z-index:2}.minicolors.minicolors-theme-default .minicolors-input{margin:0;margin-right:3px;border:1px solid #ababab;font:14px sans-serif;width:65px;height:16px;border-radius:0;box-shadow:inset 0 2px 4px rgba(0,0,0,.04);padding:2px;margin-right:-1px}.minicolors-theme-default.minicolors .minicolors-input{vertical-align:middle;outline:0}.minicolors-theme-default.minicolors-swatch-left .minicolors-input{margin-left:-1px;margin-right:auto}.minicolors-theme-default.minicolors-focus .minicolors-input,.minicolors-theme-default.minicolors-focus .minicolors-swatch{border-color:#999}.minicolors-hidden{position:absolute;left:-9999em}.minicolors-swatch{position:relative;width:20px;height:20px;text-align:left;background:url("+ biicore.themeRoot +"/images/jquery.minicolors.png) -80px 0;border:solid 1px #ababab;vertical-align:middle;display:inline-block}.minicolors-swatch SPAN{position:relative;width:100%;height:100%;background:0 0;box-shadow:inset 0 9px 0 rgba(255,255,255,.1);display:inline-block}.minicolors-panel{position:absolute;top:26px;left:0;width:173px;height:152px;background:#fff;border:solid 1px #ccc;box-shadow:0 0 20px rgba(0,0,0,.2);display:none}.minicolors-position-top .minicolors-panel{top:-156px}.minicolors-position-left .minicolors-panel{left:-83px}.minicolors-position-left.minicolors-with-opacity .minicolors-panel{left:-104px}.minicolors-with-opacity .minicolors-panel{width:194px}.minicolors .minicolors-grid{position:absolute;top:1px;left:1px;width:150px;height:150px;background:url("+ biicore.themeRoot +"/images/jquery.minicolors.png) -120px 0;cursor:crosshair}.minicolors .minicolors-grid-inner{position:absolute;top:0;left:0;width:150px;height:150px;background:0 0}.minicolors-slider-saturation .minicolors-grid{background-position:-420px 0}.minicolors-slider-saturation .minicolors-grid-inner{background:url("+ biicore.themeRoot +"/images/jquery.minicolors.png) -270px 0}.minicolors-slider-brightness .minicolors-grid{background-position:-570px 0}.minicolors-slider-brightness .minicolors-grid-inner{background:#000}.minicolors-slider-wheel .minicolors-grid{background-position:-720px 0}.minicolors-opacity-slider,.minicolors-slider{position:absolute;top:1px;left:152px;width:20px;height:150px;background:#fff url("+ biicore.themeRoot +"/images/jquery.minicolors.png) 0 0;cursor:crosshair}.minicolors-slider-saturation .minicolors-slider{background-position:-60px 0}.minicolors-slider-brightness .minicolors-slider{background-position:-20px 0}.minicolors-slider-wheel .minicolors-slider{background-position:-20px 0}.minicolors-opacity-slider{left:173px;background-position:-40px 0;display:none}.minicolors-with-opacity .minicolors-opacity-slider{display:block}.minicolors-grid .minicolors-picker{position:absolute;top:70px;left:70px;width:10px;height:10px;border:solid 1px #000;border-radius:10px;margin-top:-6px;margin-left:-6px;background:0 0}.minicolors-grid .minicolors-picker SPAN{position:absolute;top:0;left:0;width:6px;height:6px;border-radius:6px;border:solid 2px #fff}.minicolors-picker{position:absolute;top:0;left:0;width:18px;height:2px;background:#fff;border:solid 1px #000;margin-top:-2px}.minicolors-inline .minicolors-input,.minicolors-inline .minicolors-swatch{display:none}.minicolors-inline .minicolors-panel{position:relative;top:auto;left:auto;display:inline-block}.minicolors-theme-bootstrap .minicolors-input{padding:4px 6px;padding-left:30px;background-color:#fff;border:1px solid #ababab;border-radius:3px;color:#ababab;font-family:Lato,sans-serif;font-size:14px;height:27px;width:149px;line-height:19px;margin:0}.minicolors-theme-bootstrap.minicolors-focus .minicolors-input{border-color:#74777c;box-shadow:none;outline:0}.minicolors-theme-bootstrap .minicolors-swatch{position:absolute;left:4px;top:4px;z-index:2}.minicolors-theme-bootstrap.minicolors-swatch-position-right .minicolors-input{padding-left:6px;padding-right:30px}.minicolors-theme-bootstrap.minicolors-swatch-position-right .minicolors-swatch{left:auto;right:4px}.minicolors-theme-bootstrap .minicolors-panel{top:28px;z-index:3}.minicolors-theme-bootstrap.minicolors-position-top .minicolors-panel{top:-154px}.minicolors-theme-bootstrap.minicolors-position-left .minicolors-panel{left:-63px}.minicolors-theme-bootstrap.minicolors-position-left.minicolors-with-opacity .minicolors-panel{left:-84px}";
		css += "#template-settings{position:fixed;width:185px;top:85px;left:-188px;background-color:#f7f8fa;z-index:2000;padding:12px 10px;-webkit-border-bottom-right-radius:3px;-moz-border-bottom-right-radius:3px;border-bottom-right-radius:3px;-webkit-box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);-moz-box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);box-shadow:1px 1px 1px 1px rgba(0,0,0,.2)}#template-settings>i{position:absolute;top:0;right:-36px;cursor:pointer;background-color:#f7f8fa;text-align:center;line-height:36px;width:36px;height:36px;font-size:20pt;-webkit-border-top-right-radius:3px;-moz-border-top-right-radius:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-bottom-right-radius:3px;border-bottom-right-radius:3px;-webkit-box-shadow:2px 1px 2px 0 rgba(0,0,0,.3);-moz-box-shadow:2px 1px 2px 0 rgba(0,0,0,.3);box-shadow:2px 1px 2px 0 rgba(0,0,0,.3)}#template-settings h4{color:#73777b;font-weight:700;margin-bottom:5px;font-size:14pt}#template-settings input,#template-settings select,.settings-pattern{margin-bottom:20px}#template-settings input{width:149px}#template-settings input#settings-rtl{width: 15px;height: 15px;}#template-settings .form-check{margin-bottom:20px;}#template-settings .form-check label{padding-left:5px;}#template-settings select{width:150px;height:28px;padding:4px 0 0 5px;border:1px solid #ababab;font-size:9pt;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}#template-settings>div{font-size:9pt}#template-settings.form-style .checkbox{padding-left:22px}";

        $('head').append('<style>' + css + '</style>');

        $('body').append('<div id="template-settings" class="form-style d-none">'+
                            '<i class="fas fa-cog"></i><h4 class="center">Live Preview Settings</h4><br>'+
                            '<h4>Color:</h4><input class="minicolors" type="text" name="color-picker" value="'+ custom_color +'" />'
                            // '<h4>Navigation Style:</h4>'+
                            // '<select class="form-select" aria-label="Navigation Style" name="navigationStyle" id="navigation_style"><option value="style1">Style 1</option><option value="style2">Style 2</option></select>'+
                            // '<h4>RTL:</h4><div class="form-check">'+
                            //     '<input class="form-check-input" type="checkbox" value="rtl" name="settings-rtl" id="settings-rtl"><label for="settings-rtl">Enable/Disable RTL version.</label></div>'
                        );

        /*if ($tis.getUrlParameter('rtl') == "1") {
            $("#settings-rtl").prop('checked', true);

            $tis.activateRtl();
        }*/

        $tis.construct();
		$tis.events();
	},

	construct: function() {

		var $tis = this;

		$('.minicolors').minicolors({
			theme: 'bootstrap',
			change: function(hex){
                $tis.configColor(hex);
            }
		});
	},

	events: function() {

		var $tis = this;

		/**
		 * Template Settings Panel Open/Close
		 */
		var opened = false;
		$("#template-settings>i").click(function(){
			if (opened){
				$('#template-settings').animate({left: '-188px'}, 400, 'easeInExpo');
				opened = false;
			}else{
				$('#template-settings').animate({left: '0px'}, 400, 'easeOutExpo');
				opened = true;
			}
		});

		/**
		 * Navigation Style
		 */
		$('select[name=navigationStyle]').change(function() {
			$tis.setNav($(this).find('option:selected').val());
		});


		/**
		 * RTL
		 */
		$('#settings-rtl').on('change', function() {
			if(this.checked) {
                $tis.activateRtl();
			} else {
                $tis.deactivateRtl();
			}
		});
	},

    activateRtl: function() {
        var links = window.document.getElementsByTagName('link');

        $(links).each(function() {
            if ($(this).attr('href') == "css/bootstrap.min.css") {
                $('<link id="bootstrap_rtl_css" href="css/bootstrap.rtl.min.css" rel="stylesheet" type="text/css" />').insertAfter($(this));
            }
        });

        $('head').append('<link id="settings_rtl_css" href="css/rtl.css" rel="stylesheet" type="text/css" />');

        /*$("a").attr('href', function() {
            var href = $(this).attr('href');
            if (href !== "" && href !== undefined && href.charAt(0) !== "#" ) {
                return href + (href.indexOf('?') != -1 ? "&rtl=1" : "?rtl=1");
            }
        });*/
    },

    deactivateRtl: function() {
        $('#bootstrap_rtl_css').remove();
        $('#settings_rtl_css').remove();

        /*$("a").attr('href', function() {
            var href = $(this).attr('href');
            if (href !== "" && href !== undefined && href.charAt(0) !== "#") {
                return (href.indexOf('?') != -1 ? href.split('?')[0] : href);
            }
        });*/
    },

	setNav: function(val){
		"use strict";

		if(val === 'style2'){
			$('.nav-section').addClass('light');
            $(".nav-logo img").attr("src", "images/logo-white.png");
            var s = $(window).scrollTop();
            if (s > 180) {
                $(".nav-section.light").addClass("sticky");
            } else {
                $(".nav-section.light").removeClass("sticky");
            }
		}
		else {
			$('.nav-section').removeClass('light');
            $(".nav-logo img").attr("src", "images/logo.png");
		}
	},

	configColor: function(clr) {
        var $tis = this;

		$tis.convertHex(clr, 90);

        $('#custom_color').remove();
		$('head').append('<style type="text/css" id="custom_color" />');

		$('#custom_color').html(
			'#footer .copyright a:hover, .widget-quick-links > ul li a:hover, .contact-info li a:hover, .widget-tags .tags a:hover, .widget-latest-posts > ul h3 a:hover, .widget-categories > ul li a:hover, .comments .comment-list > li .comment .reply-btn:hover, .comments .comment-list > li .comment-info .reply-btn:hover, .blog-listing .item .blog-meta li a:hover, .blog-listing .post-content .blog-meta li a:hover, .blog-main .item .blog-meta li a:hover, .blog-main .post-content .blog-meta li a:hover,h1, h2, h3, h4, h5, h6,.color,a,a:hover, a:focus,.cta,.btn,.btn:hover, .btn:focus, .btn:active,.btn-primary,.btn-primary:hover, .btn-primary:focus, .btn-primary:active,.btn-primary.disabled, .btn-primary:disabled,.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev,.nav .open > a, .nav .open > a:hover, .nav .open > a:focus, .nav > li > a:hover, .nav > li > a:focus, .navbar-nav > li > a.active,.navbar-nav .dropdown-menu > li > a:hover, .navbar-nav .dropdown-menu > li > a:focus, .navbar-nav .dropdown-menu > li > a.active,.light.sticky #nav-mobile-btn:active, .light.sticky #nav-mobile-btn:hover,.nav-mobile a:hover,.hero-title,.hero-subtitle,.element .image .hover-info .sn-icons a,.element-v2 .info .sn-icons a,.timeline .year .neela-style,.timeline_footer .punchline,.marker,.wedding-details > i,.wedding-gifts li,.wedding-gifts li .neela-style,.title.color, .title-fancy.color, .title-fancy-lg.color,.blog-listing .item .blog-meta li, .blog-listing .post-content .blog-meta li, .blog-main .item .blog-meta li, .blog-main .post-content .blog-meta li,.blog-listing .item .blog-meta li a, .blog-listing .post-content .blog-meta li a, .blog-main .item .blog-meta li a, .blog-main .post-content .blog-meta li a,.pagination ul li a:hover, .pagination ul li a.active,.pagination ul#previous li a, .pagination ul#next li a,.widget-search form button,.widget-categories > ul li a:hover span,.widget-categories > ul li:hover:before,.widget-latest-posts > ul .top-info li a:hover,.widget-newsletter form button,.form-check-wrapper,.sn-icons a,.progress-wrapper, .divider-about-us, .divider-about-us i, .timeline_footer i {color:' + clr + ';}'+
			'::selection,::-moz-selection,.nav-section.light.sticky,.timeline::before,.map-info-container::before {background:' + clr + ';}'+
            '.loading-heart {stroke:' + clr + ';}'+
            '.bg-color,.owl-carousel .owl-nav button.owl-next:hover, .owl-carousel .owl-nav button.owl-prev:hover,#nav-mobile-btn,.light #nav-mobile-btn:active, .light #nav-mobile-btn:hover,.timeline .date,.timeline .description,.menu-section,.menu-section::before,.menu-wrapper,.map-info-container .info-wrapper .location-info,.marker:hover,.map_pins_full,.bmaid-gmen-color .image .hover-info,#testimonials,.gallery-scroller li,.page-header,.blog-listing .item .date, .blog-listing .post-content .date, .blog-main .item .date, .blog-main .post-content .date,.pagination ul#previous li a:hover, .pagination ul#next li a:hover,.widget-search form button:hover,.widget-newsletter,.widget-newsletter form button:hover,.form-check-input:checked,.progress-wrapper .progress .progress-bar, .cryptos-box-view .cryptos-box-view-close, .cryptos-box-view .coin-address {background-color:' + clr + ' !important;}'+
			'.btn:hover, .btn:focus, .btn:active,.btn-primary:hover, .btn-primary:focus, .btn-primary:active,.btn-primary.disabled, .btn-primary:disabled,.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev,.marker,.marker::before,.marker:hover::after,.pagination ul#previous li, .pagination ul#next li,.widget-search form button:hover ~ input,.widget-newsletter form button:hover ~ input,#rsvp-2::before,.form-control:focus, .form-select:focus,.form-check-input[type=radio],.form-check-input:checked[type=radio],.form-check-input[type=checkbox] {border-color:' + clr + ';}'+
            '.navbar-nav .dropdown-submenu:hover > a:after,.element .image .hover-info .v-lines,.element-v2 .info .v-lines,.timeline .year .neela-style .v-lines,.wedding-gifts li:hover .neela-style .v-lines,.form-wrapper.neela-style > .v-lines {border-left-color:' + clr + ';}'+
            '.element .image .hover-info .h-lines,.element-v2 .info .h-lines,.timeline .year .neela-style .h-lines,.wedding-gifts li:hover .neela-style .h-lines,.form-wrapper.neela-style > .h-lines {border-top-color:' + clr + ';}'+
            '.element .image .hover-info .h-lines,.element-v2 .info .h-lines,.timeline .year .neela-style .h-lines,.wedding-gifts li:hover .neela-style .h-lines,.form-wrapper.neela-style > .h-lines,.progress-wrapper .progress {border-bottom-color:' + clr + ';}'+
            '.element .image .hover-info .v-lines,.element-v2 .info .v-lines,.timeline .year .neela-style .v-lines,.wedding-gifts li:hover .neela-style .v-lines,.form-wrapper.neela-style > .v-lines {border-right-color:' + clr + ';}'+
            '.marker::before, .marker:hover::after {border-color:' + clr + ' transparent transparent transparent;}'+
            '#footer .copyright a, .widget-quick-links > ul li a, .contact-info li a, .widget-tags .tags a, .widget-latest-posts > ul h3 a, .widget-categories > ul li a, .comments .comment-list > li .comment .reply-btn, .comments .comment-list > li .comment-info .reply-btn, .blog-listing .item .blog-meta li a, .blog-listing .post-content .blog-meta li a, .blog-main .item .blog-meta li a, .blog-main .post-content .blog-meta li a {background-image: linear-gradient('+clr+','+clr+');}'+
            '#rsvp {background: linear-gradient(#fff 50%, '+clr+' 50%) no-repeat;}'+
            '#rsvp.section-bg-color {background: linear-gradient(#f9f9f9 50%, '+clr+' 50%) no-repeat;}'+
            '#rsvp-2 {background: linear-gradient('+clr+' 50%, #fff 50%) no-repeat;}'+
            '#rsvp-2.section-bg-color {background: linear-gradient('+clr+' 50%, #f9f9f9 50%) no-repeat;}'+
            '#rsvp-2.section-bg-color::before {border-color: '+clr+' transparent transparent transparent;}'+
            '.nav-mobile {border-left-color: ' + $tis.convertHex(clr, 30) + ';}'+
            '.invite .invite_info, .gallery-scroller li .hover-info, .gallery .item .hover-info{background-color:' + $tis.convertHex(clr, 70) + ';}'+
            '.blog-listing .item .image a, .blog-listing .post-content .image a, .blog-main .item .image a, .blog-main .post-content .image a, .widget-latest-posts > ul > li .image a{background-color:' + $tis.convertHex(clr, 80) + ';}'+
            '.wedding-gifts li .neela-style .h-lines{border-top-color:' + $tis.convertHex(clr, 50) + ';border-bottom-color:' + $tis.convertHex(clr, 50) + ';}'+
            '.wedding-gifts li .neela-style .v-lines{border-left-color:' + $tis.convertHex(clr, 50) + ';border-right-color:' + $tis.convertHex(clr, 50) + ';}'+
            '.bg-color-overlay::before,#hero::before,.page-header::before{background-color:' + $tis.shadeColor(clr, -33) + ';}'+
            '.btn-primary:hover, .btn-primary:focus, .btn-primary:active{background-color:' + $tis.convertHex(clr, 5) + ';}'+
            '.bg {background-color: ' + $tis.convertHex(clr, 100) + ';}'+
            '#giftregistry .events-boxs {background-color: ' + $tis.convertHex(clr, 80) + ';}'+
            '.wish-box-item:after, .wish-box, .cryptos-box-view .cryptos-box-view-close, .swal2-popup{border-color: ' + $tis.convertHex(clr, 100) + ';}'+
            '.wish-box::-webkit-scrollbar-thumb{background-color: ' + $tis.convertHex(clr, 80) + ';}'+
            '.btn-light, .btn-light:hover, .btn-light:focus, .btn-light:active{color:#fff;border-color:#fff;}'+
            '.bmaid-gmen-color .image .hover-info h3, .bmaid-gmen-color .image .hover-info .sn-icons a{color:#fff;}'+
            '.bmaid-gmen-color .image .hover-info .h-lines{border-top-color:#fff;border-bottom-color:#fff;}'+
            '.bmaid-gmen-color .image .hover-info .v-lines{border-left-color:#fff;border-right-color:#fff;}'+
            '.widget-newsletter.light{background-color: transparent !important;}'+
            '.section-title::after {background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'189\' height=\'26\' viewBox=\'0 0 189 26\'%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M86.19%2C2.362L96.98%2C13%2C86.19%2C23.634%2C75.4%2C13Z\'/%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M94.985%2C2.362L105.775%2C13%2C94.985%2C23.634%2C84.2%2C13Z\'/%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M103.78%2C2.362L114.57%2C13%2C103.78%2C23.634%2C92.991%2C13Z\'/%3E%3Cpath fill-rule=\'evenodd\' fill=\'%23'+clr.replace('#','')+'\' d=\'M120%2C14V13H523v1H120Z\'/%3E%3Cpath fill-rule=\'evenodd\' fill=\'%23'+clr.replace('#','')+'\' d=\'M-331%2C14V13H69v1H-331Z\'/%3E%3C/svg%3E\");}'+
            '.blog-listing .item .info-blog .post-title::after, .blog-listing .post-content .info-blog .post-title::after, .blog-main .item .info-blog .post-title::after, .blog-main .post-content .info-blog .post-title::after{background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'189\' height=\'26\' viewBox=\'0 0 189 26\'%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M86.19%2C2.362L96.98%2C13%2C86.19%2C23.634%2C75.4%2C13Z\'/%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M94.985%2C2.362L105.775%2C13%2C94.985%2C23.634%2C84.2%2C13Z\'/%3E%3Cpath fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23'+clr.replace('#','')+'\' stroke-width=\'1.5px\' d=\'M103.78%2C2.362L114.57%2C13%2C103.78%2C23.634%2C92.991%2C13Z\'/%3E%3Cpath fill-rule=\'evenodd\' fill=\'%23'+clr.replace('#','')+'\' d=\'M120%2C14V13H523v1H120Z\'/%3E%3Cpath fill-rule=\'evenodd\' fill=\'%23'+clr.replace('#','')+'\' d=\'M-331%2C14V13H69v1H-331Z\'/%3E%3C/svg%3E");}'+
            '.hero-divider-top::before, .hero-divider-bottom::before{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 126.17 16.56\'%3E%3Cpath fill=\'%23'+clr.replace('#','')+'\' d=\'M3.62,14.25l0,.17a.7.7,0,0,1-.24.48.85.85,0,0,1-.55.24H2.74a1,1,0,0,1-.61-.46,1.59,1.59,0,0,1-.25-.86l0-.21a3.18,3.18,0,0,1,1.26-1.86c1.8-1.47,4.29-2,6.74-2.11q1.11-.07,2.22-.07C18,9.55,23.85,11,29.75,12.38s11.8,2.86,17.79,2.86a33.3,33.3,0,0,0,4.8-.34,14,14,0,0,0,5.63-2A6.33,6.33,0,0,0,61,8.15c0-.11,0-.21,0-.32A3.85,3.85,0,0,0,60.6,6a2.42,2.42,0,0,0-1.49-1.22,2.25,2.25,0,0,0-.58-.07,2.89,2.89,0,0,0-1.63.56,5.33,5.33,0,0,0-1.2,1.19h0a8.46,8.46,0,0,0-1.65,4.94,6.14,6.14,0,0,0,1.53,4.2,7.76,7.76,0,0,0,5.26,2.25l.72,0a12.33,12.33,0,0,0,8.35-3.48,12.07,12.07,0,0,0,3.9-8.16V6a5.77,5.77,0,0,0-.72-2.81,3.34,3.34,0,0,0-.94-1.06,2.36,2.36,0,0,0-1.37-.44h-.25a2.8,2.8,0,0,0-2,1.29,6.84,6.84,0,0,0-.94,2.16A16.39,16.39,0,0,0,67,9.28a9.88,9.88,0,0,0,.38,2.79,7.59,7.59,0,0,0,1.8,3.12,5.86,5.86,0,0,0,3.14,1.74,5.54,5.54,0,0,0,1,.09,7.06,7.06,0,0,0,4.19-1.56,14.78,14.78,0,0,0,3.15-3.36A6.18,6.18,0,0,0,82,8.85V8.76a3.11,3.11,0,0,0-.59-1.81,2.29,2.29,0,0,0-1.66-1h-.17a2.45,2.45,0,0,0-1.43.5,3.47,3.47,0,0,0-1,1.11,4.32,4.32,0,0,0-.55,2.13A5.84,5.84,0,0,0,77.72,13a6.81,6.81,0,0,0,2.68,2.29,10.63,10.63,0,0,0,4.54.89,29.17,29.17,0,0,0,4.16-.37C99.25,14.31,109.32,12,119.44,12q1.12,0,2.24,0a10,10,0,0,1,2.14.25,3.3,3.3,0,0,1,1.65.91,2.2,2.2,0,0,1,.57,1.52,2.81,2.81,0,0,1-.61,1.74,1.9,1.9,0,0,1-1.48.75h-.22l-.06.5.1-.49a2.07,2.07,0,0,1-1-.49.76.76,0,0,1-.25-.54.71.71,0,0,1,.11-.37.5.5,0,0,0-.85-.53,1.71,1.71,0,0,0-.26.9,1.75,1.75,0,0,0,.55,1.25,3.05,3.05,0,0,0,1.54.76h0l.34,0a2.9,2.9,0,0,0,2.25-1.12,3.79,3.79,0,0,0,.83-2.37,3.2,3.2,0,0,0-.83-2.2,4.28,4.28,0,0,0-2.13-1.2,10.93,10.93,0,0,0-2.36-.29q-1.14,0-2.28,0c-10.28,0-20.39,2.28-30.49,3.74a28.43,28.43,0,0,1-4,.36,9.66,9.66,0,0,1-4.12-.8,5.82,5.82,0,0,1-2.28-2,4.84,4.84,0,0,1-.92-2.7A3.31,3.31,0,0,1,78,8.06a2.5,2.5,0,0,1,.69-.79A1.45,1.45,0,0,1,79.58,7h.09a1.3,1.3,0,0,1,.93.57A2.12,2.12,0,0,1,81,8.76v.06a5.27,5.27,0,0,1-1.17,2.71,13.79,13.79,0,0,1-2.93,3.13A6.07,6.07,0,0,1,73.31,16a4.54,4.54,0,0,1-.82-.07,4.86,4.86,0,0,1-2.6-1.45,6.61,6.61,0,0,1-1.56-2.71A8.9,8.9,0,0,1,68,9.28a15.4,15.4,0,0,1,.57-3.88,5.88,5.88,0,0,1,.79-1.84,1.8,1.8,0,0,1,1.29-.87h.15a1.35,1.35,0,0,1,.8.26,2.77,2.77,0,0,1,.9,1.27A5,5,0,0,1,72.82,6v.18a11.08,11.08,0,0,1-3.58,7.47,11.34,11.34,0,0,1-7.66,3.21l-.65,0a6.78,6.78,0,0,1-4.59-1.92,5.14,5.14,0,0,1-1.27-3.53A7.47,7.47,0,0,1,56.51,7a4.28,4.28,0,0,1,1-1,1.9,1.9,0,0,1,1.06-.39,1.23,1.23,0,0,1,.32,0,1.42,1.42,0,0,1,.87.73,2.85,2.85,0,0,1,.33,1.35v.24a5.33,5.33,0,0,1-2.64,4,13.12,13.12,0,0,1-5.22,1.87,32.34,32.34,0,0,1-4.65.32c-5.83,0-11.67-1.41-17.56-2.83S18.15,8.55,12.11,8.55q-1.14,0-2.28.07A12.7,12.7,0,0,0,2.52,11,4.13,4.13,0,0,0,.9,13.44a2.35,2.35,0,0,0,0,.36,2.59,2.59,0,0,0,.42,1.41,2,2,0,0,0,1.22.88,1.58,1.58,0,0,0,.35,0,1.83,1.83,0,0,0,1.24-.51,1.68,1.68,0,0,0,.56-1.21,1.36,1.36,0,0,0-.14-.61.5.5,0,1,0-.9.44Z\' transform=\'translate(-0.88 -1.69)\'/%3E%3C/svg%3E");}'+
            '.hero-wrapper::before'+
            '.invite .invite_title .text::before, .invite .invite_title .text::after{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'173\' height=\'154\' viewBox=\'0 0 173 154\'%3E%3Cpath fill=\'%23'+clr.replace('#','')+'\' fill-rule=\'evenodd\' d=\'M150.654,150.631c0.3-7.107,3.6-12.254.517-18.973-3.548-7.745-14.639-6.658-20.528-9.25-10.21-4.5-25.1-19.636-24.659-29.66,2.011,1.253,1.29,2.383,7.129,3.061,18.512,2.154,31.2,9.55,38,29.289-0.178-12.055-8.414-30.386-18.166-39.452-13.348,6.263-23.983,4.124-35.357,4.277,10.07-5.947,22.351-7.191,31.926-7.13-10.27-3.733-24.368-2.73-30.793-13.875,9.626,0.714,20.238,5.526,27.821,8.116l0-.006c-3.108-1.229-4.836-3.539-6.512-6.318a27.034,27.034,0,0,0-8.449-4.167c-8.354-1.857-15.43-1.311-19.861,4.171A4.015,4.015,0,0,1,90.6,73.408c0.55,1.645,2.577,3.918,3.166,6.147,0.28,1.06,1.879,1.1,1.857,2.86-0.042,3.132-3.129,3.329-3.807,1.978-0.971-1.942,1.012-3.09.9-4.36a10.358,10.358,0,0,0-2.507-5.769,62.958,62.958,0,0,1-3.363,9.9c-0.511,1.026-.019,3.005-0.693,4.105-0.917,1.5-3.3.691-3.755-.823-0.751-2.5,2.629-2.1,3.458-3.452,1.758-2.851,3.02-5.94,2.53-9.466a10.389,10.389,0,0,0-3.684,3.157c-0.564.64,0.008,1.972-.842,3-0.648.78-2.84,0.678-2.867-.743-0.046-2.282,2.07-1.939,3-2.849,1.542-1.512,3.6-2.9,4.3-4.021-4.247-.185-8.687.484-11.058,4.542-0.4.687,0.452,1.733-.428,3.628a1.364,1.364,0,0,1-2.393-.085c-0.9-1.367,1.6-2.7,2.237-3.814,2.6-4.529,7.544-4.911,12-5.108,1.134-1.639,1.958-2,2.409-1.894a24.8,24.8,0,0,1,7.026-5.112A92.55,92.55,0,0,0,75.468,70c-1.425,1.992-2.984,1.192-4.369,1.872a20.928,20.928,0,0,1-9.562,8.165c-1.431.633-1.738,2.508-3.144,1.8a1.435,1.435,0,0,1-.542-2.2c1.459-.981,2.043.316,3.178-0.091,3.361-1.206,6.106-3.677,8.664-6.854-1.339-.1-2.977.765-4.5,1.3-0.825.284-1.192,1.694-2.389,1.233a1.087,1.087,0,0,1-.272-2.041c1.086-.59,1.2.381,2.246,0.232A6.7,6.7,0,0,0,69.45,70.77c-4.939.4-9.165-.944-13.672-0.13a2.314,2.314,0,0,1-1.842,1.989,1.5,1.5,0,0,1-.974-2.461c0.9-1.1,1.527.016,3.129-.216,4-.584,9.461.66,13.295-0.13a9.7,9.7,0,0,0-5.72-3.171c-1.406-.306-1.322,1.51-2.661.317-0.917-.812-0.572-1.888.279-2.061,1.282-.257,1.678.784,2.527,1.061A22.772,22.772,0,0,1,70.183,69c-0.505-4.879-7.863-8.246-12.986-7.616-1.034.128-1.482,1.336-2.17,1.98-1.514,1.415-2.933-.858-2.224-1.774,1.1-1.422,1.79-.567,3.178-0.59,4.871-2.07,13.78,2.852,15.485,7.478,1.329,0.21,2.7-.664,3.687.488a98.437,98.437,0,0,1,24.4-4.989,80.531,80.531,0,0,0-8.573-3.941c-1.446.267-2.337-.446-3.2-0.782-2.683,1.121-4.685,3.479-7.8,4.134-0.621.133-1.117,1.319-2.4,1.2a1.587,1.587,0,0,1-.844-2.572c1.3-1.215,2.139-.017,3.157.652A19.408,19.408,0,0,0,87.246,58.3a5.093,5.093,0,0,0-1.464-1.539c-2.031-1.441-5.108-1.886-7.359-1.961-0.919-.031-2.371,1-3.47.888a1.353,1.353,0,0,1-.42-2.483c1.259-.957,2.013.688,3.8,0.926A29.363,29.363,0,0,1,87.3,56.392c-1.065-2.289-4.654-5.751-7.723-7.192-0.936-.437-1.746.95-3.548-0.436l0,0a9.894,9.894,0,0,1-.926.488c-7.038,3.163-21.7,3.807-26.634-1.057,1.575-.452,1.819.44,4.874-2.244,9.687-8.509,19.361-11.6,32.631-5.968-6.261-5.485-19.474-9.734-28.642-8.92-2.98,9.75-9.006,14.222-14.2,20.133,1.621-7.921,6.678-14.8,11.149-19.69C47.6,35.049,41.574,42.752,32.883,40.9c4.837-4.62,12.241-7.846,17.084-10.545-4.012,2.012-7.691-.525-13.256-0.607C32.6,29.684,27.837,33.4,22.8,33.16c-10.2-.487-17.25-6.753-21.769-14.221,11.584,1.867,19.724-3.341,29.358,1.555,4.862,2.47,7.126,10.863,15.384,8.313-6.265-2.4-9.455-6.156-13.4-9.462-2.344-1.964-5.2-3.362-6.776-6.01,5.2,0.11,9.6,3.471,12.674,5.909-1.932-3.517-5.541-6.064-5.02-11C38,11.962,43.627,17.772,46.065,23.009c0.931,2,.978,4.909,3.043,5.853,4.144,1.893,7.732-1.292,14.04.816-4.216-6.068-13.008-6.52-16.787-12.468-2.972-4.679-3.6-9.687-4.647-15.519C51.735,7.3,66.555,12.97,66.469,25.108c-0.014,1.946-1.446,3.33-.372,4.518a60.644,60.644,0,0,1,8.426,1.414A40.859,40.859,0,0,1,67.1,5.543c3.3,3.5,5.605,8.117,7.547,12.516,0.125-2.447-.553-5.461.521-7.419,4.188,5.3,7.1,11.972,6.847,19.045A19.976,19.976,0,0,1,80.86,34,65.916,65.916,0,0,1,92,41.857c-3.914-9.3-3.311-19.347-.559-28.505,9.215,14.266,22.685,17.962,26.761,33.072,2.057,7.626-4.755,18.207,5.978,24.609-3.494-9.064-2.551-16.141-2.823-23.591-0.162-4.427-1.431-8.859-.112-13.12,4.921,5.7,5.572,13.691,5.933,19.362,1.9-5.492,1.141-11.844,6.942-16.075,0.612,8.717-.173,20.409-3.432,28.113-1.243,2.941-4.321,5.816-3.334,8.954,1.982,6.293,8.874,7.058,12.721,15.886,2.428-10.423-5.6-20.315-2.878-30.152,2.143-7.738,6.913-13.269,12.152-20.062C153.04,56.564,161.3,78.006,148.194,89.7c-2.1,1.875-4.975,1.679-5.21,3.987a87.634,87.634,0,0,1,6.642,10.432c2.736-12.2,9.074-23.236,20.174-32.734-0.556,6.945-3.282,13.907-6.122,20.264,2.747-2.24,5.324-5.9,8.465-6.641-1.632,9.648-5.971,19.255-13.806,25.851-1.646,1.385-3.829,1.961-5.745,2.942a93.846,93.846,0,0,1,1.835,30.687c-0.237,1.942-.347,4.347-0.691,6.3C153.2,152,150.5,151.981,150.654,150.631ZM102.827,88.56c7.678,0.3,17.93,1.206,28.549-3.425C123.005,82.734,113.238,84.656,102.827,88.56ZM35.757,39.565c5.507,0.751,10.921-3.631,14.964-7.333C45.476,31.938,40.61,37.268,35.757,39.565ZM8.013,24.167c4.562,7.216,20.036,8.694,25.1,3.355C24.168,25.4,17.649,27.486,8.013,24.167Zm24.843,1.187C29.125,20.117,13.7,18.954,7.47,21.5,16.151,25.842,25.886,23.983,32.856,25.353Zm1.433-14.731c2.076,5.971,7.548,9.977,11.04,15.129C44.569,20.341,39.591,14.505,34.289,10.622ZM29.3,15.165C34.1,19.228,37.678,24,44.624,26.821,40.327,22.466,36.389,17.9,29.3,15.165ZM44.851,47.876c3.714-3.8,8.931-8.649,11.482-16.243C51.222,34.821,47.677,40.725,44.851,47.876ZM61.746,25.524c-1.174-7.488-12.773-11.811-17.77-18.189C45.787,15.777,51.767,21.807,61.746,25.524ZM45.674,5.69c1.264,3.623,6.947,6.389,10.841,9.618C60.427,18.55,62.57,22.9,64.273,27.04,67.1,16.025,54.781,10.906,45.674,5.69ZM68.321,8.808c-0.82,8.531,3.188,17.136,8.446,23.254C76.862,23.95,72.278,15.679,68.321,8.808ZM75.8,13.749c-1.173,6.639,1.565,13.88,3.492,19.828C83.538,26.476,77.472,19.634,75.8,13.749Zm56.771,27.289c-4.4,8.028-3.4,17.8-5.543,26.558C132.1,61.526,133.542,50.509,132.574,41.038Zm-9.709-.958c0.291,9.11-1.363,17.588,2.334,27.8C125.713,59.028,126.8,50.363,122.865,40.08ZM81.394,42.956c-7.937-.947-14.951,4.679-22.608,6.128C65.828,50.762,75.8,47.614,81.394,42.956ZM52.81,47.906c9.654,0.288,18.735-5.387,28.04-7.616C68.4,35.314,60.372,42.53,52.81,47.906ZM94.927,22.768C98.677,36.313,110.1,44.975,115.379,53.8,117.385,44.7,103.7,26.994,94.927,22.768ZM113.3,56.18C106.914,44.5,98.365,39.52,92.594,25.938,89.269,37.846,102.667,55.918,113.3,56.18Zm1.1,6.025c-3.914-4.473-12.517-5.992-17.141-11.644A36.358,36.358,0,0,1,94.453,46.6a10.38,10.38,0,0,0-5.1-3.617c-4.145-1.3-7.727,1.736-10.952,4.15a8.956,8.956,0,0,0,1.667,1.55c3.546,1.98,6.8,4.905,8.31,7.828a5.919,5.919,0,0,0,.311-4.819c-0.606-1.162-1.931-1.185-1.187-2.724,0.348-.719,1.664-0.509,1.991.008,0.538,0.851.06,1.649,0.022,2.732-0.067,1.964.339,3.167-.431,5.693A5.061,5.061,0,0,1,91.5,59.086c4.366,2.29,5.956,3.357,9.41,4.472,2.854,0.921,8.05,1.064,12.3,2.491a29.45,29.45,0,0,1,5.833,2.985A41.484,41.484,0,0,0,114.4,62.205Zm-11.464,8.508c4.528,6.649,14.472,8.216,22.36,8.969C120.534,73.758,110.1,73.7,102.938,70.714Zm40.236,14.31c6.9-8.531.3-25.2,2.309-36.763C138.178,58.4,137.5,70.687,143.174,85.023Zm5.718-36.533c-2.663,4.877-.129,13.672.178,20.993,0.309,7.353-2.282,13.878-5.076,19.73C158.552,81.558,152.115,63.344,148.892,48.49Zm18.586,27.374c-9.949,7.4-15.3,20.064-16.773,31.656C159.5,99.748,163.936,86.789,167.478,75.864Zm1.944,12.842c-8.261,5.184-13.379,15.157-17.9,23C163.255,109.377,164.722,96.213,169.422,88.706Zm-58.92,8.44c9.039,10.66,23.923,14.912,35.326,22.753C139.108,101.678,123.594,100.057,110.5,97.146ZM143.5,123.071c-6.67-9.453-19.5-11.531-28.47-18.357C120.044,113.914,133.081,121.579,143.5,123.071Z\'/%3E%3C/svg%3E");}'
		);
	},

    convertHex: function(hex,opacity){
        hex = hex.replace('#','');

        var r = parseInt(hex.substring(0,2), 16),
            g = parseInt(hex.substring(2,4), 16),
            b = parseInt(hex.substring(4,6), 16),
            result = 'rgba('+r+','+g+','+b+','+opacity/100+')';

        return result;
    },

    saturateHex: function (hex, saturationPercent) {
        if (!/^#([0-9a-f]{6})$/i.test(hex)) {
            throw('Unexpected color format');
        }

        if (saturationPercent < 0 || saturationPercent > 100) {
            throw('Unexpected color format');
        }

        var saturationFloat   = saturationPercent / 100,
            rgbIntensityFloat = [
                parseInt(hex.substr(1,2), 16) / 255,
                parseInt(hex.substr(3,2), 16) / 255,
                parseInt(hex.substr(5,2), 16) / 255
            ];

        var rgbIntensityFloatSorted = rgbIntensityFloat.slice(0).sort(function(a, b){ return a - b; }),
            maxIntensityFloat       = rgbIntensityFloatSorted[2],
            mediumIntensityFloat    = rgbIntensityFloatSorted[1],
            minIntensityFloat       = rgbIntensityFloatSorted[0];

        if (maxIntensityFloat == minIntensityFloat) {
            // All colors have same intensity, which means
            // the original color is gray, so we can't change saturation.
            return hex;
        }

        // New color max intensity wont change. Lets find medium and weak intensities.
        var newMediumIntensityFloat,
            newMinIntensityFloat = maxIntensityFloat * (1 - saturationFloat);

        if (mediumIntensityFloat == minIntensityFloat) {
            // Weak colors have equal intensity.
            newMediumIntensityFloat = newMinIntensityFloat;
        }
        else {
            // Calculate medium intensity with respect to original intensity proportion.
            var intensityProportion = (maxIntensityFloat - mediumIntensityFloat) / (mediumIntensityFloat - minIntensityFloat);
            newMediumIntensityFloat = (intensityProportion * newMinIntensityFloat + maxIntensityFloat) / (intensityProportion + 1);
        }

        var newRgbIntensityFloat       = [],
            newRgbIntensityFloatSorted = [newMinIntensityFloat, newMediumIntensityFloat, maxIntensityFloat];

        // We've found new intensities, but we have then sorted from min to max.
        // Now we have to restore original order.
        rgbIntensityFloat.forEach(function(originalRgb) {
            var rgbSortedIndex = rgbIntensityFloatSorted.indexOf(originalRgb);
            newRgbIntensityFloat.push(newRgbIntensityFloatSorted[rgbSortedIndex]);
        });

        var floatToHex = function(val) { return ('0' + Math.round(val * 255).toString(16)).substr(-2); },
            rgb2hex    = function(rgb) { return '#' + floatToHex(rgb[0]) + floatToHex(rgb[1]) + floatToHex(rgb[2]); };

        var newHex = rgb2hex(newRgbIntensityFloat);

        return newHex;
    },

    shadeColor: function (color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R<255)?R:255;
        G = (G<255)?G:255;
        B = (B<255)?B:255;

        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

        return "#"+RR+GG+BB;
    },

    getUrlParameter: function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    }
};

templateSettings.init();
if (custom_color) custom_color = custom_color.replace("#", '');
setTimeout(templateSettings.configColor("#" +custom_color));

function receiveMessage(event) {
    let data = event.data;
	let post_custom_color = '';
    if (data.event == 'change_customcolor') {
        if (data.color) post_custom_color = data.color.replace("#", '');
        templateSettings.configColor("#" + post_custom_color)
    }
}

window.addEventListener("message", receiveMessage, false);

})})(jQuery);
