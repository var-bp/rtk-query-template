import { useSelector } from 'react-redux'
import { useGetListUsersQuery, useCreateUserMutation } from './services/users'
import { selectSomeData } from './store/some-state/slice'

// https://blog.bitsrc.io/frontend-caching-with-redux-toolkit-query-14e008a632b1
// https://wanago.io/2021/12/27/redux-toolkit-query-typescript

const App = () => {
  const { data } = useGetListUsersQuery(1)
  const [createUser, { isLoading }] = useCreateUserMutation()

  const someState = useSelector(selectSomeData)

  const handleClick = () => {
    createUser({
      name: 'morpheus',
      job: 'leader'
    }).then((res) => console.log('useCreateUserMutation:', res))
  }

  console.log('someState:', someState)
  console.log('useGetListUsersQuer:', data)

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create user'}
      </button>
    </div>
  )
}

export default App
