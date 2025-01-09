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
        <div className="">
            <div className="flex justify-between border border-c-white-700 overflow-hidden rounded-[10px]">
                <input
                    onChange={handleSearch}
                    className="py-2 px-2 focus:right-0 focus:outline-none w-full"
                    id="Search"
                    placeholder="Search"
                />
                <div className='p-2 text-c-white-700'>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default SearchInput