1. What problem does the context API help solve?

--helps props drilling. allows easier global state management for multiple components.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

--Actions: hold action object that contain properties to inform the reducer what state to update/how.
Store: Object that holds all state for app.State is immutable in store.
Reducer: dispatches actions & updates state accordingly & predictably.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

--App state is immutable & best for global state controlling, should be used when multiple components need same state. Component state should be used pertaining to component retaled to & is mutable.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
--Middleware that intercepts actions creators before they get to reducer & acts on it depending on the action object.Dispatches funtions, Makes flow asycnhrounous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
--Probably Context API because it seems easier to understand what is happening.
