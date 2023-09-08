import React from 'react';

export default function Tabs({ Tabs, tabIndex, setTabIndex }) {
  return (
    <div className='flex gap-4 mt-4 border-b' >
    {Tabs.map((tab, index) => (
        <div key={tab.id} className='' >
            <button onClick={()=>setTabIndex(tab.id)} className={`min-w-[100px] font-semibold ${tab.id === tabIndex ? 'text-primary border-b-2 border-primary':'text-gray-400'} `} >
                {tab.name}
            </button>

        </div>
    ))}
</div>
  );
}

