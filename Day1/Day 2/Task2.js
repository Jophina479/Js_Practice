const button = {
    name: "Submit Button",

    click() {
        console.log(this.name);
    }
};

// Losing context
const newClick = button.click;
newClick(); 

// Fix using bind()
const fixedClick = button.click.bind(button);
fixedClick();


