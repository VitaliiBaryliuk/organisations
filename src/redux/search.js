import axios from 'axios'

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
const SET_ORGANISATIONS = 'SET_ORGANISATIONS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

const url = 'https://api.github.com'

export const getOrganisations = (dispatch, searchValue, page = 1, perPage=5) => {
  axios.get(`${url}/search/repositories?q=${searchValue}&page=${page}&per_page=${perPage}`)
  .then(res => {
    dispatch(setTotalCount(res.data.total_count))
    dispatch(setOrganisations(res.data.items))
  })
}

export const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery
})

const setOrganisations = (organisationsList) => ({
  type: SET_ORGANISATIONS,
  payload: organisationsList
})

const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  payload: totalCount
})

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: 
      return {
        ...state,
        searchQuery: action.payload
      }
    case SET_ORGANISATIONS: 
      return {
        ...state,
        organisations: action.payload
      }
    case SET_TOTAL_COUNT: 
      return {
        ...state,
        totalCount: action.payload
      }  
    default: 
      return state
  }
}

export default searchReducer