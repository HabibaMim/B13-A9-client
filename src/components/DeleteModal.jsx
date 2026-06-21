import { deleteRoom } from '@/lib/rooms/action';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const DeleteModal = ({roomId}) => {

    const handleDelete = async () =>{
        "use server";
        await deleteRoom(roomId);
    }
    return (
        <div>
            <AlertDialog>
      
<Button className="flex-1 w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition">
                
                  Delete
                </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete this room?</AlertDialog.Heading>
            </AlertDialog.Header>
         
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteModal;