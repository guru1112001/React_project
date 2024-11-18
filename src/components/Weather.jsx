const Weather = ({temperature}) => {
    
    // let temperature=0;
    if(temperature<15){
      return <h1>Its cold outside</h1>;
    }
    else if (temperature>=15 && temperature<=25 ){
        return <h1>its good outside</h1>
    }
    else if (temperature>25){
        return<h1>its hot outside</h1>;;
    }
    // return(<h1>hi</h1>)
 
};

export default Weather;

// const Weather = () => {
//   return (
//     <div>Weather</div>
//   )
// }

// export default Weather