
import './App.css';
import React, {useEffect, useState} from "react";
export default function App() {
    const [count, setCounter] = useState(1);  
    const [users, setUser] = useState();
    let [posts, setPost] = useState();
    let [comments, setComment] = useState();

    const chooseItemUser = (e)=>{
        e.preventDefault();
        setUser();
    }

    let chooseItemPost = (e)=>{
        e.preventDefault();
        setPost();
    }

    let chooseItemComment = (e)=>{
        e.preventDefault();
        setComment();
    }

    let counterInc = (e)=>{
        e.preventDefault();
    setCounter(currentValue=>currentValue<10 ? currentValue+1:currentValue);
    }
    let counterDec = (e)=>{
        e.preventDefault();
        setCounter(currentValue=>currentValue>1 ? currentValue-1:currentValue);
    }

    const cleanCounter = () => setCounter(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(value => value.json())
            .then(value => setUser(value))
            
    }, [count])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [count])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${count}`)
            .then(value => value.json())
            .then(value => setComment(value))
    }, [count])
 let myMaxValue='';
    return (
        <div>
            <div>
            <button onClick={chooseItemUser} value={users} onChange={({ target: { value } }) => setUser(value)}>exclude User</button>
            </div> 
            <div>
            <button onClick={chooseItemPost} value={posts} onChange={({ target: { value } }) => setPost(value)}>exclude Post</button>
            </div>
            <div>
            <button onClick={chooseItemComment} value={comments} onChange={({ target: { value } }) => setComment(value)}>exclude Comment</button>
            </div> 
            <form> 
            <button onClick={counterInc}>+</button>
            <input type="number" min={1} max={myMaxValue} value={count} onChange={({ target: { value } }) => setCounter(value)} />
            <button onClick={counterDec}>-</button>
            <button onClick={cleanCounter}>reset</button>
            </form>
            {!!users &&
            (<div>USER:
                <p>{users.id} - {users.name} - {users.username} </p>
            </div>)
            }
            {!!posts &&
            (<div>POST:
                <p>{posts.id} - {posts.title} </p>
            </div>)
            }
            {!!comments &&
            (<div>COMMENT:
                <p>{comments.id} - {comments.name} - {comments.body} </p>
            </div>)
            }
        </div>
        
    )}



