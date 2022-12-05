import { useContext } from "react"
import { data } from "./App"

const C = (props) => {
  const name = useContext(data);
  return (
    <div>
        in c component <br />
        hi this is &nbsp; {name}
    </div>
  )
}

export default C
