import React, {useState} from 'react';

type Props = {
    setTimeInSeconds: Function
  
};
function Controls(props:Props) {
    const {setTimeInSeconds} = props;
    const[intervalId, setIntervalId] = useState<number>(0);
  

    window.onload = function () {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1)
        }, 1000);

        setIntervalId(interval);
    }

    const handleStop = () => {

        clearInterval(intervalId);
    }
    
    return(
        <section className="stopButton">
            <button onClick = {handleStop}> STOP</button>
        </section>

    )
}
export default Controls;
