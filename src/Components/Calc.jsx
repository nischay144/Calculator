import React from 'react'
import './style.css'

function Calc() {
    return (
        <div class="app">

            <div class="calculator">

                <div class="display">
                    <div class="content">
                        <div class="input"></div>
                        <div class="output"></div>
                    </div>
                </div>

                <div class="keys">

                    <div data-key="clear" class="key action">
                        <span>AC</span>
                    </div>

                    <div data-key="brackets" class="key action">
                        <span>( )</span>
                    </div>

                    <div data-key="%" class="key action">
                        <span>%</span>
                    </div>

                    <div data-key="/" class="key operator">
                        <span>÷</span>
                    </div>

                    <div data-key="7" class="key">
                        <span>7</span>
                    </div>

                    <div data-key="8" class="key">
                        <span>8</span>
                    </div>

                    <div data-key="9" class="key">
                        <span>9</span>
                    </div>

                    <div data-key="*" class="key operator">
                        <span>x</span>
                    </div>

                    <div data-key="4" class="key">
                        <span>4</span>
                    </div>

                    <div data-key="5" class="key">
                        <span>5</span>
                    </div>

                    <div data-key="6" class="key">
                        <span>6</span>
                    </div>

                    <div data-key="-" class="key operator">
                        <span>-</span>
                    </div>

                    <div data-key="1" class="key">
                        <span>1</span>
                    </div>

                    <div data-key="2" class="key">
                        <span>2</span>
                    </div>

                    <div data-key="3" class="key">
                        <span>3</span>
                    </div>

                    <div data-key="+" class="key operator">
                        <span>+</span>
                    </div>

                    <div data-key="backspace" class="key action">
                        <span>CE</span>
                    </div>

                    <div data-key="0" class="key">
                        <span>0</span>
                    </div>

                    <div data-key="." class="key">
                        <span>.</span>
                    </div>

                    <div data-key="=" class="key operator">
                        <span>=</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Calc
