import "./Alert.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setOpen, pushToCompanies } from '../../redux/tableSlice'

const Alert = () => {
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const open = useSelector(state => state.table.open);
  const companies = useSelector(state => state.table.companies);
  const dispatch = useDispatch();

  const maxId = companies.reduce((max, item) => item.id > max ? item.id : max, 0);

  return (
    <div className={open ? "form" : "closed"}>
        <div className="form__title">
            <h2 className="form__title-title">Введите данные компании</h2>
        </div>
        <div className="form__inputs">
            <p className='form__inputs-text'>Название:</p>
            <input type="text" 
                   placeholder='Название компании' 
                   className='form__inputs-input' 
                   value={company}
                   onChange={e => setCompany(e.target.value)}
            />
            <p className='form__inputs-text'>Адрес:</p>
            <input type="text" 
                   placeholder='Адрес компании' 
                   className='form__inputs-input' 
                   value={address}
                   onChange={e => setAddress(e.target.value)}
            />
        </div>
        <div className="form__buttons">
            <button className='settings__buttons-button add'
                    onClick={() => {
                      dispatch(pushToCompanies({
                        "company": company, 
                        "address": address,
                        "checked": false,
                        "id": maxId + 1,
                        "staff": []
                      }))
                      setCompany('')
                      setAddress('')
                    }}
                    disabled={company && address ? false : true}
                >Добавить</button>
            <button className='settings__buttons-button cancel'
                    onClick={() => dispatch(setOpen())}>Отмена</button>
        </div>
    </div>
  )
}

export default Alert