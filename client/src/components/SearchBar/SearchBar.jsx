import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './SearchBar.css'
const SearchBar = ({filter, setFilter}) => {
  return (
    <div>
      <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size="25" />
            <input type="text"
            placeholder='Search by title/city...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)} />
            <button className="button">Search</button>
          </div>
    </div>
  )
}

export default SearchBar
