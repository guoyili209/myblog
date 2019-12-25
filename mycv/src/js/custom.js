(function () {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	// navigation
	var OnePageNav = function () {
		var navToggler = $('.navbar-toggler');
		$(".smoothscroll[href^='#'], #pb-navbar ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash;
			if(hash=="")return;
			$('html, body').animate({

				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});
		});
		$("#pb-navbar ul li a[href^='#']").on('click', function (e) {
			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});

		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		});
	};


	var offCanvasNav = function () {
		// var toggleNav = $('.js-pb_nav-toggle'),
		// 		offcanvasNav = $('.js-pb_offcanvas-nav_v1');
		// if( toggleNav.length > 0 ) {
		// 	toggleNav.click(function(e){
		// 		$(this).toggleClass('active');
		// 		offcanvasNav.addClass('active');
		// 		e.preventDefault();
		// 	});
		// }
		// offcanvasNav.click(function(e){
		// 	if (offcanvasNav.hasClass('active')) {
		// 		offcanvasNav.removeClass('active');
		// 		toggleNav.removeClass('active');
		// 	}
		// 	e.preventDefault();
		// })
	};



	/*----------------------------------------
		Animate Scroll
	----------------------------------------*/

	var contentWayPoint = function () {
		var i = 0;
		$('.site-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('site-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .site-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};

	var navbarState = function () {

		var lastScrollTop = 0;
		$(window).scroll(function () {
			console.log($(this));
			var $this = $(this),
				st = $this.scrollTop(),
				navbar = $('#pb-navbar');

			if (st > 200) {
				navbar.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled awake');
			}

			if (navbar.hasClass('scrolled') && st > 300) {
				if (st > lastScrollTop) {
					// if (navbar.hasClass('scrolled')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
					// }
				} else {
					// if (navbar.hasClass('scrolled')) {
					navbar.addClass('awake');
					navbar.removeClass('sleep');
					// }
				}
				lastScrollTop = st;
			}

		});



		$('.site-navbar')
			.mouseenter(function () {
				var $this = $(this);
				$this.addClass('awake');
				$this.removeClass('sleep');
			})
			.mouseleave(function () {
				var $this = $(this);
				$this.addClass('sleep');
				$this.removeClass('awake');
			});
	};




	// var stellarInit = function() {
	// 	if( !isMobile.any() ) {
	// 		$(window).stellar();
	// 	}
	// };



	// Page Nav
	var clickMenu = function () {

		$('.navbar-nav a:not([class="external"])').click(function (event) {

			var section = $(this).data('nav-section'),
				navbar = $('.navbar-nav');
			if (isMobile.any()) {
				$('.navbar-toggle').click();
			}
			if ($('[data-section="' + section + '"]').length) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top
				}, 500, 'easeInOutExpo');
			}

			event.preventDefault();
			return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function (section) {

		var $el = $('.navbar-nav');
		$el.find('li').removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function () {

		var $section = $('section[data-section]');

		$section.waypoint(function (direction) {
			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function () { return -$(this.element).height() - 155; }
		});

	};


	var smoothScroll = function () {
		var $root = $('html, body');

		$('.smoothscroll').click(function () {
			$root.animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
			return false;
		});
	};

	var magnificPopupControl = function () {


		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function (openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		$('.with-caption').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true
			}
		});


		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};




	// 	var portfolioMasonry = function() {
	//  $('.filters ul li').click(function(){
	//         $('.filters ul li').removeClass('active');
	//         $(this).addClass('active');

	//         var data = $(this).attr('data-filter');
	//         $grid.isotope({
	//           filter: data
	//         })
	//       });


	//       if(document.getElementById("section-portfolio")){
	//             var $grid = $(".grid").isotope({
	//               itemSelector: ".all",
	//               percentPosition: true,
	//               masonry: {
	//                 columnWidth: ".all"
	//               }
	//             })
	//       };


	// 	};


	var modalFunc = function () {
		$('#modalCV').on('show.bs.modal', function (e) {
			var button = $(e.relatedTarget);
			var title = button.data('title');
			var recipient = button.data('mycv');
			var modal = $(this);
			modal.find('.modal-title').text(title + '工作情况');
			modal.find('.modal-body pre').text(recipient);
		});
	};

	var initModalData = function () {
		$('#w-2').attr("data-mycv",
			"  公司是一家营销策划类的广告公司，主要帮其他企业设计宣传网站，我在这家公司实习了近4个月，了解了商业公司web前端的实战开发流程。\n"
		);
		$('#w-1').attr("data-mycv",
			"  公司是一家专注Flash平台相关技术的教育培训公司，我主要负责Flash AS3的初级教学工作。\n"
		);
		$('#w1').attr("data-mycv",
			"  入行第一家游戏公司。\n" +
			"  13年9月入职后，在《合金大作战》项目中担任页游客户端开发一职，主要根据主程安排负责相应游戏功能开发；\n" +
			"  14年11月调证券交易所项目组，参与了几个证券知识相关web小游戏开发。"
		);
		$('#w2').attr("data-mycv",
			"  15年3月入职后，在《梦之队》运营项目中主要负责客户端日常维护和开发工作；\n" +
			"  15年6月调《足坛教父》项目担任客户端开发一职，主要负责客户端部分游戏功能开发。"
		);
		$('#w3').attr("data-mycv",
			"  16年3月入职到18年3月离职，主要参与了《拳皇98终极之战Web》的全程开发，我是第3个进入项目的程序，属于核心开发人员;"
		);
		$('#w4').attr("data-mycv",
			"  18年4月入职后，担任H5游戏开发工程师一职，主要参与了《魔王の始め方》H5游戏的开发；"
		);
		$('#w5').attr("data-mycv",
			"  18年7月入职后，担任H5游戏开发工程师一职，主要参与了《幻想大乱斗》、《圣域战神》两个H5游戏的开发；"
		);

		$('#p-2').attr("data-mycv",
			"项目周期：\n" +
			"2018/1 立项\n" +
			"2018/6 上线\n" +
			"项目描述：\n" +
			"1、游戏为日本DMM公司PC端H5游戏，我们负责将其移植到手机上。\n" +
			"2、人员我方前端2人，其余人员均为为日本公司提供，我们主要通过github进行协同开发。\n" +
			"3、游戏目前处于上线运营状态，需要翻墙用日本vpn才能登陆DMM平台。\n" +
			"项目职责：\n" +
			"我于2018年4月进入项目组，后续主要负责利用html/css/js将游戏适配到手机上。"
		);
		$('#p-1').attr("data-mycv",
			"项目周期：\n" +
			"此游戏为范特西公司核心盈利游戏，12年就已经上线，时至15年研发人员换了多批次，具体研发周期不清楚，当年上线便是爆款，连续几个月流水达到5000万以上，持续霸榜腾讯平台前三名。\n" +
			"项目描述：\n" +
			"1、游戏拥有美国NBA联赛正版授权，是一款模拟经营类竞技游戏。\n" +
			"2、人员构成为前端3人，后端2人，策划2人，美术1人，合计8人左右。\n" +
			"3、游戏处于上线运营状态，15年3至6月的月均流水近300万。\n" +
			"项目职责：\n" +
			"我于2015年3月进入项目组，后续主要负责客户端的日常维护和运营活动更新。"
		);
		$('#p1').attr("data-mycv",
			"项目周期：\n" +
			"2013/6-2013/8 demo阶段\n" +
			"2013/9 正式立项\n" +
			"2014/6 首次上线\n" +
			"2014/10 项目解散\n" +
			"项目描述：\n" +
			"1、项目拥有合金弹头正版IP，是一款横版推搭游戏。\n" +
			"2、人员构成为前端4人，后端4人，策划6人，美术8人，合计22人左右。\n" +
			"3、游戏首次后，数据均不理想，后续，公司决定不推广。\n" +
			"项目职责：\n" +
			"我于2013年9月进入项目组，后续主要负责页游常用系统功能开发，如角色培养、签到、寻宝等系统。"
		);
		$('#p2').attr("data-mycv",
			"项目周期：\n" +
			"2015/4-2015/6 demo阶段\n" +
			"2015/7 正式立项\n" +
			"2016/3 首次上线\n" +
			"2016/4 项目解散\n" +
			"项目描述：\n" +
			"1、游戏拥有西班牙足球甲级联赛正版授权，是一款模拟经营类游戏，玩家扮演一名足球经理，经营自己的球队。\n" +
			"2、游戏框架采用公司另一个已盈利游戏《胜利足球》的框架;\n" +
			"3、人员构成为前端3人，后端3人，策划4人，美术5人，合计15人左右。\n" +
			"4、游戏上线公司自有平台后，数据不理想，以及后期项目内部问题，导致游戏没有推广。\n" +
			"项目职责：\n" +
			"我于2015年7月进入项目组，后续主要负责：\n" +
			"1、在开发初期，我主要负责熟悉和使用框架；\n" +
			"2、后续发现游戏的UI开发非常麻烦，没有可视化编辑器，遂结合之前项目的经验，为框架引入了starlingswf工具库作为可视化UI编辑器，大大简化和提高了游戏的UI开发效率;\n" +
			"3、扩展开发后，我主要负责多个游戏系统开发，比如俱乐部比赛、球员培养、寻宝等若干系统。"
		);
		$('#p3').attr("data-mycv",
			"项目周期：\n" +
			"2016/3-2016/6 demo阶段\n" +
			"2016/6 正式立项\n" +
			"2017/7 首次上线\n" +
			"2017/8-2018/3 上线测试+调优阶段\n" +
			"2018/4-2018/10 上线收费运营\n" +
			"2018/10 项目解散\n" +
			"项目描述：\n" +
			"1、游戏拥有日本SNK正版授权，是一款格斗竞技类游戏。\n" +
			"2、人员构成为前端9人，后端8人,引擎5人，策划约20人，美术约40人，合计80人左右。\n" +
			"3、游戏曾先后上线腾讯、7k7k、4399、西游网等国内多个平台，以及游族海外平台GTArcade，目前游戏已下架。\n" +
			"项目职责：\n" +
			"我于2016年3月进入项目组，是第三名进入项目组的程序，属于核心开发成员;\n" +
			"1、在引擎开发期间，主要负责引擎AI 部分底层设计与开发，以及AI 编辑器的全部功能和剧情编辑器的部分功能开发；\n" +
			"2、在demo 开发期间，主要负责基础战斗AI 的开发；\n" +
			"3、在游戏立项后，主要负责战斗、关卡中的AI；\n" +
			"4、在游戏开发后期，主要负责AI 维护，以及部分战斗功能，和其他PVE 系统、商业系统等开发。"
		);
		$('#p4').attr("data-mycv",
			"项目周期：\n" +
			"2017/7-2018/3 探索与demo阶段\n" +
			"2018/3 正式立项，并且将题材换皮为传奇\n" +
			"2018/8 首次上线\n" +
			"2018/11 调优后再次上线\n" +
			"2018/12 项目解散\n" +
			"项目描述：\n" +
			"1、游戏属于传奇类型的H5 游戏；\n" +
			"2、项目人员5 位前端，4 位后端，4 位策划，美术约5人，合击18人左右；\n" +
			"3、18年11月底上线后，数据不理想，以及版权、项目组内部问题等原因，公司决定不推广。\n" +
			"此项目属于哆可梦首个自研H5项目，周期相对较长，研发人员换了2批，踩过很多坑，为公司后续H5项目积累了一些经验。\n" +
			"项目职责：\n" +
			"我于2018年7月进入项目组，后续负责部分功能开发，比如激情泡点PVP、签到奖励等开发；"
		);
		$('#p5').attr("data-mycv",
			"项目周期:\n" +
			"2018/7-2018/10 demo阶段\n" +
			"2018/10 正式立项\n" +
			"2019/2 首次上线测试\n" +
			"2019/2-2019/7 上线测试+调优阶段\n" +
			"2019/8-至今 上线运营阶段\n" +
			"项目描述：\n" +
			"1、游戏类型和玩法模仿网易手游《大话西游》，属于回合制游戏；\n" +
			"2、游戏已上线，目前处于运营阶段；\n" +
			"3、项目人员，6 位前端，4 位后端，6 位策划。\n" +
			"目前已上线多个主流H5平台，包括4399、7724、凡特游戏、微信小游戏平台等，以及九游、37、应用宝等多个平台手机app微端；\n" +
			"项目职责：\n" +
			"我于2018年12月进入项目组，后续负责部分玩法系统开发，比如跨服争霸PVP、宠物抓取等开发；"
		);
	};

	$(document).ready(function () {

		OnePageNav();
		offCanvasNav();

		contentWayPoint();
		navbarState();
		// stellarInit();
		clickMenu();
		// navigationSection();
		// magnificPopupControl();
		smoothScroll();
		// portfolioMasonry();
		modalFunc();
		initModalData();
		$("#downloadCV").click(function (e) {
			var a = document.createElement('a');
			a.download='郭一力的简历.pdf';
			a.href = 'assets/mycv.pdf';
			a.target="_blank";
			a.click();
		});
	});

})();

