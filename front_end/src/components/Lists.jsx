import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'

export default function Lists({ setPost, post }) {
    const [data, setData] = useState();
    const [check, setCheck] = useState();
    const [edit, setEdit] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5005/v1/lists').then(res => {
            setData(res?.data?.lists)

        })
    }, [post, check])
    const style = { fontSize: "1.5em", marginLeft: '25px' }
    function deleteHandler(e) {
        console.log(e);
        axios.delete(`http://localhost:5005/v1/lists/${e._id}`).then(setCheck(!check))
    }


    return (
        <div className='pt-3  w-50 mx-auto listComp'>
            <div>


                {
                    data ?
                        data.map((list, i) => {
                            return <div className='d-flex w-50 m-auto justify-content-between'>
                                <div className='d-flex'>

                                    <div class="container">
                                        <div class="round">


                                            <input type="radio" id="" />

                                        </div>
                                    </div>
                                    {<p className='mt-2 title '>{list?.title}</p>}
                                </div>
                                <div className='d-flex justify-content-around m-auto  '>
                                    <AiFillEdit style={style} />
                                    <BsFillTrashFill style={style} onClick={() => {
                                        deleteHandler(list)
                                    }} />

                                </div>
                                <hr />
                            </div>
                        })
                        : ''
                }
            </div>

        </div>
    )
}
