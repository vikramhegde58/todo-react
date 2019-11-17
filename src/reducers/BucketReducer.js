import { FETCH_BUCKETS, DELETE_BUCKET, UPDATE_BUCKET, CREATE_BUCKET } from "../actions/Types";

const initialState = {
    buckets: []
};

export function bucketReducer(state = initialState, action) {
    let buckets = [...state.buckets]
    switch (action.type) {
        case FETCH_BUCKETS:
            return {
                ...state,
                buckets: action.payload
            };
        case DELETE_BUCKET:
            buckets = buckets.filter(bucket => bucket.id !== action.payload);
            return {
                ...state,
                buckets: buckets,
            };
        case UPDATE_BUCKET:
            let index = buckets.findIndex(bucket => bucket.id === action.payload.id);
            buckets.splice(index, 1, action.payload);
            return {
                ...state,
                buckets: buckets
            };
        case CREATE_BUCKET:
            buckets.push(action.payload);
            return {
                ...state,
                buckets: buckets
            };
        default:
            return state;
    }
}
