import { UPDATE_BUCKET, DELETE_BUCKET, FETCH_BUCKETS, CREATE_BUCKET } from "./Types";

export const fetchBuckets = () => dispatch => {

    fetch("../data/buckets.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: FETCH_BUCKETS,
                payload: json
            });
        });
};

export const updateBucket = (bucket) => dispatch => {
    dispatch({
        type: UPDATE_BUCKET,
        payload: bucket
    });
}

export const deleteBucket = (id) => dispatch => {
    dispatch({
        type: DELETE_BUCKET,
        payload: id
    });
}

export const createBucket = (bucket) => dispatch => {
    dispatch({
        type: CREATE_BUCKET,
        payload: bucket
    });
}