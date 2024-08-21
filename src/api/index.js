//запит на отримання Юзерів...

export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return users;
} 