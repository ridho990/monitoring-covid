/*! For license information please see bundle.js.LICENSE.txt */
(() => {
	var t = {
			145: () => {
				function t(n) {
					return (
						(t =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						t(n)
					);
				}
				function n(n, e) {
					for (var r = 0; r < e.length; r++) {
						var o = e[r];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(
								n,
								(void 0,
								(i = (function (n, e) {
									if ("object" !== t(n) || null === n) return n;
									var r = n[Symbol.toPrimitive];
									if (void 0 !== r) {
										var o = r.call(n, "string");
										if ("object" !== t(o)) return o;
										throw new TypeError(
											"@@toPrimitive must return a primitive value."
										);
									}
									return String(n);
								})(o.key)),
								"symbol" === t(i) ? i : String(i)),
								o
							);
					}
					var i;
				}
				function e(t) {
					var n = "function" == typeof Map ? new Map() : void 0;
					return (
						(e = function (t) {
							if (
								null === t ||
								((e = t),
								-1 === Function.toString.call(e).indexOf("[native code]"))
							)
								return t;
							var e;
							if ("function" != typeof t)
								throw new TypeError(
									"Super expression must either be null or a function"
								);
							if (void 0 !== n) {
								if (n.has(t)) return n.get(t);
								n.set(t, o);
							}
							function o() {
								return r(t, arguments, a(this).constructor);
							}
							return (
								(o.prototype = Object.create(t.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								i(o, t)
							);
						}),
						e(t)
					);
				}
				function r(t, n, e) {
					return (
						(r = o()
							? Reflect.construct.bind()
							: function (t, n, e) {
									var r = [null];
									r.push.apply(r, n);
									var o = new (Function.bind.apply(t, r))();
									return e && i(o, e.prototype), o;
							  }),
						r.apply(null, arguments)
					);
				}
				function o() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				}
				function i(t, n) {
					return (
						(i = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, n) {
									return (t.__proto__ = n), t;
							  }),
						i(t, n)
					);
				}
				function a(t) {
					return (
						(a = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t);
							  }),
						a(t)
					);
				}
				var c = (function (e) {
					!(function (t, n) {
						if ("function" != typeof n && null !== n)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							Object.defineProperty(t, "prototype", { writable: !1 }),
							n && i(t, n);
					})(p, e);
					var r,
						c,
						s,
						l,
						u =
							((s = p),
							(l = o()),
							function () {
								var n,
									e = a(s);
								if (l) {
									var r = a(this).constructor;
									n = Reflect.construct(e, arguments, r);
								} else n = e.apply(this, arguments);
								return (function (n, e) {
									if (e && ("object" === t(e) || "function" == typeof e))
										return e;
									if (void 0 !== e)
										throw new TypeError(
											"Derived constructors may only return object or undefined"
										);
									return (function (t) {
										if (void 0 === t)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return t;
									})(n);
								})(this, n);
							});
					function p() {
						return (
							(function (t, n) {
								if (!(t instanceof n))
									throw new TypeError("Cannot call a class as a function");
							})(this, p),
							u.apply(this, arguments)
						);
					}
					return (
						(r = p),
						(c = [
							{
								key: "country",
								set: function (t) {
									(this._country = t), this.render();
								},
							},
							{
								key: "render",
								value: function () {
									var t = new Date().toLocaleDateString("id-ID", {
										weekday: "long",
										year: "numeric",
										month: "long",
										day: "numeric",
									});
									this.innerHTML =
										'\n            <div class="wrapper-country flex-row-cst">\n\t\t\t\t\t<img src="https://corona.lmao.ninja/assets/img/flags/'
											.concat(
												this._country[1].toLowerCase(),
												'.png" alt="" class="country-img" />\n\t\t\t\t\t<p class="country-name">'
											)
											.concat(this._country[0], " | ")
											.concat(t, "</p>\n\t\t\t</div>\n        ");
								},
							},
						]) && n(r.prototype, c),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						p
					);
				})(e(HTMLElement));
				customElements.define("country-element", c);
			},
			868: () => {
				function t(n) {
					return (
						(t =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						t(n)
					);
				}
				function n(n, e) {
					for (var r = 0; r < e.length; r++) {
						var o = e[r];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(
								n,
								(void 0,
								(i = (function (n, e) {
									if ("object" !== t(n) || null === n) return n;
									var r = n[Symbol.toPrimitive];
									if (void 0 !== r) {
										var o = r.call(n, "string");
										if ("object" !== t(o)) return o;
										throw new TypeError(
											"@@toPrimitive must return a primitive value."
										);
									}
									return String(n);
								})(o.key)),
								"symbol" === t(i) ? i : String(i)),
								o
							);
					}
					var i;
				}
				function e(t) {
					var n = "function" == typeof Map ? new Map() : void 0;
					return (
						(e = function (t) {
							if (
								null === t ||
								((e = t),
								-1 === Function.toString.call(e).indexOf("[native code]"))
							)
								return t;
							var e;
							if ("function" != typeof t)
								throw new TypeError(
									"Super expression must either be null or a function"
								);
							if (void 0 !== n) {
								if (n.has(t)) return n.get(t);
								n.set(t, o);
							}
							function o() {
								return r(t, arguments, a(this).constructor);
							}
							return (
								(o.prototype = Object.create(t.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								i(o, t)
							);
						}),
						e(t)
					);
				}
				function r(t, n, e) {
					return (
						(r = o()
							? Reflect.construct.bind()
							: function (t, n, e) {
									var r = [null];
									r.push.apply(r, n);
									var o = new (Function.bind.apply(t, r))();
									return e && i(o, e.prototype), o;
							  }),
						r.apply(null, arguments)
					);
				}
				function o() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				}
				function i(t, n) {
					return (
						(i = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, n) {
									return (t.__proto__ = n), t;
							  }),
						i(t, n)
					);
				}
				function a(t) {
					return (
						(a = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t);
							  }),
						a(t)
					);
				}
				var c = (function (e) {
					!(function (t, n) {
						if ("function" != typeof n && null !== n)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							Object.defineProperty(t, "prototype", { writable: !1 }),
							n && i(t, n);
					})(p, e);
					var r,
						c,
						s,
						l,
						u =
							((s = p),
							(l = o()),
							function () {
								var n,
									e = a(s);
								if (l) {
									var r = a(this).constructor;
									n = Reflect.construct(e, arguments, r);
								} else n = e.apply(this, arguments);
								return (function (n, e) {
									if (e && ("object" === t(e) || "function" == typeof e))
										return e;
									if (void 0 !== e)
										throw new TypeError(
											"Derived constructors may only return object or undefined"
										);
									return (function (t) {
										if (void 0 === t)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return t;
									})(n);
								})(this, n);
							});
					function p() {
						return (
							(function (t, n) {
								if (!(t instanceof n))
									throw new TypeError("Cannot call a class as a function");
							})(this, p),
							u.apply(this, arguments)
						);
					}
					return (
						(r = p),
						(c = [
							{
								key: "connectedCallback",
								value: function () {
									this.render();
								},
							},
							{
								key: "clickEvent",
								set: function (t) {
									(this._clickEvent = t), this.render();
								},
							},
							{
								key: "value",
								get: function () {
									var t = this.querySelector("#search")
										.value.trim()
										.replace(/\s+/g, "-");
									return console.log(t), t.toLowerCase();
								},
							},
							{
								key: "render",
								value: function () {
									(this.innerHTML =
										'\n\t        <div class="wrapper-search flex-row-cst">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="search"\n\t\t\t\t\t\tname="search"\n\t\t\t\t\t\tid="search"\n\t\t\t\t\t\tplaceholder="Nama negara or id (En)"\n\t\t\t\t\t/>\n\t\t\t\t\t<button type="submit" id="btn-search">\n\t\t\t\t\t\t<i class="fa-solid fa-magnifying-glass"></i>\n\t\t\t\t\t</button>\n\t\t\t</div>\n        '),
										this.querySelector("#btn-search").addEventListener(
											"click",
											this._clickEvent
										);
								},
							},
						]) && n(r.prototype, c),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						p
					);
				})(e(HTMLElement));
				customElements.define("search-bar", c);
			},
			548: () => {
				function t(n) {
					return (
						(t =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						t(n)
					);
				}
				function n(n, e) {
					for (var r = 0; r < e.length; r++) {
						var o = e[r];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(
								n,
								(void 0,
								(i = (function (n, e) {
									if ("object" !== t(n) || null === n) return n;
									var r = n[Symbol.toPrimitive];
									if (void 0 !== r) {
										var o = r.call(n, "string");
										if ("object" !== t(o)) return o;
										throw new TypeError(
											"@@toPrimitive must return a primitive value."
										);
									}
									return String(n);
								})(o.key)),
								"symbol" === t(i) ? i : String(i)),
								o
							);
					}
					var i;
				}
				function e(t) {
					var n = "function" == typeof Map ? new Map() : void 0;
					return (
						(e = function (t) {
							if (
								null === t ||
								((e = t),
								-1 === Function.toString.call(e).indexOf("[native code]"))
							)
								return t;
							var e;
							if ("function" != typeof t)
								throw new TypeError(
									"Super expression must either be null or a function"
								);
							if (void 0 !== n) {
								if (n.has(t)) return n.get(t);
								n.set(t, o);
							}
							function o() {
								return r(t, arguments, a(this).constructor);
							}
							return (
								(o.prototype = Object.create(t.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								i(o, t)
							);
						}),
						e(t)
					);
				}
				function r(t, n, e) {
					return (
						(r = o()
							? Reflect.construct.bind()
							: function (t, n, e) {
									var r = [null];
									r.push.apply(r, n);
									var o = new (Function.bind.apply(t, r))();
									return e && i(o, e.prototype), o;
							  }),
						r.apply(null, arguments)
					);
				}
				function o() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				}
				function i(t, n) {
					return (
						(i = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, n) {
									return (t.__proto__ = n), t;
							  }),
						i(t, n)
					);
				}
				function a(t) {
					return (
						(a = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t);
							  }),
						a(t)
					);
				}
				var c = (function (e) {
					!(function (t, n) {
						if ("function" != typeof n && null !== n)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							Object.defineProperty(t, "prototype", { writable: !1 }),
							n && i(t, n);
					})(p, e);
					var r,
						c,
						s,
						l,
						u =
							((s = p),
							(l = o()),
							function () {
								var n,
									e = a(s);
								if (l) {
									var r = a(this).constructor;
									n = Reflect.construct(e, arguments, r);
								} else n = e.apply(this, arguments);
								return (function (n, e) {
									if (e && ("object" === t(e) || "function" == typeof e))
										return e;
									if (void 0 !== e)
										throw new TypeError(
											"Derived constructors may only return object or undefined"
										);
									return (function (t) {
										if (void 0 === t)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return t;
									})(n);
								})(this, n);
							});
					function p() {
						var t;
						return (
							(function (t, n) {
								if (!(t instanceof n))
									throw new TypeError("Cannot call a class as a function");
							})(this, p),
							((t = u.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
							t
						);
					}
					return (
						(r = p),
						(c = [
							{
								key: "connectedCallback",
								value: function () {
									this.render();
								},
							},
							{
								key: "render",
								value: function () {
									this.shadowDOM.innerHTML =
										'\n\t\t<style>\n\t\t\t* {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\th2 {\n\t\t\t\tfont-size: 2.25rem; /* 36px */\n\t\t\t\tline-height: 3rem; /* 40px */\n\t\t\t\tfont-weight: 700;\n\t\t\t\tcolor: #454F6B;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-weight: 500;\n\t\t\t\tcolor: #454F6B;\n\t\t\t}\n\n\t\t\t.flex-row-cst {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\n\t\t\t.flex-col-cst {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\n\t\t\t.padding-x {\n\t\t\t\tpadding-left: 8%;\n\t\t\t\tpadding-right: 8%;\n\t\t\t}\n\n\t\t\t.padding-top-section {\n\t\t\t\tpadding-top: 5rem;\n\t\t\t}\n\n\t\t\t.section-info {\n\t\t\t\tjustify-content: space-between;\n\t\t\t}\n\n\t\t\t.section-info--content {\n\t\t\t\twidth: 45%;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t\t.section-info-img__mobile {\n\t\t\t\twidth: 45%;\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.section-info-img__mobile img {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.section-info-img {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 45%;\n\t\t\t}\n\n\t\t\t.section-info-img img {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.section-info-title {\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\n\t\t\t.section-info-paragraf {\n\t\t\t\tline-height: 1.725rem;\n\t\t\t}\n\n\t\t\t@media only screen and (max-width: 1025px) {\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 1.602rem;\n\t\t\t\t}\n\n\t\t\t\t.section-info--content {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media only screen and (max-width: 767px) {\n\t\t\t\t.section-info {\n\t\t\t\t\tpadding-top: 3rem;\n\t\t\t\t}\n\n\t\t\t\t.section-info--content {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.section-info-img__mobile {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin-bottom: 1.2rem;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t.section-info-img {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\n\t\t<section class="section-info padding-x flex-row-cst padding-top-section">\n\t\t\t<div class="section-info-img flex-row-cst">\n\t\t\t\t<img src="./images/covid-dunia.svg" alt="covid-dunia" />\n\t\t\t</div>\n\t\t\t<div class="section-info--content flex-col-cst">\n\t\t\t\t<h2 class="section-info-title">Dari Wuhan ke Pandemi Global</h2>\n\t\t\t\t<div class="section-info-img__mobile">\n\t\t\t\t\t<img src="./images/covid-dunia.svg" alt="covid-dunia" />\n\t\t\t\t</div>\n\t\t\t\t<p class="section-info-paragraf">\n\t\t\t\t\tCOVID-19 adalah penyakit menular yang disebabkan oleh jenis\n\t\t\t\t\tcoronavirus yang baru ditemukan. Virus baru dan penyakit yang\n\t\t\t\t\tdisebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan,\n\t\t\t\t\tTiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah\n\t\t\t\t\tpandemi yang terjadi di banyak negara di seluruh dunia.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</section>\n\t\t';
								},
							},
						]) && n(r.prototype, c),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						p
					);
				})(e(HTMLElement));
				customElements.define("section-info", c);
			},
			745: () => {
				function t(n) {
					return (
						(t =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						t(n)
					);
				}
				function n(n, e) {
					for (var r = 0; r < e.length; r++) {
						var o = e[r];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(
								n,
								(void 0,
								(i = (function (n, e) {
									if ("object" !== t(n) || null === n) return n;
									var r = n[Symbol.toPrimitive];
									if (void 0 !== r) {
										var o = r.call(n, "string");
										if ("object" !== t(o)) return o;
										throw new TypeError(
											"@@toPrimitive must return a primitive value."
										);
									}
									return String(n);
								})(o.key)),
								"symbol" === t(i) ? i : String(i)),
								o
							);
					}
					var i;
				}
				function e(t) {
					var n = "function" == typeof Map ? new Map() : void 0;
					return (
						(e = function (t) {
							if (
								null === t ||
								((e = t),
								-1 === Function.toString.call(e).indexOf("[native code]"))
							)
								return t;
							var e;
							if ("function" != typeof t)
								throw new TypeError(
									"Super expression must either be null or a function"
								);
							if (void 0 !== n) {
								if (n.has(t)) return n.get(t);
								n.set(t, o);
							}
							function o() {
								return r(t, arguments, a(this).constructor);
							}
							return (
								(o.prototype = Object.create(t.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								i(o, t)
							);
						}),
						e(t)
					);
				}
				function r(t, n, e) {
					return (
						(r = o()
							? Reflect.construct.bind()
							: function (t, n, e) {
									var r = [null];
									r.push.apply(r, n);
									var o = new (Function.bind.apply(t, r))();
									return e && i(o, e.prototype), o;
							  }),
						r.apply(null, arguments)
					);
				}
				function o() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				}
				function i(t, n) {
					return (
						(i = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, n) {
									return (t.__proto__ = n), t;
							  }),
						i(t, n)
					);
				}
				function a(t) {
					return (
						(a = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t);
							  }),
						a(t)
					);
				}
				var c = (function (e) {
					!(function (t, n) {
						if ("function" != typeof n && null !== n)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							Object.defineProperty(t, "prototype", { writable: !1 }),
							n && i(t, n);
					})(p, e);
					var r,
						c,
						s,
						l,
						u =
							((s = p),
							(l = o()),
							function () {
								var n,
									e = a(s);
								if (l) {
									var r = a(this).constructor;
									n = Reflect.construct(e, arguments, r);
								} else n = e.apply(this, arguments);
								return (function (n, e) {
									if (e && ("object" === t(e) || "function" == typeof e))
										return e;
									if (void 0 !== e)
										throw new TypeError(
											"Derived constructors may only return object or undefined"
										);
									return (function (t) {
										if (void 0 === t)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return t;
									})(n);
								})(this, n);
							});
					function p() {
						var t;
						return (
							(function (t, n) {
								if (!(t instanceof n))
									throw new TypeError("Cannot call a class as a function");
							})(this, p),
							((t = u.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
							t
						);
					}
					return (
						(r = p),
						(c = [
							{
								key: "connectedCallback",
								value: function () {
									this.render();
								},
							},
							{
								key: "render",
								value: function () {
									this.shadowDOM.innerHTML =
										'\n\t\t<style>\n\t\t\t* {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\th2 {\n\t\t\t\tfont-size: 2.25rem; /* 36px */\n\t\t\t\tline-height: 3rem; /* 40px */\n\t\t\t\tfont-weight: 700;\n\t\t\t\tcolor: #454F6B;\n\t\t\t}\n\n            h5 {\n                font-size: 1.125rem;\n                line-height: 2rem;\n                font-weight: 700;\n                color: #454F6B;\n            }\n\n\t\t\tp {\n\t\t\t\tfont-weight: 500;\n\t\t\t\tcolor: #454F6B;\n\t\t\t}\n\n\t\t\t.flex-row-cst {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\n\t\t\t.flex-col-cst {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\n\t\t\t.padding-x {\n\t\t\t\tpadding-left: 8%;\n\t\t\t\tpadding-right: 8%;\n\t\t\t}\n\n            .wrapper-titlenparagraf {\n                text-align: center;\n                margin-bottom: 3rem;\n            }\n\n            .title-section {\n                margin-bottom: 0.5rem;\n            }\n\n\t\t\t.padding-top-section {\n\t\t\t\tpadding-top: 5rem;\n\t\t\t}\n\n\t\t\t.wrapper-card--pencegahan {\n                gap: 2rem;\n            }\n\n            .card-pencegahan {\n                flex: 1;\n                padding: 2rem 1.2rem;\n                text-align: center;\n                box-shadow: 0px 0px 44px -5px rgba(102, 102, 102, 0.1);\n                border-radius: 0.7rem;\n                -webkit-border-radius: 0.7rem;\n                -moz-border-radius: 0.7rem;\n                -ms-border-radius: 0.7rem;\n                -o-border-radius: 0.7rem;\n            }\n\n            .card-pencegahan--img img {\n                height: 14rem;\n                margin: 0 auto;\n            }\n\n            .card-pencegahan--title {\n                margin: 1.2rem 0 0.6rem;\n            }\n\n\t\t\t@media only screen and (max-width: 1025px) {\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 1.602rem;\n\t\t\t\t}\n\n                h5 {\n                        font-size: 1.125rem;\n                }\n\n                .wrapper-card--pencegahan {\n                    flex-wrap: wrap;\n                }\n\n                .card-pencegahan {\n                    flex-basis: 40%;\n                }\n\t\t\t}\n\n\t\t\t@media only screen and (max-width: 640px) {\n                .card-pencegahan {\n                    flex-basis: 100%;\n                }\n\t\t\t}\n\t\t</style>\n\n        <section class="section-pencegahan padding-x padding-top-section">\n\t\t\t<div class="wrapper-titlenparagraf">\n\t\t\t\t<h2 class="title-section">Pencegahan Covid-19</h2>\n\t\t\t\t<p class="paragraf-section">\n\t\t\t\t\tCovid-19 bisa dicegah, dengan menerapkan protokol kesehatan berikut!\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="wrapper-card--pencegahan flex-row-cst">\n\t\t\t\t<div class="card-pencegahan">\n\t\t\t\t\t<div class="card-pencegahan--img">\n\t\t\t\t\t\t<img src="./images/wear-mask.svg" alt="Gunakan Masker" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-pencegahan--content">\n\t\t\t\t\t\t<h5 class="card-pencegahan--title">Gunakan Masker</h5>\n\t\t\t\t\t\t<p class="card-pencegahan--paragraf">\n\t\t\t\t\t\t\tMencegah penyebaran virus dari orang yang mengenakannya kepada\n\t\t\t\t\t\t\torang lain.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="card-pencegahan">\n\t\t\t\t\t<div class="card-pencegahan--img">\n\t\t\t\t\t\t<img src="./images/wash-hand.svg" alt="Cuci Tangan" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-pencegahan--content">\n\t\t\t\t\t\t<h5 class="card-pencegahan--title">Cuci Tangan</h5>\n\t\t\t\t\t\t<p class="card-pencegahan--paragraf">\n\t\t\t\t\t\t\tCuci tangan Anda dengan sabun dan air, atau hand sanitizer\n\t\t\t\t\t\t\tberbasis alkohol.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="card-pencegahan">\n\t\t\t\t\t<div class="card-pencegahan--img">\n\t\t\t\t\t\t<img src="./images/physical-distancing.svg" alt="Jaga Jarak Aman" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-pencegahan--content">\n\t\t\t\t\t\t<h5 class="card-pencegahan--title">Physical Distancing</h5>\n\t\t\t\t\t\t<p class="card-pencegahan--paragraf">\n\t\t\t\t\t\t\tJaga jarak aman, terutama dari seseorang yang sedang batuk atau\n\t\t\t\t\t\t\tbersin.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t';
								},
							},
						]) && n(r.prototype, c),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						p
					);
				})(e(HTMLElement));
				customElements.define("section-pencegahan", c);
			},
			515: () => {
				function t(n) {
					return (
						(t =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
								  }),
						t(n)
					);
				}
				function n(n, e) {
					for (var r = 0; r < e.length; r++) {
						var o = e[r];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(
								n,
								(void 0,
								(i = (function (n, e) {
									if ("object" !== t(n) || null === n) return n;
									var r = n[Symbol.toPrimitive];
									if (void 0 !== r) {
										var o = r.call(n, "string");
										if ("object" !== t(o)) return o;
										throw new TypeError(
											"@@toPrimitive must return a primitive value."
										);
									}
									return String(n);
								})(o.key)),
								"symbol" === t(i) ? i : String(i)),
								o
							);
					}
					var i;
				}
				function e(t) {
					var n = "function" == typeof Map ? new Map() : void 0;
					return (
						(e = function (t) {
							if (
								null === t ||
								((e = t),
								-1 === Function.toString.call(e).indexOf("[native code]"))
							)
								return t;
							var e;
							if ("function" != typeof t)
								throw new TypeError(
									"Super expression must either be null or a function"
								);
							if (void 0 !== n) {
								if (n.has(t)) return n.get(t);
								n.set(t, o);
							}
							function o() {
								return r(t, arguments, a(this).constructor);
							}
							return (
								(o.prototype = Object.create(t.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								i(o, t)
							);
						}),
						e(t)
					);
				}
				function r(t, n, e) {
					return (
						(r = o()
							? Reflect.construct.bind()
							: function (t, n, e) {
									var r = [null];
									r.push.apply(r, n);
									var o = new (Function.bind.apply(t, r))();
									return e && i(o, e.prototype), o;
							  }),
						r.apply(null, arguments)
					);
				}
				function o() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				}
				function i(t, n) {
					return (
						(i = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, n) {
									return (t.__proto__ = n), t;
							  }),
						i(t, n)
					);
				}
				function a(t) {
					return (
						(a = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t);
							  }),
						a(t)
					);
				}
				var c = (function (e) {
					!(function (t, n) {
						if ("function" != typeof n && null !== n)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(t.prototype = Object.create(n && n.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							Object.defineProperty(t, "prototype", { writable: !1 }),
							n && i(t, n);
					})(p, e);
					var r,
						c,
						s,
						l,
						u =
							((s = p),
							(l = o()),
							function () {
								var n,
									e = a(s);
								if (l) {
									var r = a(this).constructor;
									n = Reflect.construct(e, arguments, r);
								} else n = e.apply(this, arguments);
								return (function (n, e) {
									if (e && ("object" === t(e) || "function" == typeof e))
										return e;
									if (void 0 !== e)
										throw new TypeError(
											"Derived constructors may only return object or undefined"
										);
									return (function (t) {
										if (void 0 === t)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return t;
									})(n);
								})(this, n);
							});
					function p() {
						return (
							(function (t, n) {
								if (!(t instanceof n))
									throw new TypeError("Cannot call a class as a function");
							})(this, p),
							u.apply(this, arguments)
						);
					}
					return (
						(r = p),
						(c = [
							{
								key: "percentage",
								value: function (t, n) {
									return (
										(Number(t.replaceAll(".", "")) /
											Number(n.replaceAll(".", ""))) *
										100
									).toFixed(2);
								},
							},
							{
								key: "data",
								set: function (t) {
									(this._data = t), this.render();
								},
							},
							{
								key: "message",
								set: function (t) {
									(this._message = t), this.renderMessage();
								},
							},
							{
								key: "render",
								value: function () {
									var t = this._data.cases.toLocaleString("id-ID"),
										n = this._data.todayCases.toLocaleString("id-ID"),
										e = this._data.deaths.toLocaleString("id-ID"),
										r = this._data.todayDeaths.toLocaleString("id-ID"),
										o = this._data.recovered.toLocaleString("id-ID"),
										i = this._data.todayRecovered.toLocaleString("id-ID"),
										a = this._data.active.toLocaleString("id-ID"),
										c = this._data.critical.toLocaleString("id-ID");
									this.innerHTML =
										'\n\t\t\t\t<div class="wrapper-list-data flex-row-cst">\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Total Kasus</p>\n\t\t\t\t\t\t<h4 class="covid-data--total">'
											.concat(
												t,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">+'
											)
											.concat(
												n,
												'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Kasus Hari Ini</p>\n\t\t\t\t\t\t<h4 class="covid-data--total">'
											)
											.concat(
												n,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">Bertambah '
											)
											.concat(
												n,
												'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Kematian</p>\n\t\t\t\t\t\t<h4 class="covid-data--total red-color">'
											)
											.concat(
												e,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">'
											)
											.concat(
												this.percentage(e, t),
												'% Dari Total Kasus</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Kematian Hari Ini</p>\n\t\t\t\t\t\t<h4 class="covid-data--total red-color">'
											)
											.concat(
												r,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">Bertambah '
											)
											.concat(
												r,
												'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Sudah Pulih</p>\n\t\t\t\t\t\t<h4 class="covid-data--total green-color">'
											)
											.concat(
												o,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">'
											)
											.concat(
												this.percentage(o, t),
												'% Dari Total Kasus</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Pulih Hari Ini</p>\n\t\t\t\t\t\t<h4 class="covid-data--total green-color">'
											)
											.concat(
												i,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">'
											)
											.concat(
												this.percentage(i, a),
												'% Dari Kasus Aktif</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Kasus Aktif</p>\n\t\t\t\t\t\t<h4 class="covid-data--total">'
											)
											.concat(
												a,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">'
											)
											.concat(
												this.percentage(a, t),
												'% Dari Total Kasus</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="covid-data">\n\t\t\t\t\t\t<p class="covid-data--title">Kasus Kritis</p>\n\t\t\t\t\t\t<h4 class="covid-data--total red-color">'
											)
											.concat(
												c,
												'</h4>\n\t\t\t\t\t\t<p class="covid-data--conclusion">'
											)
											.concat(
												this.percentage(c, a),
												"% Dari Kasus Aktif</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        "
											);
								},
							},
							{
								key: "renderMessage",
								value: function () {
									this.innerHTML = '<p class="error-message">'.concat(
										this._message,
										" or search in English</p>"
									);
								},
							},
						]) && n(r.prototype, c),
						Object.defineProperty(r, "prototype", { writable: !1 }),
						p
					);
				})(e(HTMLElement));
				customElements.define("wrapper-data", c);
			},
			175: (t, n, e) => {
				"use strict";
				e.d(n, { Z: () => c });
				var r = e(81),
					o = e.n(r),
					i = e(645),
					a = e.n(i)()(o());
				a.push([
					t.id,
					'/*\n! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n\t/* 1 */\n\tborder-width: 0;\n\t/* 2 */\n\tborder-style: solid;\n\t/* 2 */\n\tborder-color: #e5e7eb;\n\t/* 2 */\n}\n\n::before,\n::after {\n\t--tw-content: "";\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n\tline-height: 1.5;\n\t/* 1 */\n\t-webkit-text-size-adjust: 100%;\n\t/* 2 */\n\t-moz-tab-size: 4;\n\t/* 3 */\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\t/* 3 */\n\tfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n\t\t"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n\t\t"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n\t/* 4 */\n\tfont-feature-settings: normal;\n\t/* 5 */\n\tfont-variation-settings: normal;\n\t/* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n\tmargin: 0;\n\t/* 1 */\n\tline-height: inherit;\n\t/* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n\theight: 0;\n\t/* 1 */\n\tcolor: inherit;\n\t/* 2 */\n\tborder-top-width: 1px;\n\t/* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n\t-webkit-text-decoration: underline dotted;\n\ttext-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tfont-size: inherit;\n\tfont-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n\tcolor: inherit;\n\ttext-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n\t\t"Liberation Mono", "Courier New", monospace;\n\t/* 1 */\n\tfont-size: 1em;\n\t/* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n\ttext-indent: 0;\n\t/* 1 */\n\tborder-color: inherit;\n\t/* 2 */\n\tborder-collapse: collapse;\n\t/* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit;\n\t/* 1 */\n\tfont-feature-settings: inherit;\n\t/* 1 */\n\tfont-variation-settings: inherit;\n\t/* 1 */\n\tfont-size: 100%;\n\t/* 1 */\n\tfont-weight: inherit;\n\t/* 1 */\n\tline-height: inherit;\n\t/* 1 */\n\tcolor: inherit;\n\t/* 1 */\n\tmargin: 0;\n\t/* 2 */\n\tpadding: 0;\n\t/* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n\t-webkit-appearance: button;\n\t/* 1 */\n\tbackground-color: transparent;\n\t/* 2 */\n\tbackground-image: none;\n\t/* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n\toutline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type="search"] {\n\t-webkit-appearance: textfield;\n\t/* 1 */\n\toutline-offset: -2px;\n\t/* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button;\n\t/* 1 */\n\tfont: inherit;\n\t/* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n\tmargin: 0;\n}\n\nfieldset {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nlegend {\n\tpadding: 0;\n}\n\nol,\nul,\nmenu {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n\tpadding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n\tresize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n\topacity: 1;\n\t/* 1 */\n\tcolor: #9ca3af;\n\t/* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n\topacity: 1;\n\t/* 1 */\n\tcolor: #9ca3af;\n\t/* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n\tcursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n\tcursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n\tdisplay: block;\n\t/* 1 */\n\tvertical-align: middle;\n\t/* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n\tmax-width: 100%;\n\theight: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n\tdisplay: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(69 79 107 / var(--tw-text-opacity));\n}\n\n*,\n::before,\n::after {\n\t--tw-border-spacing-x: 0;\n\t--tw-border-spacing-y: 0;\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-pan-x: ;\n\t--tw-pan-y: ;\n\t--tw-pinch-zoom: ;\n\t--tw-scroll-snap-strictness: proximity;\n\t--tw-gradient-from-position: ;\n\t--tw-gradient-via-position: ;\n\t--tw-gradient-to-position: ;\n\t--tw-ordinal: ;\n\t--tw-slashed-zero: ;\n\t--tw-numeric-figure: ;\n\t--tw-numeric-spacing: ;\n\t--tw-numeric-fraction: ;\n\t--tw-ring-inset: ;\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgb(59 130 246 / 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-shadow-colored: 0 0 #0000;\n\t--tw-blur: ;\n\t--tw-brightness: ;\n\t--tw-contrast: ;\n\t--tw-grayscale: ;\n\t--tw-hue-rotate: ;\n\t--tw-invert: ;\n\t--tw-saturate: ;\n\t--tw-sepia: ;\n\t--tw-drop-shadow: ;\n\t--tw-backdrop-blur: ;\n\t--tw-backdrop-brightness: ;\n\t--tw-backdrop-contrast: ;\n\t--tw-backdrop-grayscale: ;\n\t--tw-backdrop-hue-rotate: ;\n\t--tw-backdrop-invert: ;\n\t--tw-backdrop-opacity: ;\n\t--tw-backdrop-saturate: ;\n\t--tw-backdrop-sepia: ;\n}\n\n::backdrop {\n\t--tw-border-spacing-x: 0;\n\t--tw-border-spacing-y: 0;\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-pan-x: ;\n\t--tw-pan-y: ;\n\t--tw-pinch-zoom: ;\n\t--tw-scroll-snap-strictness: proximity;\n\t--tw-gradient-from-position: ;\n\t--tw-gradient-via-position: ;\n\t--tw-gradient-to-position: ;\n\t--tw-ordinal: ;\n\t--tw-slashed-zero: ;\n\t--tw-numeric-figure: ;\n\t--tw-numeric-spacing: ;\n\t--tw-numeric-fraction: ;\n\t--tw-ring-inset: ;\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgb(59 130 246 / 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-shadow-colored: 0 0 #0000;\n\t--tw-blur: ;\n\t--tw-brightness: ;\n\t--tw-contrast: ;\n\t--tw-grayscale: ;\n\t--tw-hue-rotate: ;\n\t--tw-invert: ;\n\t--tw-saturate: ;\n\t--tw-sepia: ;\n\t--tw-drop-shadow: ;\n\t--tw-backdrop-blur: ;\n\t--tw-backdrop-brightness: ;\n\t--tw-backdrop-contrast: ;\n\t--tw-backdrop-grayscale: ;\n\t--tw-backdrop-hue-rotate: ;\n\t--tw-backdrop-invert: ;\n\t--tw-backdrop-opacity: ;\n\t--tw-backdrop-saturate: ;\n\t--tw-backdrop-sepia: ;\n}\n\n.virus-blur-mobile {\n\tposition: absolute;\n\tz-index: -1;\n\t--tw-blur: blur(2px);\n\tfilter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\n\t\tvar(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate)\n\t\tvar(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.card-gejala-awal {\n\tdisplay: flex;\n\tflex: 1 1 0%;\n\tborder-radius: 0.5rem;\n\tpadding: 0.75rem;\n\t--tw-shadow: 0px 0px 44px -5px rgba(102, 102, 102, 0.1);\n\t--tw-shadow-colored: 0px 0px 44px -5px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n\t\tvar(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 640px) {\n\t.card-gejala-awal {\n\t\tflex-basis: 45%;\n\t\tpadding: 1rem;\n\t}\n}\n\n@media (min-width: 1024px) {\n\t.card-gejala-awal {\n\t\tflex-basis: 31%;\n\t}\n}\n\n.card-gejala-awal__img {\n\tmargin-right: 1rem;\n\twidth: 20%;\n}\n\n@media (min-width: 640px) {\n\t.card-gejala-awal__img {\n\t\twidth: 25%;\n\t}\n}\n\n.card-gejala-awal__content {\n\tdisplay: flex;\n\twidth: 78%;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n@media (min-width: 640px) {\n\t.card-gejala-awal__content {\n\t\twidth: 73%;\n\t}\n}\n\n.absolute {\n\tposition: absolute;\n}\n\n.relative {\n\tposition: relative;\n}\n\n.-bottom-16 {\n\tbottom: -4rem;\n}\n\n.-left-10 {\n\tleft: -2.5rem;\n}\n\n.-left-\\[10\\%\\] {\n\tleft: -10%;\n}\n\n.-left-\\[12\\%\\] {\n\tleft: -12%;\n}\n\n.-left-\\[3\\%\\] {\n\tleft: -3%;\n}\n\n.-left-\\[80px\\] {\n\tleft: -80px;\n}\n\n.-left-\\[90px\\] {\n\tleft: -90px;\n}\n\n.-right-\\[90px\\] {\n\tright: -90px;\n}\n\n.-top-\\[10\\%\\] {\n\ttop: -10%;\n}\n\n.-top-\\[140px\\] {\n\ttop: -140px;\n}\n\n.bottom-0 {\n\tbottom: 0px;\n}\n\n.bottom-12 {\n\tbottom: 3rem;\n}\n\n.bottom-14 {\n\tbottom: 3.5rem;\n}\n\n.bottom-\\[20\\%\\] {\n\tbottom: 20%;\n}\n\n.left-\\[20\\%\\] {\n\tleft: 20%;\n}\n\n.left-\\[25\\%\\] {\n\tleft: 25%;\n}\n\n.right-0 {\n\tright: 0px;\n}\n\n.right-\\[5\\%\\] {\n\tright: 5%;\n}\n\n.top-7 {\n\ttop: 1.75rem;\n}\n\n.top-\\[10\\%\\] {\n\ttop: 10%;\n}\n\n.top-\\[10px\\] {\n\ttop: 10px;\n}\n\n.top-\\[8\\%\\] {\n\ttop: 8%;\n}\n\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.my-4 {\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n\n.mt-12 {\n\tmargin-top: 3rem;\n}\n\n.block {\n\tdisplay: block;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.h-full {\n\theight: 100%;\n}\n\n.h-screen {\n\theight: 100vh;\n}\n\n.w-\\[100px\\] {\n\twidth: 100px;\n}\n\n.w-\\[110px\\] {\n\twidth: 110px;\n}\n\n.w-\\[150px\\] {\n\twidth: 150px;\n}\n\n.w-\\[200px\\] {\n\twidth: 200px;\n}\n\n.w-\\[220px\\] {\n\twidth: 220px;\n}\n\n.w-\\[80\\%\\] {\n\twidth: 80%;\n}\n\n.w-\\[80px\\] {\n\twidth: 80px;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n@keyframes bounce {\n\t0%,\n\t100% {\n\t\ttransform: translateY(-25%);\n\t\tanimation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\tanimation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n\t}\n}\n\n.animate-bounce {\n\tanimation: bounce 5s linear infinite;\n}\n\n@keyframes bounce {\n\t0%,\n\t100% {\n\t\ttransform: translateY(-25%);\n\t\tanimation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\tanimation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n\t}\n}\n\n.animate-bounce-4s {\n\tanimation: bounce 4s linear infinite;\n}\n\n@keyframes bounce {\n\t0%,\n\t100% {\n\t\ttransform: translateY(-25%);\n\t\tanimation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\tanimation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n\t}\n}\n\n.animate-bounce-7s {\n\tanimation: bounce 7s linear infinite;\n}\n\n@keyframes bounce {\n\t0%,\n\t100% {\n\t\ttransform: translateY(-25%);\n\t\tanimation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\tanimation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n\t}\n}\n\n.animate-bounce-9s {\n\tanimation: bounce 9s linear infinite;\n}\n\n@keyframes spin {\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.animate-spin-10s {\n\tanimation: spin 10s linear infinite;\n}\n\n@keyframes spin {\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.animate-spin-12s {\n\tanimation: spin 12s linear infinite;\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.items-center {\n\talign-items: center;\n}\n\n.gap-4 {\n\tgap: 1rem;\n}\n\n.overflow-hidden {\n\toverflow: hidden;\n}\n\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n\n.bg-navy {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(69 79 107 / var(--tw-bg-opacity));\n}\n\n.bg-oldgreen {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(75 127 129 / var(--tw-bg-opacity));\n}\n\n.p-12 {\n\tpadding: 3rem;\n}\n\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\n\n.px-\\[5\\%\\] {\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n}\n\n.py-3 {\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\n\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n\n.py-8 {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.font-montserrat {\n\tfont-family: Montserrat, sans-serif;\n}\n\n.text-sm {\n\tfont-size: 0.8rem;\n}\n\n.text-sm-5xl {\n\tfont-size: 1.802rem;\n}\n\n.font-extrabold {\n\tfont-weight: 800;\n}\n\n.font-medium {\n\tfont-weight: 500;\n}\n\n.font-semibold {\n\tfont-weight: 600;\n}\n\n.leading-relaxed {\n\tline-height: 1.625;\n}\n\n.text-red-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.opacity-90 {\n\topacity: 0.9;\n}\n\n.opacity-80 {\n\topacity: 0.8;\n}\n\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n\t--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),\n\t\t0 2px 4px -2px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n\t\tvar(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@keyframes bounce {\n\t0%,\n\t100% {\n\t\ttransform: translateY(-8%);\n\t\tanimation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n\t}\n\n\t50% {\n\t\ttransform: translateY(0);\n\t\tanimation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n\t}\n}\n\n.hover\\:opacity-100:hover {\n\topacity: 1;\n}\n\n.group:hover .group-hover\\:opacity-100 {\n\topacity: 1;\n}\n\n@media (max-width: 641px) {\n\t.max-\\[641px\\]\\:hidden {\n\t\tdisplay: none;\n\t}\n}\n\n@media (max-width: 400px) {\n\t.max-\\[400px\\]\\:bottom-12 {\n\t\tbottom: 3rem;\n\t}\n\n\t.max-\\[400px\\]\\:w-\\[100px\\] {\n\t\twidth: 100px;\n\t}\n\n\t.max-\\[400px\\]\\:w-\\[90px\\] {\n\t\twidth: 90px;\n\t}\n}\n\n@media (min-width: 640px) {\n\t.sm\\:relative {\n\t\tposition: relative;\n\t}\n\n\t.sm\\:mt-20 {\n\t\tmargin-top: 5rem;\n\t}\n\n\t.sm\\:block {\n\t\tdisplay: block;\n\t}\n\n\t.sm\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.sm\\:w-\\[45\\%\\] {\n\t\twidth: 45%;\n\t}\n\n\t.sm\\:w-\\[50\\%\\] {\n\t\twidth: 50%;\n\t}\n\n\t.sm\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.sm\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.sm\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\n\n\t.sm\\:px-\\[8\\%\\] {\n\t\tpadding-left: 8%;\n\t\tpadding-right: 8%;\n\t}\n\n\t.sm\\:py-8 {\n\t\tpadding-top: 2rem;\n\t\tpadding-bottom: 2rem;\n\t}\n}\n\n@media (min-width: 768px) {\n\t.md\\:h-auto {\n\t\theight: auto;\n\t}\n\n\t.md\\:py-12 {\n\t\tpadding-top: 3rem;\n\t\tpadding-bottom: 3rem;\n\t}\n}\n\n@media (min-width: 1024px) {\n\t.lg\\:-left-\\[8\\%\\] {\n\t\tleft: -8%;\n\t}\n\n\t.lg\\:bottom-\\[25\\%\\] {\n\t\tbottom: 25%;\n\t}\n\n\t.lg\\:top-\\[9\\%\\] {\n\t\ttop: 9%;\n\t}\n\n\t.lg\\:mt-4 {\n\t\tmargin-top: 1rem;\n\t}\n\n\t.lg\\:h-screen {\n\t\theight: 100vh;\n\t}\n\n\t.lg\\:w-\\[110px\\] {\n\t\twidth: 110px;\n\t}\n\n\t.lg\\:w-\\[120px\\] {\n\t\twidth: 120px;\n\t}\n\n\t.lg\\:w-\\[190px\\] {\n\t\twidth: 190px;\n\t}\n\n\t.lg\\:w-\\[240px\\] {\n\t\twidth: 240px;\n\t}\n\n\t.lg\\:w-\\[280px\\] {\n\t\twidth: 280px;\n\t}\n\n\t.lg\\:w-\\[40\\%\\] {\n\t\twidth: 40%;\n\t}\n\n\t.lg\\:gap-6 {\n\t\tgap: 1.5rem;\n\t}\n\n\t.lg\\:py-0 {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\n\t.lg\\:text-5xl {\n\t\tfont-size: 2.488rem;\n\t}\n\n\t.lg\\:leading-loose {\n\t\tline-height: 2;\n\t}\n}\n\n@media (min-width: 1280px) {\n\t.xl\\:w-\\[140px\\] {\n\t\twidth: 140px;\n\t}\n\n\t.xl\\:w-\\[150px\\] {\n\t\twidth: 150px;\n\t}\n}\n',
					"",
				]);
				const c = a;
			},
			890: (t, n, e) => {
				"use strict";
				e.d(n, { Z: () => c });
				var r = e(81),
					o = e.n(r),
					i = e(645),
					a = e.n(i)()(o());
				a.push([
					t.id,
					"/* base  */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nh2 {\n\tfont-size: 2.25rem; /* 36px */\n\tline-height: 3rem; /* 40px */\n\tfont-weight: 700;\n}\n\nh3 {\n\tfont-size: 1.728rem;\n}\n\nh4 {\n\tfont-size: 1.44rem;\n}\n\nh5 {\n\tfont-size: 1.125rem;\n\tline-height: 2rem;\n\tfont-weight: 700;\n}\n\np {\n\tfont-weight: 500;\n}\n\n/* utility */\n.flex-row-cst {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.flex-col-cst {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.padding-x {\n\tpadding-left: 8%;\n\tpadding-right: 8%;\n}\n\n.padding-top-section {\n\tpadding-top: 5rem;\n}\n\n.red-color {\n\tcolor: #ff0000;\n}\n\n.green-color {\n\tcolor: #64cf82;\n}\n\n/* komponen */\n.wrapper-titlenparagraf {\n\ttext-align: center;\n\tmargin-bottom: 3rem;\n}\n\n.title-section {\n\tmargin-bottom: 0.5rem;\n}\n\n/* ini bagian data covid */\n.wrapper-covid--data {\n\tpadding: 2rem 2rem 1.8rem;\n\tbox-shadow: 0px 0px 57px -7px rgba(119, 119, 119, 0.12);\n\tborder-radius: 0.8rem;\n\t-webkit-border-radius: 0.8rem;\n\t-moz-border-radius: 0.8rem;\n\t-ms-border-radius: 0.8rem;\n\t-o-border-radius: 0.8rem;\n}\n\n.wrapper-search {\n\tjustify-content: center;\n\tmargin-bottom: 3rem;\n}\n\n#search {\n\twidth: 20rem;\n\tpadding: 0.5rem 1rem;\n\tborder: 1px solid #454f6b;\n\toutline-offset: 0;\n\tborder-radius: 50px;\n\t-webkit-border-radius: 50px;\n\t-moz-border-radius: 50px;\n\t-ms-border-radius: 50px;\n\t-o-border-radius: 50px;\n}\n\n#btn-search {\n\tmargin-left: 1rem;\n\tcolor: #fff;\n\tpadding: 0.5rem 0.8rem;\n\tbackground-color: #4b7f81;\n\tborder-radius: 50px;\n\t-webkit-border-radius: 50px;\n\t-moz-border-radius: 50px;\n\t-ms-border-radius: 50px;\n\t-o-border-radius: 50px;\n}\n\n.wrapper-list-data {\n\tflex-wrap: wrap;\n\tgap: 3rem;\n}\n\n.covid-data {\n\tflex: 1;\n\tflex-basis: 21%;\n\ttext-align: center;\n}\n\n.covid-data--title {\n\topacity: 0.8;\n}\n\n.covid-data--total {\n\tmargin: 0.8rem 0;\n\tfont-weight: 600;\n}\n\n.covid-data--conclusion {\n\topacity: 0.8;\n\tfont-size: 0.9rem;\n}\n\n.wrapper-country {\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-top: 2.5rem;\n}\n\n.country-img {\n\tmargin-right: 0.5rem;\n\theight: 1rem;\n\tborder: 0.5px solid #000;\n}\n\n.country-name {\n\topacity: 0.8;\n}\n\n.error-message {\n\ttext-align: center;\n\topacity: 0.8;\n}\n\n@media only screen and (max-width: 1025px) {\n\th2 {\n\t\tfont-size: 1.602rem;\n\t}\n\n\th3 {\n\t\tfont-size: 1.424rem;\n\t}\n\n\th4 {\n\t\tfont-size: 1.266rem;\n\t}\n\n\th5 {\n\t\tfont-size: 1.125rem;\n\t}\n}\n\n@media only screen and (max-width: 640px) {\n\t#search {\n\t\twidth: 80%;\n\t}\n\n\t.wrapper-covid--data {\n\t\tpadding: 1.8rem 1rem;\n\t}\n\n\t.wrapper-list-data {\n\t\tgap: 2rem;\n\t}\n\n\t.country-name {\n\t\tfont-size: 0.8rem;\n\t}\n\n\t.covid-data {\n\t\tflex-basis: 40%;\n\t}\n}\n",
					"",
				]);
				const c = a;
			},
			645: (t) => {
				"use strict";
				t.exports = function (t) {
					var n = [];
					return (
						(n.toString = function () {
							return this.map(function (n) {
								var e = "",
									r = void 0 !== n[5];
								return (
									n[4] && (e += "@supports (".concat(n[4], ") {")),
									n[2] && (e += "@media ".concat(n[2], " {")),
									r &&
										(e += "@layer".concat(
											n[5].length > 0 ? " ".concat(n[5]) : "",
											" {"
										)),
									(e += t(n)),
									r && (e += "}"),
									n[2] && (e += "}"),
									n[4] && (e += "}"),
									e
								);
							}).join("");
						}),
						(n.i = function (t, e, r, o, i) {
							"string" == typeof t && (t = [[null, t, void 0]]);
							var a = {};
							if (r)
								for (var c = 0; c < this.length; c++) {
									var s = this[c][0];
									null != s && (a[s] = !0);
								}
							for (var l = 0; l < t.length; l++) {
								var u = [].concat(t[l]);
								(r && a[u[0]]) ||
									(void 0 !== i &&
										(void 0 === u[5] ||
											(u[1] = "@layer"
												.concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
												.concat(u[1], "}")),
										(u[5] = i)),
									e &&
										(u[2]
											? ((u[1] = "@media "
													.concat(u[2], " {")
													.concat(u[1], "}")),
											  (u[2] = e))
											: (u[2] = e)),
									o &&
										(u[4]
											? ((u[1] = "@supports ("
													.concat(u[4], ") {")
													.concat(u[1], "}")),
											  (u[4] = o))
											: (u[4] = "".concat(o))),
									n.push(u));
							}
						}),
						n
					);
				};
			},
			81: (t) => {
				"use strict";
				t.exports = function (t) {
					return t[1];
				};
			},
			91: (t) => {
				"use strict";
				t.exports = function (t, n) {
					return (
						n || (n = {}),
						t
							? ((t = String(t.__esModule ? t.default : t)),
							  n.hash && (t += n.hash),
							  n.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t)
									? '"'.concat(t, '"')
									: t)
							: t
					);
				};
			},
			379: (t) => {
				"use strict";
				var n = [];
				function e(t) {
					for (var e = -1, r = 0; r < n.length; r++)
						if (n[r].identifier === t) {
							e = r;
							break;
						}
					return e;
				}
				function r(t, r) {
					for (var i = {}, a = [], c = 0; c < t.length; c++) {
						var s = t[c],
							l = r.base ? s[0] + r.base : s[0],
							u = i[l] || 0,
							p = "".concat(l, " ").concat(u);
						i[l] = u + 1;
						var d = e(p),
							f = {
								css: s[1],
								media: s[2],
								sourceMap: s[3],
								supports: s[4],
								layer: s[5],
							};
						if (-1 !== d) n[d].references++, n[d].updater(f);
						else {
							var h = o(f, r);
							(r.byIndex = c),
								n.splice(c, 0, { identifier: p, updater: h, references: 1 });
						}
						a.push(p);
					}
					return a;
				}
				function o(t, n) {
					var e = n.domAPI(n);
					return (
						e.update(t),
						function (n) {
							if (n) {
								if (
									n.css === t.css &&
									n.media === t.media &&
									n.sourceMap === t.sourceMap &&
									n.supports === t.supports &&
									n.layer === t.layer
								)
									return;
								e.update((t = n));
							} else e.remove();
						}
					);
				}
				t.exports = function (t, o) {
					var i = r((t = t || []), (o = o || {}));
					return function (t) {
						t = t || [];
						for (var a = 0; a < i.length; a++) {
							var c = e(i[a]);
							n[c].references--;
						}
						for (var s = r(t, o), l = 0; l < i.length; l++) {
							var u = e(i[l]);
							0 === n[u].references && (n[u].updater(), n.splice(u, 1));
						}
						i = s;
					};
				};
			},
			569: (t) => {
				"use strict";
				var n = {};
				t.exports = function (t, e) {
					var r = (function (t) {
						if (void 0 === n[t]) {
							var e = document.querySelector(t);
							if (
								window.HTMLIFrameElement &&
								e instanceof window.HTMLIFrameElement
							)
								try {
									e = e.contentDocument.head;
								} catch (t) {
									e = null;
								}
							n[t] = e;
						}
						return n[t];
					})(t);
					if (!r)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					r.appendChild(e);
				};
			},
			216: (t) => {
				"use strict";
				t.exports = function (t) {
					var n = document.createElement("style");
					return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
				};
			},
			565: (t, n, e) => {
				"use strict";
				t.exports = function (t) {
					var n = e.nc;
					n && t.setAttribute("nonce", n);
				};
			},
			795: (t) => {
				"use strict";
				t.exports = function (t) {
					if ("undefined" == typeof document)
						return { update: function () {}, remove: function () {} };
					var n = t.insertStyleElement(t);
					return {
						update: function (e) {
							!(function (t, n, e) {
								var r = "";
								e.supports && (r += "@supports (".concat(e.supports, ") {")),
									e.media && (r += "@media ".concat(e.media, " {"));
								var o = void 0 !== e.layer;
								o &&
									(r += "@layer".concat(
										e.layer.length > 0 ? " ".concat(e.layer) : "",
										" {"
									)),
									(r += e.css),
									o && (r += "}"),
									e.media && (r += "}"),
									e.supports && (r += "}");
								var i = e.sourceMap;
								i &&
									"undefined" != typeof btoa &&
									(r +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
											" */"
										)),
									n.styleTagTransform(r, t, n.options);
							})(n, t, e);
						},
						remove: function () {
							!(function (t) {
								if (null === t.parentNode) return !1;
								t.parentNode.removeChild(t);
							})(n);
						},
					};
				};
			},
			589: (t) => {
				"use strict";
				t.exports = function (t, n) {
					if (n.styleSheet) n.styleSheet.cssText = t;
					else {
						for (; n.firstChild; ) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(t));
					}
				};
			},
			656: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/anosmia.svg";
			},
			869: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/batuk.svg";
			},
			755: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/demam.svg";
			},
			514: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/ilustrasi-covid.svg";
			},
			71: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/sakit-kepala.svg";
			},
			448: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/sesak.svg";
			},
			455: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/tenggorokan-kering.svg";
			},
			505: (t, n, e) => {
				"use strict";
				t.exports = e.p + "images/virus-covid.svg";
			},
		},
		n = {};
	function e(r) {
		var o = n[r];
		if (void 0 !== o) return o.exports;
		var i = (n[r] = { id: r, exports: {} });
		return t[r](i, i.exports, e), i.exports;
	}
	(e.m = t),
		(e.n = (t) => {
			var n = t && t.__esModule ? () => t.default : () => t;
			return e.d(n, { a: n }), n;
		}),
		(e.d = (t, n) => {
			for (var r in n)
				e.o(n, r) &&
					!e.o(t, r) &&
					Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
		}),
		(e.g = (function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (t) {
				if ("object" == typeof window) return window;
			}
		})()),
		(e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
		(() => {
			var t;
			e.g.importScripts && (t = e.g.location + "");
			var n = e.g.document;
			if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
				var r = n.getElementsByTagName("script");
				if (r.length) for (var o = r.length - 1; o > -1 && !t; ) t = r[o--].src;
			}
			if (!t)
				throw new Error(
					"Automatic publicPath is not supported in this browser"
				);
			(t = t
				.replace(/#.*$/, "")
				.replace(/\?.*$/, "")
				.replace(/\/[^\/]+$/, "/")),
				(e.p = t);
		})(),
		(e.b = document.baseURI || self.location.href),
		(e.nc = void 0),
		(() => {
			"use strict";
			var t = e(91),
				n = e.n(t),
				r = new URL(e(514), e.b),
				o = new URL(e(505), e.b),
				i = new URL(e(755), e.b),
				a = new URL(e(869), e.b),
				c = new URL(e(448), e.b),
				s = new URL(e(455), e.b),
				l = new URL(e(656), e.b),
				u = new URL(e(71), e.b);
			n()(r), n()(o);
			n()(i), n()(a), n()(c), n()(s), n()(l), n()(u), e.p, e.p, e.p, e.p;
			var p = e(379),
				d = e.n(p),
				f = e(795),
				h = e.n(f),
				m = e(569),
				b = e.n(m),
				g = e(565),
				y = e.n(g),
				v = e(216),
				w = e.n(v),
				x = e(589),
				k = e.n(x),
				S = e(175),
				j = {};
			(j.styleTagTransform = k()),
				(j.setAttributes = y()),
				(j.insert = b().bind(null, "head")),
				(j.domAPI = h()),
				(j.insertStyleElement = w()),
				d()(S.Z, j),
				S.Z && S.Z.locals && S.Z.locals;
			var O = e(890),
				_ = {};
			function E(t) {
				return (
					(E =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										"function" == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? "symbol"
										: typeof t;
							  }),
					E(t)
				);
			}
			function P(t, n) {
				for (var e = 0; e < n.length; e++) {
					var r = n[e];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(
							t,
							(void 0,
							(o = (function (t, n) {
								if ("object" !== E(t) || null === t) return t;
								var e = t[Symbol.toPrimitive];
								if (void 0 !== e) {
									var r = e.call(t, "string");
									if ("object" !== E(r)) return r;
									throw new TypeError(
										"@@toPrimitive must return a primitive value."
									);
								}
								return String(t);
							})(r.key)),
							"symbol" === E(o) ? o : String(o)),
							r
						);
				}
				var o;
			}
			(_.styleTagTransform = k()),
				(_.setAttributes = y()),
				(_.insert = b().bind(null, "head")),
				(_.domAPI = h()),
				(_.insertStyleElement = w()),
				d()(O.Z, _),
				O.Z && O.Z.locals && O.Z.locals,
				e(548),
				e(868),
				e(515),
				e(145),
				e(745);
			const z = (function () {
				function t() {
					!(function (t, n) {
						if (!(t instanceof n))
							throw new TypeError("Cannot call a class as a function");
					})(this, t);
				}
				var n, e;
				return (
					(n = t),
					(e = [
						{
							key: "searchDataCovid",
							value: function (t) {
								return fetch(
									"https://corona.lmao.ninja/v2/countries/".concat(t)
								)
									.then(function (t) {
										return t.json();
									})
									.then(function (t) {
										return t.country
											? Promise.resolve(t)
											: Promise.reject("".concat(t.message));
									});
							},
						},
					]),
					null && P(n.prototype, null),
					e && P(n, e),
					Object.defineProperty(n, "prototype", { writable: !1 }),
					t
				);
			})();
			function L(t) {
				return (
					(L =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										"function" == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? "symbol"
										: typeof t;
							  }),
					L(t)
				);
			}
			function T() {
				T = function () {
					return n;
				};
				var t,
					n = {},
					e = Object.prototype,
					r = e.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, n, e) {
							t[n] = e.value;
						},
					i = "function" == typeof Symbol ? Symbol : {},
					a = i.iterator || "@@iterator",
					c = i.asyncIterator || "@@asyncIterator",
					s = i.toStringTag || "@@toStringTag";
				function l(t, n, e) {
					return (
						Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						t[n]
					);
				}
				try {
					l({}, "");
				} catch (t) {
					l = function (t, n, e) {
						return (t[n] = e);
					};
				}
				function u(t, n, e, r) {
					var i = n && n.prototype instanceof g ? n : g,
						a = Object.create(i.prototype),
						c = new R(r || []);
					return o(a, "_invoke", { value: _(t, e, c) }), a;
				}
				function p(t, n, e) {
					try {
						return { type: "normal", arg: t.call(n, e) };
					} catch (t) {
						return { type: "throw", arg: t };
					}
				}
				n.wrap = u;
				var d = "suspendedStart",
					f = "suspendedYield",
					h = "executing",
					m = "completed",
					b = {};
				function g() {}
				function y() {}
				function v() {}
				var w = {};
				l(w, a, function () {
					return this;
				});
				var x = Object.getPrototypeOf,
					k = x && x(x(C([])));
				k && k !== e && r.call(k, a) && (w = k);
				var S = (v.prototype = g.prototype = Object.create(w));
				function j(t) {
					["next", "throw", "return"].forEach(function (n) {
						l(t, n, function (t) {
							return this._invoke(n, t);
						});
					});
				}
				function O(t, n) {
					function e(o, i, a, c) {
						var s = p(t[o], t, i);
						if ("throw" !== s.type) {
							var l = s.arg,
								u = l.value;
							return u && "object" == L(u) && r.call(u, "__await")
								? n.resolve(u.__await).then(
										function (t) {
											e("next", t, a, c);
										},
										function (t) {
											e("throw", t, a, c);
										}
								  )
								: n.resolve(u).then(
										function (t) {
											(l.value = t), a(l);
										},
										function (t) {
											return e("throw", t, a, c);
										}
								  );
						}
						c(s.arg);
					}
					var i;
					o(this, "_invoke", {
						value: function (t, r) {
							function o() {
								return new n(function (n, o) {
									e(t, r, n, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function _(n, e, r) {
					var o = d;
					return function (i, a) {
						if (o === h) throw new Error("Generator is already running");
						if (o === m) {
							if ("throw" === i) throw a;
							return { value: t, done: !0 };
						}
						for (r.method = i, r.arg = a; ; ) {
							var c = r.delegate;
							if (c) {
								var s = E(c, r);
								if (s) {
									if (s === b) continue;
									return s;
								}
							}
							if ("next" === r.method) r.sent = r._sent = r.arg;
							else if ("throw" === r.method) {
								if (o === d) throw ((o = m), r.arg);
								r.dispatchException(r.arg);
							} else "return" === r.method && r.abrupt("return", r.arg);
							o = h;
							var l = p(n, e, r);
							if ("normal" === l.type) {
								if (((o = r.done ? m : f), l.arg === b)) continue;
								return { value: l.arg, done: r.done };
							}
							"throw" === l.type &&
								((o = m), (r.method = "throw"), (r.arg = l.arg));
						}
					};
				}
				function E(n, e) {
					var r = e.method,
						o = n.iterator[r];
					if (o === t)
						return (
							(e.delegate = null),
							("throw" === r &&
								n.iterator.return &&
								((e.method = "return"),
								(e.arg = t),
								E(n, e),
								"throw" === e.method)) ||
								("return" !== r &&
									((e.method = "throw"),
									(e.arg = new TypeError(
										"The iterator does not provide a '" + r + "' method"
									)))),
							b
						);
					var i = p(o, n.iterator, e.arg);
					if ("throw" === i.type)
						return (
							(e.method = "throw"), (e.arg = i.arg), (e.delegate = null), b
						);
					var a = i.arg;
					return a
						? a.done
							? ((e[n.resultName] = a.value),
							  (e.next = n.nextLoc),
							  "return" !== e.method && ((e.method = "next"), (e.arg = t)),
							  (e.delegate = null),
							  b)
							: a
						: ((e.method = "throw"),
						  (e.arg = new TypeError("iterator result is not an object")),
						  (e.delegate = null),
						  b);
				}
				function P(t) {
					var n = { tryLoc: t[0] };
					1 in t && (n.catchLoc = t[1]),
						2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
						this.tryEntries.push(n);
				}
				function z(t) {
					var n = t.completion || {};
					(n.type = "normal"), delete n.arg, (t.completion = n);
				}
				function R(t) {
					(this.tryEntries = [{ tryLoc: "root" }]),
						t.forEach(P, this),
						this.reset(!0);
				}
				function C(n) {
					if (n || "" === n) {
						var e = n[a];
						if (e) return e.call(n);
						if ("function" == typeof n.next) return n;
						if (!isNaN(n.length)) {
							var o = -1,
								i = function e() {
									for (; ++o < n.length; )
										if (r.call(n, o)) return (e.value = n[o]), (e.done = !1), e;
									return (e.value = t), (e.done = !0), e;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(L(n) + " is not iterable");
				}
				return (
					(y.prototype = v),
					o(S, "constructor", { value: v, configurable: !0 }),
					o(v, "constructor", { value: y, configurable: !0 }),
					(y.displayName = l(v, s, "GeneratorFunction")),
					(n.isGeneratorFunction = function (t) {
						var n = "function" == typeof t && t.constructor;
						return (
							!!n &&
							(n === y || "GeneratorFunction" === (n.displayName || n.name))
						);
					}),
					(n.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, v)
								: ((t.__proto__ = v), l(t, s, "GeneratorFunction")),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(n.awrap = function (t) {
						return { __await: t };
					}),
					j(O.prototype),
					l(O.prototype, c, function () {
						return this;
					}),
					(n.AsyncIterator = O),
					(n.async = function (t, e, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new O(u(t, e, r, o), i);
						return n.isGeneratorFunction(e)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
							  });
					}),
					j(S),
					l(S, s, "Generator"),
					l(S, a, function () {
						return this;
					}),
					l(S, "toString", function () {
						return "[object Generator]";
					}),
					(n.keys = function (t) {
						var n = Object(t),
							e = [];
						for (var r in n) e.push(r);
						return (
							e.reverse(),
							function t() {
								for (; e.length; ) {
									var r = e.pop();
									if (r in n) return (t.value = r), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(n.values = C),
					(R.prototype = {
						constructor: R,
						reset: function (n) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = "next"),
								(this.arg = t),
								this.tryEntries.forEach(z),
								!n)
							)
								for (var e in this)
									"t" === e.charAt(0) &&
										r.call(this, e) &&
										!isNaN(+e.slice(1)) &&
										(this[e] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (n) {
							if (this.done) throw n;
							var e = this;
							function o(r, o) {
								return (
									(c.type = "throw"),
									(c.arg = n),
									(e.next = r),
									o && ((e.method = "next"), (e.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									c = a.completion;
								if ("root" === a.tryLoc) return o("end");
								if (a.tryLoc <= this.prev) {
									var s = r.call(a, "catchLoc"),
										l = r.call(a, "finallyLoc");
									if (s && l) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!l)
											throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, n) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var o = this.tryEntries[e];
								if (
									o.tryLoc <= this.prev &&
									r.call(o, "finallyLoc") &&
									this.prev < o.finallyLoc
								) {
									var i = o;
									break;
								}
							}
							i &&
								("break" === t || "continue" === t) &&
								i.tryLoc <= n &&
								n <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = n),
								i
									? ((this.method = "next"), (this.next = i.finallyLoc), b)
									: this.complete(a)
							);
						},
						complete: function (t, n) {
							if ("throw" === t.type) throw t.arg;
							return (
								"break" === t.type || "continue" === t.type
									? (this.next = t.arg)
									: "return" === t.type
									? ((this.rval = this.arg = t.arg),
									  (this.method = "return"),
									  (this.next = "end"))
									: "normal" === t.type && n && (this.next = n),
								b
							);
						},
						finish: function (t) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var e = this.tryEntries[n];
								if (e.finallyLoc === t)
									return this.complete(e.completion, e.afterLoc), z(e), b;
							}
						},
						catch: function (t) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var e = this.tryEntries[n];
								if (e.tryLoc === t) {
									var r = e.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										z(e);
									}
									return o;
								}
							}
							throw new Error("illegal catch attempt");
						},
						delegateYield: function (n, e, r) {
							return (
								(this.delegate = { iterator: C(n), resultName: e, nextLoc: r }),
								"next" === this.method && (this.arg = t),
								b
							);
						},
					}),
					n
				);
			}
			function R(t, n, e, r, o, i, a) {
				try {
					var c = t[i](a),
						s = c.value;
				} catch (t) {
					return void e(t);
				}
				c.done ? n(s) : Promise.resolve(s).then(r, o);
			}
			document.addEventListener("DOMContentLoaded", function () {
				var t,
					n = document.querySelector("search-bar"),
					e = document.querySelector("country-element"),
					r = document.querySelector("wrapper-data"),
					o = function () {
						return (t =
							t ||
							((e = T().mark(function t() {
								var e, r;
								return T().wrap(
									function (t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return (
														(t.prev = 0),
														(e = n.value),
														"" == n.value && (e = "indonesia"),
														(t.next = 5),
														z.searchDataCovid(e)
													);
												case 5:
													(r = t.sent),
														a(r),
														i([r.country, r.countryInfo.iso2]),
														(t.next = 13);
													break;
												case 10:
													(t.prev = 10), (t.t0 = t.catch(0)), c(t.t0);
												case 13:
												case "end":
													return t.stop();
											}
									},
									t,
									null,
									[[0, 10]]
								);
							})),
							function () {
								var t = this,
									n = arguments;
								return new Promise(function (r, o) {
									var i = e.apply(t, n);
									function a(t) {
										R(i, r, o, a, c, "next", t);
									}
									function c(t) {
										R(i, r, o, a, c, "throw", t);
									}
									a(void 0);
								});
							})).apply(this, arguments);
						var e;
					},
					i = function (t) {
						e.country = t;
					},
					a = function (t) {
						r.data = t;
					},
					c = function (t) {
						r.message = t;
					};
				o(), (n.clickEvent = o);
			});
		})();
})();
