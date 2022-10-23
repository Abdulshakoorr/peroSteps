// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// // const API_EndPoints = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
// const API_EndPoints = `https://api.openweathermap.org/data/3.0/onecall?`
// const API_Key = `a7cf0a467c1cde538f86f8c54e9ee06d`

// const LaL = () => {
//     const [latitude, setLatitude] = useState("")
//     const [longitude, setLongitude] = useState("")

//     useEffect(()=>{
//         navigator.geolocation.getCurrentPosition((position) =>{
//             console.log(position.coords.latitude);
//             setLatitude(position.coords.latitude)
//             console.log(position.coords.longitude);
//             setLongitude(position.coords.longitude)
//         })
//         axios.get(`${API_EndPoints}lat=${latitude}&log=${longitude}&exclude={part}&appid=${API_Key}`).then((res)=>{
//           console.log(res.data)

//         })
//     },[longitude,latitude])
//   return (
//     <div>LaL</div>
//   )
// }

// export default LaL;