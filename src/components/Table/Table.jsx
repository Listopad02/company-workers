import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./Table.css"

const Table = () => {
    const dispatch = useDispatch();
    // const counter = useSelector(state => state.table.counter);

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
                        <button className='settings__buttons-button delete'>Удалить</button>
                    </div>
                </div>
                <div className="table__header">
                    <div className='table__header-item'>
                        <input type="checkbox" disabled />
                    </div>
                    <div className='table__header-item'>
                        Компания
                    </div>
                    <div className='table__header-item'>
                        Количество сотрудников
                    </div>
                    <div className='table__header-item'>
                        Адрес
                    </div>
                </div>
                <div className='table__body'>
                    <div className='table__body-item'>
                        <input type="checkbox" />
                    </div>
                    <div className='table__body-item'>
                        Викинг
                    </div>
                    <div className='table__body-item'>
                        70
                    </div>
                    <div className='table__body-item'>
                        Коммунистическая, 112
                    </div>
                </div>
                <div className='table__body'>
                    <div className='table__body-item'>
                        <input type="checkbox" />
                    </div>
                    <div className='table__body-item'>
                        Оптрон
                    </div>
                    <div className='table__body-item'>
                        500
                    </div>
                    <div className='table__body-item'>
                        Сталеваров, 12
                    </div>
                </div>
                <div className='table__body'>
                    <div className='table__body-item'>
                        <input type="checkbox" />
                    </div>
                    <div className='table__body-item'>
                        Заря
                    </div>
                    <div className='table__body-item'>
                        300
                    </div>
                    <div className='table__body-item'>
                        Нахимовская, 118
                    </div>
                </div>
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