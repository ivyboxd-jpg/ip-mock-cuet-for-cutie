import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Database, Network, Layout, Lock, ChevronRight, Sparkles, CheckCircle2, XCircle, Clock, Award } from 'lucide-react'

// THE DESIGN PALETTE
const COLORS = {
  midnight: '#081F5C', 
  royal: '#334EAC',    
  moon: '#F7F2EB',      
  porcelain: '#EDF1F6', 
  dawn: '#D0E3FF'      
}

function App() {
  const [view, setView] = useState('login') // login, dashboard, quest, results
  const [selectedChapters, setSelectedChapters] = useState([])

  // 1. LOGIN SCREEN
  if (view === 'login') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{backgroundColor: COLORS.moon}}>
        <div className="w-full max-w-sm bg-white p-8 rounded-[2.5rem] shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white" style={{backgroundColor: COLORS.royal}}>
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-serif mb-2" style={{color: COLORS.midnight}}>Welcome Back</h2>
          <input type="password" placeholder="Enter Password" className="w-full border-none rounded-2xl p-4 mb-4 outline-none" style={{backgroundColor: COLORS.porcelain}} />
          <button onClick={() => setView('dashboard')} className="w-full text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2" style={{backgroundColor: COLORS.midnight}}>
            Unlock Progress <ChevronRight size={20} />
          </button>
        </div>
      </div>
    )
  }

  [span_0](start_span)// 2. DASHBOARD SCREEN[span_0](end_span)
  if (view === 'dashboard') {
    return (
      <div className="min-h-screen p-6 font-sans" style={{backgroundColor: COLORS.moon, color: COLORS.midnight}}>
        <header className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs font-bold opacity-60 tracking-widest">GOOD MORNING</p>
            <h1 className="text-3xl font-serif">Aaradhya</h1>
          </div>
          <div className="bg-white p-2 px-4 rounded-2xl shadow-sm text-center">
            <p className="text-[10px] font-black uppercase opacity-40">Lvl</p>
            [span_1](start_span)<p className="text-xl font-bold">3[span_1](end_span)</p>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-5 rounded-[2rem]" style={{backgroundColor: COLORS.porcelain}}>
            [span_2](start_span)<p className="text-[10px] font-black opacity-50 mb-1">AVG ACCURACY[span_2](end_span)</p>
            [span_3](start_span)<p className="text-2xl font-bold">74%[span_3](end_span)</p>
          </div>
          <div className="p-5 rounded-[2rem]" style={{backgroundColor: COLORS.porcelain}}>
            [span_4](start_span)<p className="text-[10px] font-black opacity-50 mb-1">DAY STREAK[span_4](end_span)</p>
            [span_5](start_span)<p className="text-2xl font-bold">5[span_5](end_span)</p>
          </div>
        </div>

        [span_6](start_span)<h3 className="text-lg font-bold mb-4">Pick your chapters and let's go.[span_6](end_span)</h3>
        <div className="space-y-4">
          {[
            { name: 'Data Handling & Pandas', sub: 'df, matplotlib, visualization', icon: <Layout /> },
            { name: 'Database Query using SQL', sub: 'SELECT, JOIN, GROUP BY', icon: <Database /> },
            { name: 'Computer Networks', sub: 'protocols, topologies, OSI', icon: <Network /> }
          ].map((ch, i) => (
            <div key={i} onClick={() => setSelectedChapters([ch.name])} className="bg-white p-5 rounded-[2rem] flex items-center gap-4 shadow-sm border-2 border-transparent active:border-[#334EAC] transition-all cursor-pointer">
              <div className="p-3 rounded-2xl text-[#334EAC]" style={{backgroundColor: COLORS.dawn}}>{ch.icon}</div>
              [span_7](start_span)<div><p className="font-bold text-sm">{ch.name}[span_7](end_span)[span_8](start_span)</p><p className="text-[10px] opacity-50">{ch.sub}[span_8](end_span)</p></div>
            </div>
          ))}
        </div>

        <button onClick={() => setView('quest')} className="w-full mt-10 text-white py-5 rounded-[2rem] font-bold text-lg shadow-lg active:scale-95 transition-transform" style={{backgroundColor: COLORS.midnight}}>
          [span_9](start_span)Begin Quest[span_9](end_span)
        </button>
      </div>
    )
  }

  // 3. QUEST SCREEN (The Mock Practice)
  if (view === 'quest') {
    return (
      <div className="min-h-screen p-6" style={{backgroundColor: COLORS.moon, color: COLORS.midnight}}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-sm">Question 1 of 10</span>
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            <Clock size={14} /> 12:45
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm mb-6 min-h-[300px] flex flex-col justify-center">
          [span_10](start_span)<p className="text-xs font-bold uppercase text-[#334EAC] mb-2 tracking-widest">Database Query using SQL[span_10](end_span)</p>
          [span_11](start_span)<h2 className="text-xl font-serif leading-snug">Which SQL clause is used to filter groups after GROUP BY?[span_11](end_span)</h2>
        </div>

        <div className="space-y-3">
          {['WHERE', 'HAVING', 'ORDER BY', 'GROUP BY'].map((opt, i) => (
            <button key={i} onClick={() => setView('results')} className="w-full p-5 bg-white rounded-2xl text-left font-bold border-2 border-transparent active:border-[#334EAC] shadow-sm transition-all">
              {opt}
            </button>
          ))}
        </div>
      </div>
    )
  }

  [span_12](start_span)// 4. RESULTS SCREEN[span_12](end_span)
  if (view === 'results') {
    return (
      <div className="min-h-screen p-6" style={{backgroundColor: COLORS.moon, color: COLORS.midnight}}>
        <div className="text-center mb-10">
          [span_13](start_span)<h1 className="text-3xl font-serif mb-2">Quest Complete[span_13](end_span)!</h1>
          [span_14](start_span)<p className="text-sm opacity-60">You showed up and did the work.[span_14](end_span)</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-[2rem] text-center shadow-sm">
            [span_15](start_span)<p className="text-[10px] font-black opacity-40 uppercase">Total Score[span_15](end_span)</p>
            [span_16](start_span)<p className="text-2xl font-bold">42/50[span_16](end_span)</p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] text-center shadow-sm">
            [span_17](start_span)<p className="text-[10px] font-black opacity-40 uppercase">Accuracy[span_17](end_span)</p>
            [span_18](start_span)<p className="text-2xl font-bold text-green-600">84%[span_18](end_span)</p>
          </div>
        </div>

        <div className="bg-[#081F5C] text-white p-6 rounded-[2.5rem] mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-yellow-400" />
              [span_19](start_span)<p className="text-xs font-bold uppercase tracking-widest">AI Review[span_19](end_span)</p>
            </div>
            <p className="text-sm italic leading-relaxed opacity-90">
              [span_20](start_span)"Aaradhya, you absolutely nailed Computer Networks today - 5/5! SQL is coming along too, just watch out for GROUP BY questions."[span_20](end_span)
            </p>
          </div>
        </div>

        <button onClick={() => setView('dashboard')} className="w-full bg-white border-2 border-[#081F5C] text-[#081F5C] py-5 rounded-[2rem] font-bold text-lg active:scale-95 transition-transform">
          [span_21](start_span)Home[span_21](end_span)
        </button>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
