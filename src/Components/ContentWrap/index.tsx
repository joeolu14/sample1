import React, { useEffect, useRef, useCallback, useState } from "react";
import { useReadCypher } from "use-neo4j";
import Graph1 from "../Visuals/Graph1/Graph1";
import { FaTimes } from "react-icons/fa";

import "./ContentWrap.css";
import Graph2 from "../Visuals/Graph2/Graph2";

const ContentWrap = () => {
  const Query1 = `match(m:Manufacturing) - [l:LEADS_TO] -> (t:Testing) return m.happened AS manufacturing, t.happened AS testing,l as relationship`;
  const Query2 = `match (A:BOX1) - [R12:RELATES_TO] -> (B:BOX2),
  (A) - [R13:RELATES_TO] -> (C:BOX3),
  (B) - [R24:RELATES_TO] -> (D:BOX4),
  (C)- [R34:RELATES_TO] -> (D)
  RETURN LABELS(A),LABELS(B),TYPE(R12),LABELS(C),TYPE(R13),LABELS(D),TYPE(R24),TYPE(R34) `;
  const svgRef = useRef();
  const [showGraph1, setShowGraph1] = useState(false);
  const [showGraph2, setShowGraph2] = useState(false);
  const [data, setData] = useState<any>({});
  const [data2, setData2] = useState<any>({});
  const { loading, error, records: Query1Record } = useReadCypher(Query1);
  console.log(error);
  const {
    loading: loading2,
    error: error2,
    records: Query1Record2,
  } = useReadCypher(Query2);

  const FetchData = useCallback(() => {
    Query1Record?.map((res) => {
      setData(res.toObject());
    });
    Query1Record2?.map((res) => {
      setData2(res.toObject());
    });
  }, [Query1Record, Query1Record2]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  if (loading) return <div> Loading... </div>;
  return (
    <div className="container">
      <div className="button_contianer">
        <div className="button1">
          <button onClick={() => setShowGraph1(true)}>
            {" "}
            Click to View Process 1
          </button>
        </div>
        <div className="button2">
          <button onClick={() => setShowGraph2(true)}>
            {" "}
            Click to View Process 2
          </button>
        </div>
      </div>
      {showGraph1 && (
        <div className="graph_container">
          <div className="cancel_process1">
            <FaTimes onClick={() => setShowGraph1(false)} />
          </div>
          <Graph1 data={data} />
        </div>
      )}
      {showGraph2 && (
        <div className="graph_container">
          <div className="cancel_process1">
            <FaTimes onClick={() => setShowGraph2(false)} />
          </div>
          <Graph2 data={data2} />
        </div>
      )}
    </div>
  );
};

export default ContentWrap;
