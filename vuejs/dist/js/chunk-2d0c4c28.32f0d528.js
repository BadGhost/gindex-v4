(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0c4c28"],
    {
        "3bcf": function (n, t, e) {
            "use strict";
            e.r(t);
            var o = function () {
                    var n = this,
                        t = n.$createElement,
                        e = n._self._c || t;
                    return e("div", { staticClass: "content", domProps: { innerHTML: n._s(n.content) } });
                },
                c = [],
                s = e("45d8"),
                r = e("5d44"),
                i = e.n(r),
                a = {
                    props: { option: {} },
                    watch: {
                        option: function () {
                            this.render();
                        },
                    },
                    mounted: function () {
                        this.render();
                    },
                    data: function () {
                        return { content: "" };
                    },
                    computed: {
                        defaultContent: function () {
                            return '\n        <center>\n            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>\n            <span class="sr-only">Loading...</span>\n        </center>\n      ';
                        },
                    },
                    components: {},
                    methods: {
                        render: function () {
                            var n = this;
                            this.content = this.defaultContent;
                            var t = new i.a();
                            Object(s["g"])(this.option, function (e) {
                                n.content = t.render(e);
                            });
                        },
                    },
                },
                u = a,
                d = e("2877"),
                f = Object(d["a"])(u, o, c, !1, null, null, null);
            t["default"] = f.exports;
        },
    },
]);