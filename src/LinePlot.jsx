import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function generateRandomSalesData() {
  // Generate random sales data for 12 months
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));
}

export default function LinePlot({
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 40,
  marginLeft = 40
}) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Generate random sales data for each month
    const salesData = generateRandomSalesData();

    // Define scales and line generator
    const xScale = d3.scaleLinear().domain([0, salesData.length - 1]).range([marginLeft, width - marginRight]);
    const yScale = d3.scaleLinear().domain([0, d3.max(salesData)]).nice().range([height - marginBottom, marginTop]);
    const lineGenerator = d3.line().x((d, i) => xScale(i)).y(yScale);

    // Render line
    svg.append("path")
      .datum(salesData)
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 1.5)
      .attr("d", lineGenerator);

    // Render circles
    svg.selectAll("circle")
      .data(salesData)
      .enter().append("circle")
      .attr("cx", (d, i) => xScale(i))
      .attr("cy", yScale)
      .attr("r", 2.5)
      .attr("fill", "white")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 1.5);

    // Render x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height - marginBottom})`)
      .call(d3.axisBottom(xScale).ticks(12).tickFormat((d, i) => `Month ${i + 1}`));

    // Render y-axis
    svg.append("g")
      .attr("transform", `translate(${marginLeft}, 0)`)
      .call(d3.axisLeft(yScale));

  }, [width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* Container for the plot */}
    </svg>
  );
}
