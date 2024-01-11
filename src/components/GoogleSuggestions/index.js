// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'
const initialsuggestionList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionsList: initialsuggestionList}

  search = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onchange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    const searchresult = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="cardd">
          <div className="iconsearch">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search_icon"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.onchange}
              value={searchInput}
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul>
            {searchresult.map(eachsearch => (
              <SuggestionItem
                details={eachsearch}
                search={this.search}
                Key={eachsearch.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
