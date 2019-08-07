import authReducer from '../../reducers/auth'
import {uuid} from 'uuid'

test('should render Login',()=>{
    const uid = uuid()
    const action = {
        type:'LOGIN',
        uid
    }
    const state = authReducer({},action)
    expect(state.uid).toBe(uid)
})

test('should render Logout',()=>{
    const action = {
        type:'LOGOUT'
    }
    const state = authReducer({},action)
    expect(state.uid).toEqual({uid:9})
})