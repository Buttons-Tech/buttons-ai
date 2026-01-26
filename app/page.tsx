import DailyThree from './components/DailyThree';
import PointTheWay from './components/PointTheWay';
import WeeklyPlanner from './components/WeeklyPlanner';
import ProductDiscovery from './components/ProductDiscovery';
import LandingPage from './components/LandingPage';

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-20 font-sans">
      <header style={{backgroundImage: "url(/img/tribal.jpg)"}} className="p-6 bg-white border-b border-slate-100 flex justify-between items-center sticky top-0 z-50">
      <div className='bg-white p-2 '>

        <h1 className="text-xl font-bold text-slate-800 tracking-tight">BUTTONS</h1>
      </div>
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">O</div>
      </header>

      <main className="p-4 space-y-4">
        <DailyThree />
        <LandingPage />
        <PointTheWay />
        <WeeklyPlanner />
        <hr className="border-slate-200 my-4" />
      
        <ProductDiscovery />
      
      </main>
    </div>
  );
}