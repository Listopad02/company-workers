import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        companies: [
            {
                "company": "Big Lots, Inc.",
                "address": "1692 Pawje Heights",
                "id": 0,
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
        checked: false,
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
        },
        setInactive: (state, action) => {
            state.active.splice(action.payload, 1)
        },
        setChecked: (state) => {
            state.checked = !state.checked
        }
    },
    extraReducers: {},
})

const { actions, reducer } = tableSlice

export const { setActive, setInactive, deleteValue, setChecked } = actions
export default reducer