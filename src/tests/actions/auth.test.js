import {Login,LogOut,AuthoriseUser,LogOutUser} from '../../actions/auth'
import uuid from 'uuid'

test('Should render Login',()=>{
    const uid = uuid()
    const action = Login(uid)
    expect(action).toEqual({
        type :'LOGIN',
        uid
    })
})

test('Should render Logout',()=>{
    const action = LogOut()
    expect(action).toEqual({
        type :'LOGOUT'
    })
})