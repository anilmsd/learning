import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { name } = useParams();
  const navigate = useNavigate();
  const value1 = "Query";
  const value2 = "Params";

  return (
    <div>
      {name} <br />
      <button
        onClick={() => navigate(`/about?data=${value1}&&data2=${value2}`)}
      >
        Query Params
      </button>
    </div>
  );
}
