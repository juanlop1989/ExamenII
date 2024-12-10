'use client'

import { getValorPromedio } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    

export default function ValorPromedio() {

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
    getValorPromedio().then(data=>{
        const  productos = data.map((item:any) => item.categoryCode);
        const promedio= data.map((item:any) => item.Valor_Promedio);
        
        setChartData({
            labels:productos,
            datasets:[{
                label: 'Promedio',
                data:promedio,
                backgroundColor:['rgb(255, 99, 132)','rgb(230, 193, 132)','rgb(150, 25, 141)' ]
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
                    <h3>Valor Promedio de productos por categoría</h3>

                    <Line data={chartData}></Line>
                    
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}
