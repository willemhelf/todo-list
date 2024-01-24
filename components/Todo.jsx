import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [inputTitle, setInputTitle] = useState("")
    const [description, setDescription] = useState("")
    const [listItems, setListItems] = useState([
        {
            id: '001',
            name: "default task",
            desc: "default task description",
            status: false
        }
    ])

    const handleInputTitle = (e) =>{
        setInputTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputTitle || !description) {
            alert("please fill out all areas")
        } else {
            const allInputData = {
                id: new Date().getTime.toString(),
                name: inputTitle,
                desc: description
            }
            setListItems([allInputData, ...listItems])
        }
    }

    return(
        <div>
            <div className='container'>
                <div className='text-end'>
                    <button className='btn btn-primary' >
                        Add new item
                    </button>
                </div>
            </div>
            <div className='input-box-container'>
                <div className='row'>
                    <div className='text-center'>
                        <h2></h2>
                    </div>
                    <form className='input-box' onSubmit={handleSubmit}>
                        <label htmlFor='title' className='title'>
                            Enter task title
                        </label>
                        <input
                        type='text'
                        name='title'
                        id='title'
                        placeholder='title'
                        className='input-title'
                        onChange={handleInputTitle}
                        value={inputTitle}
                        />
                        <label htmlFor='description' className='description'>
                            Enter task description
                        </label>
                        <input 
                        type='text'
                        name='description'
                        id='description'
                        placeholder='description'
                        className='description'
                        onChange={handleDescription}
                        value={description}
                        />
                        <button className='submit-button'>Save</button>
                    </form>
                    {listItems.map((elem, index) => {
                        return(
                            <div key={elem.id} className='item-title'>
                                <div className='item-description'>
                                    <div>
                                        <h4>{elem.name}</h4>
                                        <p>{elem.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo