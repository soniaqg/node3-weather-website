const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic29uaWExMjMzMzM0NTYiLCJhIjoiY2tqOGh0czgwMXA3ZTJzbnEya2ExeWR5MSJ9.l5NdxfvKUS0H1CPNOH2VgQ'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode