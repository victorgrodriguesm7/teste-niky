import { SearchIcon } from "../icons/SearchIcon";
import './style.css';

const SearchHeader = () => {
    return (
        <header className="search-header">
            <label className="search-bar">
                <input type="text" placeholder="Pesquisar"/>
                <SearchIcon className="search-icon"/>
            </label>
            <div className="header-spacer"/>
        </header>
    )
}

export { 
    SearchHeader
};