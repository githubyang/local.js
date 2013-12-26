/**
 * local.js
 *
 * Enhanced local storage capabilities to support multiple data types.
 *
 * @author  Joy <anzhengchao@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @version 1.0
 */
;var local = (function() {
    if (typeof window.localStorage == 'undefined') {
        return console.log('The current browser does not support local storage');
    }
    var L,
        class2type = {},
        types = "Boolean Number String Function Array Date RegExp Object Error" . split(" ");

    for (i in types) {
        class2type["[object " + types[i] + "]"] = types[i].toLowerCase()
    }

    /**
     * get data store id
     *
     * @param {string} name
     *
     * @return {string}
     */
    function dataId (name) {
        return 'TYPE_OF_' + name;
    }

    /**
     * get data type
     *
     * @param {mixed} obj
     *
     * @return {string}
     */
    function type (obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"
    }

    /**
     * error log
     *
     * @param {string} info
     *
     * @return {void}
     */
    function error (info) {
        return console.log(info);
    }

    L = {
        prototype: localStorage,
        /**
         * set item
         *
         * @param {string} name
         * @param {mixed}  value
         */
        set: function (name, value) {
            var data_type = type(value);
            if (data_type != 'string') {
                value = JSON.stringify(value);
            }

            localStorage.setItem(name, value);
            localStorage.setItem(dataId(name), data_type);
        },

        /**
         * append to item
         *
         * @param {string} name
         * @param {string} key
         * @param {mixed}  value
         *
         * @return {mixed}
         */
        append: function (name, key, value) {
            var data = this.get(name), data_type = localStorage.getItem(dataId(name));

            if (arguments.length <= 2) {
                value = key;
                key = undefined;
            } else if (type(key) != 'number' || type(key) != 'string') {
                return error('Wrong type of key name');
            }

            switch (data_type) {
                case 'string':
                case 'number':
                    if (type(value) != 'string' && type(value) != 'number') {
                        return error('Strings and string concatenation only. typeof value:' + type(value));
                    }

                    data = data + value;
                    break;
                case 'array':
                    if (arguments.length > 2) {
                        return error('Wrong number of arguments, the array will only accept two parameters.');
                    }
                    data.push(value);
                    break;
                case 'object':
                    if (arguments.length <= 2) {
                        return error('Wrong number of arguments, the object will only accept three parameters.');
                    }

                    data[key] = value;
                    break;
            }
            this.set(name, data);

            return this.get(name);
        },

        /**
         * remove item
         *
         * @param {string} name
         *
         * @return {mixed}
         */
        del: function (name) {
            localStorage.removeItem(name);
        },

        /**
         * get item
         *
         * @param {string} name
         *
         * @return {mixed}
         */
        get: function (name) {
            var data      = localStorage.getItem(name);
            var data_type = localStorage.getItem(dataId(name));
            if (data_type != 'string') {
                return JSON.parse(data);
            }

            return data;
        },

        /**
         * clear all
         *
         * @return {boolean}
         */
        clear: function () {
            localStorage.clear();
        }
    }
    /* alias */
    L.add    = L.set;
    L.update = L.set;

    return L;
})();

window.local = local;
window.L = local;