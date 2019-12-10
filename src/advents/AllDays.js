import React from 'react'
import Day1 from './Day1'
import Day2 from './Day2'

class AllDays extends React.Component {
    render(){
       
        return(
            <div>
               <ul>
                <Day1 />
                <Day2 />
               </ul> 
            </div>
        )
    }
}

export default AllDays;