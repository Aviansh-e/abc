// import movies from '../config/movies.json'  assert { type: 'json' };

import yogas from '../config/yogas.json' assert{type: 'json'};

// import Movie from '../models/Movie.js';
// import yoga from '../models/Yoga.js';
import yoga from '../models/yogiji.js';
import yogadetails from '../models/data.js';


import { Router } from 'express';
const router = Router();

export const insertMovies = async () => {
    try {
        const data = await yoga.insertMany(yogas);
        return Promise.resolve(data);
    }
    catch (err) {
        return Promise.reject(err);
    }
};

router.get("/movie", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

        const genreOptions = [
            "mental wellness",
            "meditation",
            "pain management",
            "weight loss",
            "yoga",
            "camp",
            "diet",
            "meditation",
            "weekend",
        ];

        genre === "All"
            ? (genre = [...genreOptions])
            : (genre = req.query.genre.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const movies = await yoga.find({ name: { $regex: search, $options: "i" } })
            .where("genre")
            .in([...genre])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit);

        const total = await yoga.countDocuments({
            genre: { $in: [...genre] },
            name: { $regex: search, $options: "i" },
        });

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            genres: genreOptions,
            movies,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

router.post('/details', async (req, res) => {
    try {
        const data = await yogadetails.insertMany(req.body);
        // console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal server error" });
    }

})
export default router;
