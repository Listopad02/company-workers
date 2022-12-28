import { useDispatch, useSelector } from "react-redux"
import { setActive, setChecked, setEdit, setOpen } from '../../redux/tableSlice'
import "./TableItem.css"

const TableItem = ({ company, staff, address, value, checked }) => {
    const dispatch = useDispatch();
    const currentID = useSelector(state => state.table.currentID)
    console.log("currentID", currentID)

    return (
        <div className={checked ? 'table__body active' : 'table__body'}>
            <div className='table__body-item'>
                <input type="checkbox" 
                       value={value}
                       checked={checked} 
                       onChange={() => {
                           dispatch(setChecked(value))
                           dispatch(setActive(value))
                       }} 
                />
            </div>
            <div className='table__body-item' onClick={() => {
                    dispatch(setOpen(value))
                    dispatch(setEdit(true))
                }}>
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