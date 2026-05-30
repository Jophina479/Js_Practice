function fetchUsers() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(["Ram", "Hari", "Sita"]);
        }, 1000);

    });
}

async function getUsers() {

    const users = await fetchUsers();

    console.log(users);
}

getUsers();


