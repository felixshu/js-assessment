if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        indexOf: function (arr, item) {
            if (Array.prototype.indexOf) {
                return arr.indexOf(item)
            }
            else {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === item) {
                        return i
                    }
                }
                return -1;
            }

        },

        sum: function (arr) {
            var result = 0;
            for (var i = 0; i < arr.length; i++) {
                result += arr[i];
            }
            return result
        },

        remove: function (arr, item) {
            var rmArr = [];

            for (var i = 0; i < arr.length; i++) {
                if (arr[i] !== item) {
                    rmArr.push(arr[i]);
                }
            }
            return rmArr;

        },

        removeWithoutCopy: function (arr, item) {
            var i = 0, len = arr.length;
            for (i; i < len; i++) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                    i = i - 1;
                    len = len - 1;
                }
            }
            return arr;
        },

        append: function (arr, item) {
            arr.push(item);
            return arr;
        },

        truncate: function (arr) {
            arr.pop();
            return arr;
        },

        prepend: function (arr, item) {
            arr.unshift(item);
            return arr;

        },

        curtail: function (arr) {
            arr.shift();
            return arr;
        },

        concat: function (arr1, arr2) {
            return arr1.concat(arr2);
        },

        insert: function (arr, item, index) {
            arr.splice(index, 0, item);
            return arr;
        },

        count: function (arr, item) {
            var result = 0;
            arr.forEach(function (value) {
                if (value === item) {
                    result++;
                }
            });

            return result;
        },

        duplicates: function (arr) {
            var duplicated = [];
            var sorted_arr = arr.sort();
            var obj = {};
            for (var i = 0; i < sorted_arr.length; i++) {
                obj[sorted_arr[i]] = obj[sorted_arr[i]] ? obj[sorted_arr[i]] + 1 : 1;
            }
            for(var item in obj){
                if((item in obj) && obj[item]>1){
                    duplicated.push(item);
                }
            }
            return duplicated;
        },

        square: function (arr) {
            return arr.map(function (x) {
                return x * x
            });
        },

        findAllOccurrences: function (arr, target) {
            var result = [];
            for(var i = 0; i < arr.length; i++){
                if(arr[i] === target){
                    result.push(i);
                }
            }

            return result;
        }
    };
});
