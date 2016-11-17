/**
 * Created by vanraar on 17/11/16.
 */
const fetch = require('node-fetch');

let data = {};
fetch('http://ws.brugis.irisnet.be/geoserver/INSPIREFR/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=INSPIREFR%3AMonuments_classes&outputFormat=JSON&maxFeatures=50',
    { method: 'GET', mode: 'no-cors', cache: 'default' })
    .then((res) => res.json())
    .then((json) => {
        //console.log(json.features.map(function (feature) { return feature.properties.BENAMING_NL;  }).join(', '));
        data = json;
    });

const getMonumentCount = () => data.totalFeatures;
const containsBy = (property, value) => data.features.filter((monument) => monument.properties[property].indexOf(value) > -1);

module.exports = { getMonumentCount, containsBy };
