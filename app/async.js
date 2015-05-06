if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jquery'], function ($) {
    return {
        async: function (value) {
            var df = $.Deferred();
            setTimeout(function () {
                df.resolve(value);
            }, 20);
            return df.promise();
        },

        manipulateRemoteData: function (url) {
            var df = $.Deferred();

            $.ajax(url)
                .then(function(resp){
                    var people = $.map(resp.people, function(person){
                        return person.name;
                    });
                    df.resolve(people.sort());
                });
            return df.promise();
        }
    };
});
