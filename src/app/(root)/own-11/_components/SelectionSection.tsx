import { PlusIcon } from 'lucide-react';
import Image from 'next/legacy/image';
import React, { useRef, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import SearchInput from '@/components/core/inputs/SearchInput';
import Button from '@/components/core/button/Button';
import { playersDummy } from '@/data/dummy.data';
import { toPng } from 'html-to-image';

const PlayerSelectModal = ({ onSelect, index }: { onSelect: (player: any, index: number) => void; index: number }) => {
    return (
        <Dialog>
            <DialogTrigger className="text-white bg-c-white-800 w-fit h-fit p-1 cursor-pointer rounded-full">
                <PlusIcon />
            </DialogTrigger>
            <DialogContent className="md:max-w-[30%] max-h-[60%] overflow-auto">
                <DialogHeader>
                    <DialogTitle>Select Player</DialogTitle>
                    <DialogDescription></DialogDescription>

                    <div className="w-[70%] mx-auto">
                        <SearchInput handleSearchSubmit={() => undefined} />
                    </div>
                    <div className="h-0.5 w-full bg-c-white-700"></div>

                    <div className="space-y-2">
                        {playersDummy.map((player: any) => (
                            <div className="flex justify-between items-center" key={player.id || Math.random()}>
                                {/* card */}
                                <div className="flex items-center gap-5">
                                    <div>
                                        <Image
                                            className="rounded-full"
                                            width={40}
                                            height={40}
                                            src={player.avatar || 'https://i.pinimg.com/736x/d6/31/aa/d631aabc3d2b07c6d93f2d40d189493d.jpg'}
                                            alt=""
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>{player.player_name}</div>
                                </div>
                                <div>
                                    <Button
                                        label="Select"
                                        onClick={() => onSelect(player, index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

const SelectionSection = () => {
    const [players, setPlayers] = useState<any[]>([...Array(11).fill(null)]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleSelectPlayer = (player: any, index: number) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = player;
        setPlayers(updatedPlayers);
    };

    const handleDownload = async () => {
        if (sectionRef.current) {
            const dataUrl = await toPng(sectionRef.current);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'selected_players.png';
            link.click();
        }
    };

    return (
        <div className="grid grid-cols-12 gap-3">
            {/* selection container */}
            <div className="p-1 space-y-2 col-span-3">
                <div className="uppercase text-c-violet-500 p-3 border text-center">
                    Select Your Favorite Player
                </div>

                <div className="space-y-2 bg-c-white-500 p-3 rounded-[10px]">
                    {players.map((player, index) => (
                        <div className="flex justify-between items-center" key={index}>
                            {/* card */}
                            <div className="flex items-center gap-5">
                                <div>
                                    <Image
                                        className="rounded-full"
                                        width={45}
                                        height={45}
                                        src={
                                            player?.avatar ||
                                            'https://i.pinimg.com/736x/d6/31/aa/d631aabc3d2b07c6d93f2d40d189493d.jpg'
                                        }
                                        alt=""
                                        objectFit="cover"
                                    />
                                </div>
                                <div>{player?.player_name || `Player ${index + 1}`}</div>
                            </div>
                            <div>
                                <PlayerSelectModal onSelect={handleSelectPlayer} index={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                ref={sectionRef} // Reference for the section to capture
                style={{
                    backgroundImage: "url('/pickBg.png')",
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="rounded-[10px] relative flex items-center px-20 overflow-hidden col-span-9"
            >
                <div className="flex justify-center flex-wrap gap-10  max-w-[45%]">
                    {players.map((player, index) => (
                        <div className="" key={index}>
                            <div className="h-full w-full">
                                <Image
                                    className="object-cover"
                                    width={75}
                                    height={75}
                                    src={
                                        player?.avatar ||
                                        'https://i.pinimg.com/736x/d6/31/aa/d631aabc3d2b07c6d93f2d40d189493d.jpg'
                                    }
                                    alt=""
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Background Image */}
                <div className="absolute right-0 -bottom-2">
                    <Image
                        className="object-cover"
                        width={450}
                        height={550}
                        src={
                            players[0]?.cover_image ||
                            'https://i.pinimg.com/736x/d6/31/aa/d631aabc3d2b07c6d93f2d40d189493d.jpg'
                        }
                        alt=""
                        objectFit="cover"
                    />
                </div>
            </div>

            {/* Download Button */}
            <div className="col-span-12 text-center mt-5">
                <Button label="Download as PNG" onClick={handleDownload} />
            </div>
        </div>
    );
};

export default SelectionSection;
