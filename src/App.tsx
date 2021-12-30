import './styles.css'
import { useGetPokemonByNameQuery } from './services/pokemon'
import { useSelector } from 'react-redux';

// useGetPokemonByNameQuery('bulbasaur')

// currentData: {},
// data: {},
// endpointName: "getPokemonByName",
// fulfilledTimeStamp: 1639928816836,
// isError: false,
// isFetching: false,
// isLoading: false,
// isSuccess: true,
// isUninitialized: false,
// originalArgs: "bulbasaur",
// refetch: ƒ (),
// requestId: "LQFQnvZGDhk7smw4b0zUH",
// startedTimeStamp: 1639928816794,
// status: "fulfilled",

export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  const someState = useSelector((state) => state?.pokemonApi)

  console.log('someState:', someState);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}
