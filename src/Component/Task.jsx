import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const App = () => {
  let [state, setState] = useState([]);
  let [searchTerm, setsearchTerm] = useState("");
  let [ascending, setAscending] = useState([]);
  let [desending, setDesending] = useState([]);

  //   let [filtered, setFiltered] = useState([]);
  useEffect(() => {
    let comments = async () => {
      let values = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let { data } = values;
      setState(data);
    };
    comments();
  }, []);

  let sortAsc = () => {
    let ascending = state.sort((a, b) => {
      return a.id - b.id;
    });
    let arrr = [...ascending];
    setAscending(arrr);
    console.log(ascending);
  };
  let sortDes = () => {
    let { id } = state;
    let desending = state.sort((a, b) => {
      return b.id - a.id;
    });
    let arr = [...desending];
    setDesending(arr);
    console.log(desending);
  };

  // let ascendingData = () => {
  //   ascending
  //     .filter(val => {
  //       if (searchTerm === "") {
  //         return val;
  //       } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //         return val;
  //         console.log(val.title);
  //       }
  //     })
  //     .map(data => (
  //       <div key={data.id}>
  //         <h1>Sl No:{data.id}</h1>
  //         <h1>Title:{data.title}</h1>
  //       </div>
  //     ));
  // };

  // let descendingData = () => {
  //   desending
  //     .filter(val => {
  //       if (searchTerm === "") {
  //         return val;
  //       } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //         return val;
  //         console.log(val.title);
  //       }
  //     })
  //     .map(data => (
  //       <div key={data.id}>
  //         <h1>Sl No:{data.id}</h1>
  //         <h1>Title:{data.title}</h1>
  //       </div>
  //     ));
  // };

  return (
    <>
      <div className="flex w-[100%]">
        <div className=" p-1 ml-[300px] w-[50%] basis-[70%]">
          <input
            type="search"
            name="searchTerm"
            className="border-2 p-1 m-auto w-[90%] mx-12 rounded-md my-8"
            placeholder="search..."
            value={searchTerm}
            onChange={e => setsearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-col basis-[40%] my-8 ml-[50px]">
          <button className="bg-blue-400 mx-2 p-2 rounded-md" onClick={sortAsc}>
            Ascending
          </button>
          <button
            className="bg-blue-400  p-2 mx-2 rounded-md"
            onClick={sortDes}
          >
            Descending
          </button>
        </div>
      </div>
      <div className="mx-[30%] text-black mt-[10px] w-[100%] ">
        <div>
          <table className="border-collapse border border-gray-400 ">
            <tr>
              <th className="align-middle text-white border bg-blue-400 font-bold	">
                Id
              </th>
              <th className="align-middle text-white bg-blue-400 font-bold	">
                Title
              </th>
            </tr>
            {state ? (
              state
                .filter(data => {
                  if (searchTerm === "") {
                    return data;
                  } else if (
                    data.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  }
                })

                // .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map(data => {
                  return (
                    <>
                      <tr className="border-collapse">
                        <td className=" border border-gray-300 text-center p-1">
                          {data.id}
                        </td>
                        <td className=" border border-gray-300 text-center p-1 text-lg">
                          {data.title}
                        </td>
                      </tr>
                    </>
                  );
                })
            ) : (
              <h2>{data.id}</h2>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
