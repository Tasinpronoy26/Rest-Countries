import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">

    
    <Countries></Countries>
    
    </div>
  );
}























// function LoadData (){

//   const [countries, setCountries] = useState([])

//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[])

//   return (
//     <div>
//       <h1>All the rest countries!!!!!</h1>
//       <h2>Total countries: {countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name.common} populations={country.population}></Country>)
//       }
//     </div>
//   )

// }

// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Populations: {props.populations}</h3>
//     </div>
//   )
// }

export default App;
