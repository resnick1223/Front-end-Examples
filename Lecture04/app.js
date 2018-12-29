var people = ['geddy', 'neil', 'alex'];
html = ejs.render('<%= people.join(", "); %>', {
    people: people
});