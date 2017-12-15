import * as types from '../constans/ActionTypes'
export const getTopicList = (topicId) => ({
    type: types.GET_TOPIC_LIST,
    topicId
});