const FirstMVCTask = require('../models/firstmvctask')

module.exports = {
  getIndex: async (request, response) => {
    try {
      const tasks = await FirstMVCTask.find()
      response.render('index.ejs', {
        FirstMVCTasks: tasks
      })
    } catch (err) {
      if (err) return response.status(500).send(err)
    }
  },
  createTask: async (request, response) => {
    const FirstMVCTask = new FirstMVCTask({
      title: request.body.title,
      content: request.body.content
    })
    try {
      await firstmvcTask.save()
      console.log(firstmvcTask)
      response.redirect('/')
    } catch (err) {
      if (err) return response.status(500).send(err)
      response.redirect('/')
    }
  }
}
