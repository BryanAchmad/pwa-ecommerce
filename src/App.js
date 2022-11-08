import React, { useEffect, useState } from "react";
import axios from "axios";
import Arrived from "./components/Arrived";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";

function App() {
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axios
            .get(
                "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
                { headers: { "x-api-key": process.env.API_KEY } }
            )
            .then((response) => {
                // console.log("response", response);
                const { nodes } = response.data;
                console.log("nodes", nodes);
                setItems(nodes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(function () {
        // const fetchData = async () => {
        //     const response = await fetch(
        //         ,
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Accept: "*/*",
        //                 "x-api-key": process.env.API_KEY,
        //             },
        //         }
        //     );
        //     const { nodes } = await response.json();
        //     console.log(nodes);
        //     setItems(nodes);
        // };

        fetchItems();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Browse />
            <Arrived items={items} />
            <Clients />
            <AsideMenu />
            <Footer />
        </>
    );
}

export default App;
