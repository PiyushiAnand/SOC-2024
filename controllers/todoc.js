const Todo= require('../models/todo');
exports.getTodos = async(req,res)  =>{
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.json({message: 'server error'});
    }
};
exports.addTodos = async(req,res)  =>{
    const newtodo=new Todo({
        title : req.body.title,
        description : req.body.description,
    })
    try { 
        await newtodo.save()
        res.status(201).json(newtodo)
    } catch (error) {
        res.json({message: error.message});
    }
};
exports.updateTodos = async(req,res)  =>{
    const {title,description,completed} = req.body;
    try {
        let t=await Todo.findById(req.params.id);
        if(!t)return res.status(404).json({message: 'Todo not found'});
        t.title=title||t.title;
        t.description=description||t.description;
        if (t.completed !== undefined) {
            t.completed = !t.completed;
        }
        await t.save();
        res.status(200).json(t);
    } catch (error) {
        res.json({message: error.message});
    }
};
exports.deleteTodos = async (req, res) => {
    const { id } = req.params;
    try {
        let t = await Todo.findById(id);
        if (!t) return res.status(404).json({ message: 'Todo not found' });

        await Todo.deleteOne({ _id: id });
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
