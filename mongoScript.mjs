
use('Codetribe');


db.Facilitators.insertOne({
    Name: "John Paul",
    Location: "Johannesburg",
    Course: "Full-Stack Development"
});


db.Trainees.insertOne({
    Name: "Chad Smith",
    Location: "Pretoria",
    Facilitator: "John Doe"
});


db.Projects.insertOne({
    Name: "MongoDB Basics",
    Course: "Full-Stack Development",
    Lesson: "Database Management"
});
