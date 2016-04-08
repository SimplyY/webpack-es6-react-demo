import React, {Component} from 'react'
import AutoComplete from './component/AutoComplete'

const dataArray = ['a', 'ab', 'abc', 'data', 'dataArray']

class Root extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <AutoComplete dataArray={dataArray}/>
            </div>
        )
    }
}


export default Root
