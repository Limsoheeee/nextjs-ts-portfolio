import { useRef, useEffect, useState } from "react";
import { useCoinChart } from "./qureys";
import Chart from "chart.js/auto";
import styled from "styled-components";

const CoinChart = () => {
  const { data: coinChart } = useCoinChart();
  console.log("data=====>", coinChart);

  const [chart, setChart] = useState<Chart | null>(null);

  const convertedDate = () => {
    var event = new Date(coinChart);
    console.log("event===>", coinChart);
    let date = JSON.stringify(event);
    // return (date = date.slice(6, 11));
    return `${date.slice(6, 8)} ${"/"} ${date.slice(9, 11)}`;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw: Function = () => {
    if (!canvasRef || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    let dataLabels: string[] = [];
    let usage_data: number[] = [];
    let domain_usage_data: number[] = [];
    // for (let i = 0; i < data?.length; i++) {
    //   dataLabels[i] = convertedDate(data[i].stat_dtime_utc);
    //   usage_data[i] = parseInt(data[i].usage);
    //   domain_usage_data[i] = parseInt(data[i].domain_usage);
  };

  // let gradient_all = ctx.createLinearGradient(0, 0, 0, 300);
  // gradient_all.addColorStop(0, "rgba(119, 59, 248, 1)");
  // gradient_all.addColorStop(1, "rgba(72, 133, 237, 1)");

  //   Chart.defaults.font.size = 11;
  //   const _chart: Chart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: dataLabels,
  //       datasets: [
  //         {
  //           barPercentage: 0.5,
  //           barThickness: 6,
  //           maxBarThickness: 10,
  //           borderRadius: 30,
  //           backgroundColor: gradient_all,
  //           data: domain_usage_data,
  //         },
  //       ],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       responsive: true,
  //       scales: {
  //         x: {
  //           display: "auto",
  //           suggestedMin: 300,
  //           suggestedMax: 330,
  //           ticks: {
  //             maxTicksLimit: 30,
  //             maxRotation: 0,
  //           },
  //           grid: {
  //             offset: true,
  //             display: false,
  //           },
  //         },
  //         y: {
  //           border: {
  //             dash: [2, 4],
  //           },
  //           ticks: {
  //             maxTicksLimit: 5,
  //           },
  //           min: 0,
  //           suggestedMax: 10,
  //           grid: {
  //             drawOnChartArea: true,
  //           },
  //         },
  //       },
  //       font: {
  //         size: 11,
  //       },
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //       elements: {
  //         line: {
  //           tension: 0,
  //         },
  //       },
  //       hover: {
  //         mode: "nearest",
  //         intersect: true,
  //       },
  //       animation: {
  //         easing: "easeInOutBack",
  //       },
  //     },
  //   });
  //   setChart(_chart);
  // };

  // useEffect(() => {
  //   if (chart) {
  //     chart.destroy();
  //     draw();
  //   } else {
  //     draw();
  //   }
  // }, [coinChart ]); // depth

  return (
    <CanvasWrap>
      <canvas ref={canvasRef}></canvas>
    </CanvasWrap>
  );
};
const CanvasWrap = styled.div`
  width: 85%;
  height: 199px;
`;

export default CoinChart;
