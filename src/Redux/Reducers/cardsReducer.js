import { ADD_CARD, DELETE_CARD, DELETE_LIST, UPDATE_CARD_TEXT } from "../Types";

const cardsById = (state = {}, action) => {
    switch(action.type){
        case ADD_CARD: {
            const {cardText, cardId} = action.payload;
            return {
                ...state,
                [cardId] : {text:cardText, _id: cardId}
            }
        }
        case UPDATE_CARD_TEXT: {
            const {cardText, cardId} = action.payload;
            return {
                ...state,
                [cardId] : {...state[cardId], text: cardText}
            }
        }
        case DELETE_CARD: {
            const {cardId} = action.payload;
            const {[cardId]: deletedCard, ...restOfCards} = state;
            return restOfCards;
        }
        case DELETE_LIST: {
            const {cards:cardIds} = action.payload;
            return Object.keys(state)
            .filter(cardId => !cardIds.includes(cardId))
            .reduce(
                (newState, cardId) => ({
                    ...newState, [cardId]: state[cardId]
                }), {}
            )
        }
        default:
            return state;
    }
}

export default cardsById;