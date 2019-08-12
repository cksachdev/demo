/*
 * CloudWall.me 1.2.2 plugins set
 * — $.ui 1.11.1
 * — $.ui datepicker ru localization
 * — $.ui touch punch 0.2.2
 * — calc 1.3
 * — select2 3.5.4
 * — Redactor 8.25 mod
 * — CodeMirror 5.9.1 + javascript and htmlmixed bundles
 * — JCrop 0.9
 * — loadImage 2.6.2
 * — $.list 0.4
 * — nicescroll 3.6.6
 * */

/*! jQuery UI - v1.11.1 - 2014-08-13 */

// (function (e) {
// 	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
// })(function (e) {
// 	function t(t, s) {
// 		var n, a, o, r = t.nodeName.toLowerCase();
// 		return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
// 	}

// 	function i(t) {
// 		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
// 			return "hidden" === e.css(this, "visibility")
// 		}).length
// 	}

// 	function s(e) {
// 		for (var t, i; e.length && e[0] !== document;) {
// 			if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
// 			e = e.parent()
// 		}
// 		return 0
// 	}

// 	function n() {
// 		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
// 			closeText: "Done",
// 			prevText: "Prev",
// 			nextText: "Next",
// 			currentText: "Today",
// 			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
// 			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
// 			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
// 			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
// 			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
// 			weekHeader: "Wk",
// 			dateFormat: "mm/dd/yy",
// 			firstDay: 0,
// 			isRTL: !1,
// 			showMonthAfterYear: !1,
// 			yearSuffix: ""
// 		}, this._defaults = {
// 			showOn: "focus",
// 			showAnim: "fadeIn",
// 			showOptions: {},
// 			defaultDate: null,
// 			appendText: "",
// 			buttonText: "...",
// 			buttonImage: "",
// 			buttonImageOnly: !1,
// 			hideIfNoPrevNext: !1,
// 			navigationAsDateFormat: !1,
// 			gotoCurrent: !1,
// 			changeMonth: !1,
// 			changeYear: !1,
// 			yearRange: "c-10:c+10",
// 			showOtherMonths: !1,
// 			selectOtherMonths: !1,
// 			showWeek: !1,
// 			calculateWeek: this.iso8601Week,
// 			shortYearCutoff: "+10",
// 			minDate: null,
// 			maxDate: null,
// 			duration: "fast",
// 			beforeShowDay: null,
// 			beforeShow: null,
// 			onSelect: null,
// 			onChangeMonthYear: null,
// 			onClose: null,
// 			numberOfMonths: 1,
// 			showCurrentAtPos: 0,
// 			stepMonths: 1,
// 			stepBigMonths: 12,
// 			altField: "",
// 			altFormat: "",
// 			constrainInput: !0,
// 			showButtonPanel: !1,
// 			autoSize: !1,
// 			disabled: !1
// 		}, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
// 	}

// 	function a(t) {
// 		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
// 		return t.delegate(i, "mouseout", function () {
// 			e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
// 		}).delegate(i, "mouseover", o)
// 	}

// 	function o() {
// 		e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
// 	}

// 	function r(t, i) {
// 		e.extend(t, i);
// 		for (var s in i) null == i[s] && (t[s] = i[s]);
// 		return t
// 	}

// 	function h(e) {
// 		return function () {
// 			var t = this.element.val();
// 			e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
// 		}
// 	}
// 	e.ui = e.ui || {}, e.extend(e.ui, {
// 		version: "1.11.1",
// 		keyCode: {
// 			BACKSPACE: 8,
// 			COMMA: 188,
// 			DELETE: 46,
// 			DOWN: 40,
// 			END: 35,
// 			ENTER: 13,
// 			ESCAPE: 27,
// 			HOME: 36,
// 			LEFT: 37,
// 			PAGE_DOWN: 34,
// 			PAGE_UP: 33,
// 			PERIOD: 190,
// 			RIGHT: 39,
// 			SPACE: 32,
// 			TAB: 9,
// 			UP: 38
// 		}
// 	}), e.fn.extend({
// 		scrollParent: function (t) {
// 			var i = this.css("position"),
// 				s = "absolute" === i,
// 				n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
// 				a = this.parents().filter(function () {
// 					var t = e(this);
// 					return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
// 				}).eq(0);
// 			return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
// 		},
// 		uniqueId: function () {
// 			var e = 0;
// 			return function () {
// 				return this.each(function () {
// 					this.id || (this.id = "ui-id-" + ++e)
// 				})
// 			}
// 		}(),
// 		removeUniqueId: function () {
// 			return this.each(function () {
// 				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
// 			})
// 		}
// 	}), e.extend(e.expr[":"], {
// 		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
// 			return function (i) {
// 				return !!e.data(i, t)
// 			}
// 		}) : function (t, i, s) {
// 			return !!e.data(t, s[3])
// 		},
// 		focusable: function (i) {
// 			return t(i, !isNaN(e.attr(i, "tabindex")))
// 		},
// 		tabbable: function (i) {
// 			var s = e.attr(i, "tabindex"),
// 				n = isNaN(s);
// 			return (n || s >= 0) && t(i, !n)
// 		}
// 	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
// 		function s(t, i, s, a) {
// 			return e.each(n, function () {
// 				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
// 			}), i
// 		}
// 		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
// 			a = i.toLowerCase(),
// 			o = {
// 				innerWidth: e.fn.innerWidth,
// 				innerHeight: e.fn.innerHeight,
// 				outerWidth: e.fn.outerWidth,
// 				outerHeight: e.fn.outerHeight
// 			};
// 		e.fn["inner" + i] = function (t) {
// 			return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
// 				e(this).css(a, s(this, t) + "px")
// 			})
// 		}, e.fn["outer" + i] = function (t, n) {
// 			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
// 				e(this).css(a, s(this, t, !0, n) + "px")
// 			})
// 		}
// 	}), e.fn.addBack || (e.fn.addBack = function (e) {
// 		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
// 	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
// 		return function (i) {
// 			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
// 		}
// 	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
// 		focus: function (t) {
// 			return function (i, s) {
// 				return "number" == typeof i ? this.each(function () {
// 					var t = this;
// 					setTimeout(function () {
// 						e(t).focus(), s && s.call(t)
// 					}, i)
// 				}) : t.apply(this, arguments)
// 			}
// 		}(e.fn.focus),
// 		disableSelection: function () {
// 			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
// 			return function () {
// 				return this.bind(e + ".ui-disableSelection", function (e) {
// 					e.preventDefault()
// 				})
// 			}
// 		}(),
// 		enableSelection: function () {
// 			return this.unbind(".ui-disableSelection")
// 		},
// 		zIndex: function (t) {
// 			if (void 0 !== t) return this.css("zIndex", t);
// 			if (this.length)
// 				for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
// 					if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
// 					n = n.parent()
// 				}
// 			return 0
// 		}
// 	}), e.ui.plugin = {
// 		add: function (t, i, s) {
// 			var n, a = e.ui[t].prototype;
// 			for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
// 		},
// 		call: function (e, t, i, s) {
// 			var n, a = e.plugins[t];
// 			if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
// 				for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
// 		}
// 	};
// 	var l = 0,
// 		u = Array.prototype.slice;
// 	e.cleanData = function (t) {
// 		return function (i) {
// 			var s, n, a;
// 			for (a = 0; null != (n = i[a]); a++) try {
// 				s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
// 			} catch (o) {}
// 			t(i)
// 		}
// 	}(e.cleanData), e.widget = function (t, i, s) {
// 		var n, a, o, r, h = {},
// 			l = t.split(".")[0];
// 		return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
// 			return !!e.data(t, n)
// 		}, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
// 			return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
// 		}, e.extend(o, a, {
// 			version: s.version,
// 			_proto: e.extend({}, s),
// 			_childConstructors: []
// 		}), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
// 			return e.isFunction(s) ? (h[t] = function () {
// 				var e = function () {
// 						return i.prototype[t].apply(this, arguments)
// 					},
// 					n = function (e) {
// 						return i.prototype[t].apply(this, e)
// 					};
// 				return function () {
// 					var t, i = this._super,
// 						a = this._superApply;
// 					return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
// 				}
// 			}(), void 0) : (h[t] = s, void 0)
// 		}), o.prototype = e.widget.extend(r, {
// 			widgetEventPrefix: a ? r.widgetEventPrefix || t : t
// 		}, h, {
// 			constructor: o,
// 			namespace: l,
// 			widgetName: t,
// 			widgetFullName: n
// 		}), a ? (e.each(a._childConstructors, function (t, i) {
// 			var s = i.prototype;
// 			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
// 		}), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
// 	}, e.widget.extend = function (t) {
// 		for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
// 			for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
// 		return t
// 	}, e.widget.bridge = function (t, i) {
// 		var s = i.prototype.widgetFullName || t;
// 		e.fn[t] = function (n) {
// 			var a = "string" == typeof n,
// 				o = u.call(arguments, 1),
// 				r = this;
// 			return n = !a && o.length ? e.widget.extend.apply(null, [n].concat(o)) : n, a ? this.each(function () {
// 				var i, a = e.data(this, s);
// 				return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
// 			}) : this.each(function () {
// 				var t = e.data(this, s);
// 				t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
// 			}), r
// 		}
// 	}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
// 		widgetName: "widget",
// 		widgetEventPrefix: "",
// 		defaultElement: "<div>",
// 		options: {
// 			disabled: !1,
// 			create: null
// 		},
// 		_createWidget: function (t, i) {
// 			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
// 				remove: function (e) {
// 					e.target === i && this.destroy()
// 				}
// 			}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
// 		},
// 		_getCreateOptions: e.noop,
// 		_getCreateEventData: e.noop,
// 		_create: e.noop,
// 		_init: e.noop,
// 		destroy: function () {
// 			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
// 		},
// 		_destroy: e.noop,
// 		widget: function () {
// 			return this.element
// 		},
// 		option: function (t, i) {
// 			var s, n, a, o = t;
// 			if (0 === arguments.length) return e.widget.extend({}, this.options);
// 			if ("string" == typeof t)
// 				if (o = {}, s = t.split("."), t = s.shift(), s.length) {
// 					for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
// 					if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
// 					n[t] = i
// 				} else {
// 					if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
// 					o[t] = i
// 				} return this._setOptions(o), this
// 		},
// 		_setOptions: function (e) {
// 			var t;
// 			for (t in e) this._setOption(t, e[t]);
// 			return this
// 		},
// 		_setOption: function (e, t) {
// 			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
// 		},
// 		enable: function () {
// 			return this._setOptions({
// 				disabled: !1
// 			})
// 		},
// 		disable: function () {
// 			return this._setOptions({
// 				disabled: !0
// 			})
// 		},
// 		_on: function (t, i, s) {
// 			var n, a = this;
// 			"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
// 				function r() {
// 					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
// 				}
// 				"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
// 				var h = s.match(/^([\w:-]*)\s*(.*)$/),
// 					l = h[1] + a.eventNamespace,
// 					u = h[2];
// 				u ? n.delegate(u, l, r) : i.bind(l, r)
// 			})
// 		},
// 		_off: function (e, t) {
// 			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
// 		},
// 		_delay: function (e, t) {
// 			function i() {
// 				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
// 			}
// 			var s = this;
// 			return setTimeout(i, t || 0)
// 		},
// 		_hoverable: function (t) {
// 			this.hoverable = this.hoverable.add(t), this._on(t, {
// 				mouseenter: function (t) {
// 					e(t.currentTarget).addClass("ui-state-hover")
// 				},
// 				mouseleave: function (t) {
// 					e(t.currentTarget).removeClass("ui-state-hover")
// 				}
// 			})
// 		},
// 		_focusable: function (t) {
// 			this.focusable = this.focusable.add(t), this._on(t, {
// 				focusin: function (t) {
// 					e(t.currentTarget).addClass("ui-state-focus")
// 				},
// 				focusout: function (t) {
// 					e(t.currentTarget).removeClass("ui-state-focus")
// 				}
// 			})
// 		},
// 		_trigger: function (t, i, s) {
// 			var n, a, o = this.options[t];
// 			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
// 				for (n in a) n in i || (i[n] = a[n]);
// 			return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
// 		}
// 	}, e.each({
// 		show: "fadeIn",
// 		hide: "fadeOut"
// 	}, function (t, i) {
// 		e.Widget.prototype["_" + t] = function (s, n, a) {
// 			"string" == typeof n && (n = {
// 				effect: n
// 			});
// 			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
// 			n = n || {}, "number" == typeof n && (n = {
// 				duration: n
// 			}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
// 				e(this)[t](), a && a.call(s[0]), i()
// 			})
// 		}
// 	}), e.widget;
// 	var d = !1;
// 	e(document).mouseup(function () {
// 			d = !1
// 		}), e.widget("ui.mouse", {
// 			version: "1.11.1",
// 			options: {
// 				cancel: "input,textarea,button,select,option",
// 				distance: 1,
// 				delay: 0
// 			},
// 			_mouseInit: function () {
// 				var t = this;
// 				this.element.bind("mousedown." + this.widgetName, function (e) {
// 					return t._mouseDown(e)
// 				}).bind("click." + this.widgetName, function (i) {
// 					return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
// 				}), this.started = !1
// 			},
// 			_mouseDestroy: function () {
// 				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
// 			},
// 			_mouseDown: function (t) {
// 				if (!d) {
// 					this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
// 					var i = this,
// 						s = 1 === t.which,
// 						n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
// 					return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
// 						i.mouseDelayMet = !0
// 					}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
// 						return i._mouseMove(e)
// 					}, this._mouseUpDelegate = function (e) {
// 						return i._mouseUp(e)
// 					}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
// 				}
// 			},
// 			_mouseMove: function (t) {
// 				return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
// 			},
// 			_mouseUp: function (t) {
// 				return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1
// 			},
// 			_mouseDistanceMet: function (e) {
// 				return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
// 			},
// 			_mouseDelayMet: function () {
// 				return this.mouseDelayMet
// 			},
// 			_mouseStart: function () {},
// 			_mouseDrag: function () {},
// 			_mouseStop: function () {},
// 			_mouseCapture: function () {
// 				return !0
// 			}
// 		}),
// 		function () {
// 			function t(e, t, i) {
// 				return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
// 			}

// 			function i(t, i) {
// 				return parseInt(e.css(t, i), 10) || 0
// 			}

// 			function s(t) {
// 				var i = t[0];
// 				return 9 === i.nodeType ? {
// 					width: t.width(),
// 					height: t.height(),
// 					offset: {
// 						top: 0,
// 						left: 0
// 					}
// 				} : e.isWindow(i) ? {
// 					width: t.width(),
// 					height: t.height(),
// 					offset: {
// 						top: t.scrollTop(),
// 						left: t.scrollLeft()
// 					}
// 				} : i.preventDefault ? {
// 					width: 0,
// 					height: 0,
// 					offset: {
// 						top: i.pageY,
// 						left: i.pageX
// 					}
// 				} : {
// 					width: t.outerWidth(),
// 					height: t.outerHeight(),
// 					offset: t.offset()
// 				}
// 			}
// 			e.ui = e.ui || {};
// 			var n, a, o = Math.max,
// 				r = Math.abs,
// 				h = Math.round,
// 				l = /left|center|right/,
// 				u = /top|center|bottom/,
// 				d = /[\+\-]\d+(\.[\d]+)?%?/,
// 				c = /^\w+/,
// 				p = /%$/,
// 				f = e.fn.position;
// 			e.position = {
// 					scrollbarWidth: function () {
// 						if (void 0 !== n) return n;
// 						var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
// 							a = s.children()[0];
// 						return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
// 					},
// 					getScrollInfo: function (t) {
// 						var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
// 							s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
// 							n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
// 							a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
// 						return {
// 							width: a ? e.position.scrollbarWidth() : 0,
// 							height: n ? e.position.scrollbarWidth() : 0
// 						}
// 					},
// 					getWithinInfo: function (t) {
// 						var i = e(t || window),
// 							s = e.isWindow(i[0]),
// 							n = !!i[0] && 9 === i[0].nodeType;
// 						return {
// 							element: i,
// 							isWindow: s,
// 							isDocument: n,
// 							offset: i.offset() || {
// 								left: 0,
// 								top: 0
// 							},
// 							scrollLeft: i.scrollLeft(),
// 							scrollTop: i.scrollTop(),
// 							width: s || n ? i.width() : i.outerWidth(),
// 							height: s || n ? i.height() : i.outerHeight()
// 						}
// 					}
// 				}, e.fn.position = function (n) {
// 					if (!n || !n.of) return f.apply(this, arguments);
// 					n = e.extend({}, n);
// 					var p, m, g, v, y, b, _ = e(n.of),
// 						x = e.position.getWithinInfo(n.within),
// 						w = e.position.getScrollInfo(x),
// 						k = (n.collision || "flip").split(" "),
// 						T = {};
// 					return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
// 						var e, t, i = (n[this] || "").split(" ");
// 						1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
// 					}), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
// 						var s, l, u = e(this),
// 							d = u.outerWidth(),
// 							c = u.outerHeight(),
// 							f = i(this, "marginLeft"),
// 							b = i(this, "marginTop"),
// 							D = d + f + i(this, "marginRight") + w.width,
// 							S = c + b + i(this, "marginBottom") + w.height,
// 							M = e.extend({}, y),
// 							N = t(T.my, u.outerWidth(), u.outerHeight());
// 						"right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += N[0], M.top += N[1], a || (M.left = h(M.left), M.top = h(M.top)), s = {
// 							marginLeft: f,
// 							marginTop: b
// 						}, e.each(["left", "top"], function (t, i) {
// 							e.ui.position[k[t]] && e.ui.position[k[t]][i](M, {
// 								targetWidth: m,
// 								targetHeight: g,
// 								elemWidth: d,
// 								elemHeight: c,
// 								collisionPosition: s,
// 								collisionWidth: D,
// 								collisionHeight: S,
// 								offset: [p[0] + N[0], p[1] + N[1]],
// 								my: n.my,
// 								at: n.at,
// 								within: x,
// 								elem: u
// 							})
// 						}), n.using && (l = function (e) {
// 							var t = v.left - M.left,
// 								i = t + m - d,
// 								s = v.top - M.top,
// 								a = s + g - c,
// 								h = {
// 									target: {
// 										element: _,
// 										left: v.left,
// 										top: v.top,
// 										width: m,
// 										height: g
// 									},
// 									element: {
// 										element: u,
// 										left: M.left,
// 										top: M.top,
// 										width: d,
// 										height: c
// 									},
// 									horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
// 									vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
// 								};
// 							d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
// 						}), u.offset(e.extend(M, {
// 							using: l
// 						}))
// 					})
// 				}, e.ui.position = {
// 					fit: {
// 						left: function (e, t) {
// 							var i, s = t.within,
// 								n = s.isWindow ? s.scrollLeft : s.offset.left,
// 								a = s.width,
// 								r = e.left - t.collisionPosition.marginLeft,
// 								h = n - r,
// 								l = r + t.collisionWidth - a - n;
// 							t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
// 						},
// 						top: function (e, t) {
// 							var i, s = t.within,
// 								n = s.isWindow ? s.scrollTop : s.offset.top,
// 								a = t.within.height,
// 								r = e.top - t.collisionPosition.marginTop,
// 								h = n - r,
// 								l = r + t.collisionHeight - a - n;
// 							t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
// 						}
// 					},
// 					flip: {
// 						left: function (e, t) {
// 							var i, s, n = t.within,
// 								a = n.offset.left + n.scrollLeft,
// 								o = n.width,
// 								h = n.isWindow ? n.scrollLeft : n.offset.left,
// 								l = e.left - t.collisionPosition.marginLeft,
// 								u = l - h,
// 								d = l + t.collisionWidth - o - h,
// 								c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
// 								p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
// 								f = -2 * t.offset[0];
// 							0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
// 						},
// 						top: function (e, t) {
// 							var i, s, n = t.within,
// 								a = n.offset.top + n.scrollTop,
// 								o = n.height,
// 								h = n.isWindow ? n.scrollTop : n.offset.top,
// 								l = e.top - t.collisionPosition.marginTop,
// 								u = l - h,
// 								d = l + t.collisionHeight - o - h,
// 								c = "top" === t.my[1],
// 								p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
// 								f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
// 								m = -2 * t.offset[1];
// 							0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > d && (i > 0 || d > r(i)) && (e.top += p + f + m))
// 						}
// 					},
// 					flipfit: {
// 						left: function () {
// 							e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
// 						},
// 						top: function () {
// 							e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
// 						}
// 					}
// 				},
// 				function () {
// 					var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
// 						h = document.createElement("div");
// 					t = document.createElement(r ? "div" : "body"), s = {
// 						visibility: "hidden",
// 						width: 0,
// 						height: 0,
// 						border: 0,
// 						margin: 0,
// 						background: "none"
// 					}, r && e.extend(s, {
// 						position: "absolute",
// 						left: "-1000px",
// 						top: "-1000px"
// 					});
// 					for (o in s) t.style[o] = s[o];
// 					t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
// 				}()
// 		}(), e.ui.position, e.widget("ui.accordion", {
// 			version: "1.11.1",
// 			options: {
// 				active: 0,
// 				animate: {},
// 				collapsible: !1,
// 				event: "click",
// 				header: "> li > :first-child,> :not(li):even",
// 				heightStyle: "auto",
// 				icons: {
// 					activeHeader: "ui-icon-triangle-1-s",
// 					header: "ui-icon-triangle-1-e"
// 				},
// 				activate: null,
// 				beforeActivate: null
// 			},
// 			hideProps: {
// 				borderTopWidth: "hide",
// 				borderBottomWidth: "hide",
// 				paddingTop: "hide",
// 				paddingBottom: "hide",
// 				height: "hide"
// 			},
// 			showProps: {
// 				borderTopWidth: "show",
// 				borderBottomWidth: "show",
// 				paddingTop: "show",
// 				paddingBottom: "show",
// 				height: "show"
// 			},
// 			_create: function () {
// 				var t = this.options;
// 				this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
// 			},
// 			_getCreateEventData: function () {
// 				return {
// 					header: this.active,
// 					panel: this.active.length ? this.active.next() : e()
// 				}
// 			},
// 			_createIcons: function () {
// 				var t = this.options.icons;
// 				t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
// 			},
// 			_destroyIcons: function () {
// 				this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
// 			},
// 			_destroy: function () {
// 				var e;
// 				this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
// 			},
// 			_setOption: function (e, t) {
// 				return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
// 			},
// 			_keydown: function (t) {
// 				if (!t.altKey && !t.ctrlKey) {
// 					var i = e.ui.keyCode,
// 						s = this.headers.length,
// 						n = this.headers.index(t.target),
// 						a = !1;
// 					switch (t.keyCode) {
// 						case i.RIGHT:
// 						case i.DOWN:
// 							a = this.headers[(n + 1) % s];
// 							break;
// 						case i.LEFT:
// 						case i.UP:
// 							a = this.headers[(n - 1 + s) % s];
// 							break;
// 						case i.SPACE:
// 						case i.ENTER:
// 							this._eventHandler(t);
// 							break;
// 						case i.HOME:
// 							a = this.headers[0];
// 							break;
// 						case i.END:
// 							a = this.headers[s - 1]
// 					}
// 					a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
// 				}
// 			},
// 			_panelKeyDown: function (t) {
// 				t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
// 			},
// 			refresh: function () {
// 				var t = this.options;
// 				this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
// 			},
// 			_processPanels: function () {
// 				this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
// 			},
// 			_refresh: function () {
// 				var t, i = this.options,
// 					s = i.heightStyle,
// 					n = this.element.parent();
// 				this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
// 					var t = e(this),
// 						i = t.uniqueId().attr("id"),
// 						s = t.next(),
// 						n = s.uniqueId().attr("id");
// 					t.attr("aria-controls", n), s.attr("aria-labelledby", i)
// 				}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
// 					"aria-selected": "false",
// 					"aria-expanded": "false",
// 					tabIndex: -1
// 				}).next().attr({
// 					"aria-hidden": "true"
// 				}).hide(), this.active.length ? this.active.attr({
// 					"aria-selected": "true",
// 					"aria-expanded": "true",
// 					tabIndex: 0
// 				}).next().attr({
// 					"aria-hidden": "false"
// 				}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
// 					var i = e(this),
// 						s = i.css("position");
// 					"absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
// 				}), this.headers.each(function () {
// 					t -= e(this).outerHeight(!0)
// 				}), this.headers.next().each(function () {
// 					e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
// 				}).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
// 					t = Math.max(t, e(this).css("height", "").height())
// 				}).height(t))
// 			},
// 			_activate: function (t) {
// 				var i = this._findActive(t)[0];
// 				i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
// 					target: i,
// 					currentTarget: i,
// 					preventDefault: e.noop
// 				}))
// 			},
// 			_findActive: function (t) {
// 				return "number" == typeof t ? this.headers.eq(t) : e()
// 			},
// 			_setupEvents: function (t) {
// 				var i = {
// 					keydown: "_keydown"
// 				};
// 				t && e.each(t.split(" "), function (e, t) {
// 					i[t] = "_eventHandler"
// 				}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
// 					keydown: "_panelKeyDown"
// 				}), this._hoverable(this.headers), this._focusable(this.headers)
// 			},
// 			_eventHandler: function (t) {
// 				var i = this.options,
// 					s = this.active,
// 					n = e(t.currentTarget),
// 					a = n[0] === s[0],
// 					o = a && i.collapsible,
// 					r = o ? e() : n.next(),
// 					h = s.next(),
// 					l = {
// 						oldHeader: s,
// 						oldPanel: h,
// 						newHeader: o ? e() : n,
// 						newPanel: r
// 					};
// 				t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
// 			},
// 			_toggle: function (t) {
// 				var i = t.newPanel,
// 					s = this.prevShow.length ? this.prevShow : t.oldPanel;
// 				this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
// 					"aria-hidden": "true"
// 				}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({
// 					tabIndex: -1,
// 					"aria-expanded": "false"
// 				}) : i.length && this.headers.filter(function () {
// 					return 0 === e(this).attr("tabIndex")
// 				}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
// 					"aria-selected": "true",
// 					tabIndex: 0,
// 					"aria-expanded": "true"
// 				})
// 			},
// 			_animate: function (e, t, i) {
// 				var s, n, a, o = this,
// 					r = 0,
// 					h = e.length && (!t.length || e.index() < t.index()),
// 					l = this.options.animate || {},
// 					u = h && l.down || l,
// 					d = function () {
// 						o._toggleComplete(i)
// 					};
// 				return "number" == typeof u && (a = u), "string" == typeof u && (n = u), n = n || u.easing || l.easing, a = a || u.duration || l.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, {
// 					duration: a,
// 					easing: n,
// 					step: function (e, t) {
// 						t.now = Math.round(e)
// 					}
// 				}), e.hide().animate(this.showProps, {
// 					duration: a,
// 					easing: n,
// 					complete: d,
// 					step: function (e, i) {
// 						i.now = Math.round(e), "height" !== i.prop ? r += i.now : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0)
// 					}
// 				}), void 0) : t.animate(this.hideProps, a, n, d) : e.animate(this.showProps, a, n, d)
// 			},
// 			_toggleComplete: function (e) {
// 				var t = e.oldPanel;
// 				t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
// 			}
// 		}), e.widget("ui.menu", {
// 			version: "1.11.1",
// 			defaultElement: "<ul>",
// 			delay: 300,
// 			options: {
// 				icons: {
// 					submenu: "ui-icon-carat-1-e"
// 				},
// 				items: "> *",
// 				menus: "ul",
// 				position: {
// 					my: "left-1 top",
// 					at: "right top"
// 				},
// 				role: "menu",
// 				blur: null,
// 				focus: null,
// 				select: null
// 			},
// 			_create: function () {
// 				this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
// 					role: this.options.role,
// 					tabIndex: 0
// 				}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
// 					"mousedown .ui-menu-item": function (e) {
// 						e.preventDefault()
// 					},
// 					"click .ui-menu-item": function (t) {
// 						var i = e(t.target);
// 						!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
// 					},
// 					"mouseenter .ui-menu-item": function (t) {
// 						var i = e(t.currentTarget);
// 						i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
// 					},
// 					mouseleave: "collapseAll",
// 					"mouseleave .ui-menu": "collapseAll",
// 					focus: function (e, t) {
// 						var i = this.active || this.element.find(this.options.items).eq(0);
// 						t || this.focus(e, i)
// 					},
// 					blur: function (t) {
// 						this._delay(function () {
// 							e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
// 						})
// 					},
// 					keydown: "_keydown"
// 				}), this.refresh(), this._on(this.document, {
// 					click: function (e) {
// 						this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
// 					}
// 				})
// 			},
// 			_destroy: function () {
// 				this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
// 					var t = e(this);
// 					t.data("ui-menu-submenu-carat") && t.remove()
// 				}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
// 			},
// 			_keydown: function (t) {
// 				function i(e) {
// 					return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
// 				}
// 				var s, n, a, o, r, h = !0;
// 				switch (t.keyCode) {
// 					case e.ui.keyCode.PAGE_UP:
// 						this.previousPage(t);
// 						break;
// 					case e.ui.keyCode.PAGE_DOWN:
// 						this.nextPage(t);
// 						break;
// 					case e.ui.keyCode.HOME:
// 						this._move("first", "first", t);
// 						break;
// 					case e.ui.keyCode.END:
// 						this._move("last", "last", t);
// 						break;
// 					case e.ui.keyCode.UP:
// 						this.previous(t);
// 						break;
// 					case e.ui.keyCode.DOWN:
// 						this.next(t);
// 						break;
// 					case e.ui.keyCode.LEFT:
// 						this.collapse(t);
// 						break;
// 					case e.ui.keyCode.RIGHT:
// 						this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
// 						break;
// 					case e.ui.keyCode.ENTER:
// 					case e.ui.keyCode.SPACE:
// 						this._activate(t);
// 						break;
// 					case e.ui.keyCode.ESCAPE:
// 						this.collapse(t);
// 						break;
// 					default:
// 						h = !1, n = this.previousFilter || "", a = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.find(this.options.items).filter(function () {
// 							return r.test(e(this).text())
// 						}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(t.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.find(this.options.items).filter(function () {
// 							return r.test(e(this).text())
// 						})), s.length ? (this.focus(t, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
// 							delete this.previousFilter
// 						}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
// 				}
// 				h && t.preventDefault()
// 			},
// 			_activate: function (e) {
// 				this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
// 			},
// 			refresh: function () {
// 				var t, i, s = this,
// 					n = this.options.icons.submenu,
// 					a = this.element.find(this.options.menus);
// 				this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
// 					role: this.options.role,
// 					"aria-hidden": "true",
// 					"aria-expanded": "false"
// 				}).each(function () {
// 					var t = e(this),
// 						i = t.parent(),
// 						s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
// 					i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
// 				}), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
// 					var t = e(this);
// 					s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
// 				}), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
// 					tabIndex: -1,
// 					role: this._itemRole()
// 				}), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
// 			},
// 			_itemRole: function () {
// 				return {
// 					menu: "menuitem",
// 					listbox: "option"
// 				} [this.options.role]
// 			},
// 			_setOption: function (e, t) {
// 				"icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
// 			},
// 			focus: function (e, t) {
// 				var i, s;
// 				this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
// 					this._close()
// 				}, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
// 					item: t
// 				})
// 			},
// 			_scrollIntoView: function (t) {
// 				var i, s, n, a, o, r;
// 				this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
// 			},
// 			blur: function (e, t) {
// 				t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
// 					item: this.active
// 				}))
// 			},
// 			_startOpening: function (e) {
// 				clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
// 					this._close(), this._open(e)
// 				}, this.delay))
// 			},
// 			_open: function (t) {
// 				var i = e.extend({
// 					of: this.active
// 				}, this.options.position);
// 				clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
// 			},
// 			collapseAll: function (t, i) {
// 				clearTimeout(this.timer), this.timer = this._delay(function () {
// 					var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
// 					s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
// 				}, this.delay)
// 			},
// 			_close: function (e) {
// 				e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
// 			},
// 			_closeOnDocumentClick: function (t) {
// 				return !e(t.target).closest(".ui-menu").length
// 			},
// 			_isDivider: function (e) {
// 				return !/[^\-\u2014\u2013\s]/.test(e.text())
// 			},
// 			collapse: function (e) {
// 				var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
// 				t && t.length && (this._close(), this.focus(e, t))
// 			},
// 			expand: function (e) {
// 				var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
// 				t && t.length && (this._open(t.parent()), this._delay(function () {
// 					this.focus(e, t)
// 				}))
// 			},
// 			next: function (e) {
// 				this._move("next", "first", e)
// 			},
// 			previous: function (e) {
// 				this._move("prev", "last", e)
// 			},
// 			isFirstItem: function () {
// 				return this.active && !this.active.prevAll(".ui-menu-item").length
// 			},
// 			isLastItem: function () {
// 				return this.active && !this.active.nextAll(".ui-menu-item").length
// 			},
// 			_move: function (e, t, i) {
// 				var s;
// 				this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
// 			},
// 			nextPage: function (t) {
// 				var i, s, n;
// 				return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
// 					return i = e(this), 0 > i.offset().top - s - n
// 				}), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
// 			},
// 			previousPage: function (t) {
// 				var i, s, n;
// 				return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
// 					return i = e(this), i.offset().top - s + n > 0
// 				}), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
// 			},
// 			_hasScroll: function () {
// 				return this.element.outerHeight() < this.element.prop("scrollHeight")
// 			},
// 			select: function (t) {
// 				this.active = this.active || e(t.target).closest(".ui-menu-item");
// 				var i = {
// 					item: this.active
// 				};
// 				this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
// 			}
// 		}), e.widget("ui.autocomplete", {
// 			version: "1.11.1",
// 			defaultElement: "<input>",
// 			options: {
// 				appendTo: null,
// 				autoFocus: !1,
// 				delay: 300,
// 				minLength: 1,
// 				position: {
// 					my: "left top",
// 					at: "left bottom",
// 					collision: "none"
// 				},
// 				source: null,
// 				change: null,
// 				close: null,
// 				focus: null,
// 				open: null,
// 				response: null,
// 				search: null,
// 				select: null
// 			},
// 			requestIndex: 0,
// 			pending: 0,
// 			_create: function () {
// 				var t, i, s, n = this.element[0].nodeName.toLowerCase(),
// 					a = "textarea" === n,
// 					o = "input" === n;
// 				this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
// 					keydown: function (n) {
// 						if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
// 						t = !1, s = !1, i = !1;
// 						var a = e.ui.keyCode;
// 						switch (n.keyCode) {
// 							case a.PAGE_UP:
// 								t = !0, this._move("previousPage", n);
// 								break;
// 							case a.PAGE_DOWN:
// 								t = !0, this._move("nextPage", n);
// 								break;
// 							case a.UP:
// 								t = !0, this._keyEvent("previous", n);
// 								break;
// 							case a.DOWN:
// 								t = !0, this._keyEvent("next", n);
// 								break;
// 							case a.ENTER:
// 								this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
// 								break;
// 							case a.TAB:
// 								this.menu.active && this.menu.select(n);
// 								break;
// 							case a.ESCAPE:
// 								this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
// 								break;
// 							default:
// 								i = !0, this._searchTimeout(n)
// 						}
// 					},
// 					keypress: function (s) {
// 						if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
// 						if (!i) {
// 							var n = e.ui.keyCode;
// 							switch (s.keyCode) {
// 								case n.PAGE_UP:
// 									this._move("previousPage", s);
// 									break;
// 								case n.PAGE_DOWN:
// 									this._move("nextPage", s);
// 									break;
// 								case n.UP:
// 									this._keyEvent("previous", s);
// 									break;
// 								case n.DOWN:
// 									this._keyEvent("next", s)
// 							}
// 						}
// 					},
// 					input: function (e) {
// 						return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
// 					},
// 					focus: function () {
// 						this.selectedItem = null, this.previous = this._value()
// 					},
// 					blur: function (e) {
// 						return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
// 					}
// 				}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
// 					role: null
// 				}).hide().menu("instance"), this._on(this.menu.element, {
// 					mousedown: function (t) {
// 						t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
// 							delete this.cancelBlur
// 						});
// 						var i = this.menu.element[0];
// 						e(t.target).closest(".ui-menu-item").length || this._delay(function () {
// 							var t = this;
// 							this.document.one("mousedown", function (s) {
// 								s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
// 							})
// 						})
// 					},
// 					menufocus: function (t, i) {
// 						var s, n;
// 						return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
// 							e(t.target).trigger(t.originalEvent)
// 						}), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
// 							item: n
// 						}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
// 					},
// 					menuselect: function (e, t) {
// 						var i = t.item.data("ui-autocomplete-item"),
// 							s = this.previous;
// 						this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
// 							this.previous = s, this.selectedItem = i
// 						})), !1 !== this._trigger("select", e, {
// 							item: i
// 						}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
// 					}
// 				}), this.liveRegion = e("<span>", {
// 					role: "status",
// 					"aria-live": "assertive",
// 					"aria-relevant": "additions"
// 				}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
// 					beforeunload: function () {
// 						this.element.removeAttr("autocomplete")
// 					}
// 				})
// 			},
// 			_destroy: function () {
// 				clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
// 			},
// 			_setOption: function (e, t) {
// 				this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
// 			},
// 			_appendTo: function () {
// 				var t = this.options.appendTo;
// 				return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
// 			},
// 			_initSource: function () {
// 				var t, i, s = this;
// 				e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
// 					s(e.ui.autocomplete.filter(t, i.term))
// 				}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
// 					s.xhr && s.xhr.abort(), s.xhr = e.ajax({
// 						url: i,
// 						data: t,
// 						dataType: "json",
// 						success: function (e) {
// 							n(e)
// 						},
// 						error: function () {
// 							n([])
// 						}
// 					})
// 				}) : this.source = this.options.source
// 			},
// 			_searchTimeout: function (e) {
// 				clearTimeout(this.searching), this.searching = this._delay(function () {
// 					var t = this.term === this._value(),
// 						i = this.menu.element.is(":visible"),
// 						s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
// 					(!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
// 				}, this.options.delay)
// 			},
// 			search: function (e, t) {
// 				return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
// 			},
// 			_search: function (e) {
// 				this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
// 					term: e
// 				}, this._response())
// 			},
// 			_response: function () {
// 				var t = ++this.requestIndex;
// 				return e.proxy(function (e) {
// 					t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
// 				}, this)
// 			},
// 			__response: function (e) {
// 				e && (e = this._normalize(e)), this._trigger("response", null, {
// 					content: e
// 				}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
// 			},
// 			close: function (e) {
// 				this.cancelSearch = !0, this._close(e)
// 			},
// 			_close: function (e) {
// 				this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
// 			},
// 			_change: function (e) {
// 				this.previous !== this._value() && this._trigger("change", e, {
// 					item: this.selectedItem
// 				})
// 			},
// 			_normalize: function (t) {
// 				return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
// 					return "string" == typeof t ? {
// 						label: t,
// 						value: t
// 					} : e.extend({}, t, {
// 						label: t.label || t.value,
// 						value: t.value || t.label
// 					})
// 				})
// 			},
// 			_suggest: function (t) {
// 				var i = this.menu.element.empty();
// 				this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
// 					of: this.element
// 				}, this.options.position)), this.options.autoFocus && this.menu.next()
// 			},
// 			_resizeMenu: function () {
// 				var e = this.menu.element;
// 				e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
// 			},
// 			_renderMenu: function (t, i) {
// 				var s = this;
// 				e.each(i, function (e, i) {
// 					s._renderItemData(t, i)
// 				})
// 			},
// 			_renderItemData: function (e, t) {
// 				return this._renderItem(e, t).data("ui-autocomplete-item", t)
// 			},
// 			_renderItem: function (t, i) {
// 				return e("<li>").text(i.label).appendTo(t)
// 			},
// 			_move: function (e, t) {
// 				return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
// 			},
// 			widget: function () {
// 				return this.menu.element
// 			},
// 			_value: function () {
// 				return this.valueMethod.apply(this.element, arguments)
// 			},
// 			_keyEvent: function (e, t) {
// 				(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
// 			}
// 		}), e.extend(e.ui.autocomplete, {
// 			escapeRegex: function (e) {
// 				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
// 			},
// 			filter: function (t, i) {
// 				var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
// 				return e.grep(t, function (e) {
// 					return s.test(e.label || e.value || e)
// 				})
// 			}
// 		}), e.widget("ui.autocomplete", e.ui.autocomplete, {
// 			options: {
// 				messages: {
// 					noResults: "No search results.",
// 					results: function (e) {
// 						return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
// 					}
// 				}
// 			},
// 			__response: function (t) {
// 				var i;
// 				this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
// 			}
// 		}), e.ui.autocomplete;
// 	var c, p = "ui-button ui-widget ui-state-default ui-corner-all",
// 		f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
// 		m = function () {
// 			var t = e(this);
// 			setTimeout(function () {
// 				t.find(":ui-button").button("refresh")
// 			}, 1)
// 		},
// 		g = function (t) {
// 			var i = t.name,
// 				s = t.form,
// 				n = e([]);
// 			return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
// 				return !this.form
// 			})), n
// 		};
// 	e.widget("ui.button", {
// 		version: "1.11.1",
// 		defaultElement: "<button>",
// 		options: {
// 			disabled: null,
// 			text: !0,
// 			label: null,
// 			icons: {
// 				primary: null,
// 				secondary: null
// 			}
// 		},
// 		_create: function () {
// 			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
// 			var t = this,
// 				i = this.options,
// 				s = "checkbox" === this.type || "radio" === this.type,
// 				n = s ? "" : "ui-state-active";
// 			null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
// 				i.disabled || this === c && e(this).addClass("ui-state-active")
// 			}).bind("mouseleave" + this.eventNamespace, function () {
// 				i.disabled || e(this).removeClass(n)
// 			}).bind("click" + this.eventNamespace, function (e) {
// 				i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
// 			}), this._on({
// 				focus: function () {
// 					this.buttonElement.addClass("ui-state-focus")
// 				},
// 				blur: function () {
// 					this.buttonElement.removeClass("ui-state-focus")
// 				}
// 			}), s && this.element.bind("change" + this.eventNamespace, function () {
// 				t.refresh()
// 			}), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
// 				return i.disabled ? !1 : void 0
// 			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
// 				if (i.disabled) return !1;
// 				e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
// 				var s = t.element[0];
// 				g(s).not(s).map(function () {
// 					return e(this).button("widget")[0]
// 				}).removeClass("ui-state-active").attr("aria-pressed", "false")
// 			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
// 				return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
// 					c = null
// 				}), void 0)
// 			}).bind("mouseup" + this.eventNamespace, function () {
// 				return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
// 			}).bind("keydown" + this.eventNamespace, function (t) {
// 				return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
// 			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
// 				e(this).removeClass("ui-state-active")
// 			}), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
// 				t.keyCode === e.ui.keyCode.SPACE && e(this).click()
// 			})), this._setOption("disabled", i.disabled), this._resetButton()
// 		},
// 		_determineButtonType: function () {
// 			var e, t, i;
// 			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
// 		},
// 		widget: function () {
// 			return this.buttonElement
// 		},
// 		_destroy: function () {
// 			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
// 		},
// 		_setOption: function (e, t) {
// 			return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
// 		},
// 		refresh: function () {
// 			var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
// 			t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
// 				e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
// 			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
// 		},
// 		_resetButton: function () {
// 			if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
// 			var t = this.buttonElement.removeClass(f),
// 				i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
// 				s = this.options.icons,
// 				n = s.primary && s.secondary,
// 				a = [];
// 			s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
// 		}
// 	}), e.widget("ui.buttonset", {
// 		version: "1.11.1",
// 		options: {
// 			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
// 		},
// 		_create: function () {
// 			this.element.addClass("ui-buttonset")
// 		},
// 		_init: function () {
// 			this.refresh()
// 		},
// 		_setOption: function (e, t) {
// 			"disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
// 		},
// 		refresh: function () {
// 			var t = "rtl" === this.element.css("direction"),
// 				i = this.element.find(this.options.items),
// 				s = i.filter(":ui-button");
// 			i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
// 				return e(this).button("widget")[0]
// 			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
// 		},
// 		_destroy: function () {
// 			this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
// 				return e(this).button("widget")[0]
// 			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
// 		}
// 	}), e.ui.button, e.extend(e.ui, {
// 		datepicker: {
// 			version: "1.11.1"
// 		}
// 	});
// 	var v;
// 	e.extend(n.prototype, {
// 		markerClassName: "hasDatepicker",
// 		maxRows: 4,
// 		_widgetDatepicker: function () {
// 			return this.dpDiv
// 		},
// 		setDefaults: function (e) {
// 			return r(this._defaults, e || {}), this
// 		},
// 		_attachDatepicker: function (t, i) {
// 			var s, n, a;
// 			s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
// 		},
// 		_newInst: function (t, i) {
// 			var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
// 			return {
// 				id: s,
// 				input: t,
// 				selectedDay: 0,
// 				selectedMonth: 0,
// 				selectedYear: 0,
// 				drawMonth: 0,
// 				drawYear: 0,
// 				inline: i,
// 				dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
// 			}
// 		},
// 		_connectDatepicker: function (t, i) {
// 			var s = e(t);
// 			i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
// 		},
// 		_attachments: function (t, i) {
// 			var s, n, a, o = this._get(i, "appendText"),
// 				r = this._get(i, "isRTL");
// 			i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
// 				src: a,
// 				alt: n,
// 				title: n
// 			}) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
// 				src: a,
// 				alt: n,
// 				title: n
// 			}) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
// 				return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
// 			}))
// 		},
// 		_autoSize: function (e) {
// 			if (this._get(e, "autoSize") && !e.inline) {
// 				var t, i, s, n, a = new Date(2009, 11, 20),
// 					o = this._get(e, "dateFormat");
// 				o.match(/[DM]/) && (t = function (e) {
// 					for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n);
// 					return s
// 				}, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
// 			}
// 		},
// 		_inlineDatepicker: function (t, i) {
// 			var s = e(t);
// 			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
// 		},
// 		_dialogDatepicker: function (t, i, s, n, a) {
// 			var o, h, l, u, d, c = this._dialogInst;
// 			return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
// 		},
// 		_destroyDatepicker: function (t) {
// 			var i, s = e(t),
// 				n = e.data(t, "datepicker");
// 			s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
// 		},
// 		_enableDatepicker: function (t) {
// 			var i, s, n = e(t),
// 				a = e.data(t, "datepicker");
// 			n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
// 				this.disabled = !1
// 			}).end().filter("img").css({
// 				opacity: "1.0",
// 				cursor: ""
// 			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
// 				return e === t ? null : e
// 			}))
// 		},
// 		_disableDatepicker: function (t) {
// 			var i, s, n = e(t),
// 				a = e.data(t, "datepicker");
// 			n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
// 				this.disabled = !0
// 			}).end().filter("img").css({
// 				opacity: "0.5",
// 				cursor: "default"
// 			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
// 				return e === t ? null : e
// 			}), this._disabledInputs[this._disabledInputs.length] = t)
// 		},
// 		_isDisabledDatepicker: function (e) {
// 			if (!e) return !1;
// 			for (var t = 0; this._disabledInputs.length > t; t++)
// 				if (this._disabledInputs[t] === e) return !0;
// 			return !1
// 		},
// 		_getInst: function (t) {
// 			try {
// 				return e.data(t, "datepicker")
// 			} catch (i) {
// 				throw "Missing instance data for this datepicker"
// 			}
// 		},
// 		_optionDatepicker: function (t, i, s) {
// 			var n, a, o, h, l = this._getInst(t);
// 			return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
// 		},
// 		_changeDatepicker: function (e, t, i) {
// 			this._optionDatepicker(e, t, i)
// 		},
// 		_refreshDatepicker: function (e) {
// 			var t = this._getInst(e);
// 			t && this._updateDatepicker(t)
// 		},
// 		_setDateDatepicker: function (e, t) {
// 			var i = this._getInst(e);
// 			i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
// 		},
// 		_getDateDatepicker: function (e, t) {
// 			var i = this._getInst(e);
// 			return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
// 		},
// 		_doKeyDown: function (t) {
// 			var i, s, n, a = e.datepicker._getInst(t.target),
// 				o = !0,
// 				r = a.dpDiv.is(".ui-datepicker-rtl");
// 			if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
// 				case 9:
// 					e.datepicker._hideDatepicker(), o = !1;
// 					break;
// 				case 13:
// 					return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
// 				case 27:
// 					e.datepicker._hideDatepicker();
// 					break;
// 				case 33:
// 					e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
// 					break;
// 				case 34:
// 					e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
// 					break;
// 				case 35:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
// 					break;
// 				case 36:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
// 					break;
// 				case 37:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
// 					break;
// 				case 38:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
// 					break;
// 				case 39:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
// 					break;
// 				case 40:
// 					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
// 					break;
// 				default:
// 					o = !1
// 			} else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
// 			o && (t.preventDefault(), t.stopPropagation())
// 		},
// 		_doKeyPress: function (t) {
// 			var i, s, n = e.datepicker._getInst(t.target);
// 			return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
// 		},
// 		_doKeyUp: function (t) {
// 			var i, s = e.datepicker._getInst(t.target);
// 			if (s.input.val() !== s.lastVal) try {
// 				i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
// 			} catch (n) {}
// 			return !0
// 		},
// 		_showDatepicker: function (t) {
// 			if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
// 				var i, n, a, o, h, l, u;
// 				i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
// 					return o |= "fixed" === e(this).css("position"), !o
// 				}), h = {
// 					left: e.datepicker._pos[0],
// 					top: e.datepicker._pos[1]
// 				}, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
// 					position: "absolute",
// 					display: "block",
// 					top: "-1000px"
// 				}), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
// 					position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
// 					display: "none",
// 					left: h.left + "px",
// 					top: h.top + "px"
// 				}), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
// 			}
// 		},
// 		_updateDatepicker: function (t) {
// 			this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
// 			var i, s = this._getNumberOfMonths(t),
// 				n = s[1],
// 				a = 17,
// 				r = t.dpDiv.find("." + this._dayOverClass + " a");
// 			r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
// 				i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
// 			}, 0))
// 		},
// 		_shouldFocusInput: function (e) {
// 			return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
// 		},
// 		_checkOffset: function (t, i, s) {
// 			var n = t.dpDiv.outerWidth(),
// 				a = t.dpDiv.outerHeight(),
// 				o = t.input ? t.input.outerWidth() : 0,
// 				r = t.input ? t.input.outerHeight() : 0,
// 				h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
// 				l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
// 			return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
// 		},
// 		_findPos: function (t) {
// 			for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
// 			return i = e(t).offset(), [i.left, i.top]
// 		},
// 		_hideDatepicker: function (t) {
// 			var i, s, n, a, o = this._curInst;
// 			!o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
// 				e.datepicker._tidyDialog(o)
// 			}, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
// 				position: "absolute",
// 				left: "0",
// 				top: "-100px"
// 			}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
// 		},
// 		_tidyDialog: function (e) {
// 			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
// 		},
// 		_checkExternalClick: function (t) {
// 			if (e.datepicker._curInst) {
// 				var i = e(t.target),
// 					s = e.datepicker._getInst(i[0]);
// 				(i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
// 			}
// 		},
// 		_adjustDate: function (t, i, s) {
// 			var n = e(t),
// 				a = this._getInst(n[0]);
// 			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
// 		},
// 		_gotoToday: function (t) {
// 			var i, s = e(t),
// 				n = this._getInst(s[0]);
// 			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
// 		},
// 		_selectMonthYear: function (t, i, s) {
// 			var n = e(t),
// 				a = this._getInst(n[0]);
// 			a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
// 		},
// 		_selectDay: function (t, i, s, n) {
// 			var a, o = e(t);
// 			e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
// 		},
// 		_clearDate: function (t) {
// 			var i = e(t);
// 			this._selectDate(i, "")
// 		},
// 		_selectDate: function (t, i) {
// 			var s, n = e(t),
// 				a = this._getInst(n[0]);
// 			i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
// 		},
// 		_updateAlternate: function (t) {
// 			var i, s, n, a = this._get(t, "altField");
// 			a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
// 				e(this).val(n)
// 			}))
// 		},
// 		noWeekends: function (e) {
// 			var t = e.getDay();
// 			return [t > 0 && 6 > t, ""]
// 		},
// 		iso8601Week: function (e) {
// 			var t, i = new Date(e.getTime());
// 			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
// 		},
// 		parseDate: function (t, i, s) {
// 			if (null == t || null == i) throw "Invalid arguments";
// 			if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
// 			var n, a, o, r, h = 0,
// 				l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
// 				u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
// 				d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
// 				c = (s ? s.dayNames : null) || this._defaults.dayNames,
// 				p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
// 				f = (s ? s.monthNames : null) || this._defaults.monthNames,
// 				m = -1,
// 				g = -1,
// 				v = -1,
// 				y = -1,
// 				b = !1,
// 				_ = function (e) {
// 					var i = t.length > n + 1 && t.charAt(n + 1) === e;
// 					return i && n++, i
// 				},
// 				x = function (e) {
// 					var t = _(e),
// 						s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
// 						n = "y" === e ? s : 1,
// 						a = RegExp("^\\d{" + n + "," + s + "}"),
// 						o = i.substring(h).match(a);
// 					if (!o) throw "Missing number at position " + h;
// 					return h += o[0].length, parseInt(o[0], 10)
// 				},
// 				w = function (t, s, n) {
// 					var a = -1,
// 						o = e.map(_(t) ? n : s, function (e, t) {
// 							return [
// 								[t, e]
// 							]
// 						}).sort(function (e, t) {
// 							return -(e[1].length - t[1].length)
// 						});
// 					if (e.each(o, function (e, t) {
// 							var s = t[1];
// 							return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0
// 						}), -1 !== a) return a + 1;
// 					throw "Unknown name at position " + h
// 				},
// 				k = function () {
// 					if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
// 					h++
// 				};
// 			for (n = 0; t.length > n; n++)
// 				if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;
// 				else switch (t.charAt(n)) {
// 					case "d":
// 						v = x("d");
// 						break;
// 					case "D":
// 						w("D", d, c);
// 						break;
// 					case "o":
// 						y = x("o");
// 						break;
// 					case "m":
// 						g = x("m");
// 						break;
// 					case "M":
// 						g = w("M", p, f);
// 						break;
// 					case "y":
// 						m = x("y");
// 						break;
// 					case "@":
// 						r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
// 						break;
// 					case "!":
// 						r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
// 						break;
// 					case "'":
// 						_("'") ? k() : b = !0;
// 						break;
// 					default:
// 						k()
// 				}
// 			if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
// 			if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
// 				for (g = 1, v = y;;) {
// 					if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
// 					g++, v -= a
// 				}
// 			if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
// 			return r
// 		},
// 		ATOM: "yy-mm-dd",
// 		COOKIE: "D, dd M yy",
// 		ISO_8601: "yy-mm-dd",
// 		RFC_822: "D, d M y",
// 		RFC_850: "DD, dd-M-y",
// 		RFC_1036: "D, d M y",
// 		RFC_1123: "D, d M yy",
// 		RFC_2822: "D, d M yy",
// 		RSS: "D, d M y",
// 		TICKS: "!",
// 		TIMESTAMP: "@",
// 		W3C: "yy-mm-dd",
// 		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
// 		formatDate: function (e, t, i) {
// 			if (!t) return "";
// 			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
// 				a = (i ? i.dayNames : null) || this._defaults.dayNames,
// 				o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
// 				r = (i ? i.monthNames : null) || this._defaults.monthNames,
// 				h = function (t) {
// 					var i = e.length > s + 1 && e.charAt(s + 1) === t;
// 					return i && s++, i
// 				},
// 				l = function (e, t, i) {
// 					var s = "" + t;
// 					if (h(e))
// 						for (; i > s.length;) s = "0" + s;
// 					return s
// 				},
// 				u = function (e, t, i, s) {
// 					return h(e) ? s[t] : i[t]
// 				},
// 				d = "",
// 				c = !1;
// 			if (t)
// 				for (s = 0; e.length > s; s++)
// 					if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
// 					else switch (e.charAt(s)) {
// 						case "d":
// 							d += l("d", t.getDate(), 2);
// 							break;
// 						case "D":
// 							d += u("D", t.getDay(), n, a);
// 							break;
// 						case "o":
// 							d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
// 							break;
// 						case "m":
// 							d += l("m", t.getMonth() + 1, 2);
// 							break;
// 						case "M":
// 							d += u("M", t.getMonth(), o, r);
// 							break;
// 						case "y":
// 							d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
// 							break;
// 						case "@":
// 							d += t.getTime();
// 							break;
// 						case "!":
// 							d += 1e4 * t.getTime() + this._ticksTo1970;
// 							break;
// 						case "'":
// 							h("'") ? d += "'" : c = !0;
// 							break;
// 						default:
// 							d += e.charAt(s)
// 					}
// 			return d
// 		},
// 		_possibleChars: function (e) {
// 			var t, i = "",
// 				s = !1,
// 				n = function (i) {
// 					var s = e.length > t + 1 && e.charAt(t + 1) === i;
// 					return s && t++, s
// 				};
// 			for (t = 0; e.length > t; t++)
// 				if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
// 				else switch (e.charAt(t)) {
// 					case "d":
// 					case "m":
// 					case "y":
// 					case "@":
// 						i += "0123456789";
// 						break;
// 					case "D":
// 					case "M":
// 						return null;
// 					case "'":
// 						n("'") ? i += "'" : s = !0;
// 						break;
// 					default:
// 						i += e.charAt(t)
// 				}
// 			return i
// 		},
// 		_get: function (e, t) {
// 			return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
// 		},
// 		_setDateFromField: function (e, t) {
// 			if (e.input.val() !== e.lastVal) {
// 				var i = this._get(e, "dateFormat"),
// 					s = e.lastVal = e.input ? e.input.val() : null,
// 					n = this._getDefaultDate(e),
// 					a = n,
// 					o = this._getFormatConfig(e);
// 				try {
// 					a = this.parseDate(i, s, o) || n
// 				} catch (r) {
// 					s = t ? "" : s
// 				}
// 				e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
// 			}
// 		},
// 		_getDefaultDate: function (e) {
// 			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
// 		},
// 		_determineDate: function (t, i, s) {
// 			var n = function (e) {
// 					var t = new Date;
// 					return t.setDate(t.getDate() + e), t
// 				},
// 				a = function (i) {
// 					try {
// 						return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
// 					} catch (s) {}
// 					for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
// 						switch (l[2] || "d") {
// 							case "d":
// 							case "D":
// 								r += parseInt(l[1], 10);
// 								break;
// 							case "w":
// 							case "W":
// 								r += 7 * parseInt(l[1], 10);
// 								break;
// 							case "m":
// 							case "M":
// 								o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
// 								break;
// 							case "y":
// 							case "Y":
// 								a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
// 						}
// 						l = h.exec(i)
// 					}
// 					return new Date(a, o, r)
// 				},
// 				o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
// 			return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
// 		},
// 		_daylightSavingAdjust: function (e) {
// 			return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
// 		},
// 		_setDate: function (e, t, i) {
// 			var s = !t,
// 				n = e.selectedMonth,
// 				a = e.selectedYear,
// 				o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
// 			e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
// 		},
// 		_getDate: function (e) {
// 			var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
// 			return t
// 		},
// 		_attachHandlers: function (t) {
// 			var i = this._get(t, "stepMonths"),
// 				s = "#" + t.id.replace(/\\\\/g, "\\");
// 			t.dpDiv.find("[data-handler]").map(function () {
// 				var t = {
// 					prev: function () {
// 						e.datepicker._adjustDate(s, -i, "M")
// 					},
// 					next: function () {
// 						e.datepicker._adjustDate(s, +i, "M")
// 					},
// 					hide: function () {
// 						e.datepicker._hideDatepicker()
// 					},
// 					today: function () {
// 						e.datepicker._gotoToday(s)
// 					},
// 					selectDay: function () {
// 						return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
// 					},
// 					selectMonth: function () {
// 						return e.datepicker._selectMonthYear(s, this, "M"), !1
// 					},
// 					selectYear: function () {
// 						return e.datepicker._selectMonthYear(s, this, "Y"), !1
// 					}
// 				};
// 				e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
// 			})
// 		},
// 		_generateHTML: function (e) {
// 			var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, N, C, A, I, P, z, H, F, E, j, O, W, L = new Date,
// 				R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
// 				Y = this._get(e, "isRTL"),
// 				B = this._get(e, "showButtonPanel"),
// 				J = this._get(e, "hideIfNoPrevNext"),
// 				q = this._get(e, "navigationAsDateFormat"),
// 				K = this._getNumberOfMonths(e),
// 				V = this._get(e, "showCurrentAtPos"),
// 				U = this._get(e, "stepMonths"),
// 				Q = 1 !== K[0] || 1 !== K[1],
// 				G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
// 				X = this._getMinMaxDate(e, "min"),
// 				$ = this._getMinMaxDate(e, "max"),
// 				Z = e.drawMonth - V,
// 				et = e.drawYear;
// 			if (0 > Z && (Z += 12, et--), $)
// 				for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
// 			for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
// 				for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
// 					if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
// 						if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
// 							case 0:
// 								M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
// 								break;
// 							case K[1] - 1:
// 								M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
// 								break;
// 							default:
// 								M += " ui-datepicker-group-middle", S = ""
// 						}
// 						M += "'>"
// 					}
// 					for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) C = (x + u) % 7, N += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
// 					for (M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), I = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, P = Math.ceil((I + A) / 7), z = Q ? this.maxRows > P ? this.maxRows : P : P, this.maxRows = z, H = this._daylightSavingAdjust(new Date(et, Z, 1 - I)), F = 0; z > F; F++) {
// 						for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) j = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], O = H.getMonth() !== Z, W = O && !y || !j[0] || X && X > H || $ && H > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + j[1] + (H.getTime() === G.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === G.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
// 						M += E + "</tr>"
// 					}
// 					Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
// 				}
// 				_ += k
// 			}
// 			return _ += l, e._keyEvent = !1, _
// 		},
// 		_generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
// 			var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
// 				v = this._get(e, "changeYear"),
// 				y = this._get(e, "showMonthAfterYear"),
// 				b = "<div class='ui-datepicker-title'>",
// 				_ = "";
// 			if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
// 			else {
// 				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
// 				_ += "</select>"
// 			}
// 			if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
// 				if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
// 				else {
// 					for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
// 							var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
// 							return isNaN(t) ? c : t
// 						}, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
// 					e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
// 				} return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
// 		},
// 		_adjustInstDate: function (e, t, i) {
// 			var s = e.drawYear + ("Y" === i ? t : 0),
// 				n = e.drawMonth + ("M" === i ? t : 0),
// 				a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
// 				o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
// 			e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
// 		},
// 		_restrictMinMax: function (e, t) {
// 			var i = this._getMinMaxDate(e, "min"),
// 				s = this._getMinMaxDate(e, "max"),
// 				n = i && i > t ? i : t;
// 			return s && n > s ? s : n
// 		},
// 		_notifyChange: function (e) {
// 			var t = this._get(e, "onChangeMonthYear");
// 			t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
// 		},
// 		_getNumberOfMonths: function (e) {
// 			var t = this._get(e, "numberOfMonths");
// 			return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
// 		},
// 		_getMinMaxDate: function (e, t) {
// 			return this._determineDate(e, this._get(e, t + "Date"), null)
// 		},
// 		_getDaysInMonth: function (e, t) {
// 			return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
// 		},
// 		_getFirstDayOfMonth: function (e, t) {
// 			return new Date(e, t, 1).getDay()
// 		},
// 		_canAdjustMonth: function (e, t, i, s) {
// 			var n = this._getNumberOfMonths(e),
// 				a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
// 			return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
// 		},
// 		_isInRange: function (e, t) {
// 			var i, s, n = this._getMinMaxDate(e, "min"),
// 				a = this._getMinMaxDate(e, "max"),
// 				o = null,
// 				r = null,
// 				h = this._get(e, "yearRange");
// 			return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
// 		},
// 		_getFormatConfig: function (e) {
// 			var t = this._get(e, "shortYearCutoff");
// 			return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
// 				shortYearCutoff: t,
// 				dayNamesShort: this._get(e, "dayNamesShort"),
// 				dayNames: this._get(e, "dayNames"),
// 				monthNamesShort: this._get(e, "monthNamesShort"),
// 				monthNames: this._get(e, "monthNames")
// 			}
// 		},
// 		_formatDate: function (e, t, i, s) {
// 			t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
// 			var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
// 			return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
// 		}
// 	}), e.fn.datepicker = function (t) {
// 		if (!this.length) return this;
// 		e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
// 		var i = Array.prototype.slice.call(arguments, 1);
// 		return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
// 			"string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
// 		}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
// 	}, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.1", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
// 		version: "1.11.1",
// 		widgetEventPrefix: "drag",
// 		options: {
// 			addClasses: !0,
// 			appendTo: "parent",
// 			axis: !1,
// 			connectToSortable: !1,
// 			containment: !1,
// 			cursor: "auto",
// 			cursorAt: !1,
// 			grid: !1,
// 			handle: !1,
// 			helper: "original",
// 			iframeFix: !1,
// 			opacity: !1,
// 			refreshPositions: !1,
// 			revert: !1,
// 			revertDuration: 500,
// 			scope: "default",
// 			scroll: !0,
// 			scrollSensitivity: 20,
// 			scrollSpeed: 20,
// 			snap: !1,
// 			snapMode: "both",
// 			snapTolerance: 20,
// 			stack: !1,
// 			zIndex: !1,
// 			drag: null,
// 			start: null,
// 			stop: null
// 		},
// 		_create: function () {
// 			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
// 		},
// 		_setOption: function (e, t) {
// 			this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
// 		},
// 		_destroy: function () {
// 			return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
// 		},
// 		_mouseCapture: function (t) {
// 			var i = this.document[0],
// 				s = this.options;
// 			try {
// 				i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
// 			} catch (n) {}
// 			return this.helper || s.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(s.iframeFix === !0 ? "iframe" : s.iframeFix).each(function () {
// 				e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
// 					width: this.offsetWidth + "px",
// 					height: this.offsetHeight + "px",
// 					position: "absolute",
// 					opacity: "0.001",
// 					zIndex: 1e3
// 				}).css(e(this).offset()).appendTo("body")
// 			}), !0) : !1)
// 		},
// 		_mouseStart: function (t) {
// 			var i = this.options;
// 			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
// 				top: this.offset.top - this.margins.top,
// 				left: this.offset.left - this.margins.left
// 			}, this.offset.scroll = !1, e.extend(this.offset, {
// 				click: {
// 					left: t.pageX - this.offset.left,
// 					top: t.pageY - this.offset.top
// 				},
// 				parent: this._getParentOffset(),
// 				relative: this._getRelativeOffset()
// 			}), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
// 		},
// 		_mouseDrag: function (t, i) {
// 			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
// 				var s = this._uiHash();
// 				if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
// 				this.position = s.position
// 			}
// 			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
// 		},
// 		_mouseStop: function (t) {
// 			var i = this,
// 				s = !1;
// 			return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
// 				i._trigger("stop", t) !== !1 && i._clear()
// 			}) : this._trigger("stop", t) !== !1 && this._clear(), !1
// 		},
// 		_mouseUp: function (t) {
// 			return e("div.ui-draggable-iframeFix").each(function () {
// 				this.parentNode.removeChild(this)
// 			}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
// 		},
// 		cancel: function () {
// 			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
// 		},
// 		_getHandle: function (t) {
// 			return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
// 		},
// 		_setHandleClassName: function () {
// 			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
// 		},
// 		_removeHandleClassName: function () {
// 			this.handleElement.removeClass("ui-draggable-handle")
// 		},
// 		_createHelper: function (t) {
// 			var i = this.options,
// 				s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
// 			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
// 		},
// 		_adjustOffsetFromHelper: function (t) {
// 			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
// 				left: +t[0],
// 				top: +t[1] || 0
// 			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
// 		},
// 		_isRootNode: function (e) {
// 			return /(html|body)/i.test(e.tagName) || e === this.document[0]
// 		},
// 		_getParentOffset: function () {
// 			var t = this.offsetParent.offset(),
// 				i = this.document[0];
// 			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
// 				top: 0,
// 				left: 0
// 			}), {
// 				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
// 				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
// 			}
// 		},
// 		_getRelativeOffset: function () {
// 			if ("relative" !== this.cssPosition) return {
// 				top: 0,
// 				left: 0
// 			};
// 			var e = this.element.position(),
// 				t = this._isRootNode(this.scrollParent[0]);
// 			return {
// 				top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
// 				left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
// 			}
// 		},
// 		_cacheMargins: function () {
// 			this.margins = {
// 				left: parseInt(this.element.css("marginLeft"), 10) || 0,
// 				top: parseInt(this.element.css("marginTop"), 10) || 0,
// 				right: parseInt(this.element.css("marginRight"), 10) || 0,
// 				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
// 			}
// 		},
// 		_cacheHelperProportions: function () {
// 			this.helperProportions = {
// 				width: this.helper.outerWidth(),
// 				height: this.helper.outerHeight()
// 			}
// 		},
// 		_setContainment: function () {
// 			var t, i, s, n = this.options,
// 				a = this.document[0];
// 			return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
// 		},
// 		_convertPositionTo: function (e, t) {
// 			t || (t = this.position);
// 			var i = "absolute" === e ? 1 : -1,
// 				s = this._isRootNode(this.scrollParent[0]);
// 			return {
// 				top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
// 				left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
// 			}
// 		},
// 		_generatePosition: function (e, t) {
// 			var i, s, n, a, o = this.options,
// 				r = this._isRootNode(this.scrollParent[0]),
// 				h = e.pageX,
// 				l = e.pageY;
// 			return r && this.offset.scroll || (this.offset.scroll = {
// 				top: this.scrollParent.scrollTop(),
// 				left: this.scrollParent.scrollLeft()
// 			}), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
// 				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
// 				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
// 			}
// 		},
// 		_clear: function () {
// 			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
// 		},
// 		_trigger: function (t, i, s) {
// 			return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
// 		},
// 		plugins: {},
// 		_uiHash: function () {
// 			return {
// 				helper: this.helper,
// 				position: this.position,
// 				originalPosition: this.originalPosition,
// 				offset: this.positionAbs
// 			}
// 		}
// 	}), e.ui.plugin.add("draggable", "connectToSortable", {
// 		start: function (t, i, s) {
// 			var n = s.options,
// 				a = e.extend({}, i, {
// 					item: s.element
// 				});
// 			s.sortables = [], e(n.connectToSortable).each(function () {
// 				var i = e(this).sortable("instance");
// 				i && !i.options.disabled && (s.sortables.push({
// 					instance: i,
// 					shouldRevert: i.options.revert
// 				}), i.refreshPositions(), i._trigger("activate", t, a))
// 			})
// 		},
// 		stop: function (t, i, s) {
// 			var n = e.extend({}, i, {
// 				item: s.element
// 			});
// 			e.each(s.sortables, function () {
// 				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
// 					top: "auto",
// 					left: "auto"
// 				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
// 			})
// 		},
// 		drag: function (t, i, s) {
// 			var n = this;
// 			e.each(s.sortables, function () {
// 				var a = !1,
// 					o = this;
// 				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function () {
// 					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
// 				})), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
// 					return i.helper[0]
// 				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
// 			})
// 		}
// 	}), e.ui.plugin.add("draggable", "cursor", {
// 		start: function (t, i, s) {
// 			var n = e("body"),
// 				a = s.options;
// 			n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
// 		},
// 		stop: function (t, i, s) {
// 			var n = s.options;
// 			n._cursor && e("body").css("cursor", n._cursor)
// 		}
// 	}), e.ui.plugin.add("draggable", "opacity", {
// 		start: function (t, i, s) {
// 			var n = e(i.helper),
// 				a = s.options;
// 			n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
// 		},
// 		stop: function (t, i, s) {
// 			var n = s.options;
// 			n._opacity && e(i.helper).css("opacity", n._opacity)
// 		}
// 	}), e.ui.plugin.add("draggable", "scroll", {
// 		start: function (e, t, i) {
// 			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
// 		},
// 		drag: function (t, i, s) {
// 			var n = s.options,
// 				a = !1,
// 				o = s.scrollParentNotHidden[0],
// 				r = s.document[0];
// 			o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
// 		}
// 	}), e.ui.plugin.add("draggable", "snap", {
// 		start: function (t, i, s) {
// 			var n = s.options;
// 			s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
// 				var t = e(this),
// 					i = t.offset();
// 				this !== s.element[0] && s.snapElements.push({
// 					item: this,
// 					width: t.outerWidth(),
// 					height: t.outerHeight(),
// 					top: i.top,
// 					left: i.left
// 				})
// 			})
// 		},
// 		drag: function (t, i, s) {
// 			var n, a, o, r, h, l, u, d, c, p, f = s.options,
// 				m = f.snapTolerance,
// 				g = i.offset.left,
// 				v = g + s.helperProportions.width,
// 				y = i.offset.top,
// 				b = y + s.helperProportions.height;
// 			for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left, l = h + s.snapElements[c].width, u = s.snapElements[c].top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
// 				snapItem: s.snapElements[c].item
// 			})), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
// 				top: u - s.helperProportions.height,
// 				left: 0
// 			}).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
// 				top: d,
// 				left: 0
// 			}).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
// 				top: 0,
// 				left: h - s.helperProportions.width
// 			}).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
// 				top: 0,
// 				left: l
// 			}).left - s.margins.left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
// 				top: u,
// 				left: 0
// 			}).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
// 				top: d - s.helperProportions.height,
// 				left: 0
// 			}).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
// 				top: 0,
// 				left: h
// 			}).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
// 				top: 0,
// 				left: l - s.helperProportions.width
// 			}).left - s.margins.left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
// 				snapItem: s.snapElements[c].item
// 			})), s.snapElements[c].snapping = n || a || o || r || p)
// 		}
// 	}), e.ui.plugin.add("draggable", "stack", {
// 		start: function (t, i, s) {
// 			var n, a = s.options,
// 				o = e.makeArray(e(a.stack)).sort(function (t, i) {
// 					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
// 				});
// 			o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
// 				e(this).css("zIndex", n + t)
// 			}), this.css("zIndex", n + o.length))
// 		}
// 	}), e.ui.plugin.add("draggable", "zIndex", {
// 		start: function (t, i, s) {
// 			var n = e(i.helper),
// 				a = s.options;
// 			n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
// 		},
// 		stop: function (t, i, s) {
// 			var n = s.options;
// 			n._zIndex && e(i.helper).css("zIndex", n._zIndex)
// 		}
// 	}), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
// 		version: "1.11.1",
// 		widgetEventPrefix: "resize",
// 		options: {
// 			alsoResize: !1,
// 			animate: !1,
// 			animateDuration: "slow",
// 			animateEasing: "swing",
// 			aspectRatio: !1,
// 			autoHide: !1,
// 			containment: !1,
// 			ghost: !1,
// 			grid: !1,
// 			handles: "e,s,se",
// 			helper: !1,
// 			maxHeight: null,
// 			maxWidth: null,
// 			minHeight: 10,
// 			minWidth: 10,
// 			zIndex: 90,
// 			resize: null,
// 			start: null,
// 			stop: null
// 		},
// 		_num: function (e) {
// 			return parseInt(e, 10) || 0
// 		},
// 		_isNumber: function (e) {
// 			return !isNaN(parseInt(e, 10))
// 		},
// 		_hasScroll: function (t, i) {
// 			if ("hidden" === e(t).css("overflow")) return !1;
// 			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
// 				n = !1;
// 			return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
// 		},
// 		_create: function () {
// 			var t, i, s, n, a, o = this,
// 				r = this.options;
// 			if (this.element.addClass("ui-resizable"), e.extend(this, {
// 					_aspectRatio: !!r.aspectRatio,
// 					aspectRatio: r.aspectRatio,
// 					originalElement: this.element,
// 					_proportionallyResizeElements: [],
// 					_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
// 				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
// 					position: this.element.css("position"),
// 					width: this.element.outerWidth(),
// 					height: this.element.outerHeight(),
// 					top: this.element.css("top"),
// 					left: this.element.css("left")
// 				})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
// 					marginLeft: this.originalElement.css("marginLeft"),
// 					marginTop: this.originalElement.css("marginTop"),
// 					marginRight: this.originalElement.css("marginRight"),
// 					marginBottom: this.originalElement.css("marginBottom")
// 				}), this.originalElement.css({
// 					marginLeft: 0,
// 					marginTop: 0,
// 					marginRight: 0,
// 					marginBottom: 0
// 				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
// 					position: "static",
// 					zoom: 1,
// 					display: "block"
// 				})), this.originalElement.css({
// 					margin: this.originalElement.css("margin")
// 				}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
// 					n: ".ui-resizable-n",
// 					e: ".ui-resizable-e",
// 					s: ".ui-resizable-s",
// 					w: ".ui-resizable-w",
// 					se: ".ui-resizable-se",
// 					sw: ".ui-resizable-sw",
// 					ne: ".ui-resizable-ne",
// 					nw: ".ui-resizable-nw"
// 				} : "e,s,se"), this.handles.constructor === String)
// 				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
// 					zIndex: r.zIndex
// 				}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
// 			this._renderAxis = function (t) {
// 				var i, s, n, a;
// 				t = t || this.element;
// 				for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
// 			}, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
// 				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
// 			}), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
// 				r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
// 			}).mouseleave(function () {
// 				r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
// 			})), this._mouseInit()
// 		},
// 		_destroy: function () {
// 			this._mouseDestroy();
// 			var t, i = function (t) {
// 				e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
// 			};
// 			return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
// 				position: t.css("position"),
// 				width: t.outerWidth(),
// 				height: t.outerHeight(),
// 				top: t.css("top"),
// 				left: t.css("left")
// 			}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
// 		},
// 		_mouseCapture: function (t) {
// 			var i, s, n = !1;
// 			for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
// 			return !this.options.disabled && n
// 		},
// 		_mouseStart: function (t) {
// 			var i, s, n, a = this.options,
// 				o = this.element;
// 			return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
// 				left: i,
// 				top: s
// 			}, this.size = this._helper ? {
// 				width: this.helper.width(),
// 				height: this.helper.height()
// 			} : {
// 				width: o.width(),
// 				height: o.height()
// 			}, this.originalSize = this._helper ? {
// 				width: o.outerWidth(),
// 				height: o.outerHeight()
// 			} : {
// 				width: o.width(),
// 				height: o.height()
// 			}, this.sizeDiff = {
// 				width: o.outerWidth() - o.width(),
// 				height: o.outerHeight() - o.height()
// 			}, this.originalPosition = {
// 				left: i,
// 				top: s
// 			}, this.originalMousePosition = {
// 				left: t.pageX,
// 				top: t.pageY
// 			}, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
// 		},
// 		_mouseDrag: function (t) {
// 			var i, s, n = this.originalMousePosition,
// 				a = this.axis,
// 				o = t.pageX - n.left || 0,
// 				r = t.pageY - n.top || 0,
// 				h = this._change[a];
// 			return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
// 		},
// 		_mouseStop: function (t) {
// 			this.resizing = !1;
// 			var i, s, n, a, o, r, h, l = this.options,
// 				u = this;
// 			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
// 				width: u.helper.width() - a,
// 				height: u.helper.height() - n
// 			}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
// 				top: h,
// 				left: r
// 			})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
// 		},
// 		_updatePrevProperties: function () {
// 			this.prevPosition = {
// 				top: this.position.top,
// 				left: this.position.left
// 			}, this.prevSize = {
// 				width: this.size.width,
// 				height: this.size.height
// 			}
// 		},
// 		_applyChanges: function () {
// 			var e = {};
// 			return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
// 		},
// 		_updateVirtualBoundaries: function (e) {
// 			var t, i, s, n, a, o = this.options;
// 			a = {
// 				minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
// 				maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
// 				minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
// 				maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
// 			}, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
// 		},
// 		_updateCache: function (e) {
// 			this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
// 		},
// 		_updateRatio: function (e) {
// 			var t = this.position,
// 				i = this.size,
// 				s = this.axis;
// 			return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
// 		},
// 		_respectSize: function (e) {
// 			var t = this._vBoundaries,
// 				i = this.axis,
// 				s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
// 				n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
// 				a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
// 				o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
// 				r = this.originalPosition.left + this.originalSize.width,
// 				h = this.position.top + this.size.height,
// 				l = /sw|nw|w/.test(i),
// 				u = /nw|ne|n/.test(i);
// 			return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
// 		},
// 		_getPaddingPlusBorderDimensions: function (e) {
// 			for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
// 			return {
// 				height: i[0] + i[2],
// 				width: i[1] + i[3]
// 			}
// 		},
// 		_proportionallyResize: function () {
// 			if (this._proportionallyResizeElements.length)
// 				for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
// 					height: i.height() - this.outerDimensions.height || 0,
// 					width: i.width() - this.outerDimensions.width || 0
// 				})
// 		},
// 		_renderProxy: function () {
// 			var t = this.element,
// 				i = this.options;
// 			this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
// 				width: this.element.outerWidth() - 1,
// 				height: this.element.outerHeight() - 1,
// 				position: "absolute",
// 				left: this.elementOffset.left + "px",
// 				top: this.elementOffset.top + "px",
// 				zIndex: ++i.zIndex
// 			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
// 		},
// 		_change: {
// 			e: function (e, t) {
// 				return {
// 					width: this.originalSize.width + t
// 				}
// 			},
// 			w: function (e, t) {
// 				var i = this.originalSize,
// 					s = this.originalPosition;
// 				return {
// 					left: s.left + t,
// 					width: i.width - t
// 				}
// 			},
// 			n: function (e, t, i) {
// 				var s = this.originalSize,
// 					n = this.originalPosition;
// 				return {
// 					top: n.top + i,
// 					height: s.height - i
// 				}
// 			},
// 			s: function (e, t, i) {
// 				return {
// 					height: this.originalSize.height + i
// 				}
// 			},
// 			se: function (t, i, s) {
// 				return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
// 			},
// 			sw: function (t, i, s) {
// 				return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
// 			},
// 			ne: function (t, i, s) {
// 				return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
// 			},
// 			nw: function (t, i, s) {
// 				return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
// 			}
// 		},
// 		_propagate: function (t, i) {
// 			e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
// 		},
// 		plugins: {},
// 		ui: function () {
// 			return {
// 				originalElement: this.originalElement,
// 				element: this.element,
// 				helper: this.helper,
// 				position: this.position,
// 				size: this.size,
// 				originalSize: this.originalSize,
// 				originalPosition: this.originalPosition
// 			}
// 		}
// 	}), e.ui.plugin.add("resizable", "animate", {
// 		stop: function (t) {
// 			var i = e(this).resizable("instance"),
// 				s = i.options,
// 				n = i._proportionallyResizeElements,
// 				a = n.length && /textarea/i.test(n[0].nodeName),
// 				o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
// 				r = a ? 0 : i.sizeDiff.width,
// 				h = {
// 					width: i.size.width - r,
// 					height: i.size.height - o
// 				},
// 				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
// 				u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
// 			i.element.animate(e.extend(h, u && l ? {
// 				top: u,
// 				left: l
// 			} : {}), {
// 				duration: s.animateDuration,
// 				easing: s.animateEasing,
// 				step: function () {
// 					var s = {
// 						width: parseInt(i.element.css("width"), 10),
// 						height: parseInt(i.element.css("height"), 10),
// 						top: parseInt(i.element.css("top"), 10),
// 						left: parseInt(i.element.css("left"), 10)
// 					};
// 					n && n.length && e(n[0]).css({
// 						width: s.width,
// 						height: s.height
// 					}), i._updateCache(s), i._propagate("resize", t)
// 				}
// 			})
// 		}
// 	}), e.ui.plugin.add("resizable", "containment", {
// 		start: function () {
// 			var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
// 				l = h.options,
// 				u = h.element,
// 				d = l.containment,
// 				c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
// 			c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
// 				left: 0,
// 				top: 0
// 			}, h.containerPosition = {
// 				left: 0,
// 				top: 0
// 			}, h.parentData = {
// 				element: e(document),
// 				left: 0,
// 				top: 0,
// 				width: e(document).width(),
// 				height: e(document).height() || document.body.parentNode.scrollHeight
// 			}) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
// 				i[e] = h._num(t.css("padding" + s))
// 			}), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
// 				height: t.innerHeight() - i[3],
// 				width: t.innerWidth() - i[1]
// 			}, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
// 				element: c,
// 				left: s.left,
// 				top: s.top,
// 				width: o,
// 				height: r
// 			}))
// 		},
// 		resize: function (t) {
// 			var i, s, n, a, o = e(this).resizable("instance"),
// 				r = o.options,
// 				h = o.containerOffset,
// 				l = o.position,
// 				u = o._aspectRatio || t.shiftKey,
// 				d = {
// 					top: 0,
// 					left: 0
// 				},
// 				c = o.containerElement,
// 				p = !0;
// 			c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
// 		},
// 		stop: function () {
// 			var t = e(this).resizable("instance"),
// 				i = t.options,
// 				s = t.containerOffset,
// 				n = t.containerPosition,
// 				a = t.containerElement,
// 				o = e(t.helper),
// 				r = o.offset(),
// 				h = o.outerWidth() - t.sizeDiff.width,
// 				l = o.outerHeight() - t.sizeDiff.height;
// 			t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
// 				left: r.left - n.left - s.left,
// 				width: h,
// 				height: l
// 			}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
// 				left: r.left - n.left - s.left,
// 				width: h,
// 				height: l
// 			})
// 		}
// 	}), e.ui.plugin.add("resizable", "alsoResize", {
// 		start: function () {
// 			var t = e(this).resizable("instance"),
// 				i = t.options,
// 				s = function (t) {
// 					e(t).each(function () {
// 						var t = e(this);
// 						t.data("ui-resizable-alsoresize", {
// 							width: parseInt(t.width(), 10),
// 							height: parseInt(t.height(), 10),
// 							left: parseInt(t.css("left"), 10),
// 							top: parseInt(t.css("top"), 10)
// 						})
// 					})
// 				};
// 			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
// 				s(e)
// 			})
// 		},
// 		resize: function (t, i) {
// 			var s = e(this).resizable("instance"),
// 				n = s.options,
// 				a = s.originalSize,
// 				o = s.originalPosition,
// 				r = {
// 					height: s.size.height - a.height || 0,
// 					width: s.size.width - a.width || 0,
// 					top: s.position.top - o.top || 0,
// 					left: s.position.left - o.left || 0
// 				},
// 				h = function (t, s) {
// 					e(t).each(function () {
// 						var t = e(this),
// 							n = e(this).data("ui-resizable-alsoresize"),
// 							a = {},
// 							o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
// 						e.each(o, function (e, t) {
// 							var i = (n[t] || 0) + (r[t] || 0);
// 							i && i >= 0 && (a[t] = i || null)
// 						}), t.css(a)
// 					})
// 				};
// 			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function (e, t) {
// 				h(e, t)
// 			})
// 		},
// 		stop: function () {
// 			e(this).removeData("resizable-alsoresize")
// 		}
// 	}), e.ui.plugin.add("resizable", "ghost", {
// 		start: function () {
// 			var t = e(this).resizable("instance"),
// 				i = t.options,
// 				s = t.size;
// 			t.ghost = t.originalElement.clone(), t.ghost.css({
// 				opacity: .25,
// 				display: "block",
// 				position: "relative",
// 				height: s.height,
// 				width: s.width,
// 				margin: 0,
// 				left: 0,
// 				top: 0
// 			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
// 		},
// 		resize: function () {
// 			var t = e(this).resizable("instance");
// 			t.ghost && t.ghost.css({
// 				position: "relative",
// 				height: t.size.height,
// 				width: t.size.width
// 			})
// 		},
// 		stop: function () {
// 			var t = e(this).resizable("instance");
// 			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
// 		}
// 	}), e.ui.plugin.add("resizable", "grid", {
// 		resize: function () {
// 			var t, i = e(this).resizable("instance"),
// 				s = i.options,
// 				n = i.size,
// 				a = i.originalSize,
// 				o = i.originalPosition,
// 				r = i.axis,
// 				h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
// 				l = h[0] || 1,
// 				u = h[1] || 1,
// 				d = Math.round((n.width - a.width) / l) * l,
// 				c = Math.round((n.height - a.height) / u) * u,
// 				p = a.width + d,
// 				f = a.height + c,
// 				m = s.maxWidth && p > s.maxWidth,
// 				g = s.maxHeight && f > s.maxHeight,
// 				v = s.minWidth && s.minWidth > p,
// 				y = s.minHeight && s.minHeight > f;
// 			s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = u - t.height, i.size.width = p, i.position.left = o.left + a.width - p))
// 		}
// 	}), e.ui.resizable, e.widget("ui.dialog", {
// 		version: "1.11.1",
// 		options: {
// 			appendTo: "body",
// 			autoOpen: !0,
// 			buttons: [],
// 			closeOnEscape: !0,
// 			closeText: "Close",
// 			dialogClass: "",
// 			draggable: !0,
// 			hide: null,
// 			height: "auto",
// 			maxHeight: null,
// 			maxWidth: null,
// 			minHeight: 150,
// 			minWidth: 150,
// 			modal: !1,
// 			position: {
// 				my: "center",
// 				at: "center",
// 				of: window,
// 				collision: "fit",
// 				using: function (t) {
// 					var i = e(this).css(t).offset().top;
// 					0 > i && e(this).css("top", t.top - i)
// 				}
// 			},
// 			resizable: !0,
// 			show: null,
// 			title: null,
// 			width: 300,
// 			beforeClose: null,
// 			close: null,
// 			drag: null,
// 			dragStart: null,
// 			dragStop: null,
// 			focus: null,
// 			open: null,
// 			resize: null,
// 			resizeStart: null,
// 			resizeStop: null
// 		},
// 		sizeRelatedOptions: {
// 			buttons: !0,
// 			height: !0,
// 			maxHeight: !0,
// 			maxWidth: !0,
// 			minHeight: !0,
// 			minWidth: !0,
// 			width: !0
// 		},
// 		resizableRelatedOptions: {
// 			maxHeight: !0,
// 			maxWidth: !0,
// 			minHeight: !0,
// 			minWidth: !0
// 		},
// 		_create: function () {
// 			this.originalCss = {
// 				display: this.element[0].style.display,
// 				width: this.element[0].style.width,
// 				minHeight: this.element[0].style.minHeight,
// 				maxHeight: this.element[0].style.maxHeight,
// 				height: this.element[0].style.height
// 			}, this.originalPosition = {
// 				parent: this.element.parent(),
// 				index: this.element.parent().children().index(this.element)
// 			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
// 		},
// 		_init: function () {
// 			this.options.autoOpen && this.open()
// 		},
// 		_appendTo: function () {
// 			var t = this.options.appendTo;
// 			return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
// 		},
// 		_destroy: function () {
// 			var e, t = this.originalPosition;
// 			this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
// 		},
// 		widget: function () {
// 			return this.uiDialog
// 		},
// 		disable: e.noop,
// 		enable: e.noop,
// 		close: function (t) {
// 			var i, s = this;
// 			if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
// 				if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
// 					i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
// 				} catch (n) {}
// 				this._hide(this.uiDialog, this.options.hide, function () {
// 					s._trigger("close", t)
// 				})
// 			}
// 		},
// 		isOpen: function () {
// 			return this._isOpen
// 		},
// 		moveToTop: function () {
// 			this._moveToTop()
// 		},
// 		_moveToTop: function (t, i) {
// 			var s = !1,
// 				n = this.uiDialog.siblings(".ui-front:visible").map(function () {
// 					return +e(this).css("z-index")
// 				}).get(),
// 				a = Math.max.apply(null, n);
// 			return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
// 		},
// 		open: function () {
// 			var t = this;
// 			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
// 				t._focusTabbable(), t._trigger("focus")
// 			}), this._makeFocusTarget(), this._trigger("open"), void 0)
// 		},
// 		_focusTabbable: function () {
// 			var e = this._focusedElement;
// 			e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
// 		},
// 		_keepFocus: function (t) {
// 			function i() {
// 				var t = this.document[0].activeElement,
// 					i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
// 				i || this._focusTabbable()
// 			}
// 			t.preventDefault(), i.call(this), this._delay(i)
// 		},
// 		_createWrapper: function () {
// 			this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
// 				tabIndex: -1,
// 				role: "dialog"
// 			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
// 				keydown: function (t) {
// 					if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
// 					if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
// 						var i = this.uiDialog.find(":tabbable"),
// 							s = i.filter(":first"),
// 							n = i.filter(":last");
// 						t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
// 							n.focus()
// 						}), t.preventDefault()) : (this._delay(function () {
// 							s.focus()
// 						}), t.preventDefault())
// 					}
// 				},
// 				mousedown: function (e) {
// 					this._moveToTop(e) && this._focusTabbable()
// 				}
// 			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
// 				"aria-describedby": this.element.uniqueId().attr("id")
// 			})
// 		},
// 		_createTitlebar: function () {
// 			var t;
// 			this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
// 				mousedown: function (t) {
// 					e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
// 				}
// 			}), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
// 				label: this.options.closeText,
// 				icons: {
// 					primary: "ui-icon-closethick"
// 				},
// 				text: !1
// 			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
// 				click: function (e) {
// 					e.preventDefault(), this.close(e)
// 				}
// 			}), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
// 				"aria-labelledby": t.attr("id")
// 			})
// 		},
// 		_title: function (e) {
// 			this.options.title || e.html("&#160;"), e.text(this.options.title)
// 		},
// 		_createButtonPane: function () {
// 			this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
// 		},
// 		_createButtons: function () {
// 			var t = this,
// 				i = this.options.buttons;
// 			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
// 				var n, a;
// 				s = e.isFunction(s) ? {
// 					click: s,
// 					text: i
// 				} : s, s = e.extend({
// 					type: "button"
// 				}, s), n = s.click, s.click = function () {
// 					n.apply(t.element[0], arguments)
// 				}, a = {
// 					icons: s.icons,
// 					text: s.showText
// 				}, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
// 			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
// 		},
// 		_makeDraggable: function () {
// 			function t(e) {
// 				return {
// 					position: e.position,
// 					offset: e.offset
// 				}
// 			}
// 			var i = this,
// 				s = this.options;
// 			this.uiDialog.draggable({
// 				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
// 				handle: ".ui-dialog-titlebar",
// 				containment: "document",
// 				start: function (s, n) {
// 					e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n))
// 				},
// 				drag: function (e, s) {
// 					i._trigger("drag", e, t(s))
// 				},
// 				stop: function (n, a) {
// 					var o = a.offset.left - i.document.scrollLeft(),
// 						r = a.offset.top - i.document.scrollTop();
// 					s.position = {
// 						my: "left top",
// 						at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r,
// 						of: i.window
// 					}, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
// 				}
// 			})
// 		},
// 		_makeResizable: function () {
// 			function t(e) {
// 				return {
// 					originalPosition: e.originalPosition,
// 					originalSize: e.originalSize,
// 					position: e.position,
// 					size: e.size
// 				}
// 			}
// 			var i = this,
// 				s = this.options,
// 				n = s.resizable,
// 				a = this.uiDialog.css("position"),
// 				o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
// 			this.uiDialog.resizable({
// 				cancel: ".ui-dialog-content",
// 				containment: "document",
// 				alsoResize: this.element,
// 				maxWidth: s.maxWidth,
// 				maxHeight: s.maxHeight,
// 				minWidth: s.minWidth,
// 				minHeight: this._minHeight(),
// 				handles: o,
// 				start: function (s, n) {
// 					e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n))
// 				},
// 				resize: function (e, s) {
// 					i._trigger("resize", e, t(s))
// 				},
// 				stop: function (n, a) {
// 					var o = i.uiDialog.offset(),
// 						r = o.left - i.document.scrollLeft(),
// 						h = o.top - i.document.scrollTop();
// 					s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
// 						my: "left top",
// 						at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
// 						of: i.window
// 					}, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
// 				}
// 			}).css("position", a)
// 		},
// 		_trackFocus: function () {
// 			this._on(this.widget(), {
// 				focusin: function (t) {
// 					this._makeFocusTarget(), this._focusedElement = e(t.target)
// 				}
// 			})
// 		},
// 		_makeFocusTarget: function () {
// 			this._untrackInstance(), this._trackingInstances().unshift(this)
// 		},
// 		_untrackInstance: function () {
// 			var t = this._trackingInstances(),
// 				i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
// 		},
// 		_trackingInstances: function () {
// 			var e = this.document.data("ui-dialog-instances");
// 			return e || (e = [], this.document.data("ui-dialog-instances", e)), e
// 		},
// 		_minHeight: function () {
// 			var e = this.options;
// 			return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
// 		},
// 		_position: function () {
// 			var e = this.uiDialog.is(":visible");
// 			e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
// 		},
// 		_setOptions: function (t) {
// 			var i = this,
// 				s = !1,
// 				n = {};
// 			e.each(t, function (e, t) {
// 				i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t)
// 			}), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
// 		},
// 		_setOption: function (e, t) {
// 			var i, s, n = this.uiDialog;
// 			"dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
// 				label: "" + t
// 			}), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
// 		},
// 		_size: function () {
// 			var e, t, i, s = this.options;
// 			this.element.show().css({
// 				width: "auto",
// 				minHeight: 0,
// 				maxHeight: "none",
// 				height: 0
// 			}), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
// 				height: "auto",
// 				width: s.width
// 			}).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
// 				minHeight: t,
// 				maxHeight: i,
// 				height: "auto"
// 			}) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
// 		},
// 		_blockFrames: function () {
// 			this.iframeBlocks = this.document.find("iframe").map(function () {
// 				var t = e(this);
// 				return e("<div>").css({
// 					position: "absolute",
// 					width: t.outerWidth(),
// 					height: t.outerHeight()
// 				}).appendTo(t.parent()).offset(t.offset())[0]
// 			})
// 		},
// 		_unblockFrames: function () {
// 			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
// 		},
// 		_allowInteraction: function (t) {
// 			return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
// 		},
// 		_createOverlay: function () {
// 			if (this.options.modal) {
// 				var t = !0;
// 				this._delay(function () {
// 					t = !1
// 				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
// 					focusin: function (e) {
// 						t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
// 					}
// 				}), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
// 					mousedown: "_keepFocus"
// 				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
// 			}
// 		},
// 		_destroyOverlay: function () {
// 			if (this.options.modal && this.overlay) {
// 				var e = this.document.data("ui-dialog-overlays") - 1;
// 				e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
// 			}
// 		}
// 	}), e.widget("ui.droppable", {
// 		version: "1.11.1",
// 		widgetEventPrefix: "drop",
// 		options: {
// 			accept: "*",
// 			activeClass: !1,
// 			addClasses: !0,
// 			greedy: !1,
// 			hoverClass: !1,
// 			scope: "default",
// 			tolerance: "intersect",
// 			activate: null,
// 			deactivate: null,
// 			drop: null,
// 			out: null,
// 			over: null
// 		},
// 		_create: function () {
// 			var t, i = this.options,
// 				s = i.accept;
// 			this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
// 				return e.is(s)
// 			}, this.proportions = function () {
// 				return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
// 					width: this.element[0].offsetWidth,
// 					height: this.element[0].offsetHeight
// 				}
// 			}, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
// 		},
// 		_addToManager: function (t) {
// 			e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
// 		},
// 		_splice: function (e) {
// 			for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
// 		},
// 		_destroy: function () {
// 			var t = e.ui.ddmanager.droppables[this.options.scope];
// 			this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
// 		},
// 		_setOption: function (t, i) {
// 			if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
// 				return e.is(i)
// 			};
// 			else if ("scope" === t) {
// 				var s = e.ui.ddmanager.droppables[this.options.scope];
// 				this._splice(s), this._addToManager(i)
// 			}
// 			this._super(t, i)
// 		},
// 		_activate: function (t) {
// 			var i = e.ui.ddmanager.current;
// 			this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
// 		},
// 		_deactivate: function (t) {
// 			var i = e.ui.ddmanager.current;
// 			this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
// 		},
// 		_over: function (t) {
// 			var i = e.ui.ddmanager.current;
// 			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
// 		},
// 		_out: function (t) {
// 			var i = e.ui.ddmanager.current;
// 			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
// 		},
// 		_drop: function (t, i) {
// 			var s = i || e.ui.ddmanager.current,
// 				n = !1;
// 			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
// 				var i = e(this).droppable("instance");
// 				return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, {
// 					offset: i.element.offset()
// 				}), i.options.tolerance, t) ? (n = !0, !1) : void 0
// 			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
// 		},
// 		ui: function (e) {
// 			return {
// 				draggable: e.currentItem || e.element,
// 				helper: e.helper,
// 				position: e.position,
// 				offset: e.positionAbs
// 			}
// 		}
// 	}), e.ui.intersect = function () {
// 		function e(e, t, i) {
// 			return e >= t && t + i > e
// 		}
// 		return function (t, i, s, n) {
// 			if (!i.offset) return !1;
// 			var a = (t.positionAbs || t.position.absolute).left,
// 				o = (t.positionAbs || t.position.absolute).top,
// 				r = a + t.helperProportions.width,
// 				h = o + t.helperProportions.height,
// 				l = i.offset.left,
// 				u = i.offset.top,
// 				d = l + i.proportions().width,
// 				c = u + i.proportions().height;
// 			switch (s) {
// 				case "fit":
// 					return a >= l && d >= r && o >= u && c >= h;
// 				case "intersect":
// 					return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
// 				case "pointer":
// 					return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
// 				case "touch":
// 					return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
// 				default:
// 					return !1
// 			}
// 		}
// 	}(), e.ui.ddmanager = {
// 		current: null,
// 		droppables: {
// 			"default": []
// 		},
// 		prepareOffsets: function (t, i) {
// 			var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
// 				o = i ? i.type : null,
// 				r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
// 			e: for (s = 0; a.length > s; s++)
// 				if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
// 					for (n = 0; r.length > n; n++)
// 						if (r[n] === a[s].element[0]) {
// 							a[s].proportions().height = 0;
// 							continue e
// 						} a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
// 						width: a[s].element[0].offsetWidth,
// 						height: a[s].element[0].offsetHeight
// 					}))
// 				}
// 		},
// 		drop: function (t, i) {
// 			var s = !1;
// 			return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
// 				this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
// 			}), s
// 		},
// 		dragStart: function (t, i) {
// 			t.element.parentsUntil("body").bind("scroll.droppable", function () {
// 				t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
// 			})
// 		},
// 		drag: function (t, i) {
// 			t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
// 				if (!this.options.disabled && !this.greedyChild && this.visible) {
// 					var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i),
// 						r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
// 					r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
// 						return e(this).droppable("instance").options.scope === n
// 					}), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
// 				}
// 			})
// 		},
// 		dragStop: function (t, i) {
// 			t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
// 		}
// 	}, e.ui.droppable;
// 	var y = "ui-effects-",
// 		b = e;
// 	e.effects = {
// 			effect: {}
// 		},
// 		function (e, t) {
// 			function i(e, t, i) {
// 				var s = d[t.type] || {};
// 				return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
// 			}

// 			function s(i) {
// 				var s = l(),
// 					n = s._rgba = [];
// 				return i = i.toLowerCase(), f(h, function (e, a) {
// 					var o, r = a.re.exec(i),
// 						h = r && a.parse(r),
// 						l = a.space || "rgba";
// 					return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
// 				}), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
// 			}

// 			function n(e, t, i) {
// 				return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
// 			}
// 			var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
// 				r = /^([\-+])=\s*(\d+\.?\d*)/,
// 				h = [{
// 					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
// 					parse: function (e) {
// 						return [e[1], e[2], e[3], e[4]]
// 					}
// 				}, {
// 					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
// 					parse: function (e) {
// 						return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
// 					}
// 				}, {
// 					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
// 					parse: function (e) {
// 						return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
// 					}
// 				}, {
// 					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
// 					parse: function (e) {
// 						return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
// 					}
// 				}, {
// 					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
// 					space: "hsla",
// 					parse: function (e) {
// 						return [e[1], e[2] / 100, e[3] / 100, e[4]]
// 					}
// 				}],
// 				l = e.Color = function (t, i, s, n) {
// 					return new e.Color.fn.parse(t, i, s, n)
// 				},
// 				u = {
// 					rgba: {
// 						props: {
// 							red: {
// 								idx: 0,
// 								type: "byte"
// 							},
// 							green: {
// 								idx: 1,
// 								type: "byte"
// 							},
// 							blue: {
// 								idx: 2,
// 								type: "byte"
// 							}
// 						}
// 					},
// 					hsla: {
// 						props: {
// 							hue: {
// 								idx: 0,
// 								type: "degrees"
// 							},
// 							saturation: {
// 								idx: 1,
// 								type: "percent"
// 							},
// 							lightness: {
// 								idx: 2,
// 								type: "percent"
// 							}
// 						}
// 					}
// 				},
// 				d = {
// 					"byte": {
// 						floor: !0,
// 						max: 255
// 					},
// 					percent: {
// 						max: 1
// 					},
// 					degrees: {
// 						mod: 360,
// 						floor: !0
// 					}
// 				},
// 				c = l.support = {},
// 				p = e("<p>")[0],
// 				f = e.each;
// 			p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
// 				t.cache = "_" + e, t.props.alpha = {
// 					idx: 3,
// 					type: "percent",
// 					def: 1
// 				}
// 			}), l.fn = e.extend(l.prototype, {
// 				parse: function (n, o, r, h) {
// 					if (n === t) return this._rgba = [null, null, null, null], this;
// 					(n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
// 					var d = this,
// 						c = e.type(n),
// 						p = this._rgba = [];
// 					return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
// 						p[t.idx] = i(n[t.idx], t)
// 					}), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
// 						n[t.cache] && (d[t.cache] = n[t.cache].slice())
// 					}) : f(u, function (t, s) {
// 						var a = s.cache;
// 						f(s.props, function (e, t) {
// 							if (!d[a] && s.to) {
// 								if ("alpha" === e || null == n[e]) return;
// 								d[a] = s.to(d._rgba)
// 							}
// 							d[a][t.idx] = i(n[e], t, !0)
// 						}), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
// 					}), this) : t
// 				},
// 				is: function (e) {
// 					var i = l(e),
// 						s = !0,
// 						n = this;
// 					return f(u, function (e, a) {
// 						var o, r = i[a.cache];
// 						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
// 							return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
// 						})), s
// 					}), s
// 				},
// 				_space: function () {
// 					var e = [],
// 						t = this;
// 					return f(u, function (i, s) {
// 						t[s.cache] && e.push(i)
// 					}), e.pop()
// 				},
// 				transition: function (e, t) {
// 					var s = l(e),
// 						n = s._space(),
// 						a = u[n],
// 						o = 0 === this.alpha() ? l("transparent") : this,
// 						r = o[a.cache] || a.to(o._rgba),
// 						h = r.slice();
// 					return s = s[a.cache], f(a.props, function (e, n) {
// 						var a = n.idx,
// 							o = r[a],
// 							l = s[a],
// 							u = d[n.type] || {};
// 						null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
// 					}), this[n](h)
// 				},
// 				blend: function (t) {
// 					if (1 === this._rgba[3]) return this;
// 					var i = this._rgba.slice(),
// 						s = i.pop(),
// 						n = l(t)._rgba;
// 					return l(e.map(i, function (e, t) {
// 						return (1 - s) * n[t] + s * e
// 					}))
// 				},
// 				toRgbaString: function () {
// 					var t = "rgba(",
// 						i = e.map(this._rgba, function (e, t) {
// 							return null == e ? t > 2 ? 1 : 0 : e
// 						});
// 					return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
// 				},
// 				toHslaString: function () {
// 					var t = "hsla(",
// 						i = e.map(this.hsla(), function (e, t) {
// 							return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
// 						});
// 					return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
// 				},
// 				toHexString: function (t) {
// 					var i = this._rgba.slice(),
// 						s = i.pop();
// 					return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
// 						return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
// 					}).join("")
// 				},
// 				toString: function () {
// 					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
// 				}
// 			}), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
// 				if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
// 				var t, i, s = e[0] / 255,
// 					n = e[1] / 255,
// 					a = e[2] / 255,
// 					o = e[3],
// 					r = Math.max(s, n, a),
// 					h = Math.min(s, n, a),
// 					l = r - h,
// 					u = r + h,
// 					d = .5 * u;
// 				return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
// 			}, u.hsla.from = function (e) {
// 				if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
// 				var t = e[0] / 360,
// 					i = e[1],
// 					s = e[2],
// 					a = e[3],
// 					o = .5 >= s ? s * (1 + i) : s + i - s * i,
// 					r = 2 * s - o;
// 				return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
// 			}, f(u, function (s, n) {
// 				var a = n.props,
// 					o = n.cache,
// 					h = n.to,
// 					u = n.from;
// 				l.fn[s] = function (s) {
// 					if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
// 					var n, r = e.type(s),
// 						d = "array" === r || "object" === r ? s : arguments,
// 						c = this[o].slice();
// 					return f(a, function (e, t) {
// 						var s = d["object" === r ? e : t.idx];
// 						null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
// 					}), u ? (n = l(u(c)), n[o] = c, n) : l(c)
// 				}, f(a, function (t, i) {
// 					l.fn[t] || (l.fn[t] = function (n) {
// 						var a, o = e.type(n),
// 							h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
// 							l = this[h](),
// 							u = l[i.idx];
// 						return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
// 					})
// 				})
// 			}), l.hook = function (t) {
// 				var i = t.split(" ");
// 				f(i, function (t, i) {
// 					e.cssHooks[i] = {
// 						set: function (t, n) {
// 							var a, o, r = "";
// 							if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
// 								if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
// 									for (o = "backgroundColor" === i ? t.parentNode : t;
// 										("" === r || "transparent" === r) && o && o.style;) try {
// 										r = e.css(o, "backgroundColor"), o = o.parentNode
// 									} catch (h) {}
// 									n = n.blend(r && "transparent" !== r ? r : "_default")
// 								}
// 								n = n.toRgbaString()
// 							}
// 							try {
// 								t.style[i] = n
// 							} catch (h) {}
// 						}
// 					}, e.fx.step[i] = function (t) {
// 						t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
// 					}
// 				})
// 			}, l.hook(o), e.cssHooks.borderColor = {
// 				expand: function (e) {
// 					var t = {};
// 					return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
// 						t["border" + s + "Color"] = e
// 					}), t
// 				}
// 			}, a = e.Color.names = {
// 				aqua: "#00ffff",
// 				black: "#000000",
// 				blue: "#0000ff",
// 				fuchsia: "#ff00ff",
// 				gray: "#808080",
// 				green: "#008000",
// 				lime: "#00ff00",
// 				maroon: "#800000",
// 				navy: "#000080",
// 				olive: "#808000",
// 				purple: "#800080",
// 				red: "#ff0000",
// 				silver: "#c0c0c0",
// 				teal: "#008080",
// 				white: "#ffffff",
// 				yellow: "#ffff00",
// 				transparent: [null, null, null, 0],
// 				_default: "#ffffff"
// 			}
// 		}(b),
// 		function () {
// 			function t(t) {
// 				var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
// 					a = {};
// 				if (n && n.length && n[0] && n[n[0]])
// 					for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
// 				else
// 					for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
// 				return a
// 			}

// 			function i(t, i) {
// 				var s, a, o = {};
// 				for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
// 				return o
// 			}
// 			var s = ["add", "remove", "toggle"],
// 				n = {
// 					border: 1,
// 					borderBottom: 1,
// 					borderColor: 1,
// 					borderLeft: 1,
// 					borderRight: 1,
// 					borderTop: 1,
// 					borderWidth: 1,
// 					margin: 1,
// 					padding: 1
// 				};
// 			e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
// 				e.fx.step[i] = function (e) {
// 					("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
// 				}
// 			}), e.fn.addBack || (e.fn.addBack = function (e) {
// 				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
// 			}), e.effects.animateClass = function (n, a, o, r) {
// 				var h = e.speed(a, o, r);
// 				return this.queue(function () {
// 					var a, o = e(this),
// 						r = o.attr("class") || "",
// 						l = h.children ? o.find("*").addBack() : o;
// 					l = l.map(function () {
// 						var i = e(this);
// 						return {
// 							el: i,
// 							start: t(this)
// 						}
// 					}), a = function () {
// 						e.each(s, function (e, t) {
// 							n[t] && o[t + "Class"](n[t])
// 						})
// 					}, a(), l = l.map(function () {
// 						return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
// 					}), o.attr("class", r), l = l.map(function () {
// 						var t = this,
// 							i = e.Deferred(),
// 							s = e.extend({}, h, {
// 								queue: !1,
// 								complete: function () {
// 									i.resolve(t)
// 								}
// 							});
// 						return this.el.animate(this.diff, s), i.promise()
// 					}), e.when.apply(e, l.get()).done(function () {
// 						a(), e.each(arguments, function () {
// 							var t = this.el;
// 							e.each(this.diff, function (e) {
// 								t.css(e, "")
// 							})
// 						}), h.complete.call(o[0])
// 					})
// 				})
// 			}, e.fn.extend({
// 				addClass: function (t) {
// 					return function (i, s, n, a) {
// 						return s ? e.effects.animateClass.call(this, {
// 							add: i
// 						}, s, n, a) : t.apply(this, arguments)
// 					}
// 				}(e.fn.addClass),
// 				removeClass: function (t) {
// 					return function (i, s, n, a) {
// 						return arguments.length > 1 ? e.effects.animateClass.call(this, {
// 							remove: i
// 						}, s, n, a) : t.apply(this, arguments)
// 					}
// 				}(e.fn.removeClass),
// 				toggleClass: function (t) {
// 					return function (i, s, n, a, o) {
// 						return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
// 							add: i
// 						} : {
// 							remove: i
// 						}, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
// 							toggle: i
// 						}, s, n, a)
// 					}
// 				}(e.fn.toggleClass),
// 				switchClass: function (t, i, s, n, a) {
// 					return e.effects.animateClass.call(this, {
// 						add: i,
// 						remove: t
// 					}, s, n, a)
// 				}
// 			})
// 		}(),
// 		function () {
// 			function t(t, i, s, n) {
// 				return e.isPlainObject(t) && (i = t, t = t.effect), t = {
// 					effect: t
// 				}, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
// 			}

// 			function i(t) {
// 				return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
// 			}
// 			e.extend(e.effects, {
// 				version: "1.11.1",
// 				save: function (e, t) {
// 					for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]])
// 				},
// 				restore: function (e, t) {
// 					var i, s;
// 					for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i))
// 				},
// 				setMode: function (e, t) {
// 					return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
// 				},
// 				getBaseline: function (e, t) {
// 					var i, s;
// 					switch (e[0]) {
// 						case "top":
// 							i = 0;
// 							break;
// 						case "middle":
// 							i = .5;
// 							break;
// 						case "bottom":
// 							i = 1;
// 							break;
// 						default:
// 							i = e[0] / t.height
// 					}
// 					switch (e[1]) {
// 						case "left":
// 							s = 0;
// 							break;
// 						case "center":
// 							s = .5;
// 							break;
// 						case "right":
// 							s = 1;
// 							break;
// 						default:
// 							s = e[1] / t.width
// 					}
// 					return {
// 						x: s,
// 						y: i
// 					}
// 				},
// 				createWrapper: function (t) {
// 					if (t.parent().is(".ui-effects-wrapper")) return t.parent();
// 					var i = {
// 							width: t.outerWidth(!0),
// 							height: t.outerHeight(!0),
// 							"float": t.css("float")
// 						},
// 						s = e("<div></div>").addClass("ui-effects-wrapper").css({
// 							fontSize: "100%",
// 							background: "transparent",
// 							border: "none",
// 							margin: 0,
// 							padding: 0
// 						}),
// 						n = {
// 							width: t.width(),
// 							height: t.height()
// 						},
// 						a = document.activeElement;
// 					try {
// 						a.id
// 					} catch (o) {
// 						a = document.body
// 					}
// 					return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
// 						position: "relative"
// 					}), t.css({
// 						position: "relative"
// 					})) : (e.extend(i, {
// 						position: t.css("position"),
// 						zIndex: t.css("z-index")
// 					}), e.each(["top", "left", "bottom", "right"], function (e, s) {
// 						i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
// 					}), t.css({
// 						position: "relative",
// 						top: 0,
// 						left: 0,
// 						right: "auto",
// 						bottom: "auto"
// 					})), t.css(n), s.css(i).show()
// 				},
// 				removeWrapper: function (t) {
// 					var i = document.activeElement;
// 					return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
// 				},
// 				setTransition: function (t, i, s, n) {
// 					return n = n || {}, e.each(i, function (e, i) {
// 						var a = t.cssUnit(i);
// 						a[0] > 0 && (n[i] = a[0] * s + a[1])
// 					}), n
// 				}
// 			}), e.fn.extend({
// 				effect: function () {
// 					function i(t) {
// 						function i() {
// 							e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
// 						}
// 						var n = e(this),
// 							a = s.complete,
// 							r = s.mode;
// 						(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
// 					}
// 					var s = t.apply(this, arguments),
// 						n = s.mode,
// 						a = s.queue,
// 						o = e.effects.effect[s.effect];
// 					return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
// 						s.complete && s.complete.call(this)
// 					}) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
// 				},
// 				show: function (e) {
// 					return function (s) {
// 						if (i(s)) return e.apply(this, arguments);
// 						var n = t.apply(this, arguments);
// 						return n.mode = "show", this.effect.call(this, n)
// 					}
// 				}(e.fn.show),
// 				hide: function (e) {
// 					return function (s) {
// 						if (i(s)) return e.apply(this, arguments);
// 						var n = t.apply(this, arguments);
// 						return n.mode = "hide", this.effect.call(this, n)
// 					}
// 				}(e.fn.hide),
// 				toggle: function (e) {
// 					return function (s) {
// 						if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
// 						var n = t.apply(this, arguments);
// 						return n.mode = "toggle", this.effect.call(this, n)
// 					}
// 				}(e.fn.toggle),
// 				cssUnit: function (t) {
// 					var i = this.css(t),
// 						s = [];
// 					return e.each(["em", "px", "%", "pt"], function (e, t) {
// 						i.indexOf(t) > 0 && (s = [parseFloat(i), t])
// 					}), s
// 				}
// 			})
// 		}(),
// 		function () {
// 			var t = {};
// 			e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
// 				t[i] = function (t) {
// 					return Math.pow(t, e + 2)
// 				}
// 			}), e.extend(t, {
// 				Sine: function (e) {
// 					return 1 - Math.cos(e * Math.PI / 2)
// 				},
// 				Circ: function (e) {
// 					return 1 - Math.sqrt(1 - e * e)
// 				},
// 				Elastic: function (e) {
// 					return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
// 				},
// 				Back: function (e) {
// 					return e * e * (3 * e - 2)
// 				},
// 				Bounce: function (e) {
// 					for (var t, i = 4;
// 						((t = Math.pow(2, --i)) - 1) / 11 > e;);
// 					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
// 				}
// 			}), e.each(t, function (t, i) {
// 				e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
// 					return 1 - i(1 - e)
// 				}, e.easing["easeInOut" + t] = function (e) {
// 					return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
// 				}
// 			})
// 		}(), e.effects, e.effects.effect.blind = function (t, i) {
// 			var s, n, a, o = e(this),
// 				r = /up|down|vertical/,
// 				h = /up|left|vertical|horizontal/,
// 				l = ["position", "top", "bottom", "left", "right", "height", "width"],
// 				u = e.effects.setMode(o, t.mode || "hide"),
// 				d = t.direction || "up",
// 				c = r.test(d),
// 				p = c ? "height" : "width",
// 				f = c ? "top" : "left",
// 				m = h.test(d),
// 				g = {},
// 				v = "show" === u;
// 			o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({
// 				overflow: "hidden"
// 			}), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
// 				position: "absolute"
// 			}), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
// 				duration: t.duration,
// 				easing: t.easing,
// 				queue: !1,
// 				complete: function () {
// 					"hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i()
// 				}
// 			})
// 		}, e.effects.effect.bounce = function (t, i) {
// 			var s, n, a, o = e(this),
// 				r = ["position", "top", "bottom", "left", "right", "height", "width"],
// 				h = e.effects.setMode(o, t.mode || "effect"),
// 				l = "hide" === h,
// 				u = "show" === h,
// 				d = t.direction || "up",
// 				c = t.distance,
// 				p = t.times || 5,
// 				f = 2 * p + (u || l ? 1 : 0),
// 				m = t.duration / f,
// 				g = t.easing,
// 				v = "up" === d || "down" === d ? "top" : "left",
// 				y = "up" === d || "left" === d,
// 				b = o.queue(),
// 				_ = b.length;
// 			for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {
// 					opacity: 1
// 				}, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
// 			l && (n = {
// 				opacity: 0
// 			}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
// 				l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
// 			}), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
// 		}, e.effects.effect.clip = function (t, i) {
// 			var s, n, a, o = e(this),
// 				r = ["position", "top", "bottom", "left", "right", "height", "width"],
// 				h = e.effects.setMode(o, t.mode || "hide"),
// 				l = "show" === h,
// 				u = t.direction || "vertical",
// 				d = "vertical" === u,
// 				c = d ? "height" : "width",
// 				p = d ? "top" : "left",
// 				f = {};
// 			e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({
// 				overflow: "hidden"
// 			}), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: function () {
// 					l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
// 				}
// 			})
// 		}, e.effects.effect.drop = function (t, i) {
// 			var s, n = e(this),
// 				a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
// 				o = e.effects.setMode(n, t.mode || "hide"),
// 				r = "show" === o,
// 				h = t.direction || "left",
// 				l = "up" === h || "down" === h ? "top" : "left",
// 				u = "up" === h || "left" === h ? "pos" : "neg",
// 				d = {
// 					opacity: r ? 1 : 0
// 				};
// 			e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: function () {
// 					"hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
// 				}
// 			})
// 		}, e.effects.effect.explode = function (t, i) {
// 			function s() {
// 				b.push(this), b.length === d * c && n()
// 			}

// 			function n() {
// 				p.css({
// 					visibility: "visible"
// 				}), e(b).remove(), m || p.hide(), i()
// 			}
// 			var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
// 				c = d,
// 				p = e(this),
// 				f = e.effects.setMode(p, t.mode || "hide"),
// 				m = "show" === f,
// 				g = p.show().css("visibility", "hidden").offset(),
// 				v = Math.ceil(p.outerWidth() / c),
// 				y = Math.ceil(p.outerHeight() / d),
// 				b = [];
// 			for (a = 0; d > a; a++)
// 				for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
// 					position: "absolute",
// 					visibility: "visible",
// 					left: -o * v,
// 					top: -a * y
// 				}).parent().addClass("ui-effects-explode").css({
// 					position: "absolute",
// 					overflow: "hidden",
// 					width: v,
// 					height: y,
// 					left: r + (m ? l * v : 0),
// 					top: h + (m ? u * y : 0),
// 					opacity: m ? 0 : 1
// 				}).animate({
// 					left: r + (m ? 0 : l * v),
// 					top: h + (m ? 0 : u * y),
// 					opacity: m ? 1 : 0
// 				}, t.duration || 500, t.easing, s)
// 		}, e.effects.effect.fade = function (t, i) {
// 			var s = e(this),
// 				n = e.effects.setMode(s, t.mode || "toggle");
// 			s.animate({
// 				opacity: n
// 			}, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: i
// 			})
// 		}, e.effects.effect.fold = function (t, i) {
// 			var s, n, a = e(this),
// 				o = ["position", "top", "bottom", "left", "right", "height", "width"],
// 				r = e.effects.setMode(a, t.mode || "hide"),
// 				h = "show" === r,
// 				l = "hide" === r,
// 				u = t.size || 15,
// 				d = /([0-9]+)%/.exec(u),
// 				c = !!t.horizFirst,
// 				p = h !== c,
// 				f = p ? ["width", "height"] : ["height", "width"],
// 				m = t.duration / 2,
// 				g = {},
// 				v = {};
// 			e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
// 				overflow: "hidden"
// 			}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
// 				height: 0,
// 				width: u
// 			} : {
// 				height: u,
// 				width: 0
// 			}), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
// 				l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
// 			})
// 		}, e.effects.effect.highlight = function (t, i) {
// 			var s = e(this),
// 				n = ["backgroundImage", "backgroundColor", "opacity"],
// 				a = e.effects.setMode(s, t.mode || "show"),
// 				o = {
// 					backgroundColor: s.css("backgroundColor")
// 				};
// 			"hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
// 				backgroundImage: "none",
// 				backgroundColor: t.color || "#ffff99"
// 			}).animate(o, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: function () {
// 					"hide" === a && s.hide(), e.effects.restore(s, n), i()
// 				}
// 			})
// 		}, e.effects.effect.size = function (t, i) {
// 			var s, n, a, o = e(this),
// 				r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
// 				h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
// 				l = ["width", "height", "overflow"],
// 				u = ["fontSize"],
// 				d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
// 				c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
// 				p = e.effects.setMode(o, t.mode || "effect"),
// 				f = t.restore || "effect" !== p,
// 				m = t.scale || "both",
// 				g = t.origin || ["middle", "center"],
// 				v = o.css("position"),
// 				y = f ? r : h,
// 				b = {
// 					height: 0,
// 					width: 0,
// 					outerHeight: 0,
// 					outerWidth: 0
// 				};
// 			"show" === p && o.show(), s = {
// 				height: o.height(),
// 				width: o.width(),
// 				outerHeight: o.outerHeight(),
// 				outerWidth: o.outerWidth()
// 			}, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
// 				from: {
// 					y: o.from.height / s.height,
// 					x: o.from.width / s.width
// 				},
// 				to: {
// 					y: o.to.height / s.height,
// 					x: o.to.width / s.width
// 				}
// 			}, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
// 				var i = e(this),
// 					s = {
// 						height: i.height(),
// 						width: i.width(),
// 						outerHeight: i.outerHeight(),
// 						outerWidth: i.outerWidth()
// 					};
// 				f && e.effects.save(i, l), i.from = {
// 					height: s.height * a.from.y,
// 					width: s.width * a.from.x,
// 					outerHeight: s.outerHeight * a.from.y,
// 					outerWidth: s.outerWidth * a.from.x
// 				}, i.to = {
// 					height: s.height * a.to.y,
// 					width: s.width * a.to.x,
// 					outerHeight: s.height * a.to.y,
// 					outerWidth: s.width * a.to.x
// 				}, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
// 					f && e.effects.restore(i, l)
// 				})
// 			})), o.animate(o.to, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: function () {
// 					0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
// 						position: "relative",
// 						top: o.to.top,
// 						left: o.to.left
// 					}) : e.each(["top", "left"], function (e, t) {
// 						o.css(t, function (t, i) {
// 							var s = parseInt(i, 10),
// 								n = e ? o.to.left : o.to.top;
// 							return "auto" === i ? n + "px" : s + n + "px"
// 						})
// 					})), e.effects.removeWrapper(o), i()
// 				}
// 			})
// 		}, e.effects.effect.scale = function (t, i) {
// 			var s = e(this),
// 				n = e.extend(!0, {}, t),
// 				a = e.effects.setMode(s, t.mode || "effect"),
// 				o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
// 				r = t.direction || "both",
// 				h = t.origin,
// 				l = {
// 					height: s.height(),
// 					width: s.width(),
// 					outerHeight: s.outerHeight(),
// 					outerWidth: s.outerWidth()
// 				},
// 				u = {
// 					y: "horizontal" !== r ? o / 100 : 1,
// 					x: "vertical" !== r ? o / 100 : 1
// 				};
// 			n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
// 				height: 0,
// 				width: 0,
// 				outerHeight: 0,
// 				outerWidth: 0
// 			} : l), n.to = {
// 				height: l.height * u.y,
// 				width: l.width * u.x,
// 				outerHeight: l.outerHeight * u.y,
// 				outerWidth: l.outerWidth * u.x
// 			}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
// 		}, e.effects.effect.puff = function (t, i) {
// 			var s = e(this),
// 				n = e.effects.setMode(s, t.mode || "hide"),
// 				a = "hide" === n,
// 				o = parseInt(t.percent, 10) || 150,
// 				r = o / 100,
// 				h = {
// 					height: s.height(),
// 					width: s.width(),
// 					outerHeight: s.outerHeight(),
// 					outerWidth: s.outerWidth()
// 				};
// 			e.extend(t, {
// 				effect: "scale",
// 				queue: !1,
// 				fade: !0,
// 				mode: n,
// 				complete: i,
// 				percent: a ? o : 100,
// 				from: a ? h : {
// 					height: h.height * r,
// 					width: h.width * r,
// 					outerHeight: h.outerHeight * r,
// 					outerWidth: h.outerWidth * r
// 				}
// 			}), s.effect(t)
// 		}, e.effects.effect.pulsate = function (t, i) {
// 			var s, n = e(this),
// 				a = e.effects.setMode(n, t.mode || "show"),
// 				o = "show" === a,
// 				r = "hide" === a,
// 				h = o || "hide" === a,
// 				l = 2 * (t.times || 5) + (h ? 1 : 0),
// 				u = t.duration / l,
// 				d = 0,
// 				c = n.queue(),
// 				p = c.length;
// 			for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({
// 				opacity: d
// 			}, u, t.easing), d = 1 - d;
// 			n.animate({
// 				opacity: d
// 			}, u, t.easing), n.queue(function () {
// 				r && n.hide(), i()
// 			}), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
// 		}, e.effects.effect.shake = function (t, i) {
// 			var s, n = e(this),
// 				a = ["position", "top", "bottom", "left", "right", "height", "width"],
// 				o = e.effects.setMode(n, t.mode || "effect"),
// 				r = t.direction || "left",
// 				h = t.distance || 20,
// 				l = t.times || 3,
// 				u = 2 * l + 1,
// 				d = Math.round(t.duration / u),
// 				c = "up" === r || "down" === r ? "top" : "left",
// 				p = "up" === r || "left" === r,
// 				f = {},
// 				m = {},
// 				g = {},
// 				v = n.queue(),
// 				y = v.length;
// 			for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
// 			n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
// 				"hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
// 			}), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
// 		}, e.effects.effect.slide = function (t, i) {
// 			var s, n = e(this),
// 				a = ["position", "top", "bottom", "left", "right", "width", "height"],
// 				o = e.effects.setMode(n, t.mode || "show"),
// 				r = "show" === o,
// 				h = t.direction || "left",
// 				l = "up" === h || "down" === h ? "top" : "left",
// 				u = "up" === h || "left" === h,
// 				d = {};
// 			e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
// 				overflow: "hidden"
// 			}), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
// 				queue: !1,
// 				duration: t.duration,
// 				easing: t.easing,
// 				complete: function () {
// 					"hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
// 				}
// 			})
// 		}, e.effects.effect.transfer = function (t, i) {
// 			var s = e(this),
// 				n = e(t.to),
// 				a = "fixed" === n.css("position"),
// 				o = e("body"),
// 				r = a ? o.scrollTop() : 0,
// 				h = a ? o.scrollLeft() : 0,
// 				l = n.offset(),
// 				u = {
// 					top: l.top - r,
// 					left: l.left - h,
// 					height: n.innerHeight(),
// 					width: n.innerWidth()
// 				},
// 				d = s.offset(),
// 				c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
// 					top: d.top - r,
// 					left: d.left - h,
// 					height: s.innerHeight(),
// 					width: s.innerWidth(),
// 					position: a ? "fixed" : "absolute"
// 				}).animate(u, t.duration, t.easing, function () {
// 					c.remove(), i()
// 				})
// 		}, e.widget("ui.progressbar", {
// 			version: "1.11.1",
// 			options: {
// 				max: 100,
// 				value: 0,
// 				change: null,
// 				complete: null
// 			},
// 			min: 0,
// 			_create: function () {
// 				this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
// 					role: "progressbar",
// 					"aria-valuemin": this.min
// 				}), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
// 			},
// 			_destroy: function () {
// 				this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
// 			},
// 			value: function (e) {
// 				return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
// 			},
// 			_constrainedValue: function (e) {
// 				return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
// 			},
// 			_setOptions: function (e) {
// 				var t = e.value;
// 				delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
// 			},
// 			_setOption: function (e, t) {
// 				"max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
// 			},
// 			_percentage: function () {
// 				return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
// 			},
// 			_refreshValue: function () {
// 				var t = this.options.value,
// 					i = this._percentage();
// 				this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
// 					"aria-valuemax": this.options.max,
// 					"aria-valuenow": t
// 				}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
// 			}
// 		}), e.widget("ui.selectable", e.ui.mouse, {
// 			version: "1.11.1",
// 			options: {
// 				appendTo: "body",
// 				autoRefresh: !0,
// 				distance: 0,
// 				filter: "*",
// 				tolerance: "touch",
// 				selected: null,
// 				selecting: null,
// 				start: null,
// 				stop: null,
// 				unselected: null,
// 				unselecting: null
// 			},
// 			_create: function () {
// 				var t, i = this;
// 				this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
// 					t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
// 						var t = e(this),
// 							i = t.offset();
// 						e.data(this, "selectable-item", {
// 							element: this,
// 							$element: t,
// 							left: i.left,
// 							top: i.top,
// 							right: i.left + t.outerWidth(),
// 							bottom: i.top + t.outerHeight(),
// 							startselected: !1,
// 							selected: t.hasClass("ui-selected"),
// 							selecting: t.hasClass("ui-selecting"),
// 							unselecting: t.hasClass("ui-unselecting")
// 						})
// 					})
// 				}, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
// 			},
// 			_destroy: function () {
// 				this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
// 			},
// 			_mouseStart: function (t) {
// 				var i = this,
// 					s = this.options;
// 				this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
// 					left: t.pageX,
// 					top: t.pageY,
// 					width: 0,
// 					height: 0
// 				}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
// 					var s = e.data(this, "selectable-item");
// 					s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
// 						unselecting: s.element
// 					}))
// 				}), e(t.target).parents().addBack().each(function () {
// 					var s, n = e.data(this, "selectable-item");
// 					return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
// 						selecting: n.element
// 					}) : i._trigger("unselecting", t, {
// 						unselecting: n.element
// 					}), !1) : void 0
// 				}))
// 			},
// 			_mouseDrag: function (t) {
// 				if (this.dragged = !0, !this.options.disabled) {
// 					var i, s = this,
// 						n = this.options,
// 						a = this.opos[0],
// 						o = this.opos[1],
// 						r = t.pageX,
// 						h = t.pageY;
// 					return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
// 						left: a,
// 						top: o,
// 						width: r - a,
// 						height: h - o
// 					}), this.selectees.each(function () {
// 						var i = e.data(this, "selectable-item"),
// 							l = !1;
// 						i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
// 							selecting: i.element
// 						}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
// 							unselecting: i.element
// 						}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
// 							unselecting: i.element
// 						})))))
// 					}), !1
// 				}
// 			},
// 			_mouseStop: function (t) {
// 				var i = this;
// 				return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
// 					var s = e.data(this, "selectable-item");
// 					s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
// 						unselected: s.element
// 					})
// 				}), e(".ui-selecting", this.element[0]).each(function () {
// 					var s = e.data(this, "selectable-item");
// 					s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
// 						selected: s.element
// 					})
// 				}), this._trigger("stop", t), this.helper.remove(), !1
// 			}
// 		}), e.widget("ui.selectmenu", {
// 			version: "1.11.1",
// 			defaultElement: "<select>",
// 			options: {
// 				appendTo: null,
// 				disabled: null,
// 				icons: {
// 					button: "ui-icon-triangle-1-s"
// 				},
// 				position: {
// 					my: "left top",
// 					at: "left bottom",
// 					collision: "none"
// 				},
// 				width: null,
// 				change: null,
// 				close: null,
// 				focus: null,
// 				open: null,
// 				select: null
// 			},
// 			_create: function () {
// 				var e = this.element.uniqueId().attr("id");
// 				this.ids = {
// 					element: e,
// 					button: e + "-button",
// 					menu: e + "-menu"
// 				}, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
// 			},
// 			_drawButton: function () {
// 				var t = this,
// 					i = this.element.attr("tabindex");
// 				this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
// 					click: function (e) {
// 						this.button.focus(), e.preventDefault()
// 					}
// 				}), this.element.hide(), this.button = e("<span>", {
// 					"class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
// 					tabindex: i || this.options.disabled ? -1 : 0,
// 					id: this.ids.button,
// 					role: "combobox",
// 					"aria-expanded": "false",
// 					"aria-autocomplete": "list",
// 					"aria-owns": this.ids.menu,
// 					"aria-haspopup": "true"
// 				}).insertAfter(this.element), e("<span>", {
// 					"class": "ui-icon " + this.options.icons.button
// 				}).prependTo(this.button), this.buttonText = e("<span>", {
// 					"class": "ui-selectmenu-text"
// 				}).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
// 					t.menuItems || t._refreshMenu()
// 				}), this._hoverable(this.button), this._focusable(this.button)
// 			},
// 			_drawMenu: function () {
// 				var t = this;
// 				this.menu = e("<ul>", {
// 					"aria-hidden": "true",
// 					"aria-labelledby": this.ids.button,
// 					id: this.ids.menu
// 				}), this.menuWrap = e("<div>", {
// 					"class": "ui-selectmenu-menu ui-front"
// 				}).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
// 					role: "listbox",
// 					select: function (e, i) {
// 						e.preventDefault(), t._select(i.item.data("ui-selectmenu-item"), e)
// 					},
// 					focus: function (e, i) {
// 						var s = i.item.data("ui-selectmenu-item");
// 						null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {
// 							item: s
// 						}), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
// 					}
// 				}).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
// 					return !1
// 				}, this.menuInstance._isDivider = function () {
// 					return !1
// 				}
// 			},
// 			refresh: function () {
// 				this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
// 			},
// 			_refreshMenu: function () {
// 				this.menu.empty();
// 				var e, t = this.element.find("option");
// 				t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
// 			},
// 			open: function (e) {
// 				this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
// 			},
// 			_position: function () {
// 				this.menuWrap.position(e.extend({
// 					of: this.button
// 				}, this.options.position))
// 			},
// 			close: function (e) {
// 				this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", e))
// 			},
// 			widget: function () {
// 				return this.button
// 			},
// 			menuWidget: function () {
// 				return this.menu
// 			},
// 			_renderMenu: function (t, i) {
// 				var s = this,
// 					n = "";
// 				e.each(i, function (i, a) {
// 					a.optgroup !== n && (e("<li>", {
// 						"class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
// 						text: a.optgroup
// 					}).appendTo(t), n = a.optgroup), s._renderItemData(t, a)
// 				})
// 			},
// 			_renderItemData: function (e, t) {
// 				return this._renderItem(e, t).data("ui-selectmenu-item", t)
// 			},
// 			_renderItem: function (t, i) {
// 				var s = e("<li>");
// 				return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t)
// 			},
// 			_setText: function (e, t) {
// 				t ? e.text(t) : e.html("&#160;")
// 			},
// 			_move: function (e, t) {
// 				var i, s, n = ".ui-menu-item";
// 				this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s)
// 			},
// 			_getSelectedItem: function () {
// 				return this.menuItems.eq(this.element[0].selectedIndex)
// 			},
// 			_toggle: function (e) {
// 				this[this.isOpen ? "close" : "open"](e)
// 			},
// 			_documentClick: {
// 				mousedown: function (t) {
// 					this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
// 				}
// 			},
// 			_buttonEvents: {
// 				mousedown: function (e) {
// 					e.preventDefault()
// 				},
// 				click: "_toggle",
// 				keydown: function (t) {
// 					var i = !0;
// 					switch (t.keyCode) {
// 						case e.ui.keyCode.TAB:
// 						case e.ui.keyCode.ESCAPE:
// 							this.close(t), i = !1;
// 							break;
// 						case e.ui.keyCode.ENTER:
// 							this.isOpen && this._selectFocusedItem(t);
// 							break;
// 						case e.ui.keyCode.UP:
// 							t.altKey ? this._toggle(t) : this._move("prev", t);
// 							break;
// 						case e.ui.keyCode.DOWN:
// 							t.altKey ? this._toggle(t) : this._move("next", t);
// 							break;
// 						case e.ui.keyCode.SPACE:
// 							this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
// 							break;
// 						case e.ui.keyCode.LEFT:
// 							this._move("prev", t);
// 							break;
// 						case e.ui.keyCode.RIGHT:
// 							this._move("next", t);
// 							break;
// 						case e.ui.keyCode.HOME:
// 						case e.ui.keyCode.PAGE_UP:
// 							this._move("first", t);
// 							break;
// 						case e.ui.keyCode.END:
// 						case e.ui.keyCode.PAGE_DOWN:
// 							this._move("last", t);
// 							break;
// 						default:
// 							this.menu.trigger(t), i = !1
// 					}
// 					i && t.preventDefault()
// 				}
// 			},
// 			_selectFocusedItem: function (e) {
// 				var t = this.menuItems.eq(this.focusIndex);
// 				t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
// 			},
// 			_select: function (e, t) {
// 				var i = this.element[0].selectedIndex;
// 				this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
// 					item: e
// 				}), e.index !== i && this._trigger("change", t, {
// 					item: e
// 				}), this.close(t)
// 			},
// 			_setAria: function (e) {
// 				var t = this.menuItems.eq(e.index).attr("id");
// 				this.button.attr({
// 					"aria-labelledby": t,
// 					"aria-activedescendant": t
// 				}), this.menu.attr("aria-activedescendant", t)
// 			},
// 			_setOption: function (e, t) {
// 				"icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
// 			},
// 			_appendTo: function () {
// 				var t = this.options.appendTo;
// 				return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
// 			},
// 			_toggleAttr: function () {
// 				this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
// 			},
// 			_resizeButton: function () {
// 				var e = this.options.width;
// 				e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
// 			},
// 			_resizeMenu: function () {
// 				this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
// 			},
// 			_getCreateOptions: function () {
// 				return {
// 					disabled: this.element.prop("disabled")
// 				}
// 			},
// 			_parseOptions: function (t) {
// 				var i = [];
// 				t.each(function (t, s) {
// 					var n = e(s),
// 						a = n.parent("optgroup");
// 					i.push({
// 						element: n,
// 						index: t,
// 						value: n.attr("value"),
// 						label: n.text(),
// 						optgroup: a.attr("label") || "",
// 						disabled: a.prop("disabled") || n.prop("disabled")
// 					})
// 				}), this.items = i
// 			},
// 			_destroy: function () {
// 				this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
// 			}
// 		}), e.widget("ui.slider", e.ui.mouse, {
// 			version: "1.11.1",
// 			widgetEventPrefix: "slide",
// 			options: {
// 				animate: !1,
// 				distance: 0,
// 				max: 100,
// 				min: 0,
// 				orientation: "horizontal",
// 				range: !1,
// 				step: 1,
// 				value: 0,
// 				values: null,
// 				change: null,
// 				slide: null,
// 				start: null,
// 				stop: null
// 			},
// 			numPages: 5,
// 			_create: function () {
// 				this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
// 			},
// 			_refresh: function () {
// 				this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
// 			},
// 			_createHandles: function () {
// 				var t, i, s = this.options,
// 					n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
// 					a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
// 					o = [];
// 				for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
// 				this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
// 					e(this).data("ui-slider-handle-index", t)
// 				})
// 			},
// 			_createRange: function () {
// 				var t = this.options,
// 					i = "";
// 				t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
// 					left: "",
// 					bottom: ""
// 				}) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
// 			},
// 			_setupEvents: function () {
// 				this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
// 			},
// 			_destroy: function () {
// 				this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
// 			},
// 			_mouseCapture: function (t) {
// 				var i, s, n, a, o, r, h, l, u = this,
// 					d = this.options;
// 				return d.disabled ? !1 : (this.elementSize = {
// 					width: this.element.outerWidth(),
// 					height: this.element.outerHeight()
// 				}, this.elementOffset = this.element.offset(), i = {
// 					x: t.pageX,
// 					y: t.pageY
// 				}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
// 					var i = Math.abs(s - u.values(t));
// 					(n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
// 				}), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
// 					left: 0,
// 					top: 0
// 				} : {
// 					left: t.pageX - h.left - a.width() / 2,
// 					top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
// 				}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
// 			},
// 			_mouseStart: function () {
// 				return !0
// 			},
// 			_mouseDrag: function (e) {
// 				var t = {
// 						x: e.pageX,
// 						y: e.pageY
// 					},
// 					i = this._normValueFromMouse(t);
// 				return this._slide(e, this._handleIndex, i), !1
// 			},
// 			_mouseStop: function (e) {
// 				return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
// 			},
// 			_detectOrientation: function () {
// 				this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
// 			},
// 			_normValueFromMouse: function (e) {
// 				var t, i, s, n, a;
// 				return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
// 			},
// 			_start: function (e, t) {
// 				var i = {
// 					handle: this.handles[t],
// 					value: this.value()
// 				};
// 				return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
// 			},
// 			_slide: function (e, t, i) {
// 				var s, n, a;
// 				this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
// 					handle: this.handles[t],
// 					value: i,
// 					values: n
// 				}), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
// 					handle: this.handles[t],
// 					value: i
// 				}), a !== !1 && this.value(i))
// 			},
// 			_stop: function (e, t) {
// 				var i = {
// 					handle: this.handles[t],
// 					value: this.value()
// 				};
// 				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
// 			},
// 			_change: function (e, t) {
// 				if (!this._keySliding && !this._mouseSliding) {
// 					var i = {
// 						handle: this.handles[t],
// 						value: this.value()
// 					};
// 					this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
// 				}
// 			},
// 			value: function (e) {
// 				return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
// 			},
// 			values: function (t, i) {
// 				var s, n, a;
// 				if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
// 				if (!arguments.length) return this._values();
// 				if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
// 				for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
// 				this._refreshValue()
// 			},
// 			_setOption: function (t, i) {
// 				var s, n = 0;
// 				switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
// 					case "orientation":
// 						this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
// 						break;
// 					case "value":
// 						this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
// 						break;
// 					case "values":
// 						for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
// 						this._animateOff = !1;
// 						break;
// 					case "min":
// 					case "max":
// 						this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
// 						break;
// 					case "range":
// 						this._animateOff = !0, this._refresh(), this._animateOff = !1
// 				}
// 			},
// 			_value: function () {
// 				var e = this.options.value;
// 				return e = this._trimAlignValue(e)
// 			},
// 			_values: function (e) {
// 				var t, i, s;
// 				if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
// 				if (this.options.values && this.options.values.length) {
// 					for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
// 					return i
// 				}
// 				return []
// 			},
// 			_trimAlignValue: function (e) {
// 				if (this._valueMin() >= e) return this._valueMin();
// 				if (e >= this._valueMax()) return this._valueMax();
// 				var t = this.options.step > 0 ? this.options.step : 1,
// 					i = (e - this._valueMin()) % t,
// 					s = e - i;
// 				return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
// 			},
// 			_valueMin: function () {
// 				return this.options.min
// 			},
// 			_valueMax: function () {
// 				return this.options.max
// 			},
// 			_refreshValue: function () {
// 				var t, i, s, n, a, o = this.options.range,
// 					r = this.options,
// 					h = this,
// 					l = this._animateOff ? !1 : r.animate,
// 					u = {};
// 				this.options.values && this.options.values.length ? this.handles.each(function (s) {
// 					i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
// 						left: i + "%"
// 					}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
// 						width: i - t + "%"
// 					}, {
// 						queue: !1,
// 						duration: r.animate
// 					})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
// 						bottom: i + "%"
// 					}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
// 						height: i - t + "%"
// 					}, {
// 						queue: !1,
// 						duration: r.animate
// 					}))), t = i
// 				}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
// 					width: i + "%"
// 				}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
// 					width: 100 - i + "%"
// 				}, {
// 					queue: !1,
// 					duration: r.animate
// 				}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
// 					height: i + "%"
// 				}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
// 					height: 100 - i + "%"
// 				}, {
// 					queue: !1,
// 					duration: r.animate
// 				}))
// 			},
// 			_handleEvents: {
// 				keydown: function (t) {
// 					var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
// 					switch (t.keyCode) {
// 						case e.ui.keyCode.HOME:
// 						case e.ui.keyCode.END:
// 						case e.ui.keyCode.PAGE_UP:
// 						case e.ui.keyCode.PAGE_DOWN:
// 						case e.ui.keyCode.UP:
// 						case e.ui.keyCode.RIGHT:
// 						case e.ui.keyCode.DOWN:
// 						case e.ui.keyCode.LEFT:
// 							if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
// 					}
// 					switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
// 						case e.ui.keyCode.HOME:
// 							n = this._valueMin();
// 							break;
// 						case e.ui.keyCode.END:
// 							n = this._valueMax();
// 							break;
// 						case e.ui.keyCode.PAGE_UP:
// 							n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
// 							break;
// 						case e.ui.keyCode.PAGE_DOWN:
// 							n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
// 							break;
// 						case e.ui.keyCode.UP:
// 						case e.ui.keyCode.RIGHT:
// 							if (s === this._valueMax()) return;
// 							n = this._trimAlignValue(s + a);
// 							break;
// 						case e.ui.keyCode.DOWN:
// 						case e.ui.keyCode.LEFT:
// 							if (s === this._valueMin()) return;
// 							n = this._trimAlignValue(s - a)
// 					}
// 					this._slide(t, o, n)
// 				},
// 				keyup: function (t) {
// 					var i = e(t.target).data("ui-slider-handle-index");
// 					this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
// 				}
// 			}
// 		}), e.widget("ui.sortable", e.ui.mouse, {
// 			version: "1.11.1",
// 			widgetEventPrefix: "sort",
// 			ready: !1,
// 			options: {
// 				appendTo: "parent",
// 				axis: !1,
// 				connectWith: !1,
// 				containment: !1,
// 				cursor: "auto",
// 				cursorAt: !1,
// 				dropOnEmpty: !0,
// 				forcePlaceholderSize: !1,
// 				forceHelperSize: !1,
// 				grid: !1,
// 				handle: !1,
// 				helper: "original",
// 				items: "> *",
// 				opacity: !1,
// 				placeholder: !1,
// 				revert: !1,
// 				scroll: !0,
// 				scrollSensitivity: 20,
// 				scrollSpeed: 20,
// 				scope: "default",
// 				tolerance: "intersect",
// 				zIndex: 1e3,
// 				activate: null,
// 				beforeStop: null,
// 				change: null,
// 				deactivate: null,
// 				out: null,
// 				over: null,
// 				receive: null,
// 				remove: null,
// 				sort: null,
// 				start: null,
// 				stop: null,
// 				update: null
// 			},
// 			_isOverAxis: function (e, t, i) {
// 				return e >= t && t + i > e
// 			},
// 			_isFloating: function (e) {
// 				return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
// 			},
// 			_create: function () {
// 				var e = this.options;
// 				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
// 			},
// 			_setOption: function (e, t) {
// 				this._super(e, t), "handle" === e && this._setHandleClassName()
// 			},
// 			_setHandleClassName: function () {
// 				this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
// 					(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
// 				})
// 			},
// 			_destroy: function () {
// 				this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
// 				for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
// 				return this
// 			},
// 			_mouseCapture: function (t, i) {
// 				var s = null,
// 					n = !1,
// 					a = this;
// 				return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
// 					return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
// 				}), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
// 					this === t.target && (n = !0)
// 				}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
// 			},
// 			_mouseStart: function (t, i, s) {
// 				var n, a, o = this.options;
// 				if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
// 						top: this.offset.top - this.margins.top,
// 						left: this.offset.left - this.margins.left
// 					}, e.extend(this.offset, {
// 						click: {
// 							left: t.pageX - this.offset.left,
// 							top: t.pageY - this.offset.top
// 						},
// 						parent: this._getParentOffset(),
// 						relative: this._getRelativeOffset()
// 					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
// 						prev: this.currentItem.prev()[0],
// 						parent: this.currentItem.parent()[0]
// 					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
// 					for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
// 				return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
// 			},
// 			_mouseDrag: function (t) {
// 				var i, s, n, a, o = this.options,
// 					r = !1;
// 				for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
// 					if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
// 						if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
// 						this._rearrange(t, s), this._trigger("change", t, this._uiHash());
// 						break
// 					} return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
// 			},
// 			_mouseStop: function (t, i) {
// 				if (t) {
// 					if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
// 						var s = this,
// 							n = this.placeholder.offset(),
// 							a = this.options.axis,
// 							o = {};
// 						a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
// 							s._clear(t)
// 						})
// 					} else this._clear(t, i);
// 					return !1
// 				}
// 			},
// 			cancel: function () {
// 				if (this.dragging) {
// 					this._mouseUp({
// 						target: null
// 					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
// 					for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
// 				}
// 				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
// 					helper: null,
// 					dragging: !1,
// 					reverting: !1,
// 					_noFinalSort: null
// 				}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
// 			},
// 			serialize: function (t) {
// 				var i = this._getItemsAsjQuery(t && t.connected),
// 					s = [];
// 				return t = t || {}, e(i).each(function () {
// 					var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
// 					i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
// 				}), !s.length && t.key && s.push(t.key + "="), s.join("&")
// 			},
// 			toArray: function (t) {
// 				var i = this._getItemsAsjQuery(t && t.connected),
// 					s = [];
// 				return t = t || {}, i.each(function () {
// 					s.push(e(t.item || this).attr(t.attribute || "id") || "")
// 				}), s
// 			},
// 			_intersectsWith: function (e) {
// 				var t = this.positionAbs.left,
// 					i = t + this.helperProportions.width,
// 					s = this.positionAbs.top,
// 					n = s + this.helperProportions.height,
// 					a = e.left,
// 					o = a + e.width,
// 					r = e.top,
// 					h = r + e.height,
// 					l = this.offset.click.top,
// 					u = this.offset.click.left,
// 					d = "x" === this.options.axis || s + l > r && h > s + l,
// 					c = "y" === this.options.axis || t + u > a && o > t + u,
// 					p = d && c;
// 				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
// 			},
// 			_intersectsWithPointer: function (e) {
// 				var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
// 					i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
// 					s = t && i,
// 					n = this._getDragVerticalDirection(),
// 					a = this._getDragHorizontalDirection();
// 				return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
// 			},
// 			_intersectsWithSides: function (e) {
// 				var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
// 					i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
// 					s = this._getDragVerticalDirection(),
// 					n = this._getDragHorizontalDirection();
// 				return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
// 			},
// 			_getDragVerticalDirection: function () {
// 				var e = this.positionAbs.top - this.lastPositionAbs.top;
// 				return 0 !== e && (e > 0 ? "down" : "up")
// 			},
// 			_getDragHorizontalDirection: function () {
// 				var e = this.positionAbs.left - this.lastPositionAbs.left;
// 				return 0 !== e && (e > 0 ? "right" : "left")
// 			},
// 			refresh: function (e) {
// 				return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
// 			},
// 			_connectWith: function () {
// 				var e = this.options;
// 				return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
// 			},
// 			_getItemsAsjQuery: function (t) {
// 				function i() {
// 					r.push(this)
// 				}
// 				var s, n, a, o, r = [],
// 					h = [],
// 					l = this._connectWith();
// 				if (l && t)
// 					for (s = l.length - 1; s >= 0; s--)
// 						for (a = e(l[s]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
// 				for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
// 						options: this.options,
// 						item: this.currentItem
// 					}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
// 				return e(r)
// 			},
// 			_removeCurrentsFromItems: function () {
// 				var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
// 				this.items = e.grep(this.items, function (e) {
// 					for (var i = 0; t.length > i; i++)
// 						if (t[i] === e.item[0]) return !1;
// 					return !0
// 				})
// 			},
// 			_refreshItems: function (t) {
// 				this.items = [], this.containers = [this];
// 				var i, s, n, a, o, r, h, l, u = this.items,
// 					d = [
// 						[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
// 							item: this.currentItem
// 						}) : e(this.options.items, this.element), this]
// 					],
// 					c = this._connectWith();
// 				if (c && this.ready)
// 					for (i = c.length - 1; i >= 0; i--)
// 						for (n = e(c[i]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
// 							item: this.currentItem
// 						}) : e(a.options.items, a.element), a]), this.containers.push(a));
// 				for (i = d.length - 1; i >= 0; i--)
// 					for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
// 						item: h,
// 						instance: o,
// 						width: 0,
// 						height: 0,
// 						left: 0,
// 						top: 0
// 					})
// 			},
// 			refreshPositions: function (t) {
// 				this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
// 				var i, s, n, a;
// 				for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
// 				if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
// 				else
// 					for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
// 				return this
// 			},
// 			_createPlaceholder: function (t) {
// 				t = t || this;
// 				var i, s = t.options;
// 				s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
// 					element: function () {
// 						var s = t.currentItem[0].nodeName.toLowerCase(),
// 							n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
// 						return "tr" === s ? t.currentItem.children().each(function () {
// 							e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
// 						}) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
// 					},
// 					update: function (e, n) {
// 						(!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
// 					}
// 				}), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
// 			},
// 			_contactContainers: function (t) {
// 				var i, s, n, a, o, r, h, l, u, d, c = null,
// 					p = null;
// 				for (i = this.containers.length - 1; i >= 0; i--)
// 					if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
// 						if (this._intersectsWith(this.containers[i].containerCache)) {
// 							if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
// 							c = this.containers[i], p = i
// 						} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
// 				if (c)
// 					if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
// 					else {
// 						for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
// 						if (!a && !this.options.dropOnEmpty) return;
// 						if (this.currentContainer === this.containers[p]) return;
// 						a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
// 					}
// 			},
// 			_createHelper: function (t) {
// 				var i = this.options,
// 					s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
// 				return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
// 					width: this.currentItem[0].style.width,
// 					height: this.currentItem[0].style.height,
// 					position: this.currentItem.css("position"),
// 					top: this.currentItem.css("top"),
// 					left: this.currentItem.css("left")
// 				}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
// 			},
// 			_adjustOffsetFromHelper: function (t) {
// 				"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
// 					left: +t[0],
// 					top: +t[1] || 0
// 				}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
// 			},
// 			_getParentOffset: function () {
// 				this.offsetParent = this.helper.offsetParent();
// 				var t = this.offsetParent.offset();
// 				return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
// 					top: 0,
// 					left: 0
// 				}), {
// 					top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
// 					left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
// 				}
// 			},
// 			_getRelativeOffset: function () {
// 				if ("relative" === this.cssPosition) {
// 					var e = this.currentItem.position();
// 					return {
// 						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
// 						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
// 					}
// 				}
// 				return {
// 					top: 0,
// 					left: 0
// 				}
// 			},
// 			_cacheMargins: function () {
// 				this.margins = {
// 					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
// 					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
// 				}
// 			},
// 			_cacheHelperProportions: function () {
// 				this.helperProportions = {
// 					width: this.helper.outerWidth(),
// 					height: this.helper.outerHeight()
// 				}
// 			},
// 			_setContainment: function () {
// 				var t, i, s, n = this.options;
// 				"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
// 			},
// 			_convertPositionTo: function (t, i) {
// 				i || (i = this.position);
// 				var s = "absolute" === t ? 1 : -1,
// 					n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
// 					a = /(html|body)/i.test(n[0].tagName);
// 				return {
// 					top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
// 					left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
// 				}
// 			},
// 			_generatePosition: function (t) {
// 				var i, s, n = this.options,
// 					a = t.pageX,
// 					o = t.pageY,
// 					r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
// 					h = /(html|body)/i.test(r[0].tagName);
// 				return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
// 					top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
// 					left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
// 				}
// 			},
// 			_rearrange: function (e, t, i, s) {
// 				i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
// 				var n = this.counter;
// 				this._delay(function () {
// 					n === this.counter && this.refreshPositions(!s)
// 				})
// 			},
// 			_clear: function (e, t) {
// 				function i(e, t, i) {
// 					return function (s) {
// 						i._trigger(e, s, t._uiHash(t))
// 					}
// 				}
// 				this.reverting = !1;
// 				var s, n = [];
// 				if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
// 					for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
// 					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
// 				} else this.currentItem.show();
// 				for (this.fromOutside && !t && n.push(function (e) {
// 						this._trigger("receive", e, this._uiHash(this.fromOutside))
// 					}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
// 						this._trigger("update", e, this._uiHash())
// 					}), this !== this.currentContainer && (t || (n.push(function (e) {
// 						this._trigger("remove", e, this._uiHash())
// 					}), n.push(function (e) {
// 						return function (t) {
// 							e._trigger("receive", t, this._uiHash(this))
// 						}
// 					}.call(this, this.currentContainer)), n.push(function (e) {
// 						return function (t) {
// 							e._trigger("update", t, this._uiHash(this))
// 						}
// 					}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
// 				if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
// 					if (!t) {
// 						for (this._trigger("beforeStop", e, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, e);
// 						this._trigger("stop", e, this._uiHash())
// 					}
// 					return this.fromOutside = !1, !1
// 				}
// 				if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
// 					for (s = 0; n.length > s; s++) n[s].call(this, e);
// 					this._trigger("stop", e, this._uiHash())
// 				}
// 				return this.fromOutside = !1, !0
// 			},
// 			_trigger: function () {
// 				e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
// 			},
// 			_uiHash: function (t) {
// 				var i = t || this;
// 				return {
// 					helper: i.helper,
// 					placeholder: i.placeholder || e([]),
// 					position: i.position,
// 					originalPosition: i.originalPosition,
// 					offset: i.positionAbs,
// 					item: i.currentItem,
// 					sender: t ? t.element : null
// 				}
// 			}
// 		}), e.widget("ui.spinner", {
// 			version: "1.11.1",
// 			defaultElement: "<input>",
// 			widgetEventPrefix: "spin",
// 			options: {
// 				culture: null,
// 				icons: {
// 					down: "ui-icon-triangle-1-s",
// 					up: "ui-icon-triangle-1-n"
// 				},
// 				incremental: !0,
// 				max: null,
// 				min: null,
// 				numberFormat: null,
// 				page: 10,
// 				step: 1,
// 				change: null,
// 				spin: null,
// 				start: null,
// 				stop: null
// 			},
// 			_create: function () {
// 				this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
// 					beforeunload: function () {
// 						this.element.removeAttr("autocomplete")
// 					}
// 				})
// 			},
// 			_getCreateOptions: function () {
// 				var t = {},
// 					i = this.element;
// 				return e.each(["min", "max", "step"], function (e, s) {
// 					var n = i.attr(s);
// 					void 0 !== n && n.length && (t[s] = n)
// 				}), t
// 			},
// 			_events: {
// 				keydown: function (e) {
// 					this._start(e) && this._keydown(e) && e.preventDefault()
// 				},
// 				keyup: "_stop",
// 				focus: function () {
// 					this.previous = this.element.val()
// 				},
// 				blur: function (e) {
// 					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
// 				},
// 				mousewheel: function (e, t) {
// 					if (t) {
// 						if (!this.spinning && !this._start(e)) return !1;
// 						this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
// 							this.spinning && this._stop(e)
// 						}, 100), e.preventDefault()
// 					}
// 				},
// 				"mousedown .ui-spinner-button": function (t) {
// 					function i() {
// 						var e = this.element[0] === this.document[0].activeElement;
// 						e || (this.element.focus(), this.previous = s, this._delay(function () {
// 							this.previous = s
// 						}))
// 					}
// 					var s;
// 					s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
// 						delete this.cancelBlur, i.call(this)
// 					}), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
// 				},
// 				"mouseup .ui-spinner-button": "_stop",
// 				"mouseenter .ui-spinner-button": function (t) {
// 					return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
// 				},
// 				"mouseleave .ui-spinner-button": "_stop"
// 			},
// 			_draw: function () {
// 				var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
// 				this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
// 			},
// 			_keydown: function (t) {
// 				var i = this.options,
// 					s = e.ui.keyCode;
// 				switch (t.keyCode) {
// 					case s.UP:
// 						return this._repeat(null, 1, t), !0;
// 					case s.DOWN:
// 						return this._repeat(null, -1, t), !0;
// 					case s.PAGE_UP:
// 						return this._repeat(null, i.page, t), !0;
// 					case s.PAGE_DOWN:
// 						return this._repeat(null, -i.page, t), !0
// 				}
// 				return !1
// 			},
// 			_uiSpinnerHtml: function () {
// 				return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
// 			},
// 			_buttonHtml: function () {
// 				return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
// 			},
// 			_start: function (e) {
// 				return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
// 			},
// 			_repeat: function (e, t, i) {
// 				e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
// 					this._repeat(40, t, i)
// 				}, e), this._spin(t * this.options.step, i)
// 			},
// 			_spin: function (e, t) {
// 				var i = this.value() || 0;
// 				this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
// 					value: i
// 				}) === !1 || (this._value(i), this.counter++)
// 			},
// 			_increment: function (t) {
// 				var i = this.options.incremental;
// 				return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
// 			},
// 			_precision: function () {
// 				var e = this._precisionOf(this.options.step);
// 				return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
// 			},
// 			_precisionOf: function (e) {
// 				var t = "" + e,
// 					i = t.indexOf(".");
// 				return -1 === i ? 0 : t.length - i - 1
// 			},
// 			_adjustValue: function (e) {
// 				var t, i, s = this.options;
// 				return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
// 			},
// 			_stop: function (e) {
// 				this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
// 			},
// 			_setOption: function (e, t) {
// 				if ("culture" === e || "numberFormat" === e) {
// 					var i = this._parse(this.element.val());
// 					return this.options[e] = t, this.element.val(this._format(i)), void 0
// 				}("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
// 			},
// 			_setOptions: h(function (e) {
// 				this._super(e)
// 			}),
// 			_parse: function (e) {
// 				return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
// 			},
// 			_format: function (e) {
// 				return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
// 			},
// 			_refresh: function () {
// 				this.element.attr({
// 					"aria-valuemin": this.options.min,
// 					"aria-valuemax": this.options.max,
// 					"aria-valuenow": this._parse(this.element.val())
// 				})
// 			},
// 			isValid: function () {
// 				var e = this.value();
// 				return null === e ? !1 : e === this._adjustValue(e)
// 			},
// 			_value: function (e, t) {
// 				var i;
// 				"" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
// 			},
// 			_destroy: function () {
// 				this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
// 			},
// 			stepUp: h(function (e) {
// 				this._stepUp(e)
// 			}),
// 			_stepUp: function (e) {
// 				this._start() && (this._spin((e || 1) * this.options.step), this._stop())
// 			},
// 			stepDown: h(function (e) {
// 				this._stepDown(e)
// 			}),
// 			_stepDown: function (e) {
// 				this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
// 			},
// 			pageUp: h(function (e) {
// 				this._stepUp((e || 1) * this.options.page)
// 			}),
// 			pageDown: h(function (e) {
// 				this._stepDown((e || 1) * this.options.page)
// 			}),
// 			value: function (e) {
// 				return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val())
// 			},
// 			widget: function () {
// 				return this.uiSpinner
// 			}
// 		}), e.widget("ui.tabs", {
// 			version: "1.11.1",
// 			delay: 300,
// 			options: {
// 				active: null,
// 				collapsible: !1,
// 				event: "click",
// 				heightStyle: "content",
// 				hide: null,
// 				show: null,
// 				activate: null,
// 				beforeActivate: null,
// 				beforeLoad: null,
// 				load: null
// 			},
// 			_isLocal: function () {
// 				var e = /#.*$/;
// 				return function (t) {
// 					var i, s;
// 					t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
// 					try {
// 						i = decodeURIComponent(i)
// 					} catch (n) {}
// 					try {
// 						s = decodeURIComponent(s)
// 					} catch (n) {}
// 					return t.hash.length > 1 && i === s
// 				}
// 			}(),
// 			_create: function () {
// 				var t = this,
// 					i = this.options;
// 				this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
// 					return t.tabs.index(e)
// 				}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
// 			},
// 			_initialActive: function () {
// 				var t = this.options.active,
// 					i = this.options.collapsible,
// 					s = location.hash.substring(1);
// 				return null === t && (s && this.tabs.each(function (i, n) {
// 					return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0
// 				}), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
// 			},
// 			_getCreateEventData: function () {
// 				return {
// 					tab: this.active,
// 					panel: this.active.length ? this._getPanelForTab(this.active) : e()
// 				}
// 			},
// 			_tabKeydown: function (t) {
// 				var i = e(this.document[0].activeElement).closest("li"),
// 					s = this.tabs.index(i),
// 					n = !0;
// 				if (!this._handlePageNav(t)) {
// 					switch (t.keyCode) {
// 						case e.ui.keyCode.RIGHT:
// 						case e.ui.keyCode.DOWN:
// 							s++;
// 							break;
// 						case e.ui.keyCode.UP:
// 						case e.ui.keyCode.LEFT:
// 							n = !1, s--;
// 							break;
// 						case e.ui.keyCode.END:
// 							s = this.anchors.length - 1;
// 							break;
// 						case e.ui.keyCode.HOME:
// 							s = 0;
// 							break;
// 						case e.ui.keyCode.SPACE:
// 							return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
// 						case e.ui.keyCode.ENTER:
// 							return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
// 						default:
// 							return
// 					}
// 					t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
// 						this.option("active", s)
// 					}, this.delay))
// 				}
// 			},
// 			_panelKeydown: function (t) {
// 				this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
// 			},
// 			_handlePageNav: function (t) {
// 				return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
// 			},
// 			_findNextTab: function (t, i) {
// 				function s() {
// 					return t > n && (t = 0), 0 > t && (t = n), t
// 				}
// 				for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
// 				return t
// 			},
// 			_focusNextTab: function (e, t) {
// 				return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
// 			},
// 			_setOption: function (e, t) {
// 				return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
// 			},
// 			_sanitizeSelector: function (e) {
// 				return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
// 			},
// 			refresh: function () {
// 				var t = this.options,
// 					i = this.tablist.children(":has(a[href])");
// 				t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
// 					return i.index(e)
// 				}), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
// 			},
// 			_refresh: function () {
// 				this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
// 					"aria-selected": "false",
// 					"aria-expanded": "false",
// 					tabIndex: -1
// 				}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
// 					"aria-hidden": "true"
// 				}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
// 					"aria-selected": "true",
// 					"aria-expanded": "true",
// 					tabIndex: 0
// 				}), this._getPanelForTab(this.active).show().attr({
// 					"aria-hidden": "false"
// 				})) : this.tabs.eq(0).attr("tabIndex", 0)
// 			},
// 			_processTabs: function () {
// 				var t = this;
// 				this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
// 					e(this).is(".ui-state-disabled") && t.preventDefault()
// 				}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
// 					e(this).closest("li").is(".ui-state-disabled") && this.blur()
// 				}), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
// 					role: "tab",
// 					tabIndex: -1
// 				}), this.anchors = this.tabs.map(function () {
// 					return e("a", this)[0]
// 				}).addClass("ui-tabs-anchor").attr({
// 					role: "presentation",
// 					tabIndex: -1
// 				}), this.panels = e(), this.anchors.each(function (i, s) {
// 					var n, a, o, r = e(s).uniqueId().attr("id"),
// 						h = e(s).closest("li"),
// 						l = h.attr("aria-controls");
// 					t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({
// 						"aria-controls": o,
// 						"aria-labelledby": r
// 					}), a.attr("aria-labelledby", r)
// 				}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
// 			},
// 			_getList: function () {
// 				return this.tablist || this.element.find("ol,ul").eq(0)
// 			},
// 			_createPanel: function (t) {
// 				return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
// 			},
// 			_setupDisabled: function (t) {
// 				e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
// 				for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
// 				this.options.disabled = t
// 			},
// 			_setupEvents: function (t) {
// 				var i = {};
// 				t && e.each(t.split(" "), function (e, t) {
// 					i[t] = "_eventHandler"
// 				}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
// 					click: function (e) {
// 						e.preventDefault()
// 					}
// 				}), this._on(this.anchors, i), this._on(this.tabs, {
// 					keydown: "_tabKeydown"
// 				}), this._on(this.panels, {
// 					keydown: "_panelKeydown"
// 				}), this._focusable(this.tabs), this._hoverable(this.tabs)
// 			},
// 			_setupHeightStyle: function (t) {
// 				var i, s = this.element.parent();
// 				"fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
// 					var t = e(this),
// 						s = t.css("position");
// 					"absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
// 				}), this.element.children().not(this.panels).each(function () {
// 					i -= e(this).outerHeight(!0)
// 				}), this.panels.each(function () {
// 					e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
// 				}).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
// 					i = Math.max(i, e(this).height("").height())
// 				}).height(i))
// 			},
// 			_eventHandler: function (t) {
// 				var i = this.options,
// 					s = this.active,
// 					n = e(t.currentTarget),
// 					a = n.closest("li"),
// 					o = a[0] === s[0],
// 					r = o && i.collapsible,
// 					h = r ? e() : this._getPanelForTab(a),
// 					l = s.length ? this._getPanelForTab(s) : e(),
// 					u = {
// 						oldTab: s,
// 						oldPanel: l,
// 						newTab: r ? e() : a,
// 						newPanel: h
// 					};
// 				t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
// 			},
// 			_toggle: function (t, i) {
// 				function s() {
// 					a.running = !1, a._trigger("activate", t, i)
// 				}

// 				function n() {
// 					i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
// 				}
// 				var a = this,
// 					o = i.newPanel,
// 					r = i.oldPanel;
// 				this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
// 					i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
// 				}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
// 					"aria-selected": "false",
// 					"aria-expanded": "false"
// 				}), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
// 					return 0 === e(this).attr("tabIndex")
// 				}).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
// 					"aria-selected": "true",
// 					"aria-expanded": "true",
// 					tabIndex: 0
// 				})
// 			},
// 			_activate: function (t) {
// 				var i, s = this._findActive(t);
// 				s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
// 					target: i,
// 					currentTarget: i,
// 					preventDefault: e.noop
// 				}))
// 			},
// 			_findActive: function (t) {
// 				return t === !1 ? e() : this.tabs.eq(t)
// 			},
// 			_getIndex: function (e) {
// 				return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
// 			},
// 			_destroy: function () {
// 				this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
// 					e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
// 				}), this.tabs.each(function () {
// 					var t = e(this),
// 						i = t.data("ui-tabs-aria-controls");
// 					i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
// 				}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
// 			},
// 			enable: function (t) {
// 				var i = this.options.disabled;
// 				i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
// 					return e !== t ? e : null
// 				}) : e.map(this.tabs, function (e, i) {
// 					return i !== t ? i : null
// 				})), this._setupDisabled(i))
// 			},
// 			disable: function (t) {
// 				var i = this.options.disabled;
// 				if (i !== !0) {
// 					if (void 0 === t) i = !0;
// 					else {
// 						if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
// 						i = e.isArray(i) ? e.merge([t], i).sort() : [t]
// 					}
// 					this._setupDisabled(i)
// 				}
// 			},
// 			load: function (t, i) {
// 				t = this._getIndex(t);
// 				var s = this,
// 					n = this.tabs.eq(t),
// 					a = n.find(".ui-tabs-anchor"),
// 					o = this._getPanelForTab(n),
// 					r = {
// 						tab: n,
// 						panel: o
// 					};
// 				this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function (e) {
// 					setTimeout(function () {
// 						o.html(e), s._trigger("load", i, r)
// 					}, 1)
// 				}).complete(function (e, t) {
// 					setTimeout(function () {
// 						"abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
// 					}, 1)
// 				})))
// 			},
// 			_ajaxSettings: function (t, i, s) {
// 				var n = this;
// 				return {
// 					url: t.attr("href"),
// 					beforeSend: function (t, a) {
// 						return n._trigger("beforeLoad", i, e.extend({
// 							jqXHR: t,
// 							ajaxSettings: a
// 						}, s))
// 					}
// 				}
// 			},
// 			_getPanelForTab: function (t) {
// 				var i = e(t).attr("aria-controls");
// 				return this.element.find(this._sanitizeSelector("#" + i))
// 			}
// 		}), e.widget("ui.tooltip", {
// 			version: "1.11.1",
// 			options: {
// 				content: function () {
// 					var t = e(this).attr("title") || "";
// 					return e("<a>").text(t).html()
// 				},
// 				hide: !0,
// 				items: "[title]:not([disabled])",
// 				position: {
// 					my: "left top+15",
// 					at: "left bottom",
// 					collision: "flipfit flip"
// 				},
// 				show: !0,
// 				tooltipClass: null,
// 				track: !1,
// 				close: null,
// 				open: null
// 			},
// 			_addDescribedBy: function (t, i) {
// 				var s = (t.attr("aria-describedby") || "").split(/\s+/);
// 				s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
// 			},
// 			_removeDescribedBy: function (t) {
// 				var i = t.data("ui-tooltip-id"),
// 					s = (t.attr("aria-describedby") || "").split(/\s+/),
// 					n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
// 			},
// 			_create: function () {
// 				this._on({
// 					mouseover: "open",
// 					focusin: "open"
// 				}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
// 					role: "log",
// 					"aria-live": "assertive",
// 					"aria-relevant": "additions"
// 				}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
// 			},
// 			_setOption: function (t, i) {
// 				var s = this;
// 				return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
// 					s._updateContent(t)
// 				}), void 0)
// 			},
// 			_disable: function () {
// 				var t = this;
// 				e.each(this.tooltips, function (i, s) {
// 					var n = e.Event("blur");
// 					n.target = n.currentTarget = s[0], t.close(n, !0)
// 				}), this.element.find(this.options.items).addBack().each(function () {
// 					var t = e(this);
// 					t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
// 				})
// 			},
// 			_enable: function () {
// 				this.element.find(this.options.items).addBack().each(function () {
// 					var t = e(this);
// 					t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
// 				})
// 			},
// 			open: function (t) {
// 				var i = this,
// 					s = e(t ? t.target : this.element).closest(this.options.items);
// 				s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
// 					var t, s = e(this);
// 					s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
// 						element: this,
// 						title: s.attr("title")
// 					}, s.attr("title", ""))
// 				}), this._updateContent(s, t))
// 			},
// 			_updateContent: function (e, t) {
// 				var i, s = this.options.content,
// 					n = this,
// 					a = t ? t.type : null;
// 				return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
// 					e.data("ui-tooltip-open") && n._delay(function () {
// 						t && (t.type = a), this._open(t, e, i)
// 					})
// 				}), i && this._open(t, e, i), void 0)
// 			},
// 			_open: function (t, i, s) {
// 				function n(e) {
// 					l.of = e, a.is(":hidden") || a.position(l)
// 				}
// 				var a, o, r, h, l = e.extend({}, this.options.position);
// 				if (s) {
// 					if (a = this._find(i), a.length) return a.find(".ui-tooltip-content").html(s), void 0;
// 					i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
// 						mousemove: n
// 					}), n(t)) : a.position(e.extend({
// 						of: i
// 					}, this.options.position)), this.hiding = !1, this.closing = !1, a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
// 						a.is(":visible") && (n(l.of), clearInterval(r))
// 					}, e.fx.interval)), this._trigger("open", t, {
// 						tooltip: a
// 					}), o = {
// 						keyup: function (t) {
// 							if (t.keyCode === e.ui.keyCode.ESCAPE) {
// 								var s = e.Event(t);
// 								s.currentTarget = i[0], this.close(s, !0)
// 							}
// 						}
// 					}, i[0] !== this.element[0] && (o.remove = function () {
// 						this._removeTooltip(a)
// 					}), t && "mouseover" !== t.type || (o.mouseleave = "close"), t && "focusin" !== t.type || (o.focusout = "close"), this._on(!0, i, o)
// 				}
// 			},
// 			close: function (t) {
// 				var i = this,
// 					s = e(t ? t.currentTarget : this.element),
// 					n = this._find(s);
// 				this.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), this.hiding = !0, n.stop(!0), this._hide(n, this.options.hide, function () {
// 					i._removeTooltip(e(this)), this.hiding = !1, this.closing = !1
// 				}), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, s) {
// 					e(s.element).attr("title", s.title), delete i.parents[t]
// 				}), this.closing = !0, this._trigger("close", t, {
// 					tooltip: n
// 				}), this.hiding || (this.closing = !1))
// 			},
// 			_tooltip: function (t) {
// 				var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
// 					s = i.uniqueId().attr("id");
// 				return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = t, i
// 			},
// 			_find: function (t) {
// 				var i = t.data("ui-tooltip-id");
// 				return i ? e("#" + i) : e()
// 			},
// 			_removeTooltip: function (e) {
// 				e.remove(), delete this.tooltips[e.attr("id")]
// 			},
// 			_destroy: function () {
// 				var t = this;
// 				e.each(this.tooltips, function (i, s) {
// 					var n = e.Event("blur");
// 					n.target = n.currentTarget = s[0], t.close(n, !0), e("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
// 				}), this.liveRegion.remove()
// 			}
// 		})
// });


//$.ui localization
jQuery(function ($) {
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Нед',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '',
		dateFormat: "dd.mm.yy" //"d M y"
	};
});

/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
;
(function (e) {
	function i(e, t) {
		if (e.originalEvent.touches.length > 1) {
			return
		}
		e.preventDefault();
		var n = e.originalEvent.changedTouches[0],
			r = document.createEvent("MouseEvents");
		r.initMouseEvent(t, true, true, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, false, false, false, false, 0, null);
		e.target.dispatchEvent(r)
	}
	e.support.touch = "ontouchend" in document;
	if (!e.support.touch) {
		return
	}
	var t = e.ui.mouse.prototype,
		n = t._mouseInit,
		r;
	t._touchStart = function (e) {
		var t = this;
		if (r || !t._mouseCapture(e.originalEvent.changedTouches[0])) {
			return
		}
		r = true;
		t._touchMoved = false;
		i(e, "mouseover");
		i(e, "mousemove");
		i(e, "mousedown")
	};
	t._touchMove = function (e) {
		if (!r) {
			return
		}
		this._touchMoved = true;
		i(e, "mousemove")
	};
	t._touchEnd = function (e) {
		if (!r) {
			return
		}
		i(e, "mouseup");
		i(e, "mouseout");
		if (!this._touchMoved) {
			i(e, "click")
		}
		r = false
	};
	t._mouseInit = function () {
		var t = this;
		t.element.bind("touchstart", e.proxy(t, "_touchStart")).bind("touchmove", e.proxy(t, "_touchMove")).bind("touchend", e.proxy(t, "_touchEnd"));
		n.call(t)
	}
})(jQuery);

/*Calc Interpolator 1.3, (c) ermouth*/
! function (global) {
	var calc, isA = Object.isArray,
		isB = Object.isBoolean,
		isS = Object.isString,
		isO = Object.isObject,
		isN = Object.isNumber,
		isR = Object.isRegExp,
		isF = Object.isFunction;
	global.calc || (global.calc = calc = {
		gen: function (a, b) {
			if (!isA(a) || !a.length) return null;
			var c, d, e = a.slice(0),
				f = e[0].length,
				g = e.length,
				h = e[0].slice(1).join("ᴥ").split("ᴥ"),
				i = e.map(function (a) {
					return a[0]
				}).slice(1).join("ᴥ").split("ᴥ");
			for (c = 1; g > c; c++)
				if (e[c].length < f) return null;
			if (2 > g) return null;
			var j = !1,
				k = !1;
			for (c = 1; f > c && !j; c++) j = isNaN(e[0][c]);
			for (c = 1; g > c && !k; c++) k = isNaN(e[c][0]);
			d = isF(b) ? b : function (a, b) {
				if (j && -1 == h.indexOf(a) || k && -1 == i.indexOf(b)) return !1;
				var c = !0;
				return !j && (a < e[0][1] || a > e[0][f - 1]) && (c = !1), c && !k && (b < e[1][0] || b > e[g - 1][0]) && (c = !1), c
			}, 2 != g || k || (e[2] = e[1].slice(0), e[2][0] += 1, g = 3);
			var l = function (a, b) {
				var c, l, m, n, o, p, q = j ? String(a) : Number(a) || 0,
					r = k ? String(b) : Number(b) || 0,
					s = [];
				if (!d(q, r)) return null;
				if (c = [
						[Number(e[0][0]) || 0],
						[],
						[]
					], o = 0, p = 0, j && k) return l = h.indexOf(q), m = i.indexOf(r), -1 == m || -1 == l ? null : (n = e[m + 1][l + 1], isNaN(n) ? null : c[0][0] ? c[0][0] * Math.round(n / c[0][0]) : n);
				if (j) o = h.indexOf(q) + 1, c[0][1] = 1, c[0][2] = 2;
				else
					for (l = 1; f - 1 > l; l++)(q >= e[0][l] && q <= e[0][l + 1] || 1 == l && q < e[0][1] || l == f - 2 && q > e[0][f - 1]) && (c[0][1] = e[0][l], c[0][2] = e[0][l + 1], o = l);
				if (o > 0) {
					if (k) l = i.indexOf(r) + 1, s = e[l], c[1] = [1, s[o], s[o + 1]], c[2] = [2, s[o], s[o + 1]], p = l;
					else
						for (l = 1; g - 1 > l; l++)(r >= e[l][0] && r <= e[l + 1][0] || 1 == l && r < e[1][0] || l == g - 2 && r > e[g - 1][0]) && (m = !(f - o != 1), s = e[l], c[1] = [s[0], s[o], m ? s[o] + 1 : s[o + 1]], s = e[l + 1], c[2] = [s[0], s[o], m ? s[o] + 1 : s[o + 1]], p = l);
					if (p > 0) {
						q = j ? 1 : q, r = k ? 1 : r;
						var t = c[0],
							u = c[1],
							v = c[2],
							w = u[1],
							x = v[1],
							y = u[0],
							z = v[0],
							A = t[2] - t[1],
							B = z - y,
							C = u[2] - u[1],
							D = v[2] - v[1],
							E = q - t[1];
						return n = (w + E * C / A) * (1 - (r - y) / B) + (x + E * D / A) * (1 - (z - r) / B), isNaN(n) ? null : t[0] ? t[0] * Math.round(n / t[0]) : n
					}
				}
				return null
			};
			return l
		},
		tiles: function (a, b, c, d, e) {
			function f(a) {
				return Math.floor(a)
			}
			var g = e || 0,
				h = 1 * a + g,
				i = 1 * b + g;
			return Math.max(f(d / i) * f(c / h), f(c / i) * f(d / h))
		},
		min: function (a, b, c) {
			return Object.keys(c).map(function (d) {
				return c[d](a, b)
			}).compact().min()
		},
		minkey: function (a, b, c) {
			var d = 1e50,
				e = null;
			for (var f in c) {
				var g = c[f](a, b);
				null != g && d > g && (e = f, d = g)
			}
			return e
		},
		report: function (order, data, precision) {
			var report = {
					total: 0,
					rows: [],
					errors: [],
					budget: []
				},
				rows = order,
				d = data || {},
				prec = isNaN(precision) ? 2 : Number(precision),
				total = 0,
				backp = 0,
				subtotal = 0,
				backok = !0,
				budget = {},
				row, rowe, rowv, fn_, r_, ri, rt, rc, i, j, e, v;
			if (isS(order) && (rows = order.lines().compact()), !isA(rows) || !rows.length || !isO(data)) return {
				total: null,
				rows: [],
				errors: ["Invalid data"]
			};
			for (i = 0; i < rows.length; i++)
				if (ri = rows[i], row = null, isS(ri) && (ri = ri.compact().split(" ")), isA(ri) && ri.length > 1) {
					r_ = void 0, rc = ri[1].compact(), fn_ = "(" + rc.replace(/(^%)|(%$)/g, "") + ")";
					try {
						with(d) r_ = eval(fn_)
					} catch (e) {}
					isN(r_) && (isNaN(r_) || /^%/.test(rc) || (subtotal += /%$/g.test(rc) ? subtotal * (Number(r_) / 100) : Number(r_)))
				} for (i = 0; i < rows.length; i++)
				if (ri = rows[i], row = null, isS(ri) && (ri = ri.compact().split(" ")), isA(ri) && ri.length > 1) {
					r_ = void 0, rc = ri[1].compact(), fn_ = "(" + rc.replace(/^%|%$/g, "") + ")";
					try {
						with(d) r_ = eval(fn_)
					} catch (e) {}
					isN(r_) && /^%/.test(rc) && (backp += Number(r_))
				} for (backp >= 100 ? backok = !1 : subtotal /= 1 - backp / 100, i = 0; i < rows.length; i++)
				if (ri = rows[i], row = null, isS(ri) && (ri = ri.compact().split(" ")), isA(ri) && ri.length > 1) {
					row = {
						type: ri[0].compact(),
						desc: ri.slice(2).join(" "),
						e: "",
						v: null
					}, r_ = void 0, rc = ri[1].compact(), fn_ = "(" + rc.replace(/^%|%$/g, "") + ")";
					try {
						with(d) r_ = eval(fn_)
					} catch (e) {
						row.e = e.message
					}
					isN(r_) ? isNaN(r_) ? (row.v = "?", row.e = "null or NaN") : (/^%/.test(rc) ? backok ? row.v = subtotal * (Number(r_) / 100) : (row.v = "?", row.e = "Back % sum must be less than 100%") : row.v = /%$/.test(rc) ? report.total * (Number(r_) / 100) : Number(r_), "?" != row.v && (row.v = row.v.round(prec), report.total += row.v)) : void 0 !== r_ ? row.v = r_ + "" : (row.v = "?", row.e = row.e || "error in params"), report.rows[i] = row
				} for (var i in report.rows) report.rows[i].e && report.errors.push("Line " + i + ": " + report.rows[i].e);
			for (var i in report.rows) {
				var row = report.rows[i];
				row.e || isNaN(row.v) || (budget[row.type] || (budget[row.type] = 0), budget[row.type] += Number(row.v))
			}
			for (var i in budget) report.budget.push({
				type: i,
				v: budget[i],
				e: "",
				desc: ""
			});
			return report.budget = report.budget.sortBy(function (a) {
				return a.type
			}), report
		},
		html: function (a, b) {
			for (var c = "", d = b || '<div><span class="w100 dib">{type}:</span> {v} <span class="fs85">{desc}</span> <span class="red fs90">{e}</span></div>', e = 0; e < a.length; e++) c += d.assign(a[e]);
			return c
		}
	})
}(window);

/*Select2 3.5.4 © 2012 Igor Vaynberg*/
! function (a) {
	"undefined" == typeof a.fn.each2 && a.extend(a.fn, {
		each2: function (b) {
			for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
			return this
		}
	})
}(jQuery),
function (a, b) {
	"use strict";

	function c(b) {
		var c = a(document.createTextNode(""));
		b.before(c), c.before(b), c.remove()
	}

	function d(a) {
		function b(a) {
			return O[a] || a
		}
		return a.replace(/[^\u0000-\u007E]/g, b)
	}

	function e(a, b) {
		for (var c = 0, d = b.length; d > c; c += 1)
			if (g(a, b[c])) return c;
		return -1
	}

	function f() {
		var b = a(N);
		b.appendTo(document.body);
		var c = {
			width: b.width() - b[0].clientWidth,
			height: b.height() - b[0].clientHeight
		};
		return b.remove(), c
	}

	function g(a, c) {
		return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
	}

	function h(a, b, c) {
		var d, e, f;
		if (null === a || a.length < 1) return [];
		for (d = a.split(b), e = 0, f = d.length; f > e; e += 1) d[e] = c(d[e]);
		return d
	}

	function i(a) {
		return a.outerWidth(!1) - a.width()
	}

	function j(c) {
		var d = "keyup-change-value";
		c.on("keydown", function () {
			a.data(c, d) === b && a.data(c, d, c.val())
		}), c.on("keyup", function () {
			var e = a.data(c, d);
			e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
		})
	}

	function k(c) {
		c.on("mousemove", function (c) {
			var d = L;
			(d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
		})
	}

	function l(a, c, d) {
		d = d || b;
		var e;
		return function () {
			var b = arguments;
			window.clearTimeout(e), e = window.setTimeout(function () {
				c.apply(d, b)
			}, a)
		}
	}

	function m(a, b) {
		var c = l(a, function (a) {
			b.trigger("scroll-debounced", a)
		});
		b.on("scroll", function (a) {
			e(a.target, b.get()) >= 0 && c(a)
		})
	}

	function n(a) {
		a[0] !== document.activeElement && window.setTimeout(function () {
			var b, c = a[0],
				d = a.val().length;
			a.focus();
			var e = c.offsetWidth > 0 || c.offsetHeight > 0;
			e && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(), b.collapse(!1), b.select()))
		}, 0)
	}

	function o(b) {
		b = a(b)[0];
		var c = 0,
			d = 0;
		if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
		else if ("selection" in document) {
			b.focus();
			var e = document.selection.createRange();
			d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
		}
		return {
			offset: c,
			length: d
		}
	}

	function p(a) {
		a.preventDefault(), a.stopPropagation()
	}

	function q(a) {
		a.preventDefault(), a.stopImmediatePropagation()
	}

	function r(b) {
		if (!I) {
			var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
			I = a(document.createElement("div")).css({
				position: "absolute",
				left: "-10000px",
				top: "-10000px",
				display: "none",
				fontSize: c.fontSize,
				fontFamily: c.fontFamily,
				fontStyle: c.fontStyle,
				fontWeight: c.fontWeight,
				letterSpacing: c.letterSpacing,
				textTransform: c.textTransform,
				whiteSpace: "nowrap"
			}), I.attr("class", "select2-sizer"), a(document.body).append(I)
		}
		return I.text(b.val()), I.width()
	}

	function s(b, c, d) {
		var e, f, g = [];
		e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function () {
			0 === this.indexOf("select2-") && g.push(this)
		})), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function () {
			0 !== this.indexOf("select2-") && (f = d(this), f && g.push(f))
		})), b.attr("class", g.join(" "))
	}

	function t(a, b, c, e) {
		var f = d(a.toUpperCase()).indexOf(d(b.toUpperCase())),
			g = b.length;
		return 0 > f ? (c.push(e(a)), void 0) : (c.push(e(a.substring(0, f))), c.push("<span class='select2-match'>"), c.push(e(a.substring(f, f + g))), c.push("</span>"), c.push(e(a.substring(f + g, a.length))), void 0)
	}

	function u(a) {
		var b = {
			"\\": "&#92;",
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#47;"
		};
		return String(a).replace(/[&<>"'\/\\]/g, function (a) {
			return b[a]
		})
	}

	function v(c) {
		var d, e = null,
			f = c.quietMillis || 100,
			g = c.url,
			h = this;
		return function (i) {
			window.clearTimeout(d), d = window.setTimeout(function () {
				var d = c.data,
					f = g,
					j = c.transport || a.fn.select2.ajaxDefaults.transport,
					k = {
						type: c.type || "GET",
						cache: c.cache || !1,
						jsonpCallback: c.jsonpCallback || b,
						dataType: c.dataType || "json"
					},
					l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
				d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
					url: f,
					dataType: c.dataType,
					data: d,
					success: function (a) {
						var b = c.results(a, i.page, i);
						i.callback(b)
					},
					error: function (a, b, c) {
						var d = {
							hasError: !0,
							jqXHR: a,
							textStatus: b,
							errorThrown: c
						};
						i.callback(d)
					}
				}), e = j.call(h, l)
			}, f)
		}
	}

	function w(b) {
		var c, d, e = b,
			f = function (a) {
				return "" + a.text
			};
		a.isArray(e) && (d = e, e = {
			results: d
		}), a.isFunction(e) === !1 && (d = e, e = function () {
			return d
		});
		var g = e();
		return g.text && (f = g.text, a.isFunction(f) || (c = g.text, f = function (a) {
				return a[c]
			})),
			function (b) {
				var c, d = b.term,
					g = {
						results: []
					};
				return "" === d ? (b.callback(e()), void 0) : (c = function (e, g) {
					var h, i;
					if (e = e[0], e.children) {
						h = {};
						for (i in e) e.hasOwnProperty(i) && (h[i] = e[i]);
						h.children = [], a(e.children).each2(function (a, b) {
							c(b, h.children)
						}), (h.children.length || b.matcher(d, f(h), e)) && g.push(h)
					} else b.matcher(d, f(e), e) && g.push(e)
				}, a(e().results).each2(function (a, b) {
					c(b, g.results)
				}), b.callback(g), void 0)
			}
	}

	function x(c) {
		var d = a.isFunction(c);
		return function (e) {
			var f = e.term,
				g = {
					results: []
				},
				h = d ? c(e) : c;
			a.isArray(h) && (a(h).each(function () {
				var a = this.text !== b,
					c = a ? this.text : this;
				("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
					id: this,
					text: this
				})
			}), e.callback(g))
		}
	}

	function y(b, c) {
		if (a.isFunction(b)) return !0;
		if (!b) return !1;
		if ("string" == typeof b) return !0;
		throw new Error(c + " must be a string, function, or falsy value")
	}

	function z(b, c) {
		if (a.isFunction(b)) {
			var d = Array.prototype.slice.call(arguments, 2);
			return b.apply(c, d)
		}
		return b
	}

	function A(b) {
		var c = 0;
		return a.each(b, function (a, b) {
			b.children ? c += A(b.children) : c++
		}), c
	}

	function B(a, c, d, e) {
		var f, h, i, j, k, l = a,
			m = !1;
		if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
		for (;;) {
			for (h = -1, i = 0, j = e.tokenSeparators.length; j > i && (k = e.tokenSeparators[i], h = a.indexOf(k), !(h >= 0)); i++);
			if (0 > h) break;
			if (f = a.substring(0, h), a = a.substring(h + k.length), f.length > 0 && (f = e.createSearchChoice.call(this, f, c), f !== b && null !== f && e.id(f) !== b && null !== e.id(f))) {
				for (m = !1, i = 0, j = c.length; j > i; i++)
					if (g(e.id(f), e.id(c[i]))) {
						m = !0;
						break
					} m || d(f)
			}
		}
		return l !== a ? a : void 0
	}

	function C() {
		var b = this;
		a.each(arguments, function (a, c) {
			b[c].remove(), b[c] = null
		})
	}

	function D(b, c) {
		var d = function () {};
		return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
	}
	if (window.Select2 === b) {
		var E, F, G, H, I, J, K, L = {
				x: 0,
				y: 0
			},
			M = {
				TAB: 9,
				ENTER: 13,
				ESC: 27,
				SPACE: 32,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				SHIFT: 16,
				CTRL: 17,
				ALT: 18,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				HOME: 36,
				END: 35,
				BACKSPACE: 8,
				DELETE: 46,
				isArrow: function (a) {
					switch (a = a.which ? a.which : a, a) {
						case M.LEFT:
						case M.RIGHT:
						case M.UP:
						case M.DOWN:
							return !0
					}
					return !1
				},
				isControl: function (a) {
					var b = a.which;
					switch (b) {
						case M.SHIFT:
						case M.CTRL:
						case M.ALT:
							return !0
					}
					return a.metaKey ? !0 : !1
				},
				isFunctionKey: function (a) {
					return a = a.which ? a.which : a, a >= 112 && 123 >= a
				}
			},
			N = "<div class='select2-measure-scrollbar'></div>",
			O = {
				"Ⓐ": "A",
				"Ａ": "A",
				"À": "A",
				"Á": "A",
				"Â": "A",
				"Ầ": "A",
				"Ấ": "A",
				"Ẫ": "A",
				"Ẩ": "A",
				"Ã": "A",
				"Ā": "A",
				"Ă": "A",
				"Ằ": "A",
				"Ắ": "A",
				"Ẵ": "A",
				"Ẳ": "A",
				"Ȧ": "A",
				"Ǡ": "A",
				"Ä": "A",
				"Ǟ": "A",
				"Ả": "A",
				"Å": "A",
				"Ǻ": "A",
				"Ǎ": "A",
				"Ȁ": "A",
				"Ȃ": "A",
				"Ạ": "A",
				"Ậ": "A",
				"Ặ": "A",
				"Ḁ": "A",
				"Ą": "A",
				"Ⱥ": "A",
				"Ɐ": "A",
				"Ꜳ": "AA",
				"Æ": "AE",
				"Ǽ": "AE",
				"Ǣ": "AE",
				"Ꜵ": "AO",
				"Ꜷ": "AU",
				"Ꜹ": "AV",
				"Ꜻ": "AV",
				"Ꜽ": "AY",
				"Ⓑ": "B",
				"Ｂ": "B",
				"Ḃ": "B",
				"Ḅ": "B",
				"Ḇ": "B",
				"Ƀ": "B",
				"Ƃ": "B",
				"Ɓ": "B",
				"Ⓒ": "C",
				"Ｃ": "C",
				"Ć": "C",
				"Ĉ": "C",
				"Ċ": "C",
				"Č": "C",
				"Ç": "C",
				"Ḉ": "C",
				"Ƈ": "C",
				"Ȼ": "C",
				"Ꜿ": "C",
				"Ⓓ": "D",
				"Ｄ": "D",
				"Ḋ": "D",
				"Ď": "D",
				"Ḍ": "D",
				"Ḑ": "D",
				"Ḓ": "D",
				"Ḏ": "D",
				"Đ": "D",
				"Ƌ": "D",
				"Ɗ": "D",
				"Ɖ": "D",
				"Ꝺ": "D",
				"Ǳ": "DZ",
				"Ǆ": "DZ",
				"ǲ": "Dz",
				"ǅ": "Dz",
				"Ⓔ": "E",
				"Ｅ": "E",
				"È": "E",
				"É": "E",
				"Ê": "E",
				"Ề": "E",
				"Ế": "E",
				"Ễ": "E",
				"Ể": "E",
				"Ẽ": "E",
				"Ē": "E",
				"Ḕ": "E",
				"Ḗ": "E",
				"Ĕ": "E",
				"Ė": "E",
				"Ë": "E",
				"Ẻ": "E",
				"Ě": "E",
				"Ȅ": "E",
				"Ȇ": "E",
				"Ẹ": "E",
				"Ệ": "E",
				"Ȩ": "E",
				"Ḝ": "E",
				"Ę": "E",
				"Ḙ": "E",
				"Ḛ": "E",
				"Ɛ": "E",
				"Ǝ": "E",
				"Ⓕ": "F",
				"Ｆ": "F",
				"Ḟ": "F",
				"Ƒ": "F",
				"Ꝼ": "F",
				"Ⓖ": "G",
				"Ｇ": "G",
				"Ǵ": "G",
				"Ĝ": "G",
				"Ḡ": "G",
				"Ğ": "G",
				"Ġ": "G",
				"Ǧ": "G",
				"Ģ": "G",
				"Ǥ": "G",
				"Ɠ": "G",
				"Ꞡ": "G",
				"Ᵹ": "G",
				"Ꝿ": "G",
				"Ⓗ": "H",
				"Ｈ": "H",
				"Ĥ": "H",
				"Ḣ": "H",
				"Ḧ": "H",
				"Ȟ": "H",
				"Ḥ": "H",
				"Ḩ": "H",
				"Ḫ": "H",
				"Ħ": "H",
				"Ⱨ": "H",
				"Ⱶ": "H",
				"Ɥ": "H",
				"Ⓘ": "I",
				"Ｉ": "I",
				"Ì": "I",
				"Í": "I",
				"Î": "I",
				"Ĩ": "I",
				"Ī": "I",
				"Ĭ": "I",
				"İ": "I",
				"Ï": "I",
				"Ḯ": "I",
				"Ỉ": "I",
				"Ǐ": "I",
				"Ȉ": "I",
				"Ȋ": "I",
				"Ị": "I",
				"Į": "I",
				"Ḭ": "I",
				"Ɨ": "I",
				"Ⓙ": "J",
				"Ｊ": "J",
				"Ĵ": "J",
				"Ɉ": "J",
				"Ⓚ": "K",
				"Ｋ": "K",
				"Ḱ": "K",
				"Ǩ": "K",
				"Ḳ": "K",
				"Ķ": "K",
				"Ḵ": "K",
				"Ƙ": "K",
				"Ⱪ": "K",
				"Ꝁ": "K",
				"Ꝃ": "K",
				"Ꝅ": "K",
				"Ꞣ": "K",
				"Ⓛ": "L",
				"Ｌ": "L",
				"Ŀ": "L",
				"Ĺ": "L",
				"Ľ": "L",
				"Ḷ": "L",
				"Ḹ": "L",
				"Ļ": "L",
				"Ḽ": "L",
				"Ḻ": "L",
				"Ł": "L",
				"Ƚ": "L",
				"Ɫ": "L",
				"Ⱡ": "L",
				"Ꝉ": "L",
				"Ꝇ": "L",
				"Ꞁ": "L",
				"Ǉ": "LJ",
				"ǈ": "Lj",
				"Ⓜ": "M",
				"Ｍ": "M",
				"Ḿ": "M",
				"Ṁ": "M",
				"Ṃ": "M",
				"Ɱ": "M",
				"Ɯ": "M",
				"Ⓝ": "N",
				"Ｎ": "N",
				"Ǹ": "N",
				"Ń": "N",
				"Ñ": "N",
				"Ṅ": "N",
				"Ň": "N",
				"Ṇ": "N",
				"Ņ": "N",
				"Ṋ": "N",
				"Ṉ": "N",
				"Ƞ": "N",
				"Ɲ": "N",
				"Ꞑ": "N",
				"Ꞥ": "N",
				"Ǌ": "NJ",
				"ǋ": "Nj",
				"Ⓞ": "O",
				"Ｏ": "O",
				"Ò": "O",
				"Ó": "O",
				"Ô": "O",
				"Ồ": "O",
				"Ố": "O",
				"Ỗ": "O",
				"Ổ": "O",
				"Õ": "O",
				"Ṍ": "O",
				"Ȭ": "O",
				"Ṏ": "O",
				"Ō": "O",
				"Ṑ": "O",
				"Ṓ": "O",
				"Ŏ": "O",
				"Ȯ": "O",
				"Ȱ": "O",
				"Ö": "O",
				"Ȫ": "O",
				"Ỏ": "O",
				"Ő": "O",
				"Ǒ": "O",
				"Ȍ": "O",
				"Ȏ": "O",
				"Ơ": "O",
				"Ờ": "O",
				"Ớ": "O",
				"Ỡ": "O",
				"Ở": "O",
				"Ợ": "O",
				"Ọ": "O",
				"Ộ": "O",
				"Ǫ": "O",
				"Ǭ": "O",
				"Ø": "O",
				"Ǿ": "O",
				"Ɔ": "O",
				"Ɵ": "O",
				"Ꝋ": "O",
				"Ꝍ": "O",
				"Ƣ": "OI",
				"Ꝏ": "OO",
				"Ȣ": "OU",
				"Ⓟ": "P",
				"Ｐ": "P",
				"Ṕ": "P",
				"Ṗ": "P",
				"Ƥ": "P",
				"Ᵽ": "P",
				"Ꝑ": "P",
				"Ꝓ": "P",
				"Ꝕ": "P",
				"Ⓠ": "Q",
				"Ｑ": "Q",
				"Ꝗ": "Q",
				"Ꝙ": "Q",
				"Ɋ": "Q",
				"Ⓡ": "R",
				"Ｒ": "R",
				"Ŕ": "R",
				"Ṙ": "R",
				"Ř": "R",
				"Ȑ": "R",
				"Ȓ": "R",
				"Ṛ": "R",
				"Ṝ": "R",
				"Ŗ": "R",
				"Ṟ": "R",
				"Ɍ": "R",
				"Ɽ": "R",
				"Ꝛ": "R",
				"Ꞧ": "R",
				"Ꞃ": "R",
				"Ⓢ": "S",
				"Ｓ": "S",
				"ẞ": "S",
				"Ś": "S",
				"Ṥ": "S",
				"Ŝ": "S",
				"Ṡ": "S",
				"Š": "S",
				"Ṧ": "S",
				"Ṣ": "S",
				"Ṩ": "S",
				"Ș": "S",
				"Ş": "S",
				"Ȿ": "S",
				"Ꞩ": "S",
				"Ꞅ": "S",
				"Ⓣ": "T",
				"Ｔ": "T",
				"Ṫ": "T",
				"Ť": "T",
				"Ṭ": "T",
				"Ț": "T",
				"Ţ": "T",
				"Ṱ": "T",
				"Ṯ": "T",
				"Ŧ": "T",
				"Ƭ": "T",
				"Ʈ": "T",
				"Ⱦ": "T",
				"Ꞇ": "T",
				"Ꜩ": "TZ",
				"Ⓤ": "U",
				"Ｕ": "U",
				"Ù": "U",
				"Ú": "U",
				"Û": "U",
				"Ũ": "U",
				"Ṹ": "U",
				"Ū": "U",
				"Ṻ": "U",
				"Ŭ": "U",
				"Ü": "U",
				"Ǜ": "U",
				"Ǘ": "U",
				"Ǖ": "U",
				"Ǚ": "U",
				"Ủ": "U",
				"Ů": "U",
				"Ű": "U",
				"Ǔ": "U",
				"Ȕ": "U",
				"Ȗ": "U",
				"Ư": "U",
				"Ừ": "U",
				"Ứ": "U",
				"Ữ": "U",
				"Ử": "U",
				"Ự": "U",
				"Ụ": "U",
				"Ṳ": "U",
				"Ų": "U",
				"Ṷ": "U",
				"Ṵ": "U",
				"Ʉ": "U",
				"Ⓥ": "V",
				"Ｖ": "V",
				"Ṽ": "V",
				"Ṿ": "V",
				"Ʋ": "V",
				"Ꝟ": "V",
				"Ʌ": "V",
				"Ꝡ": "VY",
				"Ⓦ": "W",
				"Ｗ": "W",
				"Ẁ": "W",
				"Ẃ": "W",
				"Ŵ": "W",
				"Ẇ": "W",
				"Ẅ": "W",
				"Ẉ": "W",
				"Ⱳ": "W",
				"Ⓧ": "X",
				"Ｘ": "X",
				"Ẋ": "X",
				"Ẍ": "X",
				"Ⓨ": "Y",
				"Ｙ": "Y",
				"Ỳ": "Y",
				"Ý": "Y",
				"Ŷ": "Y",
				"Ỹ": "Y",
				"Ȳ": "Y",
				"Ẏ": "Y",
				"Ÿ": "Y",
				"Ỷ": "Y",
				"Ỵ": "Y",
				"Ƴ": "Y",
				"Ɏ": "Y",
				"Ỿ": "Y",
				"Ⓩ": "Z",
				"Ｚ": "Z",
				"Ź": "Z",
				"Ẑ": "Z",
				"Ż": "Z",
				"Ž": "Z",
				"Ẓ": "Z",
				"Ẕ": "Z",
				"Ƶ": "Z",
				"Ȥ": "Z",
				"Ɀ": "Z",
				"Ⱬ": "Z",
				"Ꝣ": "Z",
				"ⓐ": "a",
				"ａ": "a",
				"ẚ": "a",
				"à": "a",
				"á": "a",
				"â": "a",
				"ầ": "a",
				"ấ": "a",
				"ẫ": "a",
				"ẩ": "a",
				"ã": "a",
				"ā": "a",
				"ă": "a",
				"ằ": "a",
				"ắ": "a",
				"ẵ": "a",
				"ẳ": "a",
				"ȧ": "a",
				"ǡ": "a",
				"ä": "a",
				"ǟ": "a",
				"ả": "a",
				"å": "a",
				"ǻ": "a",
				"ǎ": "a",
				"ȁ": "a",
				"ȃ": "a",
				"ạ": "a",
				"ậ": "a",
				"ặ": "a",
				"ḁ": "a",
				"ą": "a",
				"ⱥ": "a",
				"ɐ": "a",
				"ꜳ": "aa",
				"æ": "ae",
				"ǽ": "ae",
				"ǣ": "ae",
				"ꜵ": "ao",
				"ꜷ": "au",
				"ꜹ": "av",
				"ꜻ": "av",
				"ꜽ": "ay",
				"ⓑ": "b",
				"ｂ": "b",
				"ḃ": "b",
				"ḅ": "b",
				"ḇ": "b",
				"ƀ": "b",
				"ƃ": "b",
				"ɓ": "b",
				"ⓒ": "c",
				"ｃ": "c",
				"ć": "c",
				"ĉ": "c",
				"ċ": "c",
				"č": "c",
				"ç": "c",
				"ḉ": "c",
				"ƈ": "c",
				"ȼ": "c",
				"ꜿ": "c",
				"ↄ": "c",
				"ⓓ": "d",
				"ｄ": "d",
				"ḋ": "d",
				"ď": "d",
				"ḍ": "d",
				"ḑ": "d",
				"ḓ": "d",
				"ḏ": "d",
				"đ": "d",
				"ƌ": "d",
				"ɖ": "d",
				"ɗ": "d",
				"ꝺ": "d",
				"ǳ": "dz",
				"ǆ": "dz",
				"ⓔ": "e",
				"ｅ": "e",
				"è": "e",
				"é": "e",
				"ê": "e",
				"ề": "e",
				"ế": "e",
				"ễ": "e",
				"ể": "e",
				"ẽ": "e",
				"ē": "e",
				"ḕ": "e",
				"ḗ": "e",
				"ĕ": "e",
				"ė": "e",
				"ë": "e",
				"ẻ": "e",
				"ě": "e",
				"ȅ": "e",
				"ȇ": "e",
				"ẹ": "e",
				"ệ": "e",
				"ȩ": "e",
				"ḝ": "e",
				"ę": "e",
				"ḙ": "e",
				"ḛ": "e",
				"ɇ": "e",
				"ɛ": "e",
				"ǝ": "e",
				"ⓕ": "f",
				"ｆ": "f",
				"ḟ": "f",
				"ƒ": "f",
				"ꝼ": "f",
				"ⓖ": "g",
				"ｇ": "g",
				"ǵ": "g",
				"ĝ": "g",
				"ḡ": "g",
				"ğ": "g",
				"ġ": "g",
				"ǧ": "g",
				"ģ": "g",
				"ǥ": "g",
				"ɠ": "g",
				"ꞡ": "g",
				"ᵹ": "g",
				"ꝿ": "g",
				"ⓗ": "h",
				"ｈ": "h",
				"ĥ": "h",
				"ḣ": "h",
				"ḧ": "h",
				"ȟ": "h",
				"ḥ": "h",
				"ḩ": "h",
				"ḫ": "h",
				"ẖ": "h",
				"ħ": "h",
				"ⱨ": "h",
				"ⱶ": "h",
				"ɥ": "h",
				"ƕ": "hv",
				"ⓘ": "i",
				"ｉ": "i",
				"ì": "i",
				"í": "i",
				"î": "i",
				"ĩ": "i",
				"ī": "i",
				"ĭ": "i",
				"ï": "i",
				"ḯ": "i",
				"ỉ": "i",
				"ǐ": "i",
				"ȉ": "i",
				"ȋ": "i",
				"ị": "i",
				"į": "i",
				"ḭ": "i",
				"ɨ": "i",
				"ı": "i",
				"ⓙ": "j",
				"ｊ": "j",
				"ĵ": "j",
				"ǰ": "j",
				"ɉ": "j",
				"ⓚ": "k",
				"ｋ": "k",
				"ḱ": "k",
				"ǩ": "k",
				"ḳ": "k",
				"ķ": "k",
				"ḵ": "k",
				"ƙ": "k",
				"ⱪ": "k",
				"ꝁ": "k",
				"ꝃ": "k",
				"ꝅ": "k",
				"ꞣ": "k",
				"ⓛ": "l",
				"ｌ": "l",
				"ŀ": "l",
				"ĺ": "l",
				"ľ": "l",
				"ḷ": "l",
				"ḹ": "l",
				"ļ": "l",
				"ḽ": "l",
				"ḻ": "l",
				"ſ": "l",
				"ł": "l",
				"ƚ": "l",
				"ɫ": "l",
				"ⱡ": "l",
				"ꝉ": "l",
				"ꞁ": "l",
				"ꝇ": "l",
				"ǉ": "lj",
				"ⓜ": "m",
				"ｍ": "m",
				"ḿ": "m",
				"ṁ": "m",
				"ṃ": "m",
				"ɱ": "m",
				"ɯ": "m",
				"ⓝ": "n",
				"ｎ": "n",
				"ǹ": "n",
				"ń": "n",
				"ñ": "n",
				"ṅ": "n",
				"ň": "n",
				"ṇ": "n",
				"ņ": "n",
				"ṋ": "n",
				"ṉ": "n",
				"ƞ": "n",
				"ɲ": "n",
				"ŉ": "n",
				"ꞑ": "n",
				"ꞥ": "n",
				"ǌ": "nj",
				"ⓞ": "o",
				"ｏ": "o",
				"ò": "o",
				"ó": "o",
				"ô": "o",
				"ồ": "o",
				"ố": "o",
				"ỗ": "o",
				"ổ": "o",
				"õ": "o",
				"ṍ": "o",
				"ȭ": "o",
				"ṏ": "o",
				"ō": "o",
				"ṑ": "o",
				"ṓ": "o",
				"ŏ": "o",
				"ȯ": "o",
				"ȱ": "o",
				"ö": "o",
				"ȫ": "o",
				"ỏ": "o",
				"ő": "o",
				"ǒ": "o",
				"ȍ": "o",
				"ȏ": "o",
				"ơ": "o",
				"ờ": "o",
				"ớ": "o",
				"ỡ": "o",
				"ở": "o",
				"ợ": "o",
				"ọ": "o",
				"ộ": "o",
				"ǫ": "o",
				"ǭ": "o",
				"ø": "o",
				"ǿ": "o",
				"ɔ": "o",
				"ꝋ": "o",
				"ꝍ": "o",
				"ɵ": "o",
				"ƣ": "oi",
				"ȣ": "ou",
				"ꝏ": "oo",
				"ⓟ": "p",
				"ｐ": "p",
				"ṕ": "p",
				"ṗ": "p",
				"ƥ": "p",
				"ᵽ": "p",
				"ꝑ": "p",
				"ꝓ": "p",
				"ꝕ": "p",
				"ⓠ": "q",
				"ｑ": "q",
				"ɋ": "q",
				"ꝗ": "q",
				"ꝙ": "q",
				"ⓡ": "r",
				"ｒ": "r",
				"ŕ": "r",
				"ṙ": "r",
				"ř": "r",
				"ȑ": "r",
				"ȓ": "r",
				"ṛ": "r",
				"ṝ": "r",
				"ŗ": "r",
				"ṟ": "r",
				"ɍ": "r",
				"ɽ": "r",
				"ꝛ": "r",
				"ꞧ": "r",
				"ꞃ": "r",
				"ⓢ": "s",
				"ｓ": "s",
				"ß": "s",
				"ś": "s",
				"ṥ": "s",
				"ŝ": "s",
				"ṡ": "s",
				"š": "s",
				"ṧ": "s",
				"ṣ": "s",
				"ṩ": "s",
				"ș": "s",
				"ş": "s",
				"ȿ": "s",
				"ꞩ": "s",
				"ꞅ": "s",
				"ẛ": "s",
				"ⓣ": "t",
				"ｔ": "t",
				"ṫ": "t",
				"ẗ": "t",
				"ť": "t",
				"ṭ": "t",
				"ț": "t",
				"ţ": "t",
				"ṱ": "t",
				"ṯ": "t",
				"ŧ": "t",
				"ƭ": "t",
				"ʈ": "t",
				"ⱦ": "t",
				"ꞇ": "t",
				"ꜩ": "tz",
				"ⓤ": "u",
				"ｕ": "u",
				"ù": "u",
				"ú": "u",
				"û": "u",
				"ũ": "u",
				"ṹ": "u",
				"ū": "u",
				"ṻ": "u",
				"ŭ": "u",
				"ü": "u",
				"ǜ": "u",
				"ǘ": "u",
				"ǖ": "u",
				"ǚ": "u",
				"ủ": "u",
				"ů": "u",
				"ű": "u",
				"ǔ": "u",
				"ȕ": "u",
				"ȗ": "u",
				"ư": "u",
				"ừ": "u",
				"ứ": "u",
				"ữ": "u",
				"ử": "u",
				"ự": "u",
				"ụ": "u",
				"ṳ": "u",
				"ų": "u",
				"ṷ": "u",
				"ṵ": "u",
				"ʉ": "u",
				"ⓥ": "v",
				"ｖ": "v",
				"ṽ": "v",
				"ṿ": "v",
				"ʋ": "v",
				"ꝟ": "v",
				"ʌ": "v",
				"ꝡ": "vy",
				"ⓦ": "w",
				"ｗ": "w",
				"ẁ": "w",
				"ẃ": "w",
				"ŵ": "w",
				"ẇ": "w",
				"ẅ": "w",
				"ẘ": "w",
				"ẉ": "w",
				"ⱳ": "w",
				"ⓧ": "x",
				"ｘ": "x",
				"ẋ": "x",
				"ẍ": "x",
				"ⓨ": "y",
				"ｙ": "y",
				"ỳ": "y",
				"ý": "y",
				"ŷ": "y",
				"ỹ": "y",
				"ȳ": "y",
				"ẏ": "y",
				"ÿ": "y",
				"ỷ": "y",
				"ẙ": "y",
				"ỵ": "y",
				"ƴ": "y",
				"ɏ": "y",
				"ỿ": "y",
				"ⓩ": "z",
				"ｚ": "z",
				"ź": "z",
				"ẑ": "z",
				"ż": "z",
				"ž": "z",
				"ẓ": "z",
				"ẕ": "z",
				"ƶ": "z",
				"ȥ": "z",
				"ɀ": "z",
				"ⱬ": "z",
				"ꝣ": "z",
				"Ά": "Α",
				"Έ": "Ε",
				"Ή": "Η",
				"Ί": "Ι",
				"Ϊ": "Ι",
				"Ό": "Ο",
				"Ύ": "Υ",
				"Ϋ": "Υ",
				"Ώ": "Ω",
				"ά": "α",
				"έ": "ε",
				"ή": "η",
				"ί": "ι",
				"ϊ": "ι",
				"ΐ": "ι",
				"ό": "ο",
				"ύ": "υ",
				"ϋ": "υ",
				"ΰ": "υ",
				"ω": "ω",
				"ς": "σ"
			};
		J = a(document), H = function () {
			var a = 1;
			return function () {
				return a++
			}
		}(), E = D(Object, {
			bind: function (a) {
				var b = this;
				return function () {
					a.apply(b, arguments)
				}
			},
			init: function (c) {
				var d, e, g = ".select2-results";
				this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + H()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a(document.body), s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(z(c.containerCss, this.opts.element)), this.container.addClass(z(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", p), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", p), this.results = d = this.container.find(g), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", p), k(this.results), this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", g, this.bind(function (a) {
					this._touchEvent = !0, this.highlightUnderEvent(a)
				})), this.dropdown.on("touchmove", g, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function () {
					this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
				})), m(80, this.results), this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function (a) {
					a.stopPropagation()
				}), a(this.dropdown).on("change", ".select2-input", function (a) {
					a.stopPropagation()
				}), a.fn.mousewheel && d.mousewheel(function (a, b, c, e) {
					var f = d.scrollTop();
					e > 0 && 0 >= f - e ? (d.scrollTop(0), p(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), p(a))
				}), j(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function () {
					e.addClass("select2-focused")
				}), e.on("blur", function () {
					e.removeClass("select2-focused")
				}), this.dropdown.on("mouseup", g, this.bind(function (b) {
					a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
				})), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (a) {
					a.stopPropagation()
				}), this.lastSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
				var h = c.element.prop("disabled");
				h === b && (h = !1), this.enable(!h);
				var i = c.element.prop("readonly");
				i === b && (i = !1), this.readonly(i), K = K || f(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder)
			},
			destroy: function () {
				var a = this.opts.element,
					c = a.data("select2"),
					d = this;
				this.close(), a.length && a[0].detachEvent && d._sync && a.each(function () {
					d._sync && this.detachEvent("onpropertychange", d._sync)
				}), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.removeData("select2").off(".select2"), a.is("input[type='hidden']") ? a.css("display", "") : (a.show().prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
					tabindex: this.elementTabIndex
				}) : a.removeAttr("tabindex"), a.show())), C.call(this, "container", "liveRegion", "dropdown", "results", "search")
			},
			optionToData: function (a) {
				return a.is("option") ? {
					id: a.prop("value"),
					text: a.text(),
					element: a.get(),
					css: a.attr("class"),
					disabled: a.prop("disabled"),
					locked: g(a.attr("locked"), "locked") || g(a.data("locked"), !0)
				} : a.is("optgroup") ? {
					text: a.attr("label"),
					children: [],
					element: a.get(),
					css: a.attr("class")
				} : void 0
			},
			prepareOpts: function (c) {
				var d, e, f, i, j = this;
				if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
						if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
					}), c.debug = c.debug || a.fn.select2.defaults.debug, c.debug && console && console.warn && (null != c.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != c.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != c.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), null != c.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), null != c.ajax && null != c.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), null != c.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), null != c.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), null != c.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), null != c.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), null != c.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), null != c.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), c.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), null != c.element.data("tags")) {
					var k = c.element.data("tags");
					a.isArray(k) || (k = []), c.element.data("select2Tags", k)
				}
				if (null != c.sorter && (c.sortResults = c.sorter), null != c.selectOnClose && (c.selectOnBlur = c.selectOnClose), null != c.ajax && a.isFunction(c.ajax.processResults) && (c.ajax.results = c.ajax.processResults), null != c.language) {
					var l = c.language;
					a.isFunction(l.noMatches) && (c.formatNoMatches = l.noMatches), a.isFunction(l.searching) && (c.formatSearching = l.searching), a.isFunction(l.inputTooShort) && (c.formatInputTooShort = l.inputTooShort), a.isFunction(l.inputTooLong) && (c.formatInputTooLong = l.inputTooLong), a.isFunction(l.loadingMore) && (c.formatLoading = l.loadingMore), a.isFunction(l.maximumSelected) && (c.formatSelectionTooBig = l.maximumSelected)
				}
				if (c = a.extend({}, {
						populateResults: function (d, e, f) {
							var g, h = this.opts.id,
								i = this.liveRegion;
							g = function (d, e, k) {
								var l, m, n, o, p, q, r, s, t, u;
								d = c.sortResults(d, e, f);
								var v = [];
								for (l = 0, m = d.length; m > l; l += 1) n = d[l], p = n.disabled === !0, o = !p && h(n) !== b, q = n.children && n.children.length > 0, r = a("<li></li>"), r.addClass("select2-results-dept-" + k), r.addClass("select2-result"), r.addClass(o ? "select2-result-selectable" : "select2-result-unselectable"), p && r.addClass("select2-disabled"), q && r.addClass("select2-result-with-children"), r.addClass(j.opts.formatResultCssClass(n)), r.attr("role", "presentation"), s = a(document.createElement("div")), s.addClass("select2-result-label"), s.attr("id", "select2-result-label-" + H()), s.attr("role", "option"), u = c.formatResult(n, s, f, j.opts.escapeMarkup), u !== b && (s.html(u), r.append(s)), q && (t = a("<ul></ul>"), t.addClass("select2-result-sub"), g(n.children, t, k + 1), r.append(t)), r.data("select2-data", n), v.push(r[0]);
								e.append(v), i.text(c.formatMatches(d.length))
							}, g(e, d, 0)
						}
					}, a.fn.select2.defaults, c), "function" != typeof c.id && (f = c.id, c.id = function (a) {
						return a[f]
					}), a.isArray(c.element.data("select2Tags"))) {
					if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
					c.tags = c.element.data("select2Tags")
				}
				if (e ? (c.query = this.bind(function (a) {
						var c, e, f, g = {
								results: [],
								more: !1
							},
							h = a.term;
						f = function (b, c) {
							var d;
							b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b), b.children().each2(function (a, b) {
								f(b, d.children)
							}), d.children.length > 0 && c.push(d))
						}, c = d.children(), this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(), e && (c = c.not(e))), c.each2(function (a, b) {
							f(b, g.results)
						}), a.callback(g)
					}), c.id = function (a) {
						return a.id
					}) : "query" in c || ("ajax" in c ? (i = c.element.data("ajax-url"), i && i.length > 0 && (c.ajax.url = i), c.query = v.call(c.element, c.ajax)) : "data" in c ? c.query = w(c.data) : "tags" in c && (c.query = x(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function (b) {
						return {
							id: a.trim(b),
							text: a.trim(b)
						}
					}), c.initSelection === b && (c.initSelection = function (b, d) {
						var e = [];
						a(h(b.val(), c.separator, c.transformVal)).each(function () {
							var b = {
									id: this,
									text: this
								},
								d = c.tags;
							a.isFunction(d) && (d = d()), a(d).each(function () {
								return g(this.id, b.id) ? (b = this, !1) : void 0
							}), e.push(b)
						}), d(e)
					}))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
				if ("top" === c.createSearchChoicePosition) c.createSearchChoicePosition = function (a, b) {
					a.unshift(b)
				};
				else if ("bottom" === c.createSearchChoicePosition) c.createSearchChoicePosition = function (a, b) {
					a.push(b)
				};
				else if ("function" != typeof c.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
				return c
			},
			monitorSource: function () {
				var c, d = this.opts.element,
					e = this;
				d.on("change.select2", this.bind(function () {
					this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
				})), this._sync = this.bind(function () {
					var a = d.prop("disabled");
					a === b && (a = !1), this.enable(!a);
					var c = d.prop("readonly");
					c === b && (c = !1), this.readonly(c), this.container && (s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(z(this.opts.containerCssClass, this.opts.element))), this.dropdown && (s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(this.opts.dropdownCssClass, this.opts.element)))
				}), d.length && d[0].attachEvent && d.each(function () {
					this.attachEvent("onpropertychange", e._sync)
				}), c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, c !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new c(function (b) {
					a.each(b, e._sync)
				}), this.propertyObserver.observe(d.get(0), {
					attributes: !0,
					subtree: !1
				}))
			},
			triggerSelect: function (b) {
				var c = a.Event("select2-selecting", {
					val: this.id(b),
					object: b,
					choice: b
				});
				return this.opts.element.trigger(c), !c.isDefaultPrevented()
			},
			triggerChange: function (b) {
				b = b || {}, b = a.extend({}, b, {
					type: "change",
					val: this.val()
				}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
			},
			isInterfaceEnabled: function () {
				return this.enabledInterface === !0
			},
			enableInterface: function () {
				var a = this._enabled && !this._readonly,
					b = !a;
				return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
			},
			enable: function (a) {
				a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface())
			},
			disable: function () {
				this.enable(!1)
			},
			readonly: function (a) {
				a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface())
			},
			opened: function () {
				return this.container ? this.container.hasClass("select2-dropdown-open") : !1
			},
			positionDropdown: function () {
				var b, c, d, e, f, g = this.dropdown,
					h = this.container,
					i = h.offset(),
					j = h.outerHeight(!1),
					k = h.outerWidth(!1),
					l = g.outerHeight(!1),
					m = a(window),
					n = m.width(),
					o = m.height(),
					p = m.scrollLeft() + n,
					q = m.scrollTop() + o,
					r = i.top + j,
					s = i.left,
					t = q >= r + l,
					u = i.top - l >= m.scrollTop(),
					v = g.outerWidth(!1),
					w = function () {
						return p >= s + v
					},
					x = function () {
						return i.left + p + h.outerWidth(!1) > v
					},
					y = g.hasClass("select2-drop-above");
				y ? (c = !0, !u && t && (d = !0, c = !1)) : (c = !1, !t && u && (d = !0, c = !0)), d && (g.hide(), i = this.container.offset(), j = this.container.outerHeight(!1), k = this.container.outerWidth(!1), l = g.outerHeight(!1), p = m.scrollLeft() + n, q = m.scrollTop() + o, r = i.top + j, s = i.left, v = g.outerWidth(!1), g.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (f = a(".select2-results", g)[0], g.addClass("select2-drop-auto-width"), g.css("width", ""), v = g.outerWidth(!1) + (f.scrollHeight === f.clientHeight ? 0 : K.width), v > k ? k = v : v = k, l = g.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (b = this.body.offset(), r -= b.top, s -= b.left), !w() && x() && (s = i.left + this.container.outerWidth(!1) - v), e = {
					left: s,
					width: k
				}, c ? (this.container.addClass("select2-drop-above"), g.addClass("select2-drop-above"), l = g.outerHeight(!1), e.top = i.top - l, e.bottom = "auto") : (e.top = r, e.bottom = "auto", this.container.removeClass("select2-drop-above"), g.removeClass("select2-drop-above")), e = a.extend(e, z(this.opts.dropdownCss, this.opts.element)), g.css(e)
			},
			shouldOpen: function () {
				var b;
				return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
			},
			clearDropdownAlignmentPreference: function () {
				this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
			},
			open: function () {
				return this.shouldOpen() ? (this.opening(), J.on("mousemove.select2Event", function (a) {
					L.x = a.pageX, L.y = a.pageY
				}), !0) : !1
			},
			opening: function () {
				var b, d = this.containerEventName,
					e = "scroll." + d,
					f = "resize." + d,
					g = "orientationchange." + d;
				this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), b = a("#select2-drop-mask"), 0 === b.length && (b = a(document.createElement("div")), b.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), b.hide(), b.appendTo(this.body), b.on("mousedown touchstart click", function (d) {
					c(b);
					var e, f = a("#select2-drop");
					f.length > 0 && (e = f.data("select2"), e.opts.selectOnBlur && e.selectHighlighted({
						noFocus: !0
					}), e.close(), d.preventDefault(), d.stopPropagation())
				})), this.dropdown.prev()[0] !== b[0] && this.dropdown.before(b), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), b.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
				var h = this;
				this.container.parents().add(window).each(function () {
					a(this).on(f + " " + e + " " + g, function () {
						h.opened() && h.positionDropdown()
					})
				})
			},
			close: function () {
				if (this.opened()) {
					var b = this.containerEventName,
						c = "scroll." + b,
						d = "resize." + b,
						e = "orientationchange." + b;
					this.container.parents().add(window).each(function () {
						a(this).off(c).off(d).off(e)
					}), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), J.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.search.removeAttr("aria-activedescendant"), this.opts.element.trigger(a.Event("select2-close"))
				}
			},
			externalSearch: function (a) {
				this.open(), this.search.val(a), this.updateResults(!1)
			},
			clearSearch: function () {},
			prefillNextSearchTerm: function () {
				if ("" !== this.search.val()) return !1;
				var a = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
				return a !== b ? (this.search.val(a), this.search.select(), !0) : !1
			},
			getMaximumSelectionSize: function () {
				return z(this.opts.maximumSelectionSize, this.opts.element)
			},
			ensureHighlightVisible: function () {
				var b, c, d, e, f, g, h, i, j = this.results;
				if (c = this.highlight(), !(0 > c)) {
					if (0 == c) return j.scrollTop(0), void 0;
					b = this.findHighlightableChoices().find(".select2-result-label"), d = a(b[c]), i = (d.offset() || {}).top || 0, e = i + d.outerHeight(!0), c === b.length - 1 && (h = j.find("li.select2-more-results"), h.length > 0 && (e = h.offset().top + h.outerHeight(!0))), f = j.offset().top + j.outerHeight(!1), e > f && j.scrollTop(j.scrollTop() + (e - f)), g = i - j.offset().top, 0 > g && "none" != d.css("display") && j.scrollTop(j.scrollTop() + g)
				}
			},
			findHighlightableChoices: function () {
				return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
			},
			moveHighlight: function (b) {
				for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
					d += b;
					var e = a(c[d]);
					if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
						this.highlight(d);
						break
					}
				}
			},
			highlight: function (b) {
				var c, d, f = this.findHighlightableChoices();
				return 0 === arguments.length ? e(f.filter(".select2-highlighted")[0], f.get()) : (b >= f.length && (b = f.length - 1), 0 > b && (b = 0), this.removeHighlight(), c = a(f[b]), c.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", c.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(c.text()), d = c.data("select2-data"), d && this.opts.element.trigger({
					type: "select2-highlight",
					val: this.id(d),
					choice: d
				}), void 0)
			},
			removeHighlight: function () {
				this.results.find(".select2-highlighted").removeClass("select2-highlighted")
			},
			touchMoved: function () {
				this._touchMoved = !0
			},
			clearTouchMoved: function () {
				this._touchMoved = !1
			},
			countSelectableResults: function () {
				return this.findHighlightableChoices().length
			},
			highlightUnderEvent: function (b) {
				var c = a(b.target).closest(".select2-result-selectable");
				if (c.length > 0 && !c.is(".select2-highlighted")) {
					var d = this.findHighlightableChoices();
					this.highlight(d.index(c))
				} else 0 == c.length && this.removeHighlight()
			},
			loadMoreIfNeeded: function () {
				var a, b = this.results,
					c = b.find("li.select2-more-results"),
					d = this.resultsPage + 1,
					e = this,
					f = this.search.val(),
					g = this.context;
				0 !== c.length && (a = c.offset().top - b.offset().top - b.height(), a <= this.opts.loadMorePadding && (c.addClass("select2-active"), this.opts.query({
					element: this.opts.element,
					term: f,
					page: d,
					context: g,
					matcher: this.opts.matcher,
					callback: this.bind(function (a) {
						e.opened() && (e.opts.populateResults.call(this, b, a.results, {
							term: f,
							page: d,
							context: g
						}), e.postprocessResults(a, !1, !1), a.more === !0 ? (c.detach().appendTo(b).html(e.opts.escapeMarkup(z(e.opts.formatLoadMore, e.opts.element, d + 1))), window.setTimeout(function () {
							e.loadMoreIfNeeded()
						}, 10)) : c.remove(), e.positionDropdown(), e.resultsPage = d, e.context = a.context, this.opts.element.trigger({
							type: "select2-loaded",
							items: a
						}))
					})
				})))
			},
			tokenize: function () {},
			updateResults: function (c) {
				function d() {
					j.removeClass("select2-active"), m.positionDropdown(), m.liveRegion.text(k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? k.text() : m.opts.formatMatches(k.find('.select2-result-selectable:not(".select2-selected")').length))
				}

				function e(a) {
					k.html(a), d()
				}
				var f, h, i, j = this.search,
					k = this.results,
					l = this.opts,
					m = this,
					n = j.val(),
					o = a.data(this.container, "select2-last-term");
				if ((c === !0 || !o || !g(n, o)) && (a.data(this.container, "select2-last-term", n), c === !0 || this.showSearchInput !== !1 && this.opened())) {
					i = ++this.queryCount;
					var p = this.getMaximumSelectionSize();
					if (p >= 1 && (f = this.data(), a.isArray(f) && f.length >= p && y(l.formatSelectionTooBig, "formatSelectionTooBig"))) return e("<li class='select2-selection-limit'>" + z(l.formatSelectionTooBig, l.element, p) + "</li>"), void 0;
					if (j.val().length < l.minimumInputLength) return e(y(l.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + z(l.formatInputTooShort, l.element, j.val(), l.minimumInputLength) + "</li>" : ""), c && this.showSearch && this.showSearch(!0), void 0;
					if (l.maximumInputLength && j.val().length > l.maximumInputLength) return e(y(l.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + z(l.formatInputTooLong, l.element, j.val(), l.maximumInputLength) + "</li>" : ""), void 0;
					l.formatSearching && 0 === this.findHighlightableChoices().length && e("<li class='select2-searching'>" + z(l.formatSearching, l.element) + "</li>"), j.addClass("select2-active"), this.removeHighlight(), h = this.tokenize(), h != b && null != h && j.val(h), this.resultsPage = 1, l.query({
						element: l.element,
						term: j.val(),
						page: this.resultsPage,
						context: null,
						matcher: l.matcher,
						callback: this.bind(function (f) {
							var h;
							if (i == this.queryCount) {
								if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
								if (f.hasError !== b && y(l.formatAjaxError, "formatAjaxError")) return e("<li class='select2-ajax-error'>" + z(l.formatAjaxError, l.element, f.jqXHR, f.textStatus, f.errorThrown) + "</li>"), void 0;
								if (this.context = f.context === b ? null : f.context, this.opts.createSearchChoice && "" !== j.val() && (h = this.opts.createSearchChoice.call(m, j.val(), f.results), h !== b && null !== h && m.id(h) !== b && null !== m.id(h) && 0 === a(f.results).filter(function () {
										return g(m.id(this), m.id(h))
									}).length && this.opts.createSearchChoicePosition(f.results, h)), 0 === f.results.length && y(l.formatNoMatches, "formatNoMatches")) return e("<li class='select2-no-results'>" + z(l.formatNoMatches, l.element, j.val()) + "</li>"), this.showSearch && this.showSearch(j.val()), void 0;
								k.empty(), m.opts.populateResults.call(this, k, f.results, {
									term: j.val(),
									page: this.resultsPage,
									context: null
								}), f.more === !0 && y(l.formatLoadMore, "formatLoadMore") && (k.append("<li class='select2-more-results'>" + l.escapeMarkup(z(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
									m.loadMoreIfNeeded()
								}, 10)), this.postprocessResults(f, c), d(), this.opts.element.trigger({
									type: "select2-loaded",
									items: f
								})
							}
						})
					})
				}
			},
			cancel: function () {
				this.close()
			},
			blur: function () {
				this.opts.selectOnBlur && this.selectHighlighted({
					noFocus: !0
				}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
			},
			focusSearch: function () {
				n(this.search)
			},
			selectHighlighted: function (a) {
				if (this._touchMoved) return this.clearTouchMoved(), void 0;
				var b = this.highlight(),
					c = this.results.find(".select2-highlighted"),
					d = c.closest(".select2-result").data("select2-data");
				d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
			},
			getPlaceholder: function () {
				var a;
				return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
			},
			getPlaceholderOption: function () {
				if (this.select) {
					var c = this.select.children("option").first();
					if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
					if ("" === a.trim(c.text()) && "" === c.val()) return c
				}
			},
			initContainerWidth: function () {
				function b() {
					var b, c, d, e, f, g;
					if ("off" === this.opts.width) return null;
					if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
					if ("copy" === this.opts.width || "resolve" === this.opts.width) {
						if (b = this.opts.element.attr("style"), "string" == typeof b)
							for (c = b.split(";"), e = 0, f = c.length; f > e; e += 1)
								if (g = c[e].replace(/\s/g, ""), d = g.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== d && d.length >= 1) return d[1];
						return "resolve" === this.opts.width ? (b = this.opts.element.css("width"), b.indexOf("%") > 0 ? b : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
					}
					return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
				}
				var c = b.call(this);
				null !== c && this.container.css("width", c)
			}
		}), F = D(E, {
			createContainer: function () {
				var b = a(document.createElement("div")).attr({
					"class": "select2-container"
				}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
				return b
			},
			enableInterface: function () {
				this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
			},
			opening: function () {
				var b, c, d;
				this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), b = this.search.get(0), b.createTextRange ? (c = b.createTextRange(), c.collapse(!1), c.select()) : b.setSelectionRange && (d = this.search.val().length, b.setSelectionRange(d, d))), this.prefillNextSearchTerm(), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
			},
			close: function () {
				this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			focus: function () {
				this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			isFocused: function () {
				return this.container.hasClass("select2-container-active")
			},
			cancel: function () {
				this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
			},
			destroy: function () {
				a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "selection", "focusser")
			},
			initContainer: function () {
				var b, d, e = this.container,
					f = this.dropdown,
					g = H();
				this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = b = e.find(".select2-choice"), this.focusser = e.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + g), this.focusser.attr("aria-labelledby", "select2-chosen-" + g), this.results.attr("id", "select2-results-" + g), this.search.attr("aria-owns", "select2-results-" + g), this.focusser.attr("id", "s2id_autogen" + g), d = a("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.on("focus.select2", this.bind(function () {
					this.focus()
				})), this.focusser.prev().text(d.text()).attr("for", this.focusser.attr("id"));
				var h = this.opts.element.attr("title");
				this.opts.element.attr("title", h || d.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function (a) {
					if (this.isInterfaceEnabled() && 229 != a.keyCode) {
						if (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) return p(a), void 0;
						switch (a.which) {
							case M.UP:
							case M.DOWN:
								return this.moveHighlight(a.which === M.UP ? -1 : 1), p(a), void 0;
							case M.ENTER:
								return this.selectHighlighted(), p(a), void 0;
							case M.TAB:
								return this.selectHighlighted({
									noFocus: !0
								}), void 0;
							case M.ESC:
								return this.cancel(a), p(a), void 0
						}
					}
				})), this.search.on("blur", this.bind(function () {
					document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
						this.opened() && this.results && this.results.length > 1 && this.search.focus()
					}), 0)
				})), this.focusser.on("keydown", this.bind(function (a) {
					if (this.isInterfaceEnabled() && a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.ESC) {
						if (this.opts.openOnEnter === !1 && a.which === M.ENTER) return p(a), void 0;
						if (a.which == M.DOWN || a.which == M.UP || a.which == M.ENTER && this.opts.openOnEnter) {
							if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
							return this.open(), p(a), void 0
						}
						return a.which == M.DELETE || a.which == M.BACKSPACE ? (this.opts.allowClear && this.clear(), p(a), void 0) : void 0
					}
				})), j(this.focusser), this.focusser.on("keyup-change input", this.bind(function (a) {
					if (this.opts.minimumResultsForSearch >= 0) {
						if (a.stopPropagation(), this.opened()) return;
						this.open()
					}
				})), b.on("mousedown touchstart", "abbr", this.bind(function (a) {
					this.isInterfaceEnabled() && (this.clear(), q(a), this.close(), this.selection && this.selection.focus())
				})), b.on("mousedown touchstart", this.bind(function (d) {
					c(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), p(d)
				})), f.on("mousedown touchstart", this.bind(function () {
					this.opts.shouldFocusInput(this) && this.search.focus()
				})), b.on("focus", this.bind(function (a) {
					p(a)
				})), this.focusser.on("focus", this.bind(function () {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
				})).on("blur", this.bind(function () {
					this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
				})), this.search.on("focus", this.bind(function () {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
				})), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
			},
			clear: function (b) {
				var c = this.selection.data("select2-data");
				if (c) {
					var d = a.Event("select2-clearing");
					if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
					var e = this.getPlaceholderOption();
					this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(c),
						choice: c
					}), this.triggerChange({
						removed: c
					}))
				}
			},
			initSelection: function () {
				if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
				else {
					var a = this;
					this.opts.initSelection.call(null, this.opts.element, function (c) {
						c !== b && null !== c && (a.updateSelection(c), a.close(), a.setPlaceholder(), a.lastSearchTerm = a.search.val())
					})
				}
			},
			isPlaceholderOptionSelected: function () {
				var a;
				return this.getPlaceholder() === b ? !1 : (a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
			},
			prepareOpts: function () {
				var b = this.parent.prepareOpts.apply(this, arguments),
					c = this;
				return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function (a, b) {
					var d = a.find("option").filter(function () {
						return this.selected && !this.disabled
					});
					b(c.optionToData(d))
				} : "data" in b && (b.initSelection = b.initSelection || function (c, d) {
					var e = c.val(),
						f = null;
					b.query({
						matcher: function (a, c, d) {
							var h = g(e, b.id(d));
							return h && (f = d), h
						},
						callback: a.isFunction(d) ? function () {
							d(f)
						} : a.noop
					})
				}), b
			},
			getPlaceholder: function () {
				return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
			},
			setPlaceholder: function () {
				var a = this.getPlaceholder();
				if (this.isPlaceholderOptionSelected() && a !== b) {
					if (this.select && this.getPlaceholderOption() === b) return;
					this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
				}
			},
			postprocessResults: function (a, b, c) {
				var d = 0,
					e = this;
				if (this.findHighlightableChoices().each2(function (a, b) {
						return g(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0
					}), c !== !1 && this.highlight(b === !0 && d >= 0 ? d : 0), b === !0) {
					var f = this.opts.minimumResultsForSearch;
					f >= 0 && this.showSearch(A(a.results) >= f)
				}
			},
			showSearch: function (b) {
				this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
			},
			onSelect: function (a, b) {
				if (this.triggerSelect(a)) {
					var c = this.opts.element.val(),
						d = this.data();
					this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
						type: "select2-selected",
						val: this.id(a),
						choice: a
					}), this.lastSearchTerm = this.search.val(), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), g(c, this.id(a)) || this.triggerChange({
						added: a,
						removed: d
					})
				}
			},
			updateSelection: function (a) {
				var c, d, e = this.selection.find(".select2-chosen");
				this.selection.data("select2-data", a), e.empty(), null !== a && (c = this.opts.formatSelection(a, e, this.opts.escapeMarkup)), c !== b && e.append(c), d = this.opts.formatSelectionCssClass(a, e), d !== b && e.addClass(d), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
			},
			val: function () {
				var a, c = !1,
					d = null,
					e = this,
					f = this.data();
				if (0 === arguments.length) return this.opts.element.val();
				if (a = arguments[0], arguments.length > 1 && (c = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(a).find("option").filter(function () {
					return this.selected
				}).each2(function (a, b) {
					return d = e.optionToData(b), !1
				}), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
					added: d,
					removed: f
				});
				else {
					if (!a && 0 !== a) return this.clear(c), void 0;
					if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
					this.opts.element.val(a), this.opts.initSelection(this.opts.element, function (a) {
						e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
							added: a,
							removed: f
						})
					})
				}
			},
			clearSearch: function () {
				this.search.val(""), this.focusser.val("")
			},
			data: function (a) {
				var c, d = !1;
				return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'), arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
					added: a,
					removed: c
				})) : this.clear(d), void 0)
			}
		}), G = D(E, {
			createContainer: function () {
				var b = a(document.createElement("div")).attr({
					"class": "select2-container select2-container-multi"
				}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
				return b
			},
			prepareOpts: function () {
				var b = this.parent.prepareOpts.apply(this, arguments),
					c = this;
				return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function (a, b) {
					var d = [];
					a.find("option").filter(function () {
						return this.selected && !this.disabled
					}).each2(function (a, b) {
						d.push(c.optionToData(b))
					}), b(d)
				} : "data" in b && (b.initSelection = b.initSelection || function (c, d) {
					var e = h(c.val(), b.separator, b.transformVal),
						f = [];
					b.query({
						matcher: function (c, d, h) {
							var i = a.grep(e, function (a) {
								return g(a, b.id(h))
							}).length;
							return i && f.push(h), i
						},
						callback: a.isFunction(d) ? function () {
							for (var a = [], c = 0; c < e.length; c++)
								for (var h = e[c], i = 0; i < f.length; i++) {
									var j = f[i];
									if (g(h, b.id(j))) {
										a.push(j), f.splice(i, 1);
										break
									}
								}
							d(a)
						} : a.noop
					})
				}), b
			},
			selectChoice: function (a) {
				var b = this.container.find(".select2-search-choice-focus");
				b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
			},
			destroy: function () {
				a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "searchContainer", "selection")
			},
			initContainer: function () {
				var b, c = ".select2-choices";
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = b = this.container.find(c);
				var d = this;
				this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function () {
					d.search[0].focus(), d.selectChoice(a(this))
				}), this.search.attr("id", "s2id_autogen" + H()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.on("focus.select2", this.bind(function () {
					this.focus()
				})), this.search.on("input paste", this.bind(function () {
					this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
				})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (a) {
					if (this.isInterfaceEnabled()) {
						++this.keydowns;
						var c = b.find(".select2-search-choice-focus"),
							d = c.prev(".select2-search-choice:not(.select2-locked)"),
							e = c.next(".select2-search-choice:not(.select2-locked)"),
							f = o(this.search);
						if (c.length && (a.which == M.LEFT || a.which == M.RIGHT || a.which == M.BACKSPACE || a.which == M.DELETE || a.which == M.ENTER)) {
							var g = c;
							return a.which == M.LEFT && d.length ? g = d : a.which == M.RIGHT ? g = e.length ? e : null : a.which === M.BACKSPACE ? this.unselect(c.first()) && (this.search.width(10), g = d.length ? d : e) : a.which == M.DELETE ? this.unselect(c.first()) && (this.search.width(10), g = e.length ? e : null) : a.which == M.ENTER && (g = null), this.selectChoice(g), p(a), g && g.length || this.open(), void 0
						}
						if ((a.which === M.BACKSPACE && 1 == this.keydowns || a.which == M.LEFT) && 0 == f.offset && !f.length) return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()), p(a), void 0;
						if (this.selectChoice(null), this.opened()) switch (a.which) {
							case M.UP:
							case M.DOWN:
								return this.moveHighlight(a.which === M.UP ? -1 : 1), p(a), void 0;
							case M.ENTER:
								return this.selectHighlighted(), p(a), void 0;
							case M.TAB:
								return this.selectHighlighted({
									noFocus: !0
								}), this.close(), void 0;
							case M.ESC:
								return this.cancel(a), p(a), void 0
						}
						if (a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.BACKSPACE && a.which !== M.ESC) {
							if (a.which === M.ENTER) {
								if (this.opts.openOnEnter === !1) return;
								if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
							}
							this.open(), (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) && p(a), a.which === M.ENTER && p(a)
						}
					}
				})), this.search.on("keyup", this.bind(function () {
					this.keydowns = 0, this.resizeSearch()
				})), this.search.on("blur", this.bind(function (b) {
					this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
				})), this.container.on("click", c, this.bind(function (b) {
					this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
				})), this.container.on("focus", c, this.bind(function () {
					this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
				})), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
			},
			enableInterface: function () {
				this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
			},
			initSelection: function () {
				if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
					var a = this;
					this.opts.initSelection.call(null, this.opts.element, function (c) {
						c !== b && null !== c && (a.updateSelection(c), a.close(), a.clearSearch())
					})
				}
			},
			clearSearch: function () {
				var a = this.getPlaceholder(),
					c = this.getMaxSearchWidth();
				a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
			},
			clearPlaceholder: function () {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			},
			opening: function () {
				this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.prefillNextSearchTerm(), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
			},
			close: function () {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function () {
				this.close(), this.search.focus()
			},
			isFocused: function () {
				return this.search.hasClass("select2-focused")
			},
			updateSelection: function (b) {
				var c = {},
					d = [],
					e = this;
				a(b).each(function () {
					e.id(this) in c || (c[e.id(this)] = 0, d.push(this))
				}), this.selection.find(".select2-search-choice").remove(), this.addSelectedChoice(d), e.postprocessResults()
			},
			tokenize: function () {
				var a = this.search.val();
				a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
			},
			onSelect: function (a, b) {
				this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
					type: "selected",
					val: this.id(a),
					choice: a
				}), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
					added: a
				}), b && b.noFocus || this.focusSearch())
			},
			cancel: function () {
				this.close(), this.focusSearch()
			},
			addSelectedChoice: function (b) {
				var c = this.getVal(),
					d = this;
				a(b).each(function () {
					c.push(d.createChoice(this))
				}), this.setVal(c)
			},
			createChoice: function (c) {
				var d, e, f = !c.locked,
					g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
					h = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
					i = f ? g : h,
					j = this.id(c);
				return d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup), d != b && i.find("div").replaceWith(a("<div></div>").html(d)), e = this.opts.formatSelectionCssClass(c, i.find("div")), e != b && i.addClass(e), f && i.find(".select2-search-choice-close").on("mousedown", p).on("click dblclick", this.bind(function (b) {
					this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), p(b), this.close(), this.focusSearch())
				})).on("focus", this.bind(function () {
					this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
				})), i.data("select2-data", c), i.insertBefore(this.searchContainer), j
			},
			unselect: function (b) {
				var c, d, f = this.getVal();
				if (b = b.closest(".select2-search-choice"), 0 === b.length) throw "Invalid argument: " + b + ". Must be .select2-search-choice";
				if (c = b.data("select2-data"), c) {
					var g = a.Event("select2-removing");
					if (g.val = this.id(c), g.choice = c, this.opts.element.trigger(g), g.isDefaultPrevented()) return !1;
					for (;
						(d = e(this.id(c), f)) >= 0;) f.splice(d, 1), this.setVal(f), this.select && this.postprocessResults();
					return b.remove(), this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(c),
						choice: c
					}), this.triggerChange({
						removed: c
					}), !0
				}
			},
			postprocessResults: function (a, b, c) {
				var d = this.getVal(),
					f = this.results.find(".select2-result"),
					g = this.results.find(".select2-result-with-children"),
					h = this;
				f.each2(function (a, b) {
					var c = h.id(b.data("select2-data"));
					e(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
				}), g.each2(function (a, b) {
					b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
				}), -1 == this.highlight() && c !== !1 && this.opts.closeOnSelect === !0 && h.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && y(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + z(h.opts.formatNoMatches, h.opts.element, h.search.val()) + "</li>")
			},
			getMaxSearchWidth: function () {
				return this.selection.width() - i(this.search)
			},
			resizeSearch: function () {
				var a, b, c, d, e, f = i(this.search);
				a = r(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e))
			},
			getVal: function () {
				var a;
				return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), h(a, this.opts.separator, this.opts.transformVal))
			},
			setVal: function (b) {
				if (this.select) this.select.val(b);
				else {
					var c = [],
						d = {};
					a(b).each(function () {
						this in d || (c.push(this), d[this] = 0)
					}), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator))
				}
			},
			buildChangeDetails: function (a, b) {
				for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
					for (var d = 0; d < a.length; d++)
						if (g(this.opts.id(b[c]), this.opts.id(a[d]))) {
							b.splice(c, 1), c--, a.splice(d, 1);
							break
						} return {
					added: b,
					removed: a
				}
			},
			val: function (c, d) {
				var e, f = this;
				if (0 === arguments.length) return this.getVal();
				if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
					added: this.data(),
					removed: e
				}), void 0;
				if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
				else {
					if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
					this.opts.initSelection(this.opts.element, function (b) {
						var c = a.map(b, f.id);
						f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()))
					})
				}
				this.clearSearch()
			},
			onSortStart: function () {
				if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
				this.search.width(0), this.searchContainer.hide()
			},
			onSortEnd: function () {
				var b = [],
					c = this;
				this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
					b.push(c.opts.id(a(this).data("select2-data")))
				}), this.setVal(b), this.triggerChange()
			},
			data: function (b, c) {
				var d, e, f = this;
				return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function () {
					return a(this).data("select2-data")
				}).get() : (e = this.data(), b || (b = []), d = a.map(b, function (a) {
					return f.opts.id(a)
				}), this.setVal(d), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(e, this.data())), void 0)
			}
		}), a.fn.select2 = function () {
			var c, d, f, g, h, i = Array.prototype.slice.call(arguments, 0),
				j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
				k = ["opened", "isFocused", "container", "dropdown"],
				l = ["val", "data"],
				m = {
					search: "externalSearch"
				};
			return this.each(function () {
				if (0 === i.length || "object" == typeof i[0]) c = 0 === i.length ? {} : a.extend({}, i[0]), c.element = a(this), "select" === c.element.get(0).tagName.toLowerCase() ? h = c.element.prop("multiple") : (h = c.multiple || !1, "tags" in c && (c.multiple = h = !0)), d = h ? new window.Select2["class"].multi : new window.Select2["class"].single, d.init(c);
				else {
					if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
					if (e(i[0], j) < 0) throw "Unknown method: " + i[0];
					if (g = b, d = a(this).data("select2"), d === b) return;
					if (f = i[0], "container" === f ? g = d.container : "dropdown" === f ? g = d.dropdown : (m[f] && (f = m[f]), g = d[f].apply(d, i.slice(1))), e(i[0], k) >= 0 || e(i[0], l) >= 0 && 1 == i.length) return !1
				}
			}), g === b ? this : g
		}, a.fn.select2.defaults = {
			debug: !1,
			width: "copy",
			loadMorePadding: 0,
			closeOnSelect: !0,
			openOnEnter: !0,
			containerCss: {},
			dropdownCss: {},
			containerCssClass: "",
			dropdownCssClass: "",
			formatResult: function (a, b, c, d) {
				var e = [];
				return t(this.text(a), c.term, e, d), e.join("")
			},
			transformVal: function (b) {
				return a.trim(b)
			},
			formatSelection: function (a, c, d) {
				return a ? d(this.text(a)) : b
			},
			sortResults: function (a) {
				return a
			},
			formatResultCssClass: function (a) {
				return a.css
			},
			formatSelectionCssClass: function () {
				return b
			},
			minimumResultsForSearch: 0,
			minimumInputLength: 0,
			maximumInputLength: null,
			maximumSelectionSize: 0,
			id: function (a) {
				return a == b ? null : a.id
			},
			text: function (b) {
				return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
			},
			matcher: function (a, b) {
				return d("" + b).toUpperCase().indexOf(d("" + a).toUpperCase()) >= 0
			},
			separator: ",",
			tokenSeparators: [],
			tokenizer: B,
			escapeMarkup: u,
			blurOnChange: !1,
			selectOnBlur: !1,
			adaptContainerCssClass: function (a) {
				return a
			},
			adaptDropdownCssClass: function () {
				return null
			},
			nextSearchTerm: function () {
				return b
			},
			searchInputPlaceholder: "",
			createSearchChoicePosition: "top",
			shouldFocusInput: function (a) {
				var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
				return b && a.opts.minimumResultsForSearch < 0 ? !1 : !0
			}
		}, a.fn.select2.locales = [], a.fn.select2.locales.en = {
			formatMatches: function (a) {
				return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
			},
			formatNoMatches: function () {
				return "No matches found"
			},
			formatAjaxError: function () {
				return "Loading failed"
			},
			formatInputTooShort: function (a, b) {
				var c = b - a.length;
				return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
			},
			formatInputTooLong: function (a, b) {
				var c = a.length - b;
				return "Please delete " + c + " character" + (1 == c ? "" : "s")
			},
			formatSelectionTooBig: function (a) {
				return "You can only select " + a + " item" + (1 == a ? "" : "s")
			},
			formatLoadMore: function () {
				return "Loading more results…"
			},
			formatSearching: function () {
				return "Searching…"
			}
		}, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
			transport: a.ajax,
			params: {
				type: "GET",
				cache: !1,
				dataType: "json"
			}
		}, window.Select2 = {
			query: {
				ajax: v,
				local: w,
				tags: x
			},
			util: {
				debounce: l,
				markMatch: t,
				escapeMarkup: u,
				stripDiacritics: d
			},
			"class": {
				"abstract": E,
				single: F,
				multi: G
			}
		}
	}
}(jQuery);

/*Redactor 8.25*/
var rwindow, rdocument;
if ("undefined" == typeof RELANG) var RELANG = {};
var RLANG = {
	html: "HTML",
	video: "Insert Video",
	image: "Insert Image",
	table: "Table",
	link: "Link",
	link_insert: "Insert link",
	unlink: "Unlink",
	formatting: "Formatting",
	paragraph: "Paragraph",
	quote: "Quote",
	code: "Code",
	fixwidth: "Fixed",
	header1: "Header 1",
	header2: "Header 2",
	header3: "Header 3",
	header4: "Header 4",
	bold: "Bold",
	italic: "Italic",
	fontcolor: "Font Color",
	backcolor: "Back Color",
	unorderedlist: "Unordered List",
	orderedlist: "Ordered List",
	outdent: "Outdent",
	indent: "Indent",
	cancel: "Cancel",
	insert: "Insert",
	save: "Save",
	_delete: "Delete",
	insert_table: "Insert Table",
	insert_row_above: "Add Row Above",
	insert_row_below: "Add Row Below",
	insert_column_left: "Add Column Left",
	insert_column_right: "Add Column Right",
	delete_column: "Delete Column",
	delete_row: "Delete Row",
	delete_table: "Delete Table",
	rows: "Rows",
	columns: "Columns",
	add_head: "Add Head",
	delete_head: "Delete Head",
	title: "Title",
	image_position: "Position",
	none: "None",
	left: "Left",
	right: "Right",
	image_web_link: "Image Web Link",
	text: "Text",
	mailto: "Email",
	web: "URL",
	video_html_code: "Video Embed Code",
	file: "Insert File",
	upload: "Upload",
	download: "Download",
	choose: "Choose",
	or_choose: "Or choose",
	drop_file_here: "Drop file here",
	align_left: "Align text to the left",
	align_center: "Center text",
	align_right: "Align text to the right",
	align_justify: "Justify text",
	horizontalrule: "Insert Horizontal Rule",
	deleted: "Deleted",
	anchor: "Anchor",
	link_new_tab: "Open link in new tab",
	underline: "Underline",
	alignment: "Alignment"
};
! function (a) {
	jQuery.fn.redactor = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("redactor");
			e || d.data("redactor", e = new b(this, c))
		})
	};
	var b = function (b, c) {
		this.$el = a(b), "undefined" != typeof c && "undefined" != typeof c.lang && "en" !== c.lang && "undefined" != typeof RELANG[c.lang] && (RLANG = RELANG[c.lang]), this.opts = a.extend({
			iframe: !1,
			css: !1,
			lang: "en",
			direction: "ltr",
			callback: !1,
			keyupCallback: !1,
			keydownCallback: !1,
			execCommandCallback: !1,
			plugins: !1,
			cleanup: !0,
			focus: !1,
			tabindex: !1,
			autoresize: !0,
			minHeight: !1,
			fixed: !1,
			fixedTop: 0,
			fixedBox: !1,
			source: !0,
			shortcuts: !0,
			mobile: !0,
			air: !1,
			wym: !1,
			convertLinks: !0,
			convertDivs: !0,
			protocol: "http://",
			autosave: !1,
			autosaveCallback: !1,
			interval: 60,
			imageGetJson: !1,
			imageUpload: !1,
			imageUploadCallback: !1,
			imageUploadErrorCallback: !1,
			fileUpload: !1,
			fileUploadCallback: !1,
			fileUploadErrorCallback: !1,
			uploadCrossDomain: !1,
			uploadFields: !1,
			observeImages: !0,
			overlay: !0,
			allowedTags: ["form", "input", "button", "select", "option", "datalist", "output", "textarea", "fieldset", "legend", "section", "header", "hgroup", "aside", "footer", "article", "details", "nav", "progress", "time", "canvas", "code", "span", "div", "label", "a", "br", "p", "b", "i", "del", "strike", "u", "img", "video", "source", "track", "audio", "iframe", "object", "embed", "param", "blockquote", "mark", "cite", "small", "ul", "ol", "li", "hr", "dl", "dt", "dd", "sup", "sub", "big", "pre", "code", "figure", "figcaption", "strong", "em", "table", "tr", "td", "th", "tbody", "thead", "tfoot", "h1", "h2", "h3", "h4", "h5", "h6"],
			toolbarExternal: !1,
			buttonsCustom: {},
			buttonsAdd: [],
			buttons: ["html", "|", "formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent", "|", "image", "video", "file", "table", "link", "|", "fontcolor", "backcolor", "|", "alignment", "|", "horizontalrule"],
			airButtons: ["formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent", "|", "fontcolor", "backcolor"],
			formattingTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4"],
			activeButtons: ["deleted", "italic", "bold", "underline", "unorderedlist", "orderedlist"],
			activeButtonsStates: {
				b: "bold",
				strong: "bold",
				i: "italic",
				em: "italic",
				del: "deleted",
				strike: "deleted",
				ul: "unorderedlist",
				ol: "orderedlist",
				u: "underline",
				code: "fixwidth"
			},
			colors: ["#ffffff", "#000000", "#eeece1", "#1f497d", "#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#ffff00", "#f2f2f2", "#7f7f7f", "#ddd9c3", "#c6d9f0", "#dbe5f1", "#f2dcdb", "#ebf1dd", "#e5e0ec", "#dbeef3", "#fdeada", "#fff2ca", "#d8d8d8", "#595959", "#c4bd97", "#8db3e2", "#b8cce4", "#e5b9b7", "#d7e3bc", "#ccc1d9", "#b7dde8", "#fbd5b5", "#ffe694", "#bfbfbf", "#3f3f3f", "#938953", "#548dd4", "#95b3d7", "#d99694", "#c3d69b", "#b2a2c7", "#b7dde8", "#fac08f", "#f2c314", "#a5a5a5", "#262626", "#494429", "#17365d", "#366092", "#953734", "#76923c", "#5f497a", "#92cddc", "#e36c09", "#c09100", "#7f7f7f", "#0c0c0c", "#1d1b10", "#0f243e", "#244061", "#632423", "#4f6128", "#3f3151", "#31859b", "#974806", "#7f6000"],
			emptyHtml: "<p><br /></p>",
			buffer: !1,
			visual: !0,
			modal_file: String() + '<div id="redactor_modal_content"><form id="redactorUploadFileForm" method="post" action="" enctype="multipart/form-data"><label>Name (optional)</label><input type="text" id="redactor_filename" class="redactor_input" /><div style="margin-top: 7px;"><input type="file" id="redactor_file" name="file" /></div></form><br></div>',
			modal_image_edit: String() + '<div id="redactor_modal_content"><label>' + RLANG.title + '</label><input id="redactor_file_alt" class="redactor_input" /><label>' + RLANG.link + '</label><input id="redactor_file_link" class="redactor_input" /><label>' + RLANG.image_position + '</label><select id="redactor_form_image_align"><option value="none">' + RLANG.none + '</option><option value="left">' + RLANG.left + '</option><option value="right">' + RLANG.right + '</option></select></div><div id="redactor_modal_footer"><a href="javascript:void(null);" id="redactor_image_delete_btn" class="redactor_modal_btn">' + RLANG._delete + '</a>&nbsp;&nbsp;&nbsp;<a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="save" class="redactor_modal_btn" id="redactorSaveBtn" value="' + RLANG.save + '" /></div>',
			modal_image: String() + '<div id="redactor_modal_content"><div id="redactor_tabs"><a href="javascript:void(null);" class="redactor_tabs_act">' + RLANG.upload + '</a><a href="javascript:void(null);">' + RLANG.choose + '</a><a href="javascript:void(null);">' + RLANG.link + '</a></div><form id="redactorInsertImageForm" method="post" action="" enctype="multipart/form-data"><div id="redactor_tab1" class="redactor_tab"><input type="file" id="redactor_file" name="file" /></div><div id="redactor_tab2" class="redactor_tab" style="display: none;"><div id="redactor_image_box"></div></div></form><div id="redactor_tab3" class="redactor_tab" style="display: none;"><label>' + RLANG.image_web_link + '</label><input type="text" name="redactor_file_link" id="redactor_file_link" class="redactor_input"  /></div></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="upload" class="redactor_modal_btn" id="redactor_upload_btn" value="' + RLANG.insert + '" /></div>',
			modal_link: String() + '<div id="redactor_modal_content"><form id="redactorInsertLinkForm" method="post" action=""><div id="redactor_tabs"><a href="javascript:void(null);" class="redactor_tabs_act">URL</a><a href="javascript:void(null);">Email</a><a href="javascript:void(null);">' + RLANG.anchor + '</a></div><input type="hidden" id="redactor_tab_selected" value="1" /><div class="redactor_tab" id="redactor_tab1"><label>URL</label><input type="text" id="redactor_link_url" class="redactor_input"  /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_url_text" /><label><input type="checkbox" id="redactor_link_blank"> ' + RLANG.link_new_tab + '</label></div><div class="redactor_tab" id="redactor_tab2" style="display: none;"><label>Email</label><input type="text" id="redactor_link_mailto" class="redactor_input" /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_mailto_text" /></div><div class="redactor_tab" id="redactor_tab3" style="display: none;"><label>' + RLANG.anchor + '</label><input type="text" class="redactor_input" id="redactor_link_anchor"  /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_anchor_text" /></div></form></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" class="redactor_modal_btn" id="redactor_insert_link_btn" value="' + RLANG.insert + '" /></div>',
			modal_table: String() + '<div id="redactor_modal_content"><label>' + RLANG.rows + '</label><input type="text" size="5" value="2" id="redactor_table_rows" /><label>' + RLANG.columns + '</label><input type="text" size="5" value="3" id="redactor_table_columns" /></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="upload" class="redactor_modal_btn" id="redactor_insert_table_btn" value="' + RLANG.insert + '" /></div>',
			modal_video: String() + '<div id="redactor_modal_content"><form id="redactorInsertVideoForm"><label>' + RLANG.video_html_code + '</label><textarea id="redactor_insert_video_area" style="width: 99%; height: 160px;"></textarea></form></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" class="redactor_modal_btn" id="redactor_insert_video_btn" value="' + RLANG.insert + '" /></div>',
			toolbar: {
				html: {
					title: RLANG.html,
					func: "toggle"
				},
				formatting: {
					title: RLANG.formatting,
					func: "show",
					dropdown: {
						p: {
							title: RLANG.paragraph,
							exec: "formatblock"
						},
						blockquote: {
							title: RLANG.quote,
							exec: "formatblock",
							className: "redactor_format_blockquote"
						},
						pre: {
							title: RLANG.code,
							exec: "formatblock",
							className: "redactor_format_pre"
						},
						h1: {
							title: RLANG.header1,
							exec: "formatblock",
							className: "redactor_format_h1"
						},
						h2: {
							title: RLANG.header2,
							exec: "formatblock",
							className: "redactor_format_h2"
						},
						h3: {
							title: RLANG.header3,
							exec: "formatblock",
							className: "redactor_format_h3"
						},
						h4: {
							title: RLANG.header4,
							exec: "formatblock",
							className: "redactor_format_h4"
						}
					}
				},
				bold: {
					title: RLANG.bold,
					exec: "bold"
				},
				fixwidth: {
					title: RLANG.fixwidth,
					func: "wrapCode"
				},
				italic: {
					title: RLANG.italic,
					exec: "italic"
				},
				deleted: {
					title: RLANG.deleted,
					exec: "strikethrough"
				},
				underline: {
					title: RLANG.underline,
					exec: "underline"
				},
				unorderedlist: {
					title: "&bull; " + RLANG.unorderedlist,
					exec: "insertunorderedlist"
				},
				orderedlist: {
					title: "1. " + RLANG.orderedlist,
					exec: "insertorderedlist"
				},
				outdent: {
					title: "< " + RLANG.outdent,
					exec: "outdent"
				},
				indent: {
					title: "> " + RLANG.indent,
					exec: "indent"
				},
				image: {
					title: RLANG.image,
					func: "showImage"
				},
				video: {
					title: RLANG.video,
					func: "showVideo"
				},
				file: {
					title: RLANG.file,
					func: "showFile"
				},
				table: {
					title: RLANG.table,
					func: "show",
					dropdown: {
						insert_table: {
							title: RLANG.insert_table,
							func: "showTable"
						},
						separator_drop1: {
							name: "separator"
						},
						insert_row_above: {
							title: RLANG.insert_row_above,
							func: "insertRowAbove"
						},
						insert_row_below: {
							title: RLANG.insert_row_below,
							func: "insertRowBelow"
						},
						insert_column_left: {
							title: RLANG.insert_column_left,
							func: "insertColumnLeft"
						},
						insert_column_right: {
							title: RLANG.insert_column_right,
							func: "insertColumnRight"
						},
						separator_drop2: {
							name: "separator"
						},
						add_head: {
							title: RLANG.add_head,
							func: "addHead"
						},
						delete_head: {
							title: RLANG.delete_head,
							func: "deleteHead"
						},
						separator_drop3: {
							name: "separator"
						},
						delete_column: {
							title: RLANG.delete_column,
							func: "deleteColumn"
						},
						delete_row: {
							title: RLANG.delete_row,
							func: "deleteRow"
						},
						delete_table: {
							title: RLANG.delete_table,
							func: "deleteTable"
						}
					}
				},
				link: {
					title: RLANG.link,
					func: "show",
					dropdown: {
						link: {
							title: RLANG.link_insert,
							func: "showLink"
						},
						unlink: {
							title: RLANG.unlink,
							exec: "unlink"
						}
					}
				},
				fontcolor: {
					title: RLANG.fontcolor,
					func: "show"
				},
				backcolor: {
					title: RLANG.backcolor,
					func: "show"
				},
				alignment: {
					title: RLANG.alignment,
					func: "show",
					dropdown: {
						alignleft: {
							title: RLANG.align_left,
							exec: "JustifyLeft"
						},
						aligncenter: {
							title: RLANG.align_center,
							exec: "JustifyCenter"
						},
						alignright: {
							title: RLANG.align_right,
							exec: "JustifyRight"
						},
						justify: {
							title: RLANG.align_justify,
							exec: "JustifyFull"
						}
					}
				},
				alignleft: {
					exec: "JustifyLeft",
					title: RLANG.align_left
				},
				aligncenter: {
					exec: "JustifyCenter",
					title: RLANG.align_center
				},
				alignright: {
					exec: "JustifyRight",
					title: RLANG.align_right
				},
				justify: {
					exec: "JustifyFull",
					title: RLANG.align_justify
				},
				horizontalrule: {
					exec: "inserthorizontalrule",
					title: RLANG.horizontalrule
				}
			}
		}, c, this.$el.data()), this.dropdowns = [], this.init()
	};
	b.prototype = {
		init: function () {
			function b() {
				if (this.enableAir(), this.buildToolbar(), "object" == typeof this.opts.plugins && a.each(this.opts.plugins, a.proxy(function (b, c) {
						"undefined" != typeof RedactorPlugins[c] && (a.extend(this, RedactorPlugins[c]), "undefined" != typeof RedactorPlugins[c].init && this.init())
					}, this)), this.opts.activeButtons !== !1 && this.opts.toolbar !== !1) {
					var b = a.proxy(function () {
						this.observeFormatting()
					}, this);
					this.$editor.click(b).keyup(b)
				}
				var c = !1;
				if (this.browser("webkit") && -1 === navigator.userAgent.indexOf("Chrome")) {
					var d = this.browser("version").split(".");
					d[0] < 536 && (c = !0)
				}
				if (this.isMobile(!0) === !1 && c === !1 && this.browser("opera") === !1 && this.$editor.bind("paste", a.proxy(function () {
						if (this.opts.cleanup === !1) return !0;
						this.pasteRunning = !0, this.setBuffer(), this.saveScroll = this.opts.autoresize === !0 ? this.document.body.scrollTop : this.$editor.scrollTop();
						var b = this.extractContent();
						setTimeout(a.proxy(function () {
							var a = this.extractContent();
							this.$editor.append(b), this.restoreSelection();
							var c = this.getFragmentHtml(a);
							this.pasteCleanUp(c), this.pasteRunning = !1
						}, this), 1)
					}, this)), this.keyup(), this.keydown(), this.opts.autosave !== !1 && this.autoSave(), setTimeout(a.proxy(function () {
						this.observeImages(), this.observeTables()
					}, this), 1), this.browser("mozilla")) {
					this.$editor.click(a.proxy(function () {
						this.saveSelection()
					}, this));
					try {
						this.document.execCommand("enableObjectResizing", !1, !1), this.document.execCommand("enableInlineTableEditing", !1, !1)
					} catch (e) {}
				}
				this.opts.focus && setTimeout(a.proxy(function () {
					this.$editor.focus()
				}, this), 1), this.opts.fixed && (this.observeScroll(), a(document).scroll(a.proxy(this.observeScroll, this))), "function" == typeof this.opts.callback && this.opts.callback(this), this.opts.toolbar !== !1 && this.$toolbar.find("a").attr("tabindex", "-1")
			}
			if (this.height = this.$el.css("height"), this.width = this.$el.css("width"), rdocument = this.document = document, rwindow = this.window = window, this.opts.mobile === !1 && this.isMobile()) return this.build(!0), !1;
			if (this.opts.iframe && (this.opts.autoresize = !1), this.opts.air) this.opts.buttons = this.opts.airButtons;
			else if (this.opts.toolbar !== !1) {
				if (this.opts.source === !1) {
					var c = this.opts.buttons.indexOf("html"),
						d = this.opts.buttons[c + 1];
					this.opts.buttons.splice(c, 1), "undefined" != typeof d && "|" === d && this.opts.buttons.splice(c, 1)
				}
				a.extend(this.opts.toolbar, this.opts.buttonsCustom), a.each(this.opts.buttonsAdd, a.proxy(function (a, b) {
					this.opts.buttons.push(b)
				}, this))
			}
			this.opts.toolbar !== !1 && a.each(this.opts.toolbar.formatting.dropdown, a.proxy(function (b) {
				"-1" == a.inArray(b, this.opts.formattingTags) && delete this.opts.toolbar.formatting.dropdown[b]
			}, this)), this.build(!1, b)
		},
		shortcuts: function (a, b) {
			a.preventDefault(), this.execCommand(b, !1)
		},
		keyup: function () {
			this.$editor.keyup(a.proxy(function (a) {
				var b = a.keyCode || a.which;
				return this.browser("mozilla") && !this.pasteRunning && this.saveSelection(), "function" == typeof this.opts.keyupCallback && this.opts.keyupCallback(this, a), 8 === b || 46 === b ? (this.observeImages(), this.formatEmpty(a)) : (13 !== b || a.shiftKey || a.ctrlKey || a.metaKey || (this.browser("webkit") && this.formatNewLine(a), this.opts.convertLinks && this.$editor.linkify()), this.syncCode(), void 0)
			}, this))
		},
		keydown: function () {
			this.$editor.keydown(a.proxy(function (b) {
				var c = b.keyCode || b.which,
					d = this.getParentNode(),
					e = this.getCurrentNode(),
					f = !1,
					g = b.ctrlKey || b.metaKey;
				if (!d && !e || "PRE" !== a(d).get(0).tagName && "PRE" !== a(e).get(0).tagName || (f = !0), "function" == typeof this.opts.keydownCallback && this.opts.keydownCallback(this, b), g && this.opts.shortcuts && (90 === c ? this.opts.buffer !== !1 ? (b.preventDefault(), this.getBuffer()) : b.shiftKey ? this.shortcuts(b, "redo") : this.shortcuts(b, "undo") : 77 === c ? this.shortcuts(b, "removeFormat") : 66 === c ? this.shortcuts(b, "bold") : 73 === c ? this.shortcuts(b, "italic") : 74 === c ? this.shortcuts(b, "insertunorderedlist") : 75 === c ? this.shortcuts(b, "insertorderedlist") : 76 === c ? this.shortcuts(b, "superscript") : 72 === c && this.shortcuts(b, "subscript")), g || 90 === c || (this.opts.buffer = !1), f === !0 && 13 === c) {
					b.preventDefault();
					var h = a(e).parent().text();
					return this.insertNodeAtCaret(this.document.createTextNode("\r\n")), -1 == h.search(/\s$/) && this.insertNodeAtCaret(this.document.createTextNode("\r\n")), this.syncCode(), !1
				}
				if (this.opts.shortcuts && !b.shiftKey && 9 === c) {
					if (f !== !1) return b.preventDefault(), this.insertNodeAtCaret(this.document.createTextNode("	")), this.syncCode(), !1;
					this.shortcuts(b, "indent")
				} else this.opts.shortcuts && b.shiftKey && 9 === c && this.shortcuts(b, "outdent");
				return this.browser("webkit") && -1 === navigator.userAgent.indexOf("Chrome") ? this.safariShiftKeyEnter(b, c) : void 0
			}, this))
		},
		build: function (b, c) {
			function d() {
				this.$editor = this.$content.contents().find("body").attr("contenteditable", !0).attr("dir", this.opts.direction), rdocument = this.document = this.$editor[0].ownerDocument, rwindow = this.window = this.document.defaultView || window, this.opts.css !== !1 && this.$content.contents().find("head").append('<link rel="stylesheet" href="' + this.opts.css + '" />'), this.$editor.html(g), c && (c.call(this), c = null)
			}
			if (b !== !0) {
				if (this.$box = a('<div class="redactor_box"></div>'), this.opts.air && (this.air = a('<div class="redactor_air" style="display: none;"></div>')), this.$content = null, this.textareamode = !0, "TEXTAREA" === this.$el.get(0).tagName) {
					if (this.opts.iframe) {
						var e = this;
						this.$content = a('<iframe style="width: 100%;" frameborder="0"></iframe>').load(function () {
							d.call(e)
						})
					} else this.$content = this.$editor = a("<div></div>");
					var f = this.$el.get(0).className.split(/\s+/);
					a.each(f, a.proxy(function (a, b) {
						this.$content.addClass("redactor_" + b)
					}, this))
				} else this.textareamode = !1, this.$content = this.$editor = this.$el, this.$el = a('<textarea name="' + this.$editor.attr("id") + '"></textarea>').css("height", this.height);
				this.$editor && this.$editor.addClass("redactor_editor").attr("contenteditable", !0).attr("dir", this.opts.direction), this.opts.tabindex !== !1 && this.$content.attr("tabindex", this.opts.tabindex), this.opts.minHeight !== !1 && this.$content.css("min-height", this.opts.minHeight + "px"), this.opts.wym === !0 && this.$content.addClass("redactor_editor_wym"), this.opts.autoresize === !1 && this.$content.css("height", this.height), this.$el.hide();
				var g = "";
				this.textareamode ? (g = this.$el.val(), g = this.savePreCode(g), this.$box.insertAfter(this.$el).append(this.$content).append(this.$el)) : (g = this.$editor.html(), g = this.savePreCode(g), this.$box.insertAfter(this.$content).append(this.$el).append(this.$editor)), g = this.paragraphy(g), this.$editor && this.$editor.html(g), this.textareamode === !1 && this.syncCode()
			} else if ("TEXTAREA" !== this.$el.get(0).tagName) {
				var g = this.$el.val(),
					h = a('<textarea name="' + this.$editor.attr("id") + '"></textarea>').css("height", this.height).val(g);
				this.$el.hide(), this.$el.after(h)
			}
			c && this.$editor && c.call(this)
		},
		enableAir: function () {
			return this.opts.air === !1 ? !1 : (this.air.hide(), this.$editor.bind("textselect", a.proxy(function (a) {
				this.showAir(a)
			}, this)), this.$editor.bind("textunselect", a.proxy(function () {
				this.air.hide()
			}, this)), void 0)
		},
		showAir: function (b) {
			a(".redactor_air").hide();
			var c = this.air.innerWidth(),
				d = b.clientX;
			a(this.document).width() < d + c && (d -= c);
			var e = b.clientY + a(document).scrollTop() + 14;
			this.opts.iframe === !0 && (e += this.$box.position().top, d += this.$box.position().left), this.air.css({
				left: d + "px",
				top: e + "px"
			}).show()
		},
		syncCode: function () {
			this.$el.val(this.$editor.html())
		},
		setCode: function (a, b) {
			a = this.stripTags(a), this.$editor.html(a), 0 != b && this.$editor.focus(), this.syncCode()
		},
		getCode: function () {
			var a = "";
			return a = this.opts.visual ? this.$editor.html() : this.$el.val(), this.stripTags(a)
		},
		insertHtml: function (a) {
			this.$editor.focus(), this.pasteHtmlAtCaret(a), this.observeImages(), this.syncCode()
		},
		pasteHtmlAtCaret: function (a) {
			var b, c;
			if (this.document.getSelection) {
				if (b = this.window.getSelection(), b.getRangeAt && b.rangeCount) {
					c = b.getRangeAt(0), c.deleteContents();
					var d = this.document.createElement("div");
					d.innerHTML = a;
					for (var e, f, g = this.document.createDocumentFragment(); e = d.firstChild;) f = g.appendChild(e);
					c.insertNode(g), f && (c = c.cloneRange(), c.setStartAfter(f), c.collapse(!0), b.removeAllRanges(), b.addRange(c))
				}
			} else this.document.selection && "Control" != this.document.selection.type && this.document.selection.createRange().pasteHTML(a)
		},
		destroy: function () {
			var b = this.getCode();
			this.textareamode ? (this.$box.after(this.$el), this.$box.remove(), this.$el.height(this.height).val(b).show()) : (this.$box.after(this.$editor), this.$box.remove(), this.$editor.removeClass("redactor_editor").removeClass("redactor_editor_wym").attr("contenteditable", !1).html(b).show()), this.opts.toolbarExternal && a(this.opts.toolbarExternal).empty(), a(".redactor_air").remove();
			for (var c = 0; c < this.dropdowns.length; c++) this.dropdowns[c].remove(), delete this.dropdowns[c];
			this.opts.autosave !== !1 && clearInterval(this.autosaveInterval)
		},
		observeFormatting: function () {
			var b = this.getCurrentNode();
			this.inactiveAllButtons(), a.each(this.opts.activeButtonsStates, a.proxy(function (c, d) {
				0 != a(b).closest(c, this.$editor.get()[0]).length && this.setBtnActive(d)
			}, this));
			var c = a(b).closest(["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "td"]);
			if ("undefined" != typeof c[0] && "undefined" != typeof c[0].elem && 0 != a(c[0].elem).size()) {
				var d = a(c[0].elem).css("text-align");
				switch (d) {
					case "right":
						this.setBtnActive("alignright");
						break;
					case "center":
						this.setBtnActive("aligncenter");
						break;
					case "justify":
						this.setBtnActive("justify");
						break;
					default:
						this.setBtnActive("alignleft")
				}
			}
		},
		observeImages: function () {
			return this.opts.observeImages === !1 ? !1 : (this.$editor.find("img").each(a.proxy(function (b, c) {
				this.browser("msie") && a(c).attr("unselectable", "on"), this.resizeImage(c)
			}, this)), void 0)
		},
		observeTables: function () {
			this.$editor.find("table").click(a.proxy(this.tableObserver, this))
		},
		observeScroll: function () {
			var b = a(this.document).scrollTop(),
				c = this.$box.offset().top,
				d = 0;
			if (b > c) {
				var e = "100%";
				this.opts.fixedBox && (d = this.$box.offset().left, e = this.$box.innerWidth()), this.fixed = !0, this.$toolbar.css({
					position: "fixed",
					width: e,
					zIndex: 1005,
					top: this.opts.fixedTop + "px",
					left: d
				})
			} else this.fixed = !1, this.$toolbar.css({
				position: "relative",
				width: "auto",
				zIndex: 1,
				top: 0,
				left: d
			})
		},
		setBuffer: function () {
			this.saveSelection(), this.opts.buffer = this.$editor.html()
		},
		getBuffer: function () {
			return this.opts.buffer === !1 ? !1 : (this.$editor.html(this.opts.buffer), this.browser("msie") || this.restoreSelection(), this.opts.buffer = !1, void 0)
		},
		execCommand: function (b, c) {
			if (0 == this.opts.visual) return this.$el.focus(), !1;
			try {
				var d;
				if ("inserthtml" === b) this.browser("msie") ? (this.$editor.focus(), this.document.selection.createRange().pasteHTML(c)) : this.pasteHtmlAtCaret(c), this.observeImages();
				else if ("unlink" === b) d = this.getParentNode(), "A" === a(d).get(0).tagName ? a(d).replaceWith(a(d).text()) : this.execRun(b, c);
				else if ("JustifyLeft" === b || "JustifyCenter" === b || "JustifyRight" === b || "JustifyFull" === b) {
					d = this.getCurrentNode();
					var e = a(d).get(0).tagName;
					if (this.opts.iframe === !1 && 0 == a(d).parents(".redactor_editor").size()) return !1;
					var f = ["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "TD"];
					if (-1 != a.inArray(e, f)) {
						var g = !1;
						"JustifyCenter" === b ? g = "center" : "JustifyRight" === b ? g = "right" : "JustifyFull" === b && (g = "justify"), g === !1 ? a(d).css("text-align", "") : a(d).css("text-align", g)
					} else this.execRun(b, c)
				} else if ("formatblock" === b && "blockquote" === c)
					if (d = this.getCurrentNode(), "BLOCKQUOTE" === a(d).get(0).tagName)
						if (this.browser("msie")) {
							var h = a("<p>" + a(d).html() + "</p>");
							a(d).replaceWith(h)
						} else this.execRun(b, "p");
				else if ("P" === a(d).get(0).tagName) {
					var i = a(d).parent();
					if ("BLOCKQUOTE" === a(i).get(0).tagName) {
						var h = a("<p>" + a(d).html() + "</p>");
						a(i).replaceWith(h), this.setSelection(h[0], 0, h[0], 0)
					} else if (this.browser("msie")) {
						var h = a("<blockquote>" + a(d).html() + "</blockquote>");
						a(d).replaceWith(h)
					} else this.execRun(b, c)
				} else this.execRun(b, c);
				else "formatblock" !== b || "pre" !== c && "p" !== c ? ("inserthorizontalrule" === b && this.browser("msie") && this.$editor.focus(), "formatblock" === b && this.browser("mozilla") && this.$editor.focus(), this.execRun(b, c)) : (d = this.getParentNode(), "PRE" === a(d).get(0).tagName ? a(d).replaceWith("<p>" + this.encodeEntities(a(d).text()) + "</p>") : this.execRun(b, c));
				"inserthorizontalrule" === b && this.$editor.find("hr").removeAttr("id"), this.syncCode(), this.oldIE() && this.$editor.focus(), "function" == typeof this.opts.execCommandCallback && this.opts.execCommandCallback(this, b), this.opts.air && this.air.hide()
			} catch (j) {}
		},
		execRun: function (a, b) {
			"formatblock" === a && this.browser("msie") && (b = "<" + b + ">"), this.document.execCommand(a, !1, b)
		},
		formatNewLine: function () {
			var b = this.getParentNode();
			if ("DIV" === b.nodeName && "redactor_editor" === b.className) {
				var c = a(this.getCurrentNode());
				if ("DIV" === c.get(0).tagName && ("" === c.html() || "<br>" === c.html())) {
					var d = a("<p>").append(c.clone().get(0).childNodes);
					c.replaceWith(d), d.html("<br />"), this.setSelection(d[0], 0, d[0], 0)
				}
			}
		},
		safariShiftKeyEnter: function (b, c) {
			return b.shiftKey && 13 === c ? (b.preventDefault(), this.insertNodeAtCaret(a("<span><br /></span>").get(0)), this.syncCode(), !1) : !0
		},
		formatEmpty: function (b) {
			var c = a.trim(this.$editor.html());
			c = c.replace(/<br\s?\/?>/i, "");
			var d = c.replace(/<p>\s?<\/p>/gi, "");
			if ("" === c || "" === d) {
				b.preventDefault();
				var e = a(this.opts.emptyHtml).get(0);
				return this.$editor.html(e), this.setSelection(e, 0, e, 0), this.syncCode(), !1
			}
			this.syncCode()
		},
		paragraphy: function (b) {
			if (b = a.trim(b), "" === b || "<p></p>" === b) return this.opts.emptyHtml;
			this.opts.convertDivs && (b = b.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p>$2</p>"));
			var c = function (a, b, c) {
					return a.replace(new RegExp(b, "g"), c)
				},
				d = function (a, d) {
					return c(b, a, d)
				},
				e = "(table|thead|tfoot|caption|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|blockquote|address|math|style|script|object|input|param|p|h[1-6])";
			return b += "\n", d("<br />\\s*<br />", "\n\n"), d("(<" + e + "[^>]*>)", "\n$1"), d("(</" + e + ">)", "$1\n\n"), d("\r\n|\r", "\n"), d("\n\n+", "\n\n"), d("\n?((.|\n)+?)$", "<p>$1</p>\n"), d("<p>\\s*?</p>", ""), d("<p>(<div[^>]*>\\s*)", "$1<p>"), d("<p>([^<]+)\\s*?(</(div|address|form)[^>]*>)", "<p>$1</p>$2"), d("<p>\\s*(</?" + e + "[^>]*>)\\s*</p>", "$1"), d("<p>(<li.+?)</p>", "$1"), d("<p>\\s*(</?" + e + "[^>]*>)", "$1"), d("(</?" + e + "[^>]*>)\\s*</p>", "$1"), d("(</?" + e + "[^>]*>)\\s*<br />", "$1"), d("<br />(\\s*</?(p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)", "$1"), -1 != b.indexOf("<pre") && d("(<pre(.|\n)*?>)((.|\n)*?)</pre>", function (a, b, d, e) {
				return c(b, "\\\\(['\"\\\\])", "$1") + c(c(c(e, "<p>", "\n"), "</p>|<br />", ""), "\\\\(['\"\\\\])", "$1") + "</pre>"
			}), d("\n</p>$", "</p>")
		},
		stripTags: function (b) {
			var c = this.opts.allowedTags,
				d = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
			return b.replace(d, function (b, d) {
				return a.inArray(d.toLowerCase(), c) > "-1" ? b : ""
			})
		},
		savePreCode: function (b) {
			var c = b.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
			return null !== c && a.each(c, a.proxy(function (a, c) {
				var d = c.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);
				d[2] = this.encodeEntities(d[2]), b = b.replace(c, "<pre" + d[1] + ">" + d[2] + "</pre>")
			}, this)), b
		},
		encodeEntities: function (a) {
			return a = String(a).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
		},
		cleanupPre: function (a) {
			a = a.replace(/<br>/gi, "\n"), a = a.replace(/<\/p>/gi, "\n"), a = a.replace(/<\/div>/gi, "\n");
			var b = this.document.createElement("div");
			return b.innerHTML = a, b.textContent || b.innerText
		},
		pasteCleanUp: function (b) {
			var c = this.getParentNode();
			return "PRE" === a(c).get(0).tagName ? (b = this.cleanupPre(b), this.pasteCleanUpInsert(b), !0) : (b = b.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, ""), b = b.replace(/(&nbsp;){2,}/gi, "&nbsp;"), b = b.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2"), b = this.stripTags(b), b = b.replace(/<td><\/td>/gi, "[td]"), b = b.replace(/<td>&nbsp;<\/td>/gi, "[td]"), b = b.replace(/<td><br><\/td>/gi, "[td]"), b = b.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]'), b = b.replace(/<iframe(.*?)>([\w\W]*?)<\/iframe>/gi, "[iframe$1]$2[/iframe]"), b = b.replace(/<video(.*?)>([\w\W]*?)<\/video>/gi, "[video$1]$2[/video]"), b = b.replace(/<audio(.*?)>([\w\W]*?)<\/audio>/gi, "[audio$1]$2[/audio]"), b = b.replace(/<embed(.*?)>([\w\W]*?)<\/embed>/gi, "[embed$1]$2[/embed]"), b = b.replace(/<object(.*?)>([\w\W]*?)<\/object>/gi, "[object$1]$2[/object]"), b = b.replace(/<param(.*?)>/gi, "[param$1]"), b = b.replace(/<img(.*?)style="(.*?)"(.*?)>/gi, "[img$1$3]"), b = b.replace(/<(\w+)([\w\W]*?)>/gi, "<$1>"), b = b.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, ""), b = b.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, ""), b = b.replace(/\[td\]/gi, "<td>&nbsp;</td>"), b = b.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, '<a href="$1">$2</a>'), b = b.replace(/\[iframe(.*?)\]([\w\W]*?)\[\/iframe\]/gi, "<iframe$1>$2</iframe>"), b = b.replace(/\[video(.*?)\]([\w\W]*?)\[\/video\]/gi, "<video$1>$2</video>"), b = b.replace(/\[audio(.*?)\]([\w\W]*?)\[\/audio\]/gi, "<audio$1>$2</audio>"), b = b.replace(/\[embed(.*?)\]([\w\W]*?)\[\/embed\]/gi, "<embed$1>$2</embed>"), b = b.replace(/\[object(.*?)\]([\w\W]*?)\[\/object\]/gi, "<object$1>$2</object>"), b = b.replace(/\[param(.*?)\]/gi, "<param$1>"), b = b.replace(/\[img(.*?)\]/gi, "<img$1>"), this.opts.convertDivs && (b = b.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p>$2</p>")), b = b.replace(/<span>([\w\W]*?)<\/span>/gi, "$1"), b = b.replace(/\n{3,}/gi, "\n"), b = b.replace(/<p><p>/gi, "<p>"), b = b.replace(/<\/p><\/p>/gi, "</p>"), this.browser("mozilla") && (b = b.replace(/<br>$/gi, "")), this.pasteCleanUpInsert(b), void 0)
		},
		pasteCleanUpInsert: function (b) {
			this.execCommand("inserthtml", b), this.opts.autoresize === !0 ? a(this.document.body).scrollTop(this.saveScroll) : this.$editor.scrollTop(this.saveScroll)
		},
		formattingRemove: function (b) {
			var c = [],
				d = b.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
			return null !== d && a.each(d, function (a, d) {
				b = b.replace(d, "prebuffer_" + a), c.push(d)
			}), b = b.replace(/\s{2,}/g, " "), b = b.replace(/\n/g, " "), b = b.replace(/[\t]*/g, ""), b = b.replace(/\n\s*\n/g, "\n"), b = b.replace(/^[\s\n]*/g, ""), b = b.replace(/[\s\n]*$/g, ""), b = b.replace(/>\s+</g, "><"), c && (a.each(c, function (a, c) {
				b = b.replace("prebuffer_" + a, c)
			}), c = []), b
		},
		formattingIndenting: function (a) {
			return a = a.replace(/<li/g, "	<li"), a = a.replace(/<tr/g, "	<tr"), a = a.replace(/<td/g, "		<td"), a = a.replace(/<\/tr>/g, "	</tr>"), a
		},
		formattingEmptyTags: function (a) {
			for (var b = ["<pre></pre>", "<blockquote>\\s*</blockquote>", "<em>\\s*</em>", "<ul></ul>", "<ol></ol>", "<li></li>", "<table></table>", "<tr></tr>", "<span>\\s*<span>", "<span>&nbsp;<span>", "<b>\\s*</b>", "<b>&nbsp;</b>", "<p>\\s*</p>", "<p>&nbsp;</p>", "<p>\\s*<br>\\s*</p>", "<div>\\s*</div>", "<div>\\s*<br>\\s*</div>"], c = 0; c < b.length; ++c) {
				var d = b[c];
				a = a.replace(new RegExp(d, "gi"), "")
			}
			return a
		},
		formattingAddBefore: function (a) {
			for (var b = "\r\n", c = ["<p", "<form", "</ul>", "</ol>", "<fieldset", "<legend", "<object", "<embed", "<select", "<option", "<input", "<textarea", "<pre", "<blockquote", "<ul", "<ol", "<li", "<dl", "<dt", "<dd", "<table", "<thead", "<tbody", "<caption", "</caption>", "<th", "<tr", "<td", "<figure"], d = 0; d < c.length; ++d) {
				var e = c[d];
				a = a.replace(new RegExp(e, "gi"), b + e)
			}
			return a
		},
		formattingAddAfter: function (a) {
			for (var b = "\r\n", c = ["</p>", "</div>", "</h1>", "</h2>", "</h3>", "</h4>", "</h5>", "</h6>", "<br>", "<br />", "</dl>", "</dt>", "</dd>", "</form>", "</blockquote>", "</pre>", "</legend>", "</fieldset>", "</object>", "</embed>", "</textarea>", "</select>", "</option>", "</table>", "</thead>", "</tbody>", "</tr>", "</td>", "</th>", "</figure>"], d = 0; d < c.length; ++d) {
				var e = c[d];
				a = a.replace(new RegExp(e, "gi"), e + b)
			}
			return a
		},
		formatting: function (a) {
			return a = this.formattingRemove(a), a = this.formattingEmptyTags(a), a = this.formattingAddBefore(a), a = this.formattingAddAfter(a), a = this.formattingIndenting(a), a
		},
		toggle: function () {
			var a;
			if (this.opts.visual) {
				var b = this.$editor.innerHeight();
				this.$editor.hide(), this.$content.hide(), a = this.$editor.html(), this.$el.height(b).val(a).show().focus(), this.setBtnActive("html"), this.opts.visual = !1
			} else {
				this.$el.hide();
				var a = this.$el.val();
				this.$editor.html(a).show(), this.$content.show(), "" === this.$editor.html() && this.setCode(this.opts.emptyHtml), this.$editor.focus(), this.setBtnInactive("html"), this.opts.visual = !0, this.observeImages(), this.observeTables()
			}
		},
		autoSave: function () {
			this.autosaveInterval = setInterval(a.proxy(function () {
				a.ajax({
					url: this.opts.autosave,
					type: "post",
					data: this.$el.attr("name") + "=" + escape(encodeURIComponent(this.getCode())),
					success: a.proxy(function (a) {
						"function" == typeof this.opts.autosaveCallback && this.opts.autosaveCallback(a, this)
					}, this)
				})
			}, this), 1e3 * this.opts.interval)
		},
		buildToolbar: function () {
			return this.opts.toolbar === !1 ? !1 : (this.$toolbar = a("<ul>").addClass("redactor_toolbar"), this.opts.air ? (a(this.air).append(this.$toolbar), a("body").append(this.air)) : this.opts.toolbarExternal === !1 ? this.$box.prepend(this.$toolbar) : a(this.opts.toolbarExternal).html(this.$toolbar), a.each(this.opts.buttons, a.proxy(function (b, c) {
				if ("|" !== c && "undefined" != typeof this.opts.toolbar[c]) {
					var d = this.opts.toolbar[c];
					if (this.opts.fileUpload === !1 && "file" === c) return !0;
					this.$toolbar.append(a("<li>").append(this.buildButton(c, d)))
				}
				"|" === c && this.$toolbar.append(a('<li class="redactor_separator"></li>'))
			}, this)), void 0)
		},
		buildButton: function (b, c) {
			var d = a('<a href="javascript:void(null);" title="' + c.title + '" class="redactor_btn_' + b + '"></a>');
			if ("undefined" == typeof c.func ? d.click(a.proxy(function () {
					-1 != a.inArray(b, this.opts.activeButtons) && (this.inactiveAllButtons(), this.setBtnActive(b)), this.browser("mozilla") && this.$editor.focus(), this.execCommand(c.exec, b)
				}, this)) : "show" !== c.func && d.click(a.proxy(function (a) {
					this[c.func](a)
				}, this)), "undefined" != typeof c.callback && c.callback !== !1 && d.click(a.proxy(function (a) {
					c.callback(this, a, b)
				}, this)), "backcolor" === b || "fontcolor" === b || "undefined" != typeof c.dropdown) {
				var e = a('<div class="redactor_dropdown" style="display: none;">');
				e = "backcolor" === b || "fontcolor" === b ? this.buildColorPicker(e, b) : this.buildDropdown(e, c.dropdown), this.dropdowns.push(e.appendTo(a(document.body))), this.hdlShowDropDown = a.proxy(function (a) {
					this.showDropDown(a, e, b)
				}, this), d.click(this.hdlShowDropDown)
			}
			return d
		},
		buildDropdown: function (b, c) {
			return a.each(c, a.proxy(function (c, d) {
				"undefined" == typeof d.className && (d.className = "");
				var e;
				"undefined" != typeof d.name && "separator" === d.name ? e = a('<a class="redactor_separator_drop">') : (e = a('<a href="javascript:void(null);" class="' + d.className + '">' + d.title + "</a>"), a(e).click("function" == typeof d.callback ? a.proxy(function (a) {
					d.callback(this, a, c)
				}, this) : "undefined" == typeof d.func ? a.proxy(function () {
					this.execCommand(d.exec, c)
				}, this) : a.proxy(function (a) {
					this[d.func](a)
				}, this))), a(b).append(e)
			}, this)), b
		},
		buildColorPicker: function (b, c) {
			var d;
			d = "backcolor" === c ? this.browser("msie") ? "BackColor" : "hilitecolor" : "forecolor", a(b).width(210);
			for (var e = this.opts.colors.length, f = 0; e > f; ++f) {
				var g = this.opts.colors[f],
					h = a('<a rel="' + g + '" href="javascript:void(null);" class="redactor_color_link"></a>').css({
						backgroundColor: g
					});
				a(b).append(h);
				var i = this;
				a(h).click(function () {
					i.execCommand(d, a(this).attr("rel")), "forecolor" === d && i.$editor.find("font").replaceWith(function () {
						return a('<span style="color: ' + a(this).attr("color") + ';">' + a(this).html() + "</span>")
					}), i.browser("msie") && "BackColor" === d && i.$editor.find("font").replaceWith(function () {
						return a('<span style="' + a(this).attr("style") + '">' + a(this).html() + "</span>")
					})
				})
			}
			var j = a('<a href="javascript:void(null);" class="redactor_color_none"></a>').html(RLANG.none);
			return j.click("backcolor" === c ? a.proxy(this.setBackgroundNone, this) : a.proxy(this.setColorNone, this)), a(b).append(j), b
		},
		setBackgroundNone: function () {
			a(this.getParentNode()).css("background-color", "transparent"), this.syncCode()
		},
		setColorNone: function () {
			a(this.getParentNode()).attr("color", "").css("color", ""), this.syncCode()
		},
		showDropDown: function (b, c, d) {
			if (this.getBtn(d).hasClass("dropact")) this.hideAllDropDown();
			else {
				this.hideAllDropDown(), this.setBtnActive(d), this.getBtn(d).addClass("dropact");
				var e = this.getBtn(d).offset().left;
				if (this.opts.air) {
					var f = this.air.offset().top;
					a(c).css({
						position: "absolute",
						left: e + "px",
						top: f + 30 + "px"
					}).show()
				} else if (this.opts.fixed && this.fixed) a(c).css({
					position: "fixed",
					left: e + "px",
					top: "30px"
				}).show();
				else {
					var g = this.$toolbar.offset().top + 30;
					a(c).css({
						position: "absolute",
						left: e + "px",
						top: g + "px"
					}).show()
				}
			}
			var h = a.proxy(function (a) {
				this.hideDropDown(a, c, d)
			}, this);
			a(document).one("click", h), this.$editor.one("click", h), this.$content.one("click", h), b.stopPropagation()
		},
		hideAllDropDown: function () {
			this.$toolbar.find("a.dropact").removeClass("redactor_act").removeClass("dropact"), a(".redactor_dropdown").hide()
		},
		hideDropDown: function (b, c) {
			a(b.target).hasClass("dropact") || (a(c).removeClass("dropact"), this.showedDropDown = !1, this.hideAllDropDown())
		},
		getBtn: function (b) {
			return this.opts.toolbar === !1 ? !1 : a(this.$toolbar.find("a.redactor_btn_" + b))
		},
		setBtnActive: function (a) {
			this.getBtn(a).addClass("redactor_act")
		},
		setBtnInactive: function (a) {
			this.getBtn(a).removeClass("redactor_act")
		},
		inactiveAllButtons: function () {
			a.each(this.opts.activeButtons, a.proxy(function (a, b) {
				this.setBtnInactive(b)
			}, this))
		},
		changeBtnIcon: function (a, b) {
			this.getBtn(a).addClass("redactor_btn_" + b)
		},
		removeBtnIcon: function (a, b) {
			this.getBtn(a).removeClass("redactor_btn_" + b)
		},
		addBtnSeparator: function () {
			this.$toolbar.append(a('<li class="redactor_separator"></li>'))
		},
		addBtnSeparatorAfter: function (b) {
			var c = this.getBtn(b);
			c.parent().after(a('<li class="redactor_separator"></li>'))
		},
		addBtnSeparatorBefore: function (b) {
			var c = this.getBtn(b);
			c.parent().before(a('<li class="redactor_separator"></li>'))
		},
		removeBtnSeparatorAfter: function (a) {
			var b = this.getBtn(a);
			b.parent().next().remove()
		},
		removeBtnSeparatorBefore: function (a) {
			var b = this.getBtn(a);
			b.parent().prev().remove()
		},
		setBtnRight: function (a) {
			return this.opts.toolbar === !1 ? !1 : (this.getBtn(a).parent().addClass("redactor_btn_right"), void 0)
		},
		setBtnLeft: function (a) {
			return this.opts.toolbar === !1 ? !1 : (this.getBtn(a).parent().removeClass("redactor_btn_right"), void 0)
		},
		addBtn: function (b, c, d, e) {
			if (this.opts.toolbar === !1) return !1;
			var f = this.buildButton(b, {
				title: c,
				callback: d,
				dropdown: e
			});
			this.$toolbar.append(a("<li>").append(f))
		},
		addBtnFirst: function (b, c, d, e) {
			if (this.opts.toolbar === !1) return !1;
			var f = this.buildButton(b, {
				title: c,
				callback: d,
				dropdown: e
			});
			this.$toolbar.prepend(a("<li>").append(f))
		},
		addBtnAfter: function (b, c, d, e, f) {
			if (this.opts.toolbar === !1) return !1;
			var g = this.buildButton(c, {
					title: d,
					callback: e,
					dropdown: f
				}),
				h = this.getBtn(b);
			h.parent().after(a("<li>").append(g))
		},
		addBtnBefore: function (b, c, d, e, f) {
			if (this.opts.toolbar === !1) return !1;
			var g = this.buildButton(c, {
					title: d,
					callback: e,
					dropdown: f
				}),
				h = this.getBtn(b);
			h.parent().before(a("<li>").append(g))
		},
		removeBtn: function (a, b) {
			var c = this.getBtn(a);
			b === !0 && c.parent().next().remove(), c.parent().removeClass("redactor_btn_right"), c.remove()
		},
		getFragmentHtml: function (a) {
			var b = a.cloneNode(!0),
				c = this.document.createElement("div");
			return c.appendChild(b), c.innerHTML
		},
		extractContent: function () {
			for (var a, b = this.$editor.get(0), c = this.document.createDocumentFragment(); a = b.firstChild;) c.appendChild(a);
			return c
		},
		saveSelection: function () {
			this.$editor.focus(), this.savedSel = this.getOrigin(), this.savedSelObj = this.getFocus()
		},
		restoreSelection: function () {
			"undefined" != typeof this.savedSel && null !== this.savedSel && null !== this.savedSelObj && "BODY" !== this.savedSel[0].tagName ? this.opts.iframe === !1 && 0 == a(this.savedSel[0]).closest(".redactor_editor").size() ? this.$editor.focus() : (this.browser("opera") && this.$editor.focus(), this.setSelection(this.savedSel[0], this.savedSel[1], this.savedSelObj[0], this.savedSelObj[1]), this.browser("mozilla") && this.$editor.focus()) : this.$editor.focus()
		},
		getSelection: function () {
			var a = this.document;
			return this.window.getSelection ? this.window.getSelection() : a.getSelection ? a.getSelection() : a.selection.createRange()
		},
		hasSelection: function () {
			if (this.oldIE()) {
				var a, b = this.$editor.get(0);
				return b.focus(), b.document.selection ? (a = b.document.selection.createRange(), a && a.parentElement().document === b.document) : !1
			}
			var c;
			return (c = this.getSelection()) && null != c.focusNode && null != c.anchorNode
		},
		getOrigin: function () {
			if (this.oldIE()) {
				var a, b = this.$editor.get(0);
				return b.focus(), this.hasSelection() ? (a = b.document.selection.createRange(), this._getBoundary(b.document, a, !0)) : null
			}
			var c;
			return (c = this.getSelection()) && null != c.anchorNode ? [c.anchorNode, c.anchorOffset] : null
		},
		getFocus: function () {
			if (this.oldIE()) {
				var a, b = this.$editor.get(0);
				return b.focus(), this.hasSelection() ? (a = b.document.selection.createRange(), this._getBoundary(b.document, a, !1)) : null
			}
			var c;
			return (c = this.getSelection()) && null != c.focusNode ? [c.focusNode, c.focusOffset] : null
		},
		setSelection: function (a, b, c, d) {
			if (null == c && (c = a), null == d && (d = b), this.oldIE()) {
				var e = this.$editor.get(0),
					f = e.document.body.createTextRange();
				return this._moveBoundary(e.document, f, !1, c, d), this._moveBoundary(e.document, f, !0, a, b), f.select()
			}
			var g = this.getSelection();
			if (g)
				if (g.collapse && g.extend) g.collapse(a, b), g.extend(c, d);
				else {
					r = this.document.createRange(), r.setStart(a, b), r.setEnd(c, d);
					try {
						g.removeAllRanges()
					} catch (h) {}
					g.addRange(r)
				}
		},
		getCurrentNode: function () {
			return "undefined" != typeof this.window.getSelection ? this.getSelectedNode().parentNode : "undefined" != typeof this.document.selection ? this.getSelection().parentElement() : void 0
		},
		getParentNode: function () {
			return a(this.getCurrentNode()).parent()[0]
		},
		getSelectedNode: function () {
			if (this.oldIE()) return this.getSelection().parentElement();
			if ("undefined" != typeof this.window.getSelection) {
				var a = this.window.getSelection();
				return a.rangeCount > 0 ? this.getSelection().getRangeAt(0).commonAncestorContainer : !1
			}
			return "undefined" != typeof this.document.selection ? this.getSelection() : void 0
		},
		_getBoundary: function (a, b, c) {
			var d, e, f, g, h;
			for (e = a.createElement("a"), d = b.duplicate(), d.collapse(c), h = d.parentElement();;)
				if (h.insertBefore(e, e.previousSibling), d.moveToElementText(e), !(d.compareEndPoints(c ? "StartToStart" : "StartToEnd", b) > 0 && null != e.previousSibling)) break;
			return -1 === d.compareEndPoints(c ? "StartToStart" : "StartToEnd", b) && e.nextSibling ? (d.setEndPoint(c ? "EndToStart" : "EndToEnd", b), f = e.nextSibling, g = d.text.length) : (f = e.parentNode, g = this._getChildIndex(e)), e.parentNode.removeChild(e), [f, g]
		},
		_moveBoundary: function (a, b, c, d, e) {
			var f, g, h, i, j;
			return j = 0, f = this._isText(d) ? d : d.childNodes[e], g = this._isText(d) ? d.parentNode : d, this._isText(d) && (j = e), i = a.createElement("a"), g.insertBefore(i, f || null), h = a.body.createTextRange(), h.moveToElementText(i), i.parentNode.removeChild(i), b.setEndPoint(c ? "StartToStart" : "EndToEnd", h), b[c ? "moveStart" : "moveEnd"]("character", j)
		},
		_isText: function (a) {
			return null != a ? 3 == a.nodeType : !1
		},
		_getChildIndex: function (a) {
			for (var b = 0; a = a.previousSibling;) b++;
			return b
		},
		insertNodeAfterCaret: function (a) {
			this.saveSelection(), this.insertNodeAtCaret(a), this.restoreSelection()
		},
		insertNodeAtCaret: function (a) {
			if (this.window.getSelection) {
				var b = this.getSelection();
				if (b.rangeCount) {
					var c = b.getRangeAt(0);
					c.collapse(!1), c.insertNode(a), c = c.cloneRange(), c.selectNodeContents(a), c.collapse(!1), b.removeAllRanges(), b.addRange(c)
				}
			} else if (this.document.selection) {
				var d = 1 === a.nodeType ? a.outerHTML : a.data,
					e = "marker_" + ("" + Math.random()).slice(2);
				d += '<span id="' + e + '"></span>';
				var f = this.getSelection();
				f.collapse(!1), f.pasteHTML(d);
				var g = this.document.getElementById(e);
				f.moveToElementText(g), f.select(), g.parentNode.removeChild(g)
			}
		},
		getSelectedHtml: function () {
			var a = "";
			if (this.window.getSelection) {
				var b = this.window.getSelection();
				if (b.rangeCount) {
					for (var c = this.document.createElement("div"), d = 0, e = b.rangeCount; e > d; ++d) c.appendChild(b.getRangeAt(d).cloneContents());
					a = c.innerHTML
				}
			} else this.document.selection && "Text" === this.document.selection.type && (a = this.document.selection.createRange().htmlText);
			return a
		},
		resizeImage: function (b) {
			var c, d, e = !1,
				f = !1,
				g = a(b).width() / a(b).height(),
				h = 10,
				i = 10;
			a(b).off("hover mousedown mouseup click mousemove"), a(b).hover(function () {
				a(b).css("cursor", "nw-resize")
			}, function () {
				a(b).css("cursor", ""), e = !1
			}), a(b).mousedown(function (h) {
				h.preventDefault(), g = a(b).width() / a(b).height(), e = !0, f = !0, c = Math.round(h.pageX - a(b).eq(0).offset().left), d = Math.round(h.pageY - a(b).eq(0).offset().top)
			}), a(b).mouseup(a.proxy(function () {
				e = !1, a(b).css("cursor", ""), this.syncCode()
			}, this)), a(b).click(a.proxy(function (a) {
				f && this.imageEdit(a)
			}, this)), a(b).mousemove(function (j) {
				if (e) {
					f = !1;
					var k = (Math.round(j.pageX - a(this).eq(0).offset().left) - c, Math.round(j.pageY - a(this).eq(0).offset().top) - d),
						l = a(b).height(),
						m = parseInt(l, 10) + k,
						n = m * g;
					n > h && a(b).width(n), m > i && a(b).height(m), c = Math.round(j.pageX - a(this).eq(0).offset().left), d = Math.round(j.pageY - a(this).eq(0).offset().top)
				}
			})
		},
		showTable: function () {
			this.saveSelection(), this.modalInit(RLANG.table, this.opts.modal_table, 300, a.proxy(function () {
				a("#redactor_insert_table_btn").click(a.proxy(this.insertTable, this)), setTimeout(function () {
					a("#redactor_table_rows").focus()
				}, 200)
			}, this))
		},
		insertTable: function () {
			for (var b = a("#redactor_table_rows").val(), c = a("#redactor_table_columns").val(), d = a("<div></div>"), e = Math.floor(99999 * Math.random()), f = a('<table id="table' + e + '"><tbody></tbody></table>'), g = 0; b > g; g++) {
				for (var h = a("<tr></tr>"), i = 0; c > i; i++) {
					var j = a("<td><br></td>");
					a(h).append(j)
				}
				a(f).append(h)
			}
			a(d).append(f);
			var k = a(d).html() + "<p></p>";
			this.restoreSelection(), this.execCommand("inserthtml", k), this.modalClose(), this.observeTables()
		},
		tableObserver: function (b) {
			this.$table = a(b.target).closest("table"), this.$table_tr = this.$table.find("tr"), this.$table_td = this.$table.find("td"), this.$tbody = a(b.target).closest("tbody"), this.$thead = a(this.$table).find("thead"), this.$current_td = a(b.target), this.$current_tr = a(b.target).closest("tr")
		},
		deleteTable: function () {
			a(this.$table).remove(), this.$table = !1, this.syncCode()
		},
		deleteRow: function () {
			a(this.$current_tr).remove(), this.syncCode()
		},
		deleteColumn: function () {
			var b = a(this.$current_td).get(0).cellIndex;
			a(this.$table).find("tr").each(function () {
				a(this).find("td").eq(b).remove()
			}), this.syncCode()
		},
		addHead: function () {
			if (0 !== a(this.$table).find("thead").size()) this.deleteHead();
			else {
				var b = a(this.$table).find("tr").first().clone();
				b.find("td").html("&nbsp;"), this.$thead = a("<thead></thead>"), this.$thead.append(b), a(this.$table).prepend(this.$thead), this.syncCode()
			}
		},
		deleteHead: function () {
			a(this.$thead).remove(), this.$thead = !1, this.syncCode()
		},
		insertRowAbove: function () {
			this.insertRow("before")
		},
		insertRowBelow: function () {
			this.insertRow("after")
		},
		insertColumnLeft: function () {
			this.insertColumn("before")
		},
		insertColumnRight: function () {
			this.insertColumn("after")
		},
		insertRow: function (b) {
			var c = a(this.$current_tr).clone();
			c.find("td").html("&nbsp;"), "after" === b ? a(this.$current_tr).after(c) : a(this.$current_tr).before(c), this.syncCode()
		},
		insertColumn: function (b) {
			var c = 0;
			this.$current_tr.find("td").each(a.proxy(function (b, d) {
				a(d)[0] === this.$current_td[0] && (c = b)
			}, this)), this.$table_tr.each(function (d, e) {
				var f = a(e).find("td").eq(c),
					g = f.clone();
				g.html("&nbsp;"), "after" === b ? a(f).after(g) : a(f).before(g)
			}), this.syncCode()
		},
		showVideo: function () {
			this.saveSelection(), this.modalInit(RLANG.video, this.opts.modal_video, 600, a.proxy(function () {
				a("#redactor_insert_video_btn").click(a.proxy(this.insertVideo, this)), setTimeout(function () {
					a("#redactor_insert_video_area").focus()
				}, 200)
			}, this))
		},
		insertVideo: function () {
			var b = a("#redactor_insert_video_area").val();
			b = this.stripTags(b), this.restoreSelection(), this.execCommand("inserthtml", b), this.modalClose()
		},
		imageEdit: function (b) {
			var c = a(b.target),
				d = c.parent(),
				e = a.proxy(function () {
					a("#redactor_file_alt").val(c.attr("alt")), a("#redactor_image_edit_src").attr("href", c.attr("src")), a("#redactor_form_image_align").val(c.css("float")), "A" === a(d).get(0).tagName && a("#redactor_file_link").val(a(d).attr("href")), a("#redactor_image_delete_btn").click(a.proxy(function () {
						this.imageDelete(c)
					}, this)), a("#redactorSaveBtn").click(a.proxy(function () {
						this.imageSave(c)
					}, this))
				}, this);
			this.modalInit(RLANG.image, this.opts.modal_image_edit, 380, e)
		},
		imageDelete: function (b) {
			var c = a(b).parent();
			0 != c.size() && "A" == c[0].tagName ? c.remove() : a(b).remove(), this.modalClose(), this.syncCode()
		},
		imageSave: function (b) {
			var c = a(b).parent();
			a(b).attr("alt", a("#redactor_file_alt").val());
			var d = a("#redactor_form_image_align").val();
			a(b).css("left" === d ? {
				"float": "left",
				margin: "0 10px 10px 0"
			} : "right" === d ? {
				"float": "right",
				margin: "0 0 10px 10px"
			} : {
				"float": "none",
				margin: "0"
			});
			var e = a.trim(a("#redactor_file_link").val());
			"" !== e ? "A" !== a(c).get(0).tagName ? a(b).replaceWith('<a href="' + e + '">' + this.outerHTML(b) + "</a>") : a(c).attr("href", e) : "A" === a(c).get(0).tagName && a(c).replaceWith(this.outerHTML(b)), this.modalClose(), this.observeImages(), this.syncCode()
		},
		showImage: function () {
			this.saveSelection();
			var b = a.proxy(function () {
				if (this.opts.imageGetJson !== !1 ? a.getJSON(this.opts.imageGetJson, a.proxy(function (b) {
						var c = {},
							d = 0;
						a.each(b, a.proxy(function (a, b) {
							"undefined" != typeof b.folder && (d++, c[b.folder] = d)
						}, this));
						var e = !1;
						if (a.each(b, a.proxy(function (b, d) {
								var f = "";
								"undefined" != typeof d.title && (f = d.title);
								var g = 0;
								a.isEmptyObject(c) || "undefined" == typeof d.folder || (g = c[d.folder], e === !1 && (e = ".redactorfolder" + g));
								var h = a('<img src="' + d.thumb + '" class="redactorfolder redactorfolder' + g + '" rel="' + d.image + '" title="' + f + '" />');
								a("#redactor_image_box").append(h), a(h).click(a.proxy(this.imageSetThumb, this))
							}, this)), !a.isEmptyObject(c)) {
							a(".redactorfolder").hide(), a(e).show();
							var f = function (b) {
									a(".redactorfolder").hide(), a(".redactorfolder" + a(b.target).val()).show()
								},
								g = a('<select id="redactor_image_box_select">');
							a.each(c, function (b, c) {
								g.append(a('<option value="' + c + '">' + b + "</option>"))
							}), a("#redactor_image_box").before(g), g.change(f)
						}
					}, this)) : a("#redactor_tabs a").eq(1).remove(), this.opts.imageUpload !== !1) this.opts.uploadCrossDomain === !1 && this.isMobile() === !1 && 0 !== a("#redactor_file").size() && a("#redactor_file").dragupload({
					url: this.opts.imageUpload,
					uploadFields: this.opts.uploadFields,
					success: a.proxy(this.imageUploadCallback, this),
					error: a.proxy(this.opts.imageUploadErrorCallback, this)
				}), this.uploadInit("redactor_file", {
					auto: !0,
					url: this.opts.imageUpload,
					success: a.proxy(this.imageUploadCallback, this),
					error: a.proxy(this.opts.imageUploadErrorCallback, this)
				});
				else if (a(".redactor_tab").hide(), this.opts.imageGetJson === !1) a("#redactor_tabs").remove(), a("#redactor_tab3").show();
				else {
					var b = a("#redactor_tabs a");
					b.eq(0).remove(), b.eq(1).addClass("redactor_tabs_act"), a("#redactor_tab2").show()
				}
				a("#redactor_upload_btn").click(a.proxy(this.imageUploadCallbackLink, this)), this.opts.imageUpload === !1 && this.opts.imageGetJson === !1 && setTimeout(function () {
					a("#redactor_file_link").focus()
				}, 200)
			}, this);
			this.modalInit(RLANG.image, this.opts.modal_image, 610, b)
		},
		imageSetThumb: function (b) {
			this._imageSet('<img src="' + a(b.target).attr("rel") + '" alt="' + a(b.target).attr("title") + '" />', !0)
		},
		imageUploadCallbackLink: function () {
			if ("" !== a("#redactor_file_link").val()) {
				var b = '<img src="' + a("#redactor_file_link").val() + '" />';
				this._imageSet(b, !0)
			} else this.modalClose()
		},
		imageUploadCallback: function (a) {
			this._imageSet(a)
		},
		_imageSet: function (a, b) {
			if (this.restoreSelection(), a !== !1) {
				var c = "";
				c = b !== !0 ? '<p><img src="' + a.filelink + '" /></p>' : a, this.execCommand("inserthtml", c), b !== !0 && "function" == typeof this.opts.imageUploadCallback && this.opts.imageUploadCallback(this, a)
			}
			this.modalClose(), this.observeImages()
		},
		showLink: function () {
			this.saveSelection();
			var b = a.proxy(function () {
				this.insert_link_node = !1;
				var b = this.getSelection(),
					c = "",
					d = "",
					e = "";
				if (this.browser("msie")) {
					var f = this.getParentNode();
					"A" === f.nodeName ? (this.insert_link_node = a(f), d = this.insert_link_node.text(), c = this.insert_link_node.attr("href"), e = this.insert_link_node.attr("target")) : d = this.oldIE() ? b.text : b.toString()
				} else b && b.anchorNode && "A" === b.anchorNode.parentNode.tagName ? (c = b.anchorNode.parentNode.href, d = b.anchorNode.parentNode.text, e = b.anchorNode.parentNode.target, "" === b.toString() && (this.insert_link_node = b.anchorNode.parentNode)) : d = b.toString();
				a(".redactor_link_text").val(d);
				var g = self.location.href.replace(/\/$/i, ""),
					h = c.replace(g, "");
				0 === c.search("mailto:") ? (this.setModalTab(2), a("#redactor_tab_selected").val(2), a("#redactor_link_mailto").val(c.replace("mailto:", ""))) : 0 === h.search(/^#/gi) ? (this.setModalTab(3), a("#redactor_tab_selected").val(3), a("#redactor_link_anchor").val(h.replace(/^#/gi, ""))) : a("#redactor_link_url").val(h), "_blank" === e && a("#redactor_link_blank").attr("checked", !0), a("#redactor_insert_link_btn").click(a.proxy(this.insertLink, this)), setTimeout(function () {
					a("#redactor_link_url").focus()
				}, 200)
			}, this);
			this.modalInit(RLANG.link, this.opts.modal_link, 460, b)
		},
		insertLink: function () {
			var b = a("#redactor_tab_selected").val(),
				c = "",
				d = "",
				e = "",
				f = "";
			if ("1" === b) {
				c = a("#redactor_link_url").val(), d = a("#redactor_link_url_text").val(), a("#redactor_link_blank").prop("checked") && (e = ' target="_blank"', f = "_blank");
				var g = "/(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/",
					h = new RegExp("^(http|ftp|https)://" + g, "i"),
					i = new RegExp("^" + g, "i"); - 1 == c.search(h) && 0 == c.search(i) && this.opts.protocol !== !1 && (c = this.opts.protocol + c)
			} else "2" === b ? (c = "mailto:" + a("#redactor_link_mailto").val(), d = a("#redactor_link_mailto_text").val()) : "3" === b && (c = "#" + a("#redactor_link_anchor").val(), d = a("#redactor_link_anchor_text").val());
			this._insertLink('<a href="' + c + '"' + e + ">" + d + "</a>", a.trim(d), c, f)
		},
		_insertLink: function (b, c, d, e) {
			this.$editor.focus(), this.restoreSelection(), "" !== c && (this.insert_link_node ? (a(this.insert_link_node).text(c), a(this.insert_link_node).attr("href", d), "" !== e ? a(this.insert_link_node).attr("target", e) : a(this.insert_link_node).removeAttr("target"), this.syncCode()) : this.execCommand("inserthtml", b)), this.modalClose()
		},
		wrapCode: function () {
			this.$editor.focus(), this.restoreSelection();
			var b = a(this.getCurrentNode());
			"CODE" === b[0].nodeName ? this.execCommand("removeFormat") : this.execCommand("inserthtml", "<code>" + this.getSelection().toString() + "</code>"), this.opts.air && this.air.hide()
		},
		showFile: function () {
			this.saveSelection();
			var b = a.proxy(function () {
				var b = this.getSelection(),
					c = "";
				c = this.oldIE() ? b.text : b.toString(), a("#redactor_filename").val(c), this.opts.uploadCrossDomain === !1 && this.isMobile() === !1 && a("#redactor_file").dragupload({
					url: this.opts.fileUpload,
					uploadFields: this.opts.uploadFields,
					success: a.proxy(this.fileUploadCallback, this),
					error: a.proxy(this.opts.fileUploadErrorCallback, this)
				}), this.uploadInit("redactor_file", {
					auto: !0,
					url: this.opts.fileUpload,
					success: a.proxy(this.fileUploadCallback, this),
					error: a.proxy(this.opts.fileUploadErrorCallback, this)
				})
			}, this);
			this.modalInit(RLANG.file, this.opts.modal_file, 500, b)
		},
		fileUploadCallback: function (b) {
			if (this.restoreSelection(), b !== !1) {
				var c = a("#redactor_filename").val();
				"" === c && (c = b.filename);
				var d = '<a href="' + b.filelink + '">' + c + "</a>";
				this.browser("webkit") && this.window.chrome && (d += "&nbsp;"), this.execCommand("inserthtml", d), "function" == typeof this.opts.fileUploadCallback && this.opts.fileUploadCallback(this, b)
			}
			this.modalClose()
		},
		modalInit: function (b, c, d, e) {
			if (0 === a("#redactor_modal_overlay").size() && (this.overlay = a('<div id="redactor_modal_overlay" style="display: none;"></div>'), a("body").prepend(this.overlay)), this.opts.overlay && (a("#redactor_modal_overlay").show(), a("#redactor_modal_overlay").click(a.proxy(this.modalClose, this))), 0 === a("#redactor_modal").size() && (this.modal = a('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close">&times;</div><div id="redactor_modal_header"></div><div id="redactor_modal_inner"></div></div>'), a("body").append(this.modal)), a("#redactor_modal_close").click(a.proxy(this.modalClose, this)), this.hdlModalClose = a.proxy(function (a) {
					return 27 === a.keyCode ? (this.modalClose(), !1) : void 0
				}, this), a(document).keyup(this.hdlModalClose), this.$editor.keyup(this.hdlModalClose), a("#redactor_modal_inner").empty().append(0 == c.indexOf("#") ? a(c).html() : c), a("#redactor_modal_header").html(b), "undefined" != typeof a.fn.draggable && (a("#redactor_modal").draggable({
					handle: "#redactor_modal_header"
				}), a("#redactor_modal_header").css("cursor", "move")), 0 !== a("#redactor_tabs").size()) {
				var f = this;
				a("#redactor_tabs a").each(function (b, c) {
					b++, a(c).click(function () {
						if (a("#redactor_tabs a").removeClass("redactor_tabs_act"), a(this).addClass("redactor_tabs_act"), a(".redactor_tab").hide(), a("#redactor_tab" + b).show(), a("#redactor_tab_selected").val(b), f.isMobile() === !1) {
							var c = a("#redactor_modal").outerHeight();
							a("#redactor_modal").css("margin-top", "-" + (c + 10) / 2 + "px")
						}
					})
				})
			}
			a("#redactor_modal .redactor_btn_modal_close").click(a.proxy(this.modalClose, this)), this.isMobile() === !1 ? (a("#redactor_modal").css({
				position: "fixed",
				top: "-2000px",
				left: "50%",
				width: d + "px",
				marginLeft: "-" + (d + 60) / 2 + "px"
			}).show(), this.modalSaveBodyOveflow = a(document.body).css("overflow"), a(document.body).css("overflow", "hidden")) : a("#redactor_modal").css({
				position: "fixed",
				width: "100%",
				height: "100%",
				top: "0",
				left: "0",
				margin: "0",
				minHeight: "300px"
			}).show(), "function" == typeof e && e(), this.isMobile() === !1 && setTimeout(function () {
				var b = a("#redactor_modal").outerHeight();
				a("#redactor_modal").css({
					top: "50%",
					height: "auto",
					minHeight: "auto",
					marginTop: "-" + (b + 10) / 2 + "px"
				})
			}, 20)
		},
		modalClose: function () {
			return a("#redactor_modal_close").unbind("click", this.modalClose), a("#redactor_modal").fadeOut("fast", a.proxy(function () {
				a("#redactor_modal_inner").html(""), this.opts.overlay && (a("#redactor_modal_overlay").hide(), a("#redactor_modal_overlay").unbind("click", this.modalClose)), a(document).unbind("keyup", this.hdlModalClose), this.$editor.unbind("keyup", this.hdlModalClose)
			}, this)), this.isMobile() === !1 && a(document.body).css("overflow", this.modalSaveBodyOveflow ? this.modalSaveBodyOveflow : "visible"), !1
		},
		setModalTab: function (b) {
			a(".redactor_tab").hide();
			var c = a("#redactor_tabs a");
			c.removeClass("redactor_tabs_act"), c.eq(b - 1).addClass("redactor_tabs_act"), a("#redactor_tab" + b).show()
		},
		uploadInit: function (b, c) {
			this.uploadOptions = {
				url: !1,
				success: !1,
				error: !1,
				start: !1,
				trigger: !1,
				auto: !1,
				input: !1
			}, a.extend(this.uploadOptions, c), 0 !== a("#" + b).size() && "INPUT" === a("#" + b).get(0).tagName ? (this.uploadOptions.input = a("#" + b), this.element = a(a("#" + b).get(0).form)) : this.element = a("#" + b), this.element_action = this.element.attr("action"), this.uploadOptions.auto ? a(this.uploadOptions.input).change(a.proxy(function () {
				this.element.submit(function () {
					return !1
				}), this.uploadSubmit()
			}, this)) : this.uploadOptions.trigger && a("#" + this.uploadOptions.trigger).click(a.proxy(this.uploadSubmit, this))
		},
		uploadSubmit: function () {
			this.uploadForm(this.element, this.uploadFrame())
		},
		uploadFrame: function () {
			this.id = "f" + Math.floor(99999 * Math.random());
			var b = this.document.createElement("div"),
				c = '<iframe style="display:none" id="' + this.id + '" name="' + this.id + '"></iframe>';
			return b.innerHTML = c, a(b).appendTo("body"), this.uploadOptions.start && this.uploadOptions.start(), a("#" + this.id).load(a.proxy(this.uploadLoaded, this)), this.id
		},
		uploadForm: function (b, c) {
			if (this.uploadOptions.input) {
				var d = "redactorUploadForm" + this.id,
					e = "redactorUploadFile" + this.id;
				this.form = a('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + c + '" name="' + d + '" id="' + d + '" enctype="multipart/form-data"></form>'), this.opts.uploadFields !== !1 && "object" == typeof this.opts.uploadFields && a.each(this.opts.uploadFields, a.proxy(function (b, c) {
					0 === c.toString().indexOf("#") && (c = a(c).val());
					var d = a("<input/>", {
						type: "hidden",
						name: b,
						value: c
					});
					a(this.form).append(d)
				}, this));
				var f = this.uploadOptions.input,
					g = a(f).clone();
				a(f).attr("id", e), a(f).before(g), a(f).appendTo(this.form), a(this.form).css("position", "absolute"), a(this.form).css("top", "-2000px"), a(this.form).css("left", "-2000px"), a(this.form).appendTo("body"), this.form.submit()
			} else b.attr("target", c), b.attr("method", "POST"), b.attr("enctype", "multipart/form-data"), b.attr("action", this.uploadOptions.url), this.element.submit()
		},
		uploadLoaded: function () {
			var b, c = a("#" + this.id)[0];
			if (b = c.contentDocument ? c.contentDocument : c.contentWindow ? c.contentWindow.document : window.frames[this.id].document, this.uploadOptions.success)
				if ("undefined" != typeof b) {
					var d = b.body.innerHTML,
						e = d.match(/\{(.|\n)*\}/)[0],
						f = a.parseJSON(e);
					"undefined" == typeof f.error ? this.uploadOptions.success(f) : (this.uploadOptions.error(this, f), this.modalClose())
				} else alert("Upload failed!"), this.modalClose();
			this.element.attr("action", this.element_action), this.element.attr("target", "")
		},
		browser: function (a) {
			var b = navigator.userAgent.toLowerCase(),
				c = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
			return "version" == a ? c[2] : "webkit" == a ? "chrome" == c[1] || "webkit" == c[1] : c[1] == a
		},
		oldIE: function () {
			return this.browser("msie") && parseInt(this.browser("version"), 10) < 9 ? !0 : !1
		},
		outerHTML: function (b) {
			return a("<p>").append(a(b).eq(0).clone()).html()
		},
		normalize: function (a) {
			return parseInt(a.replace("px", ""), 10)
		},
		isMobile: function (a) {
			return a === !0 && /(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent) ? !0 : /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent) ? !0 : !1
		}
	}, a.fn.getObject = function () {
		return this.data("redactor")
	}, a.fn.getEditor = function () {
		return this.data("redactor").$editor
	}, a.fn.getCode = function () {
		return a.trim(this.data("redactor").getCode())
	}, a.fn.getText = function () {
		return this.data("redactor").$editor.text()
	}, a.fn.getSelected = function () {
		return this.data("redactor").getSelectedHtml()
	}, a.fn.setCode = function (a, b) {
		this.data("redactor").setCode(a, b)
	}, a.fn.insertHtml = function (a) {
		this.data("redactor").insertHtml(a)
	}, a.fn.destroyEditor = function () {
		this.each(function () {
			"undefined" != typeof a(this).data("redactor") && (a(this).data("redactor").destroy(), a(this).removeData("redactor"))
		})
	}, a.fn.setFocus = function () {
		this.data("redactor").$editor.focus()
	}, a.fn.execCommand = function (a, b) {
		this.data("redactor").execCommand(a, b)
	}
}(jQuery),
function (a) {
	function b(b, c) {
		this.opts = a.extend({
			url: !1,
			success: !1,
			error: !1,
			preview: !1,
			uploadFields: !1,
			text: RLANG.drop_file_here,
			atext: RLANG.or_choose
		}, c), this.$el = a(b)
	}
	a.fn.dragupload = function (a) {
		return this.each(function () {
			var c = new b(this, a);
			c.init()
		})
	}, b.prototype = {
		init: function () {
			if (-1 === navigator.userAgent.search("MSIE")) {
				this.droparea = a('<div class="redactor_droparea"></div>'), this.dropareabox = a('<div class="redactor_dropareabox">' + this.opts.text + "</div>"), this.dropalternative = a('<div class="redactor_dropalternative">' + this.opts.atext + "</div>"), this.droparea.append(this.dropareabox), this.$el.before(this.droparea), this.$el.before(this.dropalternative), this.dropareabox.bind("dragover", a.proxy(function () {
					return this.ondrag()
				}, this)), this.dropareabox.bind("dragleave", a.proxy(function () {
					return this.ondragleave()
				}, this));
				var b = a.proxy(function (a) {
						var b = parseInt(a.loaded / a.total * 100, 10);
						this.dropareabox.text("Loading " + b + "%")
					}, this),
					c = jQuery.ajaxSettings.xhr();
				c.upload && c.upload.addEventListener("progress", b, !1);
				var d = function () {
					return c
				};
				this.dropareabox.get(0).ondrop = a.proxy(function (b) {
					b.preventDefault(), this.dropareabox.removeClass("hover").addClass("drop");
					var c = b.dataTransfer.files[0],
						e = new FormData;
					this.opts.uploadFields !== !1 && "object" == typeof this.opts.uploadFields && a.each(this.opts.uploadFields, a.proxy(function (b, c) {
						0 === c.toString().indexOf("#") && (c = a(c).val()), e.append(b, c)
					}, this)), e.append("file", c), a.ajax({
						url: this.opts.url,
						dataType: "html",
						data: e,
						xhr: d,
						cache: !1,
						contentType: !1,
						processData: !1,
						type: "POST",
						success: a.proxy(function (b) {
							var c = a.parseJSON(b);
							"undefined" == typeof c.error ? this.opts.success(c) : (this.opts.error(this, c), this.opts.success(!1))
						}, this)
					})
				}, this)
			}
		},
		ondrag: function () {
			return this.dropareabox.addClass("hover"), !1
		},
		ondragleave: function () {
			return this.dropareabox.removeClass("hover"), !1
		}
	}
}(jQuery),
function (a) {
	var b = "http://",
		c = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
		d = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,
		e = function () {
			for (var f = this.childNodes, g = f.length; g--;) {
				var h = f[g];
				if (3 === h.nodeType) {
					var i = h.nodeValue;
					i && (i = i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(c, '$1<a href="' + b + '$2">$2</a>$3').replace(d, '$1<a href="$2">$2</a>$5'), a(h).after(i).remove())
				} else 1 !== h.nodeType || /^(a|button|textarea)$/i.test(h.tagName) || e.call(h)
			}
		};
	a.fn.linkify = function () {
		this.each(e)
	}
}(jQuery),
function (a) {
	a.event.special.textselect = {
		setup: function (b) {
			a(this).data("textselected", !1), a(this).data("ttt", b), a(this).on("mouseup", a.event.special.textselect.handler)
		},
		teardown: function () {
			a(this).off("mouseup", a.event.special.textselect.handler)
		},
		handler: function (b) {
			var c = a(this).data("ttt"),
				d = a.event.special.textselect.getSelectedText(c).toString();
			"" != d && (a(this).data("textselected", !0), b.type = "textselect", b.text = d, a.event.dispatch.apply(this, arguments))
		},
		getSelectedText: function () {
			var a = "";
			return rwindow.getSelection ? a = rwindow.getSelection() : rdocument.getSelection ? a = rdocument.getSelection() : rdocument.selection && (a = rdocument.selection.createRange().text), a
		}
	}, a.event.special.textunselect = {
		setup: function (b) {
			a(this).data("rttt", b), a(this).data("textselected", !1), a(this).on("mouseup", a.event.special.textunselect.handler), a(this).on("keyup", a.event.special.textunselect.handlerKey)
		},
		teardown: function () {
			a(this).unbind("mouseup", a.event.special.textunselect.handler)
		},
		handler: function (b) {
			if (a(this).data("textselected")) {
				var c = a(this).data("rttt"),
					d = a.event.special.textselect.getSelectedText(c).toString();
				"" == d && (a(this).data("textselected", !1), b.type = "textunselect", a.event.dispatch.apply(this, arguments))
			}
		},
		handlerKey: function (b) {
			if (a(this).data("textselected")) {
				var c = a(this).data("rttt"),
					d = a.event.special.textselect.getSelectedText(c).toString();
				(b.keyCode = 27) && "" == d && (a(this).data("textselected", !1), b.type = "textunselect", a.event.dispatch.apply(this, arguments))
			}
		}
	}
}(jQuery);

/* CodeMirror 5.9.1 */

! function (e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else {
		if ("function" == typeof define && define.amd) return define([], e);
		this.CodeMirror = e()
	}
}(function () {
	"use strict";

	function e(r, n) {
		if (!(this instanceof e)) return new e(r, n);
		this.options = n = n ? zi(n) : {}, zi(Jo, n, !1), d(n);
		var i = n.value;
		"string" == typeof i && (i = new Sl(i, n.mode, null, n.lineSeparator)), this.doc = i;
		var o = new e.inputStyles[n.inputStyle](this),
			l = this.display = new t(r, i, o);
		l.wrapper.CodeMirror = this, u(this), s(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), n.autofocus && !Wo && l.input.focus(), m(this), this.state = {
			keyMaps: [],
			overlays: [],
			modeGen: 0,
			overwrite: !1,
			delayingBlurEvent: !1,
			focused: !1,
			suppressEdits: !1,
			pasteIncoming: !1,
			cutIncoming: !1,
			selectingText: !1,
			draggingText: !1,
			highlight: new Ai,
			keySeq: null,
			specialChars: null
		};
		var a = this;
		bo && 11 > wo && setTimeout(function () {
			a.display.input.reset(!0)
		}, 20), Ut(this), $i(), wt(this), this.curOp.forceUpdate = !0, qn(this, i), n.autofocus && !Wo || a.hasFocus() ? setTimeout(Fi(vr, this), 20) : mr(this);
		for (var c in el) el.hasOwnProperty(c) && el[c](this, n[c], tl);
		C(this), n.finishInit && n.finishInit(this);
		for (var h = 0; h < ol.length; ++h) ol[h](this);
		Ct(this), xo && n.lineWrapping && "optimizelegibility" == getComputedStyle(l.lineDiv).textRendering && (l.lineDiv.style.textRendering = "auto")
	}

	function t(e, t, r) {
		var n = this;
		this.input = r, n.scrollbarFiller = Ui("div", null, "CodeMirror-scrollbar-filler"), n.scrollbarFiller.setAttribute("cm-not-content", "true"), n.gutterFiller = Ui("div", null, "CodeMirror-gutter-filler"), n.gutterFiller.setAttribute("cm-not-content", "true"), n.lineDiv = Ui("div", null, "CodeMirror-code"), n.selectionDiv = Ui("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = Ui("div", null, "CodeMirror-cursors"), n.measure = Ui("div", null, "CodeMirror-measure"), n.lineMeasure = Ui("div", null, "CodeMirror-measure"), n.lineSpace = Ui("div", [n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv], null, "position: relative; outline: none"), n.mover = Ui("div", [Ui("div", [n.lineSpace], "CodeMirror-lines")], null, "position: relative"), n.sizer = Ui("div", [n.mover], "CodeMirror-sizer"), n.sizerWidth = null, n.heightForcer = Ui("div", null, null, "position: absolute; height: " + Pl + "px; width: 1px;"), n.gutters = Ui("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = Ui("div", [n.sizer, n.heightForcer, n.gutters], "CodeMirror-scroll"), n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = Ui("div", [n.scrollbarFiller, n.gutterFiller, n.scroller], "CodeMirror"), bo && 8 > wo && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), xo || vo && Wo || (n.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(n.wrapper) : e(n.wrapper)), n.viewFrom = n.viewTo = t.first, n.reportedViewFrom = n.reportedViewTo = t.first, n.view = [], n.renderedView = null, n.externalMeasured = null, n.viewOffset = 0, n.lastWrapHeight = n.lastWrapWidth = 0, n.updateLineNumbers = null, n.nativeBarWidth = n.barHeight = n.barWidth = 0, n.scrollbarsClipped = !1, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, n.alignWidgets = !1, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, n.shift = !1, n.selForContextMenu = null, n.activeTouch = null, r.init(n)
	}

	function r(t) {
		t.doc.mode = e.getMode(t.options, t.doc.modeOption), n(t)
	}

	function n(e) {
		e.doc.iter(function (e) {
			e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
		}), e.doc.frontier = e.doc.first, Re(e, 100), e.state.modeGen++, e.curOp && Et(e)
	}

	function i(e) {
		e.options.lineWrapping ? (Zl(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (ql(e.display.wrapper, "CodeMirror-wrap"), f(e)), l(e), Et(e), st(e), setTimeout(function () {
			y(e)
		}, 100)
	}

	function o(e) {
		var t = yt(e.display),
			r = e.options.lineWrapping,
			n = r && Math.max(5, e.display.scroller.clientWidth / bt(e.display) - 3);
		return function (i) {
			if (Cn(e.doc, i)) return 0;
			var o = 0;
			if (i.widgets)
				for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
			return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t
		}
	}

	function l(e) {
		var t = e.doc,
			r = o(e);
		t.iter(function (e) {
			var t = r(e);
			t != e.height && ei(e, t)
		})
	}

	function s(e) {
		e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), st(e)
	}

	function a(e) {
		u(e), Et(e), setTimeout(function () {
			x(e)
		}, 20)
	}

	function u(e) {
		var t = e.display.gutters,
			r = e.options.gutters;
		Vi(t);
		for (var n = 0; n < r.length; ++n) {
			var i = r[n],
				o = t.appendChild(Ui("div", null, "CodeMirror-gutter " + i));
			"CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
		}
		t.style.display = n ? "" : "none", c(e)
	}

	function c(e) {
		var t = e.display.gutters.offsetWidth;
		e.display.sizer.style.marginLeft = t + "px"
	}

	function h(e) {
		if (0 == e.height) return 0;
		for (var t, r = e.text.length, n = e; t = gn(n);) {
			var i = t.find(0, !0);
			n = i.from.line, r += i.from.ch - i.to.ch
		}
		for (n = e; t = vn(n);) {
			var i = t.find(0, !0);
			r -= n.text.length - i.from.ch, n = i.to.line, r += n.text.length - i.to.ch
		}
		return r
	}

	function f(e) {
		var t = e.display,
			r = e.doc;
		t.maxLine = Zn(r, r.first), t.maxLineLength = h(t.maxLine), t.maxLineChanged = !0, r.iter(function (e) {
			var r = h(e);
			r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
		})
	}

	function d(e) {
		var t = Hi(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
	}

	function p(e) {
		var t = e.display,
			r = t.gutters.offsetWidth,
			n = Math.round(e.doc.height + Ke(e.display));
		return {
			clientHeight: t.scroller.clientHeight,
			viewHeight: t.wrapper.clientHeight,
			scrollWidth: t.scroller.scrollWidth,
			clientWidth: t.scroller.clientWidth,
			viewWidth: t.wrapper.clientWidth,
			barLeft: e.options.fixedGutter ? r : 0,
			docHeight: n,
			scrollHeight: n + Xe(e) + t.barHeight,
			nativeBarWidth: t.nativeBarWidth,
			gutterWidth: r
		}
	}

	function g(e, t, r) {
		this.cm = r;
		var n = this.vert = Ui("div", [Ui("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
			i = this.horiz = Ui("div", [Ui("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
		e(n), e(i), Wl(n, "scroll", function () {
			n.clientHeight && t(n.scrollTop, "vertical")
		}), Wl(i, "scroll", function () {
			i.clientWidth && t(i.scrollLeft, "horizontal")
		}), this.checkedZeroWidth = !1, bo && 8 > wo && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
	}

	function v() {}

	function m(t) {
		t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && ql(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function (e) {
			t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), Wl(e, "mousedown", function () {
				t.state.focused && setTimeout(function () {
					t.display.input.focus()
				}, 0)
			}), e.setAttribute("cm-not-content", "true")
		}, function (e, r) {
			"horizontal" == r ? ir(t, e) : nr(t, e)
		}, t), t.display.scrollbars.addClass && Zl(t.display.wrapper, t.display.scrollbars.addClass)
	}

	function y(e, t) {
		t || (t = p(e));
		var r = e.display.barWidth,
			n = e.display.barHeight;
		b(e, t);
		for (var i = 0; 4 > i && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && O(e), b(e, p(e)), r = e.display.barWidth, n = e.display.barHeight
	}

	function b(e, t) {
		var r = e.display,
			n = r.scrollbars.update(t);
		r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
	}

	function w(e, t, r) {
		var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
		n = Math.floor(n - Ve(e));
		var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
			o = ri(t, n),
			l = ri(t, i);
		if (r && r.ensure) {
			var s = r.ensure.from.line,
				a = r.ensure.to.line;
			o > s ? (o = s, l = ri(t, ni(Zn(t, s)) + e.wrapper.clientHeight)) : Math.min(a, t.lastLine()) >= l && (o = ri(t, ni(Zn(t, a)) - e.wrapper.clientHeight), l = a)
		}
		return {
			from: o,
			to: Math.max(l, o + 1)
		}
	}

	function x(e) {
		var t = e.display,
			r = t.view;
		if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
			for (var n = L(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
				if (!r[l].hidden) {
					e.options.fixedGutter && r[l].gutter && (r[l].gutter.style.left = o);
					var s = r[l].alignable;
					if (s)
						for (var a = 0; a < s.length; a++) s[a].style.left = o
				} e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
		}
	}

	function C(e) {
		if (!e.options.lineNumbers) return !1;
		var t = e.doc,
			r = S(e.options, t.first + t.size - 1),
			n = e.display;
		if (r.length != n.lineNumChars) {
			var i = n.measure.appendChild(Ui("div", [Ui("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
				o = i.firstChild.offsetWidth,
				l = i.offsetWidth - o;
			return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", c(e), !0
		}
		return !1
	}

	function S(e, t) {
		return String(e.lineNumberFormatter(t + e.firstLineNumber))
	}

	function L(e) {
		return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
	}

	function T(e, t, r) {
		var n = e.display;
		this.viewport = t, this.visible = w(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Ye(e), this.force = r, this.dims = H(e), this.events = []
	}

	function k(e) {
		var t = e.display;
		!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Xe(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Xe(e) + "px", t.scrollbarsClipped = !0)
	}

	function M(e, t) {
		var r = e.display,
			n = e.doc;
		if (t.editorIsHidden) return zt(e), !1;
		if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == Gt(e)) return !1;
		C(e) && (zt(e), t.dims = H(e));
		var i = n.first + n.size,
			o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
			l = Math.min(i, t.visible.to + e.options.viewportMargin);
		r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Io && (o = wn(e.doc, o), l = xn(e.doc, l));
		var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
		Bt(e, o, l), r.viewOffset = ni(Zn(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
		var a = Gt(e);
		if (!s && 0 == a && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
		var u = ji();
		return a > 4 && (r.lineDiv.style.display = "none"), P(e, r.updateLineNumbers, t.dims), a > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, u && ji() != u && u.offsetHeight && u.focus(), Vi(r.cursorDiv), Vi(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, s && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, Re(e, 400)), r.updateLineNumbers = null, !0
	}

	function N(e, t) {
		for (var r = t.viewport, n = !0;
			(n && e.options.lineWrapping && t.oldDisplayWidth != Ye(e) || (r && null != r.top && (r = {
				top: Math.min(e.doc.height + Ke(e.display) - _e(e), r.top)
			}), t.visible = w(e.display, e.doc, r), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && M(e, t); n = !1) {
			O(e);
			var i = p(e);
			Pe(e), A(e, i), y(e, i)
		}
		t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
	}

	function W(e, t) {
		var r = new T(e, t);
		if (M(e, r)) {
			O(e), N(e, r);
			var n = p(e);
			Pe(e), A(e, n), y(e, n), r.finish()
		}
	}

	function A(e, t) {
		e.display.sizer.style.minHeight = t.docHeight + "px";
		var r = t.docHeight + e.display.barHeight;
		e.display.heightForcer.style.top = r + "px", e.display.gutters.style.height = Math.max(r + Xe(e), t.clientHeight) + "px"
	}

	function O(e) {
		for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
			var i, o = t.view[n];
			if (!o.hidden) {
				if (bo && 8 > wo) {
					var l = o.node.offsetTop + o.node.offsetHeight;
					i = l - r, r = l
				} else {
					var s = o.node.getBoundingClientRect();
					i = s.bottom - s.top
				}
				var a = o.line.height - i;
				if (2 > i && (i = yt(t)), (a > .001 || -.001 > a) && (ei(o.line, i), D(o.line), o.rest))
					for (var u = 0; u < o.rest.length; u++) D(o.rest[u])
			}
		}
	}

	function D(e) {
		if (e.widgets)
			for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
	}

	function H(e) {
		for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i, n[e.options.gutters[l]] = o.clientWidth;
		return {
			fixedPos: L(t),
			gutterTotalWidth: t.gutters.offsetWidth,
			gutterLeft: r,
			gutterWidth: n,
			wrapperWidth: t.wrapper.clientWidth
		}
	}

	function P(e, t, r) {
		function n(t) {
			var r = t.nextSibling;
			return xo && Ao && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r
		}
		for (var i = e.display, o = e.options.lineNumbers, l = i.lineDiv, s = l.firstChild, a = i.view, u = i.viewFrom, c = 0; c < a.length; c++) {
			var h = a[c];
			if (h.hidden);
			else if (h.node && h.node.parentNode == l) {
				for (; s != h.node;) s = n(s);
				var f = o && null != t && u >= t && h.lineNumber;
				h.changes && (Hi(h.changes, "gutter") > -1 && (f = !1), E(e, h, u, r)), f && (Vi(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(S(e.options, u)))), s = h.node.nextSibling
			} else {
				var d = V(e, h, u, r);
				l.insertBefore(d, s)
			}
			u += h.size
		}
		for (; s;) s = n(s)
	}

	function E(e, t, r, n) {
		for (var i = 0; i < t.changes.length; i++) {
			var o = t.changes[i];
			"text" == o ? R(e, t) : "gutter" == o ? G(e, t, r, n) : "class" == o ? B(t) : "widget" == o && U(e, t, n)
		}
		t.changes = null
	}

	function I(e) {
		return e.node == e.text && (e.node = Ui("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), bo && 8 > wo && (e.node.style.zIndex = 2)), e.node
	}

	function z(e) {
		var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
		if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
		else if (t) {
			var r = I(e);
			e.background = r.insertBefore(Ui("div", null, t), r.firstChild)
		}
	}

	function F(e, t) {
		var r = e.display.externalMeasured;
		return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : Fn(e, t)
	}

	function R(e, t) {
		var r = t.text.className,
			n = F(e, t);
		t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, B(t)) : r && (t.text.className = r)
	}

	function B(e) {
		z(e), e.line.wrapClass ? I(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
		var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
		e.text.className = t || ""
	}

	function G(e, t, r, n) {
		if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
			var i = I(t);
			t.gutterBackground = Ui("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), i.insertBefore(t.gutterBackground, t.text)
		}
		var o = t.line.gutterMarkers;
		if (e.options.lineNumbers || o) {
			var i = I(t),
				l = t.gutter = Ui("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
			if (e.display.input.setUneditable(l), i.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(Ui("div", S(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
				for (var s = 0; s < e.options.gutters.length; ++s) {
					var a = e.options.gutters[s],
						u = o.hasOwnProperty(a) && o[a];
					u && l.appendChild(Ui("div", [u], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[a] + "px; width: " + n.gutterWidth[a] + "px"))
				}
		}
	}

	function U(e, t, r) {
		t.alignable && (t.alignable = null);
		for (var n, i = t.node.firstChild; i; i = n) {
			var n = i.nextSibling;
			"CodeMirror-linewidget" == i.className && t.node.removeChild(i)
		}
		K(e, t, r)
	}

	function V(e, t, r, n) {
		var i = F(e, t);
		return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), B(t), G(e, t, r, n), K(e, t, n), t.node
	}

	function K(e, t, r) {
		if (j(e, t.line, t, r, !0), t.rest)
			for (var n = 0; n < t.rest.length; n++) j(e, t.rest[n], t, r, !1)
	}

	function j(e, t, r, n, i) {
		if (t.widgets)
			for (var o = I(r), l = 0, s = t.widgets; l < s.length; ++l) {
				var a = s[l],
					u = Ui("div", [a.node], "CodeMirror-linewidget");
				a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), X(a, u, r, n), e.display.input.setUneditable(u), i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), Li(a, "redraw")
			}
	}

	function X(e, t, r, n) {
		if (e.noHScroll) {
			(r.alignable || (r.alignable = [])).push(t);
			var i = n.wrapperWidth;
			t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px"
		}
		e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
	}

	function Y(e) {
		return zo(e.line, e.ch)
	}

	function _(e, t) {
		return Fo(e, t) < 0 ? t : e
	}

	function $(e, t) {
		return Fo(e, t) < 0 ? e : t
	}

	function q(e) {
		e.state.focused || (e.display.input.focus(), vr(e))
	}

	function Z(e, t, r, n, i) {
		var o = e.doc;
		e.display.shift = !1, n || (n = o.sel);
		var l = e.state.pasteIncoming || "paste" == i,
			s = o.splitLines(t),
			a = null;
		if (l && n.ranges.length > 1)
			if (Ro && Ro.join("\n") == t) {
				if (n.ranges.length % Ro.length == 0) {
					a = [];
					for (var u = 0; u < Ro.length; u++) a.push(o.splitLines(Ro[u]))
				}
			} else s.length == n.ranges.length && (a = Pi(s, function (e) {
				return [e]
			}));
		for (var u = n.ranges.length - 1; u >= 0; u--) {
			var c = n.ranges[u],
				h = c.from(),
				f = c.to();
			c.empty() && (r && r > 0 ? h = zo(h.line, h.ch - r) : e.state.overwrite && !l && (f = zo(f.line, Math.min(Zn(o, f.line).text.length, f.ch + Di(s).length))));
			var d = e.curOp.updateInput,
				p = {
					from: h,
					to: f,
					text: a ? a[u % a.length] : s,
					origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input")
				};
			Tr(e.doc, p), Li(e, "inputRead", e, p)
		}
		t && !l && J(e, t), zr(e), e.curOp.updateInput = d, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
	}

	function Q(e, t) {
		var r = e.clipboardData && e.clipboardData.getData("text/plain");
		return r ? (e.preventDefault(), t.isReadOnly() || t.options.disableInput || Wt(t, function () {
			Z(t, r, 0, null, "paste")
		}), !0) : void 0
	}

	function J(e, t) {
		if (e.options.electricChars && e.options.smartIndent)
			for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
				var i = r.ranges[n];
				if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
					var o = e.getModeAt(i.head),
						l = !1;
					if (o.electricChars) {
						for (var s = 0; s < o.electricChars.length; s++)
							if (t.indexOf(o.electricChars.charAt(s)) > -1) {
								l = Rr(e, i.head.line, "smart");
								break
							}
					} else o.electricInput && o.electricInput.test(Zn(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Rr(e, i.head.line, "smart"));
					l && Li(e, "electricInput", e, i.head.line)
				}
			}
	}

	function ee(e) {
		for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
			var i = e.doc.sel.ranges[n].head.line,
				o = {
					anchor: zo(i, 0),
					head: zo(i + 1, 0)
				};
			r.push(o), t.push(e.getRange(o.anchor, o.head))
		}
		return {
			text: t,
			ranges: r
		}
	}

	function te(e) {
		e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", "false")
	}

	function re(e) {
		this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ai, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
	}

	function ne() {
		var e = Ui("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),
			t = Ui("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
		return xo ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), No && (e.style.border = "1px solid black"), te(e), t
	}

	function ie(e) {
		this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ai, this.gracePeriod = !1
	}

	function oe(e, t) {
		var r = Je(e, t.line);
		if (!r || r.hidden) return null;
		var n = Zn(e.doc, t.line),
			i = qe(r, n, t.line),
			o = ii(n),
			l = "left";
		if (o) {
			var s = uo(o, t.ch);
			l = s % 2 ? "right" : "left"
		}
		var a = rt(i.map, t.ch, l);
		return a.offset = "right" == a.collapse ? a.end : a.start, a
	}

	function le(e, t) {
		return t && (e.bad = !0), e
	}

	function se(e, t, r) {
		var n;
		if (t == e.display.lineDiv) {
			if (n = e.display.lineDiv.childNodes[r], !n) return le(e.clipPos(zo(e.display.viewTo - 1)), !0);
			t = null, r = 0
		} else
			for (n = t;; n = n.parentNode) {
				if (!n || n == e.display.lineDiv) return null;
				if (n.parentNode && n.parentNode == e.display.lineDiv) break
			}
		for (var i = 0; i < e.display.view.length; i++) {
			var o = e.display.view[i];
			if (o.node == n) return ae(o, t, r)
		}
	}

	function ae(e, t, r) {
		function n(t, r, n) {
			for (var i = -1; i < (c ? c.length : 0); i++)
				for (var o = 0 > i ? u.map : c[i], l = 0; l < o.length; l += 3) {
					var s = o[l + 2];
					if (s == t || s == r) {
						var a = ti(0 > i ? e.line : e.rest[i]),
							h = o[l] + n;
						return (0 > n || s != t) && (h = o[l + (n ? 1 : 0)]), zo(a, h)
					}
				}
		}
		var i = e.text.firstChild,
			o = !1;
		if (!t || !Yl(i, t)) return le(zo(ti(e.line), 0), !0);
		if (t == i && (o = !0, t = i.childNodes[r], r = 0, !t)) {
			var l = e.rest ? Di(e.rest) : e.line;
			return le(zo(ti(l), l.text.length), o)
		}
		var s = 3 == t.nodeType ? t : null,
			a = t;
		for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, r && (r = s.nodeValue.length)); a.parentNode != i;) a = a.parentNode;
		var u = e.measure,
			c = u.maps,
			h = n(s, a, r);
		if (h) return le(h, o);
		for (var f = a.nextSibling, d = s ? s.nodeValue.length - r : 0; f; f = f.nextSibling) {
			if (h = n(f, f.firstChild, 0)) return le(zo(h.line, h.ch - d), o);
			d += f.textContent.length
		}
		for (var p = a.previousSibling, d = r; p; p = p.previousSibling) {
			if (h = n(p, p.firstChild, -1)) return le(zo(h.line, h.ch + d), o);
			d += f.textContent.length
		}
	}

	function ue(e, t, r, n, i) {
		function o(e) {
			return function (t) {
				return t.id == e
			}
		}

		function l(t) {
			if (1 == t.nodeType) {
				var r = t.getAttribute("cm-text");
				if (null != r) return "" == r && (r = t.textContent.replace(/\u200b/g, "")), void(s += r);
				var c, h = t.getAttribute("cm-marker");
				if (h) {
					var f = e.findMarks(zo(n, 0), zo(i + 1, 0), o(+h));
					return void(f.length && (c = f[0].find()) && (s += Qn(e.doc, c.from, c.to).join(u)))
				}
				if ("false" == t.getAttribute("contenteditable")) return;
				for (var d = 0; d < t.childNodes.length; d++) l(t.childNodes[d]);
				/^(pre|div|p)$/i.test(t.nodeName) && (a = !0)
			} else if (3 == t.nodeType) {
				var p = t.nodeValue;
				if (!p) return;
				a && (s += u, a = !1), s += p
			}
		}
		for (var s = "", a = !1, u = e.doc.lineSeparator(); l(t), t != r;) t = t.nextSibling;
		return s
	}

	function ce(e, t) {
		this.ranges = e, this.primIndex = t
	}

	function he(e, t) {
		this.anchor = e, this.head = t
	}

	function fe(e, t) {
		var r = e[t];
		e.sort(function (e, t) {
			return Fo(e.from(), t.from())
		}), t = Hi(e, r);
		for (var n = 1; n < e.length; n++) {
			var i = e[n],
				o = e[n - 1];
			if (Fo(o.to(), i.from()) >= 0) {
				var l = $(o.from(), i.from()),
					s = _(o.to(), i.to()),
					a = o.empty() ? i.from() == i.head : o.from() == o.head;
				t >= n && --t, e.splice(--n, 2, new he(a ? s : l, a ? l : s))
			}
		}
		return new ce(e, t)
	}

	function de(e, t) {
		return new ce([new he(e, t || e)], 0)
	}

	function pe(e, t) {
		return Math.max(e.first, Math.min(t, e.first + e.size - 1))
	}

	function ge(e, t) {
		if (t.line < e.first) return zo(e.first, 0);
		var r = e.first + e.size - 1;
		return t.line > r ? zo(r, Zn(e, r).text.length) : ve(t, Zn(e, t.line).text.length)
	}

	function ve(e, t) {
		var r = e.ch;
		return null == r || r > t ? zo(e.line, t) : 0 > r ? zo(e.line, 0) : e
	}

	function me(e, t) {
		return t >= e.first && t < e.first + e.size
	}

	function ye(e, t) {
		for (var r = [], n = 0; n < t.length; n++) r[n] = ge(e, t[n]);
		return r
	}

	function be(e, t, r, n) {
		if (e.cm && e.cm.display.shift || e.extend) {
			var i = t.anchor;
			if (n) {
				var o = Fo(r, i) < 0;
				o != Fo(n, i) < 0 ? (i = r, r = n) : o != Fo(r, n) < 0 && (r = n)
			}
			return new he(i, r)
		}
		return new he(n || r, r)
	}

	function we(e, t, r, n) {
		ke(e, new ce([be(e, e.sel.primary(), t, r)], 0), n)
	}

	function xe(e, t, r) {
		for (var n = [], i = 0; i < e.sel.ranges.length; i++) n[i] = be(e, e.sel.ranges[i], t[i], null);
		var o = fe(n, e.sel.primIndex);
		ke(e, o, r)
	}

	function Ce(e, t, r, n) {
		var i = e.sel.ranges.slice(0);
		i[t] = r, ke(e, fe(i, e.sel.primIndex), n)
	}

	function Se(e, t, r, n) {
		ke(e, de(t, r), n)
	}

	function Le(e, t) {
		var r = {
			ranges: t.ranges,
			update: function (t) {
				this.ranges = [];
				for (var r = 0; r < t.length; r++) this.ranges[r] = new he(ge(e, t[r].anchor), ge(e, t[r].head))
			}
		};
		return Dl(e, "beforeSelectionChange", e, r), e.cm && Dl(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? fe(r.ranges, r.ranges.length - 1) : t
	}

	function Te(e, t, r) {
		var n = e.history.done,
			i = Di(n);
		i && i.ranges ? (n[n.length - 1] = t, Me(e, t, r)) : ke(e, t, r)
	}

	function ke(e, t, r) {
		Me(e, t, r), hi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
	}

	function Me(e, t, r) {
		(Ni(e, "beforeSelectionChange") || e.cm && Ni(e.cm, "beforeSelectionChange")) && (t = Le(e, t));
		var n = r && r.bias || (Fo(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
		Ne(e, Ae(e, t, n, !0)), r && r.scroll === !1 || !e.cm || zr(e.cm)
	}

	function Ne(e, t) {
		t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Mi(e.cm)), Li(e, "cursorActivity", e))
	}

	function We(e) {
		Ne(e, Ae(e, e.sel, null, !1), Il)
	}

	function Ae(e, t, r, n) {
		for (var i, o = 0; o < t.ranges.length; o++) {
			var l = t.ranges[o],
				s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
				a = De(e, l.anchor, s && s.anchor, r, n),
				u = De(e, l.head, s && s.head, r, n);
			(i || a != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new he(a, u))
		}
		return i ? fe(i, t.primIndex) : t
	}

	function Oe(e, t, r, n, i) {
		var o = Zn(e, t.line);
		if (o.markedSpans)
			for (var l = 0; l < o.markedSpans.length; ++l) {
				var s = o.markedSpans[l],
					a = s.marker;
				if ((null == s.from || (a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (a.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
					if (i && (Dl(a, "beforeCursorEnter"), a.explicitlyCleared)) {
						if (o.markedSpans) {
							--l;
							continue
						}
						break
					}
					if (!a.atomic) continue;
					if (r) {
						var u, c = a.find(0 > n ? 1 : -1);
						if ((0 > n ? a.inclusiveRight : a.inclusiveLeft) && (c = He(e, c, -n, o)), c && c.line == t.line && (u = Fo(c, r)) && (0 > n ? 0 > u : u > 0)) return Oe(e, c, t, n, i)
					}
					var h = a.find(0 > n ? -1 : 1);
					return (0 > n ? a.inclusiveLeft : a.inclusiveRight) && (h = He(e, h, n, o)), h ? Oe(e, h, t, n, i) : null
				}
			}
		return t
	}

	function De(e, t, r, n, i) {
		var o = n || 1,
			l = Oe(e, t, r, o, i) || !i && Oe(e, t, r, o, !0) || Oe(e, t, r, -o, i) || !i && Oe(e, t, r, -o, !0);
		return l ? l : (e.cantEdit = !0, zo(e.first, 0))
	}

	function He(e, t, r, n) {
		return 0 > r && 0 == t.ch ? t.line > e.first ? ge(e, zo(t.line - 1)) : null : r > 0 && t.ch == (n || Zn(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? zo(t.line + 1, 0) : null : new zo(t.line, t.ch + r)
	}

	function Pe(e) {
		e.display.input.showSelection(e.display.input.prepareSelection())
	}

	function Ee(e, t) {
		for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++)
			if (t !== !1 || l != r.sel.primIndex) {
				var s = r.sel.ranges[l],
					a = s.empty();
				(a || e.options.showCursorWhenSelecting) && Ie(e, s.head, i), a || ze(e, s, o)
			} return n
	}

	function Ie(e, t, r) {
		var n = dt(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
			i = r.appendChild(Ui("div", " ", "CodeMirror-cursor"));
		if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
			var o = r.appendChild(Ui("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
			o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
		}
	}

	function ze(e, t, r) {
		function n(e, t, r, n) {
			0 > t && (t = 0), t = Math.round(t), n = Math.round(n), s.appendChild(Ui("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == r ? c - e : r) + "px; height: " + (n - t) + "px"))
		}

		function i(t, r, i) {
			function o(r, n) {
				return ft(e, zo(t, r), "div", h, n)
			}
			var s, a, h = Zn(l, t),
				f = h.text.length;
			return eo(ii(h), r || 0, null == i ? f : i, function (e, t, l) {
				var h, d, p, g = o(e, "left");
				if (e == t) h = g, d = p = g.left;
				else {
					if (h = o(t - 1, "right"), "rtl" == l) {
						var v = g;
						g = h, h = v
					}
					d = g.left, p = h.right
				}
				null == r && 0 == e && (d = u), h.top - g.top > 3 && (n(d, g.top, null, g.bottom), d = u, g.bottom < h.top && n(d, g.bottom, null, h.top)), null == i && t == f && (p = c), (!s || g.top < s.top || g.top == s.top && g.left < s.left) && (s = g), (!a || h.bottom > a.bottom || h.bottom == a.bottom && h.right > a.right) && (a = h), u + 1 > d && (d = u), n(d, h.top, p - d, h.bottom)
			}), {
				start: s,
				end: a
			}
		}
		var o = e.display,
			l = e.doc,
			s = document.createDocumentFragment(),
			a = je(e.display),
			u = a.left,
			c = Math.max(o.sizerWidth, Ye(e) - o.sizer.offsetLeft) - a.right,
			h = t.from(),
			f = t.to();
		if (h.line == f.line) i(h.line, h.ch, f.ch);
		else {
			var d = Zn(l, h.line),
				p = Zn(l, f.line),
				g = yn(d) == yn(p),
				v = i(h.line, h.ch, g ? d.text.length + 1 : null).end,
				m = i(f.line, g ? 0 : null, f.ch).start;
			g && (v.top < m.top - 2 ? (n(v.right, v.top, null, v.bottom), n(u, m.top, m.left, m.bottom)) : n(v.right, v.top, m.left - v.right, v.bottom)), v.bottom < m.top && n(u, v.bottom, null, m.top)
		}
		r.appendChild(s)
	}

	function Fe(e) {
		if (e.state.focused) {
			var t = e.display;
			clearInterval(t.blinker);
			var r = !0;
			t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
				t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
			}, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
		}
	}

	function Re(e, t) {
		e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, Fi(Be, e))
	}

	function Be(e) {
		var t = e.doc;
		if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
			var r = +new Date + e.options.workTime,
				n = sl(t.mode, Ue(e, t.frontier)),
				i = [];
			t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
				if (t.frontier >= e.display.viewFrom) {
					var l = o.styles,
						s = o.text.length > e.options.maxHighlightLength,
						a = Pn(e, o, s ? sl(t.mode, n) : n, !0);
					o.styles = a.styles;
					var u = o.styleClasses,
						c = a.classes;
					c ? o.styleClasses = c : u && (o.styleClasses = null);
					for (var h = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !h && f < l.length; ++f) h = l[f] != o.styles[f];
					h && i.push(t.frontier), o.stateAfter = s ? n : sl(t.mode, n)
				} else o.text.length <= e.options.maxHighlightLength && In(e, o.text, n), o.stateAfter = t.frontier % 5 == 0 ? sl(t.mode, n) : null;
				return ++t.frontier, +new Date > r ? (Re(e, e.options.workDelay), !0) : void 0
			}), i.length && Wt(e, function () {
				for (var t = 0; t < i.length; t++) It(e, i[t], "text")
			})
		}
	}

	function Ge(e, t, r) {
		for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
			if (s <= o.first) return o.first;
			var a = Zn(o, s - 1);
			if (a.stateAfter && (!r || s <= o.frontier)) return s;
			var u = Rl(a.text, null, e.options.tabSize);
			(null == i || n > u) && (i = s - 1, n = u)
		}
		return i
	}

	function Ue(e, t, r) {
		var n = e.doc,
			i = e.display;
		if (!n.mode.startState) return !0;
		var o = Ge(e, t, r),
			l = o > n.first && Zn(n, o - 1).stateAfter;
		return l = l ? sl(n.mode, l) : al(n.mode), n.iter(o, t, function (r) {
			In(e, r.text, l);
			var s = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
			r.stateAfter = s ? sl(n.mode, l) : null, ++o
		}), r && (n.frontier = o), l
	}

	function Ve(e) {
		return e.lineSpace.offsetTop
	}

	function Ke(e) {
		return e.mover.offsetHeight - e.lineSpace.offsetHeight
	}

	function je(e) {
		if (e.cachedPaddingH) return e.cachedPaddingH;
		var t = Ki(e.measure, Ui("pre", "x")),
			r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
			n = {
				left: parseInt(r.paddingLeft),
				right: parseInt(r.paddingRight)
			};
		return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
	}

	function Xe(e) {
		return Pl - e.display.nativeBarWidth
	}

	function Ye(e) {
		return e.display.scroller.clientWidth - Xe(e) - e.display.barWidth
	}

	function _e(e) {
		return e.display.scroller.clientHeight - Xe(e) - e.display.barHeight
	}

	function $e(e, t, r) {
		var n = e.options.lineWrapping,
			i = n && Ye(e);
		if (!t.measure.heights || n && t.measure.width != i) {
			var o = t.measure.heights = [];
			if (n) {
				t.measure.width = i;
				for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
					var a = l[s],
						u = l[s + 1];
					Math.abs(a.bottom - u.bottom) > 2 && o.push((a.bottom + u.top) / 2 - r.top)
				}
			}
			o.push(r.bottom - r.top)
		}
	}

	function qe(e, t, r) {
		if (e.line == t) return {
			map: e.measure.map,
			cache: e.measure.cache
		};
		for (var n = 0; n < e.rest.length; n++)
			if (e.rest[n] == t) return {
				map: e.measure.maps[n],
				cache: e.measure.caches[n]
			};
		for (var n = 0; n < e.rest.length; n++)
			if (ti(e.rest[n]) > r) return {
				map: e.measure.maps[n],
				cache: e.measure.caches[n],
				before: !0
			}
	}

	function Ze(e, t) {
		t = yn(t);
		var r = ti(t),
			n = e.display.externalMeasured = new Ht(e.doc, t, r);
		n.lineN = r;
		var i = n.built = Fn(e, n);
		return n.text = i.pre, Ki(e.display.lineMeasure, i.pre), n
	}

	function Qe(e, t, r, n) {
		return tt(e, et(e, t), r, n)
	}

	function Je(e, t) {
		if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Ft(e, t)];
		var r = e.display.externalMeasured;
		return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
	}

	function et(e, t) {
		var r = ti(t),
			n = Je(e, r);
		n && !n.text ? n = null : n && n.changes && (E(e, n, r, H(e)), e.curOp.forceUpdate = !0), n || (n = Ze(e, t));
		var i = qe(n, t, r);
		return {
			line: t,
			view: n,
			rect: null,
			map: i.map,
			cache: i.cache,
			before: i.before,
			hasHeights: !1
		}
	}

	function tt(e, t, r, n, i) {
		t.before && (r = -1);
		var o, l = r + (n || "");
		return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || ($e(e, t.view, t.rect), t.hasHeights = !0), o = nt(e, t, r, n), o.bogus || (t.cache[l] = o)), {
			left: o.left,
			right: o.right,
			top: i ? o.rtop : o.top,
			bottom: i ? o.rbottom : o.bottom
		}
	}

	function rt(e, t, r) {
		for (var n, i, o, l, s = 0; s < e.length; s += 3) {
			var a = e[s],
				u = e[s + 1];
			if (a > t ? (i = 0, o = 1, l = "left") : u > t ? (i = t - a, o = i + 1) : (s == e.length - 3 || t == u && e[s + 3] > t) && (o = u - a, i = o - 1, t >= u && (l = "right")), null != i) {
				if (n = e[s + 2], a == u && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)
					for (; s && e[s - 2] == e[s - 3] && e[s - 1].insertLeft;) n = e[(s -= 3) + 2], l = "left";
				if ("right" == r && i == u - a)
					for (; s < e.length - 3 && e[s + 3] == e[s + 4] && !e[s + 5].insertLeft;) n = e[(s += 3) + 2],
						l = "right";
				break
			}
		}
		return {
			node: n,
			start: i,
			end: o,
			collapse: l,
			coverStart: a,
			coverEnd: u
		}
	}

	function nt(e, t, r, n) {
		var i, o = rt(t.map, r, n),
			l = o.node,
			s = o.start,
			a = o.end,
			u = o.collapse;
		if (3 == l.nodeType) {
			for (var c = 0; 4 > c; c++) {
				for (; s && Gi(t.line.text.charAt(o.coverStart + s));) --s;
				for (; o.coverStart + a < o.coverEnd && Gi(t.line.text.charAt(o.coverStart + a));) ++a;
				if (bo && 9 > wo && 0 == s && a == o.coverEnd - o.coverStart) i = l.parentNode.getBoundingClientRect();
				else if (bo && e.options.lineWrapping) {
					var h = Vl(l, s, a).getClientRects();
					i = h.length ? h["right" == n ? h.length - 1 : 0] : Vo
				} else i = Vl(l, s, a).getBoundingClientRect() || Vo;
				if (i.left || i.right || 0 == s) break;
				a = s, s -= 1, u = "right"
			}
			bo && 11 > wo && (i = it(e.display.measure, i))
		} else {
			s > 0 && (u = n = "right");
			var h;
			i = e.options.lineWrapping && (h = l.getClientRects()).length > 1 ? h["right" == n ? h.length - 1 : 0] : l.getBoundingClientRect()
		}
		if (bo && 9 > wo && !s && (!i || !i.left && !i.right)) {
			var f = l.parentNode.getClientRects()[0];
			i = f ? {
				left: f.left,
				right: f.left + bt(e.display),
				top: f.top,
				bottom: f.bottom
			} : Vo
		}
		for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, g = (d + p) / 2, v = t.view.measure.heights, c = 0; c < v.length - 1 && !(g < v[c]); c++);
		var m = c ? v[c - 1] : 0,
			y = v[c],
			b = {
				left: ("right" == u ? i.right : i.left) - t.rect.left,
				right: ("left" == u ? i.left : i.right) - t.rect.left,
				top: m,
				bottom: y
			};
		return i.left || i.right || (b.bogus = !0), e.options.singleCursorHeightPerLine || (b.rtop = d, b.rbottom = p), b
	}

	function it(e, t) {
		if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ji(e)) return t;
		var r = screen.logicalXDPI / screen.deviceXDPI,
			n = screen.logicalYDPI / screen.deviceYDPI;
		return {
			left: t.left * r,
			right: t.right * r,
			top: t.top * n,
			bottom: t.bottom * n
		}
	}

	function ot(e) {
		if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
			for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
	}

	function lt(e) {
		e.display.externalMeasure = null, Vi(e.display.lineMeasure);
		for (var t = 0; t < e.display.view.length; t++) ot(e.display.view[t])
	}

	function st(e) {
		lt(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
	}

	function at() {
		return window.pageXOffset || (document.documentElement || document.body).scrollLeft
	}

	function ut() {
		return window.pageYOffset || (document.documentElement || document.body).scrollTop
	}

	function ct(e, t, r, n) {
		if (t.widgets)
			for (var i = 0; i < t.widgets.length; ++i)
				if (t.widgets[i].above) {
					var o = Tn(t.widgets[i]);
					r.top += o, r.bottom += o
				} if ("line" == n) return r;
		n || (n = "local");
		var l = ni(t);
		if ("local" == n ? l += Ve(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) {
			var s = e.display.lineSpace.getBoundingClientRect();
			l += s.top + ("window" == n ? 0 : ut());
			var a = s.left + ("window" == n ? 0 : at());
			r.left += a, r.right += a
		}
		return r.top += l, r.bottom += l, r
	}

	function ht(e, t, r) {
		if ("div" == r) return t;
		var n = t.left,
			i = t.top;
		if ("page" == r) n -= at(), i -= ut();
		else if ("local" == r || !r) {
			var o = e.display.sizer.getBoundingClientRect();
			n += o.left, i += o.top
		}
		var l = e.display.lineSpace.getBoundingClientRect();
		return {
			left: n - l.left,
			top: i - l.top
		}
	}

	function ft(e, t, r, n, i) {
		return n || (n = Zn(e.doc, t.line)), ct(e, n, Qe(e, n, t.ch, i), r)
	}

	function dt(e, t, r, n, i, o) {
		function l(t, l) {
			var s = tt(e, i, t, l ? "right" : "left", o);
			return l ? s.left = s.right : s.right = s.left, ct(e, n, s, r)
		}

		function s(e, t) {
			var r = a[t],
				n = r.level % 2;
			return e == to(r) && t && r.level < a[t - 1].level ? (r = a[--t], e = ro(r) - (r.level % 2 ? 0 : 1), n = !0) : e == ro(r) && t < a.length - 1 && r.level < a[t + 1].level && (r = a[++t], e = to(r) - r.level % 2, n = !1), n && e == r.to && e > r.from ? l(e - 1) : l(e, n)
		}
		n = n || Zn(e.doc, t.line), i || (i = et(e, n));
		var a = ii(n),
			u = t.ch;
		if (!a) return l(u);
		var c = uo(a, u),
			h = s(u, c);
		return null != os && (h.other = s(u, os)), h
	}

	function pt(e, t) {
		var r = 0,
			t = ge(e.doc, t);
		e.options.lineWrapping || (r = bt(e.display) * t.ch);
		var n = Zn(e.doc, t.line),
			i = ni(n) + Ve(e.display);
		return {
			left: r,
			right: r,
			top: i,
			bottom: i + n.height
		}
	}

	function gt(e, t, r, n) {
		var i = zo(e, t);
		return i.xRel = n, r && (i.outside = !0), i
	}

	function vt(e, t, r) {
		var n = e.doc;
		if (r += e.display.viewOffset, 0 > r) return gt(n.first, 0, !0, -1);
		var i = ri(n, r),
			o = n.first + n.size - 1;
		if (i > o) return gt(n.first + n.size - 1, Zn(n, o).text.length, !0, 1);
		0 > t && (t = 0);
		for (var l = Zn(n, i);;) {
			var s = mt(e, l, i, t, r),
				a = vn(l),
				u = a && a.find(0, !0);
			if (!a || !(s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0)) return s;
			i = ti(l = u.to.line)
		}
	}

	function mt(e, t, r, n, i) {
		function o(n) {
			var i = dt(e, zo(r, n), "line", t, u);
			return s = !0, l > i.bottom ? i.left - a : l < i.top ? i.left + a : (s = !1, i.left)
		}
		var l = i - ni(t),
			s = !1,
			a = 2 * e.display.wrapper.clientWidth,
			u = et(e, t),
			c = ii(t),
			h = t.text.length,
			f = no(t),
			d = io(t),
			p = o(f),
			g = s,
			v = o(d),
			m = s;
		if (n > v) return gt(r, d, m, 1);
		for (;;) {
			if (c ? d == f || d == ho(t, f, 1) : 1 >= d - f) {
				for (var y = p > n || v - n >= n - p ? f : d, b = n - (y == f ? p : v); Gi(t.text.charAt(y));) ++y;
				var w = gt(r, y, y == f ? g : m, -1 > b ? -1 : b > 1 ? 1 : 0);
				return w
			}
			var x = Math.ceil(h / 2),
				C = f + x;
			if (c) {
				C = f;
				for (var S = 0; x > S; ++S) C = ho(t, C, 1)
			}
			var L = o(C);
			L > n ? (d = C, v = L, (m = s) && (v += 1e3), h = x) : (f = C, p = L, g = s, h -= x)
		}
	}

	function yt(e) {
		if (null != e.cachedTextHeight) return e.cachedTextHeight;
		if (null == Bo) {
			Bo = Ui("pre");
			for (var t = 0; 49 > t; ++t) Bo.appendChild(document.createTextNode("x")), Bo.appendChild(Ui("br"));
			Bo.appendChild(document.createTextNode("x"))
		}
		Ki(e.measure, Bo);
		var r = Bo.offsetHeight / 50;
		return r > 3 && (e.cachedTextHeight = r), Vi(e.measure), r || 1
	}

	function bt(e) {
		if (null != e.cachedCharWidth) return e.cachedCharWidth;
		var t = Ui("span", "xxxxxxxxxx"),
			r = Ui("pre", [t]);
		Ki(e.measure, r);
		var n = t.getBoundingClientRect(),
			i = (n.right - n.left) / 10;
		return i > 2 && (e.cachedCharWidth = i), i || 10
	}

	function wt(e) {
		e.curOp = {
			cm: e,
			viewChanged: !1,
			startHeight: e.doc.height,
			forceUpdate: !1,
			updateInput: null,
			typing: !1,
			changeObjs: null,
			cursorActivityHandlers: null,
			cursorActivityCalled: 0,
			selectionChanged: !1,
			updateMaxLine: !1,
			scrollLeft: null,
			scrollTop: null,
			scrollToPos: null,
			focus: !1,
			id: ++jo
		}, Ko ? Ko.ops.push(e.curOp) : e.curOp.ownsGroup = Ko = {
			ops: [e.curOp],
			delayedCallbacks: []
		}
	}

	function xt(e) {
		var t = e.delayedCallbacks,
			r = 0;
		do {
			for (; r < t.length; r++) t[r].call(null);
			for (var n = 0; n < e.ops.length; n++) {
				var i = e.ops[n];
				if (i.cursorActivityHandlers)
					for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
			}
		} while (r < t.length)
	}

	function Ct(e) {
		var t = e.curOp,
			r = t.ownsGroup;
		if (r) try {
			xt(r)
		} finally {
			Ko = null;
			for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null;
			St(r)
		}
	}

	function St(e) {
		for (var t = e.ops, r = 0; r < t.length; r++) Lt(t[r]);
		for (var r = 0; r < t.length; r++) Tt(t[r]);
		for (var r = 0; r < t.length; r++) kt(t[r]);
		for (var r = 0; r < t.length; r++) Mt(t[r]);
		for (var r = 0; r < t.length; r++) Nt(t[r])
	}

	function Lt(e) {
		var t = e.cm,
			r = t.display;
		k(t), e.updateMaxLine && f(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new T(t, e.mustUpdate && {
			top: e.scrollTop,
			ensure: e.scrollToPos
		}, e.forceUpdate)
	}

	function Tt(e) {
		e.updatedDisplay = e.mustUpdate && M(e.cm, e.update)
	}

	function kt(e) {
		var t = e.cm,
			r = t.display;
		e.updatedDisplay && O(t), e.barMeasure = p(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Qe(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Xe(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Ye(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
	}

	function Mt(e) {
		var t = e.cm;
		null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && ir(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1), e.preparedSelection && t.display.input.showSelection(e.preparedSelection), e.updatedDisplay && A(t, e.barMeasure), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), e.selectionChanged && Fe(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), !e.focus || e.focus != ji() || document.hasFocus && !document.hasFocus() || q(e.cm)
	}

	function Nt(e) {
		var t = e.cm,
			r = t.display,
			n = t.doc;
		if (e.updatedDisplay && N(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null == e.scrollTop || r.scroller.scrollTop == e.scrollTop && !e.forceScroll || (n.scrollTop = Math.max(0, Math.min(r.scroller.scrollHeight - r.scroller.clientHeight, e.scrollTop)), r.scrollbars.setScrollTop(n.scrollTop), r.scroller.scrollTop = n.scrollTop), null == e.scrollLeft || r.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (n.scrollLeft = Math.max(0, Math.min(r.scroller.scrollWidth - Ye(t), e.scrollLeft)), r.scrollbars.setScrollLeft(n.scrollLeft), r.scroller.scrollLeft = n.scrollLeft, x(t)), e.scrollToPos) {
			var i = Hr(t, ge(n, e.scrollToPos.from), ge(n, e.scrollToPos.to), e.scrollToPos.margin);
			e.scrollToPos.isCursor && t.state.focused && Dr(t, i)
		}
		var o = e.maybeHiddenMarkers,
			l = e.maybeUnhiddenMarkers;
		if (o)
			for (var s = 0; s < o.length; ++s) o[s].lines.length || Dl(o[s], "hide");
		if (l)
			for (var s = 0; s < l.length; ++s) l[s].lines.length && Dl(l[s], "unhide");
		r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Dl(t, "changes", t, e.changeObjs), e.update && e.update.finish()
	}

	function Wt(e, t) {
		if (e.curOp) return t();
		wt(e);
		try {
			return t()
		} finally {
			Ct(e)
		}
	}

	function At(e, t) {
		return function () {
			if (e.curOp) return t.apply(e, arguments);
			wt(e);
			try {
				return t.apply(e, arguments)
			} finally {
				Ct(e)
			}
		}
	}

	function Ot(e) {
		return function () {
			if (this.curOp) return e.apply(this, arguments);
			wt(this);
			try {
				return e.apply(this, arguments)
			} finally {
				Ct(this)
			}
		}
	}

	function Dt(e) {
		return function () {
			var t = this.cm;
			if (!t || t.curOp) return e.apply(this, arguments);
			wt(t);
			try {
				return e.apply(this, arguments)
			} finally {
				Ct(t)
			}
		}
	}

	function Ht(e, t, r) {
		this.line = t, this.rest = bn(t), this.size = this.rest ? ti(Di(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = Cn(e, t)
	}

	function Pt(e, t, r) {
		for (var n, i = [], o = t; r > o; o = n) {
			var l = new Ht(e.doc, Zn(e.doc, o), o);
			n = o + l.size, i.push(l)
		}
		return i
	}

	function Et(e, t, r, n) {
		null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
		var i = e.display;
		if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Io && wn(e.doc, t) < i.viewTo && zt(e);
		else if (r <= i.viewFrom) Io && xn(e.doc, r + n) > i.viewFrom ? zt(e) : (i.viewFrom += n, i.viewTo += n);
		else if (t <= i.viewFrom && r >= i.viewTo) zt(e);
		else if (t <= i.viewFrom) {
			var o = Rt(e, r, r + n, 1);
			o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : zt(e)
		} else if (r >= i.viewTo) {
			var o = Rt(e, t, t, -1);
			o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : zt(e)
		} else {
			var l = Rt(e, t, t, -1),
				s = Rt(e, r, r + n, 1);
			l && s ? (i.view = i.view.slice(0, l.index).concat(Pt(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += n) : zt(e)
		}
		var a = i.externalMeasured;
		a && (r < a.lineN ? a.lineN += n : t < a.lineN + a.size && (i.externalMeasured = null))
	}

	function It(e, t, r) {
		e.curOp.viewChanged = !0;
		var n = e.display,
			i = e.display.externalMeasured;
		if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
			var o = n.view[Ft(e, t)];
			if (null != o.node) {
				var l = o.changes || (o.changes = []); - 1 == Hi(l, r) && l.push(r)
			}
		}
	}

	function zt(e) {
		e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
	}

	function Ft(e, t) {
		if (t >= e.display.viewTo) return null;
		if (t -= e.display.viewFrom, 0 > t) return null;
		for (var r = e.display.view, n = 0; n < r.length; n++)
			if (t -= r[n].size, 0 > t) return n
	}

	function Rt(e, t, r, n) {
		var i, o = Ft(e, t),
			l = e.display.view;
		if (!Io || r == e.doc.first + e.doc.size) return {
			index: o,
			lineN: r
		};
		for (var s = 0, a = e.display.viewFrom; o > s; s++) a += l[s].size;
		if (a != t) {
			if (n > 0) {
				if (o == l.length - 1) return null;
				i = a + l[o].size - t, o++
			} else i = a - t;
			t += i, r += i
		}
		for (; wn(e.doc, r) != r;) {
			if (o == (0 > n ? 0 : l.length - 1)) return null;
			r += n * l[o - (0 > n ? 1 : 0)].size, o += n
		}
		return {
			index: o,
			lineN: r
		}
	}

	function Bt(e, t, r) {
		var n = e.display,
			i = n.view;
		0 == i.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = Pt(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = Pt(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(Ft(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(Pt(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, Ft(e, r)))), n.viewTo = r
	}

	function Gt(e) {
		for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
			var i = t[n];
			i.hidden || i.node && !i.changes || ++r
		}
		return r
	}

	function Ut(e) {
		function t() {
			i.activeTouch && (o = setTimeout(function () {
				i.activeTouch = null
			}, 1e3), l = i.activeTouch, l.end = +new Date)
		}

		function r(e) {
			if (1 != e.touches.length) return !1;
			var t = e.touches[0];
			return t.radiusX <= 1 && t.radiusY <= 1
		}

		function n(e, t) {
			if (null == t.left) return !0;
			var r = t.left - e.left,
				n = t.top - e.top;
			return r * r + n * n > 400
		}
		var i = e.display;
		Wl(i.scroller, "mousedown", At(e, Yt)), bo && 11 > wo ? Wl(i.scroller, "dblclick", At(e, function (t) {
			if (!ki(e, t)) {
				var r = Xt(e, t);
				if (r && !Qt(e, t) && !jt(e.display, t)) {
					kl(t);
					var n = e.findWordAt(r);
					we(e.doc, n.anchor, n.head)
				}
			}
		})) : Wl(i.scroller, "dblclick", function (t) {
			ki(e, t) || kl(t)
		}), Po || Wl(i.scroller, "contextmenu", function (t) {
			yr(e, t)
		});
		var o, l = {
			end: 0
		};
		Wl(i.scroller, "touchstart", function (e) {
			if (!r(e)) {
				clearTimeout(o);
				var t = +new Date;
				i.activeTouch = {
					start: t,
					moved: !1,
					prev: t - l.end <= 300 ? l : null
				}, 1 == e.touches.length && (i.activeTouch.left = e.touches[0].pageX, i.activeTouch.top = e.touches[0].pageY)
			}
		}), Wl(i.scroller, "touchmove", function () {
			i.activeTouch && (i.activeTouch.moved = !0)
		}), Wl(i.scroller, "touchend", function (r) {
			var o = i.activeTouch;
			if (o && !jt(i, r) && null != o.left && !o.moved && new Date - o.start < 300) {
				var l, s = e.coordsChar(i.activeTouch, "page");
				l = !o.prev || n(o, o.prev) ? new he(s, s) : !o.prev.prev || n(o, o.prev.prev) ? e.findWordAt(s) : new he(zo(s.line, 0), ge(e.doc, zo(s.line + 1, 0))), e.setSelection(l.anchor, l.head), e.focus(), kl(r)
			}
			t()
		}), Wl(i.scroller, "touchcancel", t), Wl(i.scroller, "scroll", function () {
			i.scroller.clientHeight && (nr(e, i.scroller.scrollTop), ir(e, i.scroller.scrollLeft, !0), Dl(e, "scroll", e))
		}), Wl(i.scroller, "mousewheel", function (t) {
			or(e, t)
		}), Wl(i.scroller, "DOMMouseScroll", function (t) {
			or(e, t)
		}), Wl(i.wrapper, "scroll", function () {
			i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
		}), i.dragFunctions = {
			enter: function (t) {
				ki(e, t) || Nl(t)
			},
			over: function (t) {
				ki(e, t) || (tr(e, t), Nl(t))
			},
			start: function (t) {
				er(e, t)
			},
			drop: At(e, Jt),
			leave: function () {
				rr(e)
			}
		};
		var s = i.input.getField();
		Wl(s, "keyup", function (t) {
			dr.call(e, t)
		}), Wl(s, "keydown", At(e, hr)), Wl(s, "keypress", At(e, pr)), Wl(s, "focus", Fi(vr, e)), Wl(s, "blur", Fi(mr, e))
	}

	function Vt(t, r, n) {
		var i = n && n != e.Init;
		if (!r != !i) {
			var o = t.display.dragFunctions,
				l = r ? Wl : Ol;
			l(t.display.scroller, "dragstart", o.start), l(t.display.scroller, "dragenter", o.enter), l(t.display.scroller, "dragover", o.over), l(t.display.scroller, "dragleave", o.leave), l(t.display.scroller, "drop", o.drop)
		}
	}

	function Kt(e) {
		var t = e.display;
		(t.lastWrapHeight != t.wrapper.clientHeight || t.lastWrapWidth != t.wrapper.clientWidth) && (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
	}

	function jt(e, t) {
		for (var r = xi(t); r != e.wrapper; r = r.parentNode)
			if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
	}

	function Xt(e, t, r, n) {
		var i = e.display;
		if (!r && "true" == xi(t).getAttribute("cm-not-content")) return null;
		var o, l, s = i.lineSpace.getBoundingClientRect();
		try {
			o = t.clientX - s.left, l = t.clientY - s.top
		} catch (t) {
			return null
		}
		var a, u = vt(e, o, l);
		if (n && 1 == u.xRel && (a = Zn(e.doc, u.line).text).length == u.ch) {
			var c = Rl(a, a.length, e.options.tabSize) - a.length;
			u = zo(u.line, Math.max(0, Math.round((o - je(e.display).left) / bt(e.display)) - c))
		}
		return u
	}

	function Yt(e) {
		var t = this,
			r = t.display;
		if (!(r.activeTouch && r.input.supportsTouch() || ki(t, e))) {
			if (r.shift = e.shiftKey, jt(r, e)) return void(xo || (r.scroller.draggable = !1, setTimeout(function () {
				r.scroller.draggable = !0
			}, 100)));
			if (!Qt(t, e)) {
				var n = Xt(t, e);
				switch (window.focus(), Ci(e)) {
					case 1:
						t.state.selectingText ? t.state.selectingText(e) : n ? _t(t, e, n) : xi(e) == r.scroller && kl(e);
						break;
					case 2:
						xo && (t.state.lastMiddleDown = +new Date), n && we(t.doc, n), setTimeout(function () {
							r.input.focus()
						}, 20), kl(e);
						break;
					case 3:
						Po ? yr(t, e) : gr(t)
				}
			}
		}
	}

	function _t(e, t, r) {
		bo ? setTimeout(Fi(q, e), 0) : e.curOp.focus = ji();
		var n, i = +new Date;
		Uo && Uo.time > i - 400 && 0 == Fo(Uo.pos, r) ? n = "triple" : Go && Go.time > i - 400 && 0 == Fo(Go.pos, r) ? (n = "double", Uo = {
			time: i,
			pos: r
		}) : (n = "single", Go = {
			time: i,
			pos: r
		});
		var o, l = e.doc.sel,
			s = Ao ? t.metaKey : t.ctrlKey;
		e.options.dragDrop && Jl && !e.isReadOnly() && "single" == n && (o = l.contains(r)) > -1 && (Fo((o = l.ranges[o]).from(), r) < 0 || r.xRel > 0) && (Fo(o.to(), r) > 0 || r.xRel < 0) ? $t(e, t, r, s) : qt(e, t, r, n, s)
	}

	function $t(e, t, r, n) {
		var i = e.display,
			o = +new Date,
			l = At(e, function (s) {
				xo && (i.scroller.draggable = !1), e.state.draggingText = !1, Ol(document, "mouseup", l), Ol(i.scroller, "drop", l), Math.abs(t.clientX - s.clientX) + Math.abs(t.clientY - s.clientY) < 10 && (kl(s), !n && +new Date - 200 < o && we(e.doc, r), xo || bo && 9 == wo ? setTimeout(function () {
					document.body.focus(), i.input.focus()
				}, 20) : i.input.focus())
			});
		xo && (i.scroller.draggable = !0), e.state.draggingText = l, i.scroller.dragDrop && i.scroller.dragDrop(), Wl(document, "mouseup", l), Wl(i.scroller, "drop", l)
	}

	function qt(e, t, r, n, i) {
		function o(t) {
			if (0 != Fo(v, t))
				if (v = t, "rect" == n) {
					for (var i = [], o = e.options.tabSize, l = Rl(Zn(u, r.line).text, r.ch, o), s = Rl(Zn(u, t.line).text, t.ch, o), a = Math.min(l, s), d = Math.max(l, s), p = Math.min(r.line, t.line), g = Math.min(e.lastLine(), Math.max(r.line, t.line)); g >= p; p++) {
						var m = Zn(u, p).text,
							y = Bl(m, a, o);
						a == d ? i.push(new he(zo(p, y), zo(p, y))) : m.length > y && i.push(new he(zo(p, y), zo(p, Bl(m, d, o))))
					}
					i.length || i.push(new he(r, r)), ke(u, fe(f.ranges.slice(0, h).concat(i), h), {
						origin: "*mouse",
						scroll: !1
					}), e.scrollIntoView(t)
				} else {
					var b = c,
						w = b.anchor,
						x = t;
					if ("single" != n) {
						if ("double" == n) var C = e.findWordAt(t);
						else var C = new he(zo(t.line, 0), ge(u, zo(t.line + 1, 0)));
						Fo(C.anchor, w) > 0 ? (x = C.head, w = $(b.from(), C.anchor)) : (x = C.anchor, w = _(b.to(), C.head))
					}
					var i = f.ranges.slice(0);
					i[h] = new he(ge(u, w), x), ke(u, fe(i, h), zl)
				}
		}

		function l(t) {
			var r = ++y,
				i = Xt(e, t, !0, "rect" == n);
			if (i)
				if (0 != Fo(i, v)) {
					e.curOp.focus = ji(), o(i);
					var s = w(a, u);
					(i.line >= s.to || i.line < s.from) && setTimeout(At(e, function () {
						y == r && l(t)
					}), 150)
				} else {
					var c = t.clientY < m.top ? -20 : t.clientY > m.bottom ? 20 : 0;
					c && setTimeout(At(e, function () {
						y == r && (a.scroller.scrollTop += c, l(t))
					}), 50)
				}
		}

		function s(t) {
			e.state.selectingText = !1, y = 1 / 0, kl(t), a.input.focus(), Ol(document, "mousemove", b), Ol(document, "mouseup", x), u.history.lastSelOrigin = null
		}
		var a = e.display,
			u = e.doc;
		kl(t);
		var c, h, f = u.sel,
			d = f.ranges;
		if (i && !t.shiftKey ? (h = u.sel.contains(r), c = h > -1 ? d[h] : new he(r, r)) : (c = u.sel.primary(), h = u.sel.primIndex), t.altKey) n = "rect", i || (c = new he(r, r)), r = Xt(e, t, !0, !0), h = -1;
		else if ("double" == n) {
			var p = e.findWordAt(r);
			c = e.display.shift || u.extend ? be(u, c, p.anchor, p.head) : p
		} else if ("triple" == n) {
			var g = new he(zo(r.line, 0), ge(u, zo(r.line + 1, 0)));
			c = e.display.shift || u.extend ? be(u, c, g.anchor, g.head) : g
		} else c = be(u, c, r);
		i ? -1 == h ? (h = d.length, ke(u, fe(d.concat([c]), h), {
			scroll: !1,
			origin: "*mouse"
		})) : d.length > 1 && d[h].empty() && "single" == n && !t.shiftKey ? (ke(u, fe(d.slice(0, h).concat(d.slice(h + 1)), 0), {
			scroll: !1,
			origin: "*mouse"
		}), f = u.sel) : Ce(u, h, c, zl) : (h = 0, ke(u, new ce([c], 0), zl), f = u.sel);
		var v = r,
			m = a.wrapper.getBoundingClientRect(),
			y = 0,
			b = At(e, function (e) {
				Ci(e) ? l(e) : s(e)
			}),
			x = At(e, s);
		e.state.selectingText = x, Wl(document, "mousemove", b), Wl(document, "mouseup", x)
	}

	function Zt(e, t, r, n) {
		try {
			var i = t.clientX,
				o = t.clientY
		} catch (t) {
			return !1
		}
		if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
		n && kl(t);
		var l = e.display,
			s = l.lineDiv.getBoundingClientRect();
		if (o > s.bottom || !Ni(e, r)) return wi(t);
		o -= s.top - l.viewOffset;
		for (var a = 0; a < e.options.gutters.length; ++a) {
			var u = l.gutters.childNodes[a];
			if (u && u.getBoundingClientRect().right >= i) {
				var c = ri(e.doc, o),
					h = e.options.gutters[a];
				return Dl(e, r, e, c, h, t), wi(t)
			}
		}
	}

	function Qt(e, t) {
		return Zt(e, t, "gutterClick", !0)
	}

	function Jt(e) {
		var t = this;
		if (rr(t), !ki(t, e) && !jt(t.display, e)) {
			kl(e), bo && (Xo = +new Date);
			var r = Xt(t, e, !0),
				n = e.dataTransfer.files;
			if (r && !t.isReadOnly())
				if (n && n.length && window.FileReader && window.File)
					for (var i = n.length, o = Array(i), l = 0, s = function (e, n) {
							if (!t.options.allowDropFileTypes || -1 != Hi(t.options.allowDropFileTypes, e.type)) {
								var s = new FileReader;
								s.onload = At(t, function () {
									var e = s.result;
									if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[n] = e, ++l == i) {
										r = ge(t.doc, r);
										var a = {
											from: r,
											to: r,
											text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
											origin: "paste"
										};
										Tr(t.doc, a), Te(t.doc, de(r, Qo(a)))
									}
								}), s.readAsText(e)
							}
						}, a = 0; i > a; ++a) s(n[a], a);
				else {
					if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout(function () {
						t.display.input.focus()
					}, 20);
					try {
						var o = e.dataTransfer.getData("Text");
						if (o) {
							if (t.state.draggingText && !(Ao ? e.altKey : e.ctrlKey)) var u = t.listSelections();
							if (Me(t.doc, de(r, r)), u)
								for (var a = 0; a < u.length; ++a) Or(t.doc, "", u[a].anchor, u[a].head, "drag");
							t.replaceSelection(o, "around", "paste"), t.display.input.focus()
						}
					} catch (e) {}
				}
		}
	}

	function er(e, t) {
		if (bo && (!e.state.draggingText || +new Date - Xo < 100)) return void Nl(t);
		if (!ki(e, t) && !jt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.setDragImage && !To)) {
			var r = Ui("img", null, null, "position: fixed; left: 0; top: 0;");
			r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Lo && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), Lo && r.parentNode.removeChild(r)
		}
	}

	function tr(e, t) {
		var r = Xt(e, t);
		if (r) {
			var n = document.createDocumentFragment();
			Ie(e, r, n), e.display.dragCursor || (e.display.dragCursor = Ui("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), Ki(e.display.dragCursor, n)
		}
	}

	function rr(e) {
		e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
	}

	function nr(e, t) {
		Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, vo || W(e, {
			top: t
		}), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), vo && W(e), Re(e, 100))
	}

	function ir(e, t, r) {
		(r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, x(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
	}

	function or(e, t) {
		var r = $o(t),
			n = r.x,
			i = r.y,
			o = e.display,
			l = o.scroller,
			s = l.scrollWidth > l.clientWidth,
			a = l.scrollHeight > l.clientHeight;
		if (n && s || i && a) {
			if (i && Ao && xo) e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
				for (var h = 0; h < c.length; h++)
					if (c[h].node == u) {
						e.display.currentWheelTarget = u;
						break e
					} if (n && !vo && !Lo && null != _o) return i && a && nr(e, Math.max(0, Math.min(l.scrollTop + i * _o, l.scrollHeight - l.clientHeight))), ir(e, Math.max(0, Math.min(l.scrollLeft + n * _o, l.scrollWidth - l.clientWidth))), (!i || i && a) && kl(t), void(o.wheelStartX = null);
			if (i && null != _o) {
				var f = i * _o,
					d = e.doc.scrollTop,
					p = d + o.wrapper.clientHeight;
				0 > f ? d = Math.max(0, d + f - 50) : p = Math.min(e.doc.height, p + f + 50), W(e, {
					top: d,
					bottom: p
				})
			}
			20 > Yo && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = n, o.wheelDY = i, setTimeout(function () {
				if (null != o.wheelStartX) {
					var e = l.scrollLeft - o.wheelStartX,
						t = l.scrollTop - o.wheelStartY,
						r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
					o.wheelStartX = o.wheelStartY = null, r && (_o = (_o * Yo + r) / (Yo + 1), ++Yo)
				}
			}, 200)) : (o.wheelDX += n, o.wheelDY += i))
		}
	}

	function lr(e, t, r) {
		if ("string" == typeof t && (t = ul[t], !t)) return !1;
		e.display.input.ensurePolled();
		var n = e.display.shift,
			i = !1;
		try {
			e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != El
		} finally {
			e.display.shift = n, e.state.suppressEdits = !1
		}
		return i
	}

	function sr(e, t, r) {
		for (var n = 0; n < e.state.keyMaps.length; n++) {
			var i = hl(t, e.state.keyMaps[n], r, e);
			if (i) return i
		}
		return e.options.extraKeys && hl(t, e.options.extraKeys, r, e) || hl(t, e.options.keyMap, r, e)
	}

	function ar(e, t, r, n) {
		var i = e.state.keySeq;
		if (i) {
			if (fl(t)) return "handled";
			qo.set(50, function () {
				e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
			}), t = i + " " + t
		}
		var o = sr(e, t, n);
		return "multi" == o && (e.state.keySeq = t), "handled" == o && Li(e, "keyHandled", e, t, r), ("handled" == o || "multi" == o) && (kl(r), Fe(e)), i && !o && /\'$/.test(t) ? (kl(r), !0) : !!o
	}

	function ur(e, t) {
		var r = dl(t, !0);
		return r ? t.shiftKey && !e.state.keySeq ? ar(e, "Shift-" + r, t, function (t) {
			return lr(e, t, !0)
		}) || ar(e, r, t, function (t) {
			return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? lr(e, t) : void 0
		}) : ar(e, r, t, function (t) {
			return lr(e, t)
		}) : !1
	}

	function cr(e, t, r) {
		return ar(e, "'" + r + "'", t, function (t) {
			return lr(e, t, !0)
		})
	}

	function hr(e) {
		var t = this;
		if (t.curOp.focus = ji(), !ki(t, e)) {
			bo && 11 > wo && 27 == e.keyCode && (e.returnValue = !1);
			var r = e.keyCode;
			t.display.shift = 16 == r || e.shiftKey;
			var n = ur(t, e);
			Lo && (Zo = n ? r : null, !n && 88 == r && !rs && (Ao ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || fr(t)
		}
	}

	function fr(e) {
		function t(e) {
			18 != e.keyCode && e.altKey || (ql(r, "CodeMirror-crosshair"), Ol(document, "keyup", t), Ol(document, "mouseover", t))
		}
		var r = e.display.lineDiv;
		Zl(r, "CodeMirror-crosshair"), Wl(document, "keyup", t), Wl(document, "mouseover", t)
	}

	function dr(e) {
		16 == e.keyCode && (this.doc.sel.shift = !1), ki(this, e)
	}

	function pr(e) {
		var t = this;
		if (!(jt(t.display, e) || ki(t, e) || e.ctrlKey && !e.altKey || Ao && e.metaKey)) {
			var r = e.keyCode,
				n = e.charCode;
			if (Lo && r == Zo) return Zo = null, void kl(e);
			if (!Lo || e.which && !(e.which < 10) || !ur(t, e)) {
				var i = String.fromCharCode(null == n ? r : n);
				cr(t, e, i) || t.display.input.onKeyPress(e)
			}
		}
	}

	function gr(e) {
		e.state.delayingBlurEvent = !0, setTimeout(function () {
			e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, mr(e))
		}, 100)
	}

	function vr(e) {
		e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Dl(e, "focus", e), e.state.focused = !0, Zl(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), xo && setTimeout(function () {
			e.display.input.reset(!0)
		}, 20)), e.display.input.receivedFocus()), Fe(e))
	}

	function mr(e) {
		e.state.delayingBlurEvent || (e.state.focused && (Dl(e, "blur", e), e.state.focused = !1, ql(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
			e.state.focused || (e.display.shift = !1)
		}, 150))
	}

	function yr(e, t) {
		jt(e.display, t) || br(e, t) || ki(e, t, "contextmenu") || e.display.input.onContextMenu(t)
	}

	function br(e, t) {
		return Ni(e, "gutterContextMenu") ? Zt(e, t, "gutterContextMenu", !1) : !1
	}

	function wr(e, t) {
		if (Fo(e, t.from) < 0) return e;
		if (Fo(e, t.to) <= 0) return Qo(t);
		var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
			n = e.ch;
		return e.line == t.to.line && (n += Qo(t).ch - t.to.ch), zo(r, n)
	}

	function xr(e, t) {
		for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
			var i = e.sel.ranges[n];
			r.push(new he(wr(i.anchor, t), wr(i.head, t)))
		}
		return fe(r, e.sel.primIndex)
	}

	function Cr(e, t, r) {
		return e.line == t.line ? zo(r.line, e.ch - t.ch + r.ch) : zo(r.line + (e.line - t.line), e.ch)
	}

	function Sr(e, t, r) {
		for (var n = [], i = zo(e.first, 0), o = i, l = 0; l < t.length; l++) {
			var s = t[l],
				a = Cr(s.from, i, o),
				u = Cr(Qo(s), i, o);
			if (i = s.to, o = u, "around" == r) {
				var c = e.sel.ranges[l],
					h = Fo(c.head, c.anchor) < 0;
				n[l] = new he(h ? u : a, h ? a : u)
			} else n[l] = new he(a, a)
		}
		return new ce(n, e.sel.primIndex)
	}

	function Lr(e, t, r) {
		var n = {
			canceled: !1,
			from: t.from,
			to: t.to,
			text: t.text,
			origin: t.origin,
			cancel: function () {
				this.canceled = !0
			}
		};
		return r && (n.update = function (t, r, n, i) {
			t && (this.from = ge(e, t)), r && (this.to = ge(e, r)), n && (this.text = n), void 0 !== i && (this.origin = i)
		}), Dl(e, "beforeChange", e, n), e.cm && Dl(e.cm, "beforeChange", e.cm, n), n.canceled ? null : {
			from: n.from,
			to: n.to,
			text: n.text,
			origin: n.origin
		}
	}

	function Tr(e, t, r) {
		if (e.cm) {
			if (!e.cm.curOp) return At(e.cm, Tr)(e, t, r);
			if (e.cm.state.suppressEdits) return
		}
		if (!(Ni(e, "beforeChange") || e.cm && Ni(e.cm, "beforeChange")) || (t = Lr(e, t, !0))) {
			var n = Eo && !r && an(e, t.from, t.to);
			if (n)
				for (var i = n.length - 1; i >= 0; --i) kr(e, {
					from: n[i].from,
					to: n[i].to,
					text: i ? [""] : t.text
				});
			else kr(e, t)
		}
	}

	function kr(e, t) {
		if (1 != t.text.length || "" != t.text[0] || 0 != Fo(t.from, t.to)) {
			var r = xr(e, t);
			ui(e, t, r, e.cm ? e.cm.curOp.id : NaN), Wr(e, t, r, on(e, t));
			var n = [];
			$n(e, function (e, r) {
				r || -1 != Hi(n, e.history) || (bi(e.history, t), n.push(e.history)), Wr(e, t, null, on(e, t))
			})
		}
	}

	function Mr(e, t, r) {
		if (!e.cm || !e.cm.state.suppressEdits) {
			for (var n, i = e.history, o = e.sel, l = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, a = 0; a < l.length && (n = l[a], r ? !n.ranges || n.equals(e.sel) : n.ranges); a++);
			if (a != l.length) {
				for (i.lastOrigin = i.lastSelOrigin = null; n = l.pop(), n.ranges;) {
					if (fi(n, s), r && !n.equals(e.sel)) return void ke(e, n, {
						clearRedo: !1
					});
					o = n
				}
				var u = [];
				fi(o, s), s.push({
					changes: u,
					generation: i.generation
				}), i.generation = n.generation || ++i.maxGeneration;
				for (var c = Ni(e, "beforeChange") || e.cm && Ni(e.cm, "beforeChange"), a = n.changes.length - 1; a >= 0; --a) {
					var h = n.changes[a];
					if (h.origin = t, c && !Lr(e, h, !1)) return void(l.length = 0);
					u.push(li(e, h));
					var f = a ? xr(e, h) : Di(l);
					Wr(e, h, f, sn(e, h)), !a && e.cm && e.cm.scrollIntoView({
						from: h.from,
						to: Qo(h)
					});
					var d = [];
					$n(e, function (e, t) {
						t || -1 != Hi(d, e.history) || (bi(e.history, h), d.push(e.history)), Wr(e, h, null, sn(e, h))
					})
				}
			}
		}
	}

	function Nr(e, t) {
		if (0 != t && (e.first += t, e.sel = new ce(Pi(e.sel.ranges, function (e) {
				return new he(zo(e.anchor.line + t, e.anchor.ch), zo(e.head.line + t, e.head.ch))
			}), e.sel.primIndex), e.cm)) {
			Et(e.cm, e.first, e.first - t, t);
			for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) It(e.cm, n, "gutter")
		}
	}

	function Wr(e, t, r, n) {
		if (e.cm && !e.cm.curOp) return At(e.cm, Wr)(e, t, r, n);
		if (t.to.line < e.first) return void Nr(e, t.text.length - 1 - (t.to.line - t.from.line));
		if (!(t.from.line > e.lastLine())) {
			if (t.from.line < e.first) {
				var i = t.text.length - 1 - (e.first - t.from.line);
				Nr(e, i), t = {
					from: zo(e.first, 0),
					to: zo(t.to.line + i, t.to.ch),
					text: [Di(t.text)],
					origin: t.origin
				}
			}
			var o = e.lastLine();
			t.to.line > o && (t = {
				from: t.from,
				to: zo(o, Zn(e, o).text.length),
				text: [t.text[0]],
				origin: t.origin
			}), t.removed = Qn(e, t.from, t.to), r || (r = xr(e, t)), e.cm ? Ar(e.cm, t, n) : Xn(e, t, n), Me(e, r, Il)
		}
	}

	function Ar(e, t, r) {
		var n = e.doc,
			i = e.display,
			l = t.from,
			s = t.to,
			a = !1,
			u = l.line;
		e.options.lineWrapping || (u = ti(yn(Zn(n, l.line))), n.iter(u, s.line + 1, function (e) {
			return e == i.maxLine ? (a = !0, !0) : void 0
		})), n.sel.contains(t.from, t.to) > -1 && Mi(e), Xn(n, t, r, o(e)), e.options.lineWrapping || (n.iter(u, l.line + t.text.length, function (e) {
			var t = h(e);
			t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, a = !1)
		}), a && (e.curOp.updateMaxLine = !0)), n.frontier = Math.min(n.frontier, l.line), Re(e, 400);
		var c = t.text.length - (s.line - l.line) - 1;
		t.full ? Et(e) : l.line != s.line || 1 != t.text.length || jn(e.doc, t) ? Et(e, l.line, s.line + 1, c) : It(e, l.line, "text");
		var f = Ni(e, "changes"),
			d = Ni(e, "change");
		if (d || f) {
			var p = {
				from: l,
				to: s,
				text: t.text,
				removed: t.removed,
				origin: t.origin
			};
			d && Li(e, "change", e, p), f && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p)
		}
		e.display.selForContextMenu = null
	}

	function Or(e, t, r, n, i) {
		if (n || (n = r), Fo(n, r) < 0) {
			var o = n;
			n = r, r = o
		}
		"string" == typeof t && (t = e.splitLines(t)), Tr(e, {
			from: r,
			to: n,
			text: t,
			origin: i
		})
	}

	function Dr(e, t) {
		if (!ki(e, "scrollCursorIntoView")) {
			var r = e.display,
				n = r.sizer.getBoundingClientRect(),
				i = null;
			if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !Mo) {
				var o = Ui("div", "​", null, "position: absolute; top: " + (t.top - r.viewOffset - Ve(e.display)) + "px; height: " + (t.bottom - t.top + Xe(e) + r.barHeight) + "px; left: " + t.left + "px; width: 2px;");
				e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
			}
		}
	}

	function Hr(e, t, r, n) {
		null == n && (n = 0);
		for (var i = 0; 5 > i; i++) {
			var o = !1,
				l = dt(e, t),
				s = r && r != t ? dt(e, r) : l,
				a = Er(e, Math.min(l.left, s.left), Math.min(l.top, s.top) - n, Math.max(l.left, s.left), Math.max(l.bottom, s.bottom) + n),
				u = e.doc.scrollTop,
				c = e.doc.scrollLeft;
			if (null != a.scrollTop && (nr(e, a.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (o = !0)), null != a.scrollLeft && (ir(e, a.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (o = !0)), !o) break
		}
		return l
	}

	function Pr(e, t, r, n, i) {
		var o = Er(e, t, r, n, i);
		null != o.scrollTop && nr(e, o.scrollTop), null != o.scrollLeft && ir(e, o.scrollLeft)
	}

	function Er(e, t, r, n, i) {
		var o = e.display,
			l = yt(e.display);
		0 > r && (r = 0);
		var s = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
			a = _e(e),
			u = {};
		i - r > a && (i = r + a);
		var c = e.doc.height + Ke(o),
			h = l > r,
			f = i > c - l;
		if (s > r) u.scrollTop = h ? 0 : r;
		else if (i > s + a) {
			var d = Math.min(r, (f ? c : i) - a);
			d != s && (u.scrollTop = d)
		}
		var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
			g = Ye(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
			v = n - t > g;
		return v && (n = t + g), 10 > t ? u.scrollLeft = 0 : p > t ? u.scrollLeft = Math.max(0, t - (v ? 0 : 10)) : n > g + p - 3 && (u.scrollLeft = n + (v ? 0 : 10) - g), u
	}

	function Ir(e, t, r) {
		(null != t || null != r) && Fr(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != r && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + r)
	}

	function zr(e) {
		Fr(e);
		var t = e.getCursor(),
			r = t,
			n = t;
		e.options.lineWrapping || (r = t.ch ? zo(t.line, t.ch - 1) : t, n = zo(t.line, t.ch + 1)), e.curOp.scrollToPos = {
			from: r,
			to: n,
			margin: e.options.cursorScrollMargin,
			isCursor: !0
		}
	}

	function Fr(e) {
		var t = e.curOp.scrollToPos;
		if (t) {
			e.curOp.scrollToPos = null;
			var r = pt(e, t.from),
				n = pt(e, t.to),
				i = Er(e, Math.min(r.left, n.left), Math.min(r.top, n.top) - t.margin, Math.max(r.right, n.right), Math.max(r.bottom, n.bottom) + t.margin);
			e.scrollTo(i.scrollLeft, i.scrollTop)
		}
	}

	function Rr(e, t, r, n) {
		var i, o = e.doc;
		null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = Ue(e, t) : r = "prev");
		var l = e.options.tabSize,
			s = Zn(o, t),
			a = Rl(s.text, null, l);
		s.stateAfter && (s.stateAfter = null);
		var u, c = s.text.match(/^\s*/)[0];
		if (n || /\S/.test(s.text)) {
			if ("smart" == r && (u = o.mode.indent(i, s.text.slice(c.length), s.text), u == El || u > 150)) {
				if (!n) return;
				r = "prev"
			}
		} else u = 0, r = "not";
		"prev" == r ? u = t > o.first ? Rl(Zn(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r), u = Math.max(0, u);
		var h = "",
			f = 0;
		if (e.options.indentWithTabs)
			for (var d = Math.floor(u / l); d; --d) f += l, h += "	";
		if (u > f && (h += Oi(u - f)), h != c) return Or(o, h, zo(t, 0), zo(t, c.length), "+input"), s.stateAfter = null, !0;
		for (var d = 0; d < o.sel.ranges.length; d++) {
			var p = o.sel.ranges[d];
			if (p.head.line == t && p.head.ch < c.length) {
				var f = zo(t, c.length);
				Ce(o, d, new he(f, f));
				break
			}
		}
	}

	function Br(e, t, r, n) {
		var i = t,
			o = t;
		return "number" == typeof t ? o = Zn(e, pe(e, t)) : i = ti(t), null == i ? null : (n(o, i) && e.cm && It(e.cm, i, r), o)
	}

	function Gr(e, t) {
		for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
			for (var o = t(r[i]); n.length && Fo(o.from, Di(n).to) <= 0;) {
				var l = n.pop();
				if (Fo(l.from, o.from) < 0) {
					o.from = l.from;
					break
				}
			}
			n.push(o)
		}
		Wt(e, function () {
			for (var t = n.length - 1; t >= 0; t--) Or(e.doc, "", n[t].from, n[t].to, "+delete");
			zr(e)
		})
	}

	function Ur(e, t, r, n, i) {
		function o() {
			var t = s + r;
			return t < e.first || t >= e.first + e.size ? h = !1 : (s = t, c = Zn(e, t))
		}

		function l(e) {
			var t = (i ? ho : fo)(c, a, r, !0);
			if (null == t) {
				if (e || !o()) return h = !1;
				a = i ? (0 > r ? io : no)(c) : 0 > r ? c.text.length : 0
			} else a = t;
			return !0
		}
		var s = t.line,
			a = t.ch,
			u = r,
			c = Zn(e, s),
			h = !0;
		if ("char" == n) l();
		else if ("column" == n) l(!0);
		else if ("word" == n || "group" == n)
			for (var f = null, d = "group" == n, p = e.cm && e.cm.getHelper(t, "wordChars"), g = !0; !(0 > r) || l(!g); g = !1) {
				var v = c.text.charAt(a) || "\n",
					m = Ri(v, p) ? "w" : d && "\n" == v ? "n" : !d || /\s/.test(v) ? null : "p";
				if (!d || g || m || (m = "s"), f && f != m) {
					0 > r && (r = 1, l());
					break
				}
				if (m && (f = m), r > 0 && !l(!g)) break
			}
		var y = De(e, zo(s, a), t, u, !0);
		return h || (y.hitSide = !0), y
	}

	function Vr(e, t, r, n) {
		var i, o = e.doc,
			l = t.left;
		if ("page" == n) {
			var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
			i = t.top + r * (s - (0 > r ? 1.5 : .5) * yt(e.display))
		} else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
		for (;;) {
			var a = vt(e, l, i);
			if (!a.outside) break;
			if (0 > r ? 0 >= i : i >= o.height) {
				a.hitSide = !0;
				break
			}
			i += 5 * r
		}
		return a
	}

	function Kr(t, r, n, i) {
		e.defaults[t] = r, n && (el[t] = i ? function (e, t, r) {
			r != tl && n(e, t, r)
		} : n)
	}

	function jr(e) {
		for (var t, r, n, i, o = e.split(/-(?!$)/), e = o[o.length - 1], l = 0; l < o.length - 1; l++) {
			var s = o[l];
			if (/^(cmd|meta|m)$/i.test(s)) i = !0;
			else if (/^a(lt)?$/i.test(s)) t = !0;
			else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
			else {
				if (!/^s(hift)$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
				n = !0
			}
		}
		return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
	}

	function Xr(e) {
		return "string" == typeof e ? cl[e] : e
	}

	function Yr(e, t, r, n, i) {
		if (n && n.shared) return _r(e, t, r, n, i);
		if (e.cm && !e.cm.curOp) return At(e.cm, Yr)(e, t, r, n, i);
		var o = new vl(e, i),
			l = Fo(t, r);
		if (n && zi(n, o, !1), l > 0 || 0 == l && o.clearWhenEmpty !== !1) return o;
		if (o.replacedWith && (o.collapsed = !0, o.widgetNode = Ui("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
			if (mn(e, t.line, t, r, o) || t.line != r.line && mn(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
			Io = !0
		}
		o.addToHistory && ui(e, {
			from: t,
			to: r,
			origin: "markText"
		}, e.sel, NaN);
		var s, a = t.line,
			u = e.cm;
		if (e.iter(a, r.line + 1, function (e) {
				u && o.collapsed && !u.options.lineWrapping && yn(e) == u.display.maxLine && (s = !0), o.collapsed && a != t.line && ei(e, 0), tn(e, new Qr(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null)), ++a
			}), o.collapsed && e.iter(t.line, r.line + 1, function (t) {
				Cn(e, t) && ei(t, 0)
			}), o.clearOnEnter && Wl(o, "beforeCursorEnter", function () {
				o.clear()
			}), o.readOnly && (Eo = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++gl, o.atomic = !0), u) {
			if (s && (u.curOp.updateMaxLine = !0), o.collapsed) Et(u, t.line, r.line + 1);
			else if (o.className || o.title || o.startStyle || o.endStyle || o.css)
				for (var c = t.line; c <= r.line; c++) It(u, c, "text");
			o.atomic && We(u.doc), Li(u, "markerAdded", u, o)
		}
		return o
	}

	function _r(e, t, r, n, i) {
		n = zi(n), n.shared = !1;
		var o = [Yr(e, t, r, n, i)],
			l = o[0],
			s = n.widgetNode;
		return $n(e, function (e) {
			s && (n.widgetNode = s.cloneNode(!0)), o.push(Yr(e, ge(e, t), ge(e, r), n, i));
			for (var a = 0; a < e.linked.length; ++a)
				if (e.linked[a].isParent) return;
			l = Di(o)
		}), new ml(o, l)
	}

	function $r(e) {
		return e.findMarks(zo(e.first, 0), e.clipPos(zo(e.lastLine())), function (e) {
			return e.parent
		})
	}

	function qr(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r],
				i = n.find(),
				o = e.clipPos(i.from),
				l = e.clipPos(i.to);
			if (Fo(o, l)) {
				var s = Yr(e, o, l, n.primary, n.primary.type);
				n.markers.push(s), s.parent = n
			}
		}
	}

	function Zr(e) {
		for (var t = 0; t < e.length; t++) {
			var r = e[t],
				n = [r.primary.doc];
			$n(r.primary.doc, function (e) {
				n.push(e)
			});
			for (var i = 0; i < r.markers.length; i++) {
				var o = r.markers[i]; - 1 == Hi(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1))
			}
		}
	}

	function Qr(e, t, r) {
		this.marker = e, this.from = t, this.to = r
	}

	function Jr(e, t) {
		if (e)
			for (var r = 0; r < e.length; ++r) {
				var n = e[r];
				if (n.marker == t) return n
			}
	}

	function en(e, t) {
		for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
		return r
	}

	function tn(e, t) {
		e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
	}

	function rn(e, t, r) {
		if (e)
			for (var n, i = 0; i < e.length; ++i) {
				var o = e[i],
					l = o.marker,
					s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
				if (s || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
					var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
					(n || (n = [])).push(new Qr(l, o.from, a ? null : o.to))
				}
			}
		return n
	}

	function nn(e, t, r) {
		if (e)
			for (var n, i = 0; i < e.length; ++i) {
				var o = e[i],
					l = o.marker,
					s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
				if (s || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
					var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
					(n || (n = [])).push(new Qr(l, a ? null : o.from - t, null == o.to ? null : o.to - t))
				}
			}
		return n
	}

	function on(e, t) {
		if (t.full) return null;
		var r = me(e, t.from.line) && Zn(e, t.from.line).markedSpans,
			n = me(e, t.to.line) && Zn(e, t.to.line).markedSpans;
		if (!r && !n) return null;
		var i = t.from.ch,
			o = t.to.ch,
			l = 0 == Fo(t.from, t.to),
			s = rn(r, i, l),
			a = nn(n, o, l),
			u = 1 == t.text.length,
			c = Di(t.text).length + (u ? i : 0);
		if (s)
			for (var h = 0; h < s.length; ++h) {
				var f = s[h];
				if (null == f.to) {
					var d = Jr(a, f.marker);
					d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
				}
			}
		if (a)
			for (var h = 0; h < a.length; ++h) {
				var f = a[h];
				if (null != f.to && (f.to += c), null == f.from) {
					var d = Jr(s, f.marker);
					d || (f.from = c, u && (s || (s = [])).push(f))
				} else f.from += c, u && (s || (s = [])).push(f)
			}
		s && (s = ln(s)), a && a != s && (a = ln(a));
		var p = [s];
		if (!u) {
			var g, v = t.text.length - 2;
			if (v > 0 && s)
				for (var h = 0; h < s.length; ++h) null == s[h].to && (g || (g = [])).push(new Qr(s[h].marker, null, null));
			for (var h = 0; v > h; ++h) p.push(g);
			p.push(a)
		}
		return p
	}

	function ln(e) {
		for (var t = 0; t < e.length; ++t) {
			var r = e[t];
			null != r.from && r.from == r.to && r.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
		}
		return e.length ? e : null
	}

	function sn(e, t) {
		var r = gi(e, t),
			n = on(e, t);
		if (!r) return n;
		if (!n) return r;
		for (var i = 0; i < r.length; ++i) {
			var o = r[i],
				l = n[i];
			if (o && l) e: for (var s = 0; s < l.length; ++s) {
				for (var a = l[s], u = 0; u < o.length; ++u)
					if (o[u].marker == a.marker) continue e;
				o.push(a)
			} else l && (r[i] = l)
		}
		return r
	}

	function an(e, t, r) {
		var n = null;
		if (e.iter(t.line, r.line + 1, function (e) {
				if (e.markedSpans)
					for (var t = 0; t < e.markedSpans.length; ++t) {
						var r = e.markedSpans[t].marker;
						!r.readOnly || n && -1 != Hi(n, r) || (n || (n = [])).push(r)
					}
			}), !n) return null;
		for (var i = [{
				from: t,
				to: r
			}], o = 0; o < n.length; ++o)
			for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
				var u = i[a];
				if (!(Fo(u.to, s.from) < 0 || Fo(u.from, s.to) > 0)) {
					var c = [a, 1],
						h = Fo(u.from, s.from),
						f = Fo(u.to, s.to);
					(0 > h || !l.inclusiveLeft && !h) && c.push({
						from: u.from,
						to: s.from
					}), (f > 0 || !l.inclusiveRight && !f) && c.push({
						from: s.to,
						to: u.to
					}), i.splice.apply(i, c), a += c.length - 1
				}
			}
		return i
	}

	function un(e) {
		var t = e.markedSpans;
		if (t) {
			for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
			e.markedSpans = null
		}
	}

	function cn(e, t) {
		if (t) {
			for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
			e.markedSpans = t
		}
	}

	function hn(e) {
		return e.inclusiveLeft ? -1 : 0
	}

	function fn(e) {
		return e.inclusiveRight ? 1 : 0
	}

	function dn(e, t) {
		var r = e.lines.length - t.lines.length;
		if (0 != r) return r;
		var n = e.find(),
			i = t.find(),
			o = Fo(n.from, i.from) || hn(e) - hn(t);
		if (o) return -o;
		var l = Fo(n.to, i.to) || fn(e) - fn(t);
		return l ? l : t.id - e.id
	}

	function pn(e, t) {
		var r, n = Io && e.markedSpans;
		if (n)
			for (var i, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!r || dn(r, i.marker) < 0) && (r = i.marker);
		return r
	}

	function gn(e) {
		return pn(e, !0)
	}

	function vn(e) {
		return pn(e, !1)
	}

	function mn(e, t, r, n, i) {
		var o = Zn(e, t),
			l = Io && o.markedSpans;
		if (l)
			for (var s = 0; s < l.length; ++s) {
				var a = l[s];
				if (a.marker.collapsed) {
					var u = a.marker.find(0),
						c = Fo(u.from, r) || hn(a.marker) - hn(i),
						h = Fo(u.to, n) || fn(a.marker) - fn(i);
					if (!(c >= 0 && 0 >= h || 0 >= c && h >= 0) && (0 >= c && (Fo(u.to, r) > 0 || a.marker.inclusiveRight && i.inclusiveLeft) || c >= 0 && (Fo(u.from, n) < 0 || a.marker.inclusiveLeft && i.inclusiveRight))) return !0
				}
			}
	}

	function yn(e) {
		for (var t; t = gn(e);) e = t.find(-1, !0).line;
		return e
	}

	function bn(e) {
		for (var t, r; t = vn(e);) e = t.find(1, !0).line, (r || (r = [])).push(e);
		return r
	}

	function wn(e, t) {
		var r = Zn(e, t),
			n = yn(r);
		return r == n ? t : ti(n)
	}

	function xn(e, t) {
		if (t > e.lastLine()) return t;
		var r, n = Zn(e, t);
		if (!Cn(e, n)) return t;
		for (; r = vn(n);) n = r.find(1, !0).line;
		return ti(n) + 1
	}

	function Cn(e, t) {
		var r = Io && t.markedSpans;
		if (r)
			for (var n, i = 0; i < r.length; ++i)
				if (n = r[i], n.marker.collapsed) {
					if (null == n.from) return !0;
					if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && Sn(e, t, n)) return !0
				}
	}

	function Sn(e, t, r) {
		if (null == r.to) {
			var n = r.marker.find(1, !0);
			return Sn(e, n.line, Jr(n.line.markedSpans, r.marker))
		}
		if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
		for (var i, o = 0; o < t.markedSpans.length; ++o)
			if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && Sn(e, t, i)) return !0
	}

	function Ln(e, t, r) {
		ni(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Ir(e, null, r)
	}

	function Tn(e) {
		if (null != e.height) return e.height;
		var t = e.doc.cm;
		if (!t) return 0;
		if (!Yl(document.body, e.node)) {
			var r = "position: relative;";
			e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), Ki(t.display.measure, Ui("div", [e.node], null, r))
		}
		return e.height = e.node.parentNode.offsetHeight
	}

	function kn(e, t, r, n) {
		var i = new yl(e, r, n),
			o = e.cm;
		return o && i.noHScroll && (o.display.alignWidgets = !0), Br(e, t, "widget", function (t) {
			var r = t.widgets || (t.widgets = []);
			if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Cn(e, t)) {
				var n = ni(t) < e.scrollTop;
				ei(t, t.height + Tn(i)), n && Ir(o, null, i.height), o.curOp.forceUpdate = !0
			}
			return !0
		}), i
	}

	function Mn(e, t, r, n) {
		e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), un(e), cn(e, r);
		var i = n ? n(e) : 1;
		i != e.height && ei(e, i)
	}

	function Nn(e) {
		e.parent = null, un(e)
	}

	function Wn(e, t) {
		if (e)
			for (;;) {
				var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
				if (!r) break;
				e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
				var n = r[1] ? "bgClass" : "textClass";
				null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2])
			}
		return e
	}

	function An(t, r) {
		if (t.blankLine) return t.blankLine(r);
		if (t.innerMode) {
			var n = e.innerMode(t, r);
			return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
		}
	}

	function On(t, r, n, i) {
		for (var o = 0; 10 > o; o++) {
			i && (i[0] = e.innerMode(t, n).mode);
			var l = t.token(r, n);
			if (r.pos > r.start) return l
		}
		throw new Error("Mode " + t.name + " failed to advance stream.")
	}

	function Dn(e, t, r, n) {
		function i(e) {
			return {
				start: h.start,
				end: h.pos,
				string: h.current(),
				type: o || null,
				state: e ? sl(l.mode, c) : c
			}
		}
		var o, l = e.doc,
			s = l.mode;
		t = ge(l, t);
		var a, u = Zn(l, t.line),
			c = Ue(e, t.line, r),
			h = new pl(u.text, e.options.tabSize);
		for (n && (a = []);
			(n || h.pos < t.ch) && !h.eol();) h.start = h.pos, o = On(s, h, c), n && a.push(i(!0));
		return n ? a : i()
	}

	function Hn(e, t, r, n, i, o, l) {
		var s = r.flattenSpans;
		null == s && (s = e.options.flattenSpans);
		var a, u = 0,
			c = null,
			h = new pl(t, e.options.tabSize),
			f = e.options.addModeClass && [null];
		for ("" == t && Wn(An(r, n), o); !h.eol();) {
			if (h.pos > e.options.maxHighlightLength ? (s = !1, l && In(e, t, n, h.pos), h.pos = t.length, a = null) : a = Wn(On(r, h, n, f), o), f) {
				var d = f[0].name;
				d && (a = "m-" + (a ? d + " " + a : d))
			}
			if (!s || c != a) {
				for (; u < h.start;) u = Math.min(h.start, u + 5e4), i(u, c);
				c = a
			}
			h.start = h.pos
		}
		for (; u < h.pos;) {
			var p = Math.min(h.pos, u + 5e4);
			i(p, c), u = p
		}
	}

	function Pn(e, t, r, n) {
		var i = [e.state.modeGen],
			o = {};
		Hn(e, t.text, e.doc.mode, r, function (e, t) {
			i.push(e, t)
		}, o, n);
		for (var l = 0; l < e.state.overlays.length; ++l) {
			var s = e.state.overlays[l],
				a = 1,
				u = 0;
			Hn(e, t.text, s.mode, !0, function (e, t) {
				for (var r = a; e > u;) {
					var n = i[a];
					n > e && i.splice(a, 1, e, i[a + 1], n), a += 2, u = Math.min(e, n)
				}
				if (t)
					if (s.opaque) i.splice(r, a - r, e, "cm-overlay " + t), a = r + 2;
					else
						for (; a > r; r += 2) {
							var o = i[r + 1];
							i[r + 1] = (o ? o + " " : "") + "cm-overlay " + t
						}
			}, o)
		}
		return {
			styles: i,
			classes: o.bgClass || o.textClass ? o : null
		}
	}

	function En(e, t, r) {
		if (!t.styles || t.styles[0] != e.state.modeGen) {
			var n = Ue(e, ti(t)),
				i = Pn(e, t, t.text.length > e.options.maxHighlightLength ? sl(e.doc.mode, n) : n);
			t.stateAfter = n, t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.frontier && e.doc.frontier++
		}
		return t.styles
	}

	function In(e, t, r, n) {
		var i = e.doc.mode,
			o = new pl(t, e.options.tabSize);
		for (o.start = o.pos = n || 0, "" == t && An(i, r); !o.eol();) On(i, o, r), o.start = o.pos
	}

	function zn(e, t) {
		if (!e || /^\s*$/.test(e)) return null;
		var r = t.addModeClass ? xl : wl;
		return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
	}

	function Fn(e, t) {
		var r = Ui("span", null, null, xo ? "padding-right: .1px" : null),
			n = {
				pre: Ui("pre", [r], "CodeMirror-line"),
				content: r,
				col: 0,
				pos: 0,
				cm: e,
				splitSpaces: (bo || xo) && e.getOption("lineWrapping")
			};
		t.measure = {};
		for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
			var o, l = i ? t.rest[i - 1] : t.line;
			n.pos = 0, n.addToken = Bn, Qi(e.display.measure) && (o = ii(l)) && (n.addToken = Un(n.addToken, o)), n.map = [];
			var s = t != e.display.externalMeasured && ti(l);
			Kn(l, n, En(e, l, s)), l.styleClasses && (l.styleClasses.bgClass && (n.bgClass = Yi(l.styleClasses.bgClass, n.bgClass || "")), l.styleClasses.textClass && (n.textClass = Yi(l.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Zi(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
		}
		return xo && /\bcm-tab\b/.test(n.content.lastChild.className) && (n.content.className = "cm-tab-wrap-hack"), Dl(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = Yi(n.pre.className, n.textClass || "")), n
	}

	function Rn(e) {
		var t = Ui("span", "•", "cm-invalidchar");
		return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
	}

	function Bn(e, t, r, n, i, o, l) {
		if (t) {
			var s = e.splitSpaces ? t.replace(/ {3,}/g, Gn) : t,
				a = e.cm.state.specialChars,
				u = !1;
			if (a.test(t))
				for (var c = document.createDocumentFragment(), h = 0;;) {
					a.lastIndex = h;
					var f = a.exec(t),
						d = f ? f.index - h : t.length - h;
					if (d) {
						var p = document.createTextNode(s.slice(h, h + d));
						bo && 9 > wo ? c.appendChild(Ui("span", [p])) : c.appendChild(p), e.map.push(e.pos, e.pos + d, p), e.col += d, e.pos += d
					}
					if (!f) break;
					if (h += d + 1, "	" == f[0]) {
						var g = e.cm.options.tabSize,
							v = g - e.col % g,
							p = c.appendChild(Ui("span", Oi(v), "cm-tab"));
						p.setAttribute("role", "presentation"), p.setAttribute("cm-text", "	"), e.col += v
					} else if ("\r" == f[0] || "\n" == f[0]) {
						var p = c.appendChild(Ui("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar"));
						p.setAttribute("cm-text", f[0]), e.col += 1
					} else {
						var p = e.cm.options.specialCharPlaceholder(f[0]);
						p.setAttribute("cm-text", f[0]), bo && 9 > wo ? c.appendChild(Ui("span", [p])) : c.appendChild(p), e.col += 1
					}
					e.map.push(e.pos, e.pos + 1, p), e.pos++
				} else {
					e.col += t.length;
					var c = document.createTextNode(s);
					e.map.push(e.pos, e.pos + t.length, c), bo && 9 > wo && (u = !0), e.pos += t.length
				}
			if (r || n || i || u || l) {
				var m = r || "";
				n && (m += n), i && (m += i);
				var y = Ui("span", [c], m, l);
				return o && (y.title = o), e.content.appendChild(y)
			}
			e.content.appendChild(c)
		}
	}

	function Gn(e) {
		for (var t = " ", r = 0; r < e.length - 2; ++r) t += r % 2 ? " " : " ";
		return t += " "
	}

	function Un(e, t) {
		return function (r, n, i, o, l, s, a) {
			i = i ? i + " cm-force-border" : "cm-force-border";
			for (var u = r.pos, c = u + n.length;;) {
				for (var h = 0; h < t.length; h++) {
					var f = t[h];
					if (f.to > u && f.from <= u) break
				}
				if (f.to >= c) return e(r, n, i, o, l, s, a);
				e(r, n.slice(0, f.to - u), i, o, null, s, a), o = null, n = n.slice(f.to - u), u = f.to
			}
		}
	}

	function Vn(e, t, r, n) {
		var i = !n && r.widgetNode;
		i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t
	}

	function Kn(e, t, r) {
		var n = e.markedSpans,
			i = e.text,
			o = 0;
		if (n)
			for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0;;) {
				if (m == p) {
					a = u = c = h = s = "", f = null, m = 1 / 0;
					for (var y = [], b = 0; b < n.length; ++b) {
						var w = n[b],
							x = w.marker;
						"bookmark" == x.type && w.from == p && x.widgetNode ? y.push(x) : w.from <= p && (null == w.to || w.to > p || x.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && m > w.to && (m = w.to, u = ""), x.className && (a += " " + x.className), x.css && (s = (s ? s + ";" : "") + x.css), x.startStyle && w.from == p && (c += " " + x.startStyle), x.endStyle && w.to == m && (u += " " + x.endStyle), x.title && !h && (h = x.title), x.collapsed && (!f || dn(f.marker, x) < 0) && (f = w)) : w.from > p && m > w.from && (m = w.from)
					}
					if (f && (f.from || 0) == p) {
						if (Vn(t, (null == f.to ? d + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;
						f.to == p && (f = !1)
					}
					if (!f && y.length)
						for (var b = 0; b < y.length; ++b) Vn(t, 0, y[b])
				}
				if (p >= d) break;
				for (var C = Math.min(d, m);;) {
					if (v) {
						var S = p + v.length;
						if (!f) {
							var L = S > C ? v.slice(0, C - p) : v;
							t.addToken(t, L, l ? l + a : a, c, p + L.length == m ? u : "", h, s)
						}
						if (S >= C) {
							v = v.slice(C - p), p = C;
							break
						}
						p = S, c = ""
					}
					v = i.slice(o, o = r[g++]), l = zn(r[g++], t.cm.options)
				}
			} else
				for (var g = 1; g < r.length; g += 2) t.addToken(t, i.slice(o, o = r[g]), zn(r[g + 1], t.cm.options))
	}

	function jn(e, t) {
		return 0 == t.from.ch && 0 == t.to.ch && "" == Di(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
	}

	function Xn(e, t, r, n) {
		function i(e) {
			return r ? r[e] : null
		}

		function o(e, r, i) {
			Mn(e, r, i, n), Li(e, "change", e, t)
		}

		function l(e, t) {
			for (var r = e, o = []; t > r; ++r) o.push(new bl(u[r], i(r), n));
			return o
		}
		var s = t.from,
			a = t.to,
			u = t.text,
			c = Zn(e, s.line),
			h = Zn(e, a.line),
			f = Di(u),
			d = i(u.length - 1),
			p = a.line - s.line;
		if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
		else if (jn(e, t)) {
			var g = l(0, u.length - 1);
			o(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
		} else if (c == h)
			if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
			else {
				var g = l(1, u.length - 1);
				g.push(new bl(f + c.text.slice(a.ch), d, n)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, g)
			}
		else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), i(0)), e.remove(s.line + 1, p);
		else {
			o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(a.ch), d);
			var g = l(1, u.length - 1);
			p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, g)
		}
		Li(e, "change", e, t)
	}

	function Yn(e) {
		this.lines = e, this.parent = null;
		for (var t = 0, r = 0; t < e.length; ++t) e[t].parent = this, r += e[t].height;
		this.height = r
	}

	function _n(e) {
		this.children = e;
		for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
			var i = e[n];
			t += i.chunkSize(), r += i.height, i.parent = this
		}
		this.size = t, this.height = r, this.parent = null
	}

	function $n(e, t, r) {
		function n(e, i, o) {
			if (e.linked)
				for (var l = 0; l < e.linked.length; ++l) {
					var s = e.linked[l];
					if (s.doc != i) {
						var a = o && s.sharedHist;
						(!r || a) && (t(s.doc, a), n(s.doc, e, a))
					}
				}
		}
		n(e, null, !0)
	}

	function qn(e, t) {
		if (t.cm) throw new Error("This document is already in use.");
		e.doc = t, t.cm = e, l(e), r(e), e.options.lineWrapping || f(e), e.options.mode = t.modeOption, Et(e)
	}

	function Zn(e, t) {
		if (t -= e.first, 0 > t || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
		for (var r = e; !r.lines;)
			for (var n = 0;; ++n) {
				var i = r.children[n],
					o = i.chunkSize();
				if (o > t) {
					r = i;
					break
				}
				t -= o
			}
		return r.lines[t]
	}

	function Qn(e, t, r) {
		var n = [],
			i = t.line;
		return e.iter(t.line, r.line + 1, function (e) {
			var o = e.text;
			i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i
		}), n
	}

	function Jn(e, t, r) {
		var n = [];
		return e.iter(t, r, function (e) {
			n.push(e.text)
		}), n
	}

	function ei(e, t) {
		var r = t - e.height;
		if (r)
			for (var n = e; n; n = n.parent) n.height += r
	}

	function ti(e) {
		if (null == e.parent) return null;
		for (var t = e.parent, r = Hi(t.lines, e), n = t.parent; n; t = n, n = n.parent)
			for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
		return r + t.first
	}

	function ri(e, t) {
		var r = e.first;
		e: do {
			for (var n = 0; n < e.children.length; ++n) {
				var i = e.children[n],
					o = i.height;
				if (o > t) {
					e = i;
					continue e
				}
				t -= o, r += i.chunkSize()
			}
			return r
		} while (!e.lines);
		for (var n = 0; n < e.lines.length; ++n) {
			var l = e.lines[n],
				s = l.height;
			if (s > t) break;
			t -= s
		}
		return r + n
	}

	function ni(e) {
		e = yn(e);
		for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
			var i = r.lines[n];
			if (i == e) break;
			t += i.height
		}
		for (var o = r.parent; o; r = o, o = r.parent)
			for (var n = 0; n < o.children.length; ++n) {
				var l = o.children[n];
				if (l == r) break;
				t += l.height
			}
		return t
	}

	function ii(e) {
		var t = e.order;
		return null == t && (t = e.order = ls(e.text)), t
	}

	function oi(e) {
		this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
	}

	function li(e, t) {
		var r = {
			from: Y(t.from),
			to: Qo(t),
			text: Qn(e, t.from, t.to)
		};
		return di(e, r, t.from.line, t.to.line + 1), $n(e, function (e) {
			di(e, r, t.from.line, t.to.line + 1)
		}, !0), r
	}

	function si(e) {
		for (; e.length;) {
			var t = Di(e);
			if (!t.ranges) break;
			e.pop()
		}
	}

	function ai(e, t) {
		return t ? (si(e.done), Di(e.done)) : e.done.length && !Di(e.done).ranges ? Di(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Di(e.done)) : void 0
	}

	function ui(e, t, r, n) {
		var i = e.history;
		i.undone.length = 0;
		var o, l = +new Date;
		if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > l - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ai(i, i.lastOp == n))) {
			var s = Di(o.changes);
			0 == Fo(t.from, t.to) && 0 == Fo(t.from, s.to) ? s.to = Qo(t) : o.changes.push(li(e, t))
		} else {
			var a = Di(i.done);
			for (a && a.ranges || fi(e.sel, i.done), o = {
					changes: [li(e, t)],
					generation: i.generation
				}, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
		}
		i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, s || Dl(e, "historyAdded")
	}

	function ci(e, t, r, n) {
		var i = t.charAt(0);
		return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
	}

	function hi(e, t, r, n) {
		var i = e.history,
			o = n && n.origin;
		r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ci(e, o, Di(i.done), t)) ? i.done[i.done.length - 1] = t : fi(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && n.clearRedo !== !1 && si(i.undone)
	}

	function fi(e, t) {
		var r = Di(t);
		r && r.ranges && r.equals(e) || t.push(e)
	}

	function di(e, t, r, n) {
		var i = t["spans_" + e.id],
			o = 0;
		e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
			r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o
		})
	}

	function pi(e) {
		if (!e) return null;
		for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
		return t ? t.length ? t : null : e
	}

	function gi(e, t) {
		var r = t["spans_" + e.id];
		if (!r) return null;
		for (var n = 0, i = []; n < t.text.length; ++n) i.push(pi(r[n]));
		return i
	}

	function vi(e, t, r) {
		for (var n = 0, i = []; n < e.length; ++n) {
			var o = e[n];
			if (o.ranges) i.push(r ? ce.prototype.deepCopy.call(o) : o);
			else {
				var l = o.changes,
					s = [];
				i.push({
					changes: s
				});
				for (var a = 0; a < l.length; ++a) {
					var u, c = l[a];
					if (s.push({
							from: c.from,
							to: c.to,
							text: c.text
						}), t)
						for (var h in c)(u = h.match(/^spans_(\d+)$/)) && Hi(t, Number(u[1])) > -1 && (Di(s)[h] = c[h], delete c[h])
				}
			}
		}
		return i
	}

	function mi(e, t, r, n) {
		r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
	}

	function yi(e, t, r, n) {
		for (var i = 0; i < e.length; ++i) {
			var o = e[i],
				l = !0;
			if (o.ranges) {
				o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
				for (var s = 0; s < o.ranges.length; s++) mi(o.ranges[s].anchor, t, r, n), mi(o.ranges[s].head, t, r, n)
			} else {
				for (var s = 0; s < o.changes.length; ++s) {
					var a = o.changes[s];
					if (r < a.from.line) a.from = zo(a.from.line + n, a.from.ch), a.to = zo(a.to.line + n, a.to.ch);
					else if (t <= a.to.line) {
						l = !1;
						break
					}
				}
				l || (e.splice(0, i + 1), i = 0)
			}
		}
	}

	function bi(e, t) {
		var r = t.from.line,
			n = t.to.line,
			i = t.text.length - (n - r) - 1;
		yi(e.done, r, n, i), yi(e.undone, r, n, i)
	}

	function wi(e) {
		return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
	}

	function xi(e) {
		return e.target || e.srcElement
	}

	function Ci(e) {
		var t = e.which;
		return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Ao && e.ctrlKey && 1 == t && (t = 3), t
	}

	function Si(e, t, r) {
		var n = e._handlers && e._handlers[t];
		return r ? n && n.length > 0 ? n.slice() : Al : n || Al
	}

	function Li(e, t) {
		function r(e) {
			return function () {
				e.apply(null, o)
			}
		}
		var n = Si(e, t, !1);
		if (n.length) {
			var i, o = Array.prototype.slice.call(arguments, 2);
			Ko ? i = Ko.delayedCallbacks : Hl ? i = Hl : (i = Hl = [], setTimeout(Ti, 0));
			for (var l = 0; l < n.length; ++l) i.push(r(n[l]))
		}
	}

	function Ti() {
		var e = Hl;
		Hl = null;
		for (var t = 0; t < e.length; ++t) e[t]()
	}

	function ki(e, t, r) {
		return "string" == typeof t && (t = {
			type: t,
			preventDefault: function () {
				this.defaultPrevented = !0
			}
		}), Dl(e, r || t.type, e, t), wi(t) || t.codemirrorIgnore
	}

	function Mi(e) {
		var t = e._handlers && e._handlers.cursorActivity;
		if (t)
			for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == Hi(r, t[n]) && r.push(t[n])
	}

	function Ni(e, t) {
		return Si(e, t).length > 0
	}

	function Wi(e) {
		e.prototype.on = function (e, t) {
			Wl(this, e, t)
		}, e.prototype.off = function (e, t) {
			Ol(this, e, t)
		}
	}

	function Ai() {
		this.id = null
	}

	function Oi(e) {
		for (; Gl.length <= e;) Gl.push(Di(Gl) + " ");
		return Gl[e]
	}

	function Di(e) {
		return e[e.length - 1]
	}

	function Hi(e, t) {
		for (var r = 0; r < e.length; ++r)
			if (e[r] == t) return r;
		return -1
	}

	function Pi(e, t) {
		for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
		return r
	}

	function Ei() {}

	function Ii(e, t) {
		var r;
		return Object.create ? r = Object.create(e) : (Ei.prototype = e, r = new Ei), t && zi(t, r), r
	}

	function zi(e, t, r) {
		t || (t = {});
		for (var n in e) !e.hasOwnProperty(n) || r === !1 && t.hasOwnProperty(n) || (t[n] = e[n]);
		return t
	}

	function Fi(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return function () {
			return e.apply(null, t)
		}
	}

	function Ri(e, t) {
		return t ? t.source.indexOf("\\w") > -1 && jl(e) ? !0 : t.test(e) : jl(e)
	}

	function Bi(e) {
		for (var t in e)
			if (e.hasOwnProperty(t) && e[t]) return !1;
		return !0
	}

	function Gi(e) {
		return e.charCodeAt(0) >= 768 && Xl.test(e)
	}

	function Ui(e, t, r, n) {
		var i = document.createElement(e);
		if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));
		else if (t)
			for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
		return i
	}

	function Vi(e) {
		for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
		return e
	}

	function Ki(e, t) {
		return Vi(e).appendChild(t)
	}

	function ji() {
		for (var e = document.activeElement; e && e.root && e.root.activeElement;) e = e.root.activeElement;
		return e
	}

	function Xi(e) {
		return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
	}

	function Yi(e, t) {
		for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !Xi(r[n]).test(t) && (t += " " + r[n]);
		return t
	}

	function _i(e) {
		if (document.body.getElementsByClassName)
			for (var t = document.body.getElementsByClassName("CodeMirror"), r = 0; r < t.length; r++) {
				var n = t[r].CodeMirror;
				n && e(n)
			}
	}

	function $i() {
		Ql || (qi(), Ql = !0)
	}

	function qi() {
		var e;
		Wl(window, "resize", function () {
			null == e && (e = setTimeout(function () {
				e = null, _i(Kt)
			}, 100))
		}), Wl(window, "blur", function () {
			_i(mr)
		})
	}

	function Zi(e) {
		if (null == _l) {
			var t = Ui("span", "​");
			Ki(e, Ui("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (_l = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(bo && 8 > wo))
		}
		var r = _l ? Ui("span", "​") : Ui("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
		return r.setAttribute("cm-text", ""), r
	}

	function Qi(e) {
		if (null != $l) return $l;
		var t = Ki(e, document.createTextNode("AخA")),
			r = Vl(t, 0, 1).getBoundingClientRect();
		if (!r || r.left == r.right) return !1;
		var n = Vl(t, 1, 2).getBoundingClientRect();
		return $l = n.right - r.right < 3
	}

	function Ji(e) {
		if (null != ns) return ns;
		var t = Ki(e, Ui("span", "x")),
			r = t.getBoundingClientRect(),
			n = Vl(t, 0, 1).getBoundingClientRect();
		return ns = Math.abs(r.left - n.left) > 1
	}

	function eo(e, t, r, n) {
		if (!e) return n(t, r, "ltr");
		for (var i = !1, o = 0; o < e.length; ++o) {
			var l = e[o];
			(l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr"), i = !0)
		}
		i || n(t, r, "ltr")
	}

	function to(e) {
		return e.level % 2 ? e.to : e.from
	}

	function ro(e) {
		return e.level % 2 ? e.from : e.to
	}

	function no(e) {
		var t = ii(e);
		return t ? to(t[0]) : 0
	}

	function io(e) {
		var t = ii(e);
		return t ? ro(Di(t)) : e.text.length
	}

	function oo(e, t) {
		var r = Zn(e.doc, t),
			n = yn(r);
		n != r && (t = ti(n));
		var i = ii(n),
			o = i ? i[0].level % 2 ? io(n) : no(n) : 0;
		return zo(t, o)
	}

	function lo(e, t) {
		for (var r, n = Zn(e.doc, t); r = vn(n);) n = r.find(1, !0).line, t = null;
		var i = ii(n),
			o = i ? i[0].level % 2 ? no(n) : io(n) : n.text.length;
		return zo(null == t ? ti(n) : t, o)
	}

	function so(e, t) {
		var r = oo(e, t.line),
			n = Zn(e.doc, r.line),
			i = ii(n);
		if (!i || 0 == i[0].level) {
			var o = Math.max(0, n.text.search(/\S/)),
				l = t.line == r.line && t.ch <= o && t.ch;
			return zo(r.line, l ? 0 : o)
		}
		return r
	}

	function ao(e, t, r) {
		var n = e[0].level;
		return t == n ? !0 : r == n ? !1 : r > t
	}

	function uo(e, t) {
		os = null;
		for (var r, n = 0; n < e.length; ++n) {
			var i = e[n];
			if (i.from < t && i.to > t) return n;
			if (i.from == t || i.to == t) {
				if (null != r) return ao(e, i.level, e[r].level) ? (i.from != i.to && (os = r), n) : (i.from != i.to && (os = n), r);
				r = n
			}
		}
		return r
	}

	function co(e, t, r, n) {
		if (!n) return t + r;
		do t += r; while (t > 0 && Gi(e.text.charAt(t)));
		return t
	}

	function ho(e, t, r, n) {
		var i = ii(e);
		if (!i) return fo(e, t, r, n);
		for (var o = uo(i, t), l = i[o], s = co(e, t, l.level % 2 ? -r : r, n);;) {
			if (s > l.from && s < l.to) return s;
			if (s == l.from || s == l.to) return uo(i, s) == o ? s : (l = i[o += r], r > 0 == l.level % 2 ? l.to : l.from);
			if (l = i[o += r], !l) return null;
			s = r > 0 == l.level % 2 ? co(e, l.to, -1, n) : co(e, l.from, 1, n)
		}
	}

	function fo(e, t, r, n) {
		var i = t + r;
		if (n)
			for (; i > 0 && Gi(e.text.charAt(i));) i += r;
		return 0 > i || i > e.text.length ? null : i
	}
	var po = navigator.userAgent,
		go = navigator.platform,
		vo = /gecko\/\d/i.test(po),
		mo = /MSIE \d/.test(po),
		yo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(po),
		bo = mo || yo,
		wo = bo && (mo ? document.documentMode || 6 : yo[1]),
		xo = /WebKit\//.test(po),
		Co = xo && /Qt\/\d+\.\d+/.test(po),
		So = /Chrome\//.test(po),
		Lo = /Opera\//.test(po),
		To = /Apple Computer/.test(navigator.vendor),
		ko = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(po),
		Mo = /PhantomJS/.test(po),
		No = /AppleWebKit/.test(po) && /Mobile\/\w+/.test(po),
		Wo = No || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(po),
		Ao = No || /Mac/.test(go),
		Oo = /win/i.test(go),
		Do = Lo && po.match(/Version\/(\d*\.\d*)/);
	Do && (Do = Number(Do[1])), Do && Do >= 15 && (Lo = !1, xo = !0);
	var Ho = Ao && (Co || Lo && (null == Do || 12.11 > Do)),
		Po = vo || bo && wo >= 9,
		Eo = !1,
		Io = !1;
	g.prototype = zi({
		update: function (e) {
			var t = e.scrollWidth > e.clientWidth + 1,
				r = e.scrollHeight > e.clientHeight + 1,
				n = e.nativeBarWidth;
			if (r) {
				this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
				var i = e.viewHeight - (t ? n : 0);
				this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
			} else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
			if (t) {
				this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
				var o = e.viewWidth - e.barLeft - (r ? n : 0);
				this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px"
			} else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
			return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
				right: r ? n : 0,
				bottom: t ? n : 0
			}
		},
		setScrollLeft: function (e) {
			this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
		},
		setScrollTop: function (e) {
			this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
		},
		zeroWidthHack: function () {
			var e = Ao && !ko ? "12px" : "18px";
			this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ai, this.disableVert = new Ai
		},
		enableZeroWidthBar: function (e, t) {
			function r() {
				var n = e.getBoundingClientRect(),
					i = document.elementFromPoint(n.left + 1, n.bottom - 1);
				i != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
			}
			e.style.pointerEvents = "auto", t.set(1e3, r)
		},
		clear: function () {
			var e = this.horiz.parentNode;
			e.removeChild(this.horiz), e.removeChild(this.vert)
		}
	}, g.prototype), v.prototype = zi({
		update: function () {
			return {
				bottom: 0,
				right: 0
			}
		},
		setScrollLeft: function () {},
		setScrollTop: function () {},
		clear: function () {}
	}, v.prototype), e.scrollbarModel = {
		"native": g,
		"null": v
	}, T.prototype.signal = function (e, t) {
		Ni(e, t) && this.events.push(arguments)
	}, T.prototype.finish = function () {
		for (var e = 0; e < this.events.length; e++) Dl.apply(null, this.events[e])
	};
	var zo = e.Pos = function (e, t) {
			return this instanceof zo ? (this.line = e, void(this.ch = t)) : new zo(e, t)
		},
		Fo = e.cmpPos = function (e, t) {
			return e.line - t.line || e.ch - t.ch
		},
		Ro = null;
	re.prototype = zi({
		init: function (e) {
			function t(e) {
				if (n.somethingSelected()) Ro = n.getSelections(), r.inaccurateSelection && (r.prevInput = "",
					r.inaccurateSelection = !1, o.value = Ro.join("\n"), Ul(o));
				else {
					if (!n.options.lineWiseCopyCut) return;
					var t = ee(n);
					Ro = t.text, "cut" == e.type ? n.setSelections(t.ranges, null, Il) : (r.prevInput = "", o.value = t.text.join("\n"), Ul(o))
				}
				"cut" == e.type && (n.state.cutIncoming = !0)
			}
			var r = this,
				n = this.cm,
				i = this.wrapper = ne(),
				o = this.textarea = i.firstChild;
			e.wrapper.insertBefore(i, e.wrapper.firstChild), No && (o.style.width = "0px"), Wl(o, "input", function () {
				bo && wo >= 9 && r.hasSelection && (r.hasSelection = null), r.poll()
			}), Wl(o, "paste", function (e) {
				return Q(e, n) ? !0 : (n.state.pasteIncoming = !0, void r.fastPoll())
			}), Wl(o, "cut", t), Wl(o, "copy", t), Wl(e.scroller, "paste", function (t) {
				jt(e, t) || (n.state.pasteIncoming = !0, r.focus())
			}), Wl(e.lineSpace, "selectstart", function (t) {
				jt(e, t) || kl(t)
			}), Wl(o, "compositionstart", function () {
				var e = n.getCursor("from");
				r.composing && r.composing.range.clear(), r.composing = {
					start: e,
					range: n.markText(e, n.getCursor("to"), {
						className: "CodeMirror-composing"
					})
				}
			}), Wl(o, "compositionend", function () {
				r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
			})
		},
		prepareSelection: function () {
			var e = this.cm,
				t = e.display,
				r = e.doc,
				n = Ee(e);
			if (e.options.moveInputWithCursor) {
				var i = dt(e, r.sel.primary().head, "div"),
					o = t.wrapper.getBoundingClientRect(),
					l = t.lineDiv.getBoundingClientRect();
				n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
			}
			return n
		},
		showSelection: function (e) {
			var t = this.cm,
				r = t.display;
			Ki(r.cursorDiv, e.cursors), Ki(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
		},
		reset: function (e) {
			if (!this.contextMenuPending) {
				var t, r, n = this.cm,
					i = n.doc;
				if (n.somethingSelected()) {
					this.prevInput = "";
					var o = i.sel.primary();
					t = rs && (o.to().line - o.from().line > 100 || (r = n.getSelection()).length > 1e3);
					var l = t ? "-" : r || n.getSelection();
					this.textarea.value = l, n.state.focused && Ul(this.textarea), bo && wo >= 9 && (this.hasSelection = l)
				} else e || (this.prevInput = this.textarea.value = "", bo && wo >= 9 && (this.hasSelection = null));
				this.inaccurateSelection = t
			}
		},
		getField: function () {
			return this.textarea
		},
		supportsTouch: function () {
			return !1
		},
		focus: function () {
			if ("nocursor" != this.cm.options.readOnly && (!Wo || ji() != this.textarea)) try {
				this.textarea.focus()
			} catch (e) {}
		},
		blur: function () {
			this.textarea.blur()
		},
		resetPosition: function () {
			this.wrapper.style.top = this.wrapper.style.left = 0
		},
		receivedFocus: function () {
			this.slowPoll()
		},
		slowPoll: function () {
			var e = this;
			e.pollingFast || e.polling.set(this.cm.options.pollInterval, function () {
				e.poll(), e.cm.state.focused && e.slowPoll()
			})
		},
		fastPoll: function () {
			function e() {
				var n = r.poll();
				n || t ? (r.pollingFast = !1, r.slowPoll()) : (t = !0, r.polling.set(60, e))
			}
			var t = !1,
				r = this;
			r.pollingFast = !0, r.polling.set(20, e)
		},
		poll: function () {
			var e = this.cm,
				t = this.textarea,
				r = this.prevInput;
			if (this.contextMenuPending || !e.state.focused || ts(t) && !r && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;
			var n = t.value;
			if (n == r && !e.somethingSelected()) return !1;
			if (bo && wo >= 9 && this.hasSelection === n || Ao && /[\uf700-\uf7ff]/.test(n)) return e.display.input.reset(), !1;
			if (e.doc.sel == e.display.selForContextMenu) {
				var i = n.charCodeAt(0);
				if (8203 != i || r || (r = "​"), 8666 == i) return this.reset(), this.cm.execCommand("undo")
			}
			for (var o = 0, l = Math.min(r.length, n.length); l > o && r.charCodeAt(o) == n.charCodeAt(o);) ++o;
			var s = this;
			return Wt(e, function () {
				Z(e, n.slice(o), r.length - o, null, s.composing ? "*compose" : null), n.length > 1e3 || n.indexOf("\n") > -1 ? t.value = s.prevInput = "" : s.prevInput = n, s.composing && (s.composing.range.clear(), s.composing.range = e.markText(s.composing.start, e.getCursor("to"), {
					className: "CodeMirror-composing"
				}))
			}), !0
		},
		ensurePolled: function () {
			this.pollingFast && this.poll() && (this.pollingFast = !1)
		},
		onKeyPress: function () {
			bo && wo >= 9 && (this.hasSelection = null), this.fastPoll()
		},
		onContextMenu: function (e) {
			function t() {
				if (null != l.selectionStart) {
					var e = i.somethingSelected(),
						t = "​" + (e ? l.value : "");
					l.value = "⇚", l.value = t, n.prevInput = e ? "" : "​", l.selectionStart = 1, l.selectionEnd = t.length, o.selForContextMenu = i.doc.sel
				}
			}

			function r() {
				if (n.contextMenuPending = !1, n.wrapper.style.position = "relative", l.style.cssText = c, bo && 9 > wo && o.scrollbars.setScrollTop(o.scroller.scrollTop = a), null != l.selectionStart) {
					(!bo || bo && 9 > wo) && t();
					var e = 0,
						r = function () {
							o.selForContextMenu == i.doc.sel && 0 == l.selectionStart && l.selectionEnd > 0 && "​" == n.prevInput ? At(i, ul.selectAll)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(r, 500) : o.input.reset()
						};
					o.detectingSelectAll = setTimeout(r, 200)
				}
			}
			var n = this,
				i = n.cm,
				o = i.display,
				l = n.textarea,
				s = Xt(i, e),
				a = o.scroller.scrollTop;
			if (s && !Lo) {
				var u = i.options.resetSelectionOnContextMenu;
				u && -1 == i.doc.sel.contains(s) && At(i, ke)(i.doc, de(s), Il);
				var c = l.style.cssText;
				if (n.wrapper.style.position = "absolute", l.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " + (bo ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", xo) var h = window.scrollY;
				if (o.input.focus(), xo && window.scrollTo(null, h), o.input.reset(), i.somethingSelected() || (l.value = n.prevInput = " "), n.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), bo && wo >= 9 && t(), Po) {
					Nl(e);
					var f = function () {
						Ol(window, "mouseup", f), setTimeout(r, 20)
					};
					Wl(window, "mouseup", f)
				} else setTimeout(r, 50)
			}
		},
		readOnlyChanged: function (e) {
			e || this.reset()
		},
		setUneditable: Ei,
		needsContentAttribute: !1
	}, re.prototype), ie.prototype = zi({
		init: function (e) {
			function t(e) {
				if (n.somethingSelected()) Ro = n.getSelections(), "cut" == e.type && n.replaceSelection("", null, "cut");
				else {
					if (!n.options.lineWiseCopyCut) return;
					var t = ee(n);
					Ro = t.text, "cut" == e.type && n.operation(function () {
						n.setSelections(t.ranges, 0, Il), n.replaceSelection("", null, "cut")
					})
				}
				if (e.clipboardData && !No) e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/plain", Ro.join("\n"));
				else {
					var r = ne(),
						i = r.firstChild;
					n.display.lineSpace.insertBefore(r, n.display.lineSpace.firstChild), i.value = Ro.join("\n");
					var o = document.activeElement;
					Ul(i), setTimeout(function () {
						n.display.lineSpace.removeChild(r), o.focus()
					}, 50)
				}
			}
			var r = this,
				n = r.cm,
				i = r.div = e.lineDiv;
			te(i), Wl(i, "paste", function (e) {
				Q(e, n)
			}), Wl(i, "compositionstart", function (e) {
				var t = e.data;
				if (r.composing = {
						sel: n.doc.sel,
						data: t,
						startData: t
					}, t) {
					var i = n.doc.sel.primary(),
						o = n.getLine(i.head.line),
						l = o.indexOf(t, Math.max(0, i.head.ch - t.length));
					l > -1 && l <= i.head.ch && (r.composing.sel = de(zo(i.head.line, l), zo(i.head.line, l + t.length)))
				}
			}), Wl(i, "compositionupdate", function (e) {
				r.composing.data = e.data
			}), Wl(i, "compositionend", function (e) {
				var t = r.composing;
				t && (e.data == t.startData || /\u200b/.test(e.data) || (t.data = e.data), setTimeout(function () {
					t.handled || r.applyComposition(t), r.composing == t && (r.composing = null)
				}, 50))
			}), Wl(i, "touchstart", function () {
				r.forceCompositionEnd()
			}), Wl(i, "input", function () {
				r.composing || (n.isReadOnly() || !r.pollContent()) && Wt(r.cm, function () {
					Et(n)
				})
			}), Wl(i, "copy", t), Wl(i, "cut", t)
		},
		prepareSelection: function () {
			var e = Ee(this.cm, !1);
			return e.focus = this.cm.state.focused, e
		},
		showSelection: function (e) {
			e && this.cm.display.view.length && (e.focus && this.showPrimarySelection(), this.showMultipleSelections(e))
		},
		showPrimarySelection: function () {
			var e = window.getSelection(),
				t = this.cm.doc.sel.primary(),
				r = se(this.cm, e.anchorNode, e.anchorOffset),
				n = se(this.cm, e.focusNode, e.focusOffset);
			if (!r || r.bad || !n || n.bad || 0 != Fo($(r, n), t.from()) || 0 != Fo(_(r, n), t.to())) {
				var i = oe(this.cm, t.from()),
					o = oe(this.cm, t.to());
				if (i || o) {
					var l = this.cm.display.view,
						s = e.rangeCount && e.getRangeAt(0);
					if (i) {
						if (!o) {
							var a = l[l.length - 1].measure,
								u = a.maps ? a.maps[a.maps.length - 1] : a.map;
							o = {
								node: u[u.length - 1],
								offset: u[u.length - 2] - u[u.length - 3]
							}
						}
					} else i = {
						node: l[0].measure.map[2],
						offset: 0
					};
					try {
						var c = Vl(i.node, i.offset, o.offset, o.node)
					} catch (h) {}
					c && (!vo && this.cm.state.focused ? (e.collapse(i.node, i.offset), c.collapsed || e.addRange(c)) : (e.removeAllRanges(), e.addRange(c)), s && null == e.anchorNode ? e.addRange(s) : vo && this.startGracePeriod()), this.rememberSelection()
				}
			}
		},
		startGracePeriod: function () {
			var e = this;
			clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
				e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
					e.cm.curOp.selectionChanged = !0
				})
			}, 20)
		},
		showMultipleSelections: function (e) {
			Ki(this.cm.display.cursorDiv, e.cursors), Ki(this.cm.display.selectionDiv, e.selection)
		},
		rememberSelection: function () {
			var e = window.getSelection();
			this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
		},
		selectionInEditor: function () {
			var e = window.getSelection();
			if (!e.rangeCount) return !1;
			var t = e.getRangeAt(0).commonAncestorContainer;
			return Yl(this.div, t)
		},
		focus: function () {
			"nocursor" != this.cm.options.readOnly && this.div.focus()
		},
		blur: function () {
			this.div.blur()
		},
		getField: function () {
			return this.div
		},
		supportsTouch: function () {
			return !0
		},
		receivedFocus: function () {
			function e() {
				t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
			}
			var t = this;
			this.selectionInEditor() ? this.pollSelection() : Wt(this.cm, function () {
				t.cm.curOp.selectionChanged = !0
			}), this.polling.set(this.cm.options.pollInterval, e)
		},
		selectionChanged: function () {
			var e = window.getSelection();
			return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
		},
		pollSelection: function () {
			if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
				var e = window.getSelection(),
					t = this.cm;
				this.rememberSelection();
				var r = se(t, e.anchorNode, e.anchorOffset),
					n = se(t, e.focusNode, e.focusOffset);
				r && n && Wt(t, function () {
					ke(t.doc, de(r, n), Il), (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
				})
			}
		},
		pollContent: function () {
			var e = this.cm,
				t = e.display,
				r = e.doc.sel.primary(),
				n = r.from(),
				i = r.to();
			if (n.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
			var o;
			if (n.line == t.viewFrom || 0 == (o = Ft(e, n.line))) var l = ti(t.view[0].line),
				s = t.view[0].node;
			else var l = ti(t.view[o].line),
				s = t.view[o - 1].node.nextSibling;
			var a = Ft(e, i.line);
			if (a == t.view.length - 1) var u = t.viewTo - 1,
				c = t.lineDiv.lastChild;
			else var u = ti(t.view[a + 1].line) - 1,
				c = t.view[a + 1].node.previousSibling;
			for (var h = e.doc.splitLines(ue(e, s, c, l, u)), f = Qn(e.doc, zo(l, 0), zo(u, Zn(e.doc, u).text.length)); h.length > 1 && f.length > 1;)
				if (Di(h) == Di(f)) h.pop(), f.pop(), u--;
				else {
					if (h[0] != f[0]) break;
					h.shift(), f.shift(), l++
				} for (var d = 0, p = 0, g = h[0], v = f[0], m = Math.min(g.length, v.length); m > d && g.charCodeAt(d) == v.charCodeAt(d);) ++d;
			for (var y = Di(h), b = Di(f), w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); w > p && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
			h[h.length - 1] = y.slice(0, y.length - p), h[0] = h[0].slice(d);
			var x = zo(l, d),
				C = zo(u, f.length ? Di(f).length - p : 0);
			return h.length > 1 || h[0] || Fo(x, C) ? (Or(e.doc, h, x, C, "+input"), !0) : void 0
		},
		ensurePolled: function () {
			this.forceCompositionEnd()
		},
		reset: function () {
			this.forceCompositionEnd()
		},
		forceCompositionEnd: function () {
			this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus())
		},
		applyComposition: function (e) {
			this.cm.isReadOnly() ? At(this.cm, Et)(this.cm) : e.data && e.data != e.startData && At(this.cm, Z)(this.cm, e.data, 0, e.sel)
		},
		setUneditable: function (e) {
			e.contentEditable = "false"
		},
		onKeyPress: function (e) {
			e.preventDefault(), this.cm.isReadOnly() || At(this.cm, Z)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)
		},
		readOnlyChanged: function (e) {
			this.div.contentEditable = String("nocursor" != e)
		},
		onContextMenu: Ei,
		resetPosition: Ei,
		needsContentAttribute: !0
	}, ie.prototype), e.inputStyles = {
		textarea: re,
		contenteditable: ie
	}, ce.prototype = {
		primary: function () {
			return this.ranges[this.primIndex]
		},
		equals: function (e) {
			if (e == this) return !0;
			if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
			for (var t = 0; t < this.ranges.length; t++) {
				var r = this.ranges[t],
					n = e.ranges[t];
				if (0 != Fo(r.anchor, n.anchor) || 0 != Fo(r.head, n.head)) return !1
			}
			return !0
		},
		deepCopy: function () {
			for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new he(Y(this.ranges[t].anchor), Y(this.ranges[t].head));
			return new ce(e, this.primIndex)
		},
		somethingSelected: function () {
			for (var e = 0; e < this.ranges.length; e++)
				if (!this.ranges[e].empty()) return !0;
			return !1
		},
		contains: function (e, t) {
			t || (t = e);
			for (var r = 0; r < this.ranges.length; r++) {
				var n = this.ranges[r];
				if (Fo(t, n.from()) >= 0 && Fo(e, n.to()) <= 0) return r
			}
			return -1
		}
	}, he.prototype = {
		from: function () {
			return $(this.anchor, this.head)
		},
		to: function () {
			return _(this.anchor, this.head)
		},
		empty: function () {
			return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
		}
	};
	var Bo, Go, Uo, Vo = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		Ko = null,
		jo = 0,
		Xo = 0,
		Yo = 0,
		_o = null;
	bo ? _o = -.53 : vo ? _o = 15 : So ? _o = -.7 : To && (_o = -1 / 3);
	var $o = function (e) {
		var t = e.wheelDeltaX,
			r = e.wheelDeltaY;
		return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
			x: t,
			y: r
		}
	};
	e.wheelEventPixels = function (e) {
		var t = $o(e);
		return t.x *= _o, t.y *= _o, t
	};
	var qo = new Ai,
		Zo = null,
		Qo = e.changeEnd = function (e) {
			return e.text ? zo(e.from.line + e.text.length - 1, Di(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
		};
	e.prototype = {
		constructor: e,
		focus: function () {
			window.focus(), this.display.input.focus()
		},
		setOption: function (e, t) {
			var r = this.options,
				n = r[e];
			(r[e] != t || "mode" == e) && (r[e] = t, el.hasOwnProperty(e) && At(this, el[e])(this, t, n))
		},
		getOption: function (e) {
			return this.options[e]
		},
		getDoc: function () {
			return this.doc
		},
		addKeyMap: function (e, t) {
			this.state.keyMaps[t ? "push" : "unshift"](Xr(e))
		},
		removeKeyMap: function (e) {
			for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
				if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
		},
		addOverlay: Ot(function (t, r) {
			var n = t.token ? t : e.getMode(this.options, t);
			if (n.startState) throw new Error("Overlays may not be stateful.");
			this.state.overlays.push({
				mode: n,
				modeSpec: t,
				opaque: r && r.opaque
			}), this.state.modeGen++, Et(this)
		}),
		removeOverlay: Ot(function (e) {
			for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
				var n = t[r].modeSpec;
				if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void Et(this)
			}
		}),
		indentLine: Ot(function (e, t, r) {
			"string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), me(this.doc, e) && Rr(this, e, t, r)
		}),
		indentSelection: Ot(function (e) {
			for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
				var i = t[n];
				if (i.empty()) i.head.line > r && (Rr(this, i.head.line, e, !0), r = i.head.line, n == this.doc.sel.primIndex && zr(this));
				else {
					var o = i.from(),
						l = i.to(),
						s = Math.max(r, o.line);
					r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
					for (var a = s; r > a; ++a) Rr(this, a, e);
					var u = this.doc.sel.ranges;
					0 == o.ch && t.length == u.length && u[n].from().ch > 0 && Ce(this.doc, n, new he(o, u[n].to()), Il)
				}
			}
		}),
		getTokenAt: function (e, t) {
			return Dn(this, e, t)
		},
		getLineTokens: function (e, t) {
			return Dn(this, zo(e), t, !0)
		},
		getTokenTypeAt: function (e) {
			e = ge(this.doc, e);
			var t, r = En(this, Zn(this.doc, e.line)),
				n = 0,
				i = (r.length - 1) / 2,
				o = e.ch;
			if (0 == o) t = r[2];
			else
				for (;;) {
					var l = n + i >> 1;
					if ((l ? r[2 * l - 1] : 0) >= o) i = l;
					else {
						if (!(r[2 * l + 1] < o)) {
							t = r[2 * l + 2];
							break
						}
						n = l + 1
					}
				}
			var s = t ? t.indexOf("cm-overlay ") : -1;
			return 0 > s ? t : 0 == s ? null : t.slice(0, s - 1)
		},
		getModeAt: function (t) {
			var r = this.doc.mode;
			return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
		},
		getHelper: function (e, t) {
			return this.getHelpers(e, t)[0]
		},
		getHelpers: function (e, t) {
			var r = [];
			if (!ll.hasOwnProperty(t)) return r;
			var n = ll[t],
				i = this.getModeAt(e);
			if ("string" == typeof i[t]) n[i[t]] && r.push(n[i[t]]);
			else if (i[t])
				for (var o = 0; o < i[t].length; o++) {
					var l = n[i[t][o]];
					l && r.push(l)
				} else i.helperType && n[i.helperType] ? r.push(n[i.helperType]) : n[i.name] && r.push(n[i.name]);
			for (var o = 0; o < n._global.length; o++) {
				var s = n._global[o];
				s.pred(i, this) && -1 == Hi(r, s.val) && r.push(s.val)
			}
			return r
		},
		getStateAfter: function (e, t) {
			var r = this.doc;
			return e = pe(r, null == e ? r.first + r.size - 1 : e), Ue(this, e + 1, t)
		},
		cursorCoords: function (e, t) {
			var r, n = this.doc.sel.primary();
			return r = null == e ? n.head : "object" == typeof e ? ge(this.doc, e) : e ? n.from() : n.to(), dt(this, r, t || "page")
		},
		charCoords: function (e, t) {
			return ft(this, ge(this.doc, e), t || "page")
		},
		coordsChar: function (e, t) {
			return e = ht(this, e, t || "page"), vt(this, e.left, e.top)
		},
		lineAtHeight: function (e, t) {
			return e = ht(this, {
				top: e,
				left: 0
			}, t || "page").top, ri(this.doc, e + this.display.viewOffset)
		},
		heightAtLine: function (e, t) {
			var r, n = !1;
			if ("number" == typeof e) {
				var i = this.doc.first + this.doc.size - 1;
				e < this.doc.first ? e = this.doc.first : e > i && (e = i, n = !0), r = Zn(this.doc, e)
			} else r = e;
			return ct(this, r, {
				top: 0,
				left: 0
			}, t || "page").top + (n ? this.doc.height - ni(r) : 0)
		},
		defaultTextHeight: function () {
			return yt(this.display)
		},
		defaultCharWidth: function () {
			return bt(this.display)
		},
		setGutterMarker: Ot(function (e, t, r) {
			return Br(this.doc, e, "gutter", function (e) {
				var n = e.gutterMarkers || (e.gutterMarkers = {});
				return n[t] = r, !r && Bi(n) && (e.gutterMarkers = null), !0
			})
		}),
		clearGutter: Ot(function (e) {
			var t = this,
				r = t.doc,
				n = r.first;
			r.iter(function (r) {
				r.gutterMarkers && r.gutterMarkers[e] && (r.gutterMarkers[e] = null, It(t, n, "gutter"), Bi(r.gutterMarkers) && (r.gutterMarkers = null)), ++n
			})
		}),
		lineInfo: function (e) {
			if ("number" == typeof e) {
				if (!me(this.doc, e)) return null;
				var t = e;
				if (e = Zn(this.doc, e), !e) return null
			} else {
				var t = ti(e);
				if (null == t) return null
			}
			return {
				line: t,
				handle: e,
				text: e.text,
				gutterMarkers: e.gutterMarkers,
				textClass: e.textClass,
				bgClass: e.bgClass,
				wrapClass: e.wrapClass,
				widgets: e.widgets
			}
		},
		getViewport: function () {
			return {
				from: this.display.viewFrom,
				to: this.display.viewTo
			}
		},
		addWidget: function (e, t, r, n, i) {
			var o = this.display;
			e = dt(this, ge(this.doc, e));
			var l = e.bottom,
				s = e.left;
			if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == n) l = e.top;
			else if ("above" == n || "near" == n) {
				var a = Math.max(o.wrapper.clientHeight, this.doc.height),
					u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
				("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth)
			}
			t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), r && Pr(this, s, l, s + t.offsetWidth, l + t.offsetHeight)
		},
		triggerOnKeyDown: Ot(hr),
		triggerOnKeyPress: Ot(pr),
		triggerOnKeyUp: dr,
		execCommand: function (e) {
			return ul.hasOwnProperty(e) ? ul[e].call(null, this) : void 0
		},
		triggerElectric: Ot(function (e) {
			J(this, e)
		}),
		findPosH: function (e, t, r, n) {
			var i = 1;
			0 > t && (i = -1, t = -t);
			for (var o = 0, l = ge(this.doc, e); t > o && (l = Ur(this.doc, l, i, r, n), !l.hitSide); ++o);
			return l
		},
		moveH: Ot(function (e, t) {
			var r = this;
			r.extendSelectionsBy(function (n) {
				return r.display.shift || r.doc.extend || n.empty() ? Ur(r.doc, n.head, e, t, r.options.rtlMoveVisually) : 0 > e ? n.from() : n.to()
			}, Fl)
		}),
		deleteH: Ot(function (e, t) {
			var r = this.doc.sel,
				n = this.doc;
			r.somethingSelected() ? n.replaceSelection("", null, "+delete") : Gr(this, function (r) {
				var i = Ur(n, r.head, e, t, !1);
				return 0 > e ? {
					from: i,
					to: r.head
				} : {
					from: r.head,
					to: i
				}
			})
		}),
		findPosV: function (e, t, r, n) {
			var i = 1,
				o = n;
			0 > t && (i = -1, t = -t);
			for (var l = 0, s = ge(this.doc, e); t > l; ++l) {
				var a = dt(this, s, "div");
				if (null == o ? o = a.left : a.left = o, s = Vr(this, a, i, r), s.hitSide) break
			}
			return s
		},
		moveV: Ot(function (e, t) {
			var r = this,
				n = this.doc,
				i = [],
				o = !r.display.shift && !n.extend && n.sel.somethingSelected();
			if (n.extendSelectionsBy(function (l) {
					if (o) return 0 > e ? l.from() : l.to();
					var s = dt(r, l.head, "div");
					null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
					var a = Vr(r, s, e, t);
					return "page" == t && l == n.sel.primary() && Ir(r, null, ft(r, a, "div").top - s.top), a
				}, Fl), i.length)
				for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l]
		}),
		findWordAt: function (e) {
			var t = this.doc,
				r = Zn(t, e.line).text,
				n = e.ch,
				i = e.ch;
			if (r) {
				var o = this.getHelper(e, "wordChars");
				(e.xRel < 0 || i == r.length) && n ? --n : ++i;
				for (var l = r.charAt(n), s = Ri(l, o) ? function (e) {
						return Ri(e, o)
					} : /\s/.test(l) ? function (e) {
						return /\s/.test(e)
					} : function (e) {
						return !/\s/.test(e) && !Ri(e)
					}; n > 0 && s(r.charAt(n - 1));) --n;
				for (; i < r.length && s(r.charAt(i));) ++i
			}
			return new he(zo(e.line, n), zo(e.line, i))
		},
		toggleOverwrite: function (e) {
			(null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? Zl(this.display.cursorDiv, "CodeMirror-overwrite") : ql(this.display.cursorDiv, "CodeMirror-overwrite"), Dl(this, "overwriteToggle", this, this.state.overwrite))
		},
		hasFocus: function () {
			return this.display.input.getField() == ji()
		},
		isReadOnly: function () {
			return !(!this.options.readOnly && !this.doc.cantEdit)
		},
		scrollTo: Ot(function (e, t) {
			(null != e || null != t) && Fr(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t)
		}),
		getScrollInfo: function () {
			var e = this.display.scroller;
			return {
				left: e.scrollLeft,
				top: e.scrollTop,
				height: e.scrollHeight - Xe(this) - this.display.barHeight,
				width: e.scrollWidth - Xe(this) - this.display.barWidth,
				clientHeight: _e(this),
				clientWidth: Ye(this)
			}
		},
		scrollIntoView: Ot(function (e, t) {
			if (null == e ? (e = {
					from: this.doc.sel.primary().head,
					to: null
				}, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
					from: zo(e, 0),
					to: null
				} : null == e.from && (e = {
					from: e,
					to: null
				}), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) Fr(this), this.curOp.scrollToPos = e;
			else {
				var r = Er(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
				this.scrollTo(r.scrollLeft, r.scrollTop)
			}
		}),
		setSize: Ot(function (e, t) {
			function r(e) {
				return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
			}
			var n = this;
			null != e && (n.display.wrapper.style.width = r(e)), null != t && (n.display.wrapper.style.height = r(t)), n.options.lineWrapping && lt(this);
			var i = n.display.viewFrom;
			n.doc.iter(i, n.display.viewTo, function (e) {
				if (e.widgets)
					for (var t = 0; t < e.widgets.length; t++)
						if (e.widgets[t].noHScroll) {
							It(n, i, "widget");
							break
						}++ i
			}), n.curOp.forceUpdate = !0, Dl(n, "refresh", this)
		}),
		operation: function (e) {
			return Wt(this, e)
		},
		refresh: Ot(function () {
			var e = this.display.cachedTextHeight;
			Et(this), this.curOp.forceUpdate = !0, st(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), c(this), (null == e || Math.abs(e - yt(this.display)) > .5) && l(this), Dl(this, "refresh", this)
		}),
		swapDoc: Ot(function (e) {
			var t = this.doc;
			return t.cm = null, qn(this, e), st(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Li(this, "swapDoc", this, t), t
		}),
		getInputField: function () {
			return this.display.input.getField()
		},
		getWrapperElement: function () {
			return this.display.wrapper
		},
		getScrollerElement: function () {
			return this.display.scroller
		},
		getGutterElement: function () {
			return this.display.gutters
		}
	}, Wi(e);
	var Jo = e.defaults = {},
		el = e.optionHandlers = {},
		tl = e.Init = {
			toString: function () {
				return "CodeMirror.Init"
			}
		};
	Kr("value", "", function (e, t) {
		e.setValue(t)
	}, !0), Kr("mode", null, function (e, t) {
		e.doc.modeOption = t, r(e)
	}, !0), Kr("indentUnit", 2, r, !0), Kr("indentWithTabs", !1), Kr("smartIndent", !0), Kr("tabSize", 4, function (e) {
		n(e), st(e), Et(e)
	}, !0), Kr("lineSeparator", null, function (e, t) {
		if (e.doc.lineSep = t, t) {
			var r = [],
				n = e.doc.first;
			e.doc.iter(function (e) {
				for (var i = 0;;) {
					var o = e.text.indexOf(t, i);
					if (-1 == o) break;
					i = o + t.length, r.push(zo(n, o))
				}
				n++
			});
			for (var i = r.length - 1; i >= 0; i--) Or(e.doc, t, r[i], zo(r[i].line, r[i].ch + t.length))
		}
	}), Kr("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (t, r, n) {
		t.state.specialChars = new RegExp(r.source + (r.test("	") ? "" : "|	"), "g"), n != e.Init && t.refresh()
	}), Kr("specialCharPlaceholder", Rn, function (e) {
		e.refresh()
	}, !0), Kr("electricChars", !0), Kr("inputStyle", Wo ? "contenteditable" : "textarea", function () {
		throw new Error("inputStyle can not (yet) be changed in a running editor")
	}, !0), Kr("rtlMoveVisually", !Oo), Kr("wholeLineUpdateBefore", !0), Kr("theme", "default", function (e) {
		s(e), a(e)
	}, !0), Kr("keyMap", "default", function (t, r, n) {
		var i = Xr(r),
			o = n != e.Init && Xr(n);
		o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null)
	}), Kr("extraKeys", null), Kr("lineWrapping", !1, i, !0), Kr("gutters", [], function (e) {
		d(e.options), a(e)
	}, !0), Kr("fixedGutter", !0, function (e, t) {
		e.display.gutters.style.left = t ? L(e.display) + "px" : "0", e.refresh()
	}, !0), Kr("coverGutterNextToScrollbar", !1, function (e) {
		y(e)
	}, !0), Kr("scrollbarStyle", "native", function (e) {
		m(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
	}, !0), Kr("lineNumbers", !1, function (e) {
		d(e.options), a(e)
	}, !0), Kr("firstLineNumber", 1, a, !0), Kr("lineNumberFormatter", function (e) {
		return e
	}, a, !0), Kr("showCursorWhenSelecting", !1, Pe, !0), Kr("resetSelectionOnContextMenu", !0), Kr("lineWiseCopyCut", !0), Kr("readOnly", !1, function (e, t) {
		"nocursor" == t ? (mr(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1, e.display.input.readOnlyChanged(t)
	}), Kr("disableInput", !1, function (e, t) {
		t || e.display.input.reset()
	}, !0), Kr("dragDrop", !0, Vt), Kr("allowDropFileTypes", null), Kr("cursorBlinkRate", 530), Kr("cursorScrollMargin", 0), Kr("cursorHeight", 1, Pe, !0), Kr("singleCursorHeightPerLine", !0, Pe, !0), Kr("workTime", 100), Kr("workDelay", 100), Kr("flattenSpans", !0, n, !0), Kr("addModeClass", !1, n, !0), Kr("pollInterval", 100), Kr("undoDepth", 200, function (e, t) {
		e.doc.history.undoDepth = t
	}), Kr("historyEventDelay", 1250), Kr("viewportMargin", 10, function (e) {
		e.refresh()
	}, !0), Kr("maxHighlightLength", 1e4, n, !0), Kr("moveInputWithCursor", !0, function (e, t) {
		t || e.display.input.resetPosition()
	}), Kr("tabindex", null, function (e, t) {
		e.display.input.getField().tabIndex = t || ""
	}), Kr("autofocus", null);
	var rl = e.modes = {},
		nl = e.mimeModes = {};
	e.defineMode = function (t, r) {
		e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (r.dependencies = Array.prototype.slice.call(arguments, 2)), rl[t] = r
	}, e.defineMIME = function (e, t) {
		nl[e] = t
	}, e.resolveMode = function (t) {
		if ("string" == typeof t && nl.hasOwnProperty(t)) t = nl[t];
		else if (t && "string" == typeof t.name && nl.hasOwnProperty(t.name)) {
			var r = nl[t.name];
			"string" == typeof r && (r = {
				name: r
			}), t = Ii(r, t), t.name = r.name
		} else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
		return "string" == typeof t ? {
			name: t
		} : t || {
			name: "null"
		}
	}, e.getMode = function (t, r) {
		var r = e.resolveMode(r),
			n = rl[r.name];
		if (!n) return e.getMode(t, "text/plain");
		var i = n(t, r);
		if (il.hasOwnProperty(r.name)) {
			var o = il[r.name];
			for (var l in o) o.hasOwnProperty(l) && (i.hasOwnProperty(l) && (i["_" + l] = i[l]), i[l] = o[l])
		}
		if (i.name = r.name, r.helperType && (i.helperType = r.helperType), r.modeProps)
			for (var l in r.modeProps) i[l] = r.modeProps[l];
		return i
	}, e.defineMode("null", function () {
		return {
			token: function (e) {
				e.skipToEnd()
			}
		}
	}), e.defineMIME("text/plain", "null");
	var il = e.modeExtensions = {};
	e.extendMode = function (e, t) {
		var r = il.hasOwnProperty(e) ? il[e] : il[e] = {};
		zi(t, r)
	}, e.defineExtension = function (t, r) {
		e.prototype[t] = r
	}, e.defineDocExtension = function (e, t) {
		Sl.prototype[e] = t
	}, e.defineOption = Kr;
	var ol = [];
	e.defineInitHook = function (e) {
		ol.push(e)
	};
	var ll = e.helpers = {};
	e.registerHelper = function (t, r, n) {
		ll.hasOwnProperty(t) || (ll[t] = e[t] = {
			_global: []
		}), ll[t][r] = n
	}, e.registerGlobalHelper = function (t, r, n, i) {
		e.registerHelper(t, r, i), ll[t]._global.push({
			pred: n,
			val: i
		})
	};
	var sl = e.copyState = function (e, t) {
			if (t === !0) return t;
			if (e.copyState) return e.copyState(t);
			var r = {};
			for (var n in t) {
				var i = t[n];
				i instanceof Array && (i = i.concat([])), r[n] = i
			}
			return r
		},
		al = e.startState = function (e, t, r) {
			return e.startState ? e.startState(t, r) : !0
		};
	e.innerMode = function (e, t) {
		for (; e.innerMode;) {
			var r = e.innerMode(t);
			if (!r || r.mode == e) break;
			t = r.state, e = r.mode
		}
		return r || {
			mode: e,
			state: t
		}
	};
	var ul = e.commands = {
			selectAll: function (e) {
				e.setSelection(zo(e.firstLine(), 0), zo(e.lastLine()), Il)
			},
			singleSelection: function (e) {
				e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Il)
			},
			killLine: function (e) {
				Gr(e, function (t) {
					if (t.empty()) {
						var r = Zn(e.doc, t.head.line).text.length;
						return t.head.ch == r && t.head.line < e.lastLine() ? {
							from: t.head,
							to: zo(t.head.line + 1, 0)
						} : {
							from: t.head,
							to: zo(t.head.line, r)
						}
					}
					return {
						from: t.from(),
						to: t.to()
					}
				})
			},
			deleteLine: function (e) {
				Gr(e, function (t) {
					return {
						from: zo(t.from().line, 0),
						to: ge(e.doc, zo(t.to().line + 1, 0))
					}
				})
			},
			delLineLeft: function (e) {
				Gr(e, function (e) {
					return {
						from: zo(e.from().line, 0),
						to: e.from()
					}
				})
			},
			delWrappedLineLeft: function (e) {
				Gr(e, function (t) {
					var r = e.charCoords(t.head, "div").top + 5,
						n = e.coordsChar({
							left: 0,
							top: r
						}, "div");
					return {
						from: n,
						to: t.from()
					}
				})
			},
			delWrappedLineRight: function (e) {
				Gr(e, function (t) {
					var r = e.charCoords(t.head, "div").top + 5,
						n = e.coordsChar({
							left: e.display.lineDiv.offsetWidth + 100,
							top: r
						}, "div");
					return {
						from: t.from(),
						to: n
					}
				})
			},
			undo: function (e) {
				e.undo()
			},
			redo: function (e) {
				e.redo()
			},
			undoSelection: function (e) {
				e.undoSelection()
			},
			redoSelection: function (e) {
				e.redoSelection()
			},
			goDocStart: function (e) {
				e.extendSelection(zo(e.firstLine(), 0))
			},
			goDocEnd: function (e) {
				e.extendSelection(zo(e.lastLine()))
			},
			goLineStart: function (e) {
				e.extendSelectionsBy(function (t) {
					return oo(e, t.head.line)
				}, {
					origin: "+move",
					bias: 1
				})
			},
			goLineStartSmart: function (e) {
				e.extendSelectionsBy(function (t) {
					return so(e, t.head)
				}, {
					origin: "+move",
					bias: 1
				})
			},
			goLineEnd: function (e) {
				e.extendSelectionsBy(function (t) {
					return lo(e, t.head.line)
				}, {
					origin: "+move",
					bias: -1
				})
			},
			goLineRight: function (e) {
				e.extendSelectionsBy(function (t) {
					var r = e.charCoords(t.head, "div").top + 5;
					return e.coordsChar({
						left: e.display.lineDiv.offsetWidth + 100,
						top: r
					}, "div")
				}, Fl)
			},
			goLineLeft: function (e) {
				e.extendSelectionsBy(function (t) {
					var r = e.charCoords(t.head, "div").top + 5;
					return e.coordsChar({
						left: 0,
						top: r
					}, "div")
				}, Fl)
			},
			goLineLeftSmart: function (e) {
				e.extendSelectionsBy(function (t) {
					var r = e.charCoords(t.head, "div").top + 5,
						n = e.coordsChar({
							left: 0,
							top: r
						}, "div");
					return n.ch < e.getLine(n.line).search(/\S/) ? so(e, t.head) : n
				}, Fl)
			},
			goLineUp: function (e) {
				e.moveV(-1, "line")
			},
			goLineDown: function (e) {
				e.moveV(1, "line")
			},
			goPageUp: function (e) {
				e.moveV(-1, "page")
			},
			goPageDown: function (e) {
				e.moveV(1, "page")
			},
			goCharLeft: function (e) {
				e.moveH(-1, "char")
			},
			goCharRight: function (e) {
				e.moveH(1, "char")
			},
			goColumnLeft: function (e) {
				e.moveH(-1, "column")
			},
			goColumnRight: function (e) {
				e.moveH(1, "column")
			},
			goWordLeft: function (e) {
				e.moveH(-1, "word")
			},
			goGroupRight: function (e) {
				e.moveH(1, "group")
			},
			goGroupLeft: function (e) {
				e.moveH(-1, "group")
			},
			goWordRight: function (e) {
				e.moveH(1, "word")
			},
			delCharBefore: function (e) {
				e.deleteH(-1, "char")
			},
			delCharAfter: function (e) {
				e.deleteH(1, "char")
			},
			delWordBefore: function (e) {
				e.deleteH(-1, "word")
			},
			delWordAfter: function (e) {
				e.deleteH(1, "word")
			},
			delGroupBefore: function (e) {
				e.deleteH(-1, "group")
			},
			delGroupAfter: function (e) {
				e.deleteH(1, "group")
			},
			indentAuto: function (e) {
				e.indentSelection("smart")
			},
			indentMore: function (e) {
				e.indentSelection("add")
			},
			indentLess: function (e) {
				e.indentSelection("subtract")
			},
			insertTab: function (e) {
				e.replaceSelection("	")
			},
			insertSoftTab: function (e) {
				for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
					var o = r[i].from(),
						l = Rl(e.getLine(o.line), o.ch, n);
					t.push(new Array(n - l % n + 1).join(" "))
				}
				e.replaceSelections(t)
			},
			defaultTab: function (e) {
				e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
			},
			transposeChars: function (e) {
				Wt(e, function () {
					for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++) {
						var i = t[n].head,
							o = Zn(e.doc, i.line).text;
						if (o)
							if (i.ch == o.length && (i = new zo(i.line, i.ch - 1)), i.ch > 0) i = new zo(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), zo(i.line, i.ch - 2), i, "+transpose");
							else if (i.line > e.doc.first) {
							var l = Zn(e.doc, i.line - 1).text;
							l && e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), zo(i.line - 1, l.length - 1), zo(i.line, 1), "+transpose")
						}
						r.push(new he(i, i))
					}
					e.setSelections(r)
				})
			},
			newlineAndIndent: function (e) {
				Wt(e, function () {
					for (var t = e.listSelections().length, r = 0; t > r; r++) {
						var n = e.listSelections()[r];
						e.replaceRange(e.doc.lineSeparator(), n.anchor, n.head, "+input"), e.indentLine(n.from().line + 1, null, !0)
					}
					zr(e)
				})
			},
			toggleOverwrite: function (e) {
				e.toggleOverwrite()
			}
		},
		cl = e.keyMap = {};
	cl.basic = {
		Left: "goCharLeft",
		Right: "goCharRight",
		Up: "goLineUp",
		Down: "goLineDown",
		End: "goLineEnd",
		Home: "goLineStartSmart",
		PageUp: "goPageUp",
		PageDown: "goPageDown",
		Delete: "delCharAfter",
		Backspace: "delCharBefore",
		"Shift-Backspace": "delCharBefore",
		Tab: "defaultTab",
		"Shift-Tab": "indentAuto",
		Enter: "newlineAndIndent",
		Insert: "toggleOverwrite",
		Esc: "singleSelection"
	}, cl.pcDefault = {
		"Ctrl-A": "selectAll",
		"Ctrl-D": "deleteLine",
		"Ctrl-Z": "undo",
		"Shift-Ctrl-Z": "redo",
		"Ctrl-Y": "redo",
		"Ctrl-Home": "goDocStart",
		"Ctrl-End": "goDocEnd",
		"Ctrl-Up": "goLineUp",
		"Ctrl-Down": "goLineDown",
		"Ctrl-Left": "goGroupLeft",
		"Ctrl-Right": "goGroupRight",
		"Alt-Left": "goLineStart",
		"Alt-Right": "goLineEnd",
		"Ctrl-Backspace": "delGroupBefore",
		"Ctrl-Delete": "delGroupAfter",
		"Ctrl-S": "save",
		"Ctrl-F": "find",
		"Ctrl-G": "findNext",
		"Shift-Ctrl-G": "findPrev",
		"Shift-Ctrl-F": "replace",
		"Shift-Ctrl-R": "replaceAll",
		"Ctrl-[": "indentLess",
		"Ctrl-]": "indentMore",
		"Ctrl-U": "undoSelection",
		"Shift-Ctrl-U": "redoSelection",
		"Alt-U": "redoSelection",
		fallthrough: "basic"
	}, cl.emacsy = {
		"Ctrl-F": "goCharRight",
		"Ctrl-B": "goCharLeft",
		"Ctrl-P": "goLineUp",
		"Ctrl-N": "goLineDown",
		"Alt-F": "goWordRight",
		"Alt-B": "goWordLeft",
		"Ctrl-A": "goLineStart",
		"Ctrl-E": "goLineEnd",
		"Ctrl-V": "goPageDown",
		"Shift-Ctrl-V": "goPageUp",
		"Ctrl-D": "delCharAfter",
		"Ctrl-H": "delCharBefore",
		"Alt-D": "delWordAfter",
		"Alt-Backspace": "delWordBefore",
		"Ctrl-K": "killLine",
		"Ctrl-T": "transposeChars"
	}, cl.macDefault = {
		"Cmd-A": "selectAll",
		"Cmd-D": "deleteLine",
		"Cmd-Z": "undo",
		"Shift-Cmd-Z": "redo",
		"Cmd-Y": "redo",
		"Cmd-Home": "goDocStart",
		"Cmd-Up": "goDocStart",
		"Cmd-End": "goDocEnd",
		"Cmd-Down": "goDocEnd",
		"Alt-Left": "goGroupLeft",
		"Alt-Right": "goGroupRight",
		"Cmd-Left": "goLineLeft",
		"Cmd-Right": "goLineRight",
		"Alt-Backspace": "delGroupBefore",
		"Ctrl-Alt-Backspace": "delGroupAfter",
		"Alt-Delete": "delGroupAfter",
		"Cmd-S": "save",
		"Cmd-F": "find",
		"Cmd-G": "findNext",
		"Shift-Cmd-G": "findPrev",
		"Cmd-Alt-F": "replace",
		"Shift-Cmd-Alt-F": "replaceAll",
		"Cmd-[": "indentLess",
		"Cmd-]": "indentMore",
		"Cmd-Backspace": "delWrappedLineLeft",
		"Cmd-Delete": "delWrappedLineRight",
		"Cmd-U": "undoSelection",
		"Shift-Cmd-U": "redoSelection",
		"Ctrl-Up": "goDocStart",
		"Ctrl-Down": "goDocEnd",
		fallthrough: ["basic", "emacsy"]
	}, cl["default"] = Ao ? cl.macDefault : cl.pcDefault, e.normalizeKeyMap = function (e) {
		var t = {};
		for (var r in e)
			if (e.hasOwnProperty(r)) {
				var n = e[r];
				if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
				if ("..." == n) {
					delete e[r];
					continue
				}
				for (var i = Pi(r.split(" "), jr), o = 0; o < i.length; o++) {
					var l, s;
					o == i.length - 1 ? (s = i.join(" "), l = n) : (s = i.slice(0, o + 1).join(" "), l = "...");
					var a = t[s];
					if (a) {
						if (a != l) throw new Error("Inconsistent bindings for " + s)
					} else t[s] = l
				}
				delete e[r]
			} for (var u in t) e[u] = t[u];
		return e
	};
	var hl = e.lookupKey = function (e, t, r, n) {
			t = Xr(t);
			var i = t.call ? t.call(e, n) : t[e];
			if (i === !1) return "nothing";
			if ("..." === i) return "multi";
			if (null != i && r(i)) return "handled";
			if (t.fallthrough) {
				if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return hl(e, t.fallthrough, r, n);
				for (var o = 0; o < t.fallthrough.length; o++) {
					var l = hl(e, t.fallthrough[o], r, n);
					if (l) return l
				}
			}
		},
		fl = e.isModifierKey = function (e) {
			var t = "string" == typeof e ? e : is[e.keyCode];
			return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
		},
		dl = e.keyName = function (e, t) {
			if (Lo && 34 == e.keyCode && e["char"]) return !1;
			var r = is[e.keyCode],
				n = r;
			return null == n || e.altGraphKey ? !1 : (e.altKey && "Alt" != r && (n = "Alt-" + n), (Ho ? e.metaKey : e.ctrlKey) && "Ctrl" != r && (n = "Ctrl-" + n), (Ho ? e.ctrlKey : e.metaKey) && "Cmd" != r && (n = "Cmd-" + n), !t && e.shiftKey && "Shift" != r && (n = "Shift-" + n), n)
		};
	e.fromTextArea = function (t, r) {
		function n() {
			t.value = u.getValue()
		}
		if (r = r ? zi(r) : {}, r.value = t.value, !r.tabindex && t.tabIndex && (r.tabindex = t.tabIndex), !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), null == r.autofocus) {
			var i = ji();
			r.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body
		}
		if (t.form && (Wl(t.form, "submit", n), !r.leaveSubmitMethodAlone)) {
			var o = t.form,
				l = o.submit;
			try {
				var s = o.submit = function () {
					n(), o.submit = l, o.submit(), o.submit = s
				}
			} catch (a) {}
		}
		r.finishInit = function (e) {
			e.save = n, e.getTextArea = function () {
				return t
			}, e.toTextArea = function () {
				e.toTextArea = isNaN, n(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (Ol(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = l))
			}
		}, t.style.display = "none";
		var u = e(function (e) {
			t.parentNode.insertBefore(e, t.nextSibling)
		}, r);
		return u
	};
	var pl = e.StringStream = function (e, t) {
		this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
	};
	pl.prototype = {
		eol: function () {
			return this.pos >= this.string.length
		},
		sol: function () {
			return this.pos == this.lineStart
		},
		peek: function () {
			return this.string.charAt(this.pos) || void 0
		},
		next: function () {
			return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
		},
		eat: function (e) {
			var t = this.string.charAt(this.pos);
			if ("string" == typeof e) var r = t == e;
			else var r = t && (e.test ? e.test(t) : e(t));
			return r ? (++this.pos, t) : void 0
		},
		eatWhile: function (e) {
			for (var t = this.pos; this.eat(e););
			return this.pos > t
		},
		eatSpace: function () {
			for (var e = this.pos;
				/[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
			return this.pos > e
		},
		skipToEnd: function () {
			this.pos = this.string.length
		},
		skipTo: function (e) {
			var t = this.string.indexOf(e, this.pos);
			return t > -1 ? (this.pos = t, !0) : void 0
		},
		backUp: function (e) {
			this.pos -= e
		},
		column: function () {
			return this.lastColumnPos < this.start && (this.lastColumnValue = Rl(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Rl(this.string, this.lineStart, this.tabSize) : 0)
		},
		indentation: function () {
			return Rl(this.string, null, this.tabSize) - (this.lineStart ? Rl(this.string, this.lineStart, this.tabSize) : 0)
		},
		match: function (e, t, r) {
			if ("string" != typeof e) {
				var n = this.string.slice(this.pos).match(e);
				return n && n.index > 0 ? null : (n && t !== !1 && (this.pos += n[0].length), n)
			}
			var i = function (e) {
					return r ? e.toLowerCase() : e
				},
				o = this.string.substr(this.pos, e.length);
			return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0
		},
		current: function () {
			return this.string.slice(this.start, this.pos)
		},
		hideFirstChars: function (e, t) {
			this.lineStart += e;
			try {
				return t()
			} finally {
				this.lineStart -= e
			}
		}
	};
	var gl = 0,
		vl = e.TextMarker = function (e, t) {
			this.lines = [], this.type = t, this.doc = e, this.id = ++gl
		};
	Wi(vl), vl.prototype.clear = function () {
		if (!this.explicitlyCleared) {
			var e = this.doc.cm,
				t = e && !e.curOp;
			if (t && wt(e), Ni(this, "clear")) {
				var r = this.find();
				r && Li(this, "clear", r.from, r.to)
			}
			for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
				var l = this.lines[o],
					s = Jr(l.markedSpans, this);
				e && !this.collapsed ? It(e, ti(l), "text") : e && (null != s.to && (i = ti(l)), null != s.from && (n = ti(l))), l.markedSpans = en(l.markedSpans, s), null == s.from && this.collapsed && !Cn(this.doc, l) && e && ei(l, yt(e.display))
			}
			if (e && this.collapsed && !e.options.lineWrapping)
				for (var o = 0; o < this.lines.length; ++o) {
					var a = yn(this.lines[o]),
						u = h(a);
					u > e.display.maxLineLength && (e.display.maxLine = a, e.display.maxLineLength = u, e.display.maxLineChanged = !0)
				}
			null != n && e && this.collapsed && Et(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && We(e.doc)), e && Li(e, "markerCleared", e, this), t && Ct(e), this.parent && this.parent.clear()
		}
	}, vl.prototype.find = function (e, t) {
		null == e && "bookmark" == this.type && (e = 1);
		for (var r, n, i = 0; i < this.lines.length; ++i) {
			var o = this.lines[i],
				l = Jr(o.markedSpans, this);
			if (null != l.from && (r = zo(t ? o : ti(o), l.from), -1 == e)) return r;
			if (null != l.to && (n = zo(t ? o : ti(o), l.to), 1 == e)) return n
		}
		return r && {
			from: r,
			to: n
		}
	}, vl.prototype.changed = function () {
		var e = this.find(-1, !0),
			t = this,
			r = this.doc.cm;
		e && r && Wt(r, function () {
			var n = e.line,
				i = ti(e.line),
				o = Je(r, i);
			if (o && (ot(o), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Cn(t.doc, n) && null != t.height) {
				var l = t.height;
				t.height = null;
				var s = Tn(t) - l;
				s && ei(n, n.height + s)
			}
		})
	}, vl.prototype.attachLine = function (e) {
		if (!this.lines.length && this.doc.cm) {
			var t = this.doc.cm.curOp;
			t.maybeHiddenMarkers && -1 != Hi(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
		}
		this.lines.push(e)
	}, vl.prototype.detachLine = function (e) {
		if (this.lines.splice(Hi(this.lines, e), 1), !this.lines.length && this.doc.cm) {
			var t = this.doc.cm.curOp;
			(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
		}
	};
	var gl = 0,
		ml = e.SharedTextMarker = function (e, t) {
			this.markers = e, this.primary = t;
			for (var r = 0; r < e.length; ++r) e[r].parent = this
		};
	Wi(ml), ml.prototype.clear = function () {
		if (!this.explicitlyCleared) {
			this.explicitlyCleared = !0;
			for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
			Li(this, "clear")
		}
	}, ml.prototype.find = function (e, t) {
		return this.primary.find(e, t)
	};
	var yl = e.LineWidget = function (e, t, r) {
		if (r)
			for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
		this.doc = e, this.node = t
	};
	Wi(yl), yl.prototype.clear = function () {
		var e = this.doc.cm,
			t = this.line.widgets,
			r = this.line,
			n = ti(r);
		if (null != n && t) {
			for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
			t.length || (r.widgets = null);
			var o = Tn(this);
			ei(r, Math.max(0, r.height - o)), e && Wt(e, function () {
				Ln(e, r, -o), It(e, n, "widget")
			})
		}
	}, yl.prototype.changed = function () {
		var e = this.height,
			t = this.doc.cm,
			r = this.line;
		this.height = null;
		var n = Tn(this) - e;
		n && (ei(r, r.height + n), t && Wt(t, function () {
			t.curOp.forceUpdate = !0, Ln(t, r, n)
		}))
	};
	var bl = e.Line = function (e, t, r) {
		this.text = e, cn(this, t), this.height = r ? r(this) : 1
	};
	Wi(bl), bl.prototype.lineNo = function () {
		return ti(this)
	};
	var wl = {},
		xl = {};
	Yn.prototype = {
		chunkSize: function () {
			return this.lines.length
		},
		removeInner: function (e, t) {
			for (var r = e, n = e + t; n > r; ++r) {
				var i = this.lines[r];
				this.height -= i.height, Nn(i), Li(i, "delete")
			}
			this.lines.splice(e, t)
		},
		collapse: function (e) {
			e.push.apply(e, this.lines)
		},
		insertInner: function (e, t, r) {
			this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
			for (var n = 0; n < t.length; ++n) t[n].parent = this
		},
		iterN: function (e, t, r) {
			for (var n = e + t; n > e; ++e)
				if (r(this.lines[e])) return !0
		}
	}, _n.prototype = {
		chunkSize: function () {
			return this.size
		},
		removeInner: function (e, t) {
			this.size -= t;
			for (var r = 0; r < this.children.length; ++r) {
				var n = this.children[r],
					i = n.chunkSize();
				if (i > e) {
					var o = Math.min(t, i - e),
						l = n.height;
					if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
					e = 0
				} else e -= i
			}
			if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Yn))) {
				var s = [];
				this.collapse(s), this.children = [new Yn(s)], this.children[0].parent = this
			}
		},
		collapse: function (e) {
			for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
		},
		insertInner: function (e, t, r) {
			this.size += t.length, this.height += r;
			for (var n = 0; n < this.children.length; ++n) {
				var i = this.children[n],
					o = i.chunkSize();
				if (o >= e) {
					if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
						for (; i.lines.length > 50;) {
							var l = i.lines.splice(i.lines.length - 25, 25),
								s = new Yn(l);
							i.height -= s.height, this.children.splice(n + 1, 0, s), s.parent = this
						}
						this.maybeSpill()
					}
					break
				}
				e -= o
			}
		},
		maybeSpill: function () {
			if (!(this.children.length <= 10)) {
				var e = this;
				do {
					var t = e.children.splice(e.children.length - 5, 5),
						r = new _n(t);
					if (e.parent) {
						e.size -= r.size, e.height -= r.height;
						var n = Hi(e.parent.children, e);
						e.parent.children.splice(n + 1, 0, r)
					} else {
						var i = new _n(e.children);
						i.parent = e, e.children = [i, r], e = i
					}
					r.parent = e.parent
				} while (e.children.length > 10);
				e.parent.maybeSpill()
			}
		},
		iterN: function (e, t, r) {
			for (var n = 0; n < this.children.length; ++n) {
				var i = this.children[n],
					o = i.chunkSize();
				if (o > e) {
					var l = Math.min(t, o - e);
					if (i.iterN(e, l, r)) return !0;
					if (0 == (t -= l)) break;
					e = 0
				} else e -= o
			}
		}
	};
	var Cl = 0,
		Sl = e.Doc = function (e, t, r, n) {
			if (!(this instanceof Sl)) return new Sl(e, t, r, n);
			null == r && (r = 0), _n.call(this, [new Yn([new bl("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = r;
			var i = zo(r, 0);
			this.sel = de(i), this.history = new oi(null), this.id = ++Cl, this.modeOption = t, this.lineSep = n, this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Xn(this, {
				from: i,
				to: i,
				text: e
			}), ke(this, de(i), Il)
		};
	Sl.prototype = Ii(_n.prototype, {
		constructor: Sl,
		iter: function (e, t, r) {
			r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
		},
		insert: function (e, t) {
			for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
			this.insertInner(e - this.first, t, r)
		},
		remove: function (e, t) {
			this.removeInner(e - this.first, t)
		},
		getValue: function (e) {
			var t = Jn(this, this.first, this.first + this.size);
			return e === !1 ? t : t.join(e || this.lineSeparator())
		},
		setValue: Dt(function (e) {
			var t = zo(this.first, 0),
				r = this.first + this.size - 1;
			Tr(this, {
				from: t,
				to: zo(r, Zn(this, r).text.length),
				text: this.splitLines(e),
				origin: "setValue",
				full: !0
			}, !0), ke(this, de(t))
		}),
		replaceRange: function (e, t, r, n) {
			t = ge(this, t), r = r ? ge(this, r) : t, Or(this, e, t, r, n)
		},
		getRange: function (e, t, r) {
			var n = Qn(this, ge(this, e), ge(this, t));
			return r === !1 ? n : n.join(r || this.lineSeparator())
		},
		getLine: function (e) {
			var t = this.getLineHandle(e);
			return t && t.text
		},
		getLineHandle: function (e) {
			return me(this, e) ? Zn(this, e) : void 0
		},
		getLineNumber: function (e) {
			return ti(e)
		},
		getLineHandleVisualStart: function (e) {
			return "number" == typeof e && (e = Zn(this, e)), yn(e)
		},
		lineCount: function () {
			return this.size
		},
		firstLine: function () {
			return this.first
		},
		lastLine: function () {
			return this.first + this.size - 1
		},
		clipPos: function (e) {
			return ge(this, e)
		},
		getCursor: function (e) {
			var t, r = this.sel.primary();
			return t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || "to" == e || e === !1 ? r.to() : r.from()
		},
		listSelections: function () {
			return this.sel.ranges
		},
		somethingSelected: function () {
			return this.sel.somethingSelected()
		},
		setCursor: Dt(function (e, t, r) {
			Se(this, ge(this, "number" == typeof e ? zo(e, t || 0) : e), null, r)
		}),
		setSelection: Dt(function (e, t, r) {
			Se(this, ge(this, e), ge(this, t || e), r)
		}),
		extendSelection: Dt(function (e, t, r) {
			we(this, ge(this, e), t && ge(this, t), r)
		}),
		extendSelections: Dt(function (e, t) {
			xe(this, ye(this, e, t))
		}),
		extendSelectionsBy: Dt(function (e, t) {
			xe(this, Pi(this.sel.ranges, e), t)
		}),
		setSelections: Dt(function (e, t, r) {
			if (e.length) {
				for (var n = 0, i = []; n < e.length; n++) i[n] = new he(ge(this, e[n].anchor), ge(this, e[n].head));
				null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), ke(this, fe(i, t), r)
			}
		}),
		addSelection: Dt(function (e, t, r) {
			var n = this.sel.ranges.slice(0);
			n.push(new he(ge(this, e), ge(this, t || e))), ke(this, fe(n, n.length - 1), r)
		}),
		getSelection: function (e) {
			for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
				var i = Qn(this, r[n].from(), r[n].to());
				t = t ? t.concat(i) : i
			}
			return e === !1 ? t : t.join(e || this.lineSeparator())
		},
		getSelections: function (e) {
			for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
				var i = Qn(this, r[n].from(), r[n].to());
				e !== !1 && (i = i.join(e || this.lineSeparator())), t[n] = i
			}
			return t
		},
		replaceSelection: function (e, t, r) {
			for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
			this.replaceSelections(n, t, r || "+input")
		},
		replaceSelections: Dt(function (e, t, r) {
			for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
				var l = i.ranges[o];
				n[o] = {
					from: l.from(),
					to: l.to(),
					text: this.splitLines(e[o]),
					origin: r
				}
			}
			for (var s = t && "end" != t && Sr(this, n, t), o = n.length - 1; o >= 0; o--) Tr(this, n[o]);
			s ? Te(this, s) : this.cm && zr(this.cm)
		}),
		undo: Dt(function () {
			Mr(this, "undo")
		}),
		redo: Dt(function () {
			Mr(this, "redo")
		}),
		undoSelection: Dt(function () {
			Mr(this, "undo", !0)
		}),
		redoSelection: Dt(function () {
			Mr(this, "redo", !0)
		}),
		setExtending: function (e) {
			this.extend = e
		},
		getExtending: function () {
			return this.extend
		},
		historySize: function () {
			for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
			for (var n = 0; n < e.undone.length; n++) e.undone[n].ranges || ++r;
			return {
				undo: t,
				redo: r
			}
		},
		clearHistory: function () {
			this.history = new oi(this.history.maxGeneration)
		},
		markClean: function () {
			this.cleanGeneration = this.changeGeneration(!0)
		},
		changeGeneration: function (e) {
			return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
		},
		isClean: function (e) {
			return this.history.generation == (e || this.cleanGeneration)
		},
		getHistory: function () {
			return {
				done: vi(this.history.done),
				undone: vi(this.history.undone)
			}
		},
		setHistory: function (e) {
			var t = this.history = new oi(this.history.maxGeneration);
			t.done = vi(e.done.slice(0), null, !0), t.undone = vi(e.undone.slice(0), null, !0)
		},
		addLineClass: Dt(function (e, t, r) {
			return Br(this, e, "gutter" == t ? "gutter" : "class", function (e) {
				var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
				if (e[n]) {
					if (Xi(r).test(e[n])) return !1;
					e[n] += " " + r
				} else e[n] = r;
				return !0
			})
		}),
		removeLineClass: Dt(function (e, t, r) {
			return Br(this, e, "gutter" == t ? "gutter" : "class", function (e) {
				var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
					i = e[n];
				if (!i) return !1;
				if (null == r) e[n] = null;
				else {
					var o = i.match(Xi(r));
					if (!o) return !1;
					var l = o.index + o[0].length;
					e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null
				}
				return !0
			})
		}),
		addLineWidget: Dt(function (e, t, r) {
			return kn(this, e, t, r)
		}),
		removeLineWidget: function (e) {
			e.clear()
		},
		markText: function (e, t, r) {
			return Yr(this, ge(this, e), ge(this, t), r, r && r.type || "range")
		},
		setBookmark: function (e, t) {
			var r = {
				replacedWith: t && (null == t.nodeType ? t.widget : t),
				insertLeft: t && t.insertLeft,
				clearWhenEmpty: !1,
				shared: t && t.shared,
				handleMouseEvents: t && t.handleMouseEvents
			};
			return e = ge(this, e), Yr(this, e, e, r, "bookmark")
		},
		findMarksAt: function (e) {
			e = ge(this, e);
			var t = [],
				r = Zn(this, e.line).markedSpans;
			if (r)
				for (var n = 0; n < r.length; ++n) {
					var i = r[n];
					(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
				}
			return t
		},
		findMarks: function (e, t, r) {
			e = ge(this, e), t = ge(this, t);
			var n = [],
				i = e.line;
			return this.iter(e.line, t.line + 1, function (o) {
				var l = o.markedSpans;
				if (l)
					for (var s = 0; s < l.length; s++) {
						var a = l[s];
						i == e.line && e.ch > a.to || null == a.from && i != e.line || i == t.line && a.from > t.ch || r && !r(a.marker) || n.push(a.marker.parent || a.marker)
					}++i
			}), n
		},
		getAllMarks: function () {
			var e = [];
			return this.iter(function (t) {
				var r = t.markedSpans;
				if (r)
					for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker)
			}), e
		},
		posFromIndex: function (e) {
			var t, r = this.first;
			return this.iter(function (n) {
				var i = n.text.length + 1;
				return i > e ? (t = e, !0) : (e -= i, void++r)
			}), ge(this, zo(r, t))
		},
		indexFromPos: function (e) {
			e = ge(this, e);
			var t = e.ch;
			return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function (e) {
				t += e.text.length + 1
			}), t)
		},
		copy: function (e) {
			var t = new Sl(Jn(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
			return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
		},
		linkedDoc: function (e) {
			e || (e = {});
			var t = this.first,
				r = this.first + this.size;
			null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
			var n = new Sl(Jn(this, t, r), e.mode || this.modeOption, t, this.lineSep);
			return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
				doc: n,
				sharedHist: e.sharedHist
			}), n.linked = [{
				doc: this,
				isParent: !0,
				sharedHist: e.sharedHist
			}], qr(n, $r(this)), n
		},
		unlinkDoc: function (t) {
			if (t instanceof e && (t = t.doc), this.linked)
				for (var r = 0; r < this.linked.length; ++r) {
					var n = this.linked[r];
					if (n.doc == t) {
						this.linked.splice(r, 1), t.unlinkDoc(this), Zr($r(this));
						break
					}
				}
			if (t.history == this.history) {
				var i = [t.id];
				$n(t, function (e) {
					i.push(e.id)
				}, !0), t.history = new oi(null), t.history.done = vi(this.history.done, i), t.history.undone = vi(this.history.undone, i)
			}
		},
		iterLinkedDocs: function (e) {
			$n(this, e)
		},
		getMode: function () {
			return this.mode
		},
		getEditor: function () {
			return this.cm
		},
		splitLines: function (e) {
			return this.lineSep ? e.split(this.lineSep) : es(e)
		},
		lineSeparator: function () {
			return this.lineSep || "\n"
		}
	}), Sl.prototype.eachLine = Sl.prototype.iter;
	var Ll = "iter insert remove copy getEditor constructor".split(" ");
	for (var Tl in Sl.prototype) Sl.prototype.hasOwnProperty(Tl) && Hi(Ll, Tl) < 0 && (e.prototype[Tl] = function (e) {
		return function () {
			return e.apply(this.doc, arguments)
		}
	}(Sl.prototype[Tl]));
	Wi(Sl);
	var kl = e.e_preventDefault = function (e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		Ml = e.e_stopPropagation = function (e) {
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
		},
		Nl = e.e_stop = function (e) {
			kl(e), Ml(e)
		},
		Wl = e.on = function (e, t, r) {
			if (e.addEventListener) e.addEventListener(t, r, !1);
			else if (e.attachEvent) e.attachEvent("on" + t, r);
			else {
				var n = e._handlers || (e._handlers = {}),
					i = n[t] || (n[t] = []);
				i.push(r)
			}
		},
		Al = [],
		Ol = e.off = function (e, t, r) {
			if (e.removeEventListener) e.removeEventListener(t, r, !1);
			else if (e.detachEvent) e.detachEvent("on" + t, r);
			else
				for (var n = Si(e, t, !1), i = 0; i < n.length; ++i)
					if (n[i] == r) {
						n.splice(i, 1);
						break
					}
		},
		Dl = e.signal = function (e, t) {
			var r = Si(e, t, !0);
			if (r.length)
				for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
		},
		Hl = null,
		Pl = 30,
		El = e.Pass = {
			toString: function () {
				return "CodeMirror.Pass"
			}
		},
		Il = {
			scroll: !1
		},
		zl = {
			origin: "*mouse"
		},
		Fl = {
			origin: "+move"
		};
	Ai.prototype.set = function (e, t) {
		clearTimeout(this.id), this.id = setTimeout(t, e)
	};
	var Rl = e.countColumn = function (e, t, r, n, i) {
			null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
			for (var o = n || 0, l = i || 0;;) {
				var s = e.indexOf("	", o);
				if (0 > s || s >= t) return l + (t - o);
				l += s - o, l += r - l % r, o = s + 1
			}
		},
		Bl = e.findColumn = function (e, t, r) {
			for (var n = 0, i = 0;;) {
				var o = e.indexOf("	", n); - 1 == o && (o = e.length);
				var l = o - n;
				if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
				if (i += o - n, i += r - i % r, n = o + 1, i >= t) return n
			}
		},
		Gl = [""],
		Ul = function (e) {
			e.select()
		};
	No ? Ul = function (e) {
		e.selectionStart = 0, e.selectionEnd = e.value.length
	} : bo && (Ul = function (e) {
		try {
			e.select()
		} catch (t) {}
	});
	var Vl, Kl = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
		jl = e.isWordChar = function (e) {
			return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Kl.test(e))
		},
		Xl = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	Vl = document.createRange ? function (e, t, r, n) {
		var i = document.createRange();
		return i.setEnd(n || e, r), i.setStart(e, t), i
	} : function (e, t, r) {
		var n = document.body.createTextRange();
		try {
			n.moveToElementText(e.parentNode)
		} catch (i) {
			return n
		}
		return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
	};
	var Yl = e.contains = function (e, t) {
		if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
		do
			if (11 == t.nodeType && (t = t.host), t == e) return !0; while (t = t.parentNode)
	};
	bo && 11 > wo && (ji = function () {
		try {
			return document.activeElement
		} catch (e) {
			return document.body
		}
	});
	var _l, $l, ql = e.rmClass = function (e, t) {
			var r = e.className,
				n = Xi(t).exec(r);
			if (n) {
				var i = r.slice(n.index + n[0].length);
				e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
			}
		},
		Zl = e.addClass = function (e, t) {
			var r = e.className;
			Xi(t).test(r) || (e.className += (r ? " " : "") + t)
		},
		Ql = !1,
		Jl = function () {
			if (bo && 9 > wo) return !1;
			var e = Ui("div");
			return "draggable" in e || "dragDrop" in e
		}(),
		es = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function (e) {
			for (var t = 0, r = [], n = e.length; n >= t;) {
				var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
				var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
					l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1)
			}
			return r
		} : function (e) {
			return e.split(/\r\n?|\n/)
		},
		ts = window.getSelection ? function (e) {
			try {
				return e.selectionStart != e.selectionEnd
			} catch (t) {
				return !1
			}
		} : function (e) {
			try {
				var t = e.ownerDocument.selection.createRange()
			} catch (r) {}
			return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
		},
		rs = function () {
			var e = Ui("div");
			return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
		}(),
		ns = null,
		is = e.keyNames = {
			3: "Enter",
			8: "Backspace",
			9: "Tab",
			13: "Enter",
			16: "Shift",
			17: "Ctrl",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Esc",
			32: "Space",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "Left",
			38: "Up",
			39: "Right",
			40: "Down",
			44: "PrintScrn",
			45: "Insert",
			46: "Delete",
			59: ";",
			61: "=",
			91: "Mod",
			92: "Mod",
			93: "Mod",
			106: "*",
			107: "=",
			109: "-",
			110: ".",
			111: "/",
			127: "Delete",
			173: "-",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'",
			63232: "Up",
			63233: "Down",
			63234: "Left",
			63235: "Right",
			63272: "Delete",
			63273: "Home",
			63275: "End",
			63276: "PageUp",
			63277: "PageDown",
			63302: "Insert"
		};
	! function () {
		for (var e = 0; 10 > e; e++) is[e + 48] = is[e + 96] = String(e);
		for (var e = 65; 90 >= e; e++) is[e] = String.fromCharCode(e);
		for (var e = 1; 12 >= e; e++) is[e + 111] = is[e + 63235] = "F" + e
	}();
	var os, ls = function () {
		function e(e) {
			return 247 >= e ? r.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1773 >= e ? n.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L"
		}

		function t(e, t, r) {
			this.level = e, this.from = t, this.to = r
		}
		var r = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
			n = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
			i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
			o = /[stwN]/,
			l = /[LRr]/,
			s = /[Lb1n]/,
			a = /[1n]/,
			u = "L";
		return function (r) {
			if (!i.test(r)) return !1;
			for (var n, c = r.length, h = [], f = 0; c > f; ++f) h.push(n = e(r.charCodeAt(f)));
			for (var f = 0, d = u; c > f; ++f) {
				var n = h[f];
				"m" == n ? h[f] = d : d = n
			}
			for (var f = 0, p = u; c > f; ++f) {
				var n = h[f];
				"1" == n && "r" == p ? h[f] = "n" : l.test(n) && (p = n, "r" == n && (h[f] = "R"))
			}
			for (var f = 1, d = h[0]; c - 1 > f; ++f) {
				var n = h[f];
				"+" == n && "1" == d && "1" == h[f + 1] ? h[f] = "1" : "," != n || d != h[f + 1] || "1" != d && "n" != d || (h[f] = d), d = n
			}
			for (var f = 0; c > f; ++f) {
				var n = h[f];
				if ("," == n) h[f] = "N";
				else if ("%" == n) {
					for (var g = f + 1; c > g && "%" == h[g]; ++g);
					for (var v = f && "!" == h[f - 1] || c > g && "1" == h[g] ? "1" : "N", m = f; g > m; ++m) h[m] = v;
					f = g - 1
				}
			}
			for (var f = 0, p = u; c > f; ++f) {
				var n = h[f];
				"L" == p && "1" == n ? h[f] = "L" : l.test(n) && (p = n)
			}
			for (var f = 0; c > f; ++f)
				if (o.test(h[f])) {
					for (var g = f + 1; c > g && o.test(h[g]); ++g);
					for (var y = "L" == (f ? h[f - 1] : u), b = "L" == (c > g ? h[g] : u), v = y || b ? "L" : "R", m = f; g > m; ++m) h[m] = v;
					f = g - 1
				} for (var w, x = [], f = 0; c > f;)
				if (s.test(h[f])) {
					var C = f;
					for (++f; c > f && s.test(h[f]); ++f);
					x.push(new t(0, C, f))
				} else {
					var S = f,
						L = x.length;
					for (++f; c > f && "L" != h[f]; ++f);
					for (var m = S; f > m;)
						if (a.test(h[m])) {
							m > S && x.splice(L, 0, new t(1, S, m));
							var T = m;
							for (++m; f > m && a.test(h[m]); ++m);
							x.splice(L, 0, new t(2, T, m)), S = m
						} else ++m;
					f > S && x.splice(L, 0, new t(1, S, f))
				} return 1 == x[0].level && (w = r.match(/^\s+/)) && (x[0].from = w[0].length, x.unshift(new t(0, 0, w[0].length))), 1 == Di(x).level && (w = r.match(/\s+$/)) && (Di(x).to -= w[0].length, x.push(new t(0, c - w[0].length, c))), 2 == x[0].level && x.unshift(new t(1, x[0].to, x[0].to)), x[0].level != Di(x).level && x.push(new t(x[0].level, c, c)), x
		}
	}();
	return e.version = "5.9.1", e
});

//codemirror javascript
CodeMirror.defineMode("javascript", function (e, t) {
	function a(e) {
		var t = false,
			n, r = false;
		while ((n = e.next()) != null) {
			if (!t) {
				if (n == "/" && !r) return;
				if (n == "[") r = true;
				else if (r && n == "]") r = false
			}
			t = !t && n == "\\"
		}
	}

	function c(e, t, n) {
		f = e;
		l = n;
		return t
	}

	function h(e, t) {
		var n = e.next();
		if (n == '"' || n == "'") {
			t.tokenize = p(n);
			return t.tokenize(e, t)
		} else if (n == "." && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
			return c("number", "number")
		} else if (n == "." && e.match("..")) {
			return c("spread", "meta")
		} else if (/[\[\]{}\(\),;\:\.]/.test(n)) {
			return c(n)
		} else if (n == "=" && e.eat(">")) {
			return c("=>", "operator")
		} else if (n == "0" && e.eat(/x/i)) {
			e.eatWhile(/[\da-f]/i);
			return c("number", "number")
		} else if (/\d/.test(n)) {
			e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
			return c("number", "number")
		} else if (n == "/") {
			if (e.eat("*")) {
				t.tokenize = d;
				return d(e, t)
			} else if (e.eat("/")) {
				e.skipToEnd();
				return c("comment", "comment")
			} else if (t.lastType == "operator" || t.lastType == "keyword c" || t.lastType == "sof" || /^[\[{}\(,;:]$/.test(t.lastType)) {
				a(e);
				e.eatWhile(/[gimy]/);
				return c("regexp", "string-2")
			} else {
				e.eatWhile(u);
				return c("operator", "operator", e.current())
			}
		} else if (n == "`") {
			t.tokenize = v;
			return v(e, t)
		} else if (n == "#") {
			e.skipToEnd();
			return c("error", "error")
		} else if (u.test(n)) {
			e.eatWhile(u);
			return c("operator", "operator", e.current())
		} else {
			e.eatWhile(/[\w\$_]/);
			var r = e.current(),
				i = o.propertyIsEnumerable(r) && o[r];
			return i && t.lastType != "." ? c(i.type, i.style, r) : c("variable", "variable", r)
		}
	}

	function p(e) {
		return function (t, n) {
			var r = false,
				i;
			while ((i = t.next()) != null) {
				if (i == e && !r) break;
				r = !r && i == "\\"
			}
			if (!r) n.tokenize = h;
			return c("string", "string")
		}
	}

	function d(e, t) {
		var n = false,
			r;
		while (r = e.next()) {
			if (r == "/" && n) {
				t.tokenize = h;
				break
			}
			n = r == "*"
		}
		return c("comment", "comment")
	}

	function v(e, t) {
		var n = false,
			r;
		while ((r = e.next()) != null) {
			if (!n && (r == "`" || r == "$" && e.eat("{"))) {
				t.tokenize = h;
				break
			}
			n = !n && r == "\\"
		}
		return c("quasi", "string-2", e.current())
	}

	function g(e, t) {
		if (t.fatArrowAt) t.fatArrowAt = null;
		var n = e.string.indexOf("=>", e.start);
		if (n < 0) return;
		var r = 0,
			i = false;
		for (var s = n - 1; s >= 0; --s) {
			var o = e.string.charAt(s);
			var u = m.indexOf(o);
			if (u >= 0 && u < 3) {
				if (!r) {
					++s;
					break
				}
				if (--r == 0) break
			} else if (u >= 3 && u < 6) {
				++r
			} else if (/[$\w]/.test(o)) {
				i = true
			} else if (i && !r) {
				++s;
				break
			}
		}
		if (i && !r) t.fatArrowAt = s
	}

	function b(e, t, n, r, i, s) {
		this.indented = e;
		this.column = t;
		this.type = n;
		this.prev = i;
		this.info = s;
		if (r != null) this.align = r
	}

	function w(e, t) {
		for (var n = e.localVars; n; n = n.next)
			if (n.name == t) return true;
		for (var r = e.context; r; r = r.prev) {
			for (var n = r.vars; n; n = n.next)
				if (n.name == t) return true
		}
	}

	function E(e, t, n, r, s) {
		var o = e.cc;
		S.state = e;
		S.stream = s;
		S.marked = null, S.cc = o;
		if (!e.lexical.hasOwnProperty("align")) e.lexical.align = true;
		while (true) {
			var u = o.length ? o.pop() : i ? D : _;
			if (u(n, r)) {
				while (o.length && o[o.length - 1].lex) o.pop()();
				if (S.marked) return S.marked;
				if (n == "variable" && w(e, r)) return "variable-2";
				return t
			}
		}
	}

	function x() {
		for (var e = arguments.length - 1; e >= 0; e--) S.cc.push(arguments[e])
	}

	function T() {
		x.apply(null, arguments);
		return true
	}

	function N(e) {
		function n(t) {
			for (var n = t; n; n = n.next)
				if (n.name == e) return true;
			return false
		}
		var r = S.state;
		if (r.context) {
			S.marked = "def";
			if (n(r.localVars)) return;
			r.localVars = {
				name: e,
				next: r.localVars
			}
		} else {
			if (n(r.globalVars)) return;
			if (t.globalVars) r.globalVars = {
				name: e,
				next: r.globalVars
			}
		}
	}

	function k() {
		S.state.context = {
			prev: S.state.context,
			vars: S.state.localVars
		};
		S.state.localVars = C
	}

	function L() {
		S.state.localVars = S.state.context.vars;
		S.state.context = S.state.context.prev
	}

	function A(e, t) {
		var n = function () {
			var n = S.state,
				r = n.indented;
			if (n.lexical.type == "stat") r = n.lexical.indented;
			n.lexical = new b(r, S.stream.column(), e, null, n.lexical, t)
		};
		n.lex = true;
		return n
	}

	function O() {
		var e = S.state;
		if (e.lexical.prev) {
			if (e.lexical.type == ")") e.indented = e.lexical.indented;
			e.lexical = e.lexical.prev
		}
	}

	function M(e) {
		return function (t) {
			if (t == e) return T();
			else if (e == ";") return x();
			else return T(arguments.callee)
		}
	}

	function _(e, t) {
		if (e == "var") return T(A("vardef", t.length), et, M(";"), O);
		if (e == "keyword a") return T(A("form"), D, _, O);
		if (e == "keyword b") return T(A("form"), _, O);
		if (e == "{") return T(A("}"), G, O);
		if (e == ";") return T();
		if (e == "if") return T(A("form"), D, _, O, st);
		if (e == "function") return T(ct);
		if (e == "for") return T(A("form"), ot, _, O);
		if (e == "variable") return T(A("stat"), W);
		if (e == "switch") return T(A("form"), D, A("}", "switch"), M("{"), G, O, O);
		if (e == "case") return T(D, M(":"));
		if (e == "default") return T(M(":"));
		if (e == "catch") return T(A("form"), k, M("("), ht, M(")"), _, O, L);
		if (e == "module") return T(A("form"), k, mt, L, O);
		if (e == "class") return T(A("form"), pt, vt, O);
		if (e == "export") return T(A("form"), gt, O);
		if (e == "import") return T(A("form"), yt, O);
		return x(A("stat"), D, M(";"), O)
	}

	function D(e) {
		return H(e, false)
	}

	function P(e) {
		return H(e, true)
	}

	function H(e, t) {
		if (S.state.fatArrowAt == S.stream.start) {
			var n = t ? z : U;
			if (e == "(") return T(k, A(")"), K(tt, ")"), O, M("=>"), n, L);
			else if (e == "variable") return x(k, tt, M("=>"), n, L)
		}
		var r = t ? I : F;
		if (y.hasOwnProperty(e)) return T(r);
		if (e == "function") return T(ct);
		if (e == "keyword c") return T(t ? j : B);
		if (e == "(") return T(A(")"), B, xt, M(")"), O, r);
		if (e == "operator" || e == "spread") return T(t ? P : D);
		if (e == "[") return T(A("]"), Et, O, r);
		if (e == "{") return Q(V, "}", null, r);
		return T()
	}

	function B(e) {
		if (e.match(/[;\}\)\],]/)) return x();
		return x(D)
	}

	function j(e) {
		if (e.match(/[;\}\)\],]/)) return x();
		return x(P)
	}

	function F(e, t) {
		if (e == ",") return T(D);
		return I(e, t, false)
	}

	function I(e, t, n) {
		var r = n == false ? F : I;
		var i = n == false ? D : P;
		if (t == "=>") return T(k, n ? z : U, L);
		if (e == "operator") {
			if (/\+\+|--/.test(t)) return T(r);
			if (t == "?") return T(D, M(":"), i);
			return T(i)
		}
		if (e == "quasi") {
			S.cc.push(r);
			return q(t)
		}
		if (e == ";") return;
		if (e == "(") return Q(P, ")", "call", r);
		if (e == ".") return T(X, r);
		if (e == "[") return T(A("]"), B, M("]"), O, r)
	}

	function q(e) {
		if (e.slice(e.length - 2) != "${") return T();
		return T(D, R)
	}

	function R(e) {
		if (e == "}") {
			S.marked = "string-2";
			S.state.tokenize = v;
			return T()
		}
	}

	function U(e) {
		g(S.stream, S.state);
		if (e == "{") return x(_);
		return x(D)
	}

	function z(e) {
		g(S.stream, S.state);
		if (e == "{") return x(_);
		return x(P)
	}

	function W(e) {
		if (e == ":") return T(O, _);
		return x(F, M(";"), O)
	}

	function X(e) {
		if (e == "variable") {
			S.marked = "property";
			return T()
		}
	}

	function V(e, t) {
		if (e == "variable") {
			S.marked = "property";
			if (t == "get" || t == "set") return T($)
		} else if (e == "number" || e == "string") {
			S.marked = e + " property"
		} else if (e == "[") {
			return T(D, M("]"), J)
		}
		if (y.hasOwnProperty(e)) return T(J)
	}

	function $(e) {
		if (e != "variable") return x(J);
		S.marked = "property";
		return T(ct)
	}

	function J(e) {
		if (e == ":") return T(P);
		if (e == "(") return x(ct)
	}

	function K(e, t) {
		function n(r) {
			if (r == ",") {
				var i = S.state.lexical;
				if (i.info == "call") i.pos = (i.pos || 0) + 1;
				return T(e, n)
			}
			if (r == t) return T();
			return T(M(t))
		}
		return function (r) {
			if (r == t) return T();
			return x(e, n)
		}
	}

	function Q(e, t, n) {
		for (var r = 3; r < arguments.length; r++) S.cc.push(arguments[r]);
		return T(A(t, n), K(e, t), O)
	}

	function G(e) {
		if (e == "}") return T();
		return x(_, G)
	}

	function Y(e) {
		if (s && e == ":") return T(Z)
	}

	function Z(e) {
		if (e == "variable") {
			S.marked = "variable-3";
			return T()
		}
	}

	function et() {
		return x(tt, Y, rt, it)
	}

	function tt(e, t) {
		if (e == "variable") {
			N(t);
			return T()
		}
		if (e == "[") return Q(tt, "]");
		if (e == "{") return Q(nt, "}")
	}

	function nt(e, t) {
		if (e == "variable" && !S.stream.match(/^\s*:/, false)) {
			N(t);
			return T(rt)
		}
		if (e == "variable") S.marked = "property";
		return T(M(":"), tt, rt)
	}

	function rt(e, t) {
		if (t == "=") return T(P)
	}

	function it(e) {
		if (e == ",") return T(et)
	}

	function st(e, t) {
		if (e == "keyword b" && t == "else") return T(A("form"), _, O)
	}

	function ot(e) {
		if (e == "(") return T(A(")"), ut, M(")"), O)
	}

	function ut(e) {
		if (e == "var") return T(et, M(";"), ft);
		if (e == ";") return T(ft);
		if (e == "variable") return T(at);
		return x(D, M(";"), ft)
	}

	function at(e, t) {
		if (t == "in" || t == "of") {
			S.marked = "keyword";
			return T(D)
		}
		return T(F, ft)
	}

	function ft(e, t) {
		if (e == ";") return T(lt);
		if (t == "in" || t == "of") {
			S.marked = "keyword";
			return T(D)
		}
		return x(D, M(";"), lt)
	}

	function lt(e) {
		if (e != ")") T(D)
	}

	function ct(e, t) {
		if (t == "*") {
			S.marked = "keyword";
			return T(ct)
		}
		if (e == "variable") {
			N(t);
			return T(ct)
		}
		if (e == "(") return T(k, A(")"), K(ht, ")"), O, _, L)
	}

	function ht(e) {
		if (e == "spread") return T(ht);
		return x(tt, Y)
	}

	function pt(e, t) {
		if (e == "variable") {
			N(t);
			return T(dt)
		}
	}

	function dt(e, t) {
		if (t == "extends") return T(D)
	}

	function vt(e) {
		if (e == "{") return Q(V, "}")
	}

	function mt(e, t) {
		if (e == "string") return T(_);
		if (e == "variable") {
			N(t);
			return T(wt)
		}
	}

	function gt(e, t) {
		if (t == "*") {
			S.marked = "keyword";
			return T(wt, M(";"))
		}
		if (t == "default") {
			S.marked = "keyword";
			return T(D, M(";"))
		}
		return x(_)
	}

	function yt(e) {
		if (e == "string") return T();
		return x(bt, wt)
	}

	function bt(e, t) {
		if (e == "{") return Q(bt, "}");
		if (e == "variable") N(t);
		return T()
	}

	function wt(e, t) {
		if (t == "from") {
			S.marked = "keyword";
			return T(D)
		}
	}

	function Et(e) {
		if (e == "]") return T();
		return x(P, St)
	}

	function St(e) {
		if (e == "for") return x(xt, M("]"));
		if (e == ",") return T(K(P, "]"));
		return x(K(P, "]"))
	}

	function xt(e) {
		if (e == "for") return T(ot, xt);
		if (e == "if") return T(D, xt)
	}
	var n = e.indentUnit;
	var r = t.statementIndent;
	var i = t.json;
	var s = t.typescript;
	var o = function () {
		function e(e) {
			return {
				type: e,
				style: "keyword"
			}
		}
		var t = e("keyword a"),
			n = e("keyword b"),
			r = e("keyword c");
		var i = e("operator"),
			o = {
				type: "atom",
				style: "atom"
			};
		var u = {
			"if": e("if"),
			"while": t,
			"with": t,
			"else": n,
			"do": n,
			"try": n,
			"finally": n,
			"return": r,
			"break": r,
			"continue": r,
			"new": r,
			"delete": r,
			"throw": r,
			"debugger": r,
			"var": e("var"),
			"const": e("var"),
			let: e("var"),
			"function": e("function"),
			"catch": e("catch"),
			"for": e("for"),
			"switch": e("switch"),
			"case": e("case"),
			"default": e("default"),
			"in": i,
			"typeof": i,
			"instanceof": i,
			"true": o,
			"false": o,
			"null": o,
			"undefined": o,
			NaN: o,
			Infinity: o,
			"this": e("this"),
			module: e("module"),
			"class": e("class"),
			"super": e("atom"),
			yield: r,
			"export": e("export"),
			"import": e("import"),
			"extends": r
		};
		if (s) {
			var a = {
				type: "variable",
				style: "variable-3"
			};
			var f = {
				"interface": e("interface"),
				"extends": e("extends"),
				constructor: e("constructor"),
				"public": e("public"),
				"private": e("private"),
				"protected": e("protected"),
				"static": e("static"),
				string: a,
				number: a,
				bool: a,
				any: a
			};
			for (var l in f) {
				u[l] = f[l]
			}
		}
		return u
	}();
	var u = /[+\-*&%=<>!?|~^]/;
	var f, l;
	var m = "([{}])";
	var y = {
		atom: true,
		number: true,
		variable: true,
		string: true,
		regexp: true,
		"this": true
	};
	var S = {
		state: null,
		column: null,
		marked: null,
		cc: null
	};
	var C = {
		name: "this",
		next: {
			name: "arguments"
		}
	};
	O.lex = true;
	return {
		startState: function (e) {
			var r = {
				tokenize: h,
				lastType: "sof",
				cc: [],
				lexical: new b((e || 0) - n, 0, "block", false),
				localVars: t.localVars,
				context: t.localVars && {
					vars: t.localVars
				},
				indented: 0
			};
			if (t.globalVars) r.globalVars = t.globalVars;
			return r
		},
		token: function (e, t) {
			if (e.sol()) {
				if (!t.lexical.hasOwnProperty("align")) t.lexical.align = false;
				t.indented = e.indentation();
				g(e, t)
			}
			if (t.tokenize != d && e.eatSpace()) return null;
			var n = t.tokenize(e, t);
			if (f == "comment") return n;
			t.lastType = f == "operator" && (l == "++" || l == "--") ? "incdec" : f;
			return E(t, n, f, l, e)
		},
		indent: function (e, i) {
			if (e.tokenize == d) return CodeMirror.Pass;
			if (e.tokenize != h) return 0;
			var s = i && i.charAt(0),
				o = e.lexical;
			for (var u = e.cc.length - 1; u >= 0; --u) {
				var a = e.cc[u];
				if (a == O) o = o.prev;
				else if (a != st) break
			}
			if (o.type == "stat" && s == "}") o = o.prev;
			if (r && o.type == ")" && o.prev.type == "stat") o = o.prev;
			var f = o.type,
				l = s == f;
			if (f == "vardef") return o.indented + (e.lastType == "operator" || e.lastType == "," ? o.info + 1 : 0);
			else if (f == "form" && s == "{") return o.indented;
			else if (f == "form") return o.indented + n;
			else if (f == "stat") return o.indented + (e.lastType == "operator" || e.lastType == "," ? r || n : 0);
			else if (o.info == "switch" && !l && t.doubleIndentSwitch != false) return o.indented + (/^(?:case|default)\b/.test(i) ? n : 2 * n);
			else if (o.align) return o.column + (l ? 0 : 1);
			else return o.indented + (l ? 0 : n)
		},
		electricChars: ":{}",
		blockCommentStart: i ? null : "/*",
		blockCommentEnd: i ? null : "*/",
		lineComment: i ? null : "//",
		fold: "brace",
		helperType: i ? "json" : "javascript",
		jsonMode: i
	}
});
CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {
	name: "javascript",
	json: true
});
CodeMirror.defineMIME("application/x-json", {
	name: "javascript",
	json: true
});
CodeMirror.defineMIME("text/typescript", {
	name: "javascript",
	typescript: true
});
CodeMirror.defineMIME("application/typescript", {
	name: "javascript",
	typescript: true
});

// CSS for Codemirror
(function (e) {
	if (typeof exports == "object" && typeof module == "object") e(require("../../lib/codemirror"));
	else if (typeof define == "function" && define.amd) define(["../../lib/codemirror"], e);
	else e(CodeMirror)
})(function (e) {
	"use strict";

	function t(e) {
		var t = {};
		for (var n = 0; n < e.length; ++n) {
			t[e[n]] = true
		}
		return t
	}

	function m(e, t) {
		var n = false,
			r;
		while ((r = e.next()) != null) {
			if (n && r == "/") {
				t.tokenize = null;
				break
			}
			n = r == "*"
		}
		return ["comment", "comment"]
	}

	function g(e, t) {
		if (e.skipTo("-->")) {
			e.match("-->");
			t.tokenize = null
		} else {
			e.skipToEnd()
		}
		return ["comment", "comment"]
	}
	e.defineMode("css", function (t, n) {
		function v(e, t) {
			p = t;
			return e
		}

		function m(e, t) {
			var n = e.next();
			if (i[n]) {
				var r = i[n](e, t);
				if (r !== false) return r
			}
			if (n == "@") {
				e.eatWhile(/[\w\\\-]/);
				return v("def", e.current())
			} else if (n == "=" || (n == "~" || n == "|") && e.eat("=")) {
				return v(null, "compare")
			} else if (n == '"' || n == "'") {
				t.tokenize = g(n);
				return t.tokenize(e, t)
			} else if (n == "#") {
				e.eatWhile(/[\w\\\-]/);
				return v("atom", "hash")
			} else if (n == "!") {
				e.match(/^\s*\w*/);
				return v("keyword", "important")
			} else if (/\d/.test(n) || n == "." && e.eat(/\d/)) {
				e.eatWhile(/[\w.%]/);
				return v("number", "unit")
			} else if (n === "-") {
				if (/[\d.]/.test(e.peek())) {
					e.eatWhile(/[\w.%]/);
					return v("number", "unit")
				} else if (e.match(/^\w+-/)) {
					return v("meta", "meta")
				}
			} else if (/[,+>*\/]/.test(n)) {
				return v(null, "select-op")
			} else if (n == "." && e.match(/^-?[_a-z][_a-z0-9-]*/i)) {
				return v("qualifier", "qualifier")
			} else if (/[:;{}\[\]\(\)]/.test(n)) {
				return v(null, n)
			} else if (n == "u" && e.match("rl(")) {
				e.backUp(1);
				t.tokenize = y;
				return v("property", "word")
			} else if (/[\w\\\-]/.test(n)) {
				e.eatWhile(/[\w\\\-]/);
				return v("property", "word")
			} else {
				return v(null, null)
			}
		}

		function g(e) {
			return function (t, n) {
				var r = false,
					i;
				while ((i = t.next()) != null) {
					if (i == e && !r) {
						if (e == ")") t.backUp(1);
						break
					}
					r = !r && i == "\\"
				}
				if (i == e || !r && e != ")") n.tokenize = null;
				return v("string", "string")
			}
		}

		function y(e, t) {
			e.next();
			if (!e.match(/\s*[\"\')]/, false)) t.tokenize = g(")");
			else t.tokenize = null;
			return v(null, "(")
		}

		function b(e, t, n) {
			this.type = e;
			this.indent = t;
			this.prev = n
		}

		function w(e, t, n) {
			e.context = new b(n, t.indentation() + r, e.context);
			return n
		}

		function E(e) {
			e.context = e.context.prev;
			return e.context.type
		}

		function S(e, t, n) {
			return N[n.context.type](e, t, n)
		}

		function x(e, t, n, r) {
			for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
			return S(e, t, n)
		}

		function T(e) {
			var t = e.current().toLowerCase();
			if (l.hasOwnProperty(t)) d = "atom";
			else if (f.hasOwnProperty(t)) d = "keyword";
			else d = "variable"
		}
		if (!n.propertyKeywords) n = e.resolveMode("text/css");
		var r = t.indentUnit,
			i = n.tokenHooks,
			s = n.mediaTypes || {},
			o = n.mediaFeatures || {},
			u = n.propertyKeywords || {},
			a = n.nonStandardPropertyKeywords || {},
			f = n.colorKeywords || {},
			l = n.valueKeywords || {},
			c = n.fontProperties || {},
			h = n.allowNested;
		var p, d;
		var N = {};
		N.top = function (e, t, n) {
			if (e == "{") {
				return w(n, t, "block")
			} else if (e == "}" && n.context.prev) {
				return E(n)
			} else if (e == "@media") {
				return w(n, t, "media")
			} else if (e == "@font-face") {
				return "font_face_before"
			} else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) {
				return "keyframes"
			} else if (e && e.charAt(0) == "@") {
				return w(n, t, "at")
			} else if (e == "hash") {
				d = "builtin"
			} else if (e == "word") {
				d = "tag"
			} else if (e == "variable-definition") {
				return "maybeprop"
			} else if (e == "interpolation") {
				return w(n, t, "interpolation")
			} else if (e == ":") {
				return "pseudo"
			} else if (h && e == "(") {
				return w(n, t, "parens")
			}
			return n.context.type
		};
		N.block = function (e, t, n) {
			if (e == "word") {
				var r = t.current().toLowerCase();
				if (u.hasOwnProperty(r)) {
					d = "property";
					return "maybeprop"
				} else if (a.hasOwnProperty(r)) {
					d = "string-2";
					return "maybeprop"
				} else if (h) {
					d = t.match(/^\s*:/, false) ? "property" : "tag";
					return "block"
				} else {
					d += " error";
					return "maybeprop"
				}
			} else if (e == "meta") {
				return "block"
			} else if (!h && (e == "hash" || e == "qualifier")) {
				d = "error";
				return "block"
			} else {
				return N.top(e, t, n)
			}
		};
		N.maybeprop = function (e, t, n) {
			if (e == ":") return w(n, t, "prop");
			return S(e, t, n)
		};
		N.prop = function (e, t, n) {
			if (e == ";") return E(n);
			if (e == "{" && h) return w(n, t, "propBlock");
			if (e == "}" || e == "{") return x(e, t, n);
			if (e == "(") return w(n, t, "parens");
			if (e == "hash" && !/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t.current())) {
				d += " error"
			} else if (e == "word") {
				T(t)
			} else if (e == "interpolation") {
				return w(n, t, "interpolation")
			}
			return "prop"
		};
		N.propBlock = function (e, t, n) {
			if (e == "}") return E(n);
			if (e == "word") {
				d = "property";
				return "maybeprop"
			}
			return n.context.type
		};
		N.parens = function (e, t, n) {
			if (e == "{" || e == "}") return x(e, t, n);
			if (e == ")") return E(n);
			if (e == "(") return w(n, t, "parens");
			if (e == "word") T(t);
			return "parens"
		};
		N.pseudo = function (e, t, n) {
			if (e == "word") {
				d = "variable-3";
				return n.context.type
			}
			return S(e, t, n)
		};
		N.media = function (e, t, n) {
			if (e == "(") return w(n, t, "media_parens");
			if (e == "}") return x(e, t, n);
			if (e == "{") return E(n) && w(n, t, h ? "block" : "top");
			if (e == "word") {
				var r = t.current().toLowerCase();
				if (r == "only" || r == "not" || r == "and") d = "keyword";
				else if (s.hasOwnProperty(r)) d = "attribute";
				else if (o.hasOwnProperty(r)) d = "property";
				else d = "error"
			}
			return n.context.type
		};
		N.media_parens = function (e, t, n) {
			if (e == ")") return E(n);
			if (e == "{" || e == "}") return x(e, t, n, 2);
			return N.media(e, t, n)
		};
		N.font_face_before = function (e, t, n) {
			if (e == "{") return w(n, t, "font_face");
			return S(e, t, n)
		};
		N.font_face = function (e, t, n) {
			if (e == "}") return E(n);
			if (e == "word") {
				if (!c.hasOwnProperty(t.current().toLowerCase())) d = "error";
				else d = "property";
				return "maybeprop"
			}
			return "font_face"
		};
		N.keyframes = function (e, t, n) {
			if (e == "word") {
				d = "variable";
				return "keyframes"
			}
			if (e == "{") return w(n, t, "top");
			return S(e, t, n)
		};
		N.at = function (e, t, n) {
			if (e == ";") return E(n);
			if (e == "{" || e == "}") return x(e, t, n);
			if (e == "word") d = "tag";
			else if (e == "hash") d = "builtin";
			return "at"
		};
		N.interpolation = function (e, t, n) {
			if (e == "}") return E(n);
			if (e == "{" || e == ";") return x(e, t, n);
			if (e != "variable") d = "error";
			return "interpolation"
		};
		return {
			startState: function (e) {
				return {
					tokenize: null,
					state: "top",
					context: new b("top", e || 0, null)
				}
			},
			token: function (e, t) {
				if (!t.tokenize && e.eatSpace()) return null;
				var n = (t.tokenize || m)(e, t);
				if (n && typeof n == "object") {
					p = n[1];
					n = n[0]
				}
				d = n;
				t.state = N[t.state](p, e, t);
				return d
			},
			indent: function (e, t) {
				var n = e.context,
					i = t && t.charAt(0);
				var s = n.indent;
				if (n.type == "prop" && (i == "}" || i == ")")) n = n.prev;
				if (n.prev && (i == "}" && (n.type == "block" || n.type == "top" || n.type == "interpolation" || n.type == "font_face") || i == ")" && (n.type == "parens" || n.type == "media_parens") || i == "{" && (n.type == "at" || n.type == "media"))) {
					s = n.indent - r;
					n = n.prev
				}
				return s
			},
			electricChars: "}",
			blockCommentStart: "/*",
			blockCommentEnd: "*/",
			fold: "brace"
		}
	});
	var n = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
		r = t(n);
	var i = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"],
		s = t(i);
	var o = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
		u = t(o);
	var a = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
		a = t(a);
	var f = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
		l = t(f);
	var c = ["above", "absolute", "activeborder", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "single", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "x-large", "x-small", "xor", "xx-large", "xx-small"],
		h = t(c);
	var p = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
		d = t(p);
	var v = n.concat(i).concat(o).concat(a).concat(f).concat(c);
	e.registerHelper("hintWords", "css", v);
	e.defineMIME("text/css", {
		mediaTypes: r,
		mediaFeatures: s,
		propertyKeywords: u,
		nonStandardPropertyKeywords: a,
		colorKeywords: l,
		valueKeywords: h,
		fontProperties: d,
		tokenHooks: {
			"<": function (e, t) {
				if (!e.match("!--")) return false;
				t.tokenize = g;
				return g(e, t)
			},
			"/": function (e, t) {
				if (!e.eat("*")) return false;
				t.tokenize = m;
				return m(e, t)
			}
		},
		name: "css"
	});
	e.defineMIME("text/x-scss", {
		mediaTypes: r,
		mediaFeatures: s,
		propertyKeywords: u,
		nonStandardPropertyKeywords: a,
		colorKeywords: l,
		valueKeywords: h,
		fontProperties: d,
		allowNested: true,
		tokenHooks: {
			"/": function (e, t) {
				if (e.eat("/")) {
					e.skipToEnd();
					return ["comment", "comment"]
				} else if (e.eat("*")) {
					t.tokenize = m;
					return m(e, t)
				} else {
					return ["operator", "operator"]
				}
			},
			":": function (e) {
				if (e.match(/\s*{/)) return [null, "{"];
				return false
			},
			$: function (e) {
				e.match(/^[\w-]+/);
				if (e.match(/^\s*:/, false)) return ["variable-2", "variable-definition"];
				return ["variable-2", "variable"]
			},
			"#": function (e) {
				if (!e.eat("{")) return false;
				return [null, "interpolation"]
			}
		},
		name: "css",
		helperType: "scss"
	});
	e.defineMIME("text/x-less", {
		mediaTypes: r,
		mediaFeatures: s,
		propertyKeywords: u,
		nonStandardPropertyKeywords: a,
		colorKeywords: l,
		valueKeywords: h,
		fontProperties: d,
		allowNested: true,
		tokenHooks: {
			"/": function (e, t) {
				if (e.eat("/")) {
					e.skipToEnd();
					return ["comment", "comment"]
				} else if (e.eat("*")) {
					t.tokenize = m;
					return m(e, t)
				} else {
					return ["operator", "operator"]
				}
			},
			"@": function (e) {
				if (e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
				e.eatWhile(/[\w\\\-]/);
				if (e.match(/^\s*:/, false)) return ["variable-2", "variable-definition"];
				return ["variable-2", "variable"]
			},
			"&": function () {
				return ["atom", "atom"]
			}
		},
		name: "css",
		helperType: "less"
	})
});

// XML for Codemirror
(function (e) {
	if (typeof exports == "object" && typeof module == "object") e(require("../../lib/codemirror"));
	else if (typeof define == "function" && define.amd) define(["../../lib/codemirror"], e);
	else e(CodeMirror)
})(function (e) {
	"use strict";
	e.defineMode("xml", function (t, n) {
		function l(e, t) {
			function n(n) {
				t.tokenize = n;
				return n(e, t)
			}
			var r = e.next();
			if (r == "<") {
				if (e.eat("!")) {
					if (e.eat("[")) {
						if (e.match("CDATA[")) return n(p("atom", "]]>"));
						else return null
					} else if (e.match("--")) {
						return n(p("comment", "-->"))
					} else if (e.match("DOCTYPE", true, true)) {
						e.eatWhile(/[\w\._\-]/);
						return n(d(1))
					} else {
						return null
					}
				} else if (e.eat("?")) {
					e.eatWhile(/[\w\._\-]/);
					t.tokenize = p("meta", "?>");
					return "meta"
				} else {
					a = e.eat("/") ? "closeTag" : "openTag";
					t.tokenize = c;
					return "tag bracket"
				}
			} else if (r == "&") {
				var i;
				if (e.eat("#")) {
					if (e.eat("x")) {
						i = e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
					} else {
						i = e.eatWhile(/[\d]/) && e.eat(";")
					}
				} else {
					i = e.eatWhile(/[\w\.\-:]/) && e.eat(";")
				}
				return i ? "atom" : "error"
			} else {
				e.eatWhile(/[^&<]/);
				return null
			}
		}

		function c(e, t) {
			var n = e.next();
			if (n == ">" || n == "/" && e.eat(">")) {
				t.tokenize = l;
				a = n == ">" ? "endTag" : "selfcloseTag";
				return "tag bracket"
			} else if (n == "=") {
				a = "equals";
				return null
			} else if (n == "<") {
				t.tokenize = l;
				t.state = y;
				t.tagName = t.tagStart = null;
				var r = t.tokenize(e, t);
				return r ? r + " tag error" : "tag error"
			} else if (/[\'\"]/.test(n)) {
				t.tokenize = h(n);
				t.stringStartCol = e.column();
				return t.tokenize(e, t)
			} else {
				e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
				return "word"
			}
		}

		function h(e) {
			var t = function (t, n) {
				while (!t.eol()) {
					if (t.next() == e) {
						n.tokenize = c;
						break
					}
				}
				return "string"
			};
			t.isInAttribute = true;
			return t
		}

		function p(e, t) {
			return function (n, r) {
				while (!n.eol()) {
					if (n.match(t)) {
						r.tokenize = l;
						break
					}
					n.next()
				}
				return e
			}
		}

		function d(e) {
			return function (t, n) {
				var r;
				while ((r = t.next()) != null) {
					if (r == "<") {
						n.tokenize = d(e + 1);
						return n.tokenize(t, n)
					} else if (r == ">") {
						if (e == 1) {
							n.tokenize = l;
							break
						} else {
							n.tokenize = d(e - 1);
							return n.tokenize(t, n)
						}
					}
				}
				return "meta"
			}
		}

		function v(e, t, n) {
			this.prev = e.context;
			this.tagName = t;
			this.indent = e.indented;
			this.startOfLine = n;
			if (o.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) this.noIndent = true
		}

		function m(e) {
			if (e.context) e.context = e.context.prev
		}

		function g(e, t) {
			var n;
			while (true) {
				if (!e.context) {
					return
				}
				n = e.context.tagName;
				if (!o.contextGrabbers.hasOwnProperty(n) || !o.contextGrabbers[n].hasOwnProperty(t)) {
					return
				}
				m(e)
			}
		}

		function y(e, t, n) {
			if (e == "openTag") {
				n.tagStart = t.column();
				return b
			} else if (e == "closeTag") {
				return w
			} else {
				return y
			}
		}

		function b(e, t, n) {
			if (e == "word") {
				n.tagName = t.current();
				f = "tag";
				return x
			} else {
				f = "error";
				return b
			}
		}

		function w(e, t, n) {
			if (e == "word") {
				var r = t.current();
				if (n.context && n.context.tagName != r && o.implicitlyClosed.hasOwnProperty(n.context.tagName)) m(n);
				if (n.context && n.context.tagName == r) {
					f = "tag";
					return E
				} else {
					f = "tag error";
					return S
				}
			} else {
				f = "error";
				return S
			}
		}

		function E(e, t, n) {
			if (e != "endTag") {
				f = "error";
				return E
			}
			m(n);
			return y
		}

		function S(e, t, n) {
			f = "error";
			return E(e, t, n)
		}

		function x(e, t, n) {
			if (e == "word") {
				f = "attribute";
				return T
			} else if (e == "endTag" || e == "selfcloseTag") {
				var r = n.tagName,
					i = n.tagStart;
				n.tagName = n.tagStart = null;
				if (e == "selfcloseTag" || o.autoSelfClosers.hasOwnProperty(r)) {
					g(n, r)
				} else {
					g(n, r);
					n.context = new v(n, r, i == n.indented)
				}
				return y
			}
			f = "error";
			return x
		}

		function T(e, t, n) {
			if (e == "equals") return N;
			if (!o.allowMissing) f = "error";
			return x(e, t, n)
		}

		function N(e, t, n) {
			if (e == "string") return C;
			if (e == "word" && o.allowUnquoted) {
				f = "string";
				return x
			}
			f = "error";
			return x(e, t, n)
		}

		function C(e, t, n) {
			if (e == "string") return C;
			return x(e, t, n)
		}
		var r = t.indentUnit;
		var i = n.multilineTagIndentFactor || 1;
		var s = n.multilineTagIndentPastTag;
		if (s == null) s = true;
		var o = n.htmlMode ? {
			autoSelfClosers: {
				area: true,
				base: true,
				br: true,
				col: true,
				command: true,
				embed: true,
				frame: true,
				hr: true,
				img: true,
				input: true,
				keygen: true,
				link: true,
				meta: true,
				param: true,
				source: true,
				track: true,
				wbr: true
			},
			implicitlyClosed: {
				dd: true,
				li: true,
				optgroup: true,
				option: true,
				p: true,
				rp: true,
				rt: true,
				tbody: true,
				td: true,
				tfoot: true,
				th: true,
				tr: true
			},
			contextGrabbers: {
				dd: {
					dd: true,
					dt: true
				},
				dt: {
					dd: true,
					dt: true
				},
				li: {
					li: true
				},
				option: {
					option: true,
					optgroup: true
				},
				optgroup: {
					optgroup: true
				},
				p: {
					address: true,
					article: true,
					aside: true,
					blockquote: true,
					dir: true,
					div: true,
					dl: true,
					fieldset: true,
					footer: true,
					form: true,
					h1: true,
					h2: true,
					h3: true,
					h4: true,
					h5: true,
					h6: true,
					header: true,
					hgroup: true,
					hr: true,
					menu: true,
					nav: true,
					ol: true,
					p: true,
					pre: true,
					section: true,
					table: true,
					ul: true
				},
				rp: {
					rp: true,
					rt: true
				},
				rt: {
					rp: true,
					rt: true
				},
				tbody: {
					tbody: true,
					tfoot: true
				},
				td: {
					td: true,
					th: true
				},
				tfoot: {
					tbody: true
				},
				th: {
					td: true,
					th: true
				},
				thead: {
					tbody: true,
					tfoot: true
				},
				tr: {
					tr: true
				}
			},
			doNotIndent: {
				pre: true
			},
			allowUnquoted: true,
			allowMissing: true,
			caseFold: true
		} : {
			autoSelfClosers: {},
			implicitlyClosed: {},
			contextGrabbers: {},
			doNotIndent: {},
			allowUnquoted: false,
			allowMissing: false,
			caseFold: false
		};
		var u = n.alignCDATA;
		var a, f;
		return {
			startState: function () {
				return {
					tokenize: l,
					state: y,
					indented: 0,
					tagName: null,
					tagStart: null,
					context: null
				}
			},
			token: function (e, t) {
				if (!t.tagName && e.sol()) t.indented = e.indentation();
				if (e.eatSpace()) return null;
				a = null;
				var n = t.tokenize(e, t);
				if ((n || a) && n != "comment") {
					f = null;
					t.state = t.state(a || n, e, t);
					if (f) n = f == "error" ? n + " error" : f
				}
				return n
			},
			indent: function (t, n, a) {
				var f = t.context;
				if (t.tokenize.isInAttribute) {
					if (t.tagStart == t.indented) return t.stringStartCol + 1;
					else return t.indented + r
				}
				if (f && f.noIndent) return e.Pass;
				if (t.tokenize != c && t.tokenize != l) return a ? a.match(/^(\s*)/)[0].length : 0;
				if (t.tagName) {
					if (s) return t.tagStart + t.tagName.length + 2;
					else return t.tagStart + r * i
				}
				if (u && /<!\[CDATA\[/.test(n)) return 0;
				var h = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
				if (h && h[1]) {
					while (f) {
						if (f.tagName == h[2]) {
							f = f.prev;
							break
						} else if (o.implicitlyClosed.hasOwnProperty(f.tagName)) {
							f = f.prev
						} else {
							break
						}
					}
				} else if (h) {
					while (f) {
						var p = o.contextGrabbers[f.tagName];
						if (p && p.hasOwnProperty(h[2])) f = f.prev;
						else break
					}
				}
				while (f && !f.startOfLine) f = f.prev;
				if (f) return f.indent + r;
				else return 0
			},
			electricInput: /<\/[\s\w:]+>$/,
			blockCommentStart: "<!--",
			blockCommentEnd: "-->",
			configuration: n.htmlMode ? "html" : "xml",
			helperType: n.htmlMode ? "html" : "xml"
		}
	});
	e.defineMIME("text/xml", "xml");
	e.defineMIME("application/xml", "xml");
	if (!e.mimeModes.hasOwnProperty("text/html")) e.defineMIME("text/html", {
		name: "xml",
		htmlMode: true
	})
});

// HTML mixed for Codemirror
(function (e) {
	if (typeof exports == "object" && typeof module == "object") e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
	else if (typeof define == "function" && define.amd) define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], e);
	else e(CodeMirror)
})(function (e) {
	"use strict";
	e.defineMode("htmlmixed", function (t, n) {
		function f(e, t) {
			var n = t.htmlState.tagName;
			var o = r.token(e, t.htmlState);
			if (n == "script" && /\btag\b/.test(o) && e.current() == ">") {
				var u = e.string.slice(Math.max(0, e.pos - 100), e.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i);
				u = u ? u[1] : "";
				if (u && /[\"\']/.test(u.charAt(0))) u = u.slice(1, u.length - 1);
				for (var a = 0; a < s.length; ++a) {
					var f = s[a];
					if (typeof f.matches == "string" ? u == f.matches : f.matches.test(u)) {
						if (f.mode) {
							t.token = c;
							t.localMode = f.mode;
							t.localState = f.mode.startState && f.mode.startState(r.indent(t.htmlState, ""))
						}
						break
					}
				}
			} else if (n == "style" && /\btag\b/.test(o) && e.current() == ">") {
				t.token = h;
				t.localMode = i;
				t.localState = i.startState(r.indent(t.htmlState, ""))
			}
			return o
		}

		function l(e, t, n) {
			var r = e.current();
			var i = r.search(t),
				s;
			if (i > -1) e.backUp(r.length - i);
			else if (s = r.match(/<\/?$/)) {
				e.backUp(r.length);
				if (!e.match(t, false)) e.match(r)
			}
			return n
		}

		function c(e, t) {
			if (e.match(/^<\/\s*script\s*>/i, false)) {
				t.token = f;
				t.localState = t.localMode = null;
				return f(e, t)
			}
			return l(e, /<\/\s*script\s*>/, t.localMode.token(e, t.localState))
		}

		function h(e, t) {
			if (e.match(/^<\/\s*style\s*>/i, false)) {
				t.token = f;
				t.localState = t.localMode = null;
				return f(e, t)
			}
			return l(e, /<\/\s*style\s*>/, i.token(e, t.localState))
		}
		var r = e.getMode(t, {
			name: "xml",
			htmlMode: true,
			multilineTagIndentFactor: n.multilineTagIndentFactor,
			multilineTagIndentPastTag: n.multilineTagIndentPastTag
		});
		var i = e.getMode(t, "css");
		var s = [],
			o = n && n.scriptTypes;
		s.push({
			matches: /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,
			mode: e.getMode(t, "javascript")
		});
		if (o)
			for (var u = 0; u < o.length; ++u) {
				var a = o[u];
				s.push({
					matches: a.matches,
					mode: a.mode && e.getMode(t, a.mode)
				})
			}
		s.push({
			matches: /./,
			mode: e.getMode(t, "text/plain")
		});
		return {
			startState: function () {
				var e = r.startState();
				return {
					token: f,
					localMode: null,
					localState: null,
					htmlState: e
				}
			},
			copyState: function (t) {
				if (t.localState) var n = e.copyState(t.localMode, t.localState);
				return {
					token: t.token,
					localMode: t.localMode,
					localState: n,
					htmlState: e.copyState(r, t.htmlState)
				}
			},
			token: function (e, t) {
				return t.token(e, t)
			},
			indent: function (t, n) {
				if (!t.localMode || /^\s*<\//.test(n)) return r.indent(t.htmlState, n);
				else if (t.localMode.indent) return t.localMode.indent(t.localState, n);
				else return e.Pass
			},
			innerMode: function (e) {
				return {
					state: e.localState || e.htmlState,
					mode: e.localMode || r
				}
			}
		}
	}, "xml", "javascript", "css");
	e.defineMIME("text/html", "htmlmixed")
});

/**
 * jquery.Jcrop.min.js v0.9.12 (build:20130202)
 * jQuery Image Cropping Plugin - released under MIT License
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC
 * https://github.com/tapmodo/Jcrop
 */
(function (a) {
	a.Jcrop = function (b, c) {
		function i(a) {
			return Math.round(a) + "px"
		}

		function j(a) {
			return d.baseClass + "-" + a
		}

		function k() {
			return a.fx.step.hasOwnProperty("backgroundColor")
		}

		function l(b) {
			var c = a(b).offset();
			return [c.left, c.top]
		}

		function m(a) {
			return [a.pageX - e[0], a.pageY - e[1]]
		}

		function n(b) {
			typeof b != "object" && (b = {}), d = a.extend(d, b), a.each(["onChange", "onSelect", "onRelease", "onDblClick"], function (a, b) {
				typeof d[b] != "function" && (d[b] = function () {})
			})
		}

		function o(a, b, c) {
			e = l(D), bc.setCursor(a === "move" ? a : a + "-resize");
			if (a === "move") return bc.activateHandlers(q(b), v, c);
			var d = _.getFixed(),
				f = r(a),
				g = _.getCorner(r(f));
			_.setPressed(_.getCorner(f)), _.setCurrent(g), bc.activateHandlers(p(a, d), v, c)
		}

		function p(a, b) {
			return function (c) {
				if (!d.aspectRatio) switch (a) {
					case "e":
						c[1] = b.y2;
						break;
					case "w":
						c[1] = b.y2;
						break;
					case "n":
						c[0] = b.x2;
						break;
					case "s":
						c[0] = b.x2
				} else switch (a) {
					case "e":
						c[1] = b.y + 1;
						break;
					case "w":
						c[1] = b.y + 1;
						break;
					case "n":
						c[0] = b.x + 1;
						break;
					case "s":
						c[0] = b.x + 1
				}
				_.setCurrent(c), bb.update()
			}
		}

		function q(a) {
			var b = a;
			return bd.watchKeys(),
				function (a) {
					_.moveOffset([a[0] - b[0], a[1] - b[1]]), b = a, bb.update()
				}
		}

		function r(a) {
			switch (a) {
				case "n":
					return "sw";
				case "s":
					return "nw";
				case "e":
					return "nw";
				case "w":
					return "ne";
				case "ne":
					return "sw";
				case "nw":
					return "se";
				case "se":
					return "nw";
				case "sw":
					return "ne"
			}
		}

		function s(a) {
			return function (b) {
				return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(b)), b.stopPropagation(), b.preventDefault(), !1)
			}
		}

		function t(a, b, c) {
			var d = a.width(),
				e = a.height();
			d > b && b > 0 && (d = b, e = b / a.width() * a.height()), e > c && c > 0 && (e = c, d = c / a.height() * a.width()), T = a.width() / d, U = a.height() / e, a.width(d).height(e)
		}

		function u(a) {
			return {
				x: a.x * T,
				y: a.y * U,
				x2: a.x2 * T,
				y2: a.y2 * U,
				w: a.w * T,
				h: a.h * U
			}
		}

		function v(a) {
			var b = _.getFixed();
			b.w > d.minSelect[0] && b.h > d.minSelect[1] ? (bb.enableHandles(), bb.done()) : bb.release(), bc.setCursor(d.allowSelect ? "crosshair" : "default")
		}

		function w(a) {
			if (d.disabled) return !1;
			if (!d.allowSelect) return !1;
			W = !0, e = l(D), bb.disableHandles(), bc.setCursor("crosshair");
			var b = m(a);
			return _.setPressed(b), bb.update(), bc.activateHandlers(x, v, a.type.substring(0, 5) === "touch"), bd.watchKeys(), a.stopPropagation(), a.preventDefault(), !1
		}

		function x(a) {
			_.setCurrent(a), bb.update()
		}

		function y() {
			var b = a("<div></div>").addClass(j("tracker"));
			return g && b.css({
				opacity: 0,
				backgroundColor: "white"
			}), b
		}

		function be(a) {
			G.removeClass().addClass(j("holder")).addClass(a)
		}

		function bf(a, b) {
			function t() {
				window.setTimeout(u, l)
			}
			var c = a[0] / T,
				e = a[1] / U,
				f = a[2] / T,
				g = a[3] / U;
			if (X) return;
			var h = _.flipCoords(c, e, f, g),
				i = _.getFixed(),
				j = [i.x, i.y, i.x2, i.y2],
				k = j,
				l = d.animationDelay,
				m = h[0] - j[0],
				n = h[1] - j[1],
				o = h[2] - j[2],
				p = h[3] - j[3],
				q = 0,
				r = d.swingSpeed;
			c = k[0], e = k[1], f = k[2], g = k[3], bb.animMode(!0);
			var s, u = function () {
				return function () {
					q += (100 - q) / r, k[0] = Math.round(c + q / 100 * m), k[1] = Math.round(e + q / 100 * n), k[2] = Math.round(f + q / 100 * o), k[3] = Math.round(g + q / 100 * p), q >= 99.8 && (q = 100), q < 100 ? (bh(k), t()) : (bb.done(), bb.animMode(!1), typeof b == "function" && b.call(bs))
				}
			}();
			t()
		}

		function bg(a) {
			bh([a[0] / T, a[1] / U, a[2] / T, a[3] / U]), d.onSelect.call(bs, u(_.getFixed())), bb.enableHandles()
		}

		function bh(a) {
			_.setPressed([a[0], a[1]]), _.setCurrent([a[2],
				a[3]
			]), bb.update()
		}

		function bi() {
			return u(_.getFixed())
		}

		function bj() {
			return _.getFixed()
		}

		function bk(a) {
			n(a), br()
		}

		function bl() {
			d.disabled = !0, bb.disableHandles(), bb.setCursor("default"), bc.setCursor("default")
		}

		function bm() {
			d.disabled = !1, br()
		}

		function bn() {
			bb.done(), bc.activateHandlers(null, null)
		}

		function bo() {
			G.remove(), A.show(), A.css("visibility", "visible"), a(b).removeData("Jcrop")
		}

		function bp(a, b) {
			bb.release(), bl();
			var c = new Image;
			c.onload = function () {
				var e = c.width,
					f = c.height,
					g = d.boxWidth,
					h = d.boxHeight;
				D.width(e).height(f), D.attr("src", a), H.attr("src", a), t(D, g, h), E = D.width(), F = D.height(), H.width(E).height(F), M.width(E + L * 2).height(F + L * 2), G.width(E).height(F), ba.resize(E, F), bm(), typeof b == "function" && b.call(bs)
			}, c.src = a
		}

		function bq(a, b, c) {
			var e = b || d.bgColor;
			d.bgFade && k() && d.fadeTime && !c ? a.animate({
				backgroundColor: e
			}, {
				queue: !1,
				duration: d.fadeTime
			}) : a.css("backgroundColor", e)
		}

		function br(a) {
			d.allowResize ? a ? bb.enableOnly() : bb.enableHandles() : bb.disableHandles(), bc.setCursor(d.allowSelect ? "crosshair" : "default"), bb
				.setCursor(d.allowMove ? "move" : "default"), d.hasOwnProperty("trueSize") && (T = d.trueSize[0] / E, U = d.trueSize[1] / F), d.hasOwnProperty("setSelect") && (bg(d.setSelect), bb.done(), delete d.setSelect), ba.refresh(), d.bgColor != N && (bq(d.shade ? ba.getShades() : G, d.shade ? d.shadeColor || d.bgColor : d.bgColor), N = d.bgColor), O != d.bgOpacity && (O = d.bgOpacity, d.shade ? ba.refresh() : bb.setBgOpacity(O)), P = d.maxSize[0] || 0, Q = d.maxSize[1] || 0, R = d.minSize[0] || 0, S = d.minSize[1] || 0, d.hasOwnProperty("outerImage") && (D.attr("src", d.outerImage), delete d.outerImage), bb.refresh()
		}
		var d = a.extend({}, a.Jcrop.defaults),
			e, f = navigator.userAgent.toLowerCase(),
			g = /msie/.test(f),
			h = /msie [1-6]\./.test(f);
		typeof b != "object" && (b = a(b)[0]), typeof c != "object" && (c = {}), n(c);
		var z = {
				border: "none",
				visibility: "visible",
				margin: 0,
				padding: 0,
				position: "absolute",
				top: 0,
				left: 0
			},
			A = a(b),
			B = !0;
		if (b.tagName == "IMG") {
			if (A[0].width != 0 && A[0].height != 0) A.width(A[0].width), A.height(A[0].height);
			else {
				var C = new Image;
				C.src = A[0].src, A.width(C.width), A.height(C.height)
			}
			var D = A.clone().removeAttr("id").
			css(z).show();
			D.width(A.width()), D.height(A.height()), A.after(D).hide()
		} else D = A.css(z).show(), B = !1, d.shade === null && (d.shade = !0);
		t(D, d.boxWidth, d.boxHeight);
		var E = D.width(),
			F = D.height(),
			G = a("<div />").width(E).height(F).addClass(j("holder")).css({
				position: "relative",
				backgroundColor: d.bgColor
			}).insertAfter(A).append(D);
		d.addClass && G.addClass(d.addClass);
		var H = a("<div />"),
			I = a("<div />").width("100%").height("100%").css({
				zIndex: 310,
				position: "absolute",
				overflow: "hidden"
			}),
			J = a("<div />").width("100%").height("100%").css("zIndex", 320),
			K = a("<div />").css({
				position: "absolute",
				zIndex: 600
			}).dblclick(function () {
				var a = _.getFixed();
				d.onDblClick.call(bs, a)
			}).insertBefore(D).append(I, J);
		B && (H = a("<img />").attr("src", D.attr("src")).css(z).width(E).height(F), I.append(H)), h && K.css({
			overflowY: "hidden"
		});
		var L = d.boundary,
			M = y().width(E + L * 2).height(F + L * 2).css({
				position: "absolute",
				top: i(-L),
				left: i(-L),
				zIndex: 290
			}).mousedown(w),
			N = d.bgColor,
			O = d.bgOpacity,
			P, Q, R, S, T, U, V = !0,
			W, X, Y;
		e = l(D);
		var Z = function () {
				function a() {
					var a = {},
						b = ["touchstart", "touchmove", "touchend"],
						c = document.createElement("div"),
						d;
					try {
						for (d = 0; d < b.length; d++) {
							var e = b[d];
							e = "on" + e;
							var f = e in c;
							f || (c.setAttribute(e, "return;"), f = typeof c[e] == "function"), a[b[d]] = f
						}
						return a.touchstart && a.touchend && a.touchmove
					} catch (g) {
						return !1
					}
				}

				function b() {
					return d.touchSupport === !0 || d.touchSupport === !1 ? d.touchSupport : a()
				}
				return {
					createDragger: function (a) {
						return function (b) {
							return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(Z.cfilter(b)), !0), b.stopPropagation(), b.preventDefault(), !1)
						}
					},
					newSelection: function (a) {
						return w(Z.cfilter(a))
					},
					cfilter: function (a) {
						return a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY, a
					},
					isSupported: a,
					support: b()
				}
			}(),
			_ = function () {
				function h(d) {
					d = n(d), c = a = d[0], e = b = d[1]
				}

				function i(a) {
					a = n(a), f = a[0] - c, g = a[1] - e, c = a[0], e = a[1]
				}

				function j() {
					return [f, g]
				}

				function k(d) {
					var f = d[0],
						g = d[1];
					0 > a + f && (f -= f + a), 0 > b + g && (g -= g + b), F < e + g && (g += F - (e + g)), E < c + f && (f += E - (c + f)), a += f, c += f, b += g, e += g
				}

				function l(a) {
					var b = m();
					switch (a) {
						case "ne":
							return [
								b.x2, b.y
							];
						case "nw":
							return [b.x, b.y];
						case "se":
							return [b.x2, b.y2];
						case "sw":
							return [b.x, b.y2]
					}
				}

				function m() {
					if (!d.aspectRatio) return p();
					var f = d.aspectRatio,
						g = d.minSize[0] / T,
						h = d.maxSize[0] / T,
						i = d.maxSize[1] / U,
						j = c - a,
						k = e - b,
						l = Math.abs(j),
						m = Math.abs(k),
						n = l / m,
						r, s, t, u;
					return h === 0 && (h = E * 10), i === 0 && (i = F * 10), n < f ? (s = e, t = m * f, r = j < 0 ? a - t : t + a, r < 0 ? (r = 0, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b) : r > E && (r = E, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b)) : (r = c, u = l / f, s = k < 0 ? b - u : b + u, s < 0 ? (s = 0, t = Math.abs((s - b) * f), r = j < 0 ? a - t : t + a) : s > F && (s = F, t = Math.abs(s - b) * f, r = j < 0 ? a - t : t + a)), r > a ? (r - a < g ? r = a + g : r - a > h && (r = a + h), s > b ? s = b + (r - a) / f : s = b - (r - a) / f) : r < a && (a - r < g ? r = a - g : a - r > h && (r = a - h), s > b ? s = b + (a - r) / f : s = b - (a - r) / f), r < 0 ? (a -= r, r = 0) : r > E && (a -= r - E, r = E), s < 0 ? (b -= s, s = 0) : s > F && (b -= s - F, s = F), q(o(a, b, r, s))
				}

				function n(a) {
					return a[0] < 0 && (a[0] = 0), a[1] < 0 && (a[1] = 0), a[0] > E && (a[0] = E), a[1] > F && (a[1] = F), [Math.round(a[0]), Math.round(a[1])]
				}

				function o(a, b, c, d) {
					var e = a,
						f = c,
						g = b,
						h = d;
					return c < a && (e = c, f = a), d < b && (g = d, h = b), [e, g, f, h]
				}

				function p() {
					var d = c - a,
						f = e - b,
						g;
					return P && Math.abs(d) > P && (c = d > 0 ? a + P : a - P), Q && Math.abs(f) > Q && (e = f > 0 ? b + Q : b - Q), S / U && Math.abs(f) < S / U && (e = f > 0 ? b + S / U : b - S / U), R / T && Math.abs(d) < R / T && (c = d > 0 ? a + R / T : a - R / T), a < 0 && (c -= a, a -= a), b < 0 && (e -= b, b -= b), c < 0 && (a -= c, c -= c), e < 0 && (b -= e, e -= e), c > E && (g = c - E, a -= g, c -= g), e > F && (g = e - F, b -= g, e -= g), a > E && (g = a - F, e -= g, b -= g), b > F && (g = b - F, e -= g, b -= g), q(o(a, b, c, e))
				}

				function q(a) {
					return {
						x: a[0],
						y: a[1],
						x2: a[2],
						y2: a[3],
						w: a[2] - a[0],
						h: a[3] - a[1]
					}
				}
				var a = 0,
					b = 0,
					c = 0,
					e = 0,
					f, g;
				return {
					flipCoords: o,
					setPressed: h,
					setCurrent: i,
					getOffset: j,
					moveOffset: k,
					getCorner: l,
					getFixed: m
				}
			}(),
			ba = function () {
				function f(a, b) {
					e.left.css({
						height: i(b)
					}), e.right.css({
						height: i(b)
					})
				}

				function g() {
					return h(_.getFixed())
				}

				function h(a) {
					e.top.css({
						left: i(a.x),
						width: i(a.w),
						height: i(a.y)
					}), e.bottom.css({
						top: i(a.y2),
						left: i(a.x),
						width: i(a.w),
						height: i(F - a.y2)
					}), e.right.css({
						left: i(a.x2),
						width: i(E - a.x2)
					}), e.left.css({
						width: i(a.x)
					})
				}

				function j() {
					return a("<div />").css({
						position: "absolute",
						backgroundColor: d.shadeColor || d.bgColor
					}).appendTo(c)
				}

				function k() {
					b || (b = !0, c.insertBefore(D), g(), bb.setBgOpacity(1, 0, 1), H.hide(), l(d.shadeColor || d.bgColor, 1), bb.isAwake() ? n(d.bgOpacity, 1) : n(1, 1))
				}

				function l(a, b) {
					bq(p(), a, b)
				}

				function m() {
					b && (c.remove(), H.show(), b = !1, bb.isAwake() ? bb.setBgOpacity(d.bgOpacity, 1, 1) : (bb.setBgOpacity(1, 1, 1), bb.disableHandles()), bq(G, 0, 1))
				}

				function n(a, e) {
					b && (d.bgFade && !e ? c.animate({
						opacity: 1 - a
					}, {
						queue: !1,
						duration: d.fadeTime
					}) : c.css({
						opacity: 1 - a
					}))
				}

				function o() {
					d.shade ? k() : m(), bb.isAwake() && n(d.bgOpacity)
				}

				function p() {
					return c.children()
				}
				var b = !1,
					c = a("<div />").css({
						position: "absolute",
						zIndex: 240,
						opacity: 0
					}),
					e = {
						top: j(),
						left: j().height(F),
						right: j().height(F),
						bottom: j()
					};
				return {
					update: g,
					updateRaw: h,
					getShades: p,
					setBgColor: l,
					enable: k,
					disable: m,
					resize: f,
					refresh: o,
					opacity: n
				}
			}(),
			bb = function () {
				function k(b) {
					var c = a("<div />").css({
						position: "absolute",
						opacity: d.borderOpacity
					}).addClass(j(b));
					return I.append(c), c
				}

				function l(b, c) {
					var d = a("<div />").mousedown(s(b)).css({
						cursor: b + "-resize",
						position: "absolute",
						zIndex: c
					}).addClass("ord-" + b);
					return Z.support && d.bind("touchstart.jcrop", Z.createDragger(b)), J.append(d), d
				}

				function m(a) {
					var b = d.handleSize,
						e = l(a, c++).css({
							opacity: d.handleOpacity
						}).addClass(j("handle"));
					return b && e.width(b).height(b), e
				}

				function n(a) {
					return l(a, c++).addClass("jcrop-dragbar")
				}

				function o(a) {
					var b;
					for (b = 0; b < a.length; b++) g[a[b]] = n(a[b])
				}

				function p(a) {
					var b, c;
					for (c = 0; c < a.length; c++) {
						switch (a[c]) {
							case "n":
								b = "hline";
								break;
							case "s":
								b = "hline bottom";
								break;
							case "e":
								b = "vline right";
								break;
							case "w":
								b = "vline"
						}
						e[a[c]] = k(b)
					}
				}

				function q(a) {
					var b;
					for (b = 0; b < a.length; b++) f[a[b]] = m(a[b])
				}

				function r(a, b) {
					d.shade || H.css({
						top: i(-b),
						left: i(-a)
					}), K.css({
						top: i(b),
						left: i(a)
					})
				}

				function t(a, b) {
					K.width(Math.round(a)).height(Math.round(b))
				}

				function v() {
					var a = _.getFixed();
					_.setPressed([a.x, a.y]), _.setCurrent([a.x2, a.y2]), w()
				}

				function w(a) {
					if (b) return x(a)
				}

				function x(a) {
					var c = _.getFixed();
					t(c.w, c.h), r(c.x, c.y), d.shade && ba.updateRaw(c), b || A(), a ? d.onSelect.call(bs, u(c)) : d.onChange.call(bs, u(c))
				}

				function z(a, c, e) {
					if (!b && !c) return;
					d.bgFade && !e ? D.animate({
						opacity: a
					}, {
						queue: !1,
						duration: d.fadeTime
					}) : D.css("opacity", a)
				}

				function A() {
					K.show(), d.shade ? ba.opacity(O) : z(O, !0), b = !0
				}

				function B() {
					F(), K.hide(), d.shade ? ba.opacity(1) : z(1), b = !1, d.onRelease.call(bs)
				}

				function C() {
					h && J.show()
				}

				function E() {
					h = !0;
					if (d.allowResize) return J.show(), !0
				}

				function F() {
					h = !1, J.hide()
				}

				function G(a) {
					a ? (X = !0, F()) : (X = !1, E())
				}

				function L() {
					G(!1), v()
				}
				var b, c = 370,
					e = {},
					f = {},
					g = {},
					h = !1;
				d.dragEdges && a.isArray(d.createDragbars) && o(d.createDragbars), a.isArray(d.createHandles) && q(d.createHandles), d.drawBorders && a.isArray(d.createBorders) && p(d.createBorders), a(document).bind("touchstart.jcrop-ios", function (b) {
					a(b.currentTarget).hasClass("jcrop-tracker") && b.stopPropagation()
				});
				var M = y().mousedown(s("move")).css({
					cursor: "move",
					position: "absolute",
					zIndex: 360
				});
				return Z.support && M.bind("touchstart.jcrop", Z.createDragger("move")), I.append(M), F(), {
					updateVisible: w,
					update: x,
					release: B,
					refresh: v,
					isAwake: function () {
						return b
					},
					setCursor: function (a) {
						M.css("cursor", a)
					},
					enableHandles: E,
					enableOnly: function () {
						h = !0
					},
					showHandles: C,
					disableHandles: F,
					animMode: G,
					setBgOpacity: z,
					done: L
				}
			}(),
			bc = function () {
				function f(b) {
					M.css({
						zIndex: 450
					}), b ? a(document).bind("touchmove.jcrop", k).bind("touchend.jcrop", l) : e && a(document).bind("mousemove.jcrop", h).bind("mouseup.jcrop", i)
				}

				function g() {
					M.css({
						zIndex: 290
					}), a(document).unbind(".jcrop")
				}

				function h(a) {
					return b(m(a)), !1
				}

				function i(a) {
					return a.preventDefault(), a.stopPropagation(), W && (W = !1, c(m(a)), bb.isAwake() && d.onSelect.call(bs, u(_.getFixed())), g(), b = function () {}, c = function () {}), !1
				}

				function j(a, d, e) {
					return W = !0, b = a, c = d, f(e), !1
				}

				function k(a) {
					return b(m(Z.cfilter(a))), !1
				}

				function l(a) {
					return i(Z.cfilter(a))
				}

				function n(a) {
					M.css("cursor", a)
				}
				var b = function () {},
					c = function () {},
					e = d.trackDocument;
				return e || M.mousemove(h).mouseup(i).mouseout(i), D.before(M), {
					activateHandlers: j,
					setCursor: n
				}
			}(),
			bd = function () {
				function e() {
					d.keySupport && (b.show(), b.focus())
				}

				function f(a) {
					b.hide()
				}

				function g(a, b, c) {
					d.allowMove && (_.moveOffset([b, c]), bb.updateVisible(!0)), a.preventDefault(), a.stopPropagation()
				}

				function i(a) {
					if (a.ctrlKey || a.metaKey) return !0;
					Y = a.shiftKey ? !0 : !1;
					var b = Y ? 10 : 1;
					switch (a.keyCode) {
						case 37:
							g(a, -b, 0);
							break;
						case 39:
							g(a, b, 0);
							break;
						case 38:
							g(a, 0, -b);
							break;
						case 40:
							g(a, 0, b);
							break;
						case 27:
							d.allowSelect && bb.release();
							break;
						case 9:
							return !0
					}
					return !1
				}
				var b = a('<input type="radio" />').css({
						position: "fixed",
						left: "-120px",
						width: "12px"
					}).addClass("jcrop-keymgr"),
					c = a("<div />").css({
						position: "absolute",
						overflow: "hidden"
					}).append(b);
				return d.keySupport && (b.keydown(i).blur(f), h || !d.fixedSupport ? (b.css({
					position: "absolute",
					left: "-20px"
				}), c.append(b).insertBefore(D)) : b.insertBefore(D)), {
					watchKeys: e
				}
			}();
		Z.support && M.bind("touchstart.jcrop", Z.newSelection), J.hide(), br(!0);
		var bs = {
			setImage: bp,
			animateTo: bf,
			setSelect: bg,
			setOptions: bk,
			tellSelect: bi,
			tellScaled: bj,
			setClass: be,
			disable: bl,
			enable: bm,
			cancel: bn,
			release: bb.release,
			destroy: bo,
			focus: bd.watchKeys,
			getBounds: function () {
				return [E * T, F * U]
			},
			getWidgetSize: function () {
				return [E, F]
			},
			getScaleFactor: function () {
				return [T, U]
			},
			getOptions: function () {
				return d
			},
			ui: {
				holder: G,
				selection: K
			}
		};
		return g && G.bind("selectstart", function () {
			return !1
		}), A.data("Jcrop", bs), bs
	}, a.fn.Jcrop = function (b, c) {
		var d;
		return this.each(function () {
			if (a(this).data("Jcrop")) {
				if (
					b === "api") return a(this).data("Jcrop");
				a(this).data("Jcrop").setOptions(b)
			} else this.tagName == "IMG" ? a.Jcrop.Loader(this, function () {
				a(this).css({
					display: "block",
					visibility: "hidden"
				}), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d)
			}) : (a(this).css({
				display: "block",
				visibility: "hidden"
			}), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d))
		}), this
	}, a.Jcrop.Loader = function (b, c, d) {
		function g() {
			f.complete ? (e.unbind(".jcloader"), a.isFunction(c) && c.call(f)) : window.setTimeout(g, 50)
		}
		var e = a(b),
			f = e[0];
		e.bind("load.jcloader", g).bind("error.jcloader", function (b) {
			e.unbind(".jcloader"), a.isFunction(d) && d.call(f)
		}), f.complete && a.isFunction(c) && (e.unbind(".jcloader"), c.call(f))
	}, a.Jcrop.defaults = {
		allowSelect: !0,
		allowMove: !0,
		allowResize: !0,
		trackDocument: !0,
		baseClass: "jcrop",
		addClass: null,
		bgColor: "black",
		bgOpacity: .6,
		bgFade: !1,
		borderOpacity: .4,
		handleOpacity: .5,
		handleSize: null,
		aspectRatio: 0,
		keySupport: !0,
		createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
		createDragbars: ["n", "s", "e", "w"],
		createBorders: ["n", "s", "e", "w"],
		drawBorders: !0,
		dragEdges: !0,
		fixedSupport: !0,
		touchSupport: null,
		shade: null,
		boxWidth: 0,
		boxHeight: 0,
		boundary: 2,
		fadeTime: 400,
		animationDelay: 20,
		swingSpeed: 3,
		minSelect: [0, 0],
		maxSize: [0, 0],
		minSize: [0, 0],
		onChange: function () {},
		onSelect: function () {},
		onDblClick: function () {},
		onRelease: function () {}
	}
})(jQuery);

/* 
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 */

! function (e) {
	"use strict";
	var t = function (e, i, a) {
			var o, r, n = document.createElement("img");
			if (n.onerror = i, n.onload = function () {
					!r || a && a.noRevoke || t.revokeObjectURL(r), i && i(t.scale(n, a))
				}, t.isInstanceOf("Blob", e) || t.isInstanceOf("File", e)) o = r = t.createObjectURL(e), n._type = e.type;
			else {
				if ("string" != typeof e) return !1;
				o = e, a && a.crossOrigin && (n.crossOrigin = a.crossOrigin)
			}
			return o ? (n.src = o, n) : t.readFile(e, function (e) {
				var t = e.target;
				t && t.result ? n.src = t.result : i && i(e)
			})
		},
		i = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
	t.isInstanceOf = function (e, t) {
		return Object.prototype.toString.call(t) === "[object " + e + "]"
	}, t.transformCoordinates = function () {}, t.getTransformedOptions = function (e, t) {
		var i, a, o, r, n = t.aspectRatio;
		if (!n) return t;
		i = {};
		for (a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
		return i.crop = !0, o = e.naturalWidth || e.width, r = e.naturalHeight || e.height, o / r > n ? (i.maxWidth = r * n, i.maxHeight = r) : (i.maxWidth = o, i.maxHeight = o / n), i
	}, t.renderImageToCanvas = function (e, t, i, a, o, r, n, s, l, d) {
		return e.getContext("2d").drawImage(t, i, a, o, r, n, s, l, d), e
	}, t.hasCanvasOption = function (e) {
		return e.canvas || e.crop || !!e.aspectRatio
	}, t.scale = function (e, i) {
		function a() {
			var e = Math.max((s || y) / y, (l || v) / v);
			e > 1 && (y *= e, v *= e)
		}

		function o() {
			var e = Math.min((r || y) / y, (n || v) / v);
			1 > e && (y *= e, v *= e)
		}
		i = i || {};
		var r, n, s, l, d, u, c, g, f, h, m, p = document.createElement("canvas"),
			S = e.getContext || t.hasCanvasOption(i) && p.getContext,
			b = e.naturalWidth || e.width,
			x = e.naturalHeight || e.height,
			y = b,
			v = x;
		if (S && (i = t.getTransformedOptions(e, i), c = i.left || 0, g = i.top || 0, i.sourceWidth ? (d = i.sourceWidth, void 0 !== i.right && void 0 === i.left && (c = b - d - i.right)) : d = b - c - (i.right || 0), i.sourceHeight ? (u = i.sourceHeight, void 0 !== i.bottom && void 0 === i.top && (g = x - u - i.bottom)) : u = x - g - (i.bottom || 0), y = d, v = u), r = i.maxWidth, n = i.maxHeight, s = i.minWidth, l = i.minHeight, S && r && n && i.crop ? (y = r, v = n, m = d / u - r / n, 0 > m ? (u = n * d / r, void 0 === i.top && void 0 === i.bottom && (g = (x - u) / 2)) : m > 0 && (d = r * u / n, void 0 === i.left && void 0 === i.right && (c = (b - d) / 2))) : ((i.contain || i.cover) && (s = r = r || s, l = n = n || l), i.cover ? (o(), a()) : (a(), o())), S) {
			if (f = i.pixelRatio, f > 1 && (p.style.width = y + "px", p.style.height = v + "px", y *= f, v *= f, p.getContext("2d").scale(f, f)), h = i.downsamplingRatio, h > 0 && 1 > h && d > y && u > v)
				for (; d * h > y;) p.width = d * h, p.height = u * h, t.renderImageToCanvas(p, e, c, g, d, u, 0, 0, p.width, p.height), d = p.width, u = p.height, e = document.createElement("canvas"), e.width = d, e.height = u, t.renderImageToCanvas(e, p, 0, 0, d, u, 0, 0, d, u);
			return p.width = y, p.height = v, t.transformCoordinates(p, i), t.renderImageToCanvas(p, e, c, g, d, u, 0, 0, y, v)
		}
		return e.width = y, e.height = v, e
	}, t.createObjectURL = function (e) {
		return i ? i.createObjectURL(e) : !1
	}, t.revokeObjectURL = function (e) {
		return i ? i.revokeObjectURL(e) : !1
	}, t.readFile = function (e, t, i) {
		if (window.FileReader) {
			var a = new FileReader;
			if (a.onload = a.onerror = t, i = i || "readAsDataURL", a[i]) return a[i](e), a
		}
		return !1
	}, "function" == typeof define && define.amd ? define(function () {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : e.loadImage = t
}(window),
function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function (e) {
	"use strict";
	var t = e.hasCanvasOption,
		i = e.transformCoordinates,
		a = e.getTransformedOptions;
	e.hasCanvasOption = function (i) {
		return !!i.orientation || t.call(e, i)
	}, e.transformCoordinates = function (t, a) {
		i.call(e, t, a);
		var o = t.getContext("2d"),
			r = t.width,
			n = t.height,
			s = t.style.width,
			l = t.style.height,
			d = a.orientation;
		if (d && !(d > 8)) switch (d > 4 && (t.width = n, t.height = r, t.style.width = l, t.style.height = s), d) {
			case 2:
				o.translate(r, 0), o.scale(-1, 1);
				break;
			case 3:
				o.translate(r, n), o.rotate(Math.PI);
				break;
			case 4:
				o.translate(0, n), o.scale(1, -1);
				break;
			case 5:
				o.rotate(.5 * Math.PI), o.scale(1, -1);
				break;
			case 6:
				o.rotate(.5 * Math.PI), o.translate(0, -n);
				break;
			case 7:
				o.rotate(.5 * Math.PI), o.translate(r, -n), o.scale(-1, 1);
				break;
			case 8:
				o.rotate(-.5 * Math.PI), o.translate(-r, 0)
		}
	}, e.getTransformedOptions = function (t, i) {
		var o, r, n = a.call(e, t, i),
			s = n.orientation;
		if (!s || s > 8 || 1 === s) return n;
		o = {};
		for (r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
		switch (n.orientation) {
			case 2:
				o.left = n.right, o.right = n.left;
				break;
			case 3:
				o.left = n.right, o.top = n.bottom, o.right = n.left, o.bottom = n.top;
				break;
			case 4:
				o.top = n.bottom, o.bottom = n.top;
				break;
			case 5:
				o.left = n.top, o.top = n.left, o.right = n.bottom, o.bottom = n.right;
				break;
			case 6:
				o.left = n.top, o.top = n.right, o.right = n.bottom, o.bottom = n.left;
				break;
			case 7:
				o.left = n.bottom, o.top = n.right, o.right = n.top, o.bottom = n.left;
				break;
			case 8:
				o.left = n.bottom, o.top = n.left, o.right = n.top, o.bottom = n.right
		}
		return n.orientation > 4 && (o.maxWidth = n.maxHeight, o.maxHeight = n.maxWidth, o.minWidth = n.minHeight, o.minHeight = n.minWidth, o.sourceWidth = n.sourceHeight, o.sourceHeight = n.sourceWidth), o
	}
}),
function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function (e) {
	"use strict";
	var t = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
	e.blobSlice = t && function () {
		var e = this.slice || this.webkitSlice || this.mozSlice;
		return e.apply(this, arguments)
	}, e.metaDataParsers = {
		jpeg: {
			65505: []
		}
	}, e.parseMetaData = function (t, i, a) {
		a = a || {};
		var o = this,
			r = a.maxMetaDataSize || 262144,
			n = {},
			s = !(window.DataView && t && t.size >= 12 && "image/jpeg" === t.type && e.blobSlice);
		(s || !e.readFile(e.blobSlice.call(t, 0, r), function (t) {
			if (t.target.error) return console.log(t.target.error), void i(n);
			var r, s, l, d, u = t.target.result,
				c = new DataView(u),
				g = 2,
				f = c.byteLength - 4,
				h = g;
			if (65496 === c.getUint16(0)) {
				for (; f > g && (r = c.getUint16(g), r >= 65504 && 65519 >= r || 65534 === r);) {
					if (s = c.getUint16(g + 2) + 2, g + s > c.byteLength) {
						console.log("Invalid meta data: Invalid segment size.");
						break
					}
					if (l = e.metaDataParsers.jpeg[r])
						for (d = 0; d < l.length; d += 1) l[d].call(o, c, g, s, n, a);
					g += s, h = g
				}!a.disableImageHead && h > 6 && (u.slice ? n.imageHead = u.slice(0, h) : n.imageHead = new Uint8Array(u).subarray(0, h))
			} else console.log("Invalid JPEG file: Missing JPEG marker.");
			i(n)
		}, "readAsArrayBuffer")) && i(n)
	}
}),
function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./load-image", "./load-image-meta"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-meta")) : e(window.loadImage)
}(function (e) {
	"use strict";
	e.ExifMap = function () {
		return this
	}, e.ExifMap.prototype.map = {
		Orientation: 274
	}, e.ExifMap.prototype.get = function (e) {
		return this[e] || this[this.map[e]]
	}, e.getExifThumbnail = function (e, t, i) {
		var a, o, r;
		if (!i || t + i > e.byteLength) return void console.log("Invalid Exif data: Invalid thumbnail data.");
		for (a = [], o = 0; i > o; o += 1) r = e.getUint8(t + o), a.push((16 > r ? "0" : "") + r.toString(16));
		return "data:image/jpeg,%" + a.join("%")
	}, e.exifTagTypes = {
		1: {
			getValue: function (e, t) {
				return e.getUint8(t)
			},
			size: 1
		},
		2: {
			getValue: function (e, t) {
				return String.fromCharCode(e.getUint8(t))
			},
			size: 1,
			ascii: !0
		},
		3: {
			getValue: function (e, t, i) {
				return e.getUint16(t, i)
			},
			size: 2
		},
		4: {
			getValue: function (e, t, i) {
				return e.getUint32(t, i)
			},
			size: 4
		},
		5: {
			getValue: function (e, t, i) {
				return e.getUint32(t, i) / e.getUint32(t + 4, i)
			},
			size: 8
		},
		9: {
			getValue: function (e, t, i) {
				return e.getInt32(t, i)
			},
			size: 4
		},
		10: {
			getValue: function (e, t, i) {
				return e.getInt32(t, i) / e.getInt32(t + 4, i)
			},
			size: 8
		}
	}, e.exifTagTypes[7] = e.exifTagTypes[1], e.getExifValue = function (t, i, a, o, r, n) {
		var s, l, d, u, c, g, f = e.exifTagTypes[o];
		if (!f) return void console.log("Invalid Exif data: Invalid tag type.");
		if (s = f.size * r, l = s > 4 ? i + t.getUint32(a + 8, n) : a + 8, l + s > t.byteLength) return void console.log("Invalid Exif data: Invalid data offset.");
		if (1 === r) return f.getValue(t, l, n);
		for (d = [], u = 0; r > u; u += 1) d[u] = f.getValue(t, l + u * f.size, n);
		if (f.ascii) {
			for (c = "", u = 0; u < d.length && (g = d[u], "\x00" !== g); u += 1) c += g;
			return c
		}
		return d
	}, e.parseExifTag = function (t, i, a, o, r) {
		var n = t.getUint16(a, o);
		r.exif[n] = e.getExifValue(t, i, a, t.getUint16(a + 2, o), t.getUint32(a + 4, o), o)
	}, e.parseExifTags = function (e, t, i, a, o) {
		var r, n, s;
		if (i + 6 > e.byteLength) return void console.log("Invalid Exif data: Invalid directory offset.");
		if (r = e.getUint16(i, a), n = i + 2 + 12 * r, n + 4 > e.byteLength) return void console.log("Invalid Exif data: Invalid directory size.");
		for (s = 0; r > s; s += 1) this.parseExifTag(e, t, i + 2 + 12 * s, a, o);
		return e.getUint32(n, a)
	}, e.parseExifData = function (t, i, a, o, r) {
		if (!r.disableExif) {
			var n, s, l, d = i + 10;
			if (1165519206 === t.getUint32(i + 4)) {
				if (d + 8 > t.byteLength) return void console.log("Invalid Exif data: Invalid segment size.");
				if (0 !== t.getUint16(i + 8)) return void console.log("Invalid Exif data: Missing byte alignment offset.");
				switch (t.getUint16(d)) {
					case 18761:
						n = !0;
						break;
					case 19789:
						n = !1;
						break;
					default:
						return void console.log("Invalid Exif data: Invalid byte alignment marker.")
				}
				if (42 !== t.getUint16(d + 2, n)) return void console.log("Invalid Exif data: Missing TIFF marker.");
				s = t.getUint32(d + 4, n), o.exif = new e.ExifMap, s = e.parseExifTags(t, d, d + s, n, o), s && !r.disableExifThumbnail && (l = {
					exif: {}
				}, s = e.parseExifTags(t, d, d + s, n, l), l.exif[513] && (o.exif.Thumbnail = e.getExifThumbnail(t, d + l.exif[513], l.exif[514]))), o.exif[34665] && !r.disableExifSub && e.parseExifTags(t, d, d + o.exif[34665], n, o), o.exif[34853] && !r.disableExifGps && e.parseExifTags(t, d, d + o.exif[34853], n, o)
			}
		}
	}, e.metaDataParsers.jpeg[65505].push(e.parseExifData)
}),
function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["./load-image", "./load-image-exif"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-exif")) : e(window.loadImage)
}(function (e) {
	"use strict";
	e.ExifMap.prototype.tags = {
			256: "ImageWidth",
			257: "ImageHeight",
			34665: "ExifIFDPointer",
			34853: "GPSInfoIFDPointer",
			40965: "InteroperabilityIFDPointer",
			258: "BitsPerSample",
			259: "Compression",
			262: "PhotometricInterpretation",
			274: "Orientation",
			277: "SamplesPerPixel",
			284: "PlanarConfiguration",
			530: "YCbCrSubSampling",
			531: "YCbCrPositioning",
			282: "XResolution",
			283: "YResolution",
			296: "ResolutionUnit",
			273: "StripOffsets",
			278: "RowsPerStrip",
			279: "StripByteCounts",
			513: "JPEGInterchangeFormat",
			514: "JPEGInterchangeFormatLength",
			301: "TransferFunction",
			318: "WhitePoint",
			319: "PrimaryChromaticities",
			529: "YCbCrCoefficients",
			532: "ReferenceBlackWhite",
			306: "DateTime",
			270: "ImageDescription",
			271: "Make",
			272: "Model",
			305: "Software",
			315: "Artist",
			33432: "Copyright",
			36864: "ExifVersion",
			40960: "FlashpixVersion",
			40961: "ColorSpace",
			40962: "PixelXDimension",
			40963: "PixelYDimension",
			42240: "Gamma",
			37121: "ComponentsConfiguration",
			37122: "CompressedBitsPerPixel",
			37500: "MakerNote",
			37510: "UserComment",
			40964: "RelatedSoundFile",
			36867: "DateTimeOriginal",
			36868: "DateTimeDigitized",
			37520: "SubSecTime",
			37521: "SubSecTimeOriginal",
			37522: "SubSecTimeDigitized",
			33434: "ExposureTime",
			33437: "FNumber",
			34850: "ExposureProgram",
			34852: "SpectralSensitivity",
			34855: "PhotographicSensitivity",
			34856: "OECF",
			34864: "SensitivityType",
			34865: "StandardOutputSensitivity",
			34866: "RecommendedExposureIndex",
			34867: "ISOSpeed",
			34868: "ISOSpeedLatitudeyyy",
			34869: "ISOSpeedLatitudezzz",
			37377: "ShutterSpeedValue",
			37378: "ApertureValue",
			37379: "BrightnessValue",
			37380: "ExposureBias",
			37381: "MaxApertureValue",
			37382: "SubjectDistance",
			37383: "MeteringMode",
			37384: "LightSource",
			37385: "Flash",
			37396: "SubjectArea",
			37386: "FocalLength",
			41483: "FlashEnergy",
			41484: "SpatialFrequencyResponse",
			41486: "FocalPlaneXResolution",
			41487: "FocalPlaneYResolution",
			41488: "FocalPlaneResolutionUnit",
			41492: "SubjectLocation",
			41493: "ExposureIndex",
			41495: "SensingMethod",
			41728: "FileSource",
			41729: "SceneType",
			41730: "CFAPattern",
			41985: "CustomRendered",
			41986: "ExposureMode",
			41987: "WhiteBalance",
			41988: "DigitalZoomRatio",
			41989: "FocalLengthIn35mmFilm",
			41990: "SceneCaptureType",
			41991: "GainControl",
			41992: "Contrast",
			41993: "Saturation",
			41994: "Sharpness",
			41995: "DeviceSettingDescription",
			41996: "SubjectDistanceRange",
			42016: "ImageUniqueID",
			42032: "CameraOwnerName",
			42033: "BodySerialNumber",
			42034: "LensSpecification",
			42035: "LensMake",
			42036: "LensModel",
			42037: "LensSerialNumber",
			0: "GPSVersionID",
			1: "GPSLatitudeRef",
			2: "GPSLatitude",
			3: "GPSLongitudeRef",
			4: "GPSLongitude",
			5: "GPSAltitudeRef",
			6: "GPSAltitude",
			7: "GPSTimeStamp",
			8: "GPSSatellites",
			9: "GPSStatus",
			10: "GPSMeasureMode",
			11: "GPSDOP",
			12: "GPSSpeedRef",
			13: "GPSSpeed",
			14: "GPSTrackRef",
			15: "GPSTrack",
			16: "GPSImgDirectionRef",
			17: "GPSImgDirection",
			18: "GPSMapDatum",
			19: "GPSDestLatitudeRef",
			20: "GPSDestLatitude",
			21: "GPSDestLongitudeRef",
			22: "GPSDestLongitude",
			23: "GPSDestBearingRef",
			24: "GPSDestBearing",
			25: "GPSDestDistanceRef",
			26: "GPSDestDistance",
			27: "GPSProcessingMethod",
			28: "GPSAreaInformation",
			29: "GPSDateStamp",
			30: "GPSDifferential",
			31: "GPSHPositioningError"
		}, e.ExifMap.prototype.stringValues = {
			ExposureProgram: {
				0: "Undefined",
				1: "Manual",
				2: "Normal program",
				3: "Aperture priority",
				4: "Shutter priority",
				5: "Creative program",
				6: "Action program",
				7: "Portrait mode",
				8: "Landscape mode"
			},
			MeteringMode: {
				0: "Unknown",
				1: "Average",
				2: "CenterWeightedAverage",
				3: "Spot",
				4: "MultiSpot",
				5: "Pattern",
				6: "Partial",
				255: "Other"
			},
			LightSource: {
				0: "Unknown",
				1: "Daylight",
				2: "Fluorescent",
				3: "Tungsten (incandescent light)",
				4: "Flash",
				9: "Fine weather",
				10: "Cloudy weather",
				11: "Shade",
				12: "Daylight fluorescent (D 5700 - 7100K)",
				13: "Day white fluorescent (N 4600 - 5400K)",
				14: "Cool white fluorescent (W 3900 - 4500K)",
				15: "White fluorescent (WW 3200 - 3700K)",
				17: "Standard light A",
				18: "Standard light B",
				19: "Standard light C",
				20: "D55",
				21: "D65",
				22: "D75",
				23: "D50",
				24: "ISO studio tungsten",
				255: "Other"
			},
			Flash: {
				0: "Flash did not fire",
				1: "Flash fired",
				5: "Strobe return light not detected",
				7: "Strobe return light detected",
				9: "Flash fired, compulsory flash mode",
				13: "Flash fired, compulsory flash mode, return light not detected",
				15: "Flash fired, compulsory flash mode, return light detected",
				16: "Flash did not fire, compulsory flash mode",
				24: "Flash did not fire, auto mode",
				25: "Flash fired, auto mode",
				29: "Flash fired, auto mode, return light not detected",
				31: "Flash fired, auto mode, return light detected",
				32: "No flash function",
				65: "Flash fired, red-eye reduction mode",
				69: "Flash fired, red-eye reduction mode, return light not detected",
				71: "Flash fired, red-eye reduction mode, return light detected",
				73: "Flash fired, compulsory flash mode, red-eye reduction mode",
				77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
				79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
				89: "Flash fired, auto mode, red-eye reduction mode",
				93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
				95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
			},
			SensingMethod: {
				1: "Undefined",
				2: "One-chip color area sensor",
				3: "Two-chip color area sensor",
				4: "Three-chip color area sensor",
				5: "Color sequential area sensor",
				7: "Trilinear sensor",
				8: "Color sequential linear sensor"
			},
			SceneCaptureType: {
				0: "Standard",
				1: "Landscape",
				2: "Portrait",
				3: "Night scene"
			},
			SceneType: {
				1: "Directly photographed"
			},
			CustomRendered: {
				0: "Normal process",
				1: "Custom process"
			},
			WhiteBalance: {
				0: "Auto white balance",
				1: "Manual white balance"
			},
			GainControl: {
				0: "None",
				1: "Low gain up",
				2: "High gain up",
				3: "Low gain down",
				4: "High gain down"
			},
			Contrast: {
				0: "Normal",
				1: "Soft",
				2: "Hard"
			},
			Saturation: {
				0: "Normal",
				1: "Low saturation",
				2: "High saturation"
			},
			Sharpness: {
				0: "Normal",
				1: "Soft",
				2: "Hard"
			},
			SubjectDistanceRange: {
				0: "Unknown",
				1: "Macro",
				2: "Close view",
				3: "Distant view"
			},
			FileSource: {
				3: "DSC"
			},
			ComponentsConfiguration: {
				0: "",
				1: "Y",
				2: "Cb",
				3: "Cr",
				4: "R",
				5: "G",
				6: "B"
			},
			Orientation: {
				1: "top-left",
				2: "top-right",
				3: "bottom-right",
				4: "bottom-left",
				5: "left-top",
				6: "right-top",
				7: "right-bottom",
				8: "left-bottom"
			}
		}, e.ExifMap.prototype.getText = function (e) {
			var t = this.get(e);
			switch (e) {
				case "LightSource":
				case "Flash":
				case "MeteringMode":
				case "ExposureProgram":
				case "SensingMethod":
				case "SceneCaptureType":
				case "SceneType":
				case "CustomRendered":
				case "WhiteBalance":
				case "GainControl":
				case "Contrast":
				case "Saturation":
				case "Sharpness":
				case "SubjectDistanceRange":
				case "FileSource":
				case "Orientation":
					return this.stringValues[e][t];
				case "ExifVersion":
				case "FlashpixVersion":
					if (!t) return;
					return String.fromCharCode(t[0], t[1], t[2], t[3]);
				case "ComponentsConfiguration":
					if (!t) return;
					return this.stringValues[e][t[0]] + this.stringValues[e][t[1]] + this.stringValues[e][t[2]] + this.stringValues[e][t[3]];
				case "GPSVersionID":
					if (!t) return;
					return t[0] + "." + t[1] + "." + t[2] + "." + t[3]
			}
			return String(t)
		},
		function (e) {
			var t, i = e.tags,
				a = e.map;
			for (t in i) i.hasOwnProperty(t) && (a[i[t]] = t)
		}(e.ExifMap.prototype), e.ExifMap.prototype.getAll = function () {
			var e, t, i = {};
			for (e in this) this.hasOwnProperty(e) && (t = this.tags[e], t && (i[t] = this.getText(t)));
			return i
		}
});


/*jQuery list 0.4*/
! function (a) {
	var b = {
			html: function (b, c, d) {
				var e = typeof b,
					f = "",
					g = Number(d) || 0;
				return "string" == e ? f = a(b.assign(a.extend({
					_i: g,
					_i1: g + 1
				}, c))) : "function" == e ? (f = b(c, d), "string" == typeof f && (f = a(f))) : "object" == e && b.jquery && (f = "function" == typeof a.tmpl && "text/x-jquery-tmpl" == b.attr("type") ? b.tmpl(c, {
					_i: g,
					_i1: g + 1
				}) : a(String(b.html()).assign(a.extend({
					_i: g,
					_i1: g + 1
				}, c)))), f
			},
			sdbmCode: function (a) {
				for (var b = JSON.stringify(a), c = 0, d = 0; d < b.length; d++) c = b.charCodeAt(d) + (c << 6) + (c << 16) - c;
				return (1e11 + c).toString(36)
			},
			cache: function (c, d, e) {
				var f, g, h = [],
					i = d,
					j = e,
					k = j.sortBy ? c.sortBy(j.sortBy) : c;
				for (f = 0; f < k.length; f++) g = k[f], id = j.id(g), hash = j.hash(g), tt = a.type(g), void 0 !== g && null !== g && (i.hash[id] && i.hash[id] == hash || (i.$o[id] = i.$o[id] ? b.html(j.template, g, f).replaceAll(i.$o[id]) : b.html(j.template, g, f), i.hash[id] = hash), h.push(id));
				return h
			},
			event: function (b, c) {
				var d = a(this);
				c.call(this, b, d, d.data("value") || d.text())
			},
			render: function (a, c, d, e) {
				function f() {
					if (l.cycle == q) {
						var a = m.position,
							b = !1;
						for (i = a; a + chunk > i; i++) void 0 !== n[i] ? g(i) : b = !0;
						m.position = a + chunk, b ? o(k) : f.delay(p)
					}
				}

				function g(a) {
					j = l.cache.$o[n[a]], h = a ? h.last().next().is(j) ? j : j.insertAfter(h.last()) : k.find(">*:eq(0)").is(j) ? j : j.prependTo(k)
				}
				var h, j, k = a,
					l = c,
					m = l.params,
					n = d.slice(0),
					o = "function" == typeof e ? e : function () {};
				if (!m.delay || !m.chunk || m.chunk >= n.length) {
					for (i = 0; i < n.length; i++) g(i);
					return o(k), a
				}
				var p = m.delay;
				chunk = m.chunk, m.position = 0;
				var q = b.sdbmCode(Date.now());
				return l.cycle = q, f(), a
			}
		},
		c = {
			init: function (c) {
				if ("object" != typeof c || !c.data || !c.template || "array" != a.type(c.data)) return this;
				var d = this.eq(0),
					e = a.extend(!0, {
						delay: 0,
						chunk: 0,
						position: 0,
						id: function (a) {
							return b.sdbmCode(a)
						},
						hash: function (a) {
							return b.sdbmCode(a)
						},
						sortBy: null
					}, c),
					f = {
						$o: {},
						hash: {}
					},
					g = e.sortBy ? e.data.sortBy(e.sortBy) : e.data,
					h = {
						list: b.cache(g, f, e),
						cache: f,
						data: g,
						params: e,
						cycle: "",
						lock: !1
					};
				if (d.addClass("my-list").data("list", h).list("redraw"), e.events)
					for (var i in e.events) {
						var j, k = e.events[i],
							l = a.type(k).to(1);
						if ("o" == l)
							for (j in k) "function" == a.typ(k[j]) && d.on(j + ".list", i, b.event.fill(void 0, k[j]));
						else "f" == l && d.on("click.list", i, b.event.fill(void 0, k))
					}
				return d
			},
			data: function (c, d) {
				var e, f, g, h = this,
					i = h.data("list"),
					j = i.list.slice(0);
				if (!i) return null;
				if (i.lock || "array" != a.type(c)) return i.data;
				if (!c.length) return h.html(""), i.list = [], i.data = [];
				for (e = b.cache(c, i.cache, i.params), g = j.subtract(e.intersect(j)), i.cycle = "", f = 0; f < g.length; f++) i.cache.$o[g[f]].detach();
				return b.render(h, i, e, d), i.list = e, i.data = c, i.data
			},
			redraw: function () {
				var a, b = this,
					c = b.data("list"),
					d = c.cache.$o;
				if (c && c.list) {
					b.html(""), a = c.list;
					for (var e = 0; e < a.length; e++) d[a[e]].appendTo(b)
				}
			},
			remove: function () {
				var a = this,
					b = a.data("list");
				return b ? (a.removeClass("my-list").off(".list"), void 0) : null
			}
		};
	a.my || (a.my = {}), a.my.list = {
		f: b
	}, a.fn.list = function (b) {
		return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? (a.error("Method " + b + " does not exist on jQuery.list"), void 0) : c.init.apply(this, arguments)
	}
}(jQuery);


/* jquery.nicescroll 3.6.6 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */
(function (e) {
	"function" === typeof define && define.amd ? define(["jquery"], e) : "object" === typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function (e) {
	var A = !1,
		E = !1,
		O = 0,
		P = 2E3,
		z = 0,
		I = ["webkit", "ms", "moz", "o"],
		u = window.requestAnimationFrame || !1,
		v = window.cancelAnimationFrame || !1;
	if (!u)
		for (var Q in I) {
			var F = I[Q];
			u || (u = window[F + "RequestAnimationFrame"]);
			v || (v = window[F + "CancelAnimationFrame"] || window[F + "CancelRequestAnimationFrame"])
		}
	var x = window.MutationObserver || window.WebKitMutationObserver ||
		!1,
		J = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "5px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 60,
			mousescrollstep: 24,
			touchbehavior: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			railhoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: .3,
			rtlmode: "auto",
			cursordragontouch: !1,
			oneaxismousemode: "auto",
			scriptpath: function () {
				var e = document.getElementsByTagName("script"),
					e = e.length ? e[e.length -
						1].src.split("?")[0] : "";
				return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
			}(),
			preventmultitouchscrolling: !0
		},
		G = !1,
		R = function () {
			if (G) return G;
			var e = document.createElement("DIV"),
				c = e.style,
				h = navigator.userAgent,
				n = navigator.platform,
				d = {
					haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
				};
			d.isopera = "opera" in window;
			d.isopera12 = d.isopera && "getUserMedia" in navigator;
			d.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
			d.isie = "all" in document && "attachEvent" in e && !d.isopera;
			d.isieold = d.isie && !("msInterpolationMode" in c);
			d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode);
			d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode;
			d.isie9 = d.isie && "performance" in window && 9 <= document.documentMode;
			d.isie10 = d.isie && "performance" in window && 10 == document.documentMode;
			d.isie11 = "msRequestFullscreen" in e && 11 <= document.documentMode;
			d.isieedge = navigator.userAgent.match(/Edge\/12\./);
			d.isie9mobile =
				/iemobile.9/i.test(h);
			d.isie9mobile && (d.isie9 = !1);
			d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(h);
			d.ismozilla = "MozAppearance" in c;
			d.iswebkit = "WebkitAppearance" in c;
			d.ischrome = "chrome" in window;
			d.ischrome22 = d.ischrome && d.haspointerlock;
			d.ischrome26 = d.ischrome && "transition" in c;
			d.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
			d.hasmstouch = window.MSPointerEvent || !1;
			d.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints);
			d.ismac = /^mac$/i.test(n);
			d.isios = d.cantouch && /iphone|ipad|ipod/i.test(n);
			d.isios4 = d.isios && !("seal" in Object);
			d.isios7 = d.isios && "webkitHidden" in document;
			d.isandroid = /android/i.test(h);
			d.haseventlistener = "addEventListener" in e;
			d.trstyle = !1;
			d.hastransform = !1;
			d.hastranslate3d = !1;
			d.transitionstyle = !1;
			d.hastransition = !1;
			d.transitionend = !1;
			n = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
			for (h = 0; h < n.length; h++)
				if ("undefined" != typeof c[n[h]]) {
					d.trstyle = n[h];
					break
				} d.hastransform = !!d.trstyle;
			d.hastransform && (c[d.trstyle] = "translate3d(1px,2px,3px)", d.hastranslate3d = /translate3d/.test(c[d.trstyle]));
			d.transitionstyle = !1;
			d.prefixstyle = "";
			d.transitionend = !1;
			for (var n = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), p = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), q = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), h = 0; h < n.length; h++)
				if (n[h] in
					c) {
					d.transitionstyle = n[h];
					d.prefixstyle = p[h];
					d.transitionend = q[h];
					break
				} d.ischrome26 && (d.prefixstyle = p[1]);
			d.hastransition = d.transitionstyle;
			a: {
				h = ["-webkit-grab", "-moz-grab", "grab"];
				if (d.ischrome && !d.ischrome22 || d.isie) h = [];
				for (n = 0; n < h.length; n++)
					if (p = h[n], c.cursor = p, c.cursor == p) {
						c = p;
						break a
					} c = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
			}
			d.cursorgrabvalue = c;
			d.hasmousecapture = "setCapture" in e;
			d.hasMutationObserver = !1 !== x;
			return G = d
		},
		S = function (k, c) {
			function h() {
				var b = a.doc.css(f.trstyle);
				return b && "matrix" == b.substr(0, 6) ? b.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
			}

			function n() {
				var b = a.win;
				if ("zIndex" in b) return b.zIndex();
				for (; 0 < b.length && 9 != b[0].nodeType;) {
					var g = b.css("zIndex");
					if (!isNaN(g) && 0 != g) return parseInt(g);
					b = b.parent()
				}
				return !1
			}

			function d(b, g, l) {
				g = b.css(g);
				b = parseFloat(g);
				return isNaN(b) ? (b = y[g] || 0, l = 3 == b ? l ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && b && (b += 1), l ? b : 0) : b
			}

			function p(b, g, l, c) {
				a._bind(b, g, function (a) {
					a =
						a ? a : window.event;
					var c = {
						original: a,
						target: a.target || a.srcElement,
						type: "wheel",
						deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
						deltaX: 0,
						deltaZ: 0,
						preventDefault: function () {
							a.preventDefault ? a.preventDefault() : a.returnValue = !1;
							return !1
						},
						stopImmediatePropagation: function () {
							a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
						}
					};
					"mousewheel" == g ? (c.deltaY = -.025 * a.wheelDelta, a.wheelDeltaX && (c.deltaX = -.025 * a.wheelDeltaX)) : c.deltaY = a.detail;
					return l.call(b, c)
				}, c)
			}

			function q(b, g, c) {
				var d, f;
				0 ==
					b.deltaMode ? (d = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaX), f = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaY)) : 1 == b.deltaMode && (d = -Math.floor(b.deltaX * a.opt.mousescrollstep), f = -Math.floor(b.deltaY * a.opt.mousescrollstep));
				g && a.opt.oneaxismousemode && 0 == d && f && (d = f, f = 0, c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && (f = d, d = 0));
				d && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += d, a.debounced("mousewheelx", function () {
					var b = a.lastdeltax;
					a.lastdeltax = 0;
					a.rail.drag || a.doScrollLeftBy(b)
				}, 15));
				if (f) {
					if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
						if (0 > f) {
							if (a.getScrollTop() >= a.page.maxh) return !0
						} else if (0 >= a.getScrollTop()) return !0;
					a.scrollmom && a.scrollmom.stop();
					a.lastdeltay += f;
					a.debounced("mousewheely", function () {
						var b = a.lastdeltay;
						a.lastdeltay = 0;
						a.rail.drag || a.doScrollBy(b)
					}, 15)
				}
				b.stopImmediatePropagation();
				return b.preventDefault()
			}
			var a = this;
			this.version = "3.6.6";
			this.name = "nicescroll";
			this.me = c;
			this.opt = {
				doc: e("body"),
				win: !1
			};
			e.extend(this.opt, J);
			this.opt.snapbackspeed =
				80;
			if (k)
				for (var H in a.opt) "undefined" != typeof k[H] && (a.opt[H] = k[H]);
			this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
			this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
			this.haswrapper = !1 !== a.opt.win;
			this.win = a.opt.win || (this.ispage ? e(window) : this.doc);
			this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
			this.body = e("body");
			this.iframe = this.isfixed = this.viewport = !1;
			this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
			this.istextarea = "TEXTAREA" == this.win[0].nodeName;
			this.forcescreen = !1;
			this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
			this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
			this.scroll = {
				x: 0,
				y: 0
			};
			this.scrollratio = {
				x: 0,
				y: 0
			};
			this.cursorheight = 20;
			this.scrollvaluemax = 0;
			this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ?
				this.body : this.win).css("direction") : !0 === this.opt.rtlmode;
			this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
			do this.id = "ascrail" + P++; while (document.getElementById(this.id));
			this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
			this.visibility = !0;
			this.hidden = this.locked = this.railslocked = !1;
			this.cursoractive = !0;
			this.wheelprevented = !1;
			this.overflowx = a.opt.overflowx;
			this.overflowy = a.opt.overflowy;
			this.nativescrollingarea = !1;
			this.checkarea = 0;
			this.events = [];
			this.saved = {};
			this.delaylist = {};
			this.synclist = {};
			this.lastdeltay = this.lastdeltax = 0;
			this.detected = R();
			var f = e.extend({}, this.detected);
			this.ishwscroll = (this.canhwscroll = f.hastransform && a.opt.hwacceleration) && a.haswrapper;
			this.hasreversehr = this.isrtlmode && !f.iswebkit;
			this.istouchcapable = !1;
			!f.cantouch || f.isios || f.isandroid || !f.iswebkit && !f.ismozilla || (this.istouchcapable = !0, f.cantouch = !1);
			a.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);
			this.debounced = function (b, g, c) {
				var d = a.delaylist[b];
				a.delaylist[b] = g;
				d || (a.debouncedelayed = setTimeout(function () {
					if (a) {
						var g = a.delaylist[b];
						a.delaylist[b] = !1;
						g.call(a)
					}
				}, c))
			};
			var t = !1;
			this.synched = function (b, g) {
				a.synclist[b] = g;
				(function () {
					t || (u(function () {
						t = !1;
						for (var b in a.synclist) {
							var g = a.synclist[b];
							g && g.call(a);
							a.synclist[b] = !1
						}
					}), t = !0)
				})();
				return b
			};
			this.unsynched = function (b) {
				a.synclist[b] && (a.synclist[b] = !1)
			};
			this.css = function (b, g) {
				for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c,
					g[c])
			};
			this.scrollTop = function (b) {
				return "undefined" == typeof b ? a.getScrollTop() : a.setScrollTop(b)
			};
			this.scrollLeft = function (b) {
				return "undefined" == typeof b ? a.getScrollLeft() : a.setScrollLeft(b)
			};
			var B = function (a, g, c, d, f, e, h) {
				this.st = a;
				this.ed = g;
				this.spd = c;
				this.p1 = d || 0;
				this.p2 = f || 1;
				this.p3 = e || 0;
				this.p4 = h || 1;
				this.ts = (new Date).getTime();
				this.df = this.ed - this.st
			};
			B.prototype = {
				B2: function (a) {
					return 3 * a * a * (1 - a)
				},
				B3: function (a) {
					return 3 * a * (1 - a) * (1 - a)
				},
				B4: function (a) {
					return (1 - a) * (1 - a) * (1 - a)
				},
				getNow: function () {
					var a =
						1 - ((new Date).getTime() - this.ts) / this.spd,
						g = this.B2(a) + this.B3(a) + this.B4(a);
					return 0 > a ? this.ed : this.st + Math.round(this.df * g)
				},
				update: function (a, g) {
					this.st = this.getNow();
					this.ed = a;
					this.spd = g;
					this.ts = (new Date).getTime();
					this.df = this.ed - this.st;
					return this
				}
			};
			if (this.ishwscroll) {
				this.doc.translate = {
					x: 0,
					y: 0,
					tx: "0px",
					ty: "0px"
				};
				f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");
				this.getScrollTop = function (b) {
					if (!b) {
						if (b = h()) return 16 == b.length ? -b[13] : -b[5];
						if (a.timerscroll &&
							a.timerscroll.bz) return a.timerscroll.bz.getNow()
					}
					return a.doc.translate.y
				};
				this.getScrollLeft = function (b) {
					if (!b) {
						if (b = h()) return 16 == b.length ? -b[12] : -b[4];
						if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow()
					}
					return a.doc.translate.x
				};
				this.notifyScrollEvent = function (a) {
					var g = document.createEvent("UIEvents");
					g.initUIEvent("scroll", !1, !0, window, 1);
					g.niceevent = !0;
					a.dispatchEvent(g)
				};
				var L = this.isrtlmode ? 1 : -1;
				f.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (b, g) {
					a.doc.translate.y =
						b;
					a.doc.translate.ty = -1 * b + "px";
					a.doc.css(f.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
					g || a.notifyScrollEvent(a.win[0])
				}, this.setScrollLeft = function (b, g) {
					a.doc.translate.x = b;
					a.doc.translate.tx = b * L + "px";
					a.doc.css(f.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
					g || a.notifyScrollEvent(a.win[0])
				}) : (this.setScrollTop = function (b, g) {
					a.doc.translate.y = b;
					a.doc.translate.ty = -1 * b + "px";
					a.doc.css(f.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty +
						")");
					g || a.notifyScrollEvent(a.win[0])
				}, this.setScrollLeft = function (b, g) {
					a.doc.translate.x = b;
					a.doc.translate.tx = b * L + "px";
					a.doc.css(f.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
					g || a.notifyScrollEvent(a.win[0])
				})
			} else this.getScrollTop = function () {
					return a.docscroll.scrollTop()
				}, this.setScrollTop = function (b) {
					return setTimeout(function () {
						a.docscroll.scrollTop(b)
					}, 1)
				}, this.getScrollLeft = function () {
					return a.detected.ismozilla && a.isrtlmode ? Math.abs(a.docscroll.scrollLeft()) : a.docscroll.scrollLeft()
				},
				this.setScrollLeft = function (b) {
					return setTimeout(function () {
						a.docscroll.scrollLeft(a.detected.ismozilla && a.isrtlmode ? -b : b)
					}, 1)
				};
			this.getTarget = function (a) {
				return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1
			};
			this.hasParent = function (a, g) {
				if (!a) return !1;
				for (var c = a.target || a.srcElement || a || !1; c && c.id != g;) c = c.parentNode || !1;
				return !1 !== c
			};
			var y = {
				thin: 1,
				medium: 3,
				thick: 5
			};
			this.getDocumentScrollOffset = function () {
				return {
					top: window.pageYOffset || document.documentElement.scrollTop,
					left: window.pageXOffset ||
						document.documentElement.scrollLeft
				}
			};
			this.getOffset = function () {
				if (a.isfixed) {
					var b = a.win.offset(),
						g = a.getDocumentScrollOffset();
					b.top -= g.top;
					b.left -= g.left;
					return b
				}
				b = a.win.offset();
				if (!a.viewport) return b;
				g = a.viewport.offset();
				return {
					top: b.top - g.top,
					left: b.left - g.left
				}
			};
			this.updateScrollBar = function (b) {
				if (a.ishwscroll) a.rail.css({
					height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom)
				}), a.railh && a.railh.css({
					width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right)
				});
				else {
					var g = a.getOffset(),
						c = g.top,
						f = g.left - (a.opt.railpadding.left + a.opt.railpadding.right),
						c = c + d(a.win, "border-top-width", !0),
						f = f + (a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width")),
						e = a.opt.railoffset;
					e && (e.top && (c += e.top), e.left && (f += e.left));
					a.railslocked || a.rail.css({
						top: c,
						left: f,
						height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom)
					});
					a.zoom && a.zoom.css({
						top: c + 1,
						left: 1 == a.rail.align ? f - 20 : f + a.rail.width + 4
					});
					if (a.railh &&
						!a.railslocked) {
						c = g.top;
						f = g.left;
						if (e = a.opt.railhoffset) e.top && (c += e.top), e.left && (f += e.left);
						b = a.railh.align ? c + d(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : c + d(a.win, "border-top-width", !0);
						f += d(a.win, "border-left-width");
						a.railh.css({
							top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom),
							left: f,
							width: a.railh.width
						})
					}
				}
			};
			this.doRailClick = function (b, g, c) {
				var f;
				a.railslocked || (a.cancelEvent(b), g ? (g = c ? a.doScrollLeft : a.doScrollTop, f = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) *
					a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, g(f)) : (g = c ? a.doScrollLeftBy : a.doScrollBy, f = c ? a.scroll.x : a.scroll.y, b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top, c = c ? a.view.w : a.view.h, g(f >= b ? c : -c)))
			};
			a.hasanimationframe = u;
			a.hascancelanimationframe = v;
			a.hasanimationframe ? a.hascancelanimationframe || (v = function () {
				a.cancelAnimationFrame = !0
			}) : (u = function (a) {
				return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16)
			}, v = clearInterval);
			this.init = function () {
				a.saved.css = [];
				if (f.isie7mobile || f.isoperamini) return !0;
				f.hasmstouch && a.css(a.ispage ? e("html") : a.win, {
					"-ms-touch-action": "none"
				});
				a.zindex = "auto";
				a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : n() || "auto";
				!a.ispage && "auto" != a.zindex && a.zindex > z && (z = a.zindex);
				a.isie && 0 == a.zindex && "auto" == a.opt.zindex && (a.zindex = "auto");
				if (!a.ispage || !f.cantouch && !f.isieold && !f.isie9mobile) {
					var b = a.docscroll;
					a.ispage && (b = a.haswrapper ? a.win : a.doc);
					f.isie9mobile || a.css(b, {
						"overflow-y": "hidden"
					});
					a.ispage && f.isie7 && ("BODY" ==
						a.doc[0].nodeName ? a.css(e("html"), {
							"overflow-y": "hidden"
						}) : "HTML" == a.doc[0].nodeName && a.css(e("body"), {
							"overflow-y": "hidden"
						}));
					!f.isios || a.ispage || a.haswrapper || a.css(e("body"), {
						"-webkit-overflow-scrolling": "touch"
					});
					var c = e(document.createElement("div"));
					c.css({
						position: "relative",
						top: 0,
						"float": "right",
						width: a.opt.cursorwidth,
						height: "0px",
						"background-color": a.opt.cursorcolor,
						border: a.opt.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": a.opt.cursorborderradius,
						"-moz-border-radius": a.opt.cursorborderradius,
						"border-radius": a.opt.cursorborderradius
					});
					c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
					c.addClass("nicescroll-cursors");
					a.cursor = c;
					var l = e(document.createElement("div"));
					l.attr("id", a.id);
					l.addClass("nicescroll-rails nicescroll-rails-vr");
					var d, h, k = ["left", "right", "top", "bottom"],
						K;
					for (K in k) h = k[K], (d = a.opt.railpadding[h]) ? l.css("padding-" + h, d + "px") : a.opt.railpadding[h] = 0;
					l.append(c);
					l.width = Math.max(parseFloat(a.opt.cursorwidth), c.outerWidth());
					l.css({
						width: l.width + "px",
						zIndex: a.zindex,
						background: a.opt.background,
						cursor: "default"
					});
					l.visibility = !0;
					l.scrollable = !0;
					l.align = "left" == a.opt.railalign ? 0 : 1;
					a.rail = l;
					c = a.rail.drag = !1;
					!a.opt.boxzoom || a.ispage || f.isieold || (c = document.createElement("div"), a.bind(c, "click", a.doZoom), a.bind(c, "mouseenter", function () {
						a.zoom.css("opacity", a.opt.cursoropacitymax)
					}), a.bind(c, "mouseleave", function () {
						a.zoom.css("opacity", a.opt.cursoropacitymin)
					}), a.zoom = e(c), a.zoom.css({
						cursor: "pointer",
						"z-index": a.zindex,
						backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
						height: 18,
						width: 18,
						backgroundPosition: "0px 0px"
					}), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), f.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function (b) {
						1.5 < b.scale && a.doZoomIn(b);
						.8 > b.scale && a.doZoomOut(b);
						return a.cancelEvent(b)
					}, a.bind(a.win, "gestureend", a.ongesturezoom)));
					a.railh = !1;
					var m;
					a.opt.horizrailenabled && (a.css(b, {
							"overflow-x": "hidden"
						}), c = e(document.createElement("div")), c.css({
							position: "absolute",
							top: 0,
							height: a.opt.cursorwidth,
							width: "0px",
							"background-color": a.opt.cursorcolor,
							border: a.opt.cursorborder,
							"background-clip": "padding-box",
							"-webkit-border-radius": a.opt.cursorborderradius,
							"-moz-border-radius": a.opt.cursorborderradius,
							"border-radius": a.opt.cursorborderradius
						}), f.isieold && c.css({
							overflow: "hidden"
						}), c.wborder = parseFloat(c.outerWidth() - c.innerWidth()), c.addClass("nicescroll-cursors"), a.cursorh = c, m = e(document.createElement("div")), m.attr("id", a.id + "-hr"), m.addClass("nicescroll-rails nicescroll-rails-hr"), m.height = Math.max(parseFloat(a.opt.cursorwidth), c.outerHeight()),
						m.css({
							height: m.height + "px",
							zIndex: a.zindex,
							background: a.opt.background
						}), m.append(c), m.visibility = !0, m.scrollable = !0, m.align = "top" == a.opt.railvalign ? 0 : 1, a.railh = m, a.railh.drag = !1);
					a.ispage ? (l.css({
						position: "fixed",
						top: "0px",
						height: "100%"
					}), l.align ? l.css({
						right: "0px"
					}) : l.css({
						left: "0px"
					}), a.body.append(l), a.railh && (m.css({
						position: "fixed",
						left: "0px",
						width: "100%"
					}), m.align ? m.css({
						bottom: "0px"
					}) : m.css({
						top: "0px"
					}), a.body.append(m))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {
							position: "relative"
						}),
						b = "HTML" == a.win[0].nodeName ? a.body : a.win, e(b).scrollTop(0).scrollLeft(0), a.zoom && (a.zoom.css({
							position: "absolute",
							top: 1,
							right: 0,
							"margin-right": l.width + 4
						}), b.append(a.zoom)), l.css({
							position: "absolute",
							top: 0
						}), l.align ? l.css({
							right: 0
						}) : l.css({
							left: 0
						}), b.append(l), m && (m.css({
							position: "absolute",
							left: 0,
							bottom: 0
						}), m.align ? m.css({
							bottom: 0
						}) : m.css({
							top: 0
						}), b.append(m))) : (a.isfixed = "fixed" == a.win.css("position"), b = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body =
						a.viewport, 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {
							position: "relative"
						})), l.css({
						position: b
					}), a.zoom && a.zoom.css({
						position: b
					}), a.updateScrollBar(), a.body.append(l), a.zoom && a.body.append(a.zoom), a.railh && (m.css({
						position: b
					}), a.body.append(m))), f.isios && a.css(a.win, {
						"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
						"-webkit-touch-callout": "none"
					}), f.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), f.iswebkit && a.opt.disableoutline && a.win.css({
						outline: "none"
					}));
					!1 ===
						a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({
							opacity: a.opt.cursoropacitymax
						}), a.railh && a.railh.css({
							opacity: a.opt.cursoropacitymax
						})) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), f.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)), a.railh && f.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) :
						"cursor" == a.opt.autohidemode ? (a.autohidedom = e().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.railslocked = !1);
					if (f.isie9mobile) a.scrollmom = new M(a), a.onmangotouch = function () {
						var b = a.getScrollTop(),
							c = a.getScrollLeft();
						if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx) return !0;
						var g = b - a.mangotouch.sy,
							f = c - a.mangotouch.sx;
						if (0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
							var d = 0 > g ? -1 : 1,
								l = 0 > f ? -1 : 1,
								e = +new Date;
							a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
							80 < e - a.mangotouch.tm || a.mangotouch.dry != d || a.mangotouch.drx != l ? (a.scrollmom.stop(), a.scrollmom.reset(c, b), a.mangotouch.sy = b, a.mangotouch.ly = b, a.mangotouch.sx = c, a.mangotouch.lx = c, a.mangotouch.dry = d, a.mangotouch.drx = l, a.mangotouch.tm = e) : (a.scrollmom.stop(), a.scrollmom.update(a.mangotouch.sx - f, a.mangotouch.sy - g), a.mangotouch.tm = e, g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c)), a.mangotouch.ly = b, a.mangotouch.lx = c, 2 < g && (a.mangotouch.lazy =
								setTimeout(function () {
									a.mangotouch.lazy = !1;
									a.mangotouch.dry = 0;
									a.mangotouch.drx = 0;
									a.mangotouch.tm = 0;
									a.scrollmom.doMomentum(30)
								}, 100)))
						}
					}, l = a.getScrollTop(), m = a.getScrollLeft(), a.mangotouch = {
						sy: l,
						ly: l,
						dry: 0,
						sx: m,
						lx: m,
						drx: 0,
						lazy: !1,
						tm: 0
					}, a.bind(a.docscroll, "scroll", a.onmangotouch);
					else {
						if (f.cantouch || a.istouchcapable || a.opt.touchbehavior || f.hasmstouch) {
							a.scrollmom = new M(a);
							a.ontouchstart = function (b) {
								if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
								a.hasmoving = !1;
								if (!a.railslocked) {
									var c;
									if (f.hasmstouch)
										for (c = b.target ? b.target : !1; c;) {
											var g = e(c).getNiceScroll();
											if (0 < g.length && g[0].me == a.me) break;
											if (0 < g.length) return !1;
											if ("DIV" == c.nodeName && c.id == a.id) break;
											c = c.parentNode ? c.parentNode : !1
										}
									a.cancelScroll();
									if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return a.stopPropagation(b);
									!("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
									a.forcescreen && (g = b, b = {
											original: b.original ? b.original : b
										}, b.clientX =
										g.screenX, b.clientY = g.screenY);
									a.rail.drag = {
										x: b.clientX,
										y: b.clientY,
										sx: a.scroll.x,
										sy: a.scroll.y,
										st: a.getScrollTop(),
										sl: a.getScrollLeft(),
										pt: 2,
										dl: !1
									};
									if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl = "f";
									else {
										var g = e(window).width(),
											d = e(window).height(),
											d = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - d),
											g = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - g);
										a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < d ? "v" :
											!1 : a.rail.scrollable && !a.railh.scrollable ? 0 < g ? "h" : !1 : !1;
										a.rail.drag.ck || (a.rail.drag.dl = "f")
									}
									a.opt.touchbehavior && a.isiframe && f.isie && (g = a.win.position(), a.rail.drag.x += g.left, a.rail.drag.y += g.top);
									a.hasmoving = !1;
									a.lastmouseup = !1;
									a.scrollmom.reset(b.clientX, b.clientY);
									if (!f.cantouch && !this.istouchcapable && !b.pointerType) {
										if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !a.ispage && f.hasmousecapture && c.setCapture(), a.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick =
											function (b) {
												if (a.hasmoving) return !1;
												c._onclick.call(this, b)
											}), a.cancelEvent(b)) : a.stopPropagation(b);
										/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = {
											tg: c,
											click: !1
										}, a.preventclick = pc)
									}
								}
							};
							a.ontouchend = function (b) {
								if (!a.rail.drag) return !0;
								if (2 == a.rail.drag.pt) {
									if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
									a.scrollmom.doMomentum();
									a.rail.drag = !1;
									if (a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch)) return a.cancelEvent(b)
								} else if (1 ==
									a.rail.drag.pt) return a.onmouseup(b)
							};
							var p = a.opt.touchbehavior && a.isiframe && !f.hasmousecapture;
							a.ontouchmove = function (b, c) {
								if (!a.rail.drag || b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
								if (2 == a.rail.drag.pt) {
									if (f.cantouch && f.isios && "undefined" == typeof b.original) return !0;
									a.hasmoving = !0;
									a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick =
										a.onpreventclick);
									b = e.extend({
										original: b
									}, b);
									"changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
									if (a.forcescreen) {
										var g = b;
										b = {
											original: b.original ? b.original : b
										};
										b.clientX = g.screenX;
										b.clientY = g.screenY
									}
									var d, g = d = 0;
									p && !c && (d = a.win.position(), g = -d.left, d = -d.top);
									var l = b.clientY + d;
									d = l - a.rail.drag.y;
									var h = b.clientX + g,
										w = h - a.rail.drag.x,
										k = a.rail.drag.st - d;
									a.ishwscroll && a.opt.bouncescroll ? 0 > k ? k = Math.round(k / 2) : k > a.page.maxh && (k = a.page.maxh + Math.round((k - a.page.maxh) /
										2)) : (0 > k && (l = k = 0), k > a.page.maxh && (k = a.page.maxh, l = 0));
									var r;
									a.railh && a.railh.scrollable && (r = a.isrtlmode ? w - a.rail.drag.sl : a.rail.drag.sl - w, a.ishwscroll && a.opt.bouncescroll ? 0 > r ? r = Math.round(r / 2) : r > a.page.maxw && (r = a.page.maxw + Math.round((r - a.page.maxw) / 2)) : (0 > r && (h = r = 0), r > a.page.maxw && (r = a.page.maxw, h = 0)));
									g = !1;
									if (a.rail.drag.dl) g = !0, "v" == a.rail.drag.dl ? r = a.rail.drag.sl : "h" == a.rail.drag.dl && (k = a.rail.drag.st);
									else {
										d = Math.abs(d);
										var w = Math.abs(w),
											m = a.opt.directionlockdeadzone;
										if ("v" == a.rail.drag.ck) {
											if (d >
												m && w <= .3 * d) return a.rail.drag = !1, !0;
											w > m && (a.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
										} else if ("h" == a.rail.drag.ck) {
											if (w > m && d <= .3 * w) return a.rail.drag = !1, !0;
											d > m && (a.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
										}
									}
									a.synched("touchmove", function () {
										a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(k), a.scrollmom.update(h, l), a.railh && a.railh.scrollable ? (a.setScrollLeft(r), a.showCursor(k, r)) : a.showCursor(k),
											f.isie10 && document.selection.clear())
									});
									f.ischrome && a.istouchcapable && (g = !1);
									if (g) return a.cancelEvent(b)
								} else if (1 == a.rail.drag.pt) return a.onmousemove(b)
							}
						}
						a.onmousedown = function (b, c) {
							if (!a.rail.drag || 1 == a.rail.drag.pt) {
								if (a.railslocked) return a.cancelEvent(b);
								a.cancelScroll();
								a.rail.drag = {
									x: b.clientX,
									y: b.clientY,
									sx: a.scroll.x,
									sy: a.scroll.y,
									pt: 1,
									hr: !!c
								};
								var g = a.getTarget(b);
								!a.ispage && f.hasmousecapture && g.setCapture();
								a.isiframe && !f.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"),
									a.css(a.doc, {
										"pointer-events": "none"
									}));
								a.hasmoving = !1;
								return a.cancelEvent(b)
							}
						};
						a.onmouseup = function (b) {
							if (a.rail.drag) {
								if (1 != a.rail.drag.pt) return !0;
								f.hasmousecapture && document.releaseCapture();
								a.isiframe && !f.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
								a.rail.drag = !1;
								a.hasmoving && a.triggerScrollEnd();
								return a.cancelEvent(b)
							}
						};
						a.onmousemove = function (b) {
							if (a.rail.drag) {
								if (1 == a.rail.drag.pt) {
									if (f.ischrome && 0 == b.which) return a.onmouseup(b);
									a.cursorfreezed = !0;
									a.hasmoving = !0;
									if (a.rail.drag.hr) {
										a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
										0 > a.scroll.x && (a.scroll.x = 0);
										var c = a.scrollvaluemaxw;
										a.scroll.x > c && (a.scroll.x = c)
									} else a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), c = a.scrollvaluemax, a.scroll.y > c && (a.scroll.y = c);
									a.synched("mousemove", function () {
										a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(), a.rail.drag.hr ? a.hasreversehr ? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollLeft(Math.round(a.scroll.x *
											a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
									});
									return a.cancelEvent(b)
								}
							} else a.checkarea = 0
						};
						if (f.cantouch || a.opt.touchbehavior) a.onpreventclick = function (b) {
								if (a.preventclick) return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(b)
							}, a.bind(a.win, "mousedown", a.ontouchstart), a.onclick = f.isios ? !1 : function (b) {
								return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(b)) : !0
							}, a.opt.grabcursorenabled && f.cursorgrabvalue &&
							(a.css(a.ispage ? a.doc : a.win, {
								cursor: f.cursorgrabvalue
							}), a.css(a.rail, {
								cursor: f.cursorgrabvalue
							}));
						else {
							var q = function (b) {
								if (a.selectiondrag) {
									if (b) {
										var c = a.win.outerHeight();
										b = b.pageY - a.selectiondrag.top;
										0 < b && b < c && (b = 0);
										b >= c && (b -= c);
										a.selectiondrag.df = b
									}
									0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll", function () {
										q()
									}, 50))
								}
							};
							a.hasTextSelected = "getSelection" in document ? function () {
									return 0 < document.getSelection().rangeCount
								} : "selection" in document ?
								function () {
									return "None" != document.selection.type
								} : function () {
									return !1
								};
							a.onselectionstart = function (b) {
								a.ispage || (a.selectiondrag = a.win.offset())
							};
							a.onselectionend = function (b) {
								a.selectiondrag = !1
							};
							a.onselectiondrag = function (b) {
								a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function () {
									q(b)
								}, 250)
							}
						}
						f.hasw3ctouch ? (a.css(a.rail, {
							"touch-action": "none"
						}), a.css(a.cursor, {
							"touch-action": "none"
						}), a.bind(a.win, "pointerdown", a.ontouchstart), a.bind(document, "pointerup", a.ontouchend), a.bind(document,
							"pointermove", a.ontouchmove)) : f.hasmstouch ? (a.css(a.rail, {
							"-ms-touch-action": "none"
						}), a.css(a.cursor, {
							"-ms-touch-action": "none"
						}), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function (a) {
							a.preventDefault()
						}), a.bind(a.cursor, "contextmenu", function (a) {
							a.preventDefault()
						})) : this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document,
							"touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
						if (a.opt.cursordragontouch || !f.cantouch && !a.opt.touchbehavior) a.rail.css({
							cursor: "default"
						}), a.railh && a.railh.css({
							cursor: "default"
						}), a.jqbind(a.rail, "mouseenter", function () {
							if (!a.ispage && !a.win.is(":visible")) return !1;
							a.canshowonmouseevent && a.showCursor();
							a.rail.active = !0
						}), a.jqbind(a.rail, "mouseleave", function () {
							a.rail.active = !1;
							a.rail.drag || a.hideCursor()
						}), a.opt.sensitiverail && (a.bind(a.rail, "click", function (b) {
							a.doRailClick(b,
								!1, !1)
						}), a.bind(a.rail, "dblclick", function (b) {
							a.doRailClick(b, !0, !1)
						}), a.bind(a.cursor, "click", function (b) {
							a.cancelEvent(b)
						}), a.bind(a.cursor, "dblclick", function (b) {
							a.cancelEvent(b)
						})), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
							if (!a.ispage && !a.win.is(":visible")) return !1;
							a.canshowonmouseevent && a.showCursor();
							a.rail.active = !0
						}), a.jqbind(a.railh, "mouseleave", function () {
							a.rail.active = !1;
							a.rail.drag || a.hideCursor()
						}), a.opt.sensitiverail && (a.bind(a.railh, "click", function (b) {
							a.doRailClick(b, !1,
								!0)
						}), a.bind(a.railh, "dblclick", function (b) {
							a.doRailClick(b, !0, !0)
						}), a.bind(a.cursorh, "click", function (b) {
							a.cancelEvent(b)
						}), a.bind(a.cursorh, "dblclick", function (b) {
							a.cancelEvent(b)
						})));
						f.cantouch || a.opt.touchbehavior ? (a.bind(f.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click", a.onclick), a.opt.cursordragontouch && (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.cursorh && a.bind(a.cursorh,
							"mousedown",
							function (b) {
								a.onmousedown(b, !0)
							}), a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup))) : (a.bind(f.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.railh && (a.bind(a.cursorh, "mousedown", function (b) {
							a.onmousedown(b, !0)
						}), a.bind(a.cursorh, "mouseup", a.onmouseup)), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0],
							"mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () {
							a.canshowonmouseevent && a.showCursor();
							a.rail.active = !0
						}), a.jqbind(a.zoom, "mouseleave", function () {
							a.rail.active = !1;
							a.rail.drag || a.hideCursor()
						})));
						a.opt.enablemousewheel && (a.isiframe || a.bind(f.isie && a.ispage ? document : a.win, "mousewheel",
							a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
						a.ispage || f.cantouch || /HTML|^BODY/.test(a.win[0].nodeName) || (a.win.attr("tabindex") || a.win.attr({
							tabindex: O++
						}), a.jqbind(a.win, "focus", function (b) {
							A = a.getTarget(b).id || !0;
							a.hasfocus = !0;
							a.canshowonmouseevent && a.noticeCursor()
						}), a.jqbind(a.win, "blur", function (b) {
							A = !1;
							a.hasfocus = !1
						}), a.jqbind(a.win, "mouseenter", function (b) {
							E = a.getTarget(b).id || !0;
							a.hasmousefocus = !0;
							a.canshowonmouseevent &&
								a.noticeCursor()
						}), a.jqbind(a.win, "mouseleave", function () {
							E = !1;
							a.hasmousefocus = !1;
							a.rail.drag || a.hideCursor()
						}))
					}
					a.onkeypress = function (b) {
						if (a.railslocked && 0 == a.page.maxh) return !0;
						b = b ? b : window.e;
						var c = a.getTarget(b);
						if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp) || e(c).attr("contenteditable")) return !0;
						if (a.hasfocus || a.hasmousefocus && !A || a.ispage && !A && !E) {
							c = b.keyCode;
							if (a.railslocked && 27 != c) return a.cancelEvent(b);
							var g = b.ctrlKey ||
								!1,
								d = b.shiftKey || !1,
								f = !1;
							switch (c) {
								case 38:
								case 63233:
									a.doScrollBy(72);
									f = !0;
									break;
								case 40:
								case 63235:
									a.doScrollBy(-72);
									f = !0;
									break;
								case 37:
								case 63232:
									a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), f = !0);
									break;
								case 39:
								case 63234:
									a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), f = !0);
									break;
								case 33:
								case 63276:
									a.doScrollBy(a.view.h);
									f = !0;
									break;
								case 34:
								case 63277:
									a.doScrollBy(-a.view.h);
									f = !0;
									break;
								case 36:
								case 63273:
									a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
									f = !0;
									break;
								case 35:
								case 63275:
									a.railh &&
										g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
									f = !0;
									break;
								case 32:
									a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), f = !0);
									break;
								case 27:
									a.zoomactive && (a.doZoom(), f = !0)
							}
							if (f) return a.cancelEvent(b)
						}
					};
					a.opt.enablekeyboard && a.bind(document, f.isopera && !f.isopera12 ? "keypress" : "keydown", a.onkeypress);
					a.bind(document, "keydown", function (b) {
						b.ctrlKey && (a.wheelprevented = !0)
					});
					a.bind(document, "keyup", function (b) {
						b.ctrlKey || (a.wheelprevented = !1)
					});
					a.bind(window, "blur",
						function (b) {
							a.wheelprevented = !1
						});
					a.bind(window, "resize", a.lazyResize);
					a.bind(window, "orientationchange", a.lazyResize);
					a.bind(window, "load", a.lazyResize);
					if (f.ischrome && !a.ispage && !a.haswrapper) {
						var t = a.win.attr("style"),
							l = parseFloat(a.win.css("width")) + 1;
						a.win.css("width", l);
						a.synched("chromefix", function () {
							a.win.attr("style", t)
						})
					}
					a.onAttributeChange = function (b) {
						a.lazyResize(a.isieold ? 250 : 30)
					};
					!1 !== x && (a.observerbody = new x(function (b) {
						b.forEach(function (b) {
							if ("attributes" == b.type) return e("body").hasClass("modal-open") &&
								!e.contains(e(".modal-dialog")[0], a.doc[0]) ? a.hide() : a.show()
						});
						if (document.body.scrollHeight != a.page.maxh) return a.lazyResize(30)
					}), a.observerbody.observe(document.body, {
						childList: !0,
						subtree: !0,
						characterData: !1,
						attributes: !0,
						attributeFilter: ["class"]
					}));
					a.ispage || a.haswrapper || (!1 !== x ? (a.observer = new x(function (b) {
						b.forEach(a.onAttributeChange)
					}), a.observer.observe(a.win[0], {
						childList: !0,
						characterData: !1,
						attributes: !0,
						subtree: !1
					}), a.observerremover = new x(function (b) {
						b.forEach(function (b) {
							if (0 < b.removedNodes.length)
								for (var c in b.removedNodes)
									if (a &&
										b.removedNodes[c] == a.win[0]) return a.remove()
						})
					}), a.observerremover.observe(a.win[0].parentNode, {
						childList: !0,
						characterData: !1,
						attributes: !1,
						subtree: !1
					})) : (a.bind(a.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), f.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (b) {
						b.target == a.win[0] && a.remove()
					})));
					!a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
					a.istextarea && (a.bind(a.win, "keydown", a.lazyResize),
						a.bind(a.win, "mouseup", a.lazyResize));
					a.lazyResize(30)
				}
				if ("IFRAME" == this.doc[0].nodeName) {
					var N = function () {
						a.iframexd = !1;
						var b;
						try {
							b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
						} catch (c) {
							a.iframexd = !0, b = !1
						}
						if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
						a.forcescreen = !0;
						a.isiframe && (a.iframe = {
							doc: e(b),
							html: a.doc.contents().find("html")[0],
							body: a.doc.contents().find("body")[0]
						}, a.getContentSize = function () {
							return {
								w: Math.max(a.iframe.html.scrollWidth,
									a.iframe.body.scrollWidth),
								h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
							}
						}, a.docscroll = e(a.iframe.body));
						if (!f.isios && a.opt.iframeautoresize && !a.isiframe) {
							a.win.scrollTop(0);
							a.doc.height("");
							var g = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
							a.doc.height(g)
						}
						a.lazyResize(30);
						f.isie7 && a.css(e(a.iframe.html), {
							"overflow-y": "hidden"
						});
						a.css(e(a.iframe.body), {
							"overflow-y": "hidden"
						});
						f.isios && a.haswrapper && a.css(e(b.body), {
							"-webkit-transform": "translate3d(0,0,0)"
						});
						"contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
						a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
						a.opt.enablekeyboard && a.bind(b, f.isopera ? "keypress" : "keydown", a.onkeypress);
						if (f.cantouch || a.opt.touchbehavior) a.bind(b, "mousedown", a.ontouchstart), a.bind(b, "mousemove", function (b) {
							return a.ontouchmove(b, !0)
						}), a.opt.grabcursorenabled && f.cursorgrabvalue && a.css(e(b.body), {
							cursor: f.cursorgrabvalue
						});
						a.bind(b, "mouseup", a.ontouchend);
						a.zoom &&
							(a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
					};
					this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
						N.call(a.doc[0], !1)
					}, 500);
					a.bind(this.doc, "load", N)
				}
			};
			this.showCursor = function (b, c) {
				a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);
				if (a.rail) {
					a.autohidedom && (a.autohidedom.stop().css({
						opacity: a.opt.cursoropacitymax
					}), a.cursoractive = !0);
					a.rail.drag && 1 == a.rail.drag.pt || ("undefined" != typeof b &&
						!1 !== b && (a.scroll.y = Math.round(1 * b / a.scrollratio.y)), "undefined" != typeof c && (a.scroll.x = Math.round(1 * c / a.scrollratio.x)));
					a.cursor.css({
						height: a.cursorheight,
						top: a.scroll.y
					});
					if (a.cursorh) {
						var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x;
						!a.rail.align && a.rail.visibility ? a.cursorh.css({
							width: a.cursorwidth,
							left: d + a.rail.width
						}) : a.cursorh.css({
							width: a.cursorwidth,
							left: d
						});
						a.cursoractive = !0
					}
					a.zoom && a.zoom.stop().css({
						opacity: a.opt.cursoropacitymax
					})
				}
			};
			this.hideCursor = function (b) {
				a.cursortimeout ||
					!a.rail || !a.autohidedom || a.hasmousefocus && "leave" == a.opt.autohidemode || (a.cursortimeout = setTimeout(function () {
						a.rail.active && a.showonmouseevent || (a.autohidedom.stop().animate({
							opacity: a.opt.cursoropacitymin
						}), a.zoom && a.zoom.stop().animate({
							opacity: a.opt.cursoropacitymin
						}), a.cursoractive = !1);
						a.cursortimeout = 0
					}, b || a.opt.hidecursordelay))
			};
			this.noticeCursor = function (b, c, d) {
				a.showCursor(c, d);
				a.rail.active || a.hideCursor(b)
			};
			this.getContentSize = a.ispage ? function () {
				return {
					w: Math.max(document.body.scrollWidth,
						document.documentElement.scrollWidth),
					h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}
			} : a.haswrapper ? function () {
				return {
					w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
					h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
				}
			} : function () {
				return {
					w: a.docscroll[0].scrollWidth,
					h: a.docscroll[0].scrollHeight
				}
			};
			this.onResize = function (b, c) {
				if (!a || !a.win) return !1;
				if (!a.haswrapper && !a.ispage) {
					if ("none" ==
						a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1;
					a.hidden || a.visibility || a.showRail().showRailHr()
				}
				var d = a.page.maxh,
					f = a.page.maxw,
					e = a.view.h,
					h = a.view.w;
				a.view = {
					w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
					h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
				};
				a.page = c ? c : a.getContentSize();
				a.page.maxh = Math.max(0, a.page.h - a.view.h);
				a.page.maxw = Math.max(0, a.page.w - a.view.w);
				if (a.page.maxh == d && a.page.maxw == f && a.view.w == h && a.view.h == e) {
					if (a.ispage) return a;
					d = a.win.offset();
					if (a.lastposition && (f = a.lastposition, f.top == d.top && f.left == d.left)) return a;
					a.lastposition = d
				}
				0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail && (a.rail.scrollable = !1)) : (a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom, a.rail.scrollable = !0);
				0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh && (a.railh.scrollable = !1)) : (a.page.maxw -= a.opt.railpadding.left +
					a.opt.railpadding.right, a.railh && (a.railh.scrollable = a.opt.horizrailenabled));
				a.railslocked = a.locked || 0 == a.page.maxh && 0 == a.page.maxw;
				if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
				a.hidden || a.visibility ? !a.railh || a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr();
				a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20);
				a.cursorheight = Math.min(a.view.h, Math.round(a.view.h / a.page.h * a.view.h));
				a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight :
					Math.max(a.opt.cursorminheight, a.cursorheight);
				a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w / a.page.w * a.view.w));
				a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
				a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom);
				a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right));
				a.ispage || a.updateScrollBar(a.view);
				a.scrollratio = {
					x: a.page.maxw / a.scrollvaluemaxw,
					y: a.page.maxh / a.scrollvaluemax
				};
				a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
				a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
				return a
			};
			this.resize = a.onResize;
			this.lazyResize = function (b) {
				b = isNaN(b) ? 30 : b;
				a.debounced("resize",
					a.resize, b);
				return a
			};
			this.jqbind = function (b, c, d) {
				a.events.push({
					e: b,
					n: c,
					f: d,
					q: !0
				});
				e(b).bind(c, d)
			};
			this.bind = function (b, c, d, e) {
				var h = "jquery" in b ? b[0] : b;
				"mousewheel" == c ? "onwheel" in a.win ? a._bind(h, "wheel", d, e || !1) : (b = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", p(h, b, d, e || !1), "DOMMouseScroll" == b && p(h, "MozMousePixelScroll", d, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && a._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove",
					function (a) {
						if (a.touches) {
							if (2 > a.touches.length) {
								var b = a.touches.length ? a.touches[0] : a;
								b.original = a;
								d.call(this, b)
							}
						} else a.changedTouches && (b = a.changedTouches[0], b.original = a, d.call(this, b))
					}, e || !1), a._bind(h, c, d, e || !1), f.cantouch && "mouseup" == c && a._bind(h, "touchcancel", d, e || !1)) : a._bind(h, c, function (b) {
					(b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement);
					"pageY" in b || (b.pageX = b.clientX + document.documentElement.scrollLeft, b.pageY = b.clientY + document.documentElement.scrollTop);
					return !1 === d.call(h,
						b) || !1 === e ? a.cancelEvent(b) : !0
				})
			};
			f.haseventlistener ? (this._bind = function (b, c, d, f) {
				a.events.push({
					e: b,
					n: c,
					f: d,
					b: f,
					q: !1
				});
				b.addEventListener(c, d, f || !1)
			}, this.cancelEvent = function (a) {
				if (!a) return !1;
				a = a.original ? a.original : a;
				a.preventDefault();
				a.stopPropagation();
				a.preventManipulation && a.preventManipulation();
				return !1
			}, this.stopPropagation = function (a) {
				if (!a) return !1;
				a = a.original ? a.original : a;
				a.stopPropagation();
				return !1
			}, this._unbind = function (a, c, d, f) {
				a.removeEventListener(c, d, f)
			}) : (this._bind = function (b,
				c, d, f) {
				a.events.push({
					e: b,
					n: c,
					f: d,
					b: f,
					q: !1
				});
				b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d
			}, this.cancelEvent = function (a) {
				a = window.event || !1;
				if (!a) return !1;
				a.cancelBubble = !0;
				a.cancel = !0;
				return a.returnValue = !1
			}, this.stopPropagation = function (a) {
				a = window.event || !1;
				if (!a) return !1;
				a.cancelBubble = !0;
				return !1
			}, this._unbind = function (a, c, d, f) {
				a.detachEvent ? a.detachEvent("on" + c, d) : a["on" + c] = !1
			});
			this.unbindAll = function () {
				for (var b = 0; b < a.events.length; b++) {
					var c = a.events[b];
					c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e,
						c.n, c.f, c.b)
				}
			};
			this.showRail = function () {
				0 == a.page.maxh || !a.ispage && "none" == a.win.css("display") || (a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block"));
				return a
			};
			this.showRailHr = function () {
				if (!a.railh) return a;
				0 == a.page.maxw || !a.ispage && "none" == a.win.css("display") || (a.railh.visibility = !0, a.railh.css("display", "block"));
				return a
			};
			this.hideRail = function () {
				a.visibility = !1;
				a.rail.visibility = !1;
				a.rail.css("display", "none");
				return a
			};
			this.hideRailHr = function () {
				if (!a.railh) return a;
				a.railh.visibility = !1;
				a.railh.css("display", "none");
				return a
			};
			this.show = function () {
				a.hidden = !1;
				a.railslocked = !1;
				return a.showRail().showRailHr()
			};
			this.hide = function () {
				a.hidden = !0;
				a.railslocked = !0;
				return a.hideRail().hideRailHr()
			};
			this.toggle = function () {
				return a.hidden ? a.show() : a.hide()
			};
			this.remove = function () {
				a.stop();
				a.cursortimeout && clearTimeout(a.cursortimeout);
				a.debouncedelayed && clearTimeout(a.debouncedelayed);
				a.doZoomOut();
				a.unbindAll();
				f.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
				!1 !==
					a.observer && a.observer.disconnect();
				!1 !== a.observerremover && a.observerremover.disconnect();
				!1 !== a.observerbody && a.observerbody.disconnect();
				a.events = null;
				a.cursor && a.cursor.remove();
				a.cursorh && a.cursorh.remove();
				a.rail && a.rail.remove();
				a.railh && a.railh.remove();
				a.zoom && a.zoom.remove();
				for (var b = 0; b < a.saved.css.length; b++) {
					var c = a.saved.css[b];
					c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
				}
				a.saved = !1;
				a.me.data("__nicescroll", "");
				var d = e.nicescroll;
				d.each(function (b) {
					if (this && this.id === a.id) {
						delete d[b];
						for (var c = ++b; c < d.length; c++, b++) d[b] = d[c];
						d.length--;
						d.length && delete d[d.length]
					}
				});
				for (var h in a) a[h] = null, delete a[h];
				a = null
			};
			this.scrollstart = function (b) {
				this.onscrollstart = b;
				return a
			};
			this.scrollend = function (b) {
				this.onscrollend = b;
				return a
			};
			this.scrollcancel = function (b) {
				this.onscrollcancel = b;
				return a
			};
			this.zoomin = function (b) {
				this.onzoomin = b;
				return a
			};
			this.zoomout = function (b) {
				this.onzoomout = b;
				return a
			};
			this.isScrollable = function (a) {
				a = a.target ? a.target : a;
				if ("OPTION" == a.nodeName) return !0;
				for (; a &&
					1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
					var c = e(a),
						c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
					a = a.parentNode ? a.parentNode : !1
				}
				return !1
			};
			this.getViewport = function (a) {
				for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
					var c = e(a);
					if (/fixed|absolute/.test(c.css("position"))) return c;
					var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if (/scroll|auto/.test(d) &&
						a.clientHeight != a.scrollHeight || 0 < c.getNiceScroll().length) return c;
					a = a.parentNode ? a.parentNode : !1
				}
				return !1
			};
			this.triggerScrollEnd = function () {
				if (a.onscrollend) {
					var b = a.getScrollLeft(),
						c = a.getScrollTop();
					a.onscrollend.call(a, {
						type: "scrollend",
						current: {
							x: b,
							y: c
						},
						end: {
							x: b,
							y: c
						}
					})
				}
			};
			this.onmousewheel = function (b) {
				if (!a.wheelprevented) {
					if (a.railslocked) return a.debounced("checkunlock", a.resize, 250), !0;
					if (a.rail.drag) return a.cancelEvent(b);
					"auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1);
					if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0;
					var c = +new Date,
						d = !1;
					a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
					a.checkarea = c;
					if (a.nativescrollingarea) return !0;
					if (b = q(b, !1, d)) a.checkarea = 0;
					return b
				}
			};
			this.onmousewheelhr = function (b) {
				if (!a.wheelprevented) {
					if (a.railslocked || !a.railh.scrollable) return !0;
					if (a.rail.drag) return a.cancelEvent(b);
					var c = +new Date,
						d = !1;
					a.opt.preservenativescrolling &&
						a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
					a.checkarea = c;
					return a.nativescrollingarea ? !0 : a.railslocked ? a.cancelEvent(b) : q(b, !0, d)
				}
			};
			this.stop = function () {
				a.cancelScroll();
				a.scrollmon && a.scrollmon.stop();
				a.cursorfreezed = !1;
				a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
				a.noticeCursor();
				return a
			};
			this.getTransitionSpeed = function (b) {
				b = Math.min(Math.round(10 * a.opt.scrollspeed), Math.round(b / 20 * a.opt.scrollspeed));
				return 20 < b ? b : 0
			};
			a.opt.smoothscroll ? a.ishwscroll && f.hastransition &&
				a.opt.usetransition && a.opt.smoothscroll ? (this.prepareTransition = function (b, c) {
						var d = c ? 20 < b ? b : 0 : a.getTransitionSpeed(b),
							e = d ? f.prefixstyle + "transform " + d + "ms ease-out" : "";
						a.lasttransitionstyle && a.lasttransitionstyle == e || (a.lasttransitionstyle = e, a.doc.css(f.transitionstyle, e));
						return d
					}, this.doScrollLeft = function (b, c) {
						var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
						a.doScrollPos(b, d, c)
					}, this.doScrollTop = function (b, c) {
						var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
						a.doScrollPos(d, b, c)
					}, this.doScrollPos =
					function (b, c, d) {
						var e = a.getScrollTop(),
							h = a.getScrollLeft();
						(0 > (a.newscrolly - e) * (c - e) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
						0 == a.opt.bouncescroll && (0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
						if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly) return !1;
						a.newscrolly = c;
						a.newscrollx = b;
						a.newscrollspeed = d || !1;
						if (a.timer) return !1;
						a.timer = setTimeout(function () {
							var d = a.getScrollTop(),
								e = a.getScrollLeft(),
								h = Math.round(Math.sqrt(Math.pow(b - e, 2) + Math.pow(c - d, 2))),
								h = a.newscrollspeed &&
								1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(h);
							a.newscrollspeed && 1 >= a.newscrollspeed && (h *= a.newscrollspeed);
							a.prepareTransition(h, !0);
							a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
							0 < h && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
								type: "scrollstart",
								current: {
									x: e,
									y: d
								},
								request: {
									x: b,
									y: c
								},
								end: {
									x: a.newscrollx,
									y: a.newscrolly
								},
								speed: h
							}), f.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, f.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped &&
								clearTimeout(a.scrollendtrapped), a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, h)), a.timerscroll = {
								bz: new B(d, a.newscrolly, h, 0, 0, .58, 1),
								bh: new B(e, a.newscrollx, h, 0, 0, .58, 1)
							}, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () {
								a.showCursor(a.getScrollTop(), a.getScrollLeft())
							}, 60)));
							a.synched("doScroll-set", function () {
								a.timer = 0;
								a.scrollendtrapped && (a.scrollrunning = !0);
								a.setScrollTop(a.newscrolly);
								a.setScrollLeft(a.newscrollx);
								if (!a.scrollendtrapped) a.onScrollTransitionEnd()
							})
						}, 50)
					}, this.cancelScroll =
					function () {
						if (!a.scrollendtrapped) return !0;
						var b = a.getScrollTop(),
							c = a.getScrollLeft();
						a.scrollrunning = !1;
						f.transitionend || clearTimeout(f.transitionend);
						a.scrollendtrapped = !1;
						a._unbind(a.doc[0], f.transitionend, a.onScrollTransitionEnd);
						a.prepareTransition(0);
						a.setScrollTop(b);
						a.railh && a.setScrollLeft(c);
						a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
						a.timerscroll = !1;
						a.cursorfreezed = !1;
						a.showCursor(b, c);
						return a
					}, this.onScrollTransitionEnd = function () {
						a.scrollendtrapped && a._unbind(a.doc[0],
							f.transitionend, a.onScrollTransitionEnd);
						a.scrollendtrapped = !1;
						a.prepareTransition(0);
						a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
						a.timerscroll = !1;
						var b = a.getScrollTop(),
							c = a.getScrollLeft();
						a.setScrollTop(b);
						a.railh && a.setScrollLeft(c);
						a.noticeCursor(!1, b, c);
						a.cursorfreezed = !1;
						0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
						0 > c ? c = 0 : c > a.page.maxw && (c = a.page.maxw);
						if (b != a.newscrolly || c != a.newscrollx) return a.doScrollPos(c, b, a.opt.snapbackspeed);
						a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
						a.scrollrunning = !1
					}) : (this.doScrollLeft = function (b, c) {
					var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
					a.doScrollPos(b, d, c)
				}, this.doScrollTop = function (b, c) {
					var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
					a.doScrollPos(d, b, c)
				}, this.doScrollPos = function (b, c, d) {
					function f() {
						if (a.cancelAnimationFrame) return !0;
						a.scrollrunning = !0;
						if (q = 1 - q) return a.timer = u(f) || 1;
						var b = 0,
							c, d, e = d = a.getScrollTop();
						if (a.dst.ay) {
							e = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
							c = e - d;
							if (0 > c && e < a.newscrolly ||
								0 < c && e > a.newscrolly) e = a.newscrolly;
							a.setScrollTop(e);
							e == a.newscrolly && (b = 1)
						} else b = 1;
						d = c = a.getScrollLeft();
						if (a.dst.ax) {
							d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
							c = d - c;
							if (0 > c && d < a.newscrollx || 0 < c && d > a.newscrollx) d = a.newscrollx;
							a.setScrollLeft(d);
							d == a.newscrollx && (b += 1)
						} else b += 1;
						2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > e ? e = 0 : e > a.page.maxh && (e = a.page.maxh), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || e != a.newscrolly ? a.doScrollPos(d, e) : a.onscrollend &&
							a.triggerScrollEnd()) : a.timer = u(f) || 1
					}
					c = "undefined" == typeof c || !1 === c ? a.getScrollTop(!0) : c;
					if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
					a.timer && v(a.timer);
					a.timer = 0;
					var e = a.getScrollTop(),
						h = a.getScrollLeft();
					(0 > (a.newscrolly - e) * (c - e) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
					a.newscrolly = c;
					a.newscrollx = b;
					a.bouncescroll && a.rail.visibility || (0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
					a.bouncescroll && a.railh.visibility || (0 > a.newscrollx ? a.newscrollx =
						0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw));
					a.dst = {};
					a.dst.x = b - h;
					a.dst.y = c - e;
					a.dst.px = h;
					a.dst.py = e;
					var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
					a.dst.ax = a.dst.x / k;
					a.dst.ay = a.dst.y / k;
					var n = 0,
						p = k;
					0 == a.dst.x ? (n = e, p = c, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (n = h, p = b, a.dst.ax = 1, a.dst.px = 0);
					k = a.getTransitionSpeed(k);
					d && 1 >= d && (k *= d);
					a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(p, k) : new B(n, p, k, 0, 1, 0, 1) : !1;
					if (!a.timer) {
						(e == a.page.maxh && c >= a.page.maxh || h == a.page.maxw && b >= a.page.maxw) &&
						a.checkContentSize();
						var q = 1;
						a.cancelAnimationFrame = !1;
						a.timer = 1;
						a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
							type: "scrollstart",
							current: {
								x: h,
								y: e
							},
							request: {
								x: b,
								y: c
							},
							end: {
								x: a.newscrollx,
								y: a.newscrolly
							},
							speed: k
						});
						f();
						(e == a.page.maxh && c >= e || h == a.page.maxw && b >= h) && a.checkContentSize();
						a.noticeCursor()
					}
				}, this.cancelScroll = function () {
					a.timer && v(a.timer);
					a.timer = 0;
					a.bzscroll = !1;
					a.scrollrunning = !1;
					return a
				}) : (this.doScrollLeft = function (b, c) {
						var d = a.getScrollTop();
						a.doScrollPos(b, d, c)
					}, this.doScrollTop =
					function (b, c) {
						var d = a.getScrollLeft();
						a.doScrollPos(d, b, c)
					}, this.doScrollPos = function (b, c, d) {
						var f = b > a.page.maxw ? a.page.maxw : b;
						0 > f && (f = 0);
						var e = c > a.page.maxh ? a.page.maxh : c;
						0 > e && (e = 0);
						a.synched("scroll", function () {
							a.setScrollTop(e);
							a.setScrollLeft(f)
						})
					}, this.cancelScroll = function () {});
			this.doScrollBy = function (b, c) {
				var d = 0,
					d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
				if (a.bouncescroll) {
					var f = Math.round(a.view.h / 2);
					d < -f ? d = -f : d > a.page.maxh + f && (d = a.page.maxh +
						f)
				}
				a.cursorfreezed = !1;
				f = a.getScrollTop(!0);
				if (0 > d && 0 >= f) return a.noticeCursor();
				if (d > a.page.maxh && f >= a.page.maxh) return a.checkContentSize(), a.noticeCursor();
				a.doScrollTop(d)
			};
			this.doScrollLeftBy = function (b, c) {
				var d = 0,
					d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
				if (a.bouncescroll) {
					var f = Math.round(a.view.w / 2);
					d < -f ? d = -f : d > a.page.maxw + f && (d = a.page.maxw + f)
				}
				a.cursorfreezed = !1;
				f = a.getScrollLeft(!0);
				if (0 > d && 0 >= f || d > a.page.maxw && f >= a.page.maxw) return a.noticeCursor();
				a.doScrollLeft(d)
			};
			this.doScrollTo = function (b, c) {
				a.cursorfreezed = !1;
				a.doScrollTop(b)
			};
			this.checkContentSize = function () {
				var b = a.getContentSize();
				b.h == a.page.h && b.w == a.page.w || a.resize(!1, b)
			};
			a.onscroll = function (b) {
				a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
					a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
					a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
					a.noticeCursor()
				})
			};
			a.bind(a.docscroll, "scroll", a.onscroll);
			this.doZoomIn = function (b) {
				if (!a.zoomactive) {
					a.zoomactive = !0;
					a.zoomrestore = {
						style: {}
					};
					var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
						d = a.win[0].style,
						h;
					for (h in c) {
						var k = c[h];
						a.zoomrestore.style[k] = "undefined" != typeof d[k] ? d[k] : ""
					}
					a.zoomrestore.style.width = a.win.css("width");
					a.zoomrestore.style.height = a.win.css("height");
					a.zoomrestore.padding = {
						w: a.win.outerWidth() - a.win.width(),
						h: a.win.outerHeight() - a.win.height()
					};
					f.isios4 && (a.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
					a.win.css({
						position: f.isios4 ? "absolute" : "fixed",
						top: 0,
						left: 0,
						"z-index": z + 100,
						margin: "0px"
					});
					c = a.win.css("backgroundColor");
					("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff");
					a.rail.css({
						"z-index": z + 101
					});
					a.zoom.css({
						"z-index": z + 102
					});
					a.zoom.css("backgroundPosition", "0px -18px");
					a.resizeZoom();
					a.onzoomin && a.onzoomin.call(a);
					return a.cancelEvent(b)
				}
			};
			this.doZoomOut = function (b) {
				if (a.zoomactive) return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style),
					f.isios4 && e(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({
						"z-index": a.zindex
					}), a.zoom.css({
						"z-index": a.zindex
					}), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b)
			};
			this.doZoom = function (b) {
				return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
			};
			this.resizeZoom = function () {
				if (a.zoomactive) {
					var b = a.getScrollTop();
					a.win.css({
						width: e(window).width() - a.zoomrestore.padding.w + "px",
						height: e(window).height() - a.zoomrestore.padding.h + "px"
					});
					a.onResize();
					a.setScrollTop(Math.min(a.page.maxh, b))
				}
			};
			this.init();
			e.nicescroll.push(this)
		},
		M = function (e) {
			var c = this;
			this.nc = e;
			this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
			this.snapy = this.snapx = !1;
			this.demuly = this.demulx = 0;
			this.lastscrolly = this.lastscrollx = -1;
			this.timer = this.chky = this.chkx = 0;
			this.time = function () {
				return +new Date
			};
			this.reset = function (e, k) {
				c.stop();
				var d = c.time();
				c.steptime = 0;
				c.lasttime = d;
				c.speedx = 0;
				c.speedy = 0;
				c.lastx = e;
				c.lasty = k;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.update = function (e, k) {
				var d = c.time();
				c.steptime = d - c.lasttime;
				c.lasttime = d;
				var d = k - c.lasty,
					p = e - c.lastx,
					q = c.nc.getScrollTop(),
					a = c.nc.getScrollLeft(),
					q = q + d,
					a = a + p;
				c.snapx = 0 > a || a > c.nc.page.maxw;
				c.snapy = 0 > q || q > c.nc.page.maxh;
				c.speedx = p;
				c.speedy = d;
				c.lastx = e;
				c.lasty = k
			};
			this.stop = function () {
				c.nc.unsynched("domomentum2d");
				c.timer && clearTimeout(c.timer);
				c.timer = 0;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.doSnapy = function (e, k) {
				var d = !1;
				0 > k ? (k = 0, d = !0) : k > c.nc.page.maxh && (k = c.nc.page.maxh, d = !0);
				0 > e ? (e = 0, d = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, d = !0);
				d ? c.nc.doScrollPos(e, k, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd()
			};
			this.doMomentum = function (e) {
				var k = c.time(),
					d = e ? k + e : c.lasttime;
				e = c.nc.getScrollLeft();
				var p = c.nc.getScrollTop(),
					q = c.nc.page.maxh,
					a = c.nc.page.maxw;
				c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
				c.speedy = 0 < q ? Math.min(60, c.speedy) : 0;
				d = d && 60 >= k - d;
				if (0 > p || p > q || 0 > e || e > a) d = !1;
				e = c.speedx && d ? c.speedx : !1;
				if (c.speedy && d && c.speedy || e) {
					var u = Math.max(16, c.steptime);
					50 < u && (e = u / 50, c.speedx *= e, c.speedy *= e, u =
						50);
					c.demulxy = 0;
					c.lastscrollx = c.nc.getScrollLeft();
					c.chkx = c.lastscrollx;
					c.lastscrolly = c.nc.getScrollTop();
					c.chky = c.lastscrolly;
					var f = c.lastscrollx,
						t = c.lastscrolly,
						v = function () {
							var d = 600 < c.time() - k ? .04 : .02;
							c.speedx && (f = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = f, 0 > f || f > a) && (d = .1);
							c.speedy && (t = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = t, 0 > t || t > q) && (d = .1);
							c.demulxy = Math.min(1, c.demulxy + d);
							c.nc.synched("domomentum2d", function () {
								c.speedx && (c.nc.getScrollLeft() !=
									c.chkx && c.stop(), c.chkx = f, c.nc.setScrollLeft(f));
								c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = t, c.nc.setScrollTop(t));
								c.timer || (c.nc.hideCursor(), c.doSnapy(f, t))
							});
							1 > c.demulxy ? c.timer = setTimeout(v, u) : (c.stop(), c.nc.hideCursor(), c.doSnapy(f, t))
						};
					v()
				} else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
			}
		},
		y = e.fn.scrollTop;
	e.cssHooks.pageYOffset = {
		get: function (k, c, h) {
			return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : y.call(k)
		},
		set: function (k, c) {
			var h = e.data(k, "__nicescroll") ||
				!1;
			h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : y.call(k, c);
			return this
		}
	};
	e.fn.scrollTop = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollTop() : y.call(this)
		}
		return this.each(function () {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : y.call(e(this), k)
		})
	};
	var C = e.fn.scrollLeft;
	e.cssHooks.pageXOffset = {
		get: function (k, c, h) {
			return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : C.call(k)
		},
		set: function (k, c) {
			var h = e.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : C.call(k, c);
			return this
		}
	};
	e.fn.scrollLeft = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollLeft() : C.call(this)
		}
		return this.each(function () {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : C.call(e(this), k)
		})
	};
	var D = function (k) {
		var c = this;
		this.length = 0;
		this.name = "nicescrollarray";
		this.each = function (d) {
			for (var e =
					0, h = 0; e < c.length; e++) d.call(c[e], h++);
			return c
		};
		this.push = function (d) {
			c[c.length] = d;
			c.length++
		};
		this.eq = function (d) {
			return c[d]
		};
		if (k)
			for (var h = 0; h < k.length; h++) {
				var n = e.data(k[h], "__nicescroll") || !1;
				n && (this[this.length] = n, this.length++)
			}
		return this
	};
	(function (e, c, h) {
		for (var n = 0; n < c.length; n++) h(e, c[n])
	})(D.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, c) {
		e[c] = function () {
			var e = arguments;
			return this.each(function () {
				this[c].apply(this, e)
			})
		}
	});
	e.fn.getNiceScroll =
		function (k) {
			return "undefined" == typeof k ? new D(this) : this[k] && e.data(this[k], "__nicescroll") || !1
		};
	e.extend(e.expr[":"], {
		nicescroll: function (k) {
			return e.data(k, "__nicescroll") ? !0 : !1
		}
	});
	e.fn.niceScroll = function (k, c) {
		"undefined" != typeof c || "object" != typeof k || "jquery" in k || (c = k, k = !1);
		c = e.extend({}, c);
		var h = new D;
		"undefined" == typeof c && (c = {});
		k && (c.doc = e(k), c.win = e(this));
		var n = !("doc" in c);
		n || "win" in c || (c.win = e(this));
		this.each(function () {
			var d = e(this).data("__nicescroll") || !1;
			d || (c.doc = n ? e(this) : c.doc,
				d = new S(c, e(this)), e(this).data("__nicescroll", d));
			h.push(d)
		});
		return 1 == h.length ? h[0] : h
	};
	window.NiceScroll = {
		getjQuery: function () {
			return e
		}
	};
	e.nicescroll || (e.nicescroll = new D, e.nicescroll.options = J)
});