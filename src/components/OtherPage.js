import { useParams } from "react-router-dom";

const OtherPage = (props) => {
    let { id } = useParams();
    return (
        <h2>This is the other page</h2>
    );
}

export default OtherPage;