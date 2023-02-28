import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js/auto';
    import { Bar } from 'react-chartjs-2';

    interface DefaultTheme {
     datasets: {
            type: string | any;
            label: string;
            backgroundColor: string;
            data: {
                x: string;
                y: number;
            }[];
            borderColor: string;
            borderWidth: number;
        }[]
        }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );


const data :DefaultTheme = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [
              { x: 'January', y: 1 },
              { x: 'February', y: 2 },
              { x: 'March', y: 3 },
              { x: 'April', y: 4 },
              { x: 'May', y: 5 },
              { x: 'June', y: 6 }
            ],
            borderColor: 'red',
            borderWidth: 2,
          },
    ]
  };
  
  const Chart = () => (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
  
  export default Chart;