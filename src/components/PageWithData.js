import { useParams } from "react-router-dom";
import {useState} from "react";

const PageWithData = (props) => {
    const [someData, setSomeData] = useState([]);
    let { id } = useParams();
    // useEffect(() => {
    //     // add 0 to the someData array
    //     setSomeData([...someData, 0]);
    // }, []);

    return (
        <>
            <h2>This is a page with path parameters</h2>
            <p>The path parameter is: {id}</p>
            <p>The data is: {someData.join(", ")}</p>
            <button onClick={() => setSomeData([...someData, someData.length])}>Add data</button>
        </>
    );
}

export default PageWithData;