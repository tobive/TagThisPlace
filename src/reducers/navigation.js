import MainStack from '../stacks/MainStack';

const initialState = MainStack.router.getStateForAction(
    MainStack.router.getActionForPathAndParams('Home')
);

const goTo = (routeName, state) => {
    return MainStack.router.getStateForAction(
        MainStack.router.getActionForPathAndParams(routeName),
        state
    );
};

function navigation(state=initialState, action) {
    switch (action.type) {
        default:
            // Return original state if nextState is null or undefined
            return MainStack.router.getStateForAction(action, state) || state;
    }
}

export default navigation;
