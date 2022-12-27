import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        companies: [
            {
                "company": "Big Lots, Inc.",
                "address": "1692 Pawje Heights",
                "id": 0,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
            {
                "company": "Symbol Technologies Inc",
                "address": "391 Giso View",
                "id": 1,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
            {
                "company": "Pactiv Corp",
                "address": "1667 Bunef Square",
                "id": 2,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
            {
                "company": "CenturyTel Inc.",
                "address": "1144 Jizwi Manor",
                "id": 3,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
            {
                "company": "AK Steel Holding Corporation",
                "address": "1577 Awuva Extension",
                "id": 4,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
            {
                "company": "Revlon Inc",
                "address": "632 Behge Turnpike",
                "id": 5,
                "checked": false,
                "staff": [
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                    {
                        "surname": "Smith",
                        "name": "Alex",
                        "position": "Manager"
                    },
                ]
            },
        ],
        active: [],
        open: false,
        checkedAll: false
    },
    reducers: {
        deleteValue: (state) => {
            const sortedCompanies = state.companies.filter(elem => !state.active.includes(elem.id))
            state.companies = sortedCompanies
        },
        setActive: (state, action) => {
            if (!state.active.includes(action.payload)) {
                state.active.push(action.payload)
            }
            state.checkedAll = false
        },
        setInactive: (state, action) => {
            state.active.splice(action.payload, 1)
        },
        setChecked: (state, action) => {
            state.companies.map(elem => {
                if (elem.id === action.payload) {
                    elem.checked = !elem.checked
                }
            })
        },
        setOpen: (state) => {
            state.open = !state.open
        },
        pushToCompanies: (state, action) => {
            state.companies.unshift(action.payload)
        },
        selectAll: (state, action) => {
            for (let i = 0; i < state.companies.length; i++) {
                state.companies[i].checked = action.payload
            }
        },
        setCheckedAll: (state) => {
            state.checkedAll = !state.checkedAll
            for (let i = 0; i < state.companies.length; i++) {
                state.active.push(state.companies[i].id)
            }
        }
    },
    extraReducers: {},
})

const { actions, reducer } = tableSlice

export const { setActive, setInactive, deleteValue, setChecked, 
               setOpen, pushToCompanies, selectAll, setCheckedAll } = actions
export default reducer