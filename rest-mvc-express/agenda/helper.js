/*
curl --request POST --data "name=Liviu&phoneNumber=89899891&email=liviu@gmail.com" http://localhost:3000/agenda/
curl --request POST --data "name=Andre&phoneNumber=89899892&email=andrei@amazon.com" http://localhost:3000/agenda/
curl --request POST --data "name=Daniel&phoneNumber=89899893&email=corpse@home.com" http://localhost:3000/agenda/
curl --request POST --data "name=Vlad&phoneNumber=89899894&email=vlad@campion.ro" http://localhost:3000/agenda/

// Error
curl --request POST --data "name=Vlad&phoneNumber=89899894&email=vlad@campion.ro" http://localhost:3000/agenda/


curl --request GET http://localhost:3000/agenda/
curl --request GET http://localhost:3000/agenda/vlad@campion.ro

// Error
curl --request GET http://localhost:3000/agenda/vlad@campion.ro

curl --request DELETE http://localhost:3000/agenda/vlad@campion.ro

*/