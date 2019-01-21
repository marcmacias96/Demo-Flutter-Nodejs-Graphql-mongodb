module.exports = app => {
    //Este script ser encarga de arrancar el servidor
    app.listen(app.get('port'), () => {
        console.log(`Server on port : ${app.get('port')}`);
        
    })
}