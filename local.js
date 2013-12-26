var Local = (function() {
    var L;

    function getTypeId (name) {
        return 'TYPE_OF_' + name;
    }

    L = {

        /**
         * set item
         *
         * @param {string} name
         * @param {mixed}  value
         */
        set: function (name, value) {
            var data_type = typeof value;
            if ( data_type != 'string') {
                value = JSON.stringify(value);
            }

            localStorage.setItem(name, value);
            localStorage.setItem(getTypeId(name), data_type);

            return value;
        }

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
            var data = this.get(name), type = this.get(getTypeId(name));

            if (arguments.length > 2) {
                value = key;
                key = undefined;
            }

            if (typeof value == 'string' && type == 'string') {
                data = data + value;
            } else if (key && ) {

            }

            if (arguments.length > 2) {
                data[appendName] = appendValue;
            } else {
                data.push(appendName);
            }

            setData(data);

            return data;
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

            return name;
        },

        /**
         * get item
         *
         * @param {string} name
         *
         * @return {mixed}
         */
        get: function (name) {
            var data = localStorage.getItem(name);
            var data_type = localStorage.getItem(getTypeId(name));
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
            return localStorage.clear();
        },

        add: this.set,
        update: this.set,
    }

    return L;

})(Local);

window.local = Local;
window.Local = Local;
window.L = Local;