import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE1NDk2ZTg3ZmNhOWY3MmY0NzU1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg1NzA0NSwiZXhwIjoxNjUzMTE2MjQ1fQ.DTdJxXYi1OsRNSyx9QKhclVRvxU0PEyIvyCPfD3zuAw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});