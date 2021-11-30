import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./Graph2.css";

interface Graph1Props {
  A: string[];
  B: string[];
  C: string[];
  D: string[];
  R12: string;
  R13: string;
  R24: string;
  R34: string;
}

const Graph2: React.FC<Graph1Props | any> = ({ data }) => {
  const SvgRef = useRef(null);

  useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data).sort();

      // First Node
      const node1 = dataKeys[0] ? data[dataKeys[0]].toString() : "";

      // Second node
      const node2 = dataKeys[1] ? data[dataKeys[1]].toString() : "";
      // Third node
      const node3 = dataKeys[2] ? data[dataKeys[2]].toString() : "";
      // Forth node
      const node4 = dataKeys[3] ? data[dataKeys[3]].toString() : "";

      //Relationships

      const R12 = dataKeys[0] ? data[dataKeys[4]] : "";
      const R13 = dataKeys[0] ? data[dataKeys[5]] : " ";
      const R24 = dataKeys[0] ? data[dataKeys[6]] : "";
      const R34 = dataKeys[0] ? data[dataKeys[7]] : "";

      const svg = d3.select(SvgRef.current);

      svg.attr("width", 600).attr("height", 600);

      const group1 = svg
        .append("g")
        .attr("width", 500)
        .attr("height", 500)
        .attr("transform", "translate(40,40)");

      //Arrows

      const g1arrow = group1
        .append("g")
        .append("path")
        .attr("id", "arrow1")
        .attr("d", "m 300 130 h -152 m 152 0 l 0 -7 l 7 7 l -7 7 l 0 -7 z ")
        .attr("stroke", "black")
        .attr("transform", "rotate(200,215,110)")
        .attr("fill", "darkblue");

      g1arrow
        .clone()
        .attr("id", "arrow2")
        .attr("d", "m 300 130 h -272 m 272 0 l 0 -7 l 7 7 l -7 7 l 0 -7 z")
        .attr("transform", "rotate(130,157,220)");

      g1arrow
        .clone()
        .attr("id", "arrow3")
        .attr("d", "m 120 65 h 282 l 0 6 l 6 -6 l -6 -6 l 0 6 Z")
        .attr("transform", "rotate(40,57,70)");

      g1arrow
        .clone()
        .attr("id", "arrow4")
        .attr("d", "m 120 65 h 162 l 0 6 l 6 -6 l -6 -6 l 0 6 Z")
        .attr("transform", "rotate(330,797,220)");

      // TextPaths

      group1
        .append("text")
        .attr("x", 54)
        .attr("dy", -4)
        .append("textPath")
        .attr("id", "text-curve")
        .attr("xlink:href", "#arrow1")
        .text(R12)
        .style("font-size", "12px");

      group1
        .append("text")
        .attr("x", 54)
        .attr("dy", -4)
        .append("textPath")
        .attr("id", "text-curve")
        .attr("xlink:href", "#arrow2")
        .text(R13)
        .style("font-size", "12px");

      group1
        .append("text")
        .attr("x", 54)
        .attr("dy", -4)
        .append("textPath")
        .attr("id", "text-curve")
        .attr("xlink:href", "#arrow3")
        .text(R24)
        .style("font-size", "12px");

      group1
        .append("text")
        .attr("x", 54)
        .attr("dy", -4)
        .append("textPath")
        .attr("id", "text-curve")
        .attr("xlink:href", "#arrow4")
        .text(R34)
        .style("font-size", "12px");

      // Boxes

      const grectBox1 = group1
        .append("rect")
        .attr("width", 90)
        .attr("height", 50)
        .attr("y", 100)
        .attr("x", 300)
        .attr("fill", "#f2f2f2")
        .attr("stroke-width", "0.2%")
        .attr("stroke", "lightgrey");

      grectBox1.clone().attr("x", 20).attr("y", 20);
      grectBox1.clone().attr("x", 20).attr("y", 400);
      grectBox1.clone().attr("y", 300);

      // Texts

      const gtext2 = group1
        .append("text")
        .text(node2)
        .attr("width", 50)
        .attr("height", 25)
        .attr("x", 40)
        .attr("y", 50)
        .attr("fill", "black")
        .style("font-size", "13px");

      gtext2.clone().text(node3).attr("y", 430);
      const gtext1 = gtext2.clone().text(node1).attr("y", 130).attr("x", 330);
      gtext1.clone().text(node4).attr("y", 330);
    }
  }, [data]);

  return (
    <div className="graph1_container">
      <svg ref={SvgRef}></svg>
    </div>
  );
};

export default Graph2;
