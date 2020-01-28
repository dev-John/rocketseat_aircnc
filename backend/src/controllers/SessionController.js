//index -> Listar todas as sessões
//show -> Listar determinada sessão
//store -> Armazenar uma sessão
//update -> Atualizar uma sessão
//destroy -> Destruir uma sessão

const User = require('../models/User');

module.exports = {
    async store(req,res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}