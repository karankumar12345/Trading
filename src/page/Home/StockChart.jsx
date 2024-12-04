import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const series = [
    {
      data: [
   
    [1730689557404, 69317.9848723955],
    [1730692947542, 68980.294467579],
    [1730697591518, 69077.4467798451],
    [1730700870128, 68909.5696667875],
    [1730704712826, 68985.503748709],
    [1730708330159, 68639.8228568942],
    [1730711457629, 68816.4047995141],
    [1730714991523, 68795.7748895565],
    [1730718628273, 68634.0917341459],
    [1730722427424, 68846.4408507064],
    [1730725732625, 69021.3317586797],
    [1730729479112, 68588.8157477494],
    [1730732843661, 68369.5109399372],
    [1730736553940, 68447.316315876],
    [1730740860251, 67502.4766061354],
    [1730743836633, 67627.4382902074],
    [1730747746734, 67939.3587094228],
    [1730750950863, 67704.7293507066],
    [1730754560959, 67393.7564421],
    [1730758406352, 67568.5066450105],
    [1730762317633, 67826.1359557712],
    [1730765944529, 67924.0276613568],
    [1730769474880, 67974.2489863129],
    [1730772072708, 67931.8880099915],
    [1730775721869, 67845.0731857862],
    [1730780296381, 68328.4164233378],
    [1730783204606, 68294.7126274905],
    [1730787605486, 68558.369977607],
    [1730790423683, 68707.3438472912],
    [1730794247578, 68967.0519482183],
    [1730797490418, 68937.3258251503],
    [1730801240237, 68682.2790379192],
    [1730805093184, 68832.9870763245],
    [1730808470833, 68777.978468464],
    [1730811874272, 68800.1318012792],
    [1730815569169, 68759.6308677335],
    [1730819361725, 69850.6164806002],
    [1730822979611, 69671.6557148374],
    [1730827280667, 70389.6231970836],
    [1730830326666, 70114.021242513],
    [1730833997040, 70156.7159974816],
    [1730837476671, 69524.6101899223],
    [1730841113761, 69351.5565658855],
    [1730845199057, 69176.4744254778],
    [1730847643415, 69432.885908334],
    [1730851749769, 69504.6432629827],
    [1730855734796, 71328.5756209915],
    [1730858957183, 71048.7527000882],
    [1730863119123, 73936.2915018818],
    [1730866162942, 74000.5371531924],
    [1730869534459, 74299.1877291954],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 400, // Increase height for better visibility
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      colors: ["#fff"],
      size: 4,
      style: "hollow",
      strokeWidth: 1,
      strokeColor: "#fff",
    },
    xaxis: {
      type: "datetime",
      min: Math.min(...series[0].data.map((d) => d[0])), // Dynamically set minimum
      max: Math.max(...series[0].data.map((d) => d[0])), // Dynamically set maximum
      tickAmount: 4, // Adjust to reduce clutter
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      dashArray: 4,
      show: true,
    },
  };

const timeSeries=[
    {keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Time Series (Daily)",
        label:"1 Day",
        value:1
    },
    {keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Weekly Time Series ",
        label:"1 week",
        value:7
    },
    {keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Monthly Time Series ",
        label:"1 Month",
        value:30
    }
]
const [active,setActive]=useState(timeSeries[0].label)

  return (

    <div id="chart-timelines">
    <div className="space-x-3 mb-4">
      {timeSeries.map((item) => (
        <Button
          key={item.label}
          onClick={() => setActive(item.label)}
          className={active === item.label ? "bg-blue-500 text-white" : ""}
        >
          {item.label}
        </Button>
      ))}
    </div>
    <ReactApexChart options={options} series={series} />
  </div>
  );
};

export default StockChart;
