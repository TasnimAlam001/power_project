import React from "react";
import PieChars from "../pieChart/page";
import BarCharts from "../barChat/page";
import AreaCharts from "../areaChart/page";
import ColumnCharts from "../columnChart/page";

export default function AllChatrs() {
  return (
    <div className="grid grid-cols-2 gap-7">
      <div><PieChars/></div>
      <div><BarCharts /></div>
      <div><AreaCharts/></div>            
      <div><ColumnCharts/></div>
    </div>
  );
}
