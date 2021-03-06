import * as types from '../constans/ActionTypes'
export const getTopicList = (topicId) => ({
    type: types.GET_TOPIC_LIST,
    topicId,
    bklist: [1,2,3,4,5]
});

/*
* 请求开始进行
* @param  {keywords}
* */
export const fetchIng = keywords => ({
    type: types.FETCHING,
    keywords
});
/*
* 请求结束
* @param {keywords}
* */
export const fetchEnding = (keywords, list) => ({
    type: types.FETCHENDING,
    keywords,
    bklist: list
});
/*
* fetch异步请求
* @param  {keywords}
* */
export const fetchRequest = (keywords) => {
    return (dispatch) => {
        dispatch(fetchIng(keywords));
        return fetch(`https://cnodejs.org`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json =>
                dispatch(fetchEnding(keywords, json))
            ).catch((e) => console.log(e))
    }
}