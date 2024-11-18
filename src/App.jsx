import Footer from "./components/footer";
import Header from "./components/header";
import JSXRules from "./components/JSXRules";
import Greet from "./components/Greet";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Person from "./components/Person";
import Product from "./components/Product";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
const App = () => {
  return (
    
    <div>
      {/* <Weather temperature={0}/> */}
    <UserStatus loggedIn={true} IsAdmin={true}/>
    <Greeting timeoftheday='evening'/>
      {/* <Person name='guru' age={22} /> */}
      {/* <Product name='Laptop' price={599} /> */}
      {/* <Header /> */}
      {/* <Greet /> */}
      {/* <ProductInfo /> */}
      {/* <UserList /> */}
      {/* <ProductList /> */}
      {/* <JSXRules /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App;