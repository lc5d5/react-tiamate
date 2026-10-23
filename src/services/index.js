import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const AXIOS = axios.create({
    baseURL: "http://localhost:3000"
    // baseURL: "https://tiamate-api.onrender.com"
});

export const QUERYCLIENT = new QueryClient();