
import './App.css';
import React, {useEffect, useState} from "react";
export default function App() {
    const [count, setCounter] = useState(1);  
    // let [item, setItem] = useState({name:'user'});
    const [users, setUser] = useState({name:""});
    let [posts, setPost] = useState();
    let [comments, setComment] = useState();

    
    //  const incrementCounter = () => setCounter((prev) => prev + 1);
    const chooseItemUser = (e)=>{
        e.preventDefault();
        setUser((prevState)=>({
            ...prevState,
             name: prevState.name='choose new user'
        }));
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
    setCounter(currentValue=>currentValue<500 ? currentValue+1:currentValue);
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
            (<div>
                <p>{users.id} - {users.name} </p>
            </div>)
            }
            {!!posts &&
            (<div>
                <p>{posts.id} - {posts.title} </p>
            </div>)
            }
            {!!comments &&
            (<div>
                <p>{comments.id} - {comments.name} </p>
            </div>)
            }
        </div>
        
    )}



