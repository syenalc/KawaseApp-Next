"use client"

import { Box, Typography } from "@mui/material";
import React from "react";
import CountrySelect from "./CountrySelect";
import RateButton from "./RateButton";
import { useEffect,useContext,useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";


const Home=()=>{
    const currencyContext = useContext(CurrencyContext);

    if (!currencyContext) {
        throw new Error('CurrencySelect must be used within a CurrencyProvider');
    }

    const { val1, val2,from,to,rate,setFrom,setTo,setRate} = currencyContext;
    const storedTrigger = localStorage.getItem('trigger');
    const parsedTrigger:boolean = storedTrigger !==null ? JSON.parse(storedTrigger) : false;

    const newFrom= localStorage.getItem('from');
    const newTo= localStorage.getItem('to');
    const newRate= localStorage.getItem('rate');
    useEffect(() => {

        // fromやtoの値を設定する
        if (newFrom) setFrom(JSON.parse(newFrom));
        if (newTo) setTo(JSON.parse(newTo));
        if (newRate) setRate(JSON.parse(newRate));
    }, []);
    
    
    // useEffect(() => {
    //     // Homeに戻ってきたときに初期化処理を行う
    //     // 必要に応じて初期化処理を追加します
    //     console.log("Home component mounted");
    //     return () => {
    //         console.log("Home component unmounted");
    //     };
    // }, []);
    
    return(
        <Box sx={{padding:"50px"}}>
            {/* linkDisabled={linkDisabled} setLinkDisable={setLinkDisable} */}
            <CountrySelect parsedTrigger={parsedTrigger}/>
        </Box>
    );
}

export default Home;
