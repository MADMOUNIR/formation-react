import React , { useState , useEffect }  from 'react'
import  './Home.css'
import Card from '../../Components/Card/Card'
import { useSelector , useDispatch } from 'react-redux'
import { getArticles } from '../../redux/articles/articleReducer'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'

export default function Home() {
    
    const {articles} = useSelector( state => ({
        ...state.articleReducer ,
       
    }));

    const dispatch = useDispatch();

    useEffect(() => {
     
        if (articles.length === 0) {
            dispatch(getArticles());
        }
       
    }, [])
    
    return (
        <>
        <h1 className="home-title">List of Articles</h1>
        <div className="container-cards">
            {   articles.map(item => {
                    return (
                    <Card key={uuidv4()}>
                    <h2>{item.title}</h2>
                    <Link to={
                        {pathname : `article/${item.id}` ,
                        state : {
                            title :item.title ,
                            body : item.body
                        }
                    }
                    }>
                    Read more
                    </Link>                    
                   
                     </Card>
                    )

                })
            }
         
        </div>
            
        </>
    )
}
