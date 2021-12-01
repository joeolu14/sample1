import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./Graph1.css";

interface Graph1Props {
  manufacturing: string;
  testing: string;
}

const Graph1: React.FC<Graph1Props | any> = ({ data }) => {
  const SvgRef = useRef(null);

  useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data);

      // First Node
      const text1a = dataKeys[0]
        ? dataKeys[0].toString().charAt(0).toUpperCase() + dataKeys[0].slice(1)
        : "";
      const text1b = dataKeys[0] ? "on" : "";
      const text1c = dataKeys[0] ? data[dataKeys[0]] : "";
      // Second node
      const text2a = dataKeys[1]
        ? dataKeys[1].toString().charAt(0).toUpperCase() + dataKeys[1].slice(1)
        : "";
      const text2b = dataKeys[1] ? "on" : "";
      const text2c = dataKeys[1] ? data[dataKeys[1]] : "";

      const svg = d3.select(SvgRef.current);

      svg.attr("width", 600).attr("height", 200);

      const group1 = svg
        .append("g")
        .attr("width", 500)
        .attr("height", 200)

        .attr("transform", "translate(40,40)");

      group1
        .append("g")
        .append("path")
        .attr("id", "arrowHead")
        .attr("d", "m 120 65 h 152 l 0 6 l 6 -6 l -6 -6 l 0 6 Z")
        .attr("stroke", "black")
        .attr("fill", "darkblue");

      group1
        .append("text")
        .attr("x", 44)
        .attr("dy", -4)
        .append("textPath")
        .attr("id", "text-curve")
        .attr("xlink:href", "#arrowHead")

        .text(data?.relationship?.type)
        .style("font-size", "14px");

      const grect1 = group1
        .append("rect")
        .attr("width", 100)
        .attr("height", 60)
        .attr("y", 30)
        .attr("fill", "#f2f2f2")
        .attr("stroke", "lightgrey")
        .attr("class", "rect_group");

      const gtext1 = group1
        .append("text")
        .text(text1a)
        .attr("width", 50)
        .attr("height", 25)
        .attr("x", 10)
        .attr("y", 50)
        .attr("fill", "black")
        .style("font-size", "13px")
        .attr("class", "text_group")
        .on("click", () => console.log("Text1A"));

      const gtext1b = group1
        .append("text")
        .text(text1b)
        .attr("width", 50)
        .attr("height", 25)
        .attr("x", 10)
        .attr("y", 65)
        .attr("fill", "black")
        .style("font-size", "13px")
        .attr("class", "text_group")
        .on("click", () => console.log("Text1B"));

      const gtext1c = group1
        .append("text")
        .text(text1c)
        .attr("width", 50)
        .attr("height", 25)
        .attr("x", 10)
        .attr("y", 80)
        .attr("fill", "black")
        .style("font-size", "13px")
        .attr("class", "text_group")
        .on("click", () => console.log("Text1C"));

      grect1.clone().attr("x", 300);
      gtext1
        .clone()
        .attr("x", 310)
        .text(text2a)
        .attr("class", "text_group")
        .on("click", () => console.log("Text2A"));
      gtext1b
        .clone()
        .attr("x", 310)
        .text(text2b)
        .attr("class", "text_group")
        .on("click", () => console.log("Text2B"));
      gtext1c
        .clone()
        .attr("x", 310)
        .text(text2c)
        .attr("class", "text_group")
        .on("click", () => console.log("Text2C"));
    }
  }, [data]);

  return (
    <div className="graph1_container">
      <svg ref={SvgRef}></svg>
    </div>
  );
};

export default Graph1;
