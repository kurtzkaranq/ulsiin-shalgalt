
import Lists from './Lists';
import '../style/style.css'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main() {
    const [post, setPost] = useState(false)
    useEffect(() => { console.log(post); }, [post])
    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        axios.post('http://localhost:5005/v1/lists', { title: e.target[0].value }).then(res => {
            console.log(res);
            if (res.data.success) {
                setPost(!post)
                console.log(post);
            }
        })
    }
    return (
        <div className="App  justify-center  d-flex flex-column">
            <div className='header d-flex justify-content-center w-50 mx-auto mt-5 p-2 '>
                <h3 >My ToDo list</h3>
            </div>
            <div className='lists w-75 m-auto h-75'>

                <Lists post={post} setPost={setPost} className='pageList' />
                <div className='form d-flex flex-column'>

                    <form action="submit" onSubmit={(e) => {
                        submitHandler(e)
                    }} className='d-flex flex-column'>

                        <input type="text" name="" id="" className='input w-25 m-auto' />
                        <button className='button rounded'>
                            Add task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

