
import Date from "./components/date/page";
import Utilities from "./components/utilities/page";
import PieCharts from "./components/pieChart/page";
import BarCharts from "./components/barChat/page";
import AreaCharts from "./components/areaChart/page";
import AllChatrs from "./components/charts/page";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-green-700">All Utilities</h1>
          <Date />
        </div>
        <div className="mb-14">
          <Utilities />
        </div>

        <div>
          <AllChatrs></AllChatrs>
        </div>
      </div>
    </main>
  );
}
