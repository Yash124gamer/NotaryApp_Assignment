const express = require('express')
const app = express()
const con = require('./config');                 //Establishing Connection from the Config.js

app.listen(8080);                                // API will now Work on The 8080 Port
app.use(express.json());                         //This will Allow us to accept and Send JSON data as Request or Response          
 
//getStatus API which gets status count for a given user’ created candidate.
app.post('/getStatus',async(req,res)=>{
    const {uid} = req.body;                      //Destructuring Uid from the request Body    
    const totalCandidates = await getCandidate(uid); 
    const joinedCandidates = await getCandidateStatus('joined');
    const interviewCandidates = await getCandidateStatus('interview');
    res.send({
        'Uid' :uid,
        'Total Candidate' : totalCandidates.length,
        'Joined' : joinedCandidates.length,
        'Interview' : interviewCandidates.length
        });
})


//Query for Getting data from the Candidate_Table Table Which return All the Data where Uid is Equal to the Given Uid
const getCandidate = (uid)=>{
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM Candidate_Table WHERE Uid = ${uid}`,(err,results,feilds)=>{
            if(err)
                reject(err)
            else
                resolve(results)
        });
    });
}
//Query for Getting Data from Candidate_Status Table which return All the data where status is equal to the Given Status('joined' or 'interview')
const getCandidateStatus = (status)=>{
    return new Promise((resolve,reject)=>{
        con.query(`SELECT * FROM Candidate_Status WHERE status = '${status}'`,(err,results,feilds)=>{
            if(err)
                reject(err)
            else
                resolve(results)
        });
    });
}