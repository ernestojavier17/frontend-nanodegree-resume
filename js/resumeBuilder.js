/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = 'Ernesto Olivo';
var formattedName = HTMLheaderName.replace('%data%', name);
var role = 'Senior Software Engineer';
var formattedRole = HTMLheaderRole.replace('%data%', role);

var work = {
    "jobs": [
        {
            employer: "",
            "title": "Sr. Software Engineer",
            "location": "",
            "dates": "Panama",
            "description": ""
        },
        {
            employer: "",
            "title": "Sr. Software Engineer",
            "location": "",
            "dates": "Panama",
            "description": ""
        }
    ]
}

var projects = {
    "projects": [
        {
            title: "",
            dates: "",
            description: "",
            images: []
        }
    ]
}

var bio = {
    "name": "",
    "role": "",
    "welcomeMessage": "",
    "contacts": {
        "mobile": "",
        "email": ""
    },
    "skills": []
}

var education = {
    "schools": [
        {
            "name": "",
            "location": "",
            "degree": "",
            "major": [],
            "dates": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        }
    ]
}



$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(work['position']);
$('#header').append(education.name);

