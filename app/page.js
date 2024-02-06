import Date from "./components/date/page";
import Utilities from "./components/utilities/page";
import PieCharts from "./components/pieChart/page";
import BarCharts from "./components/barChat/page";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-green-700">All Utilities</h1>
          <Date></Date>
        </div>
        <div className="mb-14">
          <Utilities></Utilities>
        </div>

        <div className="grid grid-cols-2 gap-7">
          <div>
            <PieCharts></PieCharts>
          </div>
          <div>
            <BarCharts></BarCharts>
          </div>
        </div>
      </div>
    </main>
  );
}
