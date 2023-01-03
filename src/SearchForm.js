import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {error, query, setQuery} = useGlobalContext();
  return <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h3>Search movies</h3>
    <div className="form-control">
      <input type="text" className="form-input" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
    {error.show && <p className="error">{error.msg}</p>}
  </form>
}

export default SearchForm
