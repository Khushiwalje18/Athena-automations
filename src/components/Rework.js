import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion/dist/framer-motion";
import Sidebar from "./SideBar";
import axios from "axios";





const Rework = () => {
  const [rework, setRework] = useState([]);
  const [partrework, setPartRework] = useState([]);

  useEffect(() => {
    fetchReworkData();
    
  }, []);

  const fetchReworkData = async () => {
    try {
      const response = await axios.get("http://localhost:3010/Rework");
      console.log("rework", response.data);
      setRework(response.data);
      setPartRework(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <>
      <Sidebar />
      <center>
      <h1 style={{ padding: "0 60px 0px 60px",fontFamily:"Monaco" }}>Rework</h1>
      </center>
      <div className="rework">
       
        <div className="container">
          <motion.div drag>
            <BarChart
              width={400}
              height={400}
              data={rework}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <BarChart className="op-rework"></BarChart>
              <CartesianGrid />
              <Bar dataKey="Utilization" fill="purple"/>
              <XAxis
                dataKey="oprator_name"
                fontSize={10}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="FaceRework" stackId="a" fill="#93e4c1" />
              <Bar dataKey="BoreRework" stackId="a" fill="#3baea0" />
              <Bar dataKey="RADRework" stackId="a" fill="#118a7e" />
              <Bar dataKey="IDRad" stackId="a" fill="#1f6f78" />
              <Bar dataKey="FinishRough" stackId="a" fill="#90f6d7" />
              <Bar dataKey="MarkMissing" stackId="a" fill="#35bcbf" />
              <Bar dataKey="GrooveRework" stackId="a" fill="#41506b" />
              <Bar dataKey="ParllelRework" stackId="a" fill="#263849" />
            </BarChart>
           <h1 style={{ padding: "0 60px 0px 48px",fontFamily:"Monaco" }}>Operator Wise Rework</h1>
          </motion.div>
         
        </div>
        <motion.div
	drag
	>
	<BarChart width={400} height={400} data={partrework}>
	<CartesianGrid />
		 <Bar dataKey="Utilization" />
		 <XAxis dataKey="machine_name" fontSize={10} />
		 <YAxis />
		 <Tooltip />
		 <Legend />
		 <Bar dataKey="FaceRework" stackId="a" fill="#93e4c1" />
		 <Bar dataKey="BoreRework" stackId="a" fill="#3baea0" />
		 <Bar dataKey="RADRework" stackId="a" fill="#118a7e" />
		 <Bar dataKey="IDRad" stackId="a" fill="1f6f78" />
		 <Bar dataKey="FinishRough" stackId="a" fill="#90f6d7" />
		 <Bar dataKey="MarkMissing" stackId="a" fill="#35bcbf" />
		 <Bar dataKey="GrooveRework" stackId="a" fill="#41506b" />
		 <Bar dataKey="ParllelRework" stackId="a" fill="#263849" />

		</BarChart>	
    <h1 style={{ padding: "0 60px 0px 60px",fontFamily:"Monaco" }}>Machine Wise Rework</h1>
		</motion.div>
        <motion.div drag>
          <BarChart width={400} height={400} data={partrework}>
            <CartesianGrid />
            <Bar dataKey="Utilization" fill="purple" />
            <XAxis dataKey="part_name" fontSize={10} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="FaceRework" stackId="a" fill="#93e4c1" />
              <Bar dataKey="BoreRework" stackId="a" fill="#3baea0" />
              <Bar dataKey="RADRework" stackId="a" fill="#118a7e" />
              <Bar dataKey="IDRad" stackId="a" fill="#1f6f78" />
              <Bar dataKey="FinishRough" stackId="a" fill="#90f6d7" />
              <Bar dataKey="MarkMissing" stackId="a" fill="#35bcbf" />
              <Bar dataKey="GrooveRework" stackId="a" fill="#41506b" />
              <Bar dataKey="ParllelRework" stackId="a" fill="#263849" />
          </BarChart>
          <h1 style={{ padding: "0px 0px 0px 95px",fontFamily:"Monaco"}}>Part Wise Rework</h1>
        </motion.div>
     </div>
    </>
  );
};

export default Rework;
