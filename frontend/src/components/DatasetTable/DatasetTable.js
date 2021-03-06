import React, {Component} from 'react';
import Plot from 'react-plotly.js';

export default class DatasetTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: {}
        };
    }

    async componentDidMount(){
        const res = await fetch('api/dataset');
        const dataRetrieved = await res.json();

        this.setState((state) => {
            return {data: dataRetrieved}
        });

    }

    createColumns(){
        var columns = [];
        var i = 0;

        Object.entries(this.state.data).map((key) => {
            var temp = [];
            var j = 0;
            for(let entry of key[1]){
                temp[j] = entry;
                j++;
            }
            columns[i] = temp;
            i++;
        });

        return columns;
    }

    createLabels(){
        var labels = [];
        var i = 0;

        Object.keys(this.state.data).map( key => {
            labels[i] = key;
            i++;
        });

        return labels;
    }

    render(){
        return (
            <div>
                <Plot 
                    data ={[
                        {
                           type: 'table',
                           header: {
                               values: this.createLabels(),
                               align: "center",
                               height: 25,
                               fill: {color: "black"},
                               font: {size:12, color:"white"}
                           },
                           cells: {
                                values: this.createColumns(),
                                align: "center",
                                height: 25,
                                fill: {color: "black"},
                                font: {size: 11}
                           }
                        }
                    ]}
                    layout = {{
                        title: {
                            text: "COMPLETE DATASET",
                            size: 20,
                            color: "#fff"
                        },
                        paper_bgcolor: "#000",
                        font: {
                            color: "#fff"
                        }
                    }}
                />
            </div>
        );
    }

}