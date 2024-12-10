'use client'

import { getCantidadProductosMarca } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import {  Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function CantidadProductosMarca() {

  const [chartData, setChartData] = useState({
    labels:[],
    datasets:[
        {
            label:'',
            data:[],
            backgroundColor:[] as string[]
        }
    ]
  })


  useEffect(()=>{
    getCantidadProductosMarca().then(data=>{
        const  marcas = data.map((item:any) => item.brandCode);
        const cantidad= data.map((item:any) => item.Cantidad);
        
        setChartData({
            labels:marcas,
            datasets:[{
                label: 'Cantidad',
                data:cantidad,
                backgroundColor:['rgb(50, 25, 241)','rgb(255, 99, 132)','rgb(230, 193, 132)','rgb(150, 25, 141)','rgb(50, 225, 141)' ]
            }
            ]
        })

    })
    .catch((error)=>{console.log('ocurrio un error',error)})
  },[]);

  return (
    <>

    <div>
        {
            chartData ? (
                <div>
                    <h3>Cantidad de Productos por Marca</h3>

                    
                    <Pie data={chartData}></Pie>
                    
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}
