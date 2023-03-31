import React, { useState, useEffect } from 'react';
import ApiComponent from './ApiComponent';
import Loading from './Loading';


const Home = () => {

    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getCardData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );
        const data = await res.json();
        // console.log(data)
        setCard((prev) => [...prev, ...data]);
        setLoading(false)
    };

    const handleInfiniteScroll = async () => {

        console.log("scrollHeight" + document.documentElement.scrollHeight);

        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setLoading(true);
                setPage((prev) => prev + 1)
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getCardData();
    }, [page]);


    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    }, []);

    return (
        <>

            <ApiComponent apiInfo={card} />
            {loading && <Loading />}
        </>
    )
}

export default Home;