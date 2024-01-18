import SearchBar from "./search-bar"
import { SearchCard } from "./search-card"

export function SearchLayout() {
    return (
        <SearchBar>
            <div>
                <h1>Search Results</h1>
            </div>
        </SearchBar>
    )
}

export default SearchLayout;