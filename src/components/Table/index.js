import React, { Component } from 'react'
import { tableConfigs } from './config'
import { connect } from 'react-redux'

import { getOrganisations } from '../../redux/search'
import Pagination from './Pagination'
import './index.css'

class Table extends Component {
  state = {
    currentPage: 1,
    perPage: 5
  }

  perPageChnageHandle = (newPerPageValue) => {
    const { currentPage } = this.state
    const { getOrganisations, searchQuery } = this.props

    getOrganisations(searchQuery, currentPage, newPerPageValue)
    this.setState({
      perPage: newPerPageValue
    })
    
  }

  changePageHandle = (newPageNum) => {
    const { perPage } = this.state
    const { searchQuery, getOrganisations } = this.props

    getOrganisations(searchQuery, newPageNum, perPage)
    this.setState({
      currentPage: newPageNum
    })
  }

  render() {
    const { currentPage, perPage } = this.state
    const { items, configValue = null, tableType, organisationsTotalCount, getOrganisations } = this.props
    const titles = tableConfigs[configValue] ? Object.entries(tableConfigs[configValue]) : null
    const totalCount = tableType === 'organisations' ?  organisationsTotalCount : null 
    
    console.log('titles', titles)
    return (
      <>
        <table className="table">
          <thead className="table__row">
          {
            (titles && !!titles.length) && 
            titles.map(([key, titleValue]) => <th className="table__title">{ titleValue }</th>)
          }
          </thead>
          { items.length  && 
            items.map(item => <tr className="table__row"><td className="table__item">{item.name}</td></tr>)
          }
          
          
        </table>
        <Pagination 
          totalCount={totalCount} 
          currentPage={currentPage} 
          perPage={perPage} 
          onPageChange={this.changePageHandle}
          onPerPageChange={this.perPageChnageHandle} 
        />
      </>  
    )
  }
}

const mapStateToProps = (state) => {
  const { searchReducer } = state
  console.log('tableState', state)
  return {
    organisationsTotalCount: searchReducer.totalCount,
    searchQuery: searchReducer.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrganisations: (searchValue, newPageNum, perPage) => getOrganisations(dispatch, searchValue, newPageNum, perPage) 
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)