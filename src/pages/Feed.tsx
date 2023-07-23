import { useParams } from "react-router-dom"
function Feed(){
     const {emailcheck } = useParams();

return(
    <div>
        <h1>Welcome {emailcheck}</h1>
    </div>
)

}
export default Feed;