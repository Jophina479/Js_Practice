function fetchUsers() {

    return new Promise((resolve, reject) => {

        const success = false;

        setTimeout(() => {

            if (success) {
                resolve(["Ram", "Hari"]);
            } else {
                reject("Failed to fetch users");
            }

        }, 1000);

    });
}

async function getUsers() {

    try {

        const users = await fetchUsers();

        console.log(users);

    } catch (error) {

        console.log("Something went wrong!");

    }
}

getUsers();

