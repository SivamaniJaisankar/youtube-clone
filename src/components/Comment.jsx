import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { useFetchVideoComment } from "../utils/useFetchVideoComment";

const Comment = () => {

  const { videoId } = useParams();
 
  const  {commentInfo, loading, error }  = useFetchVideoComment(videoId);

  if (loading) return <p className="text-center p-4">Loading Comment...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="my-10 h-screen">
      <h3 className="text-md font-bold font-roboto">Comments...</h3>
      {commentInfo.map((c) => (
        <div key={c.id}>
          <div className="w-full my-2 flex flex-col text-slate-800">
            <CommentList comment={c} />   
          </div>         
        </div>
      ))}
    </div>
  );
};
export default Comment;
