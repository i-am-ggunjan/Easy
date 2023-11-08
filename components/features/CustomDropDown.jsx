import { useState } from 'react';

const CustomDropdown = ({ options, onSelect, title }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <div className="">
            <select value={selectedOption} onChange={handleOptionChange} className="border-2 border-[#231F40] rounded-md px-4 py-2 focus:outline-none" >
                <option value="" disabled className='border-b-2 border-red-300 p-2'>{title}</option>

                {options.map((option, index) => {
                    return <option key={index} value={option?.class} className='text-[12px] text-[#6F6B80]'>{option?.class}</option>
                })}
            </select>
        </div>
    );
};

export default CustomDropdown;
