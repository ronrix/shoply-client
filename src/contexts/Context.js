import {createContext} from 'react'

export const MyContext = createContext({value: null, setValue: (value) => {}})