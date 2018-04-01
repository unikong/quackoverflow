// Combined during build

// Automatically combined file using C:\TeamCity\buildAgent\work\a270967b9ef29b42\StackOverflow\Content\js\quack.jsbundle

// Begin C:\TeamCity\buildAgent\work\a270967b9ef29b42\StackOverflow\Content\js\third-party\sine-waves.min.js

/*!
 _______ _____ __   _ _______      _  _  _ _______ _    _ _______ _______
 |______   |   | \  | |______      |  |  | |_____|  \  /  |______ |______
 ______| __|__ |  \_| |______      |__|__| |     |   \/   |______ ______|
                                                                         
 sine-waves v0.3.0 <https://github.com/isuttell/sine-waves>
 Contributor(s): Isaac Suttell <isaac@isaacsuttell.com>
 Last Build: 2014-12-03
*/
!function(a,b){"use strict";"function"==typeof define&&"object"==typeof define.amd?define([],function(){return b(a)}):a.SineWaves=b(a)}(this,function(){"use strict";function a(a){if(this.options=i.defaults(this.options,a),this.el=this.options.el,delete this.options.el,!this.el)throw"No Canvas Selected";if(this.ctx=this.el.getContext("2d"),this.waves=this.options.waves,delete this.options.waves,!this.waves||!this.waves.length)throw"No waves specified";this.dpr=window.devicePixelRatio||1,this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),this.setupUserFunctions(),this.easeFn=i.getFn(n,this.options.ease,"linear"),this.rotation=i.degreesToRadians(this.options.rotate),i.isType(this.options.running,"boolean")&&(this.running=this.options.running),this.setupWaveFns(),this.loop()}function b(a,b){return i.isType(a,"number")?a:(a=a.toString(),a.indexOf("%")>-1?(a=parseFloat(a),a>1&&(a/=100),b*a):a.indexOf("px")>-1?parseInt(a,10):void 0)}Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e});for(var c=["ms","moz","webkit","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];if(!window.requestAnimationFrame){var e=0;window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-e)),d=window.setTimeout(function(){a(b+c)},c);return e=b+c,d}}window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var f=Math.PI/180,g=2*Math.PI,h=Math.PI/2,i={},j=i.isType=function(a,b){var c={}.toString.call(a).toLowerCase();return c==="[object "+b.toLowerCase()+"]"},k=i.isFunction=function(a){return j(a,"function")},l=i.isString=function(a){return j(a,"string")},m=(i.isNumber=function(a){return j(a,"number")},i.shallowClone=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}),n=(i.defaults=function(a,b){j(b,"object")||(b={});var c=m(a);for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c},i.degreesToRadians=function(a){if(!j(a,"number"))throw new TypeError("Degrees is not a number");return a*f},i.getFn=function(a,b,c){return k(b)?b:l(b)&&k(a[b.toLowerCase()])?a[b.toLowerCase()]:a[c]},{});n.linear=function(a,b){return b},n.sinein=function(a,b){return b*(Math.sin(a*Math.PI-h)+1)*.5},n.sineout=function(a,b){return b*(Math.sin(a*Math.PI+h)+1)*.5},n.sineinout=function(a,b){return b*(Math.sin(a*g-h)+1)*.5};var o={};o.sine=function(a){return Math.sin(a)},o.sin=o.sine,o.sign=function(a){return a=+a,0===a||isNaN(a)?a:a>0?1:-1},o.square=function(a){return o.sign(Math.sin(a*g))},o.sawtooth=function(a){return 2*(a-Math.floor(a+.5))},o.triangle=function(a){return Math.abs(o.sawtooth(a))},a.prototype.options={speed:10,rotate:0,ease:"Linear",wavesWidth:"95%"},a.prototype.setupWaveFns=function(){for(var a=-1,b=this.waves.length;++a<b;)this.waves[a].waveFn=i.getFn(o,this.waves[a].type,"sine")},a.prototype.setupUserFunctions=function(){i.isFunction(this.options.resizeEvent)&&(this.options.resizeEvent.call(this),window.addEventListener("resize",this.options.resizeEvent.bind(this))),i.isFunction(this.options.initialize)&&this.options.initialize.call(this)};var p={timeModifier:1,amplitude:50,wavelength:50,segmentLength:10,lineWidth:1,strokeStyle:"rgba(255, 255, 255, 0.2)",type:"Sine"};return a.prototype.getDimension=function(a){return i.isNumber(this.options[a])?this.options[a]:i.isFunction(this.options[a])?this.options[a].call(this,this.el):"width"===a?this.el.clientWidth:"height"===a?this.el.clientHeight:void 0},a.prototype.updateDimensions=function(){var a=this.getDimension("width"),c=this.getDimension("height");this.width=this.el.width=a*this.dpr,this.height=this.el.height=c*this.dpr,this.el.style.width=a+"px",this.el.style.height=c+"px",this.waveWidth=b(this.options.wavesWidth,this.width),this.waveLeft=(this.width-this.waveWidth)/2,this.yAxis=this.height/2},a.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},a.prototype.time=0,a.prototype.update=function(a){this.time=this.time-.007,"undefined"==typeof a&&(a=this.time);var b=-1,c=this.waves.length;for(this.clear(),this.ctx.save(),this.rotation>0&&(this.ctx.translate(this.width/2,this.height/2),this.ctx.rotate(this.rotation),this.ctx.translate(-this.width/2,-this.height/2));++b<c;){var d=this.waves[b].timeModifier||1;this.drawWave(a*d,this.waves[b])}this.ctx.restore(),b=void 0,c=void 0},a.prototype.getPoint=function(a,b,c){var d=a*this.options.speed+(-this.yAxis+b)/c.wavelength,e=c.waveFn.call(this,d,o),f=this.easeFn.call(this,b/this.waveWidth,c.amplitude);return d=b+this.waveLeft,e=f*e+this.yAxis,{x:d,y:e}},a.prototype.drawWave=function(a,b){b=i.defaults(p,b),this.ctx.lineWidth=b.lineWidth*this.dpr,this.ctx.strokeStyle=b.strokeStyle,this.ctx.lineCap="butt",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(0,this.yAxis),this.ctx.lineTo(this.waveLeft,this.yAxis);var c,d;for(c=0;c<this.waveWidth;c+=b.segmentLength)d=this.getPoint(a,c,b),this.ctx.lineTo(d.x,d.y),d=void 0;c=void 0,b=void 0,this.ctx.lineTo(this.width,this.yAxis),this.ctx.stroke()},a.prototype.running=!0,a.prototype.loop=function(){this.running===!0&&this.update(),window.requestAnimationFrame(this.loop.bind(this))},a.prototype.Waves=o,a.prototype.Ease=n,a});

// End C:\TeamCity\buildAgent\work\a270967b9ef29b42\StackOverflow\Content\js\third-party\sine-waves.min.js

// Begin C:\TeamCity\buildAgent\work\a270967b9ef29b42\StackOverflow\Content\js\quack-main.js

"use strict";

StackExchange.quack = (function () {
    var hidePopover = function () {
        $('.js-quackoverflow, .js-quack-popover').removeClass('is-visible');
    };

    var hideAllSteps = function () {
        $('.js-step').addClass('d-none');
        waves.running = false;
    };

    var playAudio = function () {
        $('#quack-sound')[0].play();
    };

    var drawTheRestOfTheOwl = function (copyId) {
        $('#' + copyId).removeClass('d-none');
        var waves = new SineWaves({
            el: document.getElementById('waves'),
            speed: 15,
            ease: 'SineInOut',
            wavesWidth: '100%',

            waves: [
                {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -10,
                    wavelength: 30
                },
                {
                    timeModifier: 1,
                    lineWidth: 2,
                    amplitude: -30,
                    wavelength: 30
                },
            ],

            // Called on window resize
            resizeEvent: function() {
                var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                gradient.addColorStop(0, 'rgba(76, 141, 189, 0.25)');
                gradient.addColorStop(0.5, 'rgba(242, 114, 12, 0.75)');
                gradient.addColorStop(1, 'rgba(255, 255, 25, 0');

                var index = -1;
                var length = this.waves.length;
                while(++index < length){
                this.waves[index].strokeStyle = gradient;
            }

            // Clean Up
            index = void 0;
            length = void 0;
            gradient = void 0;
        }});

        waves.running = true;

        setTimeout(function () {
            waves.waves[0].amplitude = -1;
            waves.waves[1].amplitude = -3;
            $('.js-step03 > p').addClass('d-none');
            $('#uhoh').removeClass('d-none');

            setTimeout(function () {
                waves.waves[0].amplitude = -10;
                waves.waves[1].amplitude = -30;
                $('#uhoh').addClass('d-none');
                $('#listening').removeClass('d-none');

                setTimeout(function () {
                    waves.running = false;
                    hideAllSteps();
                    $('.js-step04').removeClass('d-none');
                    setTimeout(function () {
                        $('#thinking-cap').addClass('d-none');
                        $('#any-time-now').removeClass('d-none');

                        setTimeout(function () {
                            hideAllSteps();
                            $('.js-step05').removeClass('d-none');
                            playAudio();

                            setTimeout(function () {
                                hideAllSteps();
                                $('.js-step06').removeClass('d-none');
                                $('.js-quack-btn').one('click', function () {
                                    hideAllSteps();
                                    hidePopover();
                                });
                            }, 3000); // quack -> explanation transition duration
                        }, 5000) // thinking phase 2
                    }, 5000); // thinking phase 1 duration
                }, 7000); // listening phase 2
            }, 4000); // "speak up"
        }, 5000); // listening phase 1
    };

    var kickoff = function (path) {
        hideAllSteps();
        $('.js-step03').removeClass('d-none');
        $('.js-step03').data('pref', path);
        drawTheRestOfTheOwl(path);
    };
    
    var init = function () {
        $('.js-quackoverflow').addClass('is-visible');

        var t = setTimeout(function () {
            $('.js-quack-popover').addClass('is-visible');
            $('.js-step01').removeClass('d-none');
        }, 3000);

        $('.js-yes-btn, .js-no-btn').on('click', function(e) {
            kickoff($(this).data('pref'));
        });

        $('.js-quackoverflow').one('click', function(e) {
            clearTimeout(t);
            $('.js-quack-popover').addClass('is-visible');
            hideAllSteps();
            var x=$('#quack-sound')[0];x.play();x.pause(); // thanks, Safari
            $('.js-step02').removeClass('d-none');
        });

        $('.js-again').on('click', function () {
            kickoff($('.js-pref03').data('pref'));
        });

        $('.js-enough-already').on('click', function(e) {
            hideAllSteps();
            $('.js-quack-btn').toggleClass('d-none');
            $('.js-step07').removeClass('d-none');
        });

        $('.js-goodbye').on('click', function (e) {
            $.cookie('quack', 1, { path: '/', expires: 3 });
            hideAllSteps();
            hidePopover();
        });
    };

    return {
        init: init
    };
})();

// End C:\TeamCity\buildAgent\work\a270967b9ef29b42\StackOverflow\Content\js\quack-main.js

// End of file

// End of file

