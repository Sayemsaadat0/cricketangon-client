'use client';

import { useCallback, useState } from 'react';
import { AlertDialog, AlertDialogContent } from '../ui/alert-dialog';
// import Button from '../ui/button';
import Deleteicon from './icons/dashboard/DeleteIcon';
import Button from './button/Button';


type DeleteActionProps = {
    handleDeleteSubmit: Function;
    isLoading?: boolean;
    isOnlyIcon?: boolean
};

const DeleteAction: React.FC<DeleteActionProps> = ({ handleDeleteSubmit, isLoading, isOnlyIcon }) => {
    const [open, setOpen] = useState(false);

    const handleDelete = useCallback(async () => {
        try {
            await handleDeleteSubmit();
            setOpen(false);
        } catch (err: any) {
            for (const key of err.errors) {
                console.log(key)
                // toast({
                //     description: `${key?.attr}- ${key?.detail}`,
                // });
            }

        }
    }, [handleDeleteSubmit]);

    return (
        <div>
            <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
                <div onClick={() => setOpen(!open)} className="cursor-pointer text-red-500 ">
                    {
                        isOnlyIcon ? <div className='border p-2 hover:bg-red-100 rounded-full border-red-500 mt-1'>
                            <Deleteicon />
                        </div> : <div className='flex items-center gap-2  '><Deleteicon /> Delete</div>
                    }

                </div>
                <AlertDialogContent className="py-10">
                    <div>
                        <div className="text-oc-primary-2-500 flex justify-center pb-3">
                            <Deleteicon size={'80'} />
                            <p></p>
                        </div>
                        <h3 className="text-w-title-3-Medium-36 text-center">Are You sure?</h3>
                        <p className="text-center py-2 text-w-paragraph-regular-20">
                            This action cant be undone, <br />

                            all the information will be lost forever
                        </p>
                    </div>
                    <div className="flex justify-center gap-8">
                        <Button
                            className="bg-oc-primary-2-500 "
                            disabled={isLoading}
                            label={`${isLoading ? 'Deleting' : 'Confirm'}`}
                            onClick={handleDelete}
                        />
                        <Button onClick={() => setOpen(false)} label="Cancel" variant="roundedOutlineBtn" />
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DeleteAction;
