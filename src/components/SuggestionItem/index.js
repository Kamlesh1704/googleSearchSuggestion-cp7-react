// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, search} = props
  const {suggestion} = details
  const onclickbutton = () => {
    search(suggestion)
  }
  return (
    <li className="li">
      <p>{suggestion}</p>
      <button onClick={onclickbutton} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
