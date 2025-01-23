import React, { useState, useEffect } from 'react'
import { ClocksForm } from './ClocksForm';
import { Clocks } from './Clocks';

interface ClocksAppProps {
    id: string;
    name: string;
    timezoneOffset: number;
}

export const ClocksApp: React.FC = () => {
    const [clocks, setClocks] = useState<ClocksAppProps[]>([]);
    const [globalTime, setGlobalTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setGlobalTime(new Date()); 
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const addClocks = (name: string, timezoneOffset: number) => {
        setClocks((prev) => [
            ...prev,
            {id: Date.now().toString(), name, timezoneOffset},
        ]);
    }
    
    const removeClocks = (id:string) => {
        setClocks((prev) => prev.filter((clocks) => clocks.id !==id));
    };

    return (
    <div>
        <ClocksForm onAddWatch={addClocks} />
        <div className="clocks-list">
        {clocks.map((clocks) => (
            <Clocks
            key={clocks.id}
            id={clocks.id}
            name={clocks.name}
            timezoneOffset={clocks.timezoneOffset}
            onRemove={removeClocks}
            globalTime={globalTime}
            />
            ))}
        </div>
    </div>
  )
}
