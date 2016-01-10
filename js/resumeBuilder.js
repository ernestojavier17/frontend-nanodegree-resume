/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = 'Ernesto Olivo';
var formattedName = HTMLheaderName.replace('%data%', name);
var role = 'Senior Software Engineer';
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

