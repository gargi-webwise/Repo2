import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const timelineItems = [
    {
      title: 1,
      cardTitle: "Assemble the right team",
      cardSubtitle:'',
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      title: 2,
      cardTitle: "Sprint planning",
      cardSubtitle:"",
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      title: 3,
      cardTitle: "Tech architecture",
      cardSubtitle:"",
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      title: 4,
      cardTitle: "Standups & weekly demos",
      cardSubtitle:"",
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      title: 5,
      cardTitle: "Code reviews",
      cardSubtitle:"",
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      title: 6,
      cardTitle: "Iterative delivery",
      cardSubtitle:"",
      cardDetailedText: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
  ];
    return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chrono
        items={timelineItems}
        mode="HORIZONTAL"
        // slideItemDuration={2500}
        // slideShow
        // enableOutline
        // theme={{
        //   primary: "blue",
        //   secondary: "lightblue",
        //   cardBgColor: "white",
        //   cardForeColor: "black",
        //   titleColor: "black",
        // }}
      />
    </div>
  );
};

export default Timeline;
