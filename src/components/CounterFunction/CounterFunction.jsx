import React,{useState} from 'react'

export default function CounterFuntion() {
    const [count, setState] = useState(0)

  
    return (
        
        <div>
                  <h1>
        Count: {count}
      </h1>
      <button onClick={() => setState(count+1)}>+</button>
      <button
        onClick={() => {
          if (count <= 1) {
            alert("Angka tidak boleh negatif!");
          } else {
            setState(count -1);
          }
        }}
      >
        -
      </button>
      <button onClick={() => setState(0)}>RESET</button>
        </div>
    )
}
