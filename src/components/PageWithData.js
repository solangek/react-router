import { useParams } from "react-router-dom";

const PageWithData = (props) => {
    let { id } = useParams();
    return (
        <>
            <h2>This is a page with path parameters</h2>
            <p>The path parameter is: {id}</p>
        </>
    );
}

export default PageWithData;