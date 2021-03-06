'use strict'

const Task = use('App/Model/Mongo/Task')
const Comment = use('App/Model/Mongo/Comment')

class ToDoListController {

  * getTasks(req, res){
    try {
      Task.find({}, (err, _tasks) => {
        if (err){
          console.log(err);
          return res.send({
            message: 'error',
            data: err
          })
        }
        else {
          if (_tasks){
            return res.send({
              message: 'success',
              data: _tasks
            })
          }
          else {
            return res.send({
              message: 'error',
              data: null
            })
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  * insertTask(req, res){
    try {
      let data = req.all()
      let task = new Task()
      task.name = data.name
      task.checked = false
      task.save(function(err, _task){
        if (err){
          console.log(err)
          return res.send({message:'error', data: err})
        }
        else {
          if (_task){ return res.send(_task) }
          else { return res.send(null) }
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  * setStatusTask(req, res){
    try {
      let task = req.params('id')
      let data = req.all()
      Task.findOneAndUpdate({'_id': task.id}, data, function(err, tasks){
        if (err){
          console.log(err)
          return res.send({message:'error', data: err})
        }
        else {
          if (tasks){ return res.send(tasks) }
          else { return res.send(null) }
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  * deleteTask(req, res){
    try {
      let task = req.params('id');
      Task.remove({'_id':task.id}, (err, del) => {
        if (err){
          console.log(err);
          return res.send({
            message: 'error',
            data: err
          })
        }
        else {
          if (del){
            return res.send({
              message: 'success',
              data: del
            })
          }
          else {
            return res.send({
              message: '404',
              data: null
            })
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  * test(req, res){
      return res.send({
          message: "Success Adonis API",
          data: null
      })
  }

  * insertCommet(req, res){
      try {
        let data = req.all()
        let comment = new Comment()
        comment.text = data.comment
        comment.save(function(err, _comment){
          if (err){
            console.log(err)
            return res.send({error:"error"})
          }
          else {
            if (_comment){ return res.send({success:"success"}) }
            else { return res.send({error:"null"}) }
          }
        })
      } catch (e) {
        console.log(e);
      }
  }

  * getCommentsCount(req, res){
      try {
          Comment.find({}, (err, comments) => {
              if (err){
                console.log(err)
                return res.send("error")
              }
              else {
                if (comments){ return res.send("" + comments.length) }
                else { return res.send("0") }
              }
          })
      } catch (e) {
        console.log(e);
      }
  }

}

module.exports = ToDoListController
