"use client"

import { Box } from "@mui/material";
import React from "react";
import CountrySelect from "./CountrySelect";
import { useEffect,useContext } from "react";
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
    
    
    return(
        <Box sx={{padding:"50px"}}>
            <CountrySelect parsedTrigger={parsedTrigger}/>
        </Box>
    );
}

export default Home;
