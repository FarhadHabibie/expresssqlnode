'use strict';

var response = require('./res');
var connection = require('./conn');



exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.siswa =function(req, res){
    connection.query('SELECT * FROM siswa', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.createSiswa = function(req, res) {
    
    var id_siswa = req.body.id_siswa;
    var nama_siswa = req.body.nama_siswa;
    var alamat_siswa = req.body.alamat_siswa;
    var kelas_siswa = req.body.kelas_siswa;

    connection.query('INSERT INTO siswa (id_siswa, nama_siswa, alamat_siswa, kelas_siswa) values (?,?,?,?)',
    [ id_siswa, nama_siswa, alamat_siswa, kelas_siswa ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan siswa!", res)
        }
    });
};

exports.findSiswa = function(req, res) {
    
    var id_siswa = req.params.id_siswa;

    connection.query('SELECT * FROM siswa where id_siswa = ?',
    [ id_siswa ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateSiswa = function(req, res) {
    
    var id_siswa = req.body.id_siswa;
    var nama_siswa = req.body.nama_siswa;
    var alamat_siswa = req.body.alamat_siswa;
    var kelas_siswa = req.body.kelas_siswa;

    connection.query('UPDATE siswa SET nama_siswa = ?, kelas_siswa = ?, alamat_siswa = ? WHERE id_siswa = ?',
    [  nama_siswa, kelas_siswa, alamat_siswa, id_siswa ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteSiswa = function(req, res) {
    
    var id_siswa  = req.body.user_id;

    connection.query('DELETE FROM siswa WHERE id_siswa = ?',
    [ id_siswa ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};