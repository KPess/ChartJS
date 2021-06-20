
import React from 'react'
import { Line} from 'react-chartjs-2'
import tempData from "../TempData.json"

/* for (let i=0; i<tempData.length; i++) {
    console.log(tempData[i])
}
 */

// Create a set of the unique dates
let dates = []
dates = Array.from(new Set(tempData.map(({ date }) => date)))
dates.reverse()



let minTempC = []
for (let i=tempData.length-1; i>-1; i--) {
    if (tempData[i].station_code === 'KATL') {
        minTempC.push(tempData[i].temp_min_c)
    }
}
console.log(minTempC)

let maxTempC = []
for (let i=tempData.length-1; i>-1; i--) {
    if (tempData[i].station_code === 'KATL') {
        maxTempC.push(tempData[i].temp_max_c)
    }
}
console.log(maxTempC)



const Charts = () => {
    return <div>
        <Line 
                        options= {{
                                color: '#b5b5b5',
                                responsive: true,
                                layout: {
                                    padding: {
                                        left: 50,
                                        right: 50,
                                        bottom: 250
                                    }
                                },
                                legend: {
                                    labels: {
                                        // This more specific font property overrides the global property
                                        fontColor: "#8c8c8c"
                                    }
                                },
                                scales: {
                                    yAxes: [{
                                      gridLines: {
                                          color: "#8c8c8c",
                                          zeroLineColor: '#8c8c8c'
                                      },
                                      scaleLabel: {
                                        display: true,
                                        labelString: 'Temperature in Celsius',
                                        fontColor: "#b5b5b5"
                                      }
                                    }],
                                    xAxes: [{
                                        gridLines: {
                                            color: "#8c8c8c",
                                            zeroLineColor: '#8c8c8c'
                                        },
                                        scaleLabel: {
                                          display: true,
                                          labelString: 'Date of Temperature Measurement',
                                          fontColor: "#b5b5b5"
                                        }
                                      }]
                                  }    

                        }}
                        data={{
                            labels: dates,
                            datasets: [{
                                label: 'Atlanta Minimum Temperature',
                                data: minTempC,
                                backgroundColor: [
                                    '#0d8dfd'
                    
                                ],
                                borderColor: [
                                    '#005299'
               
                                ],
                                borderWidth: 2
                            },
                            {label: 'Atlanta Maximum Temperature',
                                data: maxTempC,
                                backgroundColor: [
                                    'rgba(255, 99, 155, 0.2)'
                    
                                ],
                                borderColor: [
                                    'rgba(255, 99, 155, 1)'
               
                                ],
                                borderWidth: 2}
                            ]
                        }}
                        
        />
        </div>
}

export default Charts