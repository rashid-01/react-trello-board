import shortid from "shortid"
import { ADD_CARD, ADD_LIST } from "../Types";

export default appAction => {
    const firstListId = shortid.generate();
    
    appAction.dispatch({
        type: ADD_LIST,
        payload: { listId: firstListId, listTitle: "First List"}
    })

    appAction.dispatch({
        type: ADD_CARD,
        payload: {
            listId: firstListId,
            cardId: shortid.generate(),
            cardText: "First card"
        }
    })
    appAction.dispatch({
        type: ADD_CARD,
        payload: {
            listId: firstListId,
            cardId: shortid.generate(),
            cardText: "Second card"
        }
    });

    const secondListId = shortid.generate();

    appAction.dispatch({
        type: ADD_LIST,
        payload: {listId: secondListId, listTitle: "Second List"}
    })

    appAction.dispatch({
        type: ADD_CARD,
        payload: {
            listId: secondListId,
            cardId: shortid.generate(),
            cardText: "Card 1"
        }
    })
    appAction.dispatch({
        type: ADD_CARD,
        payload: {
            listId: secondListId,
            cardId: shortid.generate(),
            cardText: "Card 2"
        }
    })
};