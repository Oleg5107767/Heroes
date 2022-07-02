

//export const heroesFetching = createAction('HEROES_FETCHING')
//export const heroesFetched = createAction('HEROES_FETCHED')
//export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')
//export const heroCreated = createAction('HERO_CREATED')
//export const heroDeleted = createAction('HERO_DELETED')
//export const heroesFetching = () => {
//    return {
//        type: 'HEROES_FETCHING'
//    }
//}

//export const heroesFetched = (heroes) => {
//    return {
//        type: 'HEROES_FETCHED',
//        payload: heroes
//    }
//}

//export const heroesFetchingError = () => {
//    return {
//        type: 'HEROES_FETCHING_ERROR'
//    }
//}


//export const heroCreated = (hero) => {
//    return{
//        type: 'HERO_CREATED',
//        payload: hero
//    }
//}
//
//export const heroDeleted = (id) => {
//    return{
//        type: 'HERO_DELETED',
//        payload: id
//    }
//}




//export const filtersFetching = () => {
//    return {
//        type: 'FILTERS_FETCHING',
//    }
//}
//
//export const filtersFetched = (filters) => {
//    return {
//        type: 'FILTERS_FETCHED',
//        payload: filters
//    }
//}
//
//export const filtersFetchingError = () => {
//    return {
//        type: 'FILTERS_FETCHING_ERROR'
//    }
//}
//
//export const activeFilterChanged = (filters) => {
//    return {
//            type: 'ACTIVE_FILTER_CHANGED',
//            payload: filters
//        }
//}

//export const activeFilterChanged = (filters) => (dispatch) => {
//    setTimeout(() => {
//        dispatch({
//            type: 'ACTIVE_FILTER_CHANGED',
//            payload: filters
//        })
//    }, 1000)        
//}
    