const request = require("request")

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)  +'.json?access_token=pk.eyJ1Ijoia3Jpc2huYWR1dHQxNyIsImEiOiJja2NhczV5OWUxbTBiMnNsanp5M3oyeHZuIn0.C0ku2rjkH7XR6cFHtNS1Jg'
    request({ url: url, json  : true}, (error,response)=>{
        if(error){
            callback('Unable to connect to locationn services!')
        }
        else if(response.body.features.length === 0 ){
            callback('Unable to find location. Try another search.')
        }
        else{
           callback(undefined,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
           }) 
        }
    })
}


module.exports =  geocode