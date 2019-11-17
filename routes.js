'use strict';

module.exports = function(app) {
    var todoList = require('./controller');
    

    app.route('/')
        .get(todoList.index);

    app.route('/siswa')
        .get(todoList.siswa);

    app.route('/siswa')
        .post(todoList.createSiswa);

    app.route('/siswa/:id_siswa')
        .get(todoList.findSiswa);

    app.route('/siswa')
        .put(todoList.updateSiswa);    
    
    app.route('/siswa')
        .delete(todoList.deleteSiswa);


};
