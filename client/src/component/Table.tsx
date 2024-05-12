import React, { useContext, useState } from "react";
import { ModalContext } from "../contex/ModalContex";
import UpdateUserModal from "./modal/UpdateUserModal";

export interface Item {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
  }

  interface TableProps {
    item: Item;
    handleEditClick: (item: Item) => void;
    handleDeleteCard: (id: string) => void;
}

const Table = ({ item, handleEditClick, handleDeleteCard }: TableProps) => {
   
  return (
    <>
    
    
      <tr key={item.id} className="bg-[#F2F2F2]">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {item.id}
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {item.name}
        </th>
        <td className="px-6 py-4">{item.email}</td>
        <td className="px-6 py-4">
          <button 
          onClick={() => handleEditClick(item)}
          >
            <svg
              className="h-5 w-5 hover:text-black"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </button>

          <button 
          onClick={(e) => handleDeleteCard(item.id)}
          >
            <svg
              className="h-5 w-5  hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </td>
      </tr>
      
    </>
  );
};

export default Table;
