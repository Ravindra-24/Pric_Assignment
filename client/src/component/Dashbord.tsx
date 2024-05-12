import React, { useContext, useEffect, useState } from "react";
import SpinningBubble from "./SpinningBubble";
import Table, { Item } from "./Table";
import UpdateUserModal from "./modal/UpdateUserModal";
import { ModalContext } from "../contex/ModalContex";
import DeleteModal from "./modal/DeleteModal";
import axios from "axios";
import { getUser } from "../api/api_helper";
import AddUsers from "../component/modal/AddUserModal";

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const Dashbord = () => {
  const {isDeleteModalOpen, toggleUpdateModal, toggleDeleteModal} = useContext(ModalContext)
  const [userCollection, setUserCollection] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [updateItem, setUpdateItem] = useState<Item | null>(null)
  const [id, setId] = useState("")

  const handleEditClick = (item : Item) => {
      setUpdateItem(item)
      toggleUpdateModal()
    };
  const handleDeleteCard = (id: string) => {
    setId(id)
    toggleDeleteModal()
  };

  const fetchData = async () => {
    const data = await axios.get(getUser())
    setUserCollection(data.data.data)
  }
  

  useEffect( ()=>{
    setIsLoading(true)
    fetchData().then(()=> setIsLoading(false))

  },[])

  return (
    <>
    <AddUsers fetchData={fetchData}/>
    <DeleteModal fetchData={fetchData} id={id} setId={setId} showDeleteModal={isDeleteModalOpen} toggleDeleteModal={toggleDeleteModal}/>
    <UpdateUserModal fetchData={fetchData} updateItem={updateItem}/>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-[#bbffb7]">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3 ml-20">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="text-center">
                  <div className="flex items-center justify-center h-full">
                    <div role="status" className="text-center">
                      <SpinningBubble />
                    </div>
                  </div>
                </td>
              </tr>
            ) : userCollection.length > 0 ? (
              <>
                {userCollection.map((item:UserData) => (
                  <Table
                    key={item.id}
                    item={item}
                    handleEditClick={handleEditClick}
                    handleDeleteCard={handleDeleteCard}
                  />
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={4} className="font-bold p-4 text-center">
                  <div>No categories found. Please add some categories </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashbord;
