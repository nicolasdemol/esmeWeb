import React, { Component } from 'react';
import { useTable } from "react-table";

/*
const data = [
    { firstName: "jane", lastName: "doe", action: 20 },
    { firstName: "john", lastName: "smith", action: 21 }
];

const columns = [
  {
    Header: "Infos",
    columns: [
      {
        Header: "Prénom",
        accessor: "firstName"
      },
      {
        Header: "Nom",
        accessor: "lastName"
      }
    ]
  },
  {
    Header: "Autre Info",
    columns: [
      {
        Header: "Action",
        accessor: "action"
      }
    ]
  }
];

const Table = ({columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    });

    return (
        <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}
*/

class Home extends Component {
    render() {
        return (
                // <Table columns={columns} data={data} />
            <div>
                <div className="flex justify-center items-center mt-10 nav-links">
                    <div class="container mx-auto py-6 px-4">
                        <h1 class="text-3xl py-4 text-blue-800 border-b mb-10">Datatable</h1>

                        <div class="mb-4 flex justify-between items-center">
                            <div class="flex-1 pr-4">
                                <div class="relative md:w-1/3">
                                    <input type="search"
                                        class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                        placeholder="Re chercher..." />
                                </div>
                            </div>
                            <div>
                                <div class="shadow rounded-lg flex">
                                    <div class="relative">
                                        <button
                                            class="rounded-lg inline-flex items-center bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:hidden" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                                <path
                                                    d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                            </svg>
                                            <span class="hidden md:block">Afficher</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" width="24" height="24"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>

                                        <div x-show="open"
                                            class="z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden">
                                            <template>
                                                <label
                                                    class="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2">
                                                    <div class="text-teal-600 mr-3">
                                                        <input type="checkbox" class="form-checkbox focus:outline-none focus:shadow-outline" checked />
                                                    </div>
                                                    <div class="select-none text-gray-700"></div>
                                                </label>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative h-48">
                            <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                                <thead>
                                    <tr class="text-left">
                                        <th class="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                                            <label
                                                class="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                                                <input type="checkbox" class="form-checkbox focus:outline-none focus:shadow-outline" />
                                            </label>
                                        </th>
                                        <template>
                                            <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"></th>
                                        </template>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template>
                                        <tr>
                                            <td class="border-dashed border-t border-gray-200 px-3">
                                                <label
                                                    class="text-blue-700 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                                                    <input type="checkbox" class="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline" />
                                                </label>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 date">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 firstName">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 lastName">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 label">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 action">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                            <td class="border-dashed border-t border-gray-200 points">
                                                <span class="text-gray-700 px-6 py-3 flex items-center"></span>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
