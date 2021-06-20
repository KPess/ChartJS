import React from 'react'
import { Line} from 'react-chartjs-2'
import tempData from "../TempData.json"
let data = []

console.log(tempData)

/* for (let i=0; i<tempData.length; i++) {
    console.log(tempData[i])
}
 */

// Create a set of the unique dates
let dates = []
dates = Array.from(new Set(tempData.map(({ date }) => date)))
dates.reverse()

//For each date calculate the average minimum temp by looping through each station's data, adding it up, and dividing by number of entries


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

// let avgMinTempC = []
// let totalMinTemps = 0
//Loop through each date
/* for (let j=0; j<dates.length; j++){
    let todaysDate = dates[j]
    let todaysTemp = 0
    // Loop through every entry in dataset (89,219)
    for (let i=0; i<tempData.length; i++) {
        if (tempData[i].date === todaysDate) {
            totalMinTemps += tempData[i].temp_min_c
        }
    }
    todaysTemp = totalMinTemps/39
    avgMinTempC.push(todaysTemp)
    console.log(avgMinTempC)
}

 */


const Charts = () => {
    return <div>
        <Line 
                        options= {{
                                responsive: true,
                                layout: {
                                    padding: {
                                        left: 50,
                                        right: 50,
                                        bottom: 250
                                    }
                                }

                        }}
                        data={{
                            labels: dates,
                            
                            datasets: [{
                                label: 'Atlanta Minimum Temperature',
                                data: minTempC,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)'
                    
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)'
               
                                ],
                                borderWidth: 1
                            },
                            {label: 'Atlanta Maximum Temperature',
                                data: maxTempC,
                                backgroundColor: [
                                    'rgba(155, 99, 155, 0.2)'
                    
                                ],
                                borderColor: [
                                    'rgba(155, 99, 155, 1)'
               
                                ],
                                borderWidth: 1}
                            ]
                        }}
                        
        />
        </div>
}

export default Charts