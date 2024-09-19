//запит на отримання Юзерів...

import axios from "axios";

export const getUsers = async () => await axios.get('https://TESTjsonplaceholder.typicode.com/users');
// стрілкова функція

