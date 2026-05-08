import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Database, Network, Globe, Layout, Zap, Award, BarChart3, Lock, ChevronRight, Sparkles } from 'lucide-react'

// THE DESIGN PALETTE
const COLORS = {
  midnight: '#081F5C', // Deep Navy
  royal: '#334EAC',    // Vibrant Blue
  moon: '#F7F2EB',      // Off-white Background
  porcelain: '#EDF1F6', // Card Background
  dawn: '#D0E3FF'      // Light Blue Accents
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')

  // Login Screen logic
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{backgroundColor: COLORS.moon}}>
        <div className="w-full max-w-sm bg-white p-8 rounded-[2.5rem] shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white" style={{backgroundColor: COLORS.royal}}>
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-serif mb-2" style={{color: COLORS.midnight}}>Welcome Back</h2>
          <input 
            type="password"
            placeholder="Enter Password"
            className="w-full border-none rounded-2xl p-4 mb-4 outline-none"
            style={{backgroundColor: COLORS.porcelain, color: COLORS.midnight}}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
            style={{backgroundColor: COLORS.midnight}}
          >
            Begin Quest <ChevronRight size={20} />
          </button>
        </div>
      </div>
    )
  }

  [span_0](start_span)// MAIN DASHBOARD[span_0](end_span)
  return (
    <div className="min-h-screen p-6 font-sans" style={{backgroundColor: COLORS.moon, color: COLORS.midnight}}>
      <header className="flex justify-between items-center mb-8">
        <div>
          [span_1](start_span)<p className="text-xs font-bold opacity-60 tracking-widest">GOOD MORNING[span_1](end_span)</p>
          [span_2](start_span)<h1 className="text-3xl font-serif">Aaradhya[span_2](end_span)</h1>
        </div>
        <div className="bg-white p-2 px-4 rounded-2xl shadow-sm text-center">
          [span_3](start_span)<p className="text-[10px] font-black uppercase opacity-40">Lvl[span_3](end_span)</p>
          [span_4](start_span)<p className="text-xl font-bold">3[span_4](end_span)</p>
        </div>
      </header>

      [span_5](start_span){/* Stats[span_5](end_span) */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="p-5 rounded-[2rem]" style={{backgroundColor: COLORS.porcelain}}>
          [span_6](start_span)<p className="text-[10px] font-black opacity-50 mb-1">AVG ACCURACY[span_6](end_span)</p>
          [span_7](start_span)<p className="text-2xl font-bold">74%[span_7](end_span)</p>
        </div>
        <div className="p-5 rounded-[2rem]" style={{backgroundColor: COLORS.porcelain}}>
          [span_8](start_span)<p className="text-[10px] font-black opacity-50 mb-1">DAY STREAK[span_8](end_span)</p>
          [span_9](start_span)<p className="text-2xl font-bold">5[span_9](end_span)</p>
        </div>
      </div>

      [span_10](start_span)<h3 className="text-lg font-bold mb-4">Pick your chapters and let's go.[span_10](end_span)</h3>
      
      [span_11](start_span){/* Chapter List[span_11](end_span) */}
      <div className="space-y-4">
        {[
          { name: 'Data Handling & Pandas', sub: 'df, matplotlib, visualization', icon: <Layout /> },
          { name: 'Database Query using SQL', sub: 'SELECT, JOIN, GROUP BY', icon: <Database /> },
          { name: 'Computer Networks', sub: 'protocols, topologies, OSI', icon: <Network /> }
        ].map((ch, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] flex items-center gap-4 shadow-sm border-2 border-transparent hover:border-[#334EAC] transition-all cursor-pointer">
            <div className="p-3 rounded-2xl text-[#334EAC]" style={{backgroundColor: COLORS.dawn}}>{ch.icon}</div>
            <div>
              [span_12](start_span)<p className="font-bold text-sm">{ch.name}[span_12](end_span)</p>
              [span_13](start_span)<p className="text-[10px] opacity-50">{ch.sub}[span_13](end_span)</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 text-white py-5 rounded-[2rem] font-bold text-lg shadow-lg active:scale-95 transition-transform" style={{backgroundColor: COLORS.midnight}}>
        [span_14](start_span)Begin Quest[span_14](end_span)
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
