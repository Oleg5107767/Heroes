import React,{ useState} from "react";
import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { heroCreated } from '../heroesList/heroesSlice';
import { v4 as uuidv4 } from 'uuid';



const initialValue ={
    name: '',
    description: '',
    element: '',
    id: null
}



const HeroesAddForm = (initialValue) => {

    const [values, setValue] = useState(initialValue);
    const {filters, filtersLoadingStatus} = useSelector(state => state.filters);
 
    const dispatch = useDispatch();
    const {request} = useHttp();



    const handle = (e) => {
       
        const {name,value} = e.target;
        setValue({
            ...values,
            [name]:   value,
            id: uuidv4()
        })
    }

    const createUser = (e) => {
        console.log('start')
        e.preventDefault();
        request("http://localhost:3001/heroes", "POST", JSON.stringify(values))
        .then(dispatch(heroCreated(values)))
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>
        }
        
        
        if (filters && filters.length > 0 ) {
            return filters.map(({name, label}) => {
                
                // eslint-disable-next-line
                if (name === 'all')  return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }
        

    
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={handle}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="description" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={handle}/>
            </div>

            <div className="mb-3">
            <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={handle}>
                        <option value="">Я владею элементом...</option>
                        {renderFilters(filters,filtersLoadingStatus)}
                </select>
            </div>

            <button onClick={createUser} className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;