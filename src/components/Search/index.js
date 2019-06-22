import React, { Component } from 'react'
import Table from '../Table/index'
import { searchValidation} from '../../utils'
import { connect } from 'react-redux'
import { getOrganisations, setSearchQuery } from '../../redux/search'
import MaterialTable from 'material-table'
import './index.css'

class Search extends Component {
  state = {
    searchValue: ''
  }

  formSubmitHandler = (e) => {
    e.preventDefault()
    const { searchValue } = this.state 
    const { getOrganisations, setSearchQuery } = this.props

    if (searchValidation(searchValue)) {
      setSearchQuery(searchValue)
      getOrganisations(searchValue)
    }
  } 

  searchHandler = ({ target }) => {
    const searchValue = target.value

    this.setState({
      searchValue
    })
  }

  render() {
    const { searchValue } = this.state 
    const { organisations } = this.props
    console.log('organisations', organisations)
    return (
      <section className="search">
        <div className="container">
          <form className="search__form" onSubmit={(e) => this.formSubmitHandler(e)}>
            <input 
              className="search__input" 
              value={searchValue} 
              placeholder="Organisation name"
              required 
              onChange={(e) => this.searchHandler(e)} 
            />
            <button 
              type="submit" 
              className="search__btn"
            >
              Search
            </button>
          </form>
          { organisations && <Table items={organisations} configValue="organisationsList" tableType="organisations"/> }
        </div>
      </section>
    )
  }
} 

const mapStateToProps = (state) => {
  const { searchReducer } = state 
  return {
    organisations: searchReducer.organisations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrganisations: (searchValue) => getOrganisations(dispatch, searchValue),
    setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)