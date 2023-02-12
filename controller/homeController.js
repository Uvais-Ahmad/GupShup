module.exports.home = ( req , res ) =>{
    return res.render('home');
}

module.exports.chatUI = ( req , res ) => {
    return res.render('chatBox')
}