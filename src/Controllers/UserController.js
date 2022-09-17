const users = [
    {
        id: 1,
        name:"Marian",
        email:"nome@exemplo.com"
    }
]

class UserController {
    store(req, res){
        console.log('------------------>Cheguei'); /// Mostra no console se ele está chegando na pasta! 
        const {name, email} = req.body;

        console.log(name, email);

        if (!name || !email) {
            return res.status(200).json({ message: 'Nome e e-mail são obrigatórios... '})
        }

        const newId = users[users.length - 1].id + 1;

        const newUser = {
            id: newId,
            name: name,
            email: email
        }

        users.push(newUser);

        return res.status(200).json({message: "Usuário criado"})
    }
    
    index(req, res){
        return res.status(200).json(users);
    }

    show(req, res){
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({message: 'Id inválido...'})
        } 

        const currentUser = users.find((user) => user.id ===  parseInt(id));

        if(!currentUser) {
            return res.status(404).json({message: 'Usuário não encontrado...'})
        }

        return res.status(200).json({currentUser})
    }

    update(req, res){
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({message: 'Id inválido...'})
        } 

        const currentUserIndex = users.findIndex((user) => user.id ===  parseInt(id));

        if(currentUserIndex === -1) {
            return res.status(404).json({message: 'Usuário não encontrado...'})
        }

        users[currentUserIndex].name = req.body.name;
        users[currentUserIndex].email = req.body.email;

        return res.status(200).json({message: 'Usuário atualizado!'})
    }

    delete(){

    }
}

module.exports = new UserController();