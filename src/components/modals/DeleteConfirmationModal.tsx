import { createPortal } from 'react-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../ui/Button';

type Props = {
   id: string,
   handleDelete: Function,
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
   isOpen: boolean
}

const DeleteConfirmationModal = ({
   id,
   handleDelete,
   setIsOpen,
   isOpen,
}: Props) => {
   return (
      <>
         <Button
            label='Delete'
            prefixIcon={<DeleteIcon />}
            className='bg-red-400 text-xl text-white font-semibold hover:bg-red-300'
            onClick={() => setIsOpen(true)}
         />
         {isOpen &&
            createPortal(
               <div className='absolute top-28 bg-slate-50 shadow-lg p-4 right-28 rounded text-black-dark flex flex-col justify-between border-1'>
                  <p className='font-semibold pb-3'>
                     Are you sure you want to delete this ticket?
                  </p>
                  <div className='flex gap-3'>
                     <Button
                        className='bg-red-400  hover:bg-red-300 w-1/3'
                        prefixIcon={<DeleteIcon />}
                        label='Yes'
                        onClick={handleDelete(id)}
                     />
                     <Button
                        className='bg-green-600  hover:bg-green-400 w-1/3'
                        prefixIcon={<CancelIcon />}
                        label='Cancel'
                        onClick={() => setIsOpen(false)}
                     />
                  </div>
               </div>,
               document.body
            )}
      </>
   );
};

export default DeleteConfirmationModal;
