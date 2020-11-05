insert into admin(name, password, accesLevel) values("B-Dionysus", "god", 100);
insert into status(status) values("Portfolio");
insert into status(status) values("Private");
insert into status(status) values("Archived");
insert into projectCat(title, about, tabName, thumbnail, addedBy, displayOrder, status) 
values("Benjamin Dionysus", "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "Main Page", "./assets/img/mainPhoto.2b.png", 1, 1, 1);
insert into projectCat(title, about, tabName, thumbnail, addedBy, displayOrder, status) 
values("Web Development", "Full stack web development projects. HTML, CSS, JS, mySQL, and so on.", "Web Dev", "https://via.placeholder.com/150", 1, 2, 1);
insert into projectCat(title, about, tabName, thumbnail, addedBy, displayOrder, status) 
values("Microcontroller Projects", "Teensy and Arduino controllers. C++", "Arduino", "https://via.placeholder.com/150", 1, 3, 1);
insert into projectCat(title, about, tabName, thumbnail, addedBy, displayOrder, status) 
values("Music performance and composition", "Performance and composition. Piano, modular synthesis, Ableton Live, &c.", "Music", "https://via.placeholder.com/150", 1, 4, 1);
insert into Projects(title, about, displayName, externalLink, thumbnail, imageGallery, displayOrder, status, projectId)
values("Database-driven Portfolio Page", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Portfolio Page", "https://github.com/B-Dionysus/", "https://via.placeholder.com/150", "", 1, 1, 2);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(
"Group Project 1",
"https://b-dionysus.github.io/project1-Election/",
"https://github.com/B-Dionysus/project1-Election",
"/assets/img/projectThumbnails/project1.PNG", 1, 2, 1, 1, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(
"Burgers",
"https://still-garden-84796.herokuapp.com/",
"https://github.com/B-Dionysus/homework11-Burgers",
"/assets/img/projectThumbnails/burgers.PNG", 1, 2, 1, 2, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"Prework",
"https://b-dionysus.github.io/prework-about-me/",
"https://github.com/B-Dionysus/prework-about-me",
"/assets/img/projectThumbnails/prework.PNG", 1, 2, 1, 9, "2020-11-03", "2020-11-03"

);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(
"Portfolio",
"https://b-dionysus.github.io/homework2-portfolio/",
"https://github.com/B-Dionysus/homework2-portfolio",
"/assets/img/projectThumbnails/hw2.PNG", 1, 2, 1, 8, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"Password Generator",
"https://b-dionysus.github.io/homework2-passwordGenerator/",
"https://github.com/B-Dionysus/homework2-passwordGenerator",
"/assets/img/projectThumbnails/hw3.PNG", 1, 2, 1, 3, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"Quiz",
"https://b-dionysus.github.io/homework4-quiz/",
"https://github.com/B-Dionysus/homework4-quiz",
"/assets/img/projectThumbnails/hw4.PNG", 1, 2, 1, 4, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"Day Planner",
"https://b-dionysus.github.io/homework05-Calendar/Develop/",
"https://github.com/B-Dionysus/homework05-Calendar/",
"/assets/img/projectThumbnails/hw5.PNG", 1, 2, 1, 5, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"The Weather",
"https://b-dionysus.github.io/homework6-Weather/",
"https://github.com/B-Dionysus/homework6-Weather",
"/assets/img/projectThumbnails/hw6.PNG", 1, 2, 1, 6, "2020-11-03", "2020-11-03"
);
insert into Projects (displayName, externalLink, github, thumbnail, UserId, CategoryId, StatusId, displayOrder, createdAt, updatedAt) VALUES(

"House Cup",
"https://b-dionysus.github.io/bootcamp-HouseCup/",
"https://github.com/B-Dionysus/bootcamp-HouseCup",
"/assets/img/projectThumbnails/houseCup.png", 1, 2, 1, 7, "2020-11-03", "2020-11-03"
);
