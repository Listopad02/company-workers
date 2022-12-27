import { useState } from 'react'
import { useDispatch } from "react-redux"
import { setActive } from '../../redux/tableSlice'
import "./TableItem.css"

const TableItem = ({ company, staff, address, value }) => {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    return (
        <div className={checked ? 'table__body active' : 'table__body'}>
            <div className='table__body-item'>
                <input type="checkbox" 
                       value={value}
                       checked={checked} 
                       onChange={() => {
                           setChecked(!checked)
                           dispatch(setActive(value))
                        }} 
                />
            </div>
            <div className='table__body-item'>
                { company }
            </div>
            <div className='table__body-item'>
                { staff }
            </div>
            <div className='table__body-item'>
                { address }
            </div>
        </div>
    )
}

export default TableItem