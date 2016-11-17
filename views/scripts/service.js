(function (parent) {

    parent.API = function () {

        function toJson (response) { return response.json(); }

        function getMonumentCount () {
            return fetch('/api/monuments/count', {}).then(toJson);
        }

        function searchMonumentByName (value) {
            return fetch('api/monuments/by/name/'+encodeURIComponent(value), {}).then(toJson);
        }

        return {
            getMonumentCount: getMonumentCount,
            searchMonumentByName: searchMonumentByName
        };
    }();

})(window);