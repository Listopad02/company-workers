import React from 'react'
import TableItem from '../TableItem/TableItem'
import { useDispatch, useSelector } from "react-redux"
import "./Table.css"
import { deleteValue } from '../../redux/tableSlice'

const Table = ({ firstCol, secondCol, thirdCol, purpose }) => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.table.companies);

    return (
        <div className='table'>
            <div className="table__container">
                <div className="table__settings">
                    <div className="table__settings-checkbox">
                        <p className='settings__checkbox-text'>Выделить все: </p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="table__settings-buttons">
                        <button className='settings__buttons-button add'>Добавить</button>
                        <button className='settings__buttons-button delete'
                                onClick={() => dispatch(deleteValue())}>Удалить</button>
                    </div>
                </div>
                <div className="table__header">
                    <div className='table__header-item'>
                        <input type="checkbox" disabled />
                    </div>
                    <div className='table__header-item'>
                        { firstCol }
                    </div>
                    <div className='table__header-item'>
                        { secondCol }
                    </div>
                    <div className='table__header-item'>
                        { thirdCol }
                    </div>
                </div>
                {
                    companies.map((company, i) => (
                        <TableItem company={company.company} 
                                   staff={company.staff.length} 
                                   address={company.address}
                                   value={company.id}
                                   key={i}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Table











// {/* <div className='Table__container'>
//             {/* <div className='Table__header'>
//                 <div className='Table__header-checkbox'>
//                     <h2>Выделить всё</h2>
//                     <input type="checkbox" name="selectAll" id="selectAll" />
//                 </div>
//                 <div className='Table__header-buttons'>
//                     <button>Удалить</button>
//                     <button>Добавить</button>
//                 </div>
//             </div> */}
//             <div className='Table__body'>
//                 <div className='Table__body-item'>&nbsp;</div>
//                 <div className='Table__body-item'>Компания</div>
//                 <div className='Table__body-item'>Количество сотрудников</div>
//                 <div className='Table__body-item'>Адрес</div>
//             </div>
//             {
//                 // map
//             }
//         </div> */}