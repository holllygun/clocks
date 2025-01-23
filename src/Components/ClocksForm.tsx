import React, { useState } from 'react'

interface ClocksFormProps {
  onAddWatch: (name: string, timezoneOffset: number) => void;
}

export const ClocksForm: React.FC<ClocksFormProps> = ({ onAddWatch }) => {
  const [name, setName] = useState ("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddWatch(name, timezoneOffset);
      setName("");
      setTimezoneOffset(0);
      console.log("Форма отправлена с данными:", { name, timezoneOffset });
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='clocks_form'>
        <label>
          Название:
        </label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
      </div>
      <div className='clocks_form'>
        <label>
          Временная зона:
        </label>
        <input
            type="number"
            value={timezoneOffset}
            onChange={(e) => setTimezoneOffset(Number(e.target.value))}
            step="1"
            required
          />
      </div>
      <button type="submit">Добавить</button>
    </form>

);
}
