function fetchSettings() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "English"
            });
        }, 2000);

    });
}

fetchSettings()
    .then((data) => {
        console.log(data);
    });


