import {useState} from 'react'

function useInc() {
    const[num,setNum] = useState(0);

    function addTen(){
        setNum(num+10);
    }

    return [num,addTen]
}

export default useInc
