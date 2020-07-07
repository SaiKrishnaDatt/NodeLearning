// const request = require('request')
// const url = 'http://api.weatherstack.com/current?access_key=6e28375b249ce36dd97bcd9df60e75b8&query=karimnagar#'
// // request({url :url },(error,response)=> {
// //     const data = JSON.parse(response.body)
// //     console.log(data.current)
// // })
// request({url :url , json :true},(error,response)=> {
//     if(error){
//     console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('It is currently '+response.body.current.temperature + 'degress out')
//     }


 const geocode = require('./utils/geocode')
   
// })
// //Geocoding 
// //Goal : print the lat/long of  your home town
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/karimnagar.json?access_token=pk.eyJ1Ijoia3Jpc2huYWR1dHQxNyIsImEiOiJja2NhczV5OWUxbTBiMnNsanp5M3oyeHZuIn0.C0ku2rjkH7XR6cFHtNS1Jg'
// request({url: geocodeURL,json : true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to locationn services!')
//     }else if(response.body.features.length === 0 ){
//         console.log('Unable to find location. Try another search.')
//     }else{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0] 
//     console.log(latitude,longitude)
//     }
// })


geocode('Goa',(error , data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

geocode('kerala',(error , data)=>{
    console.log('Error', error)
    console.log('Data', data)
})