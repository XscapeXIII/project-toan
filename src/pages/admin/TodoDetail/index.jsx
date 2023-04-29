import { useParams, useLocation } from "react-router-dom";
import qs from "qs";

function ToDoDetailPage() {
  const { id } = useParams();
  const { state, search } = useLocation();
  const query = qs.parse(search, { ignoreQueryPrefix: true });
  return (
    <div>
      <div>To do detail page: {id}</div>
      <div>State Title: {state.title}</div>
      <div>State Content: {state.content}</div>
      <div>Search Query Title: {query.title}</div>
      <div>Search Query Content: {query.content}</div>
    </div>
  );
}

export default ToDoDetailPage;
