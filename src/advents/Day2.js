import React from 'react';
import axios from 'axios';

class Day2 extends React.Component {

    state = {
        data: [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0],
        index: 0,
        day2: 0,
    }
    
    set1202() {
        const _data = this.state.data;
        _data[1] = 12;
        _data[2] = 2;
        this.setState({
            data : _data
        })
    }


    componentDidMount() {
        this.set1202();

        const data = this.state.data;
        var opcode = 0;
        var first = 0;
        var second = 0;
        var result = 0;
        var storeIndex = 0;
        var skip = false;
        var isBreak = false;

        data.map((item, index) => {

            if(!isBreak){
            // console.log(`${index} : ${item}`)
            
            
            if(index % 4 === 0 || index == 0) {

                opcode = item;
                skip = true;

               
                //clear value
                first = 0
                second = 0
                storeIndex = 0
                result = 0

                // console.log(`Opcode ${item}`)

            }

            if(!skip){
                if(index %4 === 1)
                    first = data[item]
                if(index %4 === 2){
                    second = data[item]
                    if(opcode === 1) result = first + second
                    if(opcode === 2) result = first * second
                    if(opcode === 99) isBreak = true
                    
                }
                if(index %4 === 3){
                    storeIndex = item
                    // console.log(`first ${first} second ${second} storeIndex ${storeIndex} result ${result}`)
                    data[storeIndex] = result
                }
                
            }

            skip = false;

        }else {
            console.log(`Opcode ${opcode} found`)
            // console.log(`Working Data : ${data}`)
        }
            
        });

        
        // console.log(this.state.data)
    }

    render(){
        return(
        <li>Day2 : {this.state.data[0]}</li>
        )
    }

}

export default Day2;