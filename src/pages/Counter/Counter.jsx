import React, { Component } from 'react'
import CounterClass from '../../components/CounterClass/CounterClass'
import CounterFunction from '../../components/CounterFunction/CounterFunction'

export default class Counter extends Component {

    render() {
        return (
            <div>
                <CounterClass />
                <CounterFunction />
            </div>
        )
    }
}
