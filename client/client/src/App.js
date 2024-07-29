import { useEffect, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Genre from "./components/Genre";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

import Books from "./components/Book/Books";

import Index from "./components/Details/Index";

const base_url = " http://localhost:8080/api/movie";

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order
          }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [sort, filterGenre, page, search]);

  return (
    <Router>
      <Routes>
        <Route path="/details" element={<Index movies={obj.movies ? obj.movies : []} />} />
        <Route path="/details/books" element={< Books />} />
        <Route path="/" element={<div className="wrapper">

          <div className="container">
            <div className="head">
              <img src="./images/logo.png" alt="logo" className="logo" />
              <Search setSearch={(search) => setSearch(search)} />
            </div>
            <div className="body">
              <div className="table_container">
                <Table movies={obj.movies ? obj.movies : []} />
                <Pagination
                  page={page}
                  limit={obj.limit ? obj.limit : 0}
                  total={obj.total ? obj.total : 0}
                  setPage={(page) => setPage(page)}
                />
              </div>
              <div className="filter_container">
                <Sort sort={sort} setSort={(sort) => setSort(sort)} />
                <Genre
                  filterGenre={filterGenre}
                  genres={obj.genres ? obj.genres : []}
                  setFilterGenre={(genre) => setFilterGenre(genre)}
                />
              </div>
            </div>
          </div>
        </div>} ></Route>
      </Routes>

    </Router>
  );
}

export default App;
