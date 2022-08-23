 const FirstMVCTask = require('../models/firstmvctask')

 module.exports = {
   getEdit: (request, response) => {
     const id = request.params.id;
     FirstMVCTask.find({}, (err, task) => {
       response.render('edit.ejs', {
         firstmvcTasks: task,
         idTask: id,
       })
     })
   },
   deleteTask: (request, response) => {
     const id = request.params.id
     FirstMVCTask.findByIdAndRemove(id, (err) => {
       if (err) return response.status(500).send(err)
       response.redirect('/')
     })
   },
   updateTask: (request, response) => {
     const id = request.params.id;
     FirstMVCTask.findByIdAndUpdate(
       id,
       {
         title: request.body.title,
         content: request.body.content,
       },
       (err) => {
         if (err) return response.status(500).send(err)
         response.redirect('/')
       }
     )
   }
 }
 
