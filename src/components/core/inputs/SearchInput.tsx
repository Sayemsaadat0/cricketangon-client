import React, { FC } from 'react';
import TextInput from './TextInput';
import { SearchIcon } from 'lucide-react';

type SearchInputProps = {
    handleSearchSubmit: Function;
};

const SearchInput: FC<SearchInputProps> = ({ handleSearchSubmit }) => {
    const handleSearch = async (e: any) => {
        try {
            await handleSearchSubmit(e.target.value);
        } catch (error: any) {
            console.error(error);
        }
    };
    return (
        <div className="flex w-full min-w-40 border border-gray-300 rounded-[6px] overflow-hidden">
            <div className="flex items-center rounded-xl relative ">
                <input
                    onChange={handleSearch}
                    className="py-2 px-2 focus:right-0 focus:outline-none"
                    id="Search"
                    placeholder="Search"
                />
                <div className='p-2 '>
                    <SearchIcon  />
                </div>
            </div>
        </div>
    );
};

export default SearchInput