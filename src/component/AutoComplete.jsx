import React, {Component} from 'react'

class AutoComplete extends Component {
    constructor() {
        super()
        this.state = {
            inputStr: ''
        }
    }

    render() {
        const { dataArray } = this.props
        const tips = getTips(dataArray, this.state.inputStr)

        return (
            <div>
                <input className="auto-complete-input" onChange={handleChange.bind(this)}/>
                <div className="auto-complete-tips">
                    {tips.map(item => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function handleChange(event) {
    this.setState({inputStr: event.target.value.trim()})
}

function getTips(dataArray, inputStr) {
    let tips

    if (inputStr === '') {
        tips = []
    } else {
        tips = dataArray.filter(item => {
            return item.toLowerCase().indexOf(inputStr.toLowerCase()) >= 0
        })
    }

    return tips
}

export default AutoComplete
